import { useEffect, useState } from 'react'
import './Users.css'
import AddUser from './AddUser/AddUser'
import UserCard from './User/User'
import type { User, UserData } from './models/UserModel'

// Keep the local sample data in users.ts as a reference or offline fallback.
// import initialUsers from './users'

function Users() {
  const [users, setUsers] = useState<User[]>([])
  const [userToEdit, setUserToEdit] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    fetch('https://jsonplaceholder.typicode.com/users', {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`)
        }

        return response.json() as Promise<User[]>
      })
      .then((data) => {
        setUsers(data)
        setIsLoading(false)
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return
        }

        console.error('Failed to load users:', error)
        setLoadError('Could not load users. Please try again later.')
        setIsLoading(false)
      })

    return () => controller.abort()
  }, [])

  function handleAddUser(userData: UserData) {
    setUsers((currentUsers) => [
      ...currentUsers,
      {
        ...userData,
        id: Math.max(0, ...currentUsers.map((user) => user.id)) + 1,
      },
    ])
  }

  function handleUpdateUser(id: number, userData: UserData) {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === id ? { ...userData, id } : user,
      ),
    )
    setUserToEdit(null)
  }

  function handleEditUser(id: number) {
    const user = users.find((currentUser) => currentUser.id === id)
    if (user) {
      setUserToEdit(user)
    }
  }

  function handleDeleteUser(id: number) {
    setUsers((currentUsers) => currentUsers.filter((user) => user.id !== id))
    if (userToEdit?.id === id) {
      setUserToEdit(null)
    }
  }

  return (
    <section className="users">
      <h1>Users</h1>
      <div className="users-layout">
        {isLoading ? (
          <p role="status">Loading users...</p>
        ) : loadError ? (
          <p role="alert">{loadError}</p>
        ) : (
          <ul className="users-list">
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onEditUser={handleEditUser}
                onDeleteUser={handleDeleteUser}
              />
            ))}
          </ul>
        )}
        <AddUser
          key={userToEdit?.id ?? 'new-user'}
          userToEdit={userToEdit}
          onAddUser={handleAddUser}
          onUpdateUser={handleUpdateUser}
        />
      </div>
    </section>
  )
}

export default Users
