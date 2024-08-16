const AppError = require("../utils/AppError");

class UsersController {
    /**
     * index - GET para listar varios registros.
     * show - GET para exibir um registro especifico.
     * create - POST para criar um novo registro.
     * update - PUT para atualizar o registro.
     * delete - DELETE para remover um registro.
     */

    create(request, response) {

        const {name, email, password} = request.body;

        if(!name) {
            throw new AppError("Nome obrigatorio!")
        }

        response.json({name, email, password});
    }
}

module.exports = UsersController;