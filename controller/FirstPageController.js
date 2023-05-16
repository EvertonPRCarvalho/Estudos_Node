const getFirstPage = async (req, res) => {
    try {
        return res.render("index");
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};


module.exports = {
    getFirstPage,
}