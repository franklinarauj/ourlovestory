// GET WIDTH AND HEIGHT SCREEN
var widthScreen = this.screenWidth = document.body.clientWidth;
var heightScreen = this.screenHeight = document.body.clientHeight;

// FUNÇÃO PARA CALCULAR A DIFERENÇA DETALHADA ENTRE DUAS DATAS
function calcularDiferencaCompleta(data) {
    const agora = new Date();
    const dataImportante = new Date(data);

    let anos = agora.getFullYear() - dataImportante.getFullYear();
    let meses = agora.getMonth() - dataImportante.getMonth();
    let dias = agora.getDate() - dataImportante.getDate();
    let horas = agora.getHours() - dataImportante.getHours();
    let minutos = agora.getMinutes() - dataImportante.getMinutes();
    let segundos = agora.getSeconds() - dataImportante.getSeconds();

    // Ajusta os valores negativos
    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }
    if (horas < 0) {
        horas += 24;
        dias--;
    }
    if (dias < 0) {
        const diasNoUltimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias += diasNoUltimoMes;
        meses--;
    }
    if (meses < 0) {
        meses += 12;
        anos--;
    }

    return `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

// ATUALIZA OS CONTADORES COM A DIFERENÇA COMPLETA ENTRE AS DATAS IMPORTANTES
function atualizarDatas() {
    const primeiroBeijo = '2021-01-08';
    const aniversarioAntigo = '2021-05-12';
    const aniversarioNovo = '2024-05-31';

    document.getElementById('firstKiss').textContent = `${calcularDiferencaCompleta(primeiroBeijo)}`;
    document.getElementById('anniversaryOld').textContent = `${calcularDiferencaCompleta(aniversarioAntigo)}`;
    document.getElementById('anniversaryNew').textContent = `${calcularDiferencaCompleta(aniversarioNovo)}`;
}

// ATUALIZA AS DATAS A CADA SEGUNDO E GARANTE QUE O CÓDIGO SERÁ EXECUTADO ASSIM QUE O DOM ESTIVER PRONTO
document.addEventListener("DOMContentLoaded", function() {
    atualizarDatas(); 
    setInterval(atualizarDatas, 1000);
});
