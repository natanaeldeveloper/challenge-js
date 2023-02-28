const recursivo = (valor) => {
    return valor.length <= 0 ? '' : recursivo(valor.slice(1)) + valor[0]
}

console.log(recursivo('teste'))