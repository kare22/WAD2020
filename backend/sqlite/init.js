const db = require('./connection');
db.serialize(() => {
    db
        .run(`
            CREATE TABLE IF NOT EXISTS user
            (
                id          INTEGER PRIMARY KEY AUTOINCREMENT,
                firstname   VARCHAR(255) NULL,
                lastname    VARCHAR(255) NULL,
                avatar      VARCHAR(255) NULL,
                email       VARCHAR(255) NOT NULL,
                password    VARCHAR(255) NOT NULL,
                salt        VARCHAR(32)  NULL,
                create_time DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
                update_time DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
                delete_time DATETIME     NULL
            );
        `)
        .run(`
            CREATE TABLE IF NOT EXISTS post
            (
                id          INTEGER PRIMARY KEY AUTOINCREMENT,
                author_id   INTEGER UNSIGNED                                      NOT NULL,
                text        TEXT                                                  NULL,
                media_type  VARCHAR(32) CHECK ( media_type IN ('image', 'video')) NULL,
                media_url   VARCHAR(255)                                          NULL,
                create_time DATETIME                                              NOT NULL DEFAULT CURRENT_TIMESTAMP,
                update_time DATETIME                                              NOT NULL DEFAULT CURRENT_TIMESTAMP,
                delete_time DATETIME                                              NULL
            );
        `)
        .run(`
            CREATE TABLE IF NOT EXISTS follow
            (
                id          INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id     INTEGER UNSIGNED NOT NULL,
                follower_id INTEGER UNSIGNED NOT NULL,
                create_time DATETIME         NOT NULL DEFAULT CURRENT_TIMESTAMP,
                update_time DATETIME         NOT NULL DEFAULT CURRENT_TIMESTAMP,
                delete_time DATETIME         NULL
            );
        `)
        .run(`
            CREATE TABLE IF NOT EXISTS post_like
            (
                id          INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id     INTEGER UNSIGNED NOT NULL,
                post_id     INTEGER UNSIGNED NOT NULL,
                create_time DATETIME         NOT NULL DEFAULT CURRENT_TIMESTAMP,
                update_time DATETIME         NOT NULL DEFAULT CURRENT_TIMESTAMP,
                delete_time DATETIME         NULL
            );
        `)
});
db.serialize(() => {
    db
        .run(`DELETE FROM user;`)
        .run(`DELETE FROM post;`)
        .run(`DELETE FROM follow;`)
        .run(`DELETE FROM post_like;`)
        .run(`INSERT INTO user (id, firstname, lastname, email, avatar, password, salt) VALUES (?, ?, ?, ?, ?, ?, ?);`,
            [
                1,
                'John',
                'Doe',
                'john.doe@example.com',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                '608a3596ec397e4351ab99c048a4b08aaf0cdca34972bd53ef5b33cecd99f86a',
                'a52eb3447db065afc6efb6eaf5650712'
            ]
        )
        .run(`INSERT INTO user (id, firstname, lastname, email, avatar, password, salt) VALUES (?, ?, ?, ?, ?, ?, ?);`,
            [
                2,
                'Gordon',
                'Freeman',
                'gordon.freeman@example.com',
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                '4d735a70ad9bccea19137673cebc768d593cd43c869d955071d96a291363c0fd',
                '20a5007fcc0b262513f063ccc2c9b929'
            ]
        )
        .run(`INSERT INTO user (id, firstname, lastname, email, avatar, password, salt) VALUES (?, ?, ?, ?, ?, ?, ?);`,
            [
                3,
                'Sarah',
                'Connor',
                'sarah.connor@example.com',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
                'e269e53e6b8865f4b8430559f23b0ea9f5cd37b3cd321bb45d80dbffb8ee473c',
                'e8f5799121c8e83b8e2c23c6bb8903ee'
            ]
        )
        .run(`INSERT INTO user (id, firstname, lastname, email, avatar, password, salt) VALUES (?, ?, ?, ?, ?, ?, ?);`,
            [
                5,
                'Richard',
                'Stallman',
                'gnu@example.com',
                'https://images.unsplash.com/photo-1553798194-cc0213ae7f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
                'b0a58152d2997723427c2cdec510cb5e3626f2433706d63a933d763cc7f7c550',
                'c3e7c7bfd79061bef6fd02576529e08f'
            ]
        )
        .run(`INSERT INTO post (id, author_id, text, media_type, media_url) VALUES (?, ?, ?, ?, ?);`,
            [
                1,
                2,
                'I think it\'s going to rain',
                'image',
                'http://www.pastatdude.com/uploaded_images/hl2-2007-10-20-16-36-36-32-713089.jpg'
            ]
        )
        .run(`INSERT INTO post (id, author_id, text, media_type, media_url) VALUES (?, ?, ?, ?, ?);`,
            [
                2,
                3,
                'Which weighs more, a pound of feathers or a pound of bricks?',
                null,
                null
            ]
        )
        .run(`INSERT INTO post (id, author_id, text, media_type, media_url) VALUES (?, ?, ?, ?, ?);`,
            [
                3,
                4,
                'Felt cute, might delete later',
                'image',
                'https://i.pcmag.com/imagery/reviews/00EfzjLJNL6FNKVxviGg7Zw-2.1569473216.fit_scale.size_1182x667.jpg'
            ]
        )
        .run(`INSERT INTO post (id, author_id, text, media_type, media_url) VALUES (?, ?, ?, ?, ?);`,
            [
                4,
                5,
                null,
                'video',
                'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4'
            ]
        )
        .run(`INSERT INTO follow (id, user_id, follower_id) VALUES (?, ?, ?);`, [1, 2, 1])
        .run(`INSERT INTO follow (id, user_id, follower_id) VALUES (?, ?, ?);`, [2, 3, 1])
        .run(`INSERT INTO follow (id, user_id, follower_id) VALUES (?, ?, ?);`, [5, 1, 2])
        .run(`INSERT INTO post_like (id, user_id, post_id) VALUES (?, ?, ?);`, [1, 3, 1])
        .run(`INSERT INTO post_like (id, user_id, post_id) VALUES (?, ?, ?);`, [2, 1, 2])
        .run(`INSERT INTO post_like (id, user_id, post_id) VALUES (?, ?, ?);`, [3, 2, 1]);
});
console.log('Database Created and Defaults Inserted');
db.close();