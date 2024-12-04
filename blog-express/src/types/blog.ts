import { Document } from "@contentful/rich-text-types";

export interface IUser {
  username: string;
  email: string;
  avatar: string;
  role: "Admin" | "User";
}

export interface IBlog {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  slug: string;
  content: Document;
  createdAt: string;
  user: IUser;
}

export interface BlogInput {
  title: string;
  category: string;
  content: string;
  slug: string;
  thumbnail?: File | string | null;
}
