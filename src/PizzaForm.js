import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Pizza from './Pizza.jpg';

const Container = styled.div`
    margin: 3% 25%;

    img{
        width:100%;
        height: 10%;  
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80vh;

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
                        <div class='errors'>{errors.name}</div>
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
                        <div class='errors'>{errors.size}</div>
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
                            checked={values.pepers}
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
                        <div class='errors'>{errors.special}</div>
                    </label>
                    <button disabled={disabled} id='order-button'>Place Order</button>
                    
                </Form>
                <div class='orders'>
                    <div>{orders.name}</div>
                    <div>{orders.toppings}</div>
                </div>
            </div>
        </Container>
            
    </>
    )
}
