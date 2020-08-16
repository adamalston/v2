import React, { Component, useEffect } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
// import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import usePersistantState from '../hooks/PersistantState';
import registerIcons from './FontAwesome';

registerIcons();

// const DARK_CLASS = "dark";

const DarkToggle = () => {
    // const systemPrefersDark = useMediaQuery(
    //     {
    //         query: "(prefers-color-scheme: dark)"
    //     },
    //     undefined,
    //     prefersDark => {
    //         setIsDark(prefersDark);
    //     }
    // );
    // const [isDark, setIsDark] = useState(systemPrefersDark);

    const [isDark, setIsDark] = usePersistantState('theme', undefined);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('other');
        } else {
            document.documentElement.classList.remove('other');
        }
    }, [isDark]);

    return (
        <div className="toggle-container">
            <Toggle
                className="toggle"
                checked={isDark}
                onChange={event => setIsDark(event.target.checked)}
                icons={{
                    checked: <FontAwesomeIcon icon={["far", "sun"]} style={{ color: "#F39C12" }} />,
                    unchecked: <FontAwesomeIcon icon={["far", "moon"]} style={{ color: "#F1C40F" }} />
                }}
                aria-label="Dark mode"
            />
        </div>
    );
};

class ThemeToggle extends Component {
    render() {
        return (
            <DarkToggle />
        );
    }
}

export default ThemeToggle;