import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toastList } = React.useContext(ToastContext);
  
  return (
    <ol 
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastList.map((toast) => {
          return (
            <li className={styles.toastWrapper} key={toast.id}>
              <Toast 
                variant={toast.variant} 
                id={toast.id} 
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
