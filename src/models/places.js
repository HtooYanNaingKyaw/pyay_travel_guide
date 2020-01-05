const db = require('./dbModel')

exports.selectPlaces = async () => {
    try {
        let data = await db.selectAllPlaces()
        if(data.length > 0) {
            return {
                success: true,
                status: 200,
                message: "Fetch Places Successful!",
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


exports.selectPlace = async id => {
    try {
        let data = await db.selectPlace(id)
        if(data.length > 0) {
            return {
                success: true,
                status: 200,
                message: "Fetch Places Successful!",
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