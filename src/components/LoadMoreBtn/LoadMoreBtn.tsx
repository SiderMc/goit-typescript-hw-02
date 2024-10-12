import { LoadMoreBtnProps } from '../../interfaces/props';
import css from './LoadMoreBtn.module.css';

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ loadMore }) =>  {
  return (
    <div className={css.load__action}>
      <button type="button" className={css.load__more_btn} onClick={loadMore}>
        Load More
      </button>
    </div>
  );
}

export default LoadMoreBtn