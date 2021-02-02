let persons = [
    {idPerson: 1, name: 'jorge' }, 
    {idPerson: 2, name: 'david'},
    {idPerson: 3, name: 'andres'}
]

let cars = [
    {idCar: 1, brand: 'toyata', idPerson: 1 },
    {idCar: 2, brand: 'honda',  idPerson: 1 },
    {idCar: 3, brand: 'rolls-royce',  idPerson: 2 },
    {idCar: 4, brand: 'mclaren 720s',  idPerson: 2 },
    {idCar: 5, brand: 'ford',  idPerson: 2 },
    {idCar: 6, brand: 'nissan gtr',  idPerson: 2 },
]


/*
    // ESTRUCTURA DESEADA 
    {
        idPerson: 1
        name: 'jorge',
        cars: [{...}, {...} ]
    },
     {
        idPerson: 2
        name: 'david',
        cars: [{...}, {...}, {....}]
    },
    {
        idPerson: 3
        name: 'andres',
        cars: []
    }
*/


// declarando la funcion
function buscarCarroPorPropietario(idPerson) {
    let carrosEncontrados = [];
    cars.filter((elemento) => {
        if( elemento.idPerson == idPerson ){
            carrosEncontrados.push(elemento);
        }
    });
    return carrosEncontrados 
}

// prueba y ejecucion de la funcion
//vamos a buscar los carros de  'david'
// voy a declarar una lista que obtenga esos valores
// buscarCarroPorPropietario( 1 ) 


// la nueva lista es 
let nuevaListaPersonasYCarros = [];
for(let i=0; i< persons.length; i++) {
    let nuevoObjeto = {
        idPerson:  persons[i].idPerson, 
        name:  persons[i].name,
        cars: buscarCarroPorPropietario(persons[i].idPerson)   
    }
    nuevaListaPersonasYCarros.push(nuevoObjeto)      
}

console.log('lista final ', nuevaListaPersonasYCarros)