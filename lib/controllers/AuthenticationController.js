
class EntityController {
    constructor({authenticationService}) {
        this.authenticationService = authenticationService;
        this.token = this.token.bind(this);
    }

    async token(req, res, next) {
        try {
            const token = await this.authenticationService.authenticate(req.body);
            console.log(token)
            res.status(200).json({token})
        } catch (error) {
            if(error.message === 'INVALID_CREDENTIALS') {
                return res.status(403).json('Incorrect Information')
        }
            return res.status(403).send('Failed Login')
        }
    }


}

module.exports = EntityController;