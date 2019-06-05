import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Test extends Component {
    //클래스
    state = {
        //기본초
        sec : 0,
        //버튼 기본 상태 (정지,시작 상태를 확인하기 위해서 지정 if 로 조건 확인 할수있으나 현재는 하지 않음)
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
    //라이프 사이클 추적
    //1.생성될때 mounting
    constructor(props){
        //생성자 내부에서 다른 함수 호출 시에 오류 방지 (부모자)
        super(props);
        //오류확인 값 없음
        //this.state = { hasError: false };
        console.log("constructor 실행");
    }
    //오류값이 있을경우 작성한 ui 를 도출시킨다
    /*static getDerivedStateFromError(error) {
        return { hasError: true };
    }*/
    //오류값이 있을경우 오류와 정보를 도출 시킨다
    //로깅 오류시에 보통 사용
    /*componentDidCatch(error, info) {
        logComponentStackToMyService(info.componentStack);
    }

     */

    //1-2.마운팅 발생 직전 호출
    componentWillMount() {
        console.log("componentWillMount 실행");
    }
    //2. 렌더링 후 기존 상태와 현재 상태 및 출력값 동일,비동일 여부 확인
    //props와 state 값을 하나로 관리함 업데이트 조건 확인하기 위해서
    //시작값 0이 짝수에 개념에 포함되므로 if 조건절로 데이터 변경 여부 확인,데이터 변경된 경우 계속 진행
    //짝수값일 경우 렌더링 실행 안함(화면에 안보임),홀수값일 경우 렌더링 실행(화면에 보임)
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate 실행");
        if(nextState.sec % 2 === 0){
            console.log('렌더링 된 값이 없습니다');
            return false;
        }
        console.log(nextState.sec);
        return true;
    }
    //3.마운트 됨
    componentDidMount() {
        console.log("componentDidMount 실행");
    }

    //4.업데이트 됨

    componentDidUpdate() {
        console.log("componentDidUpdate 실행");
    }

    //5.제거됨
    componentWillUnmount() {
        console.log("componentWillUnmount 실행");
    }

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
        if (this.state.hasError) {
            return (
                <div>
                    오류가 확인 되었습니다.
                </div>
            )
        } else {
            return (
                <>
                    <div>
                        스톱워치를 만들어보았습니다
                        라이프 사이클 개념을 잡기 위해서 진행되는 과정도 확인해 보았습니다
                    </div>
                    <div>
                        <span>{this.state.sec}</span><span>초</span>
                        {this.state.buttonState ? (
                            <button onClick={this.startbtn}>시작</button>
                        ) : (
                            <button onClick={this.stopbtn}>정지</button>
                        )
                        }
                    </div>
                </>
            );
        }
    }
}
export default Test;
//위의 렌더된 형태를 bar_react 라는 이름으로 전달 (to test.blade.php)
ReactDOM.render(<Test/>, document.getElementById('bar_react'));