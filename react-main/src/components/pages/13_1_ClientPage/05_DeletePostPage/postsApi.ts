import { POSTS_API_URL } from '../services/api.constants'

// DELETE may return an empty response, so this helper checks status only.
async function sendRequest(url: string, method: 'DELETE') {
  const response = await fetch(url, { method })
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`)
  }
}

// Delete the post selected by its ID.
export function deletePost(id: number) {
  return sendRequest(`${POSTS_API_URL}/${id}`, 'DELETE')
}
