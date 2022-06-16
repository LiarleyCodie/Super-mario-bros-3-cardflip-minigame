const value = 6
let arrayA = []

for (let i = 0; i < value; i++) {
  arrayA.push(i)
}

// Função que randomiza uma array
function shuffleArray(arr) {
  // itera sobre todos os elementos
  for (let i = arr.length - 1; i > 0; i--) {
    // escolhe elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // reposicionando elementos
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

console.log(shuffleArray(arrayA))