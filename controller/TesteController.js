const teste = async (req, res) => {
    try {
        return res.render("teste");
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};


module.exports = {
    teste,
}