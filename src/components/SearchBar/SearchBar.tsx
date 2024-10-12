import { GrSearch } from 'react-icons/gr';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';
import { FC, FormEvent } from 'react';
import { OnSearchProps } from '../../interfaces/props';

const SearchBar:FC<OnSearchProps> =  ({ onSearch }) => {
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const query = (
      form.elements.namedItem('search') as HTMLInputElement
    ).value.trim();
    if (!query) {
      return toast.error('The search field cannot be empty.');
    } else if (query.length < 2) {
      return toast.error('Search query must be at least 2 characters long');
    }
    onSearch(query);
    form.reset();
  };

  return (
    <>
      <form
        className={css.search__form}
        onSubmit={handleSearch}
        aria-label="Search">
        <div className={css.form__block}>
          <input
            type="text"
            name="search"
            placeholder="Find photos"
            autoComplete="off"
            className={css.search__input}
          />
          <button type="submit" className={css.btn}>
            <GrSearch />
          </button>
        </div>
      </form>
      <Toaster position="top-right" />
    </>
  );
};

export default SearchBar;
