import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import ky from "ky"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const API_URL = 'http://localhost:1337/api'
export const basePath = '/basilico'

export const kyOriginalApi = ky.create({
  prefixUrl: API_URL
})
