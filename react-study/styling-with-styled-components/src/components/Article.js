import React from 'react';
import styled from 'styled-components';
import Button from './Button';
const MainContent = styled.div`
    background-color: ${props => props.theme.regalBlue};
    flex: 1;
    padding: 10px;
    color: white;
`
const Sidebar = styled.div`
    background-color: ${props => props.theme.dimGray};
    flex: 0 auto;
    width: 200px;
    padding: 10px;
    color: white;
`
const Wrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
`

const Article = () => {
  return <Wrapper> 
      <MainContent>
          <p>Main Content</p>
          <p><Button/></p>
      </MainContent>
      <Sidebar>
          <p>Sidebar</p>
      </Sidebar>
  </Wrapper>
}

export default Article;