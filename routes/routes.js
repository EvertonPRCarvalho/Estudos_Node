const routes = require("express").Router();
const Routes = require("../controller/ViewsController");

routes.get("/", Routes.index);
routes.get("/login", Routes.login);
routes.get("/loginOng", Routes.loginOng);
routes.get("/ongs", Routes.ongs);
routes.get("/create-account", Routes.createAccount);
routes.get("/create-account-ong", Routes.createAccountOng);
routes.get("/doar-item", Routes.doarItem);
routes.get("/itens-doados", Routes.itensDoados);
routes.get("/categoria", Routes.categoria);
routes.get("/home", Routes.home);
routes.get("/index", Routes.index);


module.exports = routes;