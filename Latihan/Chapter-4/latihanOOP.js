// EXAMPLE 
// class Human {
//     // Add static property
//     static isLivingOnEarth = true
    
//     // Add constructor method
//     constructor(name, address) {
//         this.name = name
//         this.address = address
//     }
    
//     // Add instance method signature
//     introduce() {
//         console.log(`Hi, my name is ${this.name}`)
//     }
// }

// console.log(Human.isLivingOnEarth)
// // Output static property: true

// // Add prototype/instance method
// Human.prototype.greet = function (name) {
//     console.log(`Hi, ${name}, I'm ${this.name}`)
// }

// // Add static method
// Human.destroy = function (thing) {
//     console.log(`Human is destroying ${thing}`)
// }

// // Instantation of Human class, we create a new object.
// let mj  = new Human("Michael Jackson", "Isekai")
// console.log(mj)
// // Output: Human {name:"Michael Jackson", address: "Isekai"}
// // Checking instance of class
// console.log(mj instanceof Human) // true
// console.log(mj.introduce())
// // Hi, my name is Michael Jackson
// console.log(mj.greet("Donald Trump"))
// // Hi, Donald Trump, I'm Michael Jackson
// console.log(Human.destroy("Amazon Forest"))
// // Human is destroying Amazon Forest

class Vehicle{
    static isEngineActivated = false

    static explode() {
        console.log("Berhasil meledakkan kendaraan")
    }

    start() {
        if (this.isEngineActivated) {

            console.log("Mesin berhasil menyala")
        } else {
            this.explode()
        }
    }
}

// console.log("Vehicle")
// console.log("Establishing new vehicle")
// let hehe = new Vehicle
// console.log("Starting engine")
// hehe.isEngineActivated = true
// hehe.start()

class Car extends Vehicle {
    constructor(name, brand, price) {
        super()
        this.name = name
        this.brand = brand
        this.price = price
    }

    start(isFuelNotEmpty) {
        if (Vehicle.isEngineActivated && isFuelNotEmpty) {
            return "Mesin berhasil menyala"
        } else {
            return "Mesin gagal menyala"
        }
    }

    explode() {
        super.explode()
    }

    buy(money) {
        if (money > this.price) {
            console.log(`Berhasil membeli ${this.name} dengan kembalian ${money-this.price}`)
        } else if(money == this.price){
            console.log(`Berhasil membeli ${this.name} dengan uang pas`)
        } else {
            console.log(`Gagal membeli ${this.name} harga mobil adalah ${this.price}`)
        }
    }
}

// console.log("Car")
// let Benny = new Car("Benny", "Mercedes Benz", 6e8)
// console.log("Creating Car named Benny")
// console.log("Starting Benny with fuel = true")
// console.log(Benny.start(true))
// console.log("Starting Benny with fuel = false")
// console.log(Benny.start(false))
// console.log("Buying Benny uang pas")
// Benny.buy(6e8)
// console.log("Buying Benny uang lebih")
// Benny.buy(75e7)
// console.log("Buying Benny uang kurang")
// Benny.buy(5e8)

class Product {
    constructor(name, price, stock) {
        this.id = this.generateID()
        this.name = name
        this.price = price
        this.stock = stock
        this.isStockReady = this.checkIsStockReady()
    }

    generateID(){
        return Math.floor(Math.random() * 100000)
    }

    checkIsStockReady() {
        return (this.stock > 0) ? true : false
    }

    getProduct() {
        console.log(`id\t\t=\t${this.id}`)
        console.log(`name\t\t=\t${this.name}`)
        console.log(`price\t\t=\t${this.price}`)
        console.log(`stock\t\t=\t${this.stock}`)
        console.log(`Is stock ready\t=\t${this.isStockReady}`)
    }
}

// console.log("Product")
// console.log("Creating new Product")
// let tws = new Product("Moondrop", 2e6, 10)
// console.log("Get Product")
// tws.getProduct()
// console.log("Check Stock")
// console.log(tws.checkIsStockReady())