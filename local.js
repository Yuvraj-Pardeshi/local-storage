
showdata();
function saveData(){
    let name = document.getElementById("usn").value;
    let email = document.getElementById("email").value;
    let psw = document.getElementById("psw").value;

    let user_record = new Array();
    user_record = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

    if(user_record.some((v)=>{return v.email===email})){
        alert("Duplicate data");
    }
    else{
        user_record.push({
        "name" : name,
        "email": email,
        "psw" : psw
    }) 
    localStorage.setItem("users",JSON.stringify(user_record));
    }
    showdata();
}

function showdata(){
    let user_record = new Array();
    user_record = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
    if(user_record){
      for(let i=0; i<user_record.length;i++){
        let mainDiv = document.getElementById("show-users");
        let addDiv = document.createElement('div');
        addDiv.className = "newdiv";
        addDiv.style.display = "flex"
        addDiv.style.justifyContent = "space-between"
        addDiv.style.marginTop = "10px"

        addDiv.innerHTML =  '<p>'+user_record[i].name +'</p><p>'+user_record[i].email +'</p><p>'+user_record[i].psw+'</p>'
        mainDiv.appendChild(addDiv);
        
      }
    }
    

}