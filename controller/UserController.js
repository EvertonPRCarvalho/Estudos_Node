const User = require('../models/User')

const getAllUsers = async (req, res) => {
    try {
        const userList = await User.find();
        return res.render("index", userList);
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};

const createUser = async (req, res) => {
    const user = req.body;

    if(!user){
        return res.redirect("/");
    }

    try {
        await User.create(user);
        return res.redirect("/")
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};
const updateUser = (req, res) => {

}
const deleteUser = (req, res) => {

}

const getUser = (req, res) => {
    
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
};