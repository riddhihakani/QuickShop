export interface ProductModelServer {
    id: number;
    name: string;
    category: string;
    subcategory: string;
    sizes: [];
    supplier:string;
    brand:string;
    description: string;
    image: string;
    price: number;
    quantity: number;
  
  }
  
  
  export interface serverResponse{
    count: number;
    products: ProductModelServer[]
  };
  