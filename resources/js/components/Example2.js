import React, { Component } from 'react';

export default class Example2 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">2번째 자식입니다 </div>
                            {this.props.data2}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

