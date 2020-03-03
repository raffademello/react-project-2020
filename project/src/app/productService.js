const PRODUCTS = '_PRODUCTS'

export function ErrorValidation(errors){
    this.errors = errors;
}

export default class productService {
    validate  = (product) =>{
        const errors = []
  
        if(!product.nomeProduto){
            errors.push('Preencha o campo nome');
        }

        if(!product.SKU){
            errors.push('Preencha o campo nome do produto');
        }

        if(!product.valorProduto || product.valorProduto <= 0){
            errors.push('Campo obrigatório / Valor precisa ser maior que zero');
        }

        if(!product.fornecedorProduto){
            errors.push('Preencha o nome do fornecedor');
        }

        if(!product.descricaoProduto){
            errors.push('Preencha o a descrição do produto');
        }
  
        if(errors.length  > 0){
           throw new ErrorValidation(errors);
        }
    }

    getProducts =() => {
        let products = localStorage.getItem(PRODUCTS); 
        return JSON.parse(products); /* O LocalStorage só armazena strings, o JSON Parse converte para JSON */
    }

    save = (product) => {
        this.validate(product);
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
