// BACK END
function Album(albumName, cover, artist, year) {
  this.albumName = albumName;
  this.cover = cover;
  this.artist = artist;
  this.year = year;
}

Album.prototype.galleryItem = function() {
  return '<div class="item"> <h4>' + this.albumName + '</h4>' + '<img src="' + this.cover + '" alt="" />'+ '<p>' + this.artist + '</p><p>' + this.year + '</p></div>';
}
// FRONT END
$(document).ready(function() {

  $('form').submit(function() {
    event.preventDefault();

    var album = $("input#album-name").val();
    var cover = $("input#cover").val();
    var artist = $("input#artist").val();
    var year = $("input#year").val();

    console.log(album);
    console.log(cover);
    console.log(artist);
    console.log(year);

    var newAlbum = new Album(album, cover, artist, year);
    console.log(newAlbum);

    $('#gallery').append(newAlbum.galleryItem());

  });
});
