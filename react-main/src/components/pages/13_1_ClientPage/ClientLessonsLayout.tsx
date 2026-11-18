import type { ReactNode } from 'react'

const httpConcepts = [
  {
    angular: 'HttpClient',
    react: 'fetch()',
    note: 'Angular service versus the browser Fetch API.',
  },
  {
    angular: 'Observable<Post[]>',
    react: 'fetch() + async/await',
    note: 'Fetch is handled as one response; no explicit Promise type is needed.',
  },
  {
    angular: 'subscribe()',
    react: '.then() / await',
    note: 'Both consume the result of an asynchronous request.',
  },
  {
    angular: 'catchError()',
    react: '.catch() / try...catch',
    note: 'Handle request errors in an RxJS chain or JavaScript async code.',
  },
  {
    angular: 'AsyncPipe',
    react: 'No direct equivalent',
    note: 'React pages store results in state and render them with JSX.',
  },
  {
    angular: 'ngOnInit()',
    react: 'useEffect()',
    note: 'useEffect runs a side effect after rendering and can return cleanup.',
  },
  {
    angular: '@for',
    react: '.map()',
    note: 'Both render a collection of items.',
  },
  {
    angular: 'track post.id',
    react: 'key={post.id}',
    note: 'A stable identifier helps the renderer match list items.',
  },
  {
    angular: 'takeUntilDestroyed()',
    react: 'AbortController',
    note: 'AbortController can cancel fetch when an effect is cleaned up.',
  },
]

function ClientLessonsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="client-lessons">
      <section className="page-card">
        <p className="eyebrow">Angular and React · HTTP comparison</p>
        <h2>HTTP concepts: Angular and React</h2>
        <p>
          These are conceptual counterparts, not one-to-one replacements.
          Angular uses RxJS Observables; these React examples use browser fetch
          with async/await and component state.
        </p>

        <div className="client-comparison">
          <table className="model-view-table">
            <thead>
              <tr>
                <th scope="col">Angular</th>
                <th scope="col">React / browser</th>
                <th scope="col">How they relate</th>
              </tr>
            </thead>
            <tbody>
              {httpConcepts.map((concept) => (
                <tr key={concept.angular}>
                  <td>
                    <code>{concept.angular}</code>
                  </td>
                  <td>
                    <code>{concept.react}</code>
                  </td>
                  <td>{concept.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {children}
    </div>
  )
}

export default ClientLessonsLayout
