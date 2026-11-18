import type { PostTitleUpdate } from '../models/Post'
import { POSTS_API_URL } from '../services/api.constants'

// `method` is limited to JSON-body methods; DELETE uses its own request helper.
// `body` is serialized as JSON and `<T>` describes the expected response type.
async function sendJson<T>(
  url: string,
  method: 'POST' | 'PUT' | 'PATCH',
  body: object,
) {
  const response = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`)
  }

  // `as T` is a compile-time assertion, not runtime response validation.
  return (await response.json()) as T
}

// Sends a title update for the post with the given ID.
export function updatePostTitle(id: number, title: string) {
  return sendJson<PostTitleUpdate>(`${POSTS_API_URL}/${id}`, 'PUT', { title })
}
