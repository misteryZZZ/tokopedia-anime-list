import React from 'react';
import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const Wrapper = styled.div`
        width:100%;
        height: 5rem;
        background-color: rgba(242, 242, 242, 0.05);
        display: flex;
        justify-content: center;
        align-items: center;
    `

    const WrapperContainer = styled.div`
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `

    const StyledBrandLink = styled(NavLink)`
        color: #f3f7eb;
        font-weight: 500;
        font-family: 'Nunito Sans', sans-serif;
        padding: 10px;
        &:hover {
            color: #f0abfc;
        }
    `

    const StyledNavLink = styled(NavLink)`
        color: #f3f7eb;
        font-size: 1rem; 
        font-family: 'Nunito Sans', sans-serif;
        border: 1px solid #55417b;
        padding: 10px;
        border-radius: 20px;
        transition: 0.3s;
        &:hover {
            color: #f0abfc;
            background-color: #55417b;
        }
        &.active{
            background-color: #55417b;
            color: #f0abfc;
        }
    `

  return (
    <Wrapper>
        <WrapperContainer>
            <StyledBrandLink to='/'>
                MyAnimeList    
            </StyledBrandLink>
            <StyledNavLink to={`/anime-collections`}>
                My Collections
            </StyledNavLink>
        </WrapperContainer>
    </Wrapper>
  )
}

export default Header