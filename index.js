function partidasRankeadas(qtdVitorias, qtdDerrotas) {
    let resultadoRankeada = qtdVitorias - qtdDerrotas;
    let nivel;
    if (qtdVitorias < 10) {
        nivel = "Ferro";
    }
    else if (qtdVitorias >= 11 && qtdVitorias <= 20) {
        nivel = "Bronze";
    }
    else if (qtdVitorias >= 21 && qtdVitorias <= 50) {
        nivel = "Prata";
    }
    else if (qtdVitorias >= 51 && qtdVitorias <= 80) {
        nivel = "Ouro";
    }
    else if (qtdVitorias >= 81 && qtdVitorias <= 90) {
        nivel = "Diamante";
    }
    else if (qtdVitorias >= 91 && qtdVitorias <= 100) {
        nivel = "Lendário";
    }
    else if (qtdVitorias >= 101) {
        nivel = "Imortal";
    }

    console.log("O Herói tem saldo de " + resultadoRankeada, "está no nivel de " + nivel);
}

function main() {
    partidasRankeadas(150, 20)
}

main();