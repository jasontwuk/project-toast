import React from 'react';

import useKeydown from '../../hooks/use-keydown';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {

  const [toastList, setToastList] = React.useState([]);

  const handleEscape = React.useCallback (() => {
    setToastList([]);
  }, []);
  
  useKeydown('Escape', handleEscape);

  const handleAddToast = (message, variant) => {
    const nextToastList = [
      ...toastList, 
      {
        id: crypto.randomUUID(),
        variant: variant,
        message: message,
      }
    ];

    setToastList(nextToastList);
  }

  const handleRemoveToast = (id) => {
    const nextToastList = toastList.filter((toast) => {
      return toast.id !== id;
    });
    
    setToastList(nextToastList);
  }

  return (
    <ToastContext.Provider value={{ toastList, handleAddToast, handleRemoveToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
