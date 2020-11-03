import './App.css';

// App도 하나의 컴포넌트다 
function App_1() {
  const part = "Web";
  const style = {
    color: "red",
    backgroundColor:"black"
  }
  const a = 1;

  // 아래에서 선언한 컴포넌트들은 다 App의 자식 컴포넌트 이다. 부모의 return에서 자식 컴포넌트를 사용한다.
  // 끌고 와서 사용하는 애 : 부모 / 다른 컴포넌트 에서 사용당하는 애 : 자식 
  // 컴포넌트 선언 (지금보니 return이 엘리먼트 라는거 빼고 그냥 사용자 지정 함수와 다를거 없군) - 지금까지는 컴포넌트를 따로 파일로 분리했는데 여기서는 그냥 써줌 
  const Myname = (props) => {
    // props는 컴포넌트를 리턴할 때 담는 값
    return <dib>내 이름은 {props.name} 내 나이 {props.age}</dib>;
  }
  const Yourname = ({name, age}) => { // 이렇게 비구조화 할당으로도 props사용 가능 
    return <dib>네 이름은 {name} 네 나이 {age}</dib>;
  }
  const name = "주희다 이놈아";
  const age = 23;

  return (
    // html코드에서는 class지정을 class="클래스명"로 하지만, jsx에서는 className="클래스명"
    // style 지정은 아래처럼
    // 최상위에는 단 하나의 엘리먼트만 존재해야 한다. 
    <>
      {/* <h1 className="head-next" style={style}>Sopt {part}</h1>  */}
      {a===1 ? <h1 className="head-next" style={style}>Sopt {part}</h1> : <h1 >Sopt {part}</h1> }
      <Myname name={name} age={age}/>
      <Yourname name={name} age={age}/>
    </>
  );
}

export default App_1;
