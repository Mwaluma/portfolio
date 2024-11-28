// Obtain the elements with the class name tab-links. Returns a list of elements
var tabLinks= document.getElementsByClassName("tab-links");
var tabContents= document.getElementsByClassName("tab-contents");

function openTab(){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
}

console.log(tabLinks);
console.log(tabContents);
