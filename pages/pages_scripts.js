var el = document.getElementById("back-button");
el.setAttribute("href", "http://127.0.0.1:5500/");

el.onclick = function () {
    if (document.referrer != "http://127.0.0.1:5500/") {
        window.location.href = "http://127.0.0.1:5500/"
        return false;
    }

    history.back();
    return false;
}

//Adding Cards
const sectionUl = document.getElementsByTagName("ul");

function addCard(title, linkObjArray, blank = false) {
    let li = document.createElement("li");

    let h2 = document.createElement("h2");
    h2.classList.add("card-title")
    h2.textContent = title;
    li.appendChild(h2);

    linkObjCount = linkObjArray.length;

    blank = (blank == false) ? "_top" : "_blank";
    for (i = 0; i < linkObjCount; ++i) {
        li.appendChild(
            Object.assign(document.createElement("a"),
                {
                    href: linkObjArray[i][0],
                    innerHTML: linkObjArray[i][1],
                    classList: "card-link",
                    target: blank
                }
            )
        )
    }

    sectionUl[0].appendChild(li);
}