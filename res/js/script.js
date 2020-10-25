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

    $('.like-button').click(function () {
        $(this).toggleClass('like-button liked')
        $(this).toggleClass('like-button')
    })

})

function loadPostsInfo() {
    return $.get(
        {
            url: "https://private-anon-a152871d21-wad20postit.apiary-mock.com/posts",
            success: function ( response ) {
                for (let post of response) {
                    posts.push(new Post(post.text, post.createTime, post.likes, post.authorPicture, post.authorName))
                }
            },
            error: function () {
                alert('Could not display posts data.')
            }
        }
    )
}

function displayPostsInfo() {

}
