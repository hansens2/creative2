$("#feeling").click(function(e){
  e.preventDefault();
  var everything = "";
   var apiKey = "AIzaSyCp8h92fiNWvPHlnG3u7jHsghZsR9ukLu4"
   var topic = $("#feelingForm :selected").val();
   var query = $("#queryWord").val();

   var myurl= "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q="+query+"&key="+ apiKey;

   everything = "<ul>";

   $.getJSON(myurl, function(data){ 
    var items = data.items;

    $.each(items, function (index, item) {
        everything += "<li>";
         console.log( item.id.videoId);
        var videoID = item.id.videoId;
        var title = item.snippet.title;
        var thumbnailUrl = item.snippet.thumbnails.medium.url;

        // var link = item.link;
        // var isAnswered = item.is_answered;

        everything += "<h3>"+title+"</h3><br/>";
        everything += '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+videoID+'" frameborder="0" allowfullscreen></iframe>';
         everything += "</li>";
         everything += "<hr/>";
      });
    everything +="</ul>"
    $("#embedVideo").html(everything);

})
 });