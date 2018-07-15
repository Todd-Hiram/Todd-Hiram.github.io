//This is AJAX requesting a JSON file
let xmlhttp = new XMLHttpRequest();
let url = "CaliforniaCities.txt";

xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
        let myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    
    let out = "";
    let i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' + 
        arr[i].display + '</a><br>';
    }
    
    document.getElementById("caliCity").innerHTML = out;
}
