import { Photos } from "./photos-response";

export interface ModalProps{
    isOpen:boolean,
    closeModal:()=>void
    image: {
        imageUrl: string;
        imageDesc: string;
      };
}

export interface OnSearchProps{
  onSearch: (query: string) => void;
}

export interface LoadMoreBtnProps {
  loadMore: () => void;
}

export interface ImageGalleryProps {
  photos: Photos[]; 
  openModal: (imageUrl: string, description: string) => void; 
}


export interface ImageCardProps {
  card: {
    small: string; 
    regular: string; 
    alt_description: string; 
  };
  openModal: (imageUrl: string, description: string) => void;
}
