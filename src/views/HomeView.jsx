import MenuItem from '../components/MenuItem';
import menuItemsData from '../data/menuItems.json';

function HomeView() {
    return (
        <div className="container mx-auto px-4">
    <h1 className="text-4xl font-bold text-center my-10">Restaurant Menu</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItemsData.map(item => (
            <MenuItem key={item.id} item={item} />
        ))}
    </div>
</div>
    );
}

export default HomeView;