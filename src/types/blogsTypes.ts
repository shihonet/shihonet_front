export interface Blog {
  id: number;
  title: string;
  memberName: string;
  publishedAt: string;
  blogUrl: string;
  content: string;
  thumbnailImageUrl: string;
  imageUrls: string[];
}

export interface ApiResponseBlog {
  id: number;
  title: string;
  member_name: string;
  published_at: string;
  blog_url: string;
  content: string;
  thumbnail_image_url: string;
  image_urls: string[];
}

export interface RandomBlog {
  title: string;
  memberName: string;
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
