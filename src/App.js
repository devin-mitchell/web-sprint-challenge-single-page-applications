import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import PizzaForm from './PizzaForm'
import axios from 'axios'
import schema from "./formSchema";
import * as yup from 'yup'


const restaurantData = [
  {img: './photos/BombayHouse', name: 'Bombay House', description: '$$ - Indian - Dining', time: '20 - 30 Min', Fee: '$4.99 Delivery Fee'},
  {img: './photos/Buds', name: 'Buds', description: '$ - Vegan - Take Out', time: '10 - 30 Min', Fee: '$4.99 Delivery Fee'},
  {img: './photos/Este', name: 'Este', description: '$$ - Pizza - Tasty', time: '30 - 45 Min', Fee: '$4.99 Delivery Fee'},
  {img: './photos/SweetGreen', name: 'Sweet Green', description: '$$ - Healthy - Dining', time: '20 - 30 Min', Fee: '$4.99 Delivery Fee'},
  {img: './photos/Starbucks', name: 'Starbucks', description: '$$ - Café - Coffee & Tea', time: '5 - 15 Min', Fee: '$4.99 Delivery Fee'},
  {img: './photos/McDonalds', name: 'McDonalds', description: '$ - American - Fast Food', time: '10 - 30 Min', Fee: '$4.99 Delivery Fee'},
]

const initialFormValues = {
  name: '',
  size: '',
  onions: false,
  olives: false,
  peppers: false,
  spinach: false,
  special: '',
}

const initialErrors = {
  name: '',
  size: '',
}

const App = () => {
  const [cardData] = useState(restaurantData)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [orders, setOrders] = useState([])
  const [disabled, setDisabled] = useState(true)
  const [errors, setErrors] = useState(initialErrors)

  const change = evt => {
    const { name, type, value, checked } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;

    yup
    .reach(schema, name) // get to this part of the schema
    //we can then run validate using the value
    .validate(value) // validate this value
    .then(() => {
      // happy path and clear the error
      setErrors({
        ...errors,
        [name]: "",
      });
    })
    // if the validation is unsuccessful, we can set the error message to the message
    // returned from yup (that we created in our schema)
    .catch((err) => {
      setErrors({
        ...errors,
        // validation error from schema
        [name]: err.errors[0],
      });
    });

    setFormValues({
    ...formValues, [name]: valueToUse
    })
  }

  const submit = evt => {
    evt.preventDefault();
    console.log(evt.data)
    const newOrder = {
        name: formValues.name.trim(),
        size: formValues.size,
        // onions: formValues.onions,
        // olives: formValues.olives,
        // peppers: formValues.peppers,
        // spinach: formValues.spinach,
        toppings: ["onions", "olives", "peppers", "spinach"].filter(
            (topping) => formValues[topping]
          ),
        special: formValues.special.trim(),
        }
    axios.post(`https://reqres.in/api/orders`, newOrder)
        .then(res => {
            console.log("new Order", res.data)
            setOrders([...orders, res.data])

        })
        .catch(err => {
            console.log(err)
        })
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <>
      <Switch>
        <Route path='/pizza'>
          <PizzaForm 
            values={formValues} 
            change={change} 
            submit={submit}
            disabled={disabled}
            orders={orders}
            errors={errors}
          />
        </Route>
        <Route path="/">
          <Home cardData={cardData} />
        </Route>
      </Switch>  
    </>
  );
};
export default App;
