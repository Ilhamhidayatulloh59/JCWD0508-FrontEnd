"use server"

import { cookies } from "next/headers"

export const deleteCookie = (key: string) => {
    cookies().delete(key)
}