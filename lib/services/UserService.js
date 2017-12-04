import bcrypt from 'bcryptjs'

class UserService {
    constructor({userRepository}) {
        this.userRepository = userRepository;
    }

    async getById(id) {
        try {
            // TODO Authenticate for admin or ownership
            return await this.userRepository.getById(id);
        } catch (error) {
            console.log(error)
        }
    }

    async getAll() {
        try {
            // if (!authenticatedUserId) throw new Error("UNAUTHORIZED");
            // let thisUser = await this.userRepository.getByIdentifier(authenticatedUserId, 'id');
            // if (thisUser.role !== "admin") throw new Error('UNAUTHORIZED');
            let users = await this.userRepository.getAll('experience');
            users = users.map(user => {
                delete user.hashed_password;
                delete user.email;
                return user
            });
            return users
        } catch (error) {
            if (error.message === "UNAUTHORIZED") throw error;
            console.log(error)
        }
    }

    async getByIdentifier(args) {
        try {
            // TODO Authenticate for admin or ownership
            let user;
            if (args.email) {
                user = await this.userRepository.getByIdentifier(args.email, 'email');
                delete user.hashed_password;
            }
            return user;
        } catch (error) {
            throw error;
        }
    }

    async createNew(args) {
        try {
            if (!args.email) throw new Error('MISSING EMAIL');
            if (!args.password) throw new Error('MISSING PASSWORD');
            if (!args.display_name) throw new Error('MISSING DISPLAY_NAME');

            args.hashed_password = await bcrypt.hash(args.password, 10);
            delete args.password;
            let user = await this.userRepository.createNew(args);

            return user
        }
        catch (error) {
            if (error.message.startsWith('MISSING ')) throw error;
            console.log(error)
        }
    }

    async update(args, authenticatedUserId) {
        try {
            if (!authenticatedUserId) throw new Error("UNAUTHORIZED");
            if (authenticatedUserId !== args.id) throw new Error('UNAUTHORIZED');
            let user = await this.userRepository.update(args);
            delete user.hashed_password;
            return user
        } catch (error) {
        }
    }

    async delete(args, authenticatedUserId) {
        try {
            if (!authenticatedUserId) throw new Error("UNAUTHORIZED");
            if (authenticatedUserId !== args.id) throw new Error('UNAUTHORIZED');
            let user = await this.userRepository.delete(args);
            delete user.hashed_password;
            return user
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = UserService;