const crypto = require('crypto');

const password = {
    hashPassword: (password, salt) => {
        let hash = password;
        for (let i = 0; i < 100; i++) {
            let temp = hash + salt;

            if (i % 2 === 1) {
                temp = salt + hash;
            }

            hash = crypto
                .createHash('sha256')
                .update(temp)
                .digest('hex');
        }

        return hash;
    },

    generateSalt: () => {
        return crypto.randomBytes(16)
            .toString('hex')
    }
};

module.exports = password;