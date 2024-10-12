import 'modern-normalize';
import dataPhotos from '../../Services/gallery-api';
import css from './App.module.css';
import { useEffect, useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';
import { Photos } from '../../interfaces/photos-response';

const  App = () => {
  const [value, setValue] = useState<string>('');
  const [photos, setPhotos] = useState<Photos[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loader, setLoader] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [imageDesc, setImageDesc] = useState<string>('');

  const inputQuery = (query: string): void => {
    setPhotos([]);
    setPage(1);
    setValue(query);
  };
  useEffect(() => {
    if (value === '') {
      return;
    }
    const responseData = async (): Promise<void> => {
      try {
        setIsError(false);
        setLoader(true);
        const { results, total } = await dataPhotos(page, value);
        setTotalPages(Math.ceil(total / 15));
        return setPhotos(prevPhotos => [...prevPhotos, ...results]);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setLoader(false);
      }
    };
    responseData();
  }, [value, page]);

  const loadMore = (): void => {
    setPage(page + 1);
  };

  const openModal = (imageUrl: string, description: string): void => {
    setShowModal(true);
    setImageUrl(imageUrl);
    setImageDesc(description);
  };
  const closeModal = (): void => {
    setShowModal(false);
  };
  return (
    <div className={css.wrapper}>
      {loader && <Loader />}
      <header className={css.header}>
        <div className={css.container}>
          <div className={css.header__search}>
            <SearchBar onSearch={inputQuery} />
          </div>
        </div>
      </header>
      {photos.length !== 0 && (
        <section className={css.section}>
          <div className={css.container}>
            <ImageGallery photos={photos} openModal={openModal} />
            <ImageModal
              isOpen={showModal}
              closeModal={closeModal}
              image={{ imageUrl, imageDesc }}
            />
            {!loader && page < totalPages && (
              <LoadMoreBtn loadMore={loadMore} />
            )}
          </div>
        </section>
      )}
      {isError && (
        <section className={css.section}>
          <div className={css.container}>
            <ErrorMessage />
          </div>
        </section>
      )}
    </div>
  );
}


export default App