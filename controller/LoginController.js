const login = async (req, res) => {
    try {
        return res.render("login");
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};


module.exports = {
    login,
}