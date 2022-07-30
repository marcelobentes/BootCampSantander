const alunos = [
    {
        nome: "Marcelo",
        nota: 4,
        turma: "A",
    },
    {
        nome: "Thati",
        nota: 8,
        turma: "B",
    },
    {
        nome: "Mabel",
        nota: 9,
        turma: "C",
    },
    {
        nome: "Samuel",
        nota: 10,
        turma: "D",
    },
];

function alunoAprovados( array, media){
    let aprovados =[];
    for (let i = 0; i < array.length; i++){
        const {nome, nota} = array[i];

        if (nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunoAprovados(alunos, 6));