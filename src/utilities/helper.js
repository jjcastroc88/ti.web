class Helper {
	getMenu() {
		return [
			{
				id: 1,
				label: 'Home',
				path: '/',
			},
			{
				id: 2,
				label: 'Products',
				path: '/products',
			},
			{
				id: 3,
				label: 'Clients',
				path: '/clients',
			},
			{
				id: 4,
				label: 'Contact',
				path: '/contacts',
			}
		]
	} 
}

const helpers = new Helper();
export default helpers;