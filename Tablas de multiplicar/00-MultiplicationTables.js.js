//Imprime por consola las Tablas de multiplicar de los números pares. 
for (let i = 1; i <= 10; i++){
    if (i % 2 === 0 ){
        console.log(`Tabla del : ${i}`)
        for (let num = 1; num <= 10; num++){
            console.log(`${i} X ${num} = ${num * i}`)
        }
    } 
}

// Imprime por consola las Tablas de multiplicar de los números impares

for (let i = 1; i <= 10; i++ ){
    if (i % 2 != 0){
        console.log(`Tabla del: ${i}`)
        for (let num = 1; num <= 10; num++){
            console.log(`${i} X ${num} = ${num * i}`)
        }
    }
}

// Imprime todas las Tablas del 2 al 11 

for (let i = 2; i <= 11; i++ ){
    console.log(`Tabla del : ${i}`)
    for( let num = 1; num<= 10; num++){
        console.log(`${i} X ${num} = ${i * num}`)
    }
}