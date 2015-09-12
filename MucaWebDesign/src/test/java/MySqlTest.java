import java.sql.DriverManager;

import org.junit.Test;

public class MySqlTest {
	// http://54.148.215.137:3306
	private java.sql.Connection con = null;
	private String url = "jdbc:mysql://54.148.215.137:3306/MucaWebDesign";
	private String user = "java";
	private String password = "root";

	@Test
	public void checkConnectionToAmazonMachine() throws Exception {

		con = DriverManager.getConnection(url, user, password);
		con.createStatement().executeQuery("Select * from UserMessages");
		con.close();
	}
}
