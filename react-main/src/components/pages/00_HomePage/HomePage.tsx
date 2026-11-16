import { Outlet } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <h2>Home Page</h2>
      <Outlet />
    </>
  )
}

export default HomePage
