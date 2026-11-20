import { NavLink } from 'react-router-dom'

function MainNavigation() {
  return (
    <nav aria-label="Головне меню" className="main-menu">
      <NavLink to="/model-view">Model View</NavLink>
      <NavLink to="/event">Event</NavLink>
      <NavLink to="/input-decorator">Input Decorator</NavLink>
      <NavLink to="/output-parent">Output Parent</NavLink>
      <NavLink to="/for">For</NavLink>
      <NavLink to="/if">If</NavLink>
      <NavLink to="/class">Class</NavLink>
      <NavLink to="/style">Style</NavLink>
      <NavLink to="/switch">Switch</NavLink>
      <NavLink to="/datetime">DateTime</NavLink>
      <NavLink to="/number">Number</NavLink>
      <NavLink to="/string">String</NavLink>
      <NavLink to="/json">JSON</NavLink>
      <NavLink to="/math">Math</NavLink>
      <NavLink to="/forms"> Controlled Form</NavLink>
      <NavLink to="/uncontrolled-forms">Uncontrolled form</NavLink>
      <NavLink to="/form-validation">Form validation</NavLink>
      <NavLink to="/dynamic-forms">Dynamic forms</NavLink>
      <NavLink to="/client">Client __ Load posts</NavLink>
      <NavLink to="/client-paged">Client __ Paged posts</NavLink>
      <NavLink to="/client-post-by-id">Client __ Post by ID</NavLink>
      <NavLink to="/client-update-title">Client __ Update title</NavLink>
      <NavLink to="/client-update-all-titles">
        Client __ Update all titles
      </NavLink>
      <NavLink to="/client-delete-post">Client __ Delete post</NavLink>
      <NavLink to="/no-directive-highlight">No directive __ Highlight</NavLink>
      <NavLink to="/no-directive-use-highlight">
        No directive __ Highlight
      </NavLink>
      <NavLink to="/content-projection">Content projection</NavLink>

      {/* <NavLink to="/section">Sub menu</NavLink> */}
    </nav>
  )
}

export default MainNavigation
