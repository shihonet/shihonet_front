export interface Blog {
  id: number;
  title: string;
  publishedAt: string;
  blogUrl: string;
  content: string;
  imageUrls: string[];
  isFavorite: boolean;
  isLoggedIn: boolean;
}

export interface ApiResponseBlog {
  id: number;
  title: string;
  published_at: string;
  blog_url: string;
  content: string;
  image_urls: string[];
  is_favorite: boolean;
  is_logged_in: boolean;
}

export interface RandomBlog {
  title: string;
  publishedAt: string;
  blogUrl: string;
  imageUrl: string;
}

export interface ApiResponseRandomBlog {
  title: string;
  member_name: string;
  published_at: string;
  blog_url: string;
  image_url: string;
}
