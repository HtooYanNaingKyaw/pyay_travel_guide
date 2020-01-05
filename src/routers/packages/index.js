const express = require('express')
const router = express.Router()

const packageModel = require('../../models/packages')

router.get('/', async (req, res) => {
    try {
        let data = await packageModel.selectPackages()
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


router.get("/:id", async (req, res) => {
    try {
        const packageId = req.params.id
        let package = await packageModel.selectPackage(packageId)
        if (package.success) {
            res.status(package.status).json({
                success: true,
                status: package.status,
                message: package.message,
                data: package.data
            })
        } else {
            res.status(package.status).json({
                success: false,
                status: package.status,
                message: package.message
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