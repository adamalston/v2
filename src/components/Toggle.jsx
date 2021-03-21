import React, { useEffect } from 'react';
import usePersistentState from '../hooks/PersistentState';
import { Moon, Sun } from '../icons';

export const Toggle = () => {
  const [isDark, setIsDark] = usePersistentState('theme', true);

  useEffect(() => {
    isDark ? document.documentElement.classList.remove('other') : document.documentElement.classList.add('other');
  });

  return (
    <div>
      <main>
        <input id='toggle' name='toggle' type='checkbox' checked={isDark} onChange={(e) => setIsDark(e.target.checked)} />
        <label htmlFor='toggle' className='switch' id='switch'>
          {isDark ? <Moon /> : <Sun />}
        </label>
      </main>
    </div>
  );
};
