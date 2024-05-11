import React from 'react'
import Sidebar from './Sidebar.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Nav from './Nav.js';
import { position } from '@chakra-ui/react';

function companyDashboard() {
	const company = JSON.parse(localStorage.getItem("company"));
  return (
    // <!-- SIDEBAR -->
    <>
	<section id="sidebar">
		<a href="/company-dashboard" class="brand">
			<i class='bx bxs-smile'></i>
			<span class="text"></span>
		</a>
		<ul class="side-menu top">
			<li class="active">	
				<a href="/company-dashboard">
					<i class='bx bxs-dashboard' ></i>
					<span class="text">Company Dashboard </span>
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
					<h1>Company Dashboard</h1>
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
					<img src="https://img.freepik.com/premium-vector/industry-logo-template_609906-4.jpg" style={{ height: "100px", width: "100px"}}/>
          			</i>
					<span class="text">
						<h3>{company.name || "Advantage Electric"}</h3>
						<p>{company.owner || "Harshita Saxena"}</p>
					</span>
				</li>
			</ul>


			<div class="table-data">
				<div class="order">
					<div class="head">
						<h3>Our Team</h3>
						<i class='bx bx-search' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<table>
						<thead>
							<tr>
								<th>Occupation</th>
								<th>Requirement</th>
								<th>Duration</th>
								<th>Charge</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Plumber</td>
								<td>Single</td>
								<td>2 weeks</td>
								<td>4000</td>
							</tr>
							<tr>
								<td>Maintainence</td>
								<td>Team</td>
								<td>36 weeks</td>
								<td>1.5 Lakh</td>
							</tr>
							<tr>
								<td>Operational</td>
								<td>Team</td>
								<td>24 weeks</td>
								<td>1 Lakh</td>
							</tr>
							<tr>
								<td>Painter</td>
								<td>Single</td>
								<td>2 weeks</td>
								<td>600</td>
							</tr>
							<tr>
								<td>Instrument management</td>
								<td>Team</td>
								<td>30 weeks</td>
								<td>1.2 Lakhs</td>
							</tr>
							<tr>
								<td>Fitter</td>
								<td>Single</td>
								<td>1 weeks</td>
								<td>200</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="todo">
					<div class="head">
						<h3>Details</h3>
						<i class='bx bx-plus' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<ul class="todo-list">
						<li class="completed">
							<p>Company Name</p>
              <p>{company.name || "Advantage Electric"}</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="completed">
							<p>Owner</p>
              <p>{company.owner || "Harshita Saxena"}</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="not-completed">
							<p>Trade</p>
              <p>{company.trade || "Plumber"}</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="completed">
							<p>Location</p>
              <p>{company.location || "Roorkee"}</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="not-completed">
							<p>Time Period</p>
              <p>04-12-2001</p>
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

export default companyDashboard;
