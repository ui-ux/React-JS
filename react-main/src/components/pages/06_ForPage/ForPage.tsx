import { useState } from 'react'

interface ListItem {
  id: number
  name: string
}

function ForPage() {
  const [items, setItems] = useState<ListItem[]>([
    { id: 1, name: 'First item' },
    { id: 2, name: 'Second item' },
    { id: 3, name: 'Third item' },
  ])

  const emptyItems: ListItem[] = []

  function addItem() {
    setItems((currentItems) => [
      ...currentItems,
      {
        id: Math.max(0, ...currentItems.map((item) => item.id)) + 1,
        name: `Item ${currentItems.length + 1}`,
      },
    ])
  }

  return (
    <section className="page-card">
      <h2>For loop (Angular @for / React map)</h2>

      <p>
        React uses JavaScript <code>map()</code> to render lists. The{' '}
        <code>key</code> prop helps React identify each item when the list
        changes.
      </p>

      <button type="button" onClick={addItem}>
        Add item
      </button>

      <h3>List items</h3>

      <ol>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} (id: {item.id})
          </li>
        ))}
      </ol>

      <h3>Empty list (Angular @empty equivalent)</h3>

      {emptyItems.length === 0 ? (
        <p>No items to display.</p>
      ) : (
        <ul>
          {emptyItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ForPage
