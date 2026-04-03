
const b1 = document.createElement('b1');
let fancy = document.getElementsByID();

function makeBigger()
{
    alert("Hello, world!"); // Test for the JavaScript
    let textArea = document.getElementById("textInput");
    textArea.style.fontSize = "24pt";
}

function makeFancy()
{
    let textArea = document.getElementById("textInput");
    let fancyRadio = document.getElementById("fancy");

    if (fancyRadio.checked)
    {
        alert("FancyShmancy selected!");
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
    else
    {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.textDecoration = "none";
    }
}


function mooText()
{   
    let textArea = document.getElementById("textInput");
    textArea.value = textArea.value.toUpperCase();

    let  sentences = textArea.value.split(".");

    for (let i = 0; i < sentences.length; i++) 
    {
        let sentence = sentences[i].trim();

        if (sentence.length > 0) 
        {
            let words = sentence.split(" ");
            words[words.length - 1] = words[words.length - 1] + "-Moo";
            sentences[i] = words.join(" ");
        }

        textArea.value = sentences.join(".");
    }
}