
//ADICIONE OS LINKS DO SEU APP FIREBASE



// Inicializar Firebase
   firebase.initializeApp(firebaseConfig);



function addUser()
{
user_name = document.getElementById("user_name").value; 
firebase.database().ref("/").child(user_name).update({ 
purpose : "adicionando usuário" }); 
}
 