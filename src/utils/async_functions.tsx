export interface Review {
  name:        string;
  description: string;
}

export interface User {
  name:      string;
  password:  string;
  email?:     string;
  cart?:      number;
  whishlist?: number;
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

