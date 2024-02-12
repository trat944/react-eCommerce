export interface Review {
  name:        string;
  description: string;
}


export const fetchReviews = async() => {
    const response = await fetch('/src/data_json/reviews.json');
    const data: Review[] = await response.json();
    return data;
}