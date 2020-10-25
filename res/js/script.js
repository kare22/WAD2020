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
