 // Javascript Event Listeners

// Syntax: addEventListener(event, function, useCapture)

My 

document.addEventListener("readystatechange", (event) => { if (event.target.readyState=== "complete") { console.log("readyState: complete"); initApp();

}

});

const initApp () =>

const view document.querySelector("#view2");

const div = view.querySelector("div");

const h2 div.querySelector("h2");

view.addEventListener("click", (event) => { view.style.backgroundColor = "purple";

});

div.addEventListener("click", (event) => { div.style.backgroundColor = "blue";

});

h2.addEventListener("click", (event) => {

event.target.textContent="Clicked";

});

};