let searchBox = document.getElementById("search-box")
let searchBtn = document.getElementById("get-result")
let meaningList = document.getElementById("meaning-list")
let ap = document.getElementsByClassName("appen")
let  word  = document.getElementById("word")
let btnCount = 0
function funcToRun(data){
    let theArr  = data[0].meanings[0].definitions
    
    word.setAttribute("class","lists")
    word.innerHTML = `Defination's for the word -${ data[0].word} :`
    for(let a = 0 ; a < 4 ; a++){
        btnCount++
        ap[a].innerHTML  = `<br><b> ${btnCount} ${theArr[a].definition}</b>`
    }
}    
searchBtn.addEventListener("click", ()=>{
        if(searchBox.value == ""){
            alert("please put something in the search box")
        }
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchBox.value}`)
        .then(res=> res.json())
        .then( data=> funcToRun(data))
        btnCount = 0 
})
