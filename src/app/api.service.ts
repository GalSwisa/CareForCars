import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseURL: string = 'http://localhost:8000/api/';
  headers = { 'content-type': 'application/json' };

  constructor(private http: HttpClient) {}
  
  //Returns all the products from the products collection
  getProduct(): Observable<any> {
    return this.http.get(this.baseURL + 'getAllProducts');
  }

  // Adds a new product to the cart collection. If the product already exists, it increases it's amount by 1.
  addProductToCart(product: any): Observable<any> {
    console.log(product.Amount)
    if(product.Amount==0) {
      product.userEmail = localStorage.getItem('currentUser')
      product.Amount = 1
      let body = JSON.stringify(product);
      console.log(body)
      return this.http.post(this.baseURL + 'addToCart', body, { 
        headers: this.headers,
      });
    }    
    product.userEmail = localStorage.getItem('currentUser')
    product.Amount++
    let body = JSON.stringify(product);
    console.log(body)
    return this.http.put(this.baseURL + 'updateCartItem/'+product.SerialNumber, body, { headers: this.headers})
  }
  updateProductFromCart(product: any, data: any): Observable<any> {
    if(localStorage.getItem('currentUser')!=data.userEmail) {
      console.log(data.userEmail)
      let newProduct = new Product( 
        Math.floor((Math.random() * 1000000) + product.SerialNumber+1).toString(),
        product.Name,
        product.Price,
        product.Category,
        product.Description,
        product.imgUrl,
        localStorage.getItem('currentUser'),
        1)
      console.log(newProduct)
      let body = JSON.stringify(newProduct);
      console.log(body)
      return this.http.post(this.baseURL + 'addToCart', body, { 
        headers: this.headers,
      });
    }
    data.Amount = data.Amount+1
    let body = JSON.stringify(data);
    return this.http.put(this.baseURL + 'updateCartItem/'+product.SerialNumber, body, { headers: this.headers})
  }
  // Removes the product from the cart. If it contains more than one, it decreases it's amount by 1.
  removeProductFromCart(product: any): Observable<any> {
    if(product.Amount == 1) {
      return this.http.delete(this.baseURL + 'deleteCartItem/'+product.SerialNumber)
    }
    product.Amount = product.Amount - 1
    let body = JSON.stringify(product)
    return this.http.put(this.baseURL + 'updateCartItem/'+product.SerialNumber, body, { headers: this.headers})
    
  }
  
  getUser(): Observable<any> {
    return this.http.get(this.baseURL + 'getUser/:userEmail');
  }
  getSpecificUser(userEmail : any): Observable<any> {
    return this.http.get(this.baseURL + 'getUser/'+userEmail)
  }
  addUser(user: any): Observable<any> {
    let body = JSON.stringify(user);
    console.log(body);
    return this.http.post(this.baseURL + 'createUser', body, { headers: this.headers });
  }
  //Returns a specific product from the cart collection (if it exists)
  getSpecificItemFromCart(product: any): Observable<any> {
    return this.http.get(this.baseURL + 'getSpecificCartItem/'+product.SerialNumber);
  }  
  //Returns the cart of a certain username (Using the email param as an ID)
  getCart(): Observable<any> {
    return this.http.get(this.baseURL + 'getCart/'+localStorage.getItem('currentUser'))
  }
 
}

class Product {

  SerialNumber: string
  Name: string
  Price: string
  Category: string
  Description: string
  imgUrl: string
  userEmail: string    
  Amount:number

  constructor(SerialNumber: string,  Name: string, Price: string ,Category: string,  Description: string,  imgUrl: string,  userEmail: string,  Amount:number) {
    this.SerialNumber = SerialNumber
    this.Name = Name
    this.Price = Price
    this.Category = Category
    this.Description = Description
    this.imgUrl = imgUrl
    this.userEmail = userEmail        
    this.Amount = Amount
  }
}
