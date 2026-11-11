import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <h2>NETFLIX</h2>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/popular">Popular</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar