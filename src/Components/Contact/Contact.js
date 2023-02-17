import React from "react";
import "./Contact.css";
import { Element } from "react-scroll";

function Contact() {
	return (
		<Element className="contact_container" id="contact">
			<h1>Contact</h1>
			<div id="cnt">
				<div className="contacts">
					<p>
						Email :
						<a
							href="mailto:jaya26it@gmail.com"
							target="_blank"
							rel="noreferrer"
							className="gmailid"
						>
							jaya26it@gmail.com
						</a>
					</p>
					<div className="colz">
						<div className="colz-icon">
							<a
								href="https://github.com/jayaarun291087"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fa fa-github"></i>
							</a>
							<a
								href="https://www.instagram.com/jaya_ravi91/"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fa fa-instagram"></i>
							</a>
							<a
								href="https://www.linkedin.com/in/Jayalakshmi R/"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fa fa-linkedin"></i>
							</a>
						</div>
					</div>
				</div>
        <form className="contacts">
          <input type="text" name="fullname" id="fullname" placeholder="Your Name" className="inp" />
          <input type="email" name="email" id="email" placeholder="Your Email ID" className="inp" autoComplete="off" />
          <textarea name="msg" id="msg" cols="20" rows="5" placeholder="Your Message" className="inp"></textarea>
          <button type="submit" className="btnn">Send</button>
        </form>
			</div>
		</Element>
	);
}
export default Contact;