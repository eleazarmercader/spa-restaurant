import MenuItem from '../components/MenuItem';
import menuItemsData from '../data/menuItems.json';

function MenuView() {
	return (
		<div className="container mt-3">
			<h1 className='text-center'>Restaurant Menu</h1>
			<div className="row">
				{menuItemsData.map(item => (
					<div key={item.id} className="col-md-4">
						<MenuItem item={item} />
					</div>
				))}
			</div>
		</div>
	);
}

export default MenuView;