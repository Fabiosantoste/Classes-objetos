class Pessoa:
    def __init__(self, nome, dia_nasc, mes_nasc, ano_nasc):
        self.nome = nome
        self.dia_nasc = dia_nasc
        self.mes_nasc = mes_nasc
        self.ano_nasc = ano_nasc
        self.idade = None

    def calculaIdade(self, dia_atual, mes_atual, ano_atual):
        idade = ano_atual - self.ano_nasc
        if mes_atual < self.mes_nasc or (mes_atual == self.mes_nasc and dia_atual < self.dia_nasc):
            idade -= 1
        self.idade = idade

    def informaIdade(self):
        return self.idade

    def __str__(self):
        return f"Nome: {self.nome}, Data de nascimento: {self.dia_nasc}/{self.mes_nasc}/{self.ano_nasc}, Idade: {self.idade}"

# Instanciando os objetos da classe Pessoa
einstein = Pessoa("Albert Einstein", 14, 3, 1879)
newton = Pessoa("Isaac Newton", 4, 1, 1643)

# Calculando as idades atuais
einstein.calculaIdade(21, 4, 2023)
newton.calculaIdade(21, 4, 2023)

# Mostrando as idades atuais
print(f"A idade atual de {einstein.nome} é {einstein.informaIdade()} anos.")
print(f"A idade atual de {newton.nome} é {newton.informaIdade()} anos.")