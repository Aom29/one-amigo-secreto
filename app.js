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

    console.log(friends);
}