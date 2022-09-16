export default class ProductService {

    getProductsSmall() {
		return fetch('../services/products-small.json').then(res => res.json()).then(d => d.data);
	}

	getProducts() {
		return fetch('../services/products-small.json').then(res => res.json()).then(d => d.data);
    }

    getProductsWithOrdersSmall() {
		return fetch('../services/products-small.json').then(res => res.json()).then(d => d.data);
	}
}