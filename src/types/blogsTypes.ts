export interface Blog {
  title: string;
  memberName: string;
  publishedAt: string;
  blogUrl: string;
  thumbnailImageUrl: string;
}

export interface ApiResponseBlog {
  title: string;
  member_name: string;
  published_at: string;
  blog_url: string;
  thumbnail_image_url: string;
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
