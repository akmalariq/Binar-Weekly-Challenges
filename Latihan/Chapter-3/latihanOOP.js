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

    explode() {
        console.log("Berhasil meledakkan kendaraan")
    }

    start() {
        if (isEngineActivated) {
            console.log("Mesin berhasil menyala")
        } else {
            explode()
        }
    }
}

class Car extends Vehicle {
    constructor(name, brand, price) {
        this.name = name
        this.brand = brand
        this.price = price
    }

    start(isFuelNotEmpty) {
        if (isEngineActivated && isFuelNotEmpty) {
            "Mesin berhasil menyala"
        } else {
            "Mesin gagal menyala"
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

class Product {
    constructor(name, price, stock) {
        this.id = this.generateID()
        this.name = name
        this.price = price
        this.stock =stock
        this.isStockReady = this.checkIsStockReady()
    }

    generateID(){
        return Math.random * 100000
    }s

    checkIsStockReady() {
        return (stock > 0) ? true : false
    }

    getProduct() {
        console.log(`id\t=\t${this.id}`)
        console.log(`name\t=\t${this.name}`)
        console.log(`price\t=\t${this.price}`)
        console.log(`stock\t=\t${this.stock}`)
        console.log(`Is stock ready\t=\t${this.isStockReady}`)
    }
}