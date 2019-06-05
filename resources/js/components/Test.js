import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Test extends Component {
    render() {
        return (
            <div>
             안녕하세요
            </div>
        );
    }
}

export default Test;
ReactDOM.render(<Test/>, document.getElementById('bar_react'));