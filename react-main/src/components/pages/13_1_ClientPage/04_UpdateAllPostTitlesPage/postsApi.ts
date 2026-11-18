import type { Post, PostTitleUpdate } from '../models/Post'
import { POSTS_API_URL } from '../services/api.constants'

// `<T>` is the expected response type; `signal` optionally cancels this GET.
async function getJson<T>(url: string, signal?: AbortSignal) {
  const response = await fetch(url, { signal })
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`)
  }

  // `as T` is a TypeScript assertion; it does not validate the JSON at runtime.
  return (await response.json()) as T
}

// Supports JSON-body methods. DELETE is separate because its body may be empty.
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

  return (await response.json()) as T
}

export function getPosts(signal?: AbortSignal) {
  return getJson<Post[]>(POSTS_API_URL, signal)
}

export async function updateAllPostTitles(posts: Post[]) {
  if (posts.length === 0) {
    return []
  }

  return Promise.all(
    posts.map((post) =>
      sendJson<PostTitleUpdate>(`${POSTS_API_URL}/${post.id}`, 'PUT', {
        title: post.title.trim(),
      }),
    ),
  )
}
