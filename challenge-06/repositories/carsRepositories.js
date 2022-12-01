const { Car } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class CarsRepository {
    static async create({ name, type, dailyPrice, size, imgURL }) {
        const createdCar = Car.create({
            name,
            type,
            dailyPrice,
            size,
            imgURL,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
            createdBy: "user",
            updatedBy: "user",
            deletedBy: null
        })

        return createdCar
    }

    static async getAll() {
        const getCars = await Car.findAll({
            where: {deletedAt:null}
        })

        return getCars
    }

    static async getByID(id) {
        const getCarByID = await Car.findByPk(id)

        return getCarByID
    }

    static async delete(id) {
        const deletedCar = await Car.update(
            {
                deletedAt: new Date(),
                deletedBy: "user"
            },
            {
                where: { id:id }
            })

        return deletedCar
    }

    static async update({ id, name, type, dailyPrice, size, imgURL }) {
        const deletedCar = await Car.update(
            {
                name,
                type,
                dailyPrice,
                size,
                imgURL,
                updatedAt: new Date(),
                updatedBy: "user",
            },
            {
                where: { id:id }
            })

        return deletedCar
    }
    
}

module.exports = CarsRepository;