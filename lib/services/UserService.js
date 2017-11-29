import bcrypt from 'bcryptjs'

class UserService {
    constructor({userRepository}) {
        this.userRepository = userRepository;
    }

    async getAll() {
        try {
            // TODO Authenticate for admin here else remove email addresses
            let users = await this.userRepository.getAll();
            users = users.map(user => {
                delete user.hashedPassword;
                return user
            });
            return users
        } catch (error) {
            throw error;
        }
    }

    async getByIdentifier(args) {
        try {
            // TODO Authenticate for admin or ownership
            let user;
            if(args.email){
                user = await this.userRepository.getByEmail(args.email);
                delete user.hashedPassword;
            }
            return user;
        } catch (error) {
            throw error;
        }
    }

    async createNew(args){
        try{
            if(!args.email) throw new Error('MISSING EMAIL');
            if(!args.password) throw new Error('MISSING PASSWORD');
            if(!args.display_name) throw new Error('MISSING DISPLAY_NAME');

            args.hashed_password = await bcrypt.hash(args.password, 10);
            delete args.password;
            let user = await this.userRepository.createNew(args);

            return user
        }
        catch (error){
            if(error.message.startsWith('MISSING ')) throw error;
            console.log(error)
        }
    }
}

module.exports = UserService;