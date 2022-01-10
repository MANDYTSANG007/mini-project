var searchEl = document.querySelector("#search")
var formatEl = document.querySelector("#format")
var buttonEl = document.querySelector("#button")
var formatButtonEl = document.querySelector("#formatButtons")

var searchSubmitHandler = function(event){
    event.preventDefault();

    var searchContent = searchEl.value.trim();
console.log(searchContent);
    if (searchContent) {
        getSearchContent(searchContent);

        searchEl.value="";
    }else{
        alert("Please enter search content");
    }
};

