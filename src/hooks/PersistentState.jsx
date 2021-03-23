import { useEffect, useState } from 'react';

const usePersistentState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const persistentState = localStorage.getItem(key);
    return persistentState ? JSON.parse(persistentState) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export default usePersistentState;
