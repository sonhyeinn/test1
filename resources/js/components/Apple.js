import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Example from "./Example";

class Apple extends Component {



    render() { //console.log(this.props.item);
        return (
            <div>
                <Example node={this.props.item} />
                { this.props.item }
                오류 테스팅
            </div>
        );
    }
}

export default Apple;
//ReactDOM.render(<Apple/>, document.getElementById('apple'));