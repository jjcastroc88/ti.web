class Api {
	get(url) {
		return fetch(url, {
			method: 'GET',
			headers:{
				'Content-Type': 'application/json'
			}
		});
	}
}

const api = new Api();

export default api;