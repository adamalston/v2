import React, { Component, useEffect } from "react";

import usePersistentState from '../hooks/PersistentState';
import Moon from './../assets/icons/Moon'
import Sun from './../assets/icons/Sun'

const Toggle = () => {
    const [isDark, setIsDark] = usePersistentState('theme', true); // default to dark mode

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('other');
        } else {
            document.documentElement.classList.remove('other');
        }
    });

    return (
        <div>
            <main>
                <input id="toggle" name="toggle" type="checkbox" checked={isDark} onChange={event => setIsDark(event.target.checked)} />
                <label htmlFor="toggle" className="switch" id="switch">
                    {isDark ? <Moon /> : <Sun />}
                </label>
            </main>
        </div>
    )
}

class ThemeToggle extends Component {
    render() {
        return (
            <Toggle />
        );
    }
}

export default ThemeToggle;
