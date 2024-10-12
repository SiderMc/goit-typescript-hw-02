import { FC } from 'react';
import css from './ImageCard.module.css';
import { ImageCardProps } from '../../interfaces/props';

const ImageCard: FC<ImageCardProps> = ({
  card: { small, regular, alt_description },
  openModal,
}) => {
  const handleModal = () :void => {
    openModal(regular, alt_description);
  };
  return (
    <img
      onClick={handleModal}
      loading="lazy"
      src={small}
      alt={alt_description}
      className={css.gallery__list_image}
    />
  );
};

export default ImageCard;
