import React from 'react';

function Header() {
  return ( 
	<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

	<ul className="navbar-nav ml-auto">

		<div className="topbar-divider d-none d-sm-block"></div>

		<li className="nav-item dropdown no-arrow">
			<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
				<span className="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
				<img className="img-profile rounded-circle" src="assets/images/dummy-avatar.jpg" width="60" alt="#"></img>
			</a>
		</li>

	</ul>

</nav>           
  );
}

export default Header;
