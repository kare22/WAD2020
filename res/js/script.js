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

    Get('posts').then(res => {
        let posts = '';
        if (res && res.length) {
            console.log('res', res);
            res.forEach(post => {
                console.log('post', post);
                const firstname = post.author && post.author.firstname || '-';
                const lastname = post.author && post.author.lastname || '-';
                const avatar = post.author && post.author.avatar || '-';
                const createTime = post.createTime || '-';
                const text = post.text || '';
                const likes = post.likes || '-';
                posts +=  `
              <div class="post">
                <div class="post-author">
                          <span class="post-author-info">
                            <img src=${avatar} alt="Post author">
                            <small style="margin-left: 1rem">${firstname} ${lastname}</small>
                          </span>
                  <small>${createTime}</small>
                </div>
                <div class="post-image">
                  <img src="res/images/posts/2.jpg" alt="">
                </div>
                <div class="post-title">
                  <h3>${text}</h3>
                </div>
                <div class="post-actions">
                  <button type="button" name="like" class="like-button">${likes}</button>
                </div>
              </div>
            `
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

