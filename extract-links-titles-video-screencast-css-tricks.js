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

// next steps:
// checking what kind of data type we are outputtig