const express = require('express')
const app = express()
const port = 2000
const { Car } = require('./models')

app.use(express.urlencoded({ extended:false }))
app.use(express.json())

// GET all cars
app.get("/api/v1/cars", (req, res) => {
  Car.findAll({
    where: { deletedAt:null }
  }).then(cars => {
    res.status(200).json(cars)
  })
})

// GET car by ID
app.get("/api/v1/car/:id", (req, res) => {
  Car.findByPk(req.params.id).then(car => {
    res.status(200).json(car)
    })
})

// POST a car
app.post("/api/v1/car", (req, res) => {
  Car.create({  
    name: req.body.name,
    type: req.body.type,
    dailyPrice: req.body.dailyPrice,
    size: req.body.size,
    imgURL: req.body.imgURL,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    createdBy: req.body.createdBy,
    updatedBy: null,
    deletedBy: null
  }).then(car => {
    res.status(201).json(car)
  }).catch(err => {
    res.status(422).json("Can't create car")
  })
})

// PUT a car
app.put("/api/v1/car/:id", (req, res) => {
  Car.findByPk(req.params.id).then(car => {
    if (car === null) {
      throw "Car not found!"
    }
    Car.update({
      name: req.body.name,
      type: req.body.type,
      dailyPrice: req.body.dailyPrice,
      size: req.body.size,
      imgURL: req.body.imgURL,
      createdAt: car.createdAt,
      updatedAt: new Date(),
      deletedAt: null,
      createdBy: car.createdBy,
      updatedBy: req.body.updatedBy,
      deletedBy: null
    }, {
      where: { id:req.params.id }
    })
      .then(car => {
        res.status(201).json(car)
      })
      .catch(err => {
        res.status(422).json("Can't update car")
      })
  })
    .catch(err => {
      res.status(404).send(err)
  })
})

// DELETE a car
app.delete("/api/v1/car/:id", (req, res) => {
  Car.findByPk(req.params.id).then(car => {
    if (car === null) {
      throw "Car not found!"
    }
    Car.update({
      deletedAt: new Date(),
      deletedBy: req.body.deletedBy,
      ...car
    }, {
      where: { id:req.params.id }
    })
      .then(car => {
        res.status(201).json(car)
      })
      .catch(err => {
        res.status(422).json("Can't delete car")
      })
  })
    .catch(err => {
      res.status(404).send(err)
  })
})