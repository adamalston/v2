import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className='name' aria-label='My name is Adam Alston'>Adam Alston</h1>
                <h2 className='title' aria-label='Let It Snow!'>Let It Snow!</h2>
            </div>
        )
    }
}

export default Content;
