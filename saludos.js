//Modulos en NodeJS
//En uno deividimos la funcion
function saludar(nombre) {
    return `Hola, ${nombre}`;
}
//module.exports.saludar = saludar;


//Exportar varios elementos
function saludarHolaMundo() {
    return 'Hola, Mundo!';
}
//module.exports.saludarHolaMundo = saludarHolaMundo;

module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
};




