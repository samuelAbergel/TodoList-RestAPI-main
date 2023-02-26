let regButton = "";
let loginBtn = "";
let getAllFriendsBtn = "";
let addFriendBtn = "";
let removeFriendBtn = "";


if (location.hash == "") {
    show("login")

}
else show(location.hash.substring(1))
let butArray = document.querySelectorAll('.changePage')
for (let but of butArray) {
    but.addEventListener('click', switchTemp);
}

loginBtn = document.getElementById("btnToApp");
if (loginBtn)
    loginBtn.addEventListener("click", switchTemp);
history.replaceState({}, "", location.hash)
addEventListener('popstate', popping);

function show(id) {
    location.hash = `#${id}`;
    let template = document.getElementById(id).innerHTML;
    document.querySelector('main').innerHTML = template;

}

function switchTemp(event) {
    if (location.hash == "#login" && event.target.className) {
        show("signUp");
        regButton = document.querySelector('#regButton');
        regButton.addEventListener('click', createNewClient);
    }
    else if (location.hash == "#login") {
        if (checkIfUserExists())
            show("game");
        else {
            alert("Username or password is incorrect");
        }
    }
    else if (location.hash == "#signUp") {
        show("login");
    }
    else if (location.hash == "#game") {
        show("login");
    }
}

function popping() {
    let newHash = location.hash.substring(1);
    show(newHash);
}

window.addEventListener('hashchange', keepEvents);
window.addEventListener('load',keepEvents)



let dataBase = new DataBase();
let server = new Server();
let Fajax = new FAJAX();
let network = new Network();


function keepEvents(){
    butArray = document.querySelectorAll('.changePage')
    for (let but of butArray) {
        but.addEventListener('click', switchTemp);
    }
    loginBtn = document.getElementById("btnToApp");
    if (loginBtn)
        loginBtn.addEventListener("click", switchTemp);

    addFriendBtn = document.getElementById("addFriend");
    removeFriendBtn = document.getElementById("removeFriend");
    getAllFriendsBtn = document.getElementById("getAllFriends");
    if (getAllFriendsBtn && removeFriendBtn && addFriendBtn) {
        addFriendBtn.addEventListener("click", addFriendFunction);
        removeFriendBtn.addEventListener("click", removeFriendFunction);
        getAllFriendsBtn.addEventListener('click', callAllFriends)
    }
    if(location.hash!="#game"){
        Fajax = new FAJAX();
        Fajax.open("delete","removeCurrentUser");
        Fajax.onload = function (){
            return Fajax.response;
        }
        Fajax.send();
    }
    if(location.hash=="#game"){
        let far = new FAJAX();
        far.open("get", "currentUser");
        far.onload = function(){
         if(!far.response){
            location.hash="#login"
         }
        }
        far.send();
    }
    
}