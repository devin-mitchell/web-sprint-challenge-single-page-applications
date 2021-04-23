import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
    display:flex;
    justify-content: space-between;
    align-items: center;
    color: red;
    height: 20%;
    border: solid 1px gray;

    h1{
        margin-left: 3%;
    }


`
const Div = styled.div`
    display: flex;
    margin-right: 15%;
    height: 200%;
    background-color:gray;

   .navLinks {
        text-decoration: none;
        color: red;
        background-color: white;
        font-size: .9rem;
        padding: 7% 50%;
        border: 1px solid black;

        &:hover{
            background-color: red;
            color: white;
        }
   }
`

export default function NavBar() {
    return (
        <Nav>
            <h1>Lambda Eats</h1>
            <Div>
                <Link to={'/'} class='navLinks'>
                    <div>Home</div>
                </Link>
                <Link to={'/pizza'} class='navLinks'>
                    <div>Help</div>
                </Link>
            </Div>
        </Nav>
    )
}
