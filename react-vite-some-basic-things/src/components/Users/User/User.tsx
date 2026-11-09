import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import type { User as UserModel } from '../models/UserModel'

interface UserProps {
  user: UserModel
  onEditUser: (id: number) => void
  onDeleteUser: (id: number) => void
}

function User({ user, onEditUser, onDeleteUser }: UserProps) {
  return (
    <li className="user-card">
      <div className="user-card-heading">
        <h2>{user.name}</h2>
        <div className="user-actions">
          <button
            aria-label={`Edit ${user.name}`}
            className="user-action user-action-edit"
            onClick={() => onEditUser(user.id)}
            title="Edit user"
            type="button"
          >
            <FiEdit2 aria-hidden="true" />
          </button>
          <button
            aria-label={`Delete ${user.name}`}
            className="user-action user-action-delete"
            onClick={() => onDeleteUser(user.id)}
            title="Delete user"
            type="button"
          >
            <FiTrash2 aria-hidden="true" />
          </button>
        </div>
      </div>
      <dl className="user-details">
        <div>
          <dt>ID</dt>
          <dd>{user.id}</dd>
        </div>
        <div>
          <dt>Username</dt>
          <dd>{user.username}</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd><a href={`mailto:${user.email}`}>{user.email}</a></dd>
        </div>
        <div>
          <dt>Phone</dt>
          <dd>{user.phone}</dd>
        </div>
        <div>
          <dt>Website</dt>
          <dd>
            <a href={`https://${user.website}`} rel="noreferrer" target="_blank">
              {user.website}
            </a>
          </dd>
        </div>
      </dl>
      <section className="user-section">
        <h3>Address</h3>
        <p>{user.address.street}, {user.address.suite}</p>
        <p>{user.address.city}, {user.address.zipcode}</p>
        <p>Coordinates: {user.address.geo.lat}, {user.address.geo.lng}</p>
      </section>
      <section className="user-section">
        <h3>Company</h3>
        <p>{user.company.name}</p>
        <p>{user.company.catchPhrase}</p>
        <p>{user.company.bs}</p>
      </section>
    </li>
  )
}

export default User
