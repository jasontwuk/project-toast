import React from 'react';

const useKeydown = (key, callback) => {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === key) {
        callback(e)
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, callback]);
}

export default useKeydown;