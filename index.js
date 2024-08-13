function encontrarTalla() {
    const cadera = parseFloat(document.getElementById('cadera').value);
    const cintura = parseFloat(document.getElementById('cintura').value);
    
    if (isNaN(cadera) || isNaN(cintura)) {
        document.getElementById('result').innerHTML = "Por favor, ingresa todas las medidas.";
        return;
    }
    
    const tallas = [
        { nombre: "XS", maxCintura: 66, maxCadera: 89 },
        { nombre: "S", maxCintura: 72, maxCadera: 95 },
        { nombre: "M", maxCintura: 78, maxCadera: 101 },
        { nombre: "L", maxCintura: 84, maxCadera: 107 },
        { nombre: "XL", maxCintura: 90, maxCadera: 113 },
        { nombre: "2XL", maxCintura: 96, maxCadera: 119 },
        { nombre: "3XL", maxCintura: 102, maxCadera: 125 },
        { nombre: "4XL", maxCintura: 108, maxCadera: 131 },
        { nombre: "5XL", maxCintura: 114, maxCadera: 137 }
    ];
    
    let tallaRecomendada = "Talla no encontrada";
    
    for (let talla of tallas) {
        if (cintura <= talla.maxCintura && cadera <= talla.maxCadera) {
            tallaRecomendada = talla.nombre;
            break;
        }
    }
    
    document.getElementById('result').innerHTML = `¡Tu talla ideal de faja es: ${tallaRecomendada}!`;
}