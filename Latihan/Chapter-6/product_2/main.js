const express = require('express')
// const products = require('./products');
// const dbConn = require('./config/db_connection')
const {Product} = require('./models')
const PORT = 2000

const app = express()

app.use(express.json())


const getProductHandler = (req, res) => {
    Product.findAll().then(products => {
        res.status(200).send({
            "status": "OK",
            "message": "Data has been found",
            "data": products
        })
    })
    // res.send(JSON.stringify(Product.findAll()))
}

const getProductDetailHandler = (req, res) => {
    // const filteredProduct = products.getByID(req.params.id)
    // if (filteredProduct.length === 0) res.status(404).send('Product Not Found')
    // else res.send(filteredProduct[0])

    Product.findByPk(req.params.id)
        .then(product => {
            res.status(200).send({
                "status": "OK",
                "message": "Data has been found",
                "data": product
            })
        })
}

const createProductHandler = (req, res) => {
    const { name, price, stock } = req.body

    if (!name || !price) {
        res.status(400).send("Name and Price should not be empty!")

        return
    }
    
    // Product.create(
        //     {
            //         name:""
            //     }
            // )
            
    // res.status(201).send(products.create(req.body))

    Product.create({  
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        createdAt: new Date(),
        updatedAt: new Date()
    }).then(product => {
        res.status(201).send({
            "status": "OK",
            "message": "Data has been created",
            "data": product
        })
    }).catch(err => {
        res.status(422).json("Can't create car")
    })
    return
}



const updateProductsDetailHandler = (req, res) => {
    // req.body.id = req.params.id
    // const { name, price, stock } = req.body

    // const filteredProduct = products.getByID(req.params.id)
    // if (filteredProduct.length === 0) {
    //     res.status(404).send('Product Not Found')
        
    //     return
    // }

    // if (!name || !price) {
    //     res.status(400).send("Name and Price should not be empty!")

    //     return
    // }

    // res.send(products.update(req.body))

    Product.findByPk(req.params.id)
        .then(product => {
            if (product === null) {
                throw "Car not found!"
            }

            Product.update({
                name: req.body.name,
                price: req.body.price,
                stock: req.body.stock,
                updatedAt: new Date()
            },
                {
                    where: { id: req.params.id }
                }
            )
                .then(() => {
                    res.status(201).send({
                        "status": "OK",
                        "message": "Data has been updated",
                        "data": product
                    })
                })
                .catch(err => {
                    res.status(422).json("Can't update car")
                })
        })
        .catch(err => {
            res.status(404).send(err)
        })
}


const deleteProductsDetailHandler = (req, res) => {
    // const filteredProduct = products.delete(req.params.id)
    
    // if (filteredProduct.length === 0) {
    //     res.status(404).send('Product Not Found')
    // } else {
    //     res.send(filteredProduct)
    // }
    
    Product.findByPk(req.params.id)
        .then(product => {
            if (product === null) {
                throw "Car not found!"
            }

            Product.destroy(
                {
                    where:
                    {
                        id: req.params.id
                    }
                })
                .then(product => {
                    res.status(201).send({
                        "status": "OK",
                        "message": "Data has been deleted",
                        "data": product
                    })
                })
                .catch(err => {
                    res.status(422).json("Can't delete product")
                })
        })
        .catch(err => {
            res.status(404).send(err)
        })
}


app.get('/api/products', getProductHandler)
app.post('/api/products', createProductHandler)
app.get('/api/products/:id', getProductDetailHandler)
app.put('/api/products/:id', updateProductsDetailHandler)
app.delete('/api/products/:id', deleteProductsDetailHandler)


app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
})