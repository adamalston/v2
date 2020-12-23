import React, { Component, useEffect } from 'react';
import usePersistentState from './../hooks/PersistentState';
import { Tree, CandyCane } from './../icons'

const Theme = () => {
    const [isTree, setIsTree] = usePersistentState('theme', true); // default to Tree mode

    useEffect(() => {
        isTree ?
            document.documentElement.classList.add('other') :
            document.documentElement.classList.remove('other')
    });

    return (
        <div>
            <main>
                <input id='toggle' name='toggle' type='checkbox' checked={isTree} onChange={event => setIsTree(event.target.checked)} />
                <label htmlFor='toggle' className='switch' id='switch'>
                    {isTree ? <CandyCane /> : <Tree />}
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
