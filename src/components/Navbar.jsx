import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from './useCart';

// import '../styles/App.css';

function Navbar() {
	const { items } = useCart();
	const totalItems = items.reduce((total, item) => total + item.quantity, 0);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white border-1">
			<div className="container-fluid">
				<Link className="navbar-brand px-16" to="/">
					<img src="/public/assets/logo_2.png" alt="Logo" style={{ height: '40px' }} />
				</Link>
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link-1 px-4" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link-1 px-4" to="/menu">Menu</Link>
						</li>
					</ul>
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link-1 px-5 flex items-center" to="/cart">
								<FaShoppingCart />
								<span className={`text-sm pl-2 ${totalItems > 0 ? '.primary' : 'text-gray-500'}`}> ({totalItems}) </span>
							</Link>
						</li>
					</ul>
				</div>

		</nav>
	);
}

export default Navbar;