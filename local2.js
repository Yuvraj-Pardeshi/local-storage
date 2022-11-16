function saveData(){
    let uname = document.getElementById("uname").value;
    let psw = document.getElementById("psw").value;
    let email = document.getElementById("email").value;

    let user_record = new Array();
    user_record = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

    if(user_record.some((v)=>{return v.email===email})){
        alert("Duplicate value");
    }
    else{
        user_record.push({
            "uname":uname,
            "psw" : psw,
            "email":email
        })
        localStorage.setItem("users",JSON.stringify(user_record));
    }
    
}

// function saveData(){
//     let uname = document.getElementById("uname").value;
//     let email = document.getElementById("email").value;
//     let psw = document.getElementById("psw").value;

//     let user_record = new Array();
//     user_record = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

//     if(user_record.some((v)=>{return v.email===email})){
//         alert("Duplicate data");
//     }
//     else{
//         user_record.push({
//         "uname" : uname,
//         "email": email,
//         "psw" : psw
//     }) 
//     localStorage.setItem("users",JSON.stringify(user_record));
//     }
//     // showdata();
// }
