// dependencies
let mongoose = require("mongoose");

// connect to mongodb
let MongoDB = async (url)=> {
    return await mongoose.connect(url);
}

// export 
module.exports = MongoDB;