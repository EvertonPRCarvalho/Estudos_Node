const createAccount = async (req, res) => {
    try {
        return res.render("create-account");
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};

const createAccountOng = async (req, res) => {
    try {
        return res.render("create-account-ong");
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};


module.exports = {
    createAccount,
    createAccountOng,
}