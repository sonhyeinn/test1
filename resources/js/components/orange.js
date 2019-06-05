import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {

    constructor(props) {
        super(props);
        this.bar = [1, 2, 3];
    }


    render() {

        const t2 = this.bar.map(b => (
            <div>반복 {b}</div>
        ));

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>
                            { this.props.node }
                            { t2 }
                            <div className="card-body">I'm an example component!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
