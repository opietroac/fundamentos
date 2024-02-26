let salario_fixo2 = parseFloat(prompt("Digite o salário fixo do vendedor:"));
let vendas_efetuadas2 = parseFloat(prompt("Digite o valor total de vendas efetuadas pelo vendedor no mês:"));
let premio = vendas_efetuadas2 > 7500 ? 1000 : vendas_efetuadas2 > 5000 ? 700 : vendas_efetuadas2 > 1000 ? 500 : 0;
let salario_total = salario_fixo2 + premio;
console.log(salario_total);
