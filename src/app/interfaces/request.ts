import { Article } from './article';
export interface Request {
  status: string;
  totalResults: number;
  articles: Article[];
}
