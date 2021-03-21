import React, { useEffect } from 'react';
import { Moon, Sun } from '../icons';

export const Toggle = ({ isDark, setIsDark }) => {
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
