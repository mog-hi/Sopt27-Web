import './App.css';
import React, {useEffect, useState} from "react";
import SearchInput from './components/SearchInput';
import SearchResult from './components/SearchResult';
import {getUserAPI} from './lib/api';
// SearchInput에서는 검색어를 입력받고
// SearchResult에서는 검색해서 나온 결과를 보여줄거야!
// 그러면 axios를 어디서?
// axios 호출할때 SearchInput에서 받은 입력값이 필요하고, axios 결과값을 SearchResult로 보내줘야돼!
// -> 즉 SearchInput과 SearchResult를 연결해줄 수 있는 부모 컴포넌트 GitprofileFinder에서 해줘야한다! 

function GitprofileFinder() {
    const [userState, setUserState] = useState({
        state: null,
        user: null
    });

    // getUserAPI에서 예외처리 해주기
    const getUser = async(username)=>{
        setUserState({
            state: "pending",
            user: userState.user
        })
        try {
            let data = await getUserAPI(username);
            setUserState({state: "resolved", user: data});
        } catch(err) {
            setUserState({state: "rejected", user: null});
        }
    }
    useEffect(() => {
        getUser("Hyun-juhee");
    }, []);

    // 자식컴포넌트에서 부모 컴포넌트의 state값을 변경해야 할때 아래처럼 아야 함수를 전달한다. 
    return(
        <>
            <SearchInput onSubmit={getUser}/>
            {/* api접근하는게 비동기라 user에 아직 null */}
            <SearchResult userState={userState}/>
        </>
    );
}
export default GitprofileFinder;
