import React from 'react';

function SearchInput({onSubmit}) {
    const [input, setInput] = React.useState('');
    // onSubmit(username); // getUser가 실행되는 것과 의미가 같다 
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(input);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Github 프로필을 검색해보세요" value={input} onChange={handleChange}/>
        </form>
    );
}

export default SearchInput;