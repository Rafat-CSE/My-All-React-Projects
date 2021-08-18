import React, { Component } from 'react';

export default class HoverCounter extends Component {
  
    render() {
        const {count, incrementHandler} = this.props;
        return (
            <div>
                <h1 onMouseOver={incrementHandler}>It's hover {count} time</h1>
            </div>
        )
    }
}
