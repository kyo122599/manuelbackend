const express = require('express');

class Router {
    #router;
    #UsuariosControllers;
   

    constructor() {
        this.#router = express.Router();
        Object.preventExtensions(this);
    }

    attachControllers = async (oUsuariosControllers ) => {
        this.#UsuariosControllers = oUsuariosControllers;
       
    }

    prepareRouting = async () => {
        // Rutas para usuarios
        this.#router.get('/usuarios', this.#UsuariosControllers.fetchUsers);
        this.#router.post('/usuarios', this.#UsuariosControllers.createUsers);
        this.#router.put('/usuarios', this.#UsuariosControllers.updateUsers);
        this.#router.delete('/usuarios', this.#UsuariosControllers.deleteUsers);
    }

    getRouter = () => {
        return this.#router;
    }
}

module.exports = Router;
