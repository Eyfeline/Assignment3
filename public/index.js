

function getProverb(){
    let id = document.getElementById("input").value;
    if(id<1 || id>31){
        document.getElementById('para').style = 'color: red'
        document.getElementById("para").textContent = 'Number must be between 1 and 31 included.';
    }
    else {
        document.getElementById('para').style = 'color: darkblue'
    fetch("/api/"+id)
    .then(Result => Result.json())
    .then(string => {document.getElementById("para").textContent = string});
    }
}

