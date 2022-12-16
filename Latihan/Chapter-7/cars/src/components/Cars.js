import React from "react";

export default function Cars({ car }) {
  const {
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    options,
    specs,
  } = car;

  return (
    <div>
      <h1>ID: {id}</h1>
      <h1>License Plate: {plate}</h1>
      <h1>manufacture: {manufacture}</h1>
      <h1>model: {model}</h1>
      <h1>image: {image}</h1>
      <h1>rentPerDay: {rentPerDay}</h1>
      <h1>capacity: {capacity}</h1>
      <h1>description: {description}</h1>
      <h1>availableAt: {availableAt}</h1>
      <h1>transmission: {transmission}</h1>
      <h1>available: {available}</h1>
      <h1>type: {type}</h1>
      <h1>year: {year}</h1>
      <h1>options: {options}</h1>
      <h1>specs: {specs}</h1>
    </div>
  );
}
