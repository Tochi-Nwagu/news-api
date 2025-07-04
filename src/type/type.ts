//newsItem
export interface NewsItem {
  id: string;
  author: string;
  title: string;
  description: string;
  category: NewsCategory;
  content: string;
  imageUrl: string;
}

//category
export type NewsCategory =
  | 'business'
  | 'sports'
  | 'entertainment'
  | 'health'
  | 'science'
  | 'technology'
  | 'general';
