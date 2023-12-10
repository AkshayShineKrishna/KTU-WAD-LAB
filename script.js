document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btn-reg");

    btn.addEventListener("click", function () {
        const name = document.getElementById("name").value.trim();
        const pwd = document.getElementById("pwd").value.trim();
        const conf = document.getElementById("conf-pwd").value.trim();
        if(name != ""){
            if(pwd != "" || conf != ""){
                if(pwd == conf){
                    alert(`${name} registerd successfully`);
                }else{
                    alert("Passwords doesn't match");
                }
            }else{
                alert("Enter password to continue");
            }
        }else {
            alert("Enter name to continue");
        }
    });
});