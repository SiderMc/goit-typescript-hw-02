import Modal from 'react-modal';
import { IoClose } from 'react-icons/io5';
import css from './ImageModal.module.css';
import { ModalProps } from '../../interfaces/props';
import { FC } from 'react';


Modal.setAppElement('#root');

export  const ImageModal: FC<ModalProps> = ({isOpen,closeModal,image: { imageUrl, imageDesc },
}:ModalProps) =>{
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={css.modal}
      overlayClassName={css.overlay}
      contentLabel="Image Modal">
      <div className={css.modal__content}>
        <button type="button" className={css.close__modal} onClick={closeModal}>
          <IoClose className={css.icon} />
        </button>
        <img src={imageUrl} alt={imageDesc} className={css.modal__image} />
      </div>
    </Modal>
  );
}


export default ImageModal