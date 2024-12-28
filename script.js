window.run = function () {
    try {
        let htmlcode = document.getElementById("html_code").value;
        let csscode = document.getElementById("css_code").value;
        let jscode = document.getElementById("js_code").value;
        let output = document.getElementById("output");

        output.contentDocument.body.innerHTML = htmlcode + "<style>" + csscode + "</style>";
        output.contentWindow.eval(jscode);
    } catch (e) {
        //alert("Error: " + e.message);
    }
};
window.change = function () {
    let htmlcode = document.getElementById("html_code");
    let csscode = document.getElementById("css_code");
    let jscode = document.getElementById("js_code");
    let selected = document.getElementById("windows").value;


    if (selected == "all") {
        htmlcode.style.height = "31.4%";
        csscode.style.height = "31.4%";
        jscode.style.height = "31.4%";
        htmlcode.style.display = "inherit";
        csscode.style.display = "inherit";
        jscode.style.display = "inherit";
    }
    else if (selected == "htmlonly") {
        htmlcode.style.height = "95%";
        htmlcode.style.display = "inherit";
        csscode.style.display = "none";
        jscode.style.display = "none";
    }
    else if (selected == "cssonly") {
        csscode.style.height = "95%";
        csscode.style.display = "inherit";
        htmlcode.style.display = "none";
        jscode.style.display = "none";
    }
    else if (selected == "jsonly") {
        jscode.style.height = "95%";
        jscode.style.display = "inherit";
        csscode.style.display = "none";
        htmlcode.style.display = "none";
    }
}
window.saveit = function () {
    let htmlcode = document.getElementById("html_code").value;
    let csscode = document.getElementById("css_code").value;
    let jscode = document.getElementById("js_code").value;

    // Function to create and download a file
    function downloadFile(filename, content) {
        let blob = new Blob([content], { type: "text/plain" });
        let link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link); // Append to body to make it clickable in Firefox
        link.click();
        document.body.removeChild(link); // Remove the link after downloading
    }

    try {
        // Download index.html
        downloadFile("index.html", htmlcode);

        // Download style.css
        downloadFile("style.css", csscode);

        // Download script.js
        downloadFile("script.js", jscode);

        alert("Files downloaded successfully.");
    } catch (e) {
        alert("Error downloading files: " + e.message);
    }
};
const wordSuggestions = {
    html: [
        "<!DOCTYPE html>", 
        "<html></html>", 
        "<head></head>", 
        "<body></body>", 
        "<script></script>", 
        "<style></style>", 
        "<link>", 
        "<meta>", 
        "<title></title>",
        "<h1></h1>", 
        "<h2></h2>", 
        "<h3></h3>", 
        "<h4></h4>", 
        "<h5></h5>", 
        "<h6></h6>", 
        "<p></p>", 
        "<a href=''></a>", 
        "<img src='' alt=''>", 
        "<div></div>", 
        "<span></span>", 
        "<ul></ul>", 
        "<ol></ol>", 
        "<li></li>", 
        "<table></table>", 
        "<thead></thead>", 
        "<tbody></tbody>", 
        "<tr></tr>", 
        "<td></td>", 
        "<th></th>", 
        "<button></button>", 
        "<input type='text'>", 
        "<input type='password'>", 
        "<input type='checkbox'>", 
        "<input type='radio'>", 
        "<input type='submit'>", 
        "<textarea></textarea>", 
        "<select></select>", 
        "<option></option>", 
        "<form></form>", 
        "<label></label>", 
        "<fieldset></fieldset>", 
        "<legend></legend>", 
        "<iframe src=''></iframe>", 
        "<nav></nav>", 
        "<header></header>", 
        "<footer></footer>", 
        "<section></section>", 
        "<article></article>", 
        "<aside></aside>", 
        "<main></main>", 
        "<figure></figure>", 
        "<figcaption></figcaption>", 
        "<audio controls></audio>", 
        "<video controls></video>", 
        "<source src='' type=''>", 
        "<track kind='' src='' label=''>", 
        "<progress value='' max=''></progress>", 
        "<meter value='' min='' max=''></meter>", 
        "<canvas></canvas>", 
        "<svg></svg>", 
        "<path d=''></path>", 
        "<circle></circle>", 
        "<rect></rect>", 
        "<line></line>", 
        "<polyline></polyline>", 
        "<polygon></polygon>", 
        "<text></text>", 
        "<br>", 
        "<hr>", 
        "<b></b>", 
        "<strong></strong>", 
        "<i></i>", 
        "<em></em>", 
        "<u></u>", 
        "<s></s>", 
        "<mark></mark>", 
        "<small></small>", 
        "<sup></sup>", 
        "<sub></sub>", 
        "<code></code>", 
        "<pre></pre>", 
        "<kbd></kbd>", 
        "<abbr title=''></abbr>", 
        "<cite></cite>", 
        "<q></q>", 
        "<blockquote></blockquote>", 
        "<ins></ins>", 
        "<del></del>", 
        "<time></time>", 
        "<data></data>", 
        "<details></details>", 
        "<summary></summary>", 
        "<dialog open></dialog>", 
        "<template></template>", 
        "<slot></slot>"
    ],    
    css: [
        "background-color", 
        "color", 
        "font-size", 
        "margin", 
        "padding", 
        "border", 
        "display", 
        "position", 
        "width", 
        "height", 
        "background", 
        "background-image", 
        "background-position", 
        "background-repeat", 
        "background-size", 
        "border-color", 
        "border-width", 
        "border-style", 
        "border-radius", 
        "box-shadow", 
        "box-sizing", 
        "clear", 
        "clip", 
        "cursor", 
        "flex", 
        "flex-grow", 
        "flex-shrink", 
        "flex-basis", 
        "flex-direction", 
        "flex-wrap", 
        "justify-content", 
        "align-items", 
        "align-content", 
        "align-self", 
        "grid-template-columns", 
        "grid-template-rows", 
        "grid-gap", 
        "grid-column", 
        "grid-row", 
        "font-family", 
        "font-style", 
        "font-weight", 
        "line-height", 
        "letter-spacing", 
        "text-align", 
        "text-decoration", 
        "text-transform", 
        "white-space", 
        "overflow", 
        "overflow-x", 
        "overflow-y", 
        "z-index", 
        "visibility", 
        "vertical-align", 
        "opacity", 
        "transition", 
        "transition-property", 
        "transition-duration", 
        "transition-timing-function", 
        "transform", 
        "transform-origin", 
        "animation", 
        "animation-name", 
        "animation-duration", 
        "animation-timing-function", 
        "animation-delay", 
        "animation-iteration-count", 
        "animation-direction", 
        "content", 
        "clip-path", 
        "filter", 
        "object-fit", 
        "object-position", 
        "pointer-events", 
        "resize", 
        "scroll-behavior", 
        "user-select", 
        "word-spacing", 
        "writing-mode", 
        "outline", 
        "outline-color", 
        "outline-width", 
        "outline-style", 
        "border-collapse", 
        "border-spacing", 
        "caption-side", 
        "empty-cells", 
        "list-style", 
        "list-style-type", 
        "list-style-position", 
        "list-style-image", 
        "max-width", 
        "max-height", 
        "min-width", 
        "min-height", 
        "padding-top", 
        "padding-right", 
        "padding-bottom", 
        "padding-left", 
        "margin-top", 
        "margin-right", 
        "margin-bottom", 
        "margin-left", 
        "background-attachment", 
        "float", 
        "top", 
        "right", 
        "bottom", 
        "left", 
        "font-variant", 
        "counter-reset", 
        "counter-increment"
    ],
    js: [
        "function", 
        "let", 
        "const", 
        "var", 
        "document", 
        "window", 
        "alert", 
        "console", 
        "if", 
        "else", 
        "for", 
        "while", 
        "do", 
        "switch", 
        "case", 
        "break", 
        "continue", 
        "try", 
        "catch", 
        "finally", 
        "throw", 
        "class", 
        "extends", 
        "constructor", 
        "super", 
        "import", 
        "export", 
        "default", 
        "return", 
        "async", 
        "await", 
        "new", 
        "typeof", 
        "instanceof", 
        "in", 
        "this", 
        "with", 
        "delete", 
        "void", 
        "yield", 
        "debugger", 
        "Promise", 
        "then", 
        "catch", 
        "all", 
        "race", 
        "resolve", 
        "reject", 
        "setTimeout", 
        "setInterval", 
        "clearTimeout", 
        "clearInterval", 
        "parseInt", 
        "parseFloat", 
        "isNaN", 
        "isFinite", 
        "Math", 
        "Math.round", 
        "Math.floor", 
        "Math.ceil", 
        "Math.random", 
        "Math.max", 
        "Math.min", 
        "JSON", 
        "JSON.stringify", 
        "JSON.parse", 
        "Date", 
        "RegExp", 
        "Array", 
        "Array.prototype.map", 
        "Array.prototype.filter", 
        "Array.prototype.reduce", 
        "Array.prototype.forEach", 
        "Array.prototype.find", 
        "Array.prototype.indexOf", 
        "Array.prototype.includes", 
        "Object", 
        "Object.keys", 
        "Object.values", 
        "Object.entries", 
        "Object.assign", 
        "Object.create", 
        "Object.freeze", 
        "Object.seal", 
        "localStorage", 
        "sessionStorage", 
        "fetch", 
        "XMLHttpRequest", 
        "Navigator", 
        "history", 
        "location", 
        "innerHTML", 
        "querySelector", 
        "querySelectorAll", 
        "addEventListener", 
        "removeEventListener", 
        "setAttribute", 
        "getAttribute", 
        "classList", 
        "style", 
        "parentNode", 
        "childNodes", 
        "firstChild", 
        "lastChild", 
        "nextSibling", 
        "previousSibling", 
        "textContent", 
        "innerHTML", 
        "outerHTML"
    ]
    };

window.predict = function(event, textAreaId) {
    try{
    const textArea = document.getElementById(textAreaId);
    const cursorPosition = textArea.selectionStart;
    const textBeforeCursor = textArea.value.substring(0, cursorPosition);

    const lastWord = textBeforeCursor.split(/\s+/).pop().toLowerCase();
    const mode = textAreaId.split('_')[0]; // Determines if it's HTML, CSS, or JS

    const suggestions = wordSuggestions[mode] || [];
    const prediction = suggestions.find(word => word.toLowerCase().includes(lastWord));

    const predictionBox = document.getElementById("prediction");
    if (prediction && lastWord.length > 0) {
        predictionBox.innerText = prediction;
        predictionBox.style.display = "block";
    } else {
        predictionBox.style.display = "none";
    }
}
catch(e){
    //console.log(e)
}
};

// Insert the prediction on "Enter" key press
window.checkEnter = function(event, textAreaId) {
    try {
        const predictionBox = document.getElementById("prediction");

        // Only use autocomplete if the prediction box is visible
        if (event.key === "Enter" && predictionBox.style.display === "block") {
            const textArea = document.getElementById(textAreaId);
            const cursorPosition = textArea.selectionStart;
            const textBeforeCursor = textArea.value.substring(0, cursorPosition);
            const textAfterCursor = textArea.value.substring(cursorPosition);

            const lastWord = textBeforeCursor.split(/\s+/).pop().toLowerCase();
            const mode = textAreaId.split('_')[0];

            const suggestions = wordSuggestions[mode] || [];
            const prediction = suggestions.find(word => word.toLowerCase().includes(lastWord));

            if (prediction) {
                const newText = textBeforeCursor.substring(0, textBeforeCursor.length - lastWord.length) + prediction;
                textArea.value = newText + textAfterCursor;
                textArea.selectionStart = textArea.selectionEnd = newText.length;
            }

            predictionBox.style.display = "none";

            event.preventDefault(); // Prevent default newline behavior
        } else if (event.key === "Enter") {
            // Allow default newline behavior
            return;
        }
    } catch (e) {
        // Handle errors if needed
        console.error(e);
    }
};