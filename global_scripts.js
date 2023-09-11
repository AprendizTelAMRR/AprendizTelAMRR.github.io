var el = document.getElementById("back-button");
el.setAttribute("href", "https://aprendiztelamrr.github.io/");

el.onclick = function(){
    if(document.referrer != "https://aprendiztelamrr.github.io/"){
        window.location.href = "https://aprendiztelamrr.github.io/"
        return false;
    }            

    history.back();
    return false;
}
