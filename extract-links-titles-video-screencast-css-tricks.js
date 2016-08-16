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

for ( i=0; i < videoScreencastLinks.length; i++) {
console.log("Links for Video Screencast: ", videoScreencastLinks[i].innerHTML);
}
// if they are different they get listed separated, if not there will be a 2 on the top left console.log

// but I want to compare if the content is the same
var videoScreencastLinksTop = document.getElementsByClassName('breadcrumbs video-nav breadcrumbs-top')[0].innerHTML;
var videoScreencastLinksBottom = document.getElementsByClassName('breadcrumbs video-nav breadcrumbs-top')[1].innerHTML;

// before let's determine what they are: is it an object or a string?
console.log(typeof(videoScreencastLinksTop));
console.log(typeof(videoScreencastLinksBottom));

if ( videoScreencastLinksTop === videoScreencastLinksBottom ) {
	console.info('they are ===');
} else {
	console.error('they are !===');
}
// ok, they are equal, let's move on!