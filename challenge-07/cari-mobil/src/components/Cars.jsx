import React from "react";

export default function Car({ car }) {
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
      <p>
        id: {id} <br />
        plate: {plate} <br />
        manufacture: {manufacture} <br />
        model: {model} <br />
        image: {image} <br />
        rentPerDay: {rentPerDay} <br />
        capacity: {capacity} <br />
        description: {description} <br />
        availableAt: {availableAt} <br />
        transmission: {transmission} <br />
        available: {available} <br />
        type: {type} <br />
        year: {year} <br />
        options: {options} <br />
        specs: {specs} <br />
      </p>
      <br />
    </div>
  );
}
