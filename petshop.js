let listaPets = ['big', 'thor']
const addPet = nome => {
    listaPets.push(nome)
    return "Pet cadastrado com sucesso."
}

const listarPets= () => {
    let tabelaPets = ''
    listaPets.forEach(pet => {
        tabelaPets+= `
            -------------------

            Nome do Pet: ${pet}
            `
})
    return tabelaPets
}

module.exports = {listarPets, addPet}