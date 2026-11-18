import { useState, type SubmitEvent } from 'react'
import type { Post } from '../models/Post'
import { getErrorMessage } from '../services/requestUtils'
import { getPostById } from './postsApi'

function PostByIdPage() {
  const [id, setId] = useState('1')
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    const postId = Number(id)

    if (!Number.isInteger(postId) || postId < 1) {
      setError('Enter a positive integer post ID.')
      setPost(null)
      return
    }

    setLoading(true)
    setError('')
    setPost(null)

    try {
      setPost(await getPostById(postId))
    } catch (requestError) {
      setError(getErrorMessage(requestError, 'Failed to load post.'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="page-card">
      <p className="eyebrow">13_1_02 · GET by ID</p>
      <h2>Load one post</h2>
      <p>
        Request one resource at <code>/posts/:id</code>.
      </p>

      <form className="form-fields client-controls" onSubmit={handleSubmit}>
        <label htmlFor="post-id">Post ID</label>
        <input
          id="post-id"
          min="1"
          name="id"
          onChange={(event) => setId(event.currentTarget.value)}
          required
          step="1"
          type="number"
          value={id}
        />
        <button disabled={loading} type="submit">
          Load post
        </button>
      </form>

      {error && <p role="alert">{error}</p>}
      {loading && <p role="status">Loading post…</p>}
      {post && (
        <article className="client-post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      )}
    </section>
  )
}

export default PostByIdPage
