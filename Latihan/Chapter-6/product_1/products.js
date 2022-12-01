let products = [
    {
        'id': 1,
        'name': 'Laptop',
        'price': 1e7
    },
    {
        'id': 2,
        'name': 'Tablet',
        'price': 15e6
    },
    {
        'id': 3,
        'name': 'Remot',
        'price': 1e5
    },
]

class Product{
    constructor(params) {
        this.id = products[products.length - 1].id + 1
        this.name = params.name
        this.price = params.price
    }

    static create(params) {
        const product = new this(params)
        products.push(product)

        return product
    }

    static getAll() {
        return products
    }

    static getByID(id) {
        return products.filter(product => product.id === parseInt(id))
    }

    static update(params) {
        return products.map(product => {
            if (product.id === parseInt(params.id)) {
                product.name    = params.name
                product.price   = params.price
            }

            return product
        })
    }

    static delete(id) {
        products = products.filter(product => product.id !== parseInt(id))
        
        return products
    }
}


// const getProductHandler = (req, res) => {
//     res.send(JSON.stringify(products))
// }

// const createProductHandler = (req, res) => {
//     const { name, price } = req.body

//     if (!name || !price) {
//         res.status(400).send("Name and Price should not be empty!")

//         return
//     }
    
//     req.body.id = products[products.length - 1].id + 1
//     products.push(req.body)
//     res.status(201).send(products)
//     return
// }


// const getProductDetailHandler = (req, res) => {
//     const id = req.param('id')
//     // res.send(`GET Landing Page with ID : ${id}`)
    
//     const filteredProduct = products.filter( product => product.id === parseInt(id) )
//     if (filteredProduct.length === 0) res.status(404).send('Product Not Found')
//     else res.send(filteredProduct[0])
// }


// const updateProductsDetailHandler = (req, res) => {
//     const id = req.param('id')
//     const { name, price } = req.body
    
//     const filteredProduct = products.filter( product => product.id === parseInt(id) )
//     if (filteredProduct.length === 0) {
//         res.status(404).send('Product Not Found')

//         return
//     }
    
//     const updatedProduct = products.map(product => {
//         if (product.id === parseInt(id)) {
//             product.name    = name
//             product.price   = price
//         }

//         return product
//     })

//     res.send(updatedProduct)
// }


// const deleteProductsDetailHandler = (req, res) => {
//     const id = req.param('id')
//     const filteredProduct = products.filter( product => product.id !== parseInt(id) )
    
//     if (filteredProduct.length === 0) {
//         res.status(404).send('Product Not Found')
//     } else {
//         res.send(filteredProduct)
//     }
// }

module.exports = Product