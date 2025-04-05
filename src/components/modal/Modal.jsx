import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';

const Modal = ({
  isOpen,
  onClose,
  title,
  img,
  price,
  oldprice,
  rate,
  description,
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <span className={styles.close} onClick={onClose}>
          ×
        </span>
        <h2>{title}</h2>
        <img
          src={img}
          alt={title}
          style={{ maxWidth: '200px', maxHeight: '200px' }}
        />

        <div className={styles.label_value}>
          <div className={styles.label}>Цена:</div>
          <div className={styles.value}>{price + ' \u20BD'}</div>
        </div>

        {oldprice && (
          <>
            <div className={styles.label_value}>
              <div className={styles.label}>Старая цена:</div>
              <div className={styles.value}>{oldprice + ' \u20BD'}</div>
            </div>
          </>
        )}

        <div className={styles.label_value}>
          <div className={styles.label}>Рейтинг:</div>
          <div className={styles.value}>{rate}</div>
        </div>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>,
    document.body // Рендерим модальное окно прямо в body
  );
};

export default Modal;
