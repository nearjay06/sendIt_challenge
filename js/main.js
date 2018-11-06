function login(){
var a= document.getElementById('admin').checked;

if (a == true){
 return document.getElementById("choose").setAttribute("action","../pages/admin.html");
}
else if(a == false){
 return document.getElementById("choose").setAttribute("action","../pages/profile.html");

}

}