const getColor=()=>{
    const randomNumber =Math.floor(Math.random()*16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("hex").innerText=randomCode;
}

document.getElementById("color").addEventListener("click",getColor)