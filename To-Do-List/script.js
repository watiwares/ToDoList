let input = document.getElementById('Input');
let btn = document.getElementById('btn')
let ul = document.getElementById('list')

DeleteBtn = document.createElement('DeleteBtn')



const Tableau = [];


function newElement(){

    


    let input = document.getElementById('Input');
    let champ = input.value;

    if(champ == ""){
        alert("le champ est vide")
        
        return

    }

    let liNode = document.createElement("li");
    let listNode = document.getElementById('list')
    txtNode = document.createTextNode(champ);
    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);

    Tableau.push(champ);


    let boutonSupprimer = document.createElement("button");
    boutonSupprimer.textContent = 'Supprimer'

    liNode.appendChild(boutonSupprimer);
    boutonSupprimer.addEventListener('click' , function(){
    liNode.remove()
    })

    setData()
    recupData()
}


afficherTache()


function setData(){
    localStorage.setItem(
        "key" , JSON.stringify(Tableau))

}

function recupData(){
    let taches = JSON.parse(localStorage.getItem("key")) || [];
    return taches


}



function afficherTache(){
    const tasks = recupData()
    for(let task of tasks){
        let li = document.createElement('li')
        li.textContent = task
        ul.appendChild(li)
        let boutonSupprimer = document.createElement("button");
        boutonSupprimer.textContent = 'Supprimer'
        li.appendChild(boutonSupprimer);
        boutonSupprimer.addEventListener('click' , function(){
            li.remove()
        })



    }

}


function deleteElement(){
    let li = document.querySelectorAll('li').forEach(e => e.remove());
}

function DeleteStorage(){
    localStorage.clear();
}