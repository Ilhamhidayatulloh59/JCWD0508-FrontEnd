import { Document } from "@contentful/rich-text-types";

export interface IUser {
    username: string
    email: string
    avatar: string
}

export interface IBlog {
    id: string
    title: string
    thumbnail: string
    category: string
    slug: string
    content: Document
    createdAt: string
    user: IUser
}