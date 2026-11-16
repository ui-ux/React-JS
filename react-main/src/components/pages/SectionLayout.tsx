import { NavLink, Outlet } from 'react-router-dom'

function SectionLayout() {
  return (
    <section>
      <h2>Розділ з підменю</h2>
      <nav aria-label="Підменю розділу" className="section-menu">
        <NavLink to="/section" end>
          Огляд
        </NavLink>
        <NavLink to="/section/child">
          Дочірня сторінка
        </NavLink>
      </nav>
      <div className="nested-content">
        <Outlet />
      </div>
    </section>
  )
}

export default SectionLayout
