import React from 'react'
import styled from 'styled-components'



const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 33%;
    margin-bottom: 10%;
    color: gray;

    h4{
        font-size: 1.3rem;
        color: black;
        margin-bottom: 3%;
    }
`


export default function RestaurantCard({ card }) {
   
    return (
            <Card>
                <h4>- {card.name} -</h4>
                <p>{card.description}</p>               
                <p>{card.time}</p>
                <p>{card.Fee}</p>    
            </Card>
        
    )
}
