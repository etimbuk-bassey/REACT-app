function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="pagelinks">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Contents</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
