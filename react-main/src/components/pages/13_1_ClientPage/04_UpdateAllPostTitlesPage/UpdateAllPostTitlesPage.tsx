import { useEffect, useState, type SubmitEvent } from 'react'
import type { Post } from '../models/Post'
import { getErrorMessage, isAbortError } from '../services/requestUtils'
import { getPosts, updateAllPostTitles } from './postsApi'

function UpdateAllPostTitlesPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [statusMessage, setStatusMessage] = useState('')

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

  function updateTitle(id: number, title: string) {
    setPosts((currentPosts) =>
      currentPosts.map((post) => (post.id === id ? { ...post, title } : post)),
    )
    setStatusMessage('')
  }

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    if (posts.length === 0 || posts.some((post) => !post.title.trim())) {
      setError('Every post must have a non-empty title.')
      setStatusMessage('')
      return
    }

    setError('')
    setStatusMessage('')
    setSaving(true)

    try {
      await updateAllPostTitles(posts)
      setStatusMessage(`${posts.length} posts updated.`)
    } catch (requestError) {
      setError(
        `${getErrorMessage(requestError, 'Failed to update post titles.')} Some posts may already have been updated.`,
      )
    } finally {
      setSaving(false)
    }
  }

  return (
    <section className="page-card">
      <p className="eyebrow">13_1_04 · PUT + Promise.all</p>
      <h2>Update several post titles</h2>
      <p>
        Edit titles, then send a PUT request for each post.{' '}
        <code>Promise.all</code> waits until all requests succeed, similar to
        Angular&apos;s <code>forkJoin</code>.
      </p>

      {loading && <p role="status">Loading posts…</p>}
      {error && <p role="alert">{error}</p>}

      {posts.length > 0 && (
        <form className="client-bulk-form" onSubmit={handleSubmit}>
          {posts.map((post) => (
            <div className="client-title-field" key={post.id}>
              <label htmlFor={`bulk-title-${post.id}`}>Post {post.id}</label>
              <input
                id={`bulk-title-${post.id}`}
                name={`title-${post.id}`}
                onChange={(event) =>
                  updateTitle(post.id, event.currentTarget.value)
                }
                required
                type="text"
                value={post.title}
              />
            </div>
          ))}
          <button disabled={saving || loading} type="submit">
            Update all titles
          </button>
        </form>
      )}

      {statusMessage && <p role="status">{statusMessage}</p>}
    </section>
  )
}

export default UpdateAllPostTitlesPage
