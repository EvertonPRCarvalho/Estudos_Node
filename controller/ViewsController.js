const createAccount = async (req, res) => {
    try {
        return res.render("create-account");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};
const home = async (req, res) => {
    try {
        return res.render("home");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};
const itensDoados = async (req, res) => {
    try {
        return res.render("itens-doados");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};
const login = async (req, res) => {
    try {
        return res.render("login");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};
const ongs = async (req, res) => {
    try {
        return res.render("ongs");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};
const doarItem = async (req, res) => {
    try {
        return res.render("doar-item");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};
const index = async (req, res) => {
    try {
        return res.render("index");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};
const categoria = async (req, res) => {
    try {
        return res.render("categoria");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

const loginOng = async (req, res) => {
    try {
        return res.render("loginOng");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

const createAccountOng = async (req, res) => {
    try {
        return res.render("create-account-ong");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

module.exports = {
    createAccount,
    home,
    itensDoados,
    login,
    ongs,
    doarItem,
    index,
    categoria,
    loginOng,
    createAccountOng,
}