import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Example from "./Example";
import Example3 from "./Example3";

class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            //기본초 값 지정
            sec : 0,
            //버튼 기본 상태 (정지,시작 상태를 확인하기 위해서 지정 if 로 조건 확인 할수있으나 현재는 하지 않음)
            buttonState :true,
            //반복함수는 지정해두지 않는다
            intervalFunction : null,
            //버튼 클릭시 나타나는 문구
            keyword : ''
        }
    }

    stoptimer = () => {
        this.setState({
            //위의 기본 초값을 할당하고 +1 증가하는 기능 만든다
            sec : this.state.sec + 1
        })
    };
    startbtn = () => {
        //시작 버튼 클릭시 타이머가 작동되고 값을 할당하는 반복함수를 실행한다
        this.setState({
            sec : 0,
            buttonState:false,
            intervalFunction : setInterval(this.stoptimer, 1000)
        });
        //버튼 클릭시 시작 문구가 동시에 실행된다
        this.inputkeyword();
    };
    stopbtn = () => {
        //정지 버튼 클릭시 타이머가 멈추고 값을 할당하는 반복함수를 정지한다 (초기화)
        clearInterval(this.state.intervalFunction);
        this.setState({
            buttonState :true
        });
        //버튼 클릭시 정지 문구가 동시에 실행된다
        this.inputkeyword();
    };
    //버튼 클릭시 변화되는 화면 정보
    inputkeyword = () => {
        this.setState({
            keyword : ((this.state.buttonState) ? '타이머가 시작됩니다': '타이머가 정지됩니다'),
        });
    }

    render() {
        return (
            <>
                <div>
                    테스트 화면 메인입니다
                    3개이상의 컴포넌트 사용
                    부모자식 관계를 사용하고
                    화면 갱신 변화로 스톱워치를 만들어보았습니다
                </div>
                <Example data = "부모 관계에서 부터 데이터를 보냅니다1" />
                <Example3 data3 = "부모 관계에서 부터 데이터를 보냅니다2" />
                <div>
                    <span>스톱워치</span>
                    <br/>
                    <span>{this.state.sec}</span><span>초</span>
                    {this.state.buttonState ? (
                        <button onClick={() => {this.startbtn()}}>시작</button>
                    ) : (
                        <button onClick={() => {this.stopbtn() }}>정지</button>
                    )
                    }
                    {this.state.keyword}
                </div>
            </>

        );
    }
}

export default Test;
ReactDOM.render(<Test/>, document.getElementById('bar_react'));