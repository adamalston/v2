import React from 'react';

export default function usePersistentState(key, defaultValue) {
    const [state, setState] = React.useState(() => {
        const persistentState = localStorage.getItem(key);
        return persistentState ? JSON.parse(persistentState) : defaultValue;
    });
    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);
    return [state, setState];
}