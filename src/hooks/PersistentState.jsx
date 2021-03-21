import React from 'react';

const usePersistentState = (key, defaultValue) => {
  const [state, setState] = React.useState(() => {
    const persistentState = localStorage.getItem(key);

    return persistentState ? JSON.parse(persistentState) : defaultValue;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, setState];
};

export default usePersistentState;
