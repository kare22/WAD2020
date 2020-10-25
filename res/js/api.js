const api_url = 'https://private-anon-a152871d21-wad20postit.apiary-mock.com/';

function Get(url) {
    let settings = {
        "url": api_url + url,
        "method": "GET",
    };
    return $.ajax(settings).done((response) => {
        return response;
    }).fail((response) => {
        console.log(response);
    });
}