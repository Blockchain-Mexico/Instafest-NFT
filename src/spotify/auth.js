
const hash = window.location.hash
    .substring(1)
    .split('&')
    .reduce(function(initial, item) {
        if (item) {
            var parts = item.split('=');
            initial[parts[0]]=decodeURIComponent(parts[1]);
        }
        return initial;
    }, {});
window.location.hash = '';
_token = hash.access_token;  // store token in variable
const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = '... secret ...';
const scopes = [ 'user-top-read', 'user-follow-read', 'user-read-recently-played', 'streaming' ];
const redirectUri = 'https://burli.biz/statify/analytics';
window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
