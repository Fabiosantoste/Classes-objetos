class Livro:
    def __init__(self, nome, preco, autor):
        self.nome = nome
        self.preco = preco
        self.autor = autor
    
    def imprimir_dados(self):
        print(f"Nome: {self.nome}\nPreço: R${self.preco:.2f}\nAutor: {self.autor}\n")


class CD:
    def __init__(self, nome, preco, num_faixas):
        self.nome = nome
        self.preco = preco
        self.num_faixas = num_faixas
    
    def imprimir_dados(self):
        print(f"Nome: {self.nome}\nPreço: R${self.preco:.2f}\nNúmero de faixas: {self.num_faixas}\n")


class DVD:
    def __init__(self, nome, preco, duracao):
        self.nome = nome
        self.preco = preco
        self.duracao = duracao
    
    def imprimir_dados(self):
        print(f"Nome: {self.nome}\nPreço: R${self.preco:.2f}\nDuração: {self.duracao}\n")


class Loja:
    def __init__(self):
        self.produtos = []

    def adicionar_produto(self, produto):
        self.produtos.append(produto)
    
    def imprimir_produtos(self):
        for produto in self.produtos:
            produto.imprimir_dados()


# Exemplo de uso da classe Loja
if __name__ == '__main__':
    loja = Loja()

    livro1 = Livro("A Menina que Roubava Livros", 29.90, "Markus Zusak")
    cd1 = CD("Nevermind", 24.90, 12)
    dvd1 = DVD("O Senhor dos Anéis: O Retorno do Rei", 39.90, "3h21min")
    livro2 = Livro("1984", 19.90, "George Orwell")
    dvd2 = DVD("Interestelar", 29.90, "2h49min")

    loja.adicionar_produto(livro1)
    loja.adicionar_produto(cd1)
    loja.adicionar_produto(dvd1)
    loja.adicionar_produto(livro2)
    loja.adicionar_produto(dvd2)

    loja.imprimir_produtos()