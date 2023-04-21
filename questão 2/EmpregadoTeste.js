public class EmpregadoTeste {
    public static void main(String[] args) {
        Empregado empregado1 = new Empregado("João", "Silva", 2000);
        Empregado empregado2 = new Empregado("Maria", "Souza", 2500);
        
        System.out.printf("%s %s: %.2f%n", empregado1.getNome(), empregado1.getSobrenome(), empregado1.salarioAnual());
        System.out.printf("%s %s: %.2f%n", empregado2.getNome(), empregado2.getSobrenome(), empregado2.salarioAnual());
        
        empregado1.aumentarSalario(10);
        empregado2.aumentarSalario(10);
        
        System.out.printf("%s %s: %.2f%n", empregado1.getNome(), empregado1.getSobrenome(), empregado1.salarioAnual());
        System.out.printf("%s %s: %.2f%n", empregado2.getNome(), empregado2.getSobrenome(), empregado2.salarioAnual());
    }
}
