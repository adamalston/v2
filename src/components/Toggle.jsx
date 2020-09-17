import React, { Component, useEffect } from 'react';
import usePersistentState from './../hooks/PersistentState';
import { Moon, Sun } from './../assets/icons'

const Theme = () => {
    const [isDark, setIsDark] = usePersistentState('theme', true); // default to dark mode

    useEffect(() => {
        isDark ?
            document.documentElement.classList.add('other') :
            document.documentElement.classList.remove('other')
    });

    return (
        <div>
            <main>
                <input id='toggle' name='toggle' type='checkbox' checked={isDark} onChange={event => setIsDark(event.target.checked)} />
                <label htmlFor='toggle' className='switch' id='switch'>
                    {isDark ? <Moon /> : <Sun />}
                </label>
            </main>
        </div>
    )
}

class Toggle extends Component {
    render() {
        return (
            <Theme />
        );
    }
}

export default Toggle;
