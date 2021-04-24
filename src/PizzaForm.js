import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Pizza from './Pizza.jpg';

const Container = styled.div`
    margin: 3% 20%;
    background-color: #CDC698;

    img{
        width:100%;
        height: 10%;  
        background-size: cover;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80vh;
    margin-left: 3%;

    button{
        width: 40%;
        height: 8%;
        margin: 0 30%;
        background-color: lightgreen;
        color: black;
        margin-bottom: 15%;
        border-radius: 10px;
        transition: all 500ms ease-in;
        
        &:hover {
            transform: scale(1.15);
        }

        &:disabled {
            color: crimson;
            background-color: white;
            border: 2px solid crimson;
            cursor: not-allowed;
          }   
    }

`
const Errors = styled.div`
    color: red;
    opacity: .7;
    font-size: 1rem;
    text-align: center;
    margin: 3% 0;
`
const Order = styled.div`
    display: flex;
    font-size: 1.2rem;
    justify-content: space-around;
    align-items: center;
    color: white;
    background-color: #504607  ;
    padding: 5%;
    margin-bottom: 2%;
    
    p{
        text-align: center;
    }
`

const Toppings = styled.div`
    font-size: .7rem;
`

const OrderTitle = styled.h3`
    text-align: center;
    font-size: 1.5rem;
    
`

export default function PizzaForm({ values, change, submit, disabled, orders, errors }) {
      
    return (
    <>
        <NavBar />
        <Container>
            <div>
                <img src={Pizza} alt='pizza'/>
            </div>
            <div>
                <Form id='pizza-form' onSubmit={submit}>
                    <label class='label'for='name'>Name
                        <input
                            type='text'
                            name='name'
                            value={values.name}
                            onChange={change}
                            id='name-input'
                        />
                        <Errors class='errors'>{errors.name}</Errors>
                    </label>
                    <label class='label'>
                        <select 
                            name='size'
                            value={values.size}
                            onChange={change}
                            id='size-dropdown'
                        >
                                <option disabled value=''>--size--</option>
                                <option value='small'>small</option>
                                <option value='medium'>medium</option>
                                <option value='large'>large</option>
                                <option value='huge'>huge</option>
                        </select>
                        <Errors class='errors'>{errors.size}</Errors>
                    </label>
                    <label class='label'>Onions
                        <input
                            type='checkbox'
                            name='onions'
                            checked={values.onions}
                            onChange={change}
                        />
                    </label>
                    <label class='label'>Olives
                        <input
                            type='checkbox'
                            name='olives'
                            checked={values.olives}
                            onChange={change}
                        />
                    </label>
                    <label class='label'>Peppers
                        <input
                            type='checkbox'
                            name='peppers'
                            checked={values.peppers}
                            onChange={change}
                        />
                    </label>
                    <label class='label'>Spinach
                        <input
                            type='checkbox'
                            name='spinach'
                            checked={values.spinach}
                            onChange={change}
                        />
                    </label>
                    <label class='label'>Special Instructions
                        <input
                            type='text'
                            name='special'
                            value={values.special}
                            onChange={change}
                            id='special-text'
                        />
                        <Errors class='errors'>{errors.special}</Errors>
                    </label>
                    <button disabled={disabled} id='order-button'>Place Order</button>
                    
                </Form>
                <div class='orders'>
                    <OrderTitle>---- YOUR ORDERS ----</OrderTitle>
                    {orders.map((order, index) => {
                        return(
                            <>
                                <Order key={index}>
                                <div >{order.name}</div>
                                <div >{order.size}</div>
                                <div >{order.toppings.map(topping => <Toppings>-{topping}</Toppings>)}</div>
                                <div >"{order.special}"</div>              
                                </Order>
                            </>
                        )
                    })}
                </div>
            </div>
        </Container>
            
    </>
    )
}
