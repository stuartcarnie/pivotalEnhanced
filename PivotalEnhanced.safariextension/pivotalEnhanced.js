console.log("Started PivotalEnhanced");

function main() {
    var head=document.getElementsByTagName('head')[0];
    if (!head) {
        console.log("head does not exist...");
        return;
    }

    var script= document.createElement('script');
    script.type= 'text/javascript';
    script.innerText = checkElement.toString() + "\ncheckElement();"
    head.appendChild(script);

    function checkElement() {
        if (Element != undefined) {
            console.log("Element exists");
        }

        if (typeof(Element.cleanupText) == 'function') {
            console.log("Element.cleanupText exists");
        } else {
            console.log("Element.cleanupText does not exist");
        }
    }
}
main();