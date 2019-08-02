var winheight, docheight, trackLength, throttlescroll

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}

function getmeasurements(){
    winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
    docheight = getDocHeight()
    trackLength = docheight - winheight
}
 
function amountscrolled(){
    var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
    var docheight = getDocHeight()
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    var trackLength = docheight - winheight
    var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    console.log(pctScrolled + '% scrolled')
}

window.addEventListener("resize", function(){
    getmeasurements()
}, false)
 
window.addEventListener("scroll", function(){
    clearTimeout(throttlescroll)
        throttlescroll = setTimeout(function(){ // throttle code inside scroll to once every 50 milliseconds
        amountscrolled()
    }, 50)
}, false)

TimeMe.initialize({
	currentPageName: "my-home-page", // current page
	idleTimeoutInSeconds: 30 // seconds
});

var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();

TimeMe.callAfterTimeElapsedInSeconds(0, function(){
	console.log("The user has been actively using the page for 0 seconds! Let's prompt them with something.");
});
TimeMe.callAfterTimeElapsedInSeconds(10, function(){
	console.log("The user has been actively using the page for 10 seconds! Let's prompt them with something.");
});
TimeMe.callAfterTimeElapsedInSeconds(30, function(){
	console.log("The user has been actively using the page for 30 seconds! Let's prompt them with something.");
});