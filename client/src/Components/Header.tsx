import { Link, Outlet } from 'react-router-dom';

export function Header() {
  return (
    <>
      <div className="d-flex header">
        <Link to="/" className="link">
          <div className="entries-link">
            <h2>Code Journal</h2>
          </div>
        </Link>
        <Link to="/" className="link">
          <div>
            <h2 className="entries-link">Entries</h2>
          </div>
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
