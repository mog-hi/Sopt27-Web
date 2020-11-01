import './App.css';
import React, {useEffect, useState} from "react";

function App_2() {
  const [old, setOld] = useState(23);

  useEffect(()=>{
    // state값이 바뀔 때 마다 실행된다. 
    console.log("컴포넌트가 마운트가 됐어!!");
    // 만약에 이 콜백함수 안에 api를 호출해달라는 얘기였어
    // 그럼 그 api에 관련된 state가 변경됐을 때만 사용되면 되잖아. 
    // 그걸 위해서 뒤에 array 파라미터를 조정해주는거야 
    // 뒤 array에 담긴 데이터가 바뀔 때만 실행해줘
  }, []);
  
  return(
    <>
      <div>제 나이는 {old}입니다.</div>
      <button onClick={()=> setOld(old+1)}>떡꾹 꿀꺽</button>
    </>
  );
}

export default App_2;
