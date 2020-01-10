'use strict'

const User = use("App/Models/User") //importando o model de usuário

class UserController {

    async create ({ request }) //usando desestruturação ES6
    {
        const data = request.only(["username", "email", "password"])
    
        const user = await User.create(data)
    
        return user
      }
}

module.exports = UserController
