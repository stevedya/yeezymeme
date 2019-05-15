var kanyeURL = 'https://api.kanye.rest';
var unsplashURL = 'https://api.unsplash.com/photos/random?client_id=39cb126470fca11b60858c0c1ead5a66b8594b577e84c0ede7230b11e463460d';
  
async function fetchKanye(url, element) {
  return fetch(url)
    .then(response => response.json())
    .then(text => {
        $(element).text(text.quote)
    }).catch(err => {
      console.error('fetch failed', err);
    });
}

fetchKanye(kanyeURL, '.quote-one');
fetchKanye(kanyeURL, '.quote-two');


async function fetchImage(url, element) {
  return fetch(url)
    .then(response => response.json())
    .then(text => {
      $(element).attr('src', text.urls.regular);
    }).catch(err => {
      console.error('fetch failed', err);
    });
}

fetchImage(unsplashURL, '.random-one');
fetchImage(unsplashURL, '.random-two');

var firstImg = true
$('.load-photo').on('click', function(){
    firstImg = !firstImg
    if (firstImg) {
      fetchKanye(kanyeURL, '.quote-one');
      fetchImage(unsplashURL, '.random-one');
    } else {
      fetchKanye(kanyeURL, '.quote-two');
      fetchImage(unsplashURL, '.random-two');
    }
});