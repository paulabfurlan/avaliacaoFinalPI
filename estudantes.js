// Importa o objeto aluno
let Aluno = require("./aluno");

// Cria uma lista de estudantes
let listaEstudantes = [new Aluno("Paula", 2, [8,7,10,9]),
                       new Aluno("Atef", 4, [10,10,10,10]),
                       new Aluno("Dumith", 3, [9,8,9,8]),
                       new Aluno("Fabricio", 1, [6,8,3,7]),
                       new Aluno("Elton", 6, [9,8,9,8])];

// Exporta a lista de alunos
module.exports = listaEstudantes;