var el = document.getElementById("back-button");
el.setAttribute("href", "http://127.0.0.1:5500/");

el.onclick = function(){
    if(document.referrer != "http://127.0.0.1:5500/"){
        window.location.href = "http://127.0.0.1:5500/"
        return false;
    }            

    history.back();
    return false;
}