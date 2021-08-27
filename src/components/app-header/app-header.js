import React from 'react';
import './app-header.css'
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    color: ${props => props.colored ? 'red' : 'black'};
  }
  h2 {
    font-size: 1.2rem;
    color: blue;
    :hover {
      cursor: pointer;
      color: purple;
    }
  }
`

const AppHeader = ({liked, allPosts}) => {
  return (
    // <Header as="a"> если нужно превратить 'div' в 'a'
    <Header colored>
      <h1>Name Surename</h1>
      <h2>{allPosts} записей, из них понравилось {liked}</h2>
    </Header>
   /*  <div className="app-header d-flex">
      <h1>Name Surename</h1>
      <h2>5 записей, из них понравилось 0</h2>
    </div> */
  )
}

export default AppHeader;