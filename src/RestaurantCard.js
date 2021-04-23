import React from 'react'


export default function RestaurantCard({ card }) {
   
    return (
        <>
            <h4>{card.name}</h4>
            <p>{card.description}</p>
            <div>
                <p>{card.time}</p>
                <p>{card.Fee}</p>
            </div>
        </>
    )
}
