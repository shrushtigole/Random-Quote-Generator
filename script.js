var motto=[
    {
        content:"Be yourself; everyone else is already taken.",
        auth:"― Oscar Wilde"
    },
    {
        content:"Be the change that you wish to see in the world.",
        auth:"― Mahatma Gandhi"
    },
    {
        content:"Live as if you were to die tomorrow. Learn as if you were to live forever.",
        auth:"― Mahatma Gandhi"
    },
    {
        content:"Courage doesn't always roar. Sometimes courage is the little voice at the end of the day that says I'll try again tomorrow.",
        auth:"― Mary Anne Radmacher"
    },
    {
        content:"Take the time to enjoy the little things, for one day you may look back and realize they were the big things.",
        auth:"― Robert Brault"
    },
    {
        content:"You only live once, but if you do it right, once is enough.",
        auth:"― Mae West"
    },
    {
        content:"You don't have to be great to start, but you have to start to be great.",
        auth:"― Zig Ziglar"
    },
]

var proverb= document.getElementById("quoteList")
proverb.innerHTML=
`<div class="quotes" >
    <p id="text">Press Generate Qoute for Generating Quote</p>
    <p id="author"></p>
</div>
`
// console.log(proverb);


let btn= document.getElementById("creator")
let content= document.getElementById("text")
let auth= document.getElementById("author")

creator.addEventListener('click', function(){
    let randomQuotes= motto[Math.floor(Math.random()*motto.length)]
    // console.log(randomQuotes);
    content.innerHTML= randomQuotes.content
    auth.innerHTML=randomQuotes.auth
})


function addQuote(){
    var addition= document.getElementById("new")

    addition.innerHTML=
    `<input type="text" placeholder="Write Quote" id="inputQuote"><br>
     <input type="text" placeholder="Author Name" id="inputAuthor"><br>
     <button id="create" onClick="addedNewQuote()">Create</button>
    `
// console.log(addition);
}

//Input from user
function addedNewQuote(){
    console.log("functionCalled");
    var writeQuote = document.getElementById("inputQuote").value;
    var writeAuthor = document.getElementById("inputAuthor").value;
    console.log(writeQuote);
    console.log(writeAuthor);


    // To push the New Quotes form the user
    motto.push({content: writeQuote , auth:writeAuthor});
    console.log(motto);
}
