'use strict'


class SessionController {
    async create ({ request, auth, response }) { 
        const { email, password } = request.all()
    
        const token = await auth.attempt(email, password)
    
        return response.status(200).json({data: token, message: 'Login successfull', status: true});
      }
}

module.exports = SessionController
