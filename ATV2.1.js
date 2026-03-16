let paises = ['Brasil', 'Argentina', 'Alemanha', 'Bélgica', 'Croacia', 'China', 'Venezuela', 'Servia', 'Bosnia', 'Chile', 'Russia', 'Inglaterra', 'Espanha', 'Italia', 'Congo', 'Finlandia', 'Estonia', 'Holanda', 'Canada', 'Colombia']


console.log(`O Pais na posicao 0 é o (a) ${paises[0]}`)
console.log(`O Pais na posicao 7 é o (a) ${paises[7]}`)
console.log(`O Pais na posicao 11 é o (a) ${paises[11]}`)
console.log(`O Pais na posicao 15 é o (a) ${paises[15]}`)
console.log(`O Pais na posicao 18 é o (a) ${paises[18]}`)
console.log(`O Pais na posicao 20 é o (a) ${paises[20]}`)
console.log(`O Pais na ultima posicao é o (a) ${paises[0]}`)
console.log(`O Pais na penultima posicao é o (a) ${paises[1]}`)
console.log(`O vetor possui ${paises.length} elementos`)
paises.push('Andorra')

for (let pos in paises) {
    console.log(paises[pos])
}