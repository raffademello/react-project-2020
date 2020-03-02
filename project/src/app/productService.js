const PRODUCTS = '_PRODUCTS'

export default class productService {
    save = (product) => {
        let products = localStorage.getItem(PRODUCTS);
        if(!products){
            products = [] /*recebe um array vazio*/
        }else{
            products = JSON.parse(products);/*recebe string e transforma em JSON*/
        }

        products.push(product);

        localStorage.setItem(PRODUCTS,JSON.stringify(products)); /* transforma JSON em string*/
    }
}
