import { FaCcVisa, FaCcMastercard, FaPaypal } from 'react-icons/fa';

function Footer() {
	return (
		<footer className="footer">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs md:text-sm">
				<div className="footer-text">
					All Rights Reserved © 2023 Silk & Olive
				</div>
				{/* <div className="footer-text">
					<a href="mailto:booking@silkandolive.com" className="footer-link footer-text">booking@silkandolive.com</a>
					<a href="tel:+41766446552" className="footer-link footer-text">+41 766 446 552</a>
				</div> */}
				<div>
					<FaCcVisa className="footer-icon" />
					<FaCcMastercard className="footer-icon" />
					<FaPaypal className="footer-icon" />
				</div>
			</div>
		</footer>
	);
}

export default Footer;