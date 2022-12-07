import React from 'react'

export default function Car({ car }) {
  const { name, price, year, imageURL } = car;

  return (
    <div>
      <img src={imageURL} alt=""></img>
      <h1>Name: {name}</h1>
      <h2>Price: {price}</h2>
      <h2>Year: {year}</h2>
    </div>
  )
}
