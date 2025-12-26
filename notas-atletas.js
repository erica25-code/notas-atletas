let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function calcularMedia(atletas) {
  for (let i = 0; i < atletas.length; i++) {

    let nome = atletas[i].nome;
    let notas = atletas[i].notas;

    // Ordenar notas
    let notasOrdenadas = notas.sort((a, b) => a - b);

    // Eliminar a maior e a menor
    let notasValidas = notasOrdenadas.slice(1, 4);

    // Somar notas válidas
    let soma = 0;
    notasValidas.forEach(nota => {
      soma += nota;
    });

    // Calcular média
    let media = soma / notasValidas.length;

    // Mostrar resultado
    console.log(`Atleta: ${nome}`);
    console.log(`Notas Obtidas: ${notasOrdenadas}`);
    console.log(`Média Válida: ${media}`);
    console.log("");
  }
}

calcularMedia(atletas);


