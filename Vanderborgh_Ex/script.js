
// hide function
function hide(el) {
    el.remove();
}

// search function
function getSearch(){
    var inputValue = document.getElementById("Input").value;
    alert('You are searching for: ' + '"' + inputValue + '"');
}

// incremental like function
function like(id) {
    console.log(id)
    var value = parseInt(document.getElementById(id).textContent) 
    value++;
    document.getElementById(id).textContent = value;
    console.log(value)
}