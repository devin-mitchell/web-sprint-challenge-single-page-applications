import React from 'react';
import styled from 'styled-components';
import Pizza from './Pizza.jpg';
import RestaurantCard from './RestaurantCard';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'


const BkdImg = styled.div`
    background-image: url(${Pizza});
    height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
    
    h2 {
        font-size: 3rem;
        width: 80%;
        margin: 0 0 5%;
    }
`

const Button = styled.button`
    font-size: 1.5rem;
    opacity: .6;
    background-color: white;
    transition: all 300ms ease-in-out;
    border-radius: 10px;
    padding: 5% 40%;

    &:hover {
        background-color: lightgreen;
        opacity: 1;
        transform: scale(1.2);
        
    }
`

export default function Home({ cardData }) {
    
    return (
        <>
            <NavBar />
            <BkdImg class='home-main'>
                <h2>Your favorite food, delivered while coding</h2>
                <Link to='/pizza'>
                    <Button id='order-pizza'>Pizza?</Button>     
                </Link>         
            </BkdImg>
            <div class='home-cards'>
                <h3>Food Delivery in gotham City</h3>
                <div>
                    {cardData.map((card, index) => {
                        return(
                            <div>
                                <RestaurantCard card={card} key={index} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
