import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">Students Form</h1>
      <ul className="nav-menu">
        <li>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/students">
            Student Directory
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
