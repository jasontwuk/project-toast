import React, { Children } from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {

  const [toastList, setToastList] = React.useState([]);

  const handleAddToast = (message, variant) => {
    const nextToastList = [
      ...toastList, 
      {
        id: crypto.randomUUID(),
        variant: variant,
        message: message,
      }
    ]

    setToastList(nextToastList);
  }

  const handleRemoveToast = (id) => {
    const nextToastList = toastList.filter((toast) => {
      return toast.id !== id;
    });
    
    setToastList(nextToastList);
  }

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if(e.code === "Escape") {
        setToastList([]);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(handleKeyDown);
    }
  }, []);

  return (
    <ToastContext.Provider value={{ toastList, handleAddToast, handleRemoveToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
