import React from 'react';
import {Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import whiskey from './img/whiskey.jpg'
import hazel from './img/hazel.jpg'
import tubby from './img/tubby.jpg'
import DogList from './DogList';

function App(props) {
   
  return (
    <Route exact path="/dogs" render = {() => <DogList dogs={props.dogs} />} />
  )
}
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Hazel",
      age: 3,
      src: hazel,
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food."
      ]
    }
  ]
};

export default App;
