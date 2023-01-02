//Checking if the page is loaded in an iframe
if(window.self != window.top) {
//Analyzing URL to check embed link
try {
if(window.parent.location.hostname.indexOf("about:blank") == -1) {
window.location.href = "about:blank";
} else {
//iFrame from host site
}
} catch (ex) {
//Blocking Embed...
window.location.href = "https://anto9167.github.io/gxnow/unbed/blocked";
}
} 
