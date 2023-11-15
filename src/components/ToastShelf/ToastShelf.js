import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toastList, handleRemoveToast}) {
  
  return (
    <ol className={styles.wrapper}>
      {toastList.map((toast) => {
          return (
            <li className={styles.toastWrapper} key={toast.id}>
              <Toast 
                variant={toast.variant} 
                id={toast.id} 
                handleRemoveToast={handleRemoveToast}
              >
                {toast.message}
              </Toast>
            </li>
          )
        }
      )}
    </ol>
  );
}

export default ToastShelf;
