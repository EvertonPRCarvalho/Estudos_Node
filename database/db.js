const mongoose = require('mongoose');

const connectToDb = () => {
    mongoose
        .connect(
            "mongodb+srv://evertonprcarvalho:15oO1IQ9fdadmM3O@cluster0.nlbhxtn.mongodb.net/",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
        .then(() => console.log("MongoDB Altas CONECTADO!"))
        .catch((err) => console.log(err));
};

module.exports = connectToDb;