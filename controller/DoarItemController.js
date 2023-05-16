const getDoarItem = async (req, res) => {
    try {
        return res.render("doar-item");
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};


module.exports = {
    getDoarItem,
}