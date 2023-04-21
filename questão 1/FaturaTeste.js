public class FaturaTeste {
    public static void main(String[] args) {
        // Criando um objeto Fatura
        Fatura fatura = new Fatura("001", "Teclado USB", 2, 29.9);

        // Imprimindo os valores iniciais
        System.out.println("Número: " + fatura.getNumero());
        System.out.println("Descrição: " + fatura.getDescricao());
        System.out.println("Quantidade: " + fatura.getQuantidade());
        System.out.println("Preço por item: " + fatura.getPreco());

        // Alterando os valores da fatura
        fatura.setQuantidade(3);
        fatura.setPreco(-10.0);

        // Imprimindo os novos valores
        System.out.println("Número: " + fatura.getNumero());
        System.out.println("Descrição: " + fatura.getDescricao());
        System.out.println("Quantidade: " + fatura.getQuantidade());
        System.out.println("Preço por item: " + fatura.getPreco());

        // Imprimindo o valor total da fatura
        System.out.println("Valor total da fatura: " + fatura.getTotalFatura());
    }
}