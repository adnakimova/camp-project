import axios from "axios"

export class ProductService{
        getProducts(){
            return axios.get("http://localhost:8080/api/products/getAll") //RESTFull service request gondermek
            
        }
        getByProductName(productName){
            return axios.get("http://localhost:8080/api/products/getByProductName?productName="+productName) //RESTFull service request gondermek
            
        }
}