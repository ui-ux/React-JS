import { useEffect, useState } from 'react'
import type { Post } from '../models/Post'
import { getErrorMessage, isAbortError } from '../services/requestUtils'
import { getPosts } from './postsApi'

function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    getPosts(controller.signal)
      .then(setPosts)
      .catch((requestError: unknown) => {
        if (!isAbortError(requestError)) {
          setError(getErrorMessage(requestError, 'Failed to load posts.'))
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      })

    return () => controller.abort()
  }, [])

  return (
    <section className="page-card">
      <p className="eyebrow">Posts __ GET</p>
      <h2>Load posts</h2>
      <p>Fetch a collection of posts and render the response in a list.</p>

      {loading && <p role="status">Loading posts…</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && posts.length === 0 && <p>No posts available.</p>}

      {posts.length > 0 && (
        <table className="model-view-table">
          <caption>Posts retrieved from JSONPlaceholder</caption>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}

export default PostsPage
