export interface ProductModelServer {
    id: number;
    name: String;
    category: String;
    subcategory: String;
    sizes: [];
    supplier:String;
    brand:String;
    description: String;
    image: String;
    price: Number;
    quantity: Number;
  
  }
  
  
  export interface serverResponse{
    count: number;
    products: ProductModelServer[]
  };
  