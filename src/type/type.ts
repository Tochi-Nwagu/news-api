//newsItem
export interface NewsItem {
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