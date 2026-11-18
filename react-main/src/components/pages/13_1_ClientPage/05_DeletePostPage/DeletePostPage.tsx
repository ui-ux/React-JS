import { useState, type SubmitEvent } from 'react'
import { getErrorMessage } from '../services/requestUtils'
import { deletePost } from './postsApi'

function DeletePostPage() {
  const [id, setId] = useState('1')
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState('')
  const [statusMessage, setStatusMessage] = useState('')

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    const postId = Number(id)

    if (!Number.isInteger(postId) || postId < 1) {
      setError('Enter a positive integer post ID.')
      setStatusMessage('')
      return
    }

    setError('')
    setStatusMessage('')
    setDeleting(true)

    try {
      await deletePost(postId)
      setStatusMessage(`DELETE request for post ${postId} succeeded.`)
    } catch (requestError) {
      setError(getErrorMessage(requestError, 'Failed to delete the post.'))
    } finally {
      setDeleting(false)
    }
  }

  return (
    <section className="page-card">
      <p className="eyebrow">13_1_05 · DELETE</p>
      <h2>Delete one post</h2>
      <p>
        Send a DELETE request to <code>/posts/:id</code>.
      </p>

      <form className="form-fields client-controls" onSubmit={handleSubmit}>
        <label htmlFor="delete-post-id">Post ID</label>
        <input
          id="delete-post-id"
          min="1"
          name="id"
          onChange={(event) => setId(event.currentTarget.value)}
          required
          step="1"
          type="number"
          value={id}
        />
        <button disabled={deleting} type="submit">
          Delete post
        </button>
      </form>

      {error && <p role="alert">{error}</p>}
      {statusMessage && <p role="status">{statusMessage}</p>}
    </section>
  )
}

export default DeletePostPage
