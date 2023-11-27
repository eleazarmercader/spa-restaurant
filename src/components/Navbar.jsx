import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from './useCart';

// import '../styles/App.css';

function Navbar() {
	const { items } = useCart();
	const totalItems = items.reduce((total, item) => total + item.quantity, 0);

	return (
		<nav className="navbar navbar-expand navbar-light bg-white border-1 sticky-top">
			<div className="container-fluid flex justify-between">
				<Link className="navbar-brand pl-4 md:pl-8 lg:pl-16" to="/">
					<img
						src="/public/assets/logo_2.png"
						alt="Logo"
						className="max-h-10 w-auto"
					/>
					</Link>
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link-1 px-4 md:px-6 lg:px-8" to="/">Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link-1 px-4 md:px-6 lg:px-8" to="/menu">Menu</Link>
							</li>
						</ul>
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link-1 sm:px-15 lg:px-20 flex items-center" to="/cart">
									<FaShoppingCart />
									<span
										className={`text-sm pl-2
										${totalItems > 0
											? '.primary'
											: 'text-gray-500'
										}`}>
											({totalItems})
										</span>
								</Link>
							</li>
						</ul>
				</div>
		</nav>
	);
}

export default Navbar;