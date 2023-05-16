const ongs = async (req, res) => {
    try {
        return res.render("ongs");
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};


module.exports = {
    ongs,
}