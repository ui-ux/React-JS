import { useEffect, useState, type SubmitEvent } from 'react'
import type { Post } from '../models/Post'
import { getErrorMessage, isAbortError } from '../services/requestUtils'
import { getPagedPosts } from './postsApi'

function isPositiveInteger(value: number): boolean {
  return Number.isInteger(value) && value > 0
}

function PagedPostsPage() {
  const [page, setPage] = useState('1')
  const [pageSize, setPageSize] = useState('10')
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadInitialPosts() {
      try {
        setPosts(await getPagedPosts(1, 10, controller.signal))
      } catch (requestError: unknown) {
        if (!isAbortError(requestError)) {
          setError(getErrorMessage(requestError, 'Failed to load posts.'))
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadInitialPosts()

    return () => controller.abort()
  }, [])

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    const requestedPage = Number(page)
    const requestedPageSize = Number(pageSize)

    if (
      !isPositiveInteger(requestedPage) ||
      !isPositiveInteger(requestedPageSize)
    ) {
      setError('Page and page size must be positive integers.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const result = await getPagedPosts(requestedPage, requestedPageSize)
      setPosts(result)
    } catch (requestError: unknown) {
      setError(getErrorMessage(requestError, 'Failed to load posts.'))
      setPosts([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="page-card">
      <p className="eyebrow">GET + query parameters</p>
      <h2>Load a page of posts</h2>
      <p>
        The request adds the selected page and page size as query parameters.
      </p>

      <form className="form-fields client-controls" onSubmit={handleSubmit}>
        <label htmlFor="client-page">Page</label>
        <input
          id="client-page"
          name="page"
          type="number"
          min="1"
          step="1"
          required
          value={page}
          onChange={(event) => setPage(event.currentTarget.value)}
        />

        <label htmlFor="client-page-size">Page size</label>
        <input
          id="client-page-size"
          name="pageSize"
          type="number"
          min="1"
          step="1"
          required
          value={pageSize}
          onChange={(event) => setPageSize(event.currentTarget.value)}
        />

        <button disabled={loading} type="submit">
          Load page
        </button>
      </form>

      {loading && <p role="status">Loading posts…</p>}
      {error && <p role="alert">{error}</p>}

      {!loading && !error && posts.length === 0 && (
        <p>No posts on this page.</p>
      )}

      {posts.length > 0 && (
        <ul className="client-list">
          {posts.map((post) => (
            <li key={post.id}>
              {post.id} — {post.title}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default PagedPostsPage
