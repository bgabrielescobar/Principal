// Definición de los caracteres para representar el cubo
const cubeChars = ["█", "▒", "▓", "▄", "▀", "░"];

// Función para dibujar el cubo en la consola
function drawCube() {
    const size = 10; // Tamaño del cubo
    const space = " "; // Espacio en blanco

    // Bucle para dibujar cada cara del cubo
    for (let y = 0; y < size; y++) {
        let row = "";

        for (let x = 0; x < size; x++) {
            const isEdge = x === 0 || x === size - 1 || y === 0 || y === size - 1;
            const charIndex = isEdge ? 0 : Math.floor(Math.random() * (cubeChars.length - 1)) + 1;
            const char = cubeChars[charIndex];

            row += char + space;
        }

        console.log(row);
    }
}

// Llamada a la función para dibujar el cubo
drawCube();
