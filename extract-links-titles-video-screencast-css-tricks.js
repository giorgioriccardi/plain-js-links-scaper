/*
I want the list of all the videos here:
https://css-tricks.com/video-screencasts
but there are several sub-pages, and the last (today) is:
https://css-tricks.com/video-screencasts/page/8/
*/

// we determine how many 'nav' container there are for video-screencast
var videoScreencastLinks = document.getElementsByTagName('nav');
console.log("Nav elements: ", videoScreencastLinks.length); // 4

// but we only want to work with the ones for the video screencast
var videoScreencastLinks = document.getElementsByClassName('breadcrumbs video-nav breadcrumbs-top');
console.log("Nav elements for Video Screencast: ", videoScreencastLinks.length); // 2

// now that we determined that the array is just [0,1] we have to check that [0] === [1]
var videoScreencastLinks = document.getElementsByClassName('breadcrumbs video-nav breadcrumbs-top');

for ( i=0; i < videoScreencastLinks.length; i++ ) {
console.log("Links for Video Screencast: ", videoScreencastLinks[i].innerHTML);
}
// if they are different they get listed separated

// but I want to compare if the content is the same
var videoScreencastLinksTop = document.getElementsByClassName('breadcrumbs video-nav breadcrumbs-top')[0].innerHTML;
var videoScreencastLinksBottom = document.getElementsByClassName('breadcrumbs video-nav breadcrumbs-top')[1].innerHTML;

// before let's determine what they are: is it an object, a string or what?
console.log(typeof(videoScreencastLinksTop));
console.log(typeof(videoScreencastLinksBottom));

if ( videoScreencastLinksTop === videoScreencastLinksBottom ) {
	console.info('Ok, they are ===');
} else {
	alert('No, Links #top and #bottom are !===');
}

// Parsing the URLS
// (this array will be used later when calling all pages via Ajax call)

var pageUrls = [];

for ( j=0; j < 10; j++ ) {
	// pageUrls += "https://css-tricks.com/video-screencasts/page/" + j + "/" + ", ";
	pageUrls.push("https://css-tricks.com/video-screencasts/page/" + j + "/");
}

//console.log(pageUrls);

// method one:
var index;
for ( index = 0; index < pageUrls.length; index++ ) {
    console.log(pageUrls[index]);
}

// method two:
// pageUrls.forEach( function(listPages) {
//     console.log(listPages);
// });


// Narrow down from the article content to the video link
function loopVideos() { 
  var articles = document.getElementsByTagName("article");
  for( var s = 0; s < articles.length; s++ ){
    var infoContainer = articles[s].getElementsByClassName("video-info")[0];
	var videoLink = infoContainer.getElementsByTagName("a");

	var text = videoLink[0].innerHTML; // just the title
	var link = videoLink[0]; // and the video link

	//console.log(text + link);
	console.log(text);
	console.log(link);

	// in case we wanna iterate through all the videoLink object elements:
	for (objectElements in videoLink) {
      console.info("This link object key is: " + objectElements + ", value is: " + videoLink[objectElements] + ".");
    }
  }
}

loopVideos();

// Next, nicely output all the liks in the array, but maybe before let's petch all the other pages?!