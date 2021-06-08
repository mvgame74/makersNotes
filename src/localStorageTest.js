

document.addEventListener("DOMContentLoaded", () => {

var addToWatchlist = document.querySelector('#add-to-watchlist');
var watchlistItem = document.querySelector('#watchlist-item');
var watchlist = document.querySelector('#watchlist')

addToWatchlist.addEventListener('submit', event => {
  event.preventDefault();
  if (watchlistItem.value.length < 1) return ;
  watchlist.innerHTML += ('<li>' + watchlistItem.value + '</li>');
  watchlistItem.value = '';
  localStorage.setItem('watchlistItems', watchlist.innerHTML);
}, false);


var saved = localStorage.getItem('watchlistItems');

if (saved) {
  watchlist.innerHTML = saved;
}

});
