const createAccount = async (req, res) => {
    try {
        return res.render("create-account");
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};


module.exports = {
    createAccount,
}