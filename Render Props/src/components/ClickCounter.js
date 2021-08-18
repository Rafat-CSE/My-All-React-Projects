import React, { Component } from 'react';

export default class ClickCounter extends Component {
   
    render() {
        const {count, incrementHandler} = this.props;
        return (
            <div>
                <button type="button" onClick={incrementHandler}>It's click {count} time</button>
            </div>
        )
    }
}
