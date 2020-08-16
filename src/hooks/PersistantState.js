import React from 'react';

export default function usePersistantState(key, defaultValue) {
    const [state, setState] = React.useState(() => {
        const persistantState = localStorage.getItem(key);
        return persistantState ? JSON.parse(persistantState) : defaultValue;
    });
    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);
    return [state, setState];
}