salario = float(input('Qual o seu salário fixo em reais: R$'))
venda_efetuada = float(input('Qual foi o total de vendas mensal em reais: R$'))

if(venda_efetuada > 1000 and venda_efetuada <= 5000):
    salario_premio = salario + 500
    print('Seu salário esse mês será de', salario_premio)

elif(venda_efetuada > 5000 and venda_efetuada <= 7500):
    salario_premio2 = salario + 700
    print('Seu salário esse mês será de', salario_premio2)

elif(venda_efetuada > 7500):
    salario_premio3 = salario + 1000
    print('Seu salário esse mês será de', salario_premio3)

else:
    print('Seu salário será o mesmo!')