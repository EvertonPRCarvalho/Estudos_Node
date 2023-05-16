const Item = require('../models/User')
/* ALTERAR para  ../models/Item*/
const getAllItens = async (req, res) => {
    try {
        const itemList = await Item.find();
        return res.render("home", itemList);
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};

module.exports = {
    getAllItens,
}