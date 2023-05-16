const getAllItensDoados = async (req, res) => {
    try {
        return res.render("itens-doados");
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};


module.exports = {
    getAllItensDoados,
}