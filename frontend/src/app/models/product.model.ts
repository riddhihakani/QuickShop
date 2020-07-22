export interface ProductModelServer {
    id: Number;
    name: String;
    category: String;
    brand:String;
    description: String;
    image: String;
    price: Number;
    quantity: Number;
  
  }
  
  
  export interface serverResponse  {
    count: number;
    products: ProductModelServer[]
  };
  