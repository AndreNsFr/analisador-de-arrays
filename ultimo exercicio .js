let amigo = {nome: 'jose', 
sexo:'M',
peso: 85.4,
engordar(p){
    console.log('engordor')
    this.peso += p
}
}

amigo.engordar()

console.log(`seu nome é ${amigo.nome} e pesa ${amigo.peso}kg`)


