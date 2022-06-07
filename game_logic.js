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
/*
    cardsList[y = row][x = column/card]
*/

console.log(cardsList[0][1].x)