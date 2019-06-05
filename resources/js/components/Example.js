import React, { Component } from 'react';
import Example2 from "./Example2";


export default class Example extends Component {
    render() {

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">

                            <div className="card-header">Example Component</div>
                            <div className="card-body">I'm an example component!</div>
                            <div className="card-header">첫번째 자식입니다</div>
                            {this.props.data}
                            <Example2 data2={this.props.data} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

