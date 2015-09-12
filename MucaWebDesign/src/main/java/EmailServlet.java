import java.io.IOException;

import javax.mail.MessagingException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class EmailServlet
 */
@WebServlet("/EmailServlet")
public class EmailServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * Default constructor.
	 */
	public EmailServlet() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * p
	 * 
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		System.err.println("I GOT YAAAA");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		String name = request.getParameter("name");
		String email = request.getParameter("email");
		String phone = request.getParameter("phone");
		String message = request.getParameter("message");
		System.err.println(name + " " + email + " " + phone + " " + message);
		new SqlInserter(name,email,phone,message).execute();
//		sendEmail();

	}

	public void sendEmail() {
		try {
			GoogleMail.Send("mucawebdesign", "flapjack12",
					"mucawebdesign@gmail.com", "ilk mail", "yeah fuck");
		} catch (MessagingException e) {
			e.printStackTrace();
		}
	}

}
