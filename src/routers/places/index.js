const express = require('express')
const router = express.Router()

const placeModel = require('../../models/places')

router.get('/', async (req, res) => {
    try {
        let data = await placeModel.selectPlaces()
        if (data.success) {
            res.status(data.status).json({
                success: true,
                status: data.status,
                message: data.message,
                data: data.data
            })
        } else {
            res.status(data.status).json({
                success: false,
                status: data.status,
                message: data.message
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const placeId = req.params.id
        let place = await placeModel.selectPlace(placeId)
        if (place.success) {
            res.status(place.status).json({
                success: true,
                status: place.status,
                message: place.message,
                data: place.data
            })
        } else {
            res.status(place.status).json({
                success: false,
                status: place.status,
                message: place.message
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })        
    }

})

module.exports = router