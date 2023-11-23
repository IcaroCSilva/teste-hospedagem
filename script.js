function calcularIMC(event) {
  event.preventDefault();

  const peso = +document.querySelector("#peso").value;
  let altura = +document.querySelector("#altura").value;
  const resultado = document.querySelector("#resultado");

  // Convertendo altura para metros, caso esteja em centímetros
  altura = altura / 100;

  // Calculando o IMC usando a fórmula
  let imc = peso / (altura * altura);

  // Arredondando o IMC para duas casas decimais
  imc = imc.toFixed(2);

  modalImc(+imc);

  return (resultado.value = imc);
}

function modalImc(imc) {
  const modal = document.querySelector("#modal");
  const btnClose = document.querySelector("#closeModal");
  const textModal = document.querySelector("#textModal");

  switch (true) {
    case imc >= 18 && imc <= 25:
      textModal.innerHTML = `Seu IMC é de: <strong class="text-success">${imc}</strong>. VOCÊ ESTÁ NO PESO NORMAL-
      

      sinalizando um peso equilibrado. Continue fazendo escolhas alimentares nutritivas e mantendo uma rotina de exercícios regulares. A consistência é a chave. Esteja atento às necessidades do seu corpo e celebre cada passo em direção a um estilo de vida saudável.

DICAS PARA O BEM-ESTAR GERAL:

Alimentação Consciente: Inclua uma variedade de alimentos nutritivos, como frutas, vegetais, proteínas magras e grãos integrais para garantir a ingestão adequada de nutrientes essenciais.

Hidratação Suficiente: Beba água ao longo do dia para manter o corpo funcionando de maneira otimizada. A hidratação é vital para a saúde geral.

Movimento Regular: Encontre atividades físicas que você goste, tornando o exercício uma parte natural do seu dia. Mexa-se para manter o corpo ativo.

QUALIDADE DE SONO: Priorize um sono adequado para permitir a recuperação física e mental. Um sono de qualidade é essencial para a vitalidade diária.


      `;
      break;
    case imc >= 26 && imc <= 30:
      textModal.innerHTML = `Seu IMC é de: <strong class="text-warning">${imc}</strong>. Você está com sobrepeso, É uma oportunidade para adotar práticas saudáveis. Aqui estão algumas dicas para iniciar uma jornada de emagrecimento e bem-estar:

      Dicas para Emagrecimento e Saúde:
      
      Avaliação Alimentar: Faça uma revisão honesta dos seus hábitos alimentares. Priorize alimentos integrais, reduza o consumo de açúcares e gorduras saturadas.
      
      Controle das Porções: Esteja atento às porções de suas refeições. Comer conscientemente pode ajudar a evitar o excesso de ingestão calórica.
      
      Escolhas Nutritivas: Opte por alimentos ricos em nutrientes, como frutas, vegetais, proteínas magras e grãos integrais. Isso proporciona saciedade e nutrição adequada.
      
      Atividade Física Regular: Integre exercícios à sua rotina diária. Escolha atividades que você desfrute para tornar o processo mais agradável.
      
      Hidratação Adequada: Beba água regularmente. Às vezes, a sensação de fome pode ser confundida com desidratação.
      
      Registro Alimentar: Mantenha um diário alimentar para rastrear o que você come. Isso pode aumentar a consciência sobre padrões alimentares.
      
      `;
      break;
    case imc >= 31 && imc <= 41:
      textModal.innerHTML = `Seu IMC é de: <strong class="text-danger">${imc}</strong>. Você está com obesidade, e estamos aqui para oferecer suporte. Aqui estão algumas dicas para iniciar uma jornada de emagrecimento e bem-estar:

      Dicas para Emagrecimento e Saúde:
      
      Avaliação Profissional: Consulte um profissional de saúde para uma avaliação abrangente. Eles podem fornecer orientações personalizadas e criar um plano adequado às suas necessidades.
      
      Alimentação Consciente: Desenvolva uma relação saudável com a comida. Pratique a alimentação consciente, prestando atenção às sensações de fome e saciedade.
      
      Escolhas Nutritivas: Priorize alimentos ricos em nutrientes, como frutas, vegetais, proteínas magras e grãos integrais. Evite alimentos processados e ricos em calorias vazias.
      
      Controle das Porções: Monitore o tamanho das porções para evitar excessos. Use pratos menores e divida as refeições em porções menores ao longo do dia.
      
      Exercício Regular: Inclua atividades físicas que você desfrute em sua rotina diária. Comece com metas alcançáveis e aumente gradualmente a intensidade.
      
    
      
      `;
      break;
    case imc >= 41:
      textModal.innerHTML = `Seu IMC é de: <strong class="text-danger">${imc}</strong>. Você está com obesidade morbida, ECompreendemos os desafios da obesidade mórbida e incentivamos uma abordagem cuidadosa com o apoio de profissionais de saúde. Considere estas diretrizes como ponto de partida:

      Avaliação Médica Detalhada: Busque avaliação médica especializada para desenvolver um plano seguro.
      
      Equipe de Suporte Profissional: Construa uma equipe de profissionais de saúde para orientação especializada.
      
      Alimentação Controlada: Trabalhe com um nutricionista para um plano equilibrado, atendendo às suas necessidades.
      
      Atividade Física Supervisionada: Inicie um programa de exercícios sob supervisão profissional.
      
      Monitoramento Médico Regular: Realize check-ups para avaliar o progresso e ajustar o plano conforme necessário.
      
      Apoio Psicológico: Considere suporte psicológico para abordar fatores emocionais.
      
      Metas Realistas: Estabeleça metas mensuráveis, celebrando pequenas vitórias.
      `;
      break;
    default:
      null;
  }

  modal.style.cssText = `
    display: block; 
    opacity: 1;
  `;

  btnClose.addEventListener("click", () => {
    modal.style.cssText = `
      display: none; 
      opacity: 0;
    `;
  });
}
