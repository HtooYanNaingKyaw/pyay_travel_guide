const { Database } = require('../helpers/database')

const { DBCONFIG2 } = require('../../configuration/dev_server_config')

const db = new Database(DBCONFIG2)

exports.selectAllPackages = async () => {
    const SELECTPACKAGESSQL = "SELECT * FROM packages ORDER BY id"
    try {
        let packages = await db.query(SELECTPACKAGESSQL)
        return packages
    } catch (error) {
        console.log(error)
        await db.close()
        return
    }
}

exports.selectPackage = async id => {
    const GETPACKAGE = "SELECT * FROM packages WHERE id = ?"

    try {
        let package = await db.query(GETPACKAGE, [id])
        return package
    } catch (error) {
        console.log(error)
        await db.close()
        return
    }
}

exports.selectAllPlaces = async () => {
    const SELECTPLACESSQL = "SELECT * FROM places ORDER BY id"
    try {
        let places = await db.query(SELECTPLACESSQL)
        return places
    } catch (error) {
        console.log(error)
        await db.close()
        return
    }
}

exports.selectPlace = async id => {
    const GETPLACE = "SELECT * FROM places WHERE id = ?"

    try {
        let place = await db.query(GETPLACE, [id])
        return place
    } catch (error) {
        console.log(error)
        await db.close()
        return
    }
}