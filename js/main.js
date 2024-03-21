


console.log(infoproductores);
console.log(infoproductores[5])

function mostrarProductores(productor){
    console.log(productor[4])
    productor.forEach(productor => {
        console.log(productor.codigo + ' - ' + productor.especie)
    });
}
mostrarProductores(infoproductores)

function filtrarProductores(productor){
    const resultado = infoproductores.filter(filtrarProductor);
    if(resultado.length>0){
        mostrarProductores
    }
}
