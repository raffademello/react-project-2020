const PRODUCTS = '_PRODUCTS'

export default class productService {
    save = (product) => {
        let products = localStorage.getItem(PRODUCTS);
        if(!products){
            products = []
        }else{
            products = JSON.parse(products);
        }

        products.push(product);

        localStorage.setItem(PRODUCTS,JSON.stringify(products));
    }
}
