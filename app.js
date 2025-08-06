let friends = [];

function validName(friendName){
    if(friendName === ''){
        alert('Por favor, inserte un nombre.');
        return false;
    }
    return true;
}

function clearInput(){
    document.getElementById('amigo').value = '';
}

function agregarAmigo(){
    let friendName = document.getElementById('amigo').value;
    console.log(friendName);
    if(!validName(friendName)) return;
    friends.push(friendName);
    clearInput();

    updateList();
}

function updateList(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    friends.forEach((friend) => {
        lista.innerHTML += `<li>${friend}</li>`;
    });
}