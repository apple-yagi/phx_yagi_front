export type User = {
  id: string;
  email?: string;
  name: string;
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
  icon_path: string;
};
