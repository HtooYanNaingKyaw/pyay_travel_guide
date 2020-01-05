const express = require('express')
const router = express.Router()

const packagesRouter = require('./packages')
const placesRouter = require('./places')


router.use('/', ( req, res, next ) => {
    res.setHeader('Content-Type', 'application/json')
    next()
})

router.use("/packages", packagesRouter)
router.use("/places", placesRouter)

router.use((req, res) => {
    res.json({
        success: false,
        status: 404,
        message: 'Page not found!',
        links: {
            related: '/'
        }
    })
})

module.exports = router