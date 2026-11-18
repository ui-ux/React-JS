import type { Post } from '../models/Post'
import { POSTS_API_URL } from '../services/api.constants'

// `<T>` is a generic response type; `signal` optionally cancels the request.
async function getJson<T>(url: string, signal?: AbortSignal) {
  const response = await fetch(url, { signal })
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`)
  }

  // `as T` tells TypeScript the expected shape; it does not validate JSON.
  return (await response.json()) as T
}

// `id` selects a post; `signal` lets the caller cancel this fetch.
export function getPostById(id: number, signal?: AbortSignal) {
  return getJson<Post>(`${POSTS_API_URL}/${id}`, signal)
}
