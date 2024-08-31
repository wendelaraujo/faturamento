// Suponha que o JSON esteja armazenado em um arquivo chamado "faturamento.json"
const faturamentoMensal = {
    "faturamento": [0, 220.5, 300.1, 0, 0, 320.3, 0, 250.4, 310.5, 210.0, 400.8, 0, 200.6, 0, 310.4, 0, 270.8, 295.2, 0, 290.7, 0, 0, 180.2, 220.3, 0, 250.7, 300.3, 0, 370.0, 0]
  };
  
  // Filtra os dias com faturamento (ignorando dias com faturamento 0)
  const diasComFaturamento = faturamentoMensal.faturamento.filter(valor => valor > 0);
  
  // Calcula o menor e o maior valor de faturamento
  const menorFaturamento = Math.min(...diasComFaturamento);
  const maiorFaturamento = Math.max(...diasComFaturamento);
  
  // Calcula a média mensal
  const somaFaturamento = diasComFaturamento.reduce((acc, valor) => acc + valor, 0);
  const mediaMensal = somaFaturamento / diasComFaturamento.length;
  
  // Calcula o número de dias com faturamento superior à média
  const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;
  
  // Exibe os resultados
  console.log("Menor valor de faturamento ocorrido em um dia do mês:", menorFaturamento.toFixed(2));
  console.log("Maior valor de faturamento ocorrido em um dia do mês:", maiorFaturamento.toFixed(2));
  console.log("Número de dias com faturamento superior à média mensal:", diasAcimaDaMedia);
  