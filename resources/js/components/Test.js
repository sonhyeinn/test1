import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Test extends Component {
    //클래스
    state = {
        //기본초
        sec : 0,
        //버튼 기본 상태
        buttonState :true,
        //반복함수는 지정해두지 않는다
        intervalFunction : null
    };
    //스톱 워치 기능
    stoptimer = () => {
        //위의 기본 초값을 할당하고 +1 증가하는 기능 만든다
        this.setState(({sec}) => ({
            sec : sec +1
        }));
    };
    //시작 버튼 클릭
    startbtn = () => {
        //시작 버튼 클릭시 타이머가 작동되고 값을 할당하는 반복함수를 실행한다 (limit 1000초)
        this.setState({
           sec : 0,
           buttonState:false,
           intervalFunction : setInterval(this.stoptimer, 1000)
        });
    };
    //정지 버튼 클릭
    stopbtn = () => {
        //정지 버튼 클릭시 타이머가 멈추고 값을 할당하는 반복함수를 정지한다 (초기화)
         clearInterval(this.state.intervalFunction);
         this.setState({
             buttonState :true
         });
    };

    render() {
        return (
            <>
                <div>
                    스톱워치를 만들어보았습니다
                    라이프 사이클 개념을 잡기 위해서 진행되는 과정도 확인해 보았습니다
                </div>
                <div>
                    <span>{this.state.sec}</span><span>초</span>
                    {this.state.buttonState? (
                        <button onClick={this.startbtn}>시작</button>
                        ):(
                        <button onClick={this.stopbtn}>정지</button>
                        )
                    }
                </div>
            </>
        );
    }
}
export default Test;
ReactDOM.render(<Test/>, document.getElementById('bar_react'));