$(function () {
    $('#post-author-img').hover(() => {
        $('.profile-info-dropdown').show();
    })
    $('.avatar-container').hover(() => {
        $('.profile-info-dropdown').hide();
    });
    Get('users/1').then(res => {
        if (res) {
            const firstName = res && res.firstname || '';
            const lastName = res && res.lastname || '';
            const email = res && res.email || '';
            const avatar = res && res.avatar || '';
            $('#profile-name').html(firstName + (firstName && ' ') + lastName || 'Name not found!');
            $('#profile-email').html(email || 'Email not found!');
            if (avatar) {
                $('#post-author-img').attr('src', avatar);
            }
        }
    });

    Get('posts').then(res => {
        let posts = '';
        if (res && res.length) {
            console.log('res', res);
            res.forEach(post => {
                console.log('post', post);
                const firstname = post.author && post.author.firstname || '-';
                const lastname = post.author && post.author.lastname || '-';

                const url = post && post.media && post.media.url;
                let newPost = '';
                newPost += `
                  <div class="post">
                    <div class="post-author">
                              <span class="post-author-info">
                                <img src="res/images/avatar.png" alt="Post author">
                                <small style="margin-left: 1rem">${firstname} ${lastname}</small>
                              </span>
                      <small>Sep 18, 2020 17:18</small>
                    </div>`;
                if (post.media) {
                    if (post.media.type === 'image') {
                        newPost += `<div class="post-image">
                                        <img src="${url}" alt="">
                                    </div>`
                    } else if (post.media.type === 'video') {
                        newPost += `<video controls>
                                      <source src="${url}" type="video/mp4">
                                      <source src="${url}" type="video/ogg">
                                      Your browser does not support video.
                                    </video>`
                    }

                }

                newPost += `<div class="post-title">
                      <h3>Felt cute, might delete later</h3>
                    </div>
                    <div class="post-actions">
                      <button type="button" name="like" class="like-button liked">10k</button>
                    </div>
                  </div>`;
                posts += newPost;
            });
            $('#posts').append(posts);

            $('.like-button').click(function () {
                console.log('what');
                $(this).toggleClass('like-button liked')
                $(this).toggleClass('like-button')
            })
        }
    })

})

