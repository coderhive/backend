import bcrypt from 'bcryptjs'

class ComponentService {
    constructor({componentRepository}) {
        this.componentRepository = componentRepository;
    }

    async getByIdentifier(args, parent) {
        console.log(parent, '<<<<<<<< HEREs The CS get all id')
        try {
            // TODO Authenticate for admin or ownership
            let userId = parent.id;
            return await this.componentRepository.getByOwnerId(userId);
        } catch (error) {
            console.log(error)
        }
    }


//
//     async createNew(args) {
//         try {
//             if (!args.email) throw new Error('MISSING EMAIL');
//             if (!args.password) throw new Error('MISSING PASSWORD');
//             if (!args.display_name) throw new Error('MISSING DISPLAY_NAME');
//
//             args.hashed_password = await bcrypt.hash(args.password, 10);
//             delete args.password;
//             let user = await this.userRepository.createNew(args);
//
//             return user
//         }
//         catch (error) {
//             if (error.message.startsWith('MISSING ')) throw error;
//             console.log(error)
//         }
//     }
}

module.exports = ComponentService;