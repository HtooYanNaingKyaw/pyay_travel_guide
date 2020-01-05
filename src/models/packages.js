const bcrypt = require('bcryptjs')

const db = require('./dbModel')


exports.selectPackages = async () => {
    try {
        let data = await db.selectAllPackages()
        if(data.length > 0) {
            return {
                success: true,
                status: 200,
                message: "Fetch Packages Successful!",
                data: data
            }
        } else {
            return {
                success: true,
                status: 404,
                message: "No Place Found!",
                data: data
            }
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            status: 500,
            message: error.message
        }
    }
}

exports.selectPackage = async id => {
    try {
        let data = await db.selectPackage(id)
        if(data.length > 0) {
            return {
                success: true,
                status: 200,
                message: "Fetch Packages Successful!",
                data: data[0]
            }
        } else {
            return {
                success: true,
                status: 404,
                message: "No Place Found!",
                data: data
            }
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            status: 500,
            message: error.message
        }
    }
}