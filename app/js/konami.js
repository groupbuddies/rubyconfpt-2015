$(function() {
  var musicURL = 'music.mp3';
  var awesomeMusic = new Konami();

  awesomeMusic.code = function() {
    console.log('THEY ARE TAKING THE HOBITS TO ISENGARD!');
    var audio = new Audio(musicURL);
    audio.play();
  };

  awesomeMusic.load();
});
