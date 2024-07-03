var el = document.getElementById("back-button");
let homePage = "https://aprendiztelamrr.github.io/";

el.setAttribute("href", homePage);

el.onclick = function () {
    if (document.referrer != homePage) {
        window.location.href = homePage
        return false;
    }

    history.back();
    return false;
}

//Adding Cards
const sectionUl = document.getElementsByTagName("ul");

let liCount = 1;

function addCard(title, linkObjArray, blank = true) {
    let li = document.createElement("li");

    let counterWrapper = document.createElement("div");
    counterWrapper.classList.add("counter-wrapper")
    let counter = document.createElement("p");
    counter.classList.add("counter")
    counter.textContent = liCount;
    liCount++;
    counterWrapper.appendChild(counter)
    li.appendChild(counterWrapper);

    let h2 = document.createElement("h2");
    h2.classList.add("card-title")
    h2.textContent = title;
    li.appendChild(h2);

    linkObjCount = linkObjArray.length;

    blank = (blank === true) ? "_top" : "_blank";
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