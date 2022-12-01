const express = require('express')
const app = express()
const PORT = 2000
app.use(express.json())


const products = [
    {
        'id': 1,
        'name': 'Laptop',
        'price': '1e7'
    },
    {
        'id': 2,
        'name': 'Tablet',
        'price': '15e6'
    },
    {
        'id': 3,
        'name': 'Remot',
        'price': '1e5'
    },
]


const getProductHandler = (req, res) => {
    res.send(JSON.stringify(products))
}

const createProductHandler = (req, res) => {
    const { name, price } = req.body

    if (!name || !price) {
        res.status(400).send("Name and Price should not be empty!")

        return
    }
    
    req.body.id = products[products.length - 1].id + 1
    products.push(req.body)
    res.status(201).send(products)
    return
}


const getProductDetailHandler = (req, res) => {
    const id = req.param('id')
    // res.send(`GET Landing Page with ID : ${id}`)
    
    const filteredProduct = products.filter( product => product.id === parseInt(id) )
    if (filteredProduct.length === 0) res.status(404).send('Product Not Found')
    else res.send(filteredProduct[0])
}


const updateProductsDetailHandler = (req, res) => {
    const id = req.param('id')
    const { name, price } = req.body
    
    const filteredProduct = products.filter( product => product.id === parseInt(id) )
    if (filteredProduct.length === 0) {
        res.status(404).send('Product Not Found')

        return
    }
    
    const updatedProduct = products.map(product => {
        if (product.id === parseInt(id)) {
            product.name    = name
            product.price   = price
        }

        return product
    })

    res.send(updatedProduct)
}


const deleteProductsDetailHandler = (req, res) => {
    const id = req.param('id')
    const filteredProduct = products.filter( product => product.id !== parseInt(id) )
    
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