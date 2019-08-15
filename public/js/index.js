/** Scroll events */
let winHeight;
let docHeight;
let trackLength;
let throttlescroll;

function getDocHeight() {
  const d = document;
  return Math.max(
    d.body.scrollHeight,
    d.documentElement.scrollHeight,
    d.body.offsetHeight,
    d.documentElement.offsetHeight,
    d.body.clientHeight,
    d.documentElement.clientHeight
  );
}

function getmeasurements() {
  winHeight =
    window.innerHeight ||
    (document.documentElement || document.body).clientHeight;
  docHeight = getDocHeight();
  trackLength = docHeight - winHeight;
}

function amountscrolled() {
  const winHeight =
    window.innerHeight ||
    (document.documentElement || document.body).clientHeight;
  const docHeight = getDocHeight();
  const scrollTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;
  const trackLength = docHeight - winHeight;
  const pctScrolled = Math.floor((scrollTop / trackLength) * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
  // Here is where we would assign the pctScrolled to our payload object that we will deliver to the backend
  console.log(pctScrolled + '% scrolled');
}

window.addEventListener(
  'resize',
  () => {
    getmeasurements();
  },
  false
);

window.addEventListener(
  'scroll',
  () => {
    clearTimeout(throttlescroll);
    throttlescroll = setTimeout(() => {
      // throttle code inside scroll to once every 50 milliseconds
      amountscrolled();
    }, 50);
  },
  false
);

/** Timing events */
TimeMe.initialize({
  currentPageName: 'my-home-page', // current page
  idleTimeoutInSeconds: 60 // TODO: determine what we want this to be
});

TimeMe.callAfterTimeElapsedInSeconds(0, () => {
  console.log(
    "The user has been actively using the page for 0 seconds! Let's prompt them with something."
  );
  // TODO: call backend api with payload here
});
TimeMe.callAfterTimeElapsedInSeconds(10, () => {
  console.log(
    "The user has been actively using the page for 10 seconds! Let's prompt them with something."
  );
  // TODO: call backend api with payload here
});
TimeMe.callAfterTimeElapsedInSeconds(30, () => {
  console.log(
    "The user has been actively using the page for 30 seconds! Let's prompt them with something."
  );
  // TODO: call backend api with payload here
});
