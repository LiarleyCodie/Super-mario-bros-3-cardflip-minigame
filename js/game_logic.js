//#region CONST and VARIABLES
const cardsContainer = document.querySelector("#cardsContainer")

const cardsList = [
    [
        { x: 0, y: 0, flipped: false, compValue: 0, index: 0 },
        { x: 1, y: 0, flipped: false, compValue: 1, index: 1 },
        { x: 2, y: 0, flipped: false, compValue: 2, index: 2 }
    ],
    [
        { x: 0, y: 1, flipped: false, compValue: 2, index: 3 },
        { x: 1, y: 1, flipped: false, compValue: 0, index: 4 },
        { x: 2, y: 1, flipped: false, compValue: 1, index: 5 }
    ]
]
// cardsList[y = row][x = column/card].objectProperty

const _cardsDivs = []

const markerPosition = {
    x: 0,
    y: 0,
    currentCompValue: null
}

cardsList.forEach(row => {
    // Cria as linhas
    const rowDiv = document.createElement("div")
    rowDiv.classList.add("row")
    cardsContainer.appendChild(rowDiv)

    // Cria as cartas
    row.forEach(card => {
        const cardDiv = document.createElement("div")
        cardDiv.classList.add("card")
        rowDiv.appendChild(cardDiv)

        // Cria as imagens
        const cardImage = document.createElement("img")
        cardImage.setAttribute("src", "assets/sprites/cardBack.png")
        cardDiv.appendChild(cardImage)

        _cardsDivs.push(cardDiv)
    })
})

const _flippedCards = []


let _cardsFlippedAmount = 0
//#endregion

document.addEventListener("keypress", e => {
    // Movimenta o marcador
    movementsInputs(e)

    // Verifica se espaço foi pressionado e faz uma verificação para saber se a posição do marcador
    // é igual a posição da carta desejada, se for, ao pressionar, ele vira essa carta.
    if (e.key == " ") {
        if (markerPosition.x == cardsList[markerPosition.y][markerPosition.x].x
            &&
            markerPosition.y == cardsList[markerPosition.y][markerPosition.x].y) {

            cardsList[markerPosition.y][markerPosition.x].flipped = true

            // Armazena apenas UMA vez o valor comparativo da carta no marcador
            if (_cardsFlippedAmount < 1) {
                markerPosition.currentCompValue = cardsList[markerPosition.y][markerPosition.x].compValue
                // Armazena na propriedade currentComp*arative*Value o valor comparativo da carta que foi virada
            }

            // incrementa a quantidade de cartas viradas
            _cardsFlippedAmount++

            _flippedCards.push(cardsList[markerPosition.y][markerPosition.x])
            // Salva o objeto da carta em uma lista temporaria


            cardMarkerReference()
        }

        if (_cardsFlippedAmount > 1) {
            if (markerPosition.currentCompValue == cardsList[markerPosition.y][markerPosition.x].compValue) {
                //#region
                console.log(`\nA carta 
    x: ${_flippedCards[0].x}
    y: ${_flippedCards[0].y}
    com valor comparativo: ${_flippedCards[0].compValue}
é Igual à carta armazenada no marcador na posição:
    x: ${markerPosition.x}
    y: ${markerPosition.y}
    com valor comparativo: ${markerPosition.currentCompValue}`)
                //#endregion

                window.alert("As cartas são iguais! Você acertou!")

                for (let i = 0; i <= _flippedCards.length; i++) {
                    _flippedCards.pop()
                }
            } else {
                window.alert("Você errou!")
            }
        }
    }
})

function cardMarkerReference() {
    console.clear()
    console.log(`Marcador:
    x: ${markerPosition.x}
    y: ${markerPosition.y}
    Carta em questão está virada? ${cardsList[markerPosition.y][markerPosition.x].flipped}
    Valor de comparação armazenado: ${markerPosition.currentCompValue}`)

    console.log(`O Cartão selecionado está na:
    Linha (x): ${cardsList[markerPosition.y][markerPosition.x].y}
    Coluna (y): ${cardsList[markerPosition.y][markerPosition.x].x}
    Carta em questão está virada: ${cardsList[markerPosition.y][markerPosition.x].flipped}
    
    Quantidade de cartas viradas: ${_cardsFlippedAmount}`)
}

// cardMarkerReference()


// Cria o marcador visual dentro da primeira carta
createMarker(_cardsDivs, 0)

function createMarker(element, index) {
    const currentSelectedCard = document.createElement("img")
    currentSelectedCard.classList.add("marker")
    currentSelectedCard.setAttribute("src", "assets/sprites/cardMarker.png")
    currentSelectedCard.setAttribute("id", "marker")
    element[index].appendChild(currentSelectedCard)
}

function movementsInputs(value) {
    //#region 
    if (value.key == "ArrowLeft") {
        if (markerPosition.x > 0) {
            markerPosition.x -= 1

            let _currentMarkerPos = null
            for (let i = 0; i < _cardsDivs.length; i++) {
                const marker = document.querySelector("#marker")
                if (marker) {
                    marker.remove()
                }
            }

            if (markerPosition.x == cardsList[markerPosition.y][markerPosition.x].x
                &&
                markerPosition.y == cardsList[markerPosition.y][markerPosition.x].y) {
                _currentMarkerPos = cardsList[markerPosition.y][markerPosition.x].index

                createMarker(_cardsDivs, _currentMarkerPos)
            }
        }
    }
    if (value.key == "ArrowRight") {
        if (markerPosition.x < cardsList[0].length - 1) {
            markerPosition.x += 1

            let _currentMarkerPos = null
            for (let i = 0; i < _cardsDivs.length; i++) {
                const marker = document.querySelector("#marker")
                if (marker) {
                    marker.remove()
                }
            }

            if (markerPosition.x == cardsList[markerPosition.y][markerPosition.x].x
                &&
                markerPosition.y == cardsList[markerPosition.y][markerPosition.x].y) {
                _currentMarkerPos = cardsList[markerPosition.y][markerPosition.x].index

                createMarker(_cardsDivs, _currentMarkerPos)
            }
        }
    }
    if (value.key == "ArrowUp") {
        if (markerPosition.y > 0) {
            markerPosition.y -= 1

            let _currentMarkerPos = null
            for (let i = 0; i < _cardsDivs.length; i++) {
                const marker = document.querySelector("#marker")
                if (marker) {
                    marker.remove()
                }
            }

            if (markerPosition.x == cardsList[markerPosition.y][markerPosition.x].x
                &&
                markerPosition.y == cardsList[markerPosition.y][markerPosition.x].y) {
                _currentMarkerPos = cardsList[markerPosition.y][markerPosition.x].index

                createMarker(_cardsDivs, _currentMarkerPos)
            }
        }
    }
    if (value.key == "ArrowDown") {
        if (markerPosition.y < cardsList.length - 1) {
            markerPosition.y += 1

            let _currentMarkerPos = null
            for (let i = 0; i < _cardsDivs.length; i++) {
                const marker = document.querySelector("#marker")
                if (marker) {
                    marker.remove()
                }
            }

            if (markerPosition.x == cardsList[markerPosition.y][markerPosition.x].x
                &&
                markerPosition.y == cardsList[markerPosition.y][markerPosition.x].y) {
                _currentMarkerPos = cardsList[markerPosition.y][markerPosition.x].index

                createMarker(_cardsDivs, _currentMarkerPos)
            }
        }
    }
    //#endregion
}