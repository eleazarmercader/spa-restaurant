import MenuItem from '../components/MenuItem';
import menuItemsData from '../data/menuItems.json';

function MenuView() {
	return (
		<div className="container mt-4">
			<h1 className='text-center'>Gourmet Menu</h1>
			<div className="row">
				{menuItemsData.map(item => (
					<div key={item.id} className="col-md-3">
						<MenuItem item={item} />
					</div>
				))}
			</div>
		</div>
	);
}

export default MenuView;