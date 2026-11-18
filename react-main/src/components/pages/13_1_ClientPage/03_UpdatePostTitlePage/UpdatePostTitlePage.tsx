import { useState, type SubmitEvent } from 'react'
import type { PostTitleUpdate } from '../models/Post'
import { getErrorMessage } from '../services/requestUtils'
import { updatePostTitle } from './postsApi'

function UpdatePostTitlePage() {
  const [id, setId] = useState('1')
  const [title, setTitle] = useState('')
  const [updatedPost, setUpdatedPost] = useState<PostTitleUpdate | null>(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    const postId = Number(id)

    if (!Number.isInteger(postId) || postId < 1 || !title.trim()) {
      setError('Enter a positive post ID and a non-empty title.')
      setUpdatedPost(null)
      return
    }

    setError('')
    setUpdatedPost(null)
    setSaving(true)

    try {
      setUpdatedPost(await updatePostTitle(postId, title.trim()))
    } catch (requestError) {
      setError(
        getErrorMessage(requestError, 'Failed to update the post title.'),
      )
    } finally {
      setSaving(false)
    }
  }

  return (
    <section className="page-card">
      <p className="eyebrow">13_1_03 · PUT</p>
      <h2>Update one post title</h2>
      <p>
        Send a title object to <code>/posts/:id</code> with a PUT request.
      </p>

      <form className="form-fields client-controls" onSubmit={handleSubmit}>
        <label htmlFor="update-post-id">Post ID</label>
        <input
          id="update-post-id"
          min="1"
          name="id"
          onChange={(event) => setId(event.currentTarget.value)}
          required
          step="1"
          type="number"
          value={id}
        />
        <label htmlFor="update-post-title">New title</label>
        <input
          id="update-post-title"
          name="title"
          onChange={(event) => setTitle(event.currentTarget.value)}
          required
          type="text"
          value={title}
        />
        <button disabled={saving} type="submit">
          Update title
        </button>
      </form>

      {error && <p role="alert">{error}</p>}
      {updatedPost && (
        <p role="status">
          Updated post {updatedPost.id}: {updatedPost.title}
        </p>
      )}
    </section>
  )
}

export default UpdatePostTitlePage
