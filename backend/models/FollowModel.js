const db = require('../sqlite/connection');

const FollowModel = {

    create(userId, followerId, callback) {
        let statement = 'INSERT INTO follow (user_id, follower_id) VALUES (?, ?);';

        return query(statement, [userId, followerId], callback);
    },

    delete(userId, followerId, callback) {

        let statement = 'UPDATE follow SET delete_time = CURRENT_TIMESTAMP WHERE user_id = ? AND follower_id = ?;';

        return query(statement, [userId, followerId], callback);
    },

    getByUserIdAndFollowerId(userId, followerId, callback) {

        const statement = 'SELECT * FROM follow WHERE user_id = ? AND follower_id = ? AND delete_time IS NULL;';

        return query(statement, [userId, followerId], callback);

    }
};

function query(statement, params, callback) {

    return db.all(statement, params, function (err, rows) {

        if (err) throw err;

        callback(rows, this);
    });
}

module.exports = FollowModel;