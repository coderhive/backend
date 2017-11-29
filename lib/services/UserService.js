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

    async getByEmail(email) {
        try {
            // TODO Authenticate for admin or ownership
            let user = await this.userRepository.getByEmail(email);
            delete user.hashedPassword;
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;