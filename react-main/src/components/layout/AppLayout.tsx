import { Link, Outlet } from 'react-router-dom'
import '../../App.css'
import MainNavigation from './MainNavigation'

function AppLayout() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <Link to="/" className="app-title">
          React Main
        </Link>
      </header>
      <div className="app-body">
        <aside className="sidebar">
          <MainNavigation />
        </aside>
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
