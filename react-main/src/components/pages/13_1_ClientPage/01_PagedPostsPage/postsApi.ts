import type { Post } from '../models/Post'
import { POSTS_API_URL } from '../services/api.constants'

// `async` allows `await`; `<T>` lets this helper return different data types.
// `url` is the request address and `signal` can cancel the fetch if needed.
async function getJson<T>(url: string, signal?: AbortSignal) {
  // `await fetch()` waits for the HTTP response and forwards the abort signal.
  const response = await fetch(url, { signal })

  // `response.ok` is true for successful HTTP status codes.
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`)
  }

  // `response.json()` parses the body. `as T` is a TypeScript assertion,
  // not a runtime check of the data returned by the server.
  return (await response.json()) as T
}

export function getPagedPosts(
  page: number,
  pageSize: number,
  signal?: AbortSignal,
) {
  const params = new URLSearchParams({
    _page: String(page),
    _limit: String(pageSize),
  })

  return getJson<Post[]>(`${POSTS_API_URL}?${params}`, signal)
}
