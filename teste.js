let salario_fixo = parseFloat(prompt("Digite o salário fixo do vendedor: salario_fixo"));
let vendas_efetuadas = parseFloat(prompt("Digite o valor total de vendas efetuadas: vendas_efetuadas"));
let premio = 0;

if (vendas_efetuadas > 7500) {
    premio = 1000;
} else if (vendas_efetuadas) {
    premio = 700;
} else if (vendas_efetuadas > 1000) {
    premio = 500;
}

let salario_total = salario_fixo + premio;

console.log("O salário total do vendedor é de R$", salario_total);