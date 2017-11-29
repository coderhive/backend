const {promisify} = require('util');
const jwt = require('jsonwebtoken');
const signJwt = promisify(jwt.sign);
const bcrypt = require('bcryptjs');

class AuthenticationService {
    constructor({JWT_KEY, userRepository}) {
        this.jwtSecretKey = JWT_KEY;
        this.userRepository = userRepository;
    }

    async authenticate(credentials) {
        try {
            if (!credentials.email || typeof credentials.email !== 'string' || !credentials.password || typeof credentials.password !== 'string') {
                throw new Error('INSUFFICIENT_CREDENTIALS')
            }
            const user = await this.userRepository.getByEmail(credentials.email);
            if (!user) throw new Error('INVALID_CREDENTIALS');
            let secretPass = await bcrypt.hash(credentials.password, 10);
            const isCorrect = await bcrypt.compare(credentials.password, user.hashed_password);
            if (!isCorrect) throw new Error('INVALID_CREDENTIALS');
            let whenIssued = Math.floor(Date.now() / 1000);
            let whenExpires = whenIssued + 86400 * 7;
            return signJwt({
                iss: 'coder-hive',
                aud: 'coder-hive',
                iat: whenIssued,
                exp: whenExpires,
                sub: user.id
            }, this.jwtSecretKey)
        }
        catch (error) {
            throw(error)
        }
    }
}

module.exports = AuthenticationService;