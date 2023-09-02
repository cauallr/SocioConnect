import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class connection1 {

    public static void main(String[] args) {
        Connection conexao = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conexao = DriverManager.getConnection("jdbc:mysql://localhost:3306/socio_connect?user=root&password=");
            
            System.out.println("Conexão estabelecida com sucesso!");

            // Aqui você pode executar operações no banco de dados

        } catch (ClassNotFoundException ex) {
            System.out.println("Driver do banco de dados não localizado: " + ex.getMessage());
        } catch (SQLException ex) {
            System.out.println("Ocorreu um erro ao acessar ao banco de dados: " + ex.getMessage());
        } finally {
            if (conexao != null) {
                try {
                    System.out.println("Conexão fechada");
                    conexao.close();
                } catch (SQLException ex) {
                    System.out.println("Erro ao fechar a conexão: " + ex.getMessage());
                }
            }
        }
    }
}
