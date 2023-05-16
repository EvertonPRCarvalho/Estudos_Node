const routes = require("express").Router();
const FirstPageController = require("../controller/FirstPageController");
const Login = require("../controller/LoginController");
const ONGs = require("../controller/OngsController");
const CreateAccount = require("../controller/CreateAccountController");
const DoaItem = require("../controller/DoarItemController");
const ItensDoados = require("../controller/ItensDoadosController");


routes.get("/", FirstPageController.getFirstPage);
routes.get("/login", Login.login);
routes.get("/ongs", ONGs.ongs);
routes.get("/create-account", CreateAccount.createAccount);
routes.get("/doar-item", DoaItem.getDoarItem);
routes.get("/itens-doados", ItensDoados.getAllItensDoados);
/*routes.post("/create", UserController.createUser);
routes.delete("/delete", UserController.deleteUser);
routes.put("/update", UserController.updateUser);
*/

module.exports = routes;