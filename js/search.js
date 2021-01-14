document.addEventListener("keydown", event => {
    if (event.key == 32) {          // Spacebar code to open search
        document.getElementById('search').style.display = 'flex';
        document.getElementById('search-field').focus();
    } else if (event.key == 27) {   // Esc to close search
        document.getElementById('search-field').value = '';
        document.getElementById('search-field').blur();
        document.getElementById('search').style.display = 'none';
        document.body.style.backgroundImage = 'url("https://source.unsplash.com/random/' + w + 'x' + h + '/")';
    }
});
function showSearch() {
    document.getElementById('search-mobile').style.display = 'none';
    document.getElementById('hide-mobile').style.display = 'flex';

    document.getElementById('search').style.display = 'flex';
    document.getElementById('search-field').focus();
}

function hideSearch() {
    document.getElementById('search-field').value = '';
    document.getElementById('search-field').blur();
    document.getElementById('search').style.display = 'none';
    document.body.style.backgroundImage = 'url("https://source.unsplash.com/random/' + w + 'x' + h + '/")';

    document.getElementById('search-mobile').style.display = 'flex';
    document.getElementById('hide-mobile').style.display = 'none';
}