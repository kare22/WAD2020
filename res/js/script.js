let posts = []

$(function () {
    $('#post-author-img').hover(() => {
        $('.profile-info-dropdown').show();
    })
    $('.avatar-container').hover(() => {
        $('.profile-info-dropdown').hide();
    });
    Get('users/1').then(res => {
        if(res){
            const firstName = res && res.firstname || '';
            const lastName = res && res.lastname || '';
            const email = res && res.email || '';
            const avatar = res && res.avatar || '';
            $('#profile-name').html( firstName + (firstName && ' ') + lastName || 'Name not found!');
            $('#profile-email').html(email || 'Email not found!');
            if(avatar){
                $('#post-author-img').attr('src', avatar);
            }
        }
    });

    Get('posts').then(answer => {
        if (res) {
            let authorFirstname = res && res.author.firstname || '';
            let authorLastname = res && res.author.lastname || '';
            let authorAvatar = res && res.author.avatar || '';
            let createTime = res && res.createTime || '';
            let text = res && res.text || '';
            let likes = res && res.likes || '';
            $('#authorName').html(authorFirstname + (authorFirstname && ' ') + authorLastname || 'Name not found!');
            $('#authorAvatar').attr('src', authorAvatar);
            $('#dateTime').html(createTime);
            $('#postTitle').html(text);
            $('#likeButton').html(likes);
        }
    })

    /*loadPostsInfo()
        .then(function (response) {
            let post = new Post(
                response.title,
                response.semester,
                response.grade
            );
            displayPostsInfo(post);
        })
        .catch(function () {
            alert('Error loading posts info')
        })//*/

    $('.like-button').click(function () {
        $(this).toggleClass('like-button liked')
        $(this).toggleClass('like-button')
    })

})

/*function loadPostsInfo() {
    return $.get(
        {
            url: "https://private-anon-a152871d21-wad20postit.apiary-mock.com/posts",
            success: function ( response ) {
                for (let post of response) {
                    let author = post.author;
                    let postAuthorFirstname = author.firstname;
                    let postAuthorLastname = author.lastname;
                    let postAuthorAvatar = author.avatar;
                    if (post.media === null) {
                        posts.push(new Post(postAuthorFirstname, postAuthorLastname, postAuthorAvatar, post.text, post.createTime, post.likes))
                    }
                    posts.push(new Post(postAuthorFirstname, postAuthorLastname, postAuthorAvatar, post.text, post.createTime, post.media, post.likes))
                }
            },
            error: function () {
                alert('Could not load posts data.')
            }
        }
    )
} //*/

/*function displayPostsInfo() {
    $('post')
}//*/

/*function getPosts() {
    Get('posts').done(answer => {
        carsTable.rows().remove();
        let out = [];
        answer.forEach((car, index) => {
            out.push([
                `<div id="car_reg_nr_${car.uuid}" class="car_row">${car.reg_nr}</div>`,
                `<div id="car_reg_nr_${car.uuid}" class="car_row">${car.model}</div>`,
                `<div id="car_reg_nr_${car.uuid}" class="car_row">${displayAdditionalInfo(car.additional_info)}</div>`,
                `<div id="car_reg_nr_${car.uuid}" class="car_row">${car.client.name}</div>`,
                `<i id="edit-car-row_${car.uuid}" class="fa fa-pen edit_row"></i>`
            ]);
        });

        carsTable.rows.add(out).draw(false);
        setState('cars', answer);
    }).fail(answer => {
        alert('Vigane ühendus andmebaasiga!')
    });
}; //*/