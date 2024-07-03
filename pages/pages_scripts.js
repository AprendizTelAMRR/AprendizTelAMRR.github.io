/* Eu acho que isso se integra bacana no navegador pra dar uma sensação de app
o botão de voltar vai sempre garantir voltar pra página inicial,
mas primeiro é checado o histórico. Caso a última página do histórico já for a página inicial,
ele só volta um no histórico, o que agiliza o acesso já que já tá no cache.*/

var el = document.getElementById("back-button");
let homePage = "https://aprendiztelamrr.github.io/";
el.setAttribute("href", homePage);

el.onclick = function () {
    if (document.referrer != homePage) {
        window.location.href = homePage
        return;
    }

    history.back();
    return;
}

//Lembrando que cada cartão é enumerado automaticamente
const cardList = document.getElementsByTagName("ul");

let cardCount = 1; //enumerador

function addCard(title, linkObjArray, blank = true) {
    let cardElement = document.createElement("li");

    let counterWrapper = document.createElement("div");
    counterWrapper.classList.add("counter-wrapper");

    let counter = document.createElement("p");
    counter.classList.add("counter")
    counter.textContent = cardCount;
    cardCount++;
    counterWrapper.appendChild(counter)
    cardElement.appendChild(counterWrapper);

    let h2 = document.createElement("h2");
    h2.classList.add("card-title")
    h2.textContent = title;
    cardElement.appendChild(h2);


    blank = (blank === true) ? "_blank" : "_top";
    linkObjArray.forEach(linkObject => {
        cardElement.appendChild(
            Object.assign(document.createElement("a"),
                {
                    href: linkObject[0],
                    innerHTML: linkObject[1],
                    classList: "card-link",
                    target: blank
                }
            )
        )
    });

    cardList[0].appendChild(cardElement);
}