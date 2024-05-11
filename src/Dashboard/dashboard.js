import React from 'react'
import Sidebar from './Sidebar.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Nav from './Nav.js';
import { position } from '@chakra-ui/react';

function dashboard() {
	const user = JSON.parse(localStorage.getItem("user"));
  return (
    // <!-- SIDEBAR -->
    <>
	<section id="sidebar">
		<a href="/Dashboard" class="brand">
			<i class='bx bxs-smile'></i>
			<span class="text"></span>
		</a>
		<ul class="side-menu top">
			<li class="active">
				<a href="/Dashboard">
					<i class='bx bxs-dashboard' ></i>
					<span class="text"> Dashboard </span>
				</a>
			</li>
			<li>
				<a href="/About">
					<i class='bx bxs-doughnut-chart' ></i>
					<span class="text"> About</span>
				</a>
			</li>
			<li>
				<a href="/contact">
					<i class='bx bxs-message-dots' ></i>
					<span class="text">Message</span>
				</a>
			</li>
			<li>
				<a href="/Team">
					<i class='bx bxs-group' ></i>
					<span class="text"> Team</span>
				</a>
			</li>
		</ul>
		<ul class="side-menu">			
			<li>
				<a href="/" onClick={() => localStorage.clear()} class="logout">
					<i class='bx bxs-log-out-circle' ></i>
					<span class="text">Logout</span>
				</a>
			</li>
		</ul>
	</section>
	{/* <!-- SIDEBAR --> */}



	{/* <!-- CONTENT --> */}
	<section id="content">
		{/* <!-- NAVBAR --> */}
		
		{/* <!-- NAVBAR --> */}

		{/* <!-- MAIN --> */}
		<main>
			<div class="head-title">
				<div class="left">
					<h1>Dashboard</h1>
					<ul class="breadcrumb">
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="/">Home</a>
						</li>
					</ul>
				</div>
			</div>

			<ul class="box-info">
				<li>
					<i class='bx bxs-dollar-circle' >
            <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC" style={{width : "100px" , height: "100px"}} alt = "photo"/>
          </i>
					<span class="text">
						<h3>{user.name || "Ramesh Kumar"}</h3>
						<p>{user.trade || "Plumber"}</p>
            <p>Rating : {user.rating || "4.7"}/5</p>
					</span>
				</li>
			</ul>


			<div class="table-data">
				<div class="order">
					<div class="head">
						<h3>Work experience</h3>
						<i class='bx bx-search' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<table>
						<thead>
							<tr>
								<th>Place</th>
								{/* <th>Date Order</th> */}
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<img src="https://png.pngtree.com/element_our/sm/20180413/sm_5ad0d09670e51.jpg" alt='logo'/>
									<p>Falcon Electric</p>
								</td>
								{/* <td>01-10-2021</td> */}
								<td><span class="status completed">Completed</span></td>
							</tr>
							<tr>
								<td>
									<img src="https://img.freepik.com/premium-vector/industry-logo-template_609906-4.jpg"/>
									<p>Advantage Electric</p>
								</td>
								{/* <td>01-10-2021</td> */}
								<td><span class="status completed">Completed</span></td>
							</tr>
							<tr>
								<td>
									<img src="https://img.freepik.com/free-vector/industry-logo_23-2147512323.jpg"/>
									<p>ARC electricians</p>
								</td>
								{/* <td>01-10-2021</td> */}
								<td><span class="status completed">Completed</span></td>
							</tr>
							<tr>
								<td>
									<img src="https://c8.alamy.com/comp/2C89TW4/eco-factory-industrial-logo-concept-design-green-industry-logo-vector-illustration-2C89TW4.jpg"/>
									<p>Maharaja marketing</p>
								</td>
								{/* <td>01-10-2021</td> */}
								<td><span class="status completed">Completed</span></td>
							</tr>
							<tr>
								<td>
									<img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/industry-logo-icon-design-template-5feb95a8a8ece3983361fd8d6ad3111f_screen.jpg?ts=1586698576' alt ="nothing" />
									<p>Aarti Chemicals</p>
								</td>
								{/* <td>01-10-2021</td> */}
								<td><span class="status process">Process</span></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="todo">
					<div class="head">
						<h3>Information</h3>
						<i class='bx bx-plus' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<ul class="todo-list">
						<li class="completed">
							<p>Name</p>
              <p>{user.name || "Ramesh Kumar"}</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="completed">
							<p>Profession</p>
              <p>{user.trade || "Plumber"}</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="not-completed">
							<p>Age</p>
              <p>{user.age || 32}</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="completed">
							<p>Location</p>
              <p>{user.location || "Roorkee"}</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="not-completed">
							<p>Industry</p>
              <p>Aarti chemicals</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
					</ul>
				</div>
			</div>
		</main>
		{/* <!-- MAIN --> */}
	</section>
	{/* <!-- CONTENT --> */}
  </>
  )
}

export default dashboard
