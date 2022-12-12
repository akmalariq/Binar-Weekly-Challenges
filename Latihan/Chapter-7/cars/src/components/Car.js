import React from 'react'

export default function Car({ car }) {
  const { name, dailyPrice, type, imgURL } = car;

  return (
    <div>
      <img src={imgURL} alt=""></img>
      <h1>Name: {name}</h1>
      <h2>Price: {dailyPrice}</h2>
      <h2>Type: {type}</h2>
    </div>
  )
}
