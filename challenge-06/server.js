const express = require('express')
// const swaggerOptions = require('../../binar-deployment-be/utils/swaggerOptions')
// const bodyParser = require('body-parser')
// const swaggerUi = require('swager-ui-express')
// const swaggerJsdoc = require('swagger-jsdoc')
// const cors = require('cors')
// const path = require('path')
// const upload = require('./utils/fileUpload')

const port = 2000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:false }))
// app.use(cors())

// SWAGGER
// const swaggerOptions = require('./utils/swaggerOptions')
// const swaggerSpec = swaggerJsdoc(swaggerOptions)

// Import Controllers
const carsController = require('./controllers/carsController')
const authController = require('./controllers/authController')

// Import Middleware
const middleware = require('./middlewares/auth')

// Define Routes

// Testing CI/CD Route
// app.get('/testing-ci-cd/:id', userController.getPostsByID)

// Auth
app.post('/auth/register', authController.register)
app.post('/auth/login', authController.login)
app.post('/auth/me', middleware.authenticate, authController.currentUser)

// Cars
app.post("/api/v1/car", middleware.authenticate, middleware.isAdmin, carsController.create)
app.get("/api/v1/cars", carsController.getAll)
app.get("/api/v1/car/:id", carsController.getByID)
app.delete("/api/v1/car/:id", carsController.deleteCar)
app.put("/api/v1/car/:id", carsController.updateCar)

// PUT a car
// app.put("/api/v1/car/:id", (req, res) => {
//   Car.findByPk(req.params.id).then(car => {
//     if (car === null) {
//       throw "Car not found!"
//     }
//     Car.update({
//       name: req.body.name,
//       type: req.body.type,
//       dailyPrice: req.body.dailyPrice,
//       size: req.body.size,
//       imgURL: req.body.imgURL,
//       createdAt: car.createdAt,
//       updatedAt: new Date(),
//       deletedAt: null,
//       createdBy: car.createdBy,
//       updatedBy: req.body.updatedBy,
//       deletedBy: null
//     }, {
//       where: { id:req.params.id }
//     })
//       .then(car => {
//         res.status(201).json(car)
//       })
//       .catch(err => {
//         res.status(422).json("Can't update car")
//       })
//   })
//     .catch(err => {
//       res.status(404).send(err)
//   })
// })

// DELETE a car
// app.delete("/api/v1/car/:id", (req, res) => {
//   Car.findByPk(req.params.id).then(car => {
//     if (car === null) {
//       throw "Car not found!"
//     }
//     Car.update({
//       deletedAt: new Date(),
//       deletedBy: req.body.deletedBy,
//       ...car
//     }, {
//       where: { id:req.params.id }
//     })
//       .then(car => {
//         res.status(201).json(car)
//       })
//       .catch(err => {
//         res.status(422).json("Can't delete car")
//       })
//   })
//     .catch(err => {
//       res.status(404).send(err)
//   })
// })

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`)
})