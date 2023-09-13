var el = document.getElementById("back-button");
el.setAttribute("href", "https://aprendiztelamrr.github.io/");

el.onclick = function () {
    if (document.referrer != "https://aprendiztelamrr.github.io/") {
        window.location.href = "https://aprendiztelamrr.github.io/"
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