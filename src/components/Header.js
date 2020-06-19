import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


export default class Header extends Component{
    render(){
        return(
            <Nav>
                <HeaderBar>
                    <NavBrand>InstaPaint</NavBrand>

                    <NavSearch>
                        <Input type='text' placeholder='Search'/>
                    </NavSearch>

                    <NavIcons>

                    
                        <li>
                            <Link to="/" className='nav-link'>Home</Link>
                        </li>
                        <li>
                            <Link to="/profile" className='nav-link'>Profile</Link>
                        </li>
                    
                    
                    </NavIcons>
                </HeaderBar>
            </Nav>
               
        )
    }
}

const Nav = styled.div`
background-color #fff;
border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
display: flex; 
justify-content: center;
position:fixed;
top: 0;
z-index: 2;
-webkit-transiton: height 0.2s ease-in-out;
transition: height 0.2s ease-in-out;
width: 100%;

`;

const HeaderBar = styled.nav`
    background-color #fff;
   display: flex;
   flex-flow: row no-wrap;
   justify-content: space-between;
   align-items:center;
   height: 8vh;
   width: 100%;
   max-width: 1010px;
   padding: 20px 26px;
 `;

const NavIcons = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    
       
    .nav-link{
        text-decoration: none;
        color: black;
        margin-left: 15px;
        font-weight:bold;
        }
    `;

const NavBrand = styled.div`

    text-align: left;
    color: black;
    font-weight: bold;
    font-size: 1.5rem; 
    font-family: sans-serif;
    `;

const NavSearch = styled.div`
    width: 33.333%
    text-align: center;
`;

const Input = styled.input`
    font-size: 16px;
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    color: #262626;
    padding: 4px 33px;
    color: #999;
    cursor: text;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    background: #fafafa;
    
    &:active,
    &:focus {
        text-align: left;
    }`;



