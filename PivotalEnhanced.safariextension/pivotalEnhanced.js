console.log("Started PivotalEnhanced");

function main() {
    var head=document.getElementsByTagName('head')[0];
    if (!head) {
        console.log("head does not exist...");
        return;
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://github.com/scarnie/pivotalEnhanced/raw/master/showdown.js'
    head.appendChild(script)
    
    script= document.createElement('script');
    script.type= 'text/javascript';
    script.innerText = engageMarkdown.toString() + "\nengageMarkdown();"
    head.appendChild(script);
    
    function engageMarkdown() {
        console.log("engageMarkdown");
        
        if (typeof(Showdown) == 'undefined') {
            console.log("running loop");
            
            var inter = window.setInterval(function() {
                if (typeof(Showdown) != 'undefined') {
                    window.clearInterval(inter);
                    engageMarkdown();
                }
            }, 100);
            return;
        }
        
        if (Element != undefined) {
            console.log("Element exists");
        }

        if (typeof(Element.cleanupText) == 'function') {
            console.log("Engaging markdown");
            Element.oldCleanupText = Element.cleanupText;
            var converter = new Showdown.converter();
            Element.cleanupText = function(text) {
                if (text == null) {
                    return "";
                }
                
                if (text.match(/:MD$/)) {
                    return converter.makeHtml(text.replace(/:MD$/, ''));
                }

                return Element.oldCleanupText(text);
            }
        } else {
            console.log("Element.cleanupText does not exist");
        }
    }
}
main();