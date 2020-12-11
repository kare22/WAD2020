const db = require('../sqlite/connection');
const pwd = require('../library/password');

const UserModel = {

    create(params, callback) {
        let salt = pwd.generateSalt();
        let password = pwd.hashPassword(params.password, salt);
        let statement = 'INSERT INTO user (firstname, lastname, email, avatar, password, salt) VALUES (?, ?, ?, ?, ?, ?);';
        let data = [
            params.firstname,
            params.lastname,
            params.email,
            params.avatar,
            password,
            salt,
        ];

        return query(statement, data, callback);
    },

    getById(id, callback) {

        const statement = 'SELECT * FROM user WHERE id = ? AND delete_time IS NULL';

        return query(statement, [id], (rows) => {
            let user = null;

            if (Array.isArray(rows) && rows.length) {
                user = {
                    id: rows[0].id,
                    firstname: rows[0].firstname,
                    lastname: rows[0].lastname,
                    email: rows[0].email,
                    avatar: rows[0].avatar
                };
            }

            callback(user)
        });

    },

    getByEmailAndPassword(email, password, callback) {

        return this.getByEmail(email, (user) => {
            if (user) {
                let hash = pwd.hashPassword(password, user.salt);

                if (hash !== user.password) {
                    user = null;
                }
            }

            callback(user)
        });
    },

    getByEmail(email, callback) {

        const statement = 'SELECT * FROM user WHERE email = ? AND delete_time IS NULL';

        return query(statement, [email], (rows) => {
            let user = null;

            if (Array.isArray(rows) && rows.length) {
                user = rows[0];
            }
            callback(user)
        });

    },

    getAll(userId, callback) {

        const statement = `
        SELECT 
            user.id,
            user.firstname,
            user.lastname,
            user.avatar,
            user.email,
            (
                SELECT COUNT(*)
                FROM follow
                WHERE follow.user_id = user.id
                  AND follow.follower_id = ?
                  AND follow.delete_time IS NULL
            ) AS followed
        FROM user
        WHERE user.id != ?
            AND user.delete_time IS NULL
        `;
        return query(statement, [userId, userId], (rows) => {
            if (Array.isArray(rows)) {
                callback(
                    rows.map(user => {
                            user.followed = user.followed !== 0;
                            return user;
                        }
                    )
                );
                return;
            }
            callback([])
        });

    },


};

function query(statement, params, callback) {

    return db.all(statement, params, function (err, rows) {

        if (err) throw err;

        callback(rows, this);
    });
}

module.exports = UserModel;