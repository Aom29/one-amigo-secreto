let friends = [];

function validName(friendName){
    if(friendName === ''){
        alert('Por favor, inserte un nombre.');
        return false;
    }
    return true;
}

function emptyList(){
    if(friends.length == 0){
        alert('Por favor, inserta al menos un nombre para poder sortear un amigo');
        return true;
    }
    return false;
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

function sortearAmigo(){
    if(emptyList()) return;

    let randomIndex = parseInt(Math.floor(Math.random()*friends.length));
    let randomName = friends[randomIndex];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = randomName;
}