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
function singleVideoLink() {

	var articles = document.getElementsByTagName("article");
	for( var s = 0; s < articles.length; s++ ){
	  console.log(articles[s]);
	}
	 
	var videoContainer = document.getElementsByClassName("video-card group")[0]; // this array triggers an error! we either run the array on article or on the video-card group 
	var infoContainer = videoContainer.getElementsByClassName("video-info")[0];
	var videoLink = infoContainer.getElementsByTagName("a");

	for ( var g = 0; g < videoLink.lenght; g++ ) {
	  // console.log(videoLink[g]);
	}

	var text = videoLink[g].innerHTML; // just the title
	var link = videoLink[g]; // and the video link

	//console.log(text + link);
	console.log(text);
	console.log(link);
	  
}

singleVideoLink();

// Next, output all the liks in the array