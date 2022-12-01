const express = require('express')
const app = express()
const PORT = 2000
const products = require('./products');
app.use(express.json())


const getProductHandler = (req, res) => {
    res.send(JSON.stringify(products.getAll()))
}

const createProductHandler = (req, res) => {
    const { name, price } = req.body

    if (!name || !price) {
        res.status(400).send("Name and Price should not be empty!")

        return
    }

    res.status(201).send(products.create(req.body))
    return
}


const getProductDetailHandler = (req, res) => {
    const filteredProduct = products.getByID(req.params.id)
    if (filteredProduct.length === 0) res.status(404).send('Product Not Found')
    else res.send(filteredProduct[0])
}


const updateProductsDetailHandler = (req, res) => {
    req.body.id = req.params.id
    const { name, price } = req.body

    const filteredProduct = products.getByID(req.params.id)
    if (filteredProduct.length === 0) {
        res.status(404).send('Product Not Found')
        
        return
    }

    if (!name || !price) {
        res.status(400).send("Name and Price should not be empty!")

        return
    }
    
    // params = {
    //     'id': id,
    //     'name': name,
    //     'price': price
    // }
    res.send(products.update(req.body))
}


const deleteProductsDetailHandler = (req, res) => {
    const filteredProduct = products.delete(req.params.id)
    
    if (filteredProduct.length === 0) {
        res.status(404).send('Product Not Found')
    } else {
        res.send(filteredProduct)
    }
}


app.get('/api/products', getProductHandler)
app.post('/api/products', createProductHandler)
app.get('/api/products/:id', getProductDetailHandler)
app.put('/api/products/:id', updateProductsDetailHandler)
app.delete('/api/products/:id', deleteProductsDetailHandler)


app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
})