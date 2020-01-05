const app = require('./src/server')

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Your server is running at PORT - ${PORT}`)
})