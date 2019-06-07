import React, { Component } from 'react';

export default class Example3  extends Component {

    state = {
        cards : ['A','clover','heart']
    };

    render() {
        const cardList = this.state.cards.map((card, i)=> (
            <li key={i}>{card}</li>
        ))
        return (
            <>
                <div>
                    <ul>
                        <li>배열 함수 사용</li>
                        <li>{cardList}</li>
                    </ul>
                    <ul>
                        <li>{this.props.data3}</li>
                    </ul>
                </div>
            </>
        );
    }
}