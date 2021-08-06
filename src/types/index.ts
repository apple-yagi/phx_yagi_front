export type User = {
  id: string;
  name: string;
  photoURL: string;
  createdAt?: Date;
  updatedAt?: Date;
  articles?: Article[];
};

export type Article = {
  id: string;
  title: string;
  thumbnail_url: string;
  content?: string;
  createdAt?: Date;
  updatedAt?: Date;
  user: User;
  tags: Tag[];
};

export type Tag = {
  id: string;
  name: string;
  displayName: string;
  iconPath: string;
  articles: Article[];
};

export type ArticleListResponse = {
  articles: Article[];
  count: number;
};
