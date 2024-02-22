export interface Review {
  name:        string;
  description: string;
}

export interface User {
  name:      string;
  password:  string;
  email?:     string;
  cart?:      Product[];
  whishlist?: Product[];
}

export interface Product {
  id:           number,
  name:         string;
  category:     string;
  description:  string;
  price:        string;
  image:        string;
}

export const fetchReviews = async() => {
    const response = await fetch('/src/data_json/reviews.json');
    const data: Review[] = await response.json();
    return data;
}


export const fetchUsers = async() => {
  const response = await fetch('/src/data_json/users.json');
  const data: User[] = await response.json();
  return data;
}

export const fetchProducts = async() => {
  const response = await fetch('/src/data_json/products.json');
  const data: Product[] = await response.json();
  return data;
}

