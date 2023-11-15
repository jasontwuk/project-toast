import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setvariant] = React.useState(VARIANT_OPTIONS[0]);

  const [toastList, setToastList] = React.useState([]);

  const handleAddToast = (e) => {
    e.preventDefault();

    const nextToastList = [
      ...toastList, 
      {
        id: crypto.randomUUID(),
        variant: variant,
        message: message,
      }
    ]

    setToastList(nextToastList);
    
    // Note: reset to default values
    setMessage("");
    setvariant(VARIANT_OPTIONS[0]);
  }

  const handleRemoveToast = (id) => {
    const nextToastList = toastList.filter((toast) => {
      return toast.id !== id;
    });
    
    setToastList(nextToastList);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toastList={toastList} handleRemoveToast={handleRemoveToast} />
      
      <form className={styles.controlsWrapper} onSubmit={(e) => handleAddToast(e)}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={(e) => {setMessage(e.target.value)}} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option) => {
              const id = `variant-${option}`;

              return (
                <label htmlFor={id} key={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={variant === option}
                    onChange={(e) => setvariant(e.target.value)}
                  />
                  {option}
                </label>
              )
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
