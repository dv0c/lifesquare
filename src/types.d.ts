export interface Tag {
  slug: string;
  id: string;
  name: string;
  description: null | string;
  feature_image: null | string;
  visibility: string;
  meta_title: null | string;
  meta_description: null | string;
  og_image: null | string;
  og_title: null | string;
  og_description: null | string;
  twitter_image: null | string;
  twitter_title: null | string;
  twitter_description: null | string;
  codeinjection_head: null | string;
  codeinjection_foot: null | string;
  canonical_url: null | string;
  accent_color: null | string;
  url: string;
}

export interface PostsWithMeta {
  posts: [Post];
  meta: {
    pagination: {
      page: number;
      limit: number;
      pages: number;
      total: number;
      next: number;
      prev: number;
    };
  };
}

export interface Post {
  slug: string;
  id: string;
  uuid: string;
  title: string;
  html: string;
  comment_id: string;
  feature_image: string;
  feature_image_alt: null | string;
  feature_image_caption: null | string;
  featured: boolean;
  visibility: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  primary_author?: PrimaryAuthor;
  custom_excerpt: null | string;
  codeinjection_head: null | string;
  codeinjection_foot: null | string;
  custom_template: null | string;
  canonical_url: null | string;
  url: string;
  excerpt: string;
  reading_time: number;
  access: boolean;
  og_image: null | string;
  og_title: null | string;
  og_description: null | string;
  twitter_image: null | string;
  twitter_title: null | string;
  twitter_description: null | string;
  meta_title: null | string;
  meta_description: null | string;
  email_subject: null | string;
}

export type ParamsTypes = {
  include?: string;
  fields?: string;
  formats?: "html" | "plaintext";
  filter?: string[] | string;
  limit?: number;
  page?: number;
  order?: "published_at DESC" | "title ASC" | "name ASC" | "monthly_price ASC";
  [key: string]: any;
};

export type PrimaryAuthor = {
  id: number;
  name: string;
  slug: string;
  profile_image: string;
  cover_image: string;
  bio: string | null;
  website: string | null;
  location: string | null;
  facebook: string | null;
  twitter: string | null;
  meta_title: string | null;
  meta_description: string | null;
  url: string;
};

export interface Author {
  slug: string;
  id: string;
  name: string;
  profile_image: string | null;
  cover_image: string | null;
  bio: string;
  website: string;
  location: string;
  facebook: string;
  twitter: string;
  meta_title: string | null;
  meta_description: string | null;
  url: string;
}

export interface AuthorsData {
  authors: Author[];
}

export interface TagsData {
  tags: Tag[];
}
