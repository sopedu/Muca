import java.sql.DriverManager;
import java.sql.SQLException;

public class SqlInserter {

	private String name;
	private String email;
	private String phone;
	private String message;
	private java.sql.Connection con = null;
	private String url = "jdbc:mysql://52.88.18.97:3306/MucaWebDesign";
	private String user = "java";
	private String password = "root";

	public SqlInserter(String name, String email, String phone, String message) {
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.message = message;
	}

	public void execute() {
		try {
			con = DriverManager.getConnection(url, user, password);
			String sql = "insert into UserMessages (name,email,phone,message) values ('"

					+ name
					+ "' ,'"
					+ email
					+ "' ,'"
					+ phone
					+ "' ,'"
					+ message
					+ "')";
			System.out.println("executing sql " + sql);
			con.createStatement().executeUpdate(sql);
			con.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

}
