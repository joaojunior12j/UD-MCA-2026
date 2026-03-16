let carros = [{nome: 'Palio', Preço: 10000, Estoque: 10}, {nome: 'Corsa', Preço: 12000, Estoque: 8}, {nome: 'Fox', Preço: 18000, Estoque: 2}, {nome: 'A3', Preço: 70000, Estoque: 1}, {nome: 'Azera', Preço: 30000, Estoque: 10}, {nome: 'Civic', Preço: 90000, Estoque: 10}, {nome: 'BMW M3', Preço: 100000, Estoque: 1}, {nome: 'Gol', Preço: 8000, Estoque: 15}, {nome: 'Siena', Preço: 15000, Estoque: 3}, {nome: 'Monza', Preço: 6000, Estoque: 1}  ]
console.log(`O preço do segundo carro é ${carros[1].Preço}`)
console.log(`O nome do terceiro carro é ${carros[2].nome}`)
console.log(`Na loja possui um total de ${carros.length} carros`)
for (let i = 0; i < carros.length; i++){
    console.log(carros[i].nome)
}
let somaestoque = 0;
for (let i=0; i < carros.length; i++) {
    somaestoque += carros[i].Estoque
}
    console.log(`Possuimos um total de ${somaestoque} carros no estoque`)

let maiorestoque = carros[0];
for (i = 1; i < carros.length; i++) {
    if (carros[i].Estoque > maiorestoque.Estoque) {
        maiorestoque = carros[i]
    }
}
console.log(`Nosso carro com maior estoque é o ${maiorestoque.nome} com um total de ${maiorestoque.Estoque} unidades`)