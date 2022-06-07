const markerPosition = {
    x: 0,
    y: 0
}

const cardsList = [
    [
        { x: 0, y: 0, flipped: false, compValue: 0 },
        { x: 1, y: 0, flipped: false, compValue: 1 },
        { x: 2, y: 0, flipped: false, compValue: 2 }
    ],
    [
        { x: 0, y: 1, flipped: false, compValue: 2 },
        { x: 1, y: 1, flipped: false, compValue: 0 },
        { x: 2, y: 1, flipped: false, compValue: 1 }
    ]
]
// cardsList[y = row][x = column/card].objectProperty

document.addEventListener("keypress", e => {
    if (e.key == "ArrowLeft") {
        if (markerPosition.x > 0) {
            markerPosition.x -= 1
            reference()
        }
    }
    if (e.key == "ArrowRight") {
        if (markerPosition.x < cardsList[0].length) {
            markerPosition.x += 1
            reference()
        }
    }
    if (e.key == "ArrowUp") {
        if (markerPosition.y > 0) {
            markerPosition.y -= 1
            reference()
        }
    }
    if (e.key == "ArrowDown") {
        if (markerPosition.y < cardsList.length) {
            markerPosition.y += 1
            reference()
        }
    }
})

function reference() {
    console.clear()
    console.log("Selected Card:", markerPosition)
}

reference()