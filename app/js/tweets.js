$(function() {
  var tweetsPath = 'tweets.json';
  var picturesPath = 'pictures.json';

  var tweetLinkClass = '.Tweet';
  var tweetTextClass = '.Tweet-text';
  var tweetNameClass = '.Tweet-authorName';
  var tweetPictureClass = '.Tweet-picture';
  var tweetHandlerClass = '.Tweet-authorHandle';
  var lastYearPicture = '.LastYear-featuredImage';

  var tweetContainerClass = '.LastYear-column';

  function shuffleArray(array) {
    var j, x, i = array.length;
    for (j, x, i; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x) ;
    return array;
  }

  function populateTweet($container, data, picture) {
    $container.find(tweetLinkClass).attr('href', data.url);
    $container.find(tweetNameClass).text(data.author);
    $container.find(tweetHandlerClass).text(data.handle);
    $container.find(tweetNameClass).text(data.author);
    $container.find(tweetTextClass).text('"' + data.text + '"');
    $container.find(tweetPictureClass).attr('src', data.picture);
  }

  function populatePicture($container, picture) {
    $container.find(lastYearPicture).attr('src', picture);
  }

  $.getJSON(tweetsPath, function(data) {
    var tweetsContainer = $(tweetContainerClass);
    var tweets = shuffleArray(data.tweets);

    tweetsContainer.toArray().forEach(function(container, index) {
      populateTweet($(container), tweets[index]);
    });
  });

  $.getJSON(picturesPath, function(data) {
    var picturesContainer = $(tweetContainerClass);
    var pictures = shuffleArray(data.pictures);

    picturesContainer.toArray().forEach(function(container, index) {
      populatePicture($(container), pictures[index]);
    });
  });
});
