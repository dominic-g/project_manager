
import React from 'react';

const Left = ()  => {
	return (	
      <div id="mainSideMenu" className="sidebar px-4 py-4 py-md-5 me-0 ">
        <div className="d-flex flex-column h-100">
          <a href="hr-dashboard" className="mb-0 brand-icon">
            <span className="logo-icon">
              <svg
                width={35}
                height={35}
                fill="currentColor"
                className="bi bi-clipboard-check"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
              </svg>
            </span>
            <span className="logo-text">My-Task</span>
          </a>
          <ul className="menu-list flex-grow-1 mt-3">
            <li className=" collapsed">
              <a className="m-link active" href="#!" aria-expanded="false">
                <i className="icofont-home fs-5" />
                <span>Dashboard</span>
                <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
              </a>
              <ul className="sub-menu collapse has-children" id="menu-Pages0">
                <li>
                  <a
                    className="ms-link"
                    href="/template/my-task/react/hr-dashboard"
                  >
                    {" "}
                    <span>Hr Dashboard</span>
                  </a>
                </li>
                <li>
                  <a
                    className="ms-link active"
                    href="/template/my-task/react/project-dashboard"
                  >
                    {" "}
                    <span>Project Dashboard</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className=" collapsed">
              <a className="m-link " href="#!" aria-expanded="true">
                <i className="icofont-briefcase" />
                <span>Projects</span>
                <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
              </a>
              <ul className="sub-menu collapse has-children show" id="menu-Pages1">
                <li>
                  <a className="ms-link" href="/template/my-task/react/projects">
                    {" "}
                    <span>Projects</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="/template/my-task/react/tasks">
                    {" "}
                    <span>Tasks</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="/template/my-task/react/timesheet">
                    {" "}
                    <span>Timesheet</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="/template/my-task/react/leaders">
                    {" "}
                    <span>Leaders</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className=" collapsed">
              <a className="m-link " href="#!" aria-expanded="false">
                <i className="icofont-ticket" />
                <span>Tickets</span>
                <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
              </a>
              <ul className="sub-menu collapse has-children" id="menu-Pages2">
                <li>
                  <a
                    className="ms-link"
                    href="/template/my-task/react/tickets-view"
                  >
                    {" "}
                    <span>Tickets View</span>
                  </a>
                </li>
                <li>
                  <a
                    className="ms-link"
                    href="/template/my-task/react/tickets-detail"
                  >
                    {" "}
                    <span>Tickets Detail</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className=" collapsed">
              <a className="m-link " href="#!" aria-expanded="false">
                <i className="icofont-user-male" />
                <span>Our Clients</span>
                <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
              </a>
              <ul className="sub-menu collapse has-children" id="menu-Pages3">
                <li>
                  <a className="ms-link" href="/template/my-task/react/clients">
                    {" "}
                    <span>Clients</span>
                  </a>
                </li>
                <li>
                  <a
                    className="ms-link"
                    href="/template/my-task/react/client-profile"
                  >
                    {" "}
                    <span>Client Profile</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className=" collapsed">
              <a className="m-link " href="#!" aria-expanded="false">
                <i className="icofont-users-alt-5" />
                <span>Employees</span>
                <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
              </a>
              <ul className="sub-menu collapse has-children" id="menu-Pages4">
                <li>
                  <a className="ms-link" href="/template/my-task/react/members">
                    {" "}
                    <span>Members</span>
                  </a>
                </li>
                <li>
                  <a
                    className="ms-link"
                    href="/template/my-task/react/members-profile"
                  >
                    {" "}
                    <span>Members Profile</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="/template/my-task/react/holidays">
                    {" "}
                    <span>Holidays</span>
                  </a>
                </li>
                <li>
                  <a
                    className="ms-link"
                    href="/template/my-task/react/attendance-employees"
                  >
                    {" "}
                    <span>Attendance Employees</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="/template/my-task/react/attendance">
                    {" "}
                    <span>Attendance</span>
                  </a>
                </li>
                <li>
                  <a
                    className="ms-link"
                    href="/template/my-task/react/leave-request"
                  >
                    {" "}
                    <span>Leave Request</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="/template/my-task/react/department">
                    {" "}
                    <span>Department</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className=" collapsed">
              <a className="m-link " href="#!" aria-expanded="false">
                <i className="icofont-ui-calculator" />
                <span>Accounts</span>
                <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
              </a>
              <ul className="sub-menu collapse has-children" id="menu-Pages5">
                <li>
                  <a className="ms-link" href="/template/my-task/react/invoices">
                    {" "}
                    <span>Invoices</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="/template/my-task/react/payments">
                    {" "}
                    <span>Payments</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="/template/my-task/react/expenses">
                    {" "}
                    <span>Expenses</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className=" collapsed">
              <a className="m-link " href="#!" aria-expanded="false">
                <i className="icofont-users-alt-5" />
                <span>Payroll</span>
                <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
              </a>
              <ul className="sub-menu collapse has-children" id="menu-Pages6">
                <li>
                  <a
                    className="ms-link"
                    href="/template/my-task/react/employee-salary"
                  >
                    {" "}
                    <span>Employee Salary</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className=" collapsed">
              <a className="m-link " href="#!" aria-expanded="false">
                <i className="icofont-contrast" />
                <span>App</span>
                <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
              </a>
              <ul className="sub-menu collapse has-children" id="menu-Pages7">
                <li>
                  <a className="ms-link" href="/template/my-task/react/calander">
                    {" "}
                    <span>Calander</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="/template/my-task/react/chat-app">
                    {" "}
                    <span>Chat App</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className=" collapsed">
              <a className="m-link " href="#!" aria-expanded="false">
                <i className="icofont-code-alt" />
                <span>Other Pages</span>
                <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
              </a>
              <ul className="sub-menu collapse has-children" id="menu-Pages8">
                <li>
                  <a className="ms-link" href="/template/my-task/react/apex-charts">
                    {" "}
                    <span>Apex Charts</span>
                  </a>
                </li>
                <li>
                  <a
                    className="ms-link"
                    href="/template/my-task/react/forms-example"
                  >
                    {" "}
                    <span>Forms Example</span>
                  </a>
                </li>
                <li>
                  <a
                    className="ms-link"
                    href="/template/my-task/react/table-example"
                  >
                    {" "}
                    <span>Table Example</span>
                  </a>
                </li>
                <li>
                  <a
                    className="ms-link"
                    href="/template/my-task/react/reviews-page"
                  >
                    {" "}
                    <span>Reviews Page</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="/template/my-task/react/icons">
                    {" "}
                    <span>Icons</span>
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="/template/my-task/react/widgets">
                    {" "}
                    <span>Widgets</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="m-link " href="#!">
                <i className="icofont-paint" />
                <span>UI Components</span>
              </a>
            </li>
          </ul>
          <ul className="list-unstyled mb-0">
            <li className="d-flex align-items-center justify-content-center">
              <div className="form-check form-switch theme-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="theme-switch"
                />
                <label className="form-check-label" htmlFor="theme-switch">
                  Enable Dark Mode!
                </label>
              </div>
            </li>
            <li className="d-flex align-items-center justify-content-center">
              <div className="form-check form-switch theme-rtl">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="theme-rtl"
                />
                <label className="form-check-label" htmlFor="theme-rtl">
                  Enable RTL Mode!
                </label>
              </div>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-link sidebar-mini-btn text-light"
          >
            <span className="ms-2">
              <i className="icofont-bubble-right" />
            </span>
          </button>
        </div>
      </div>
	);
}

export default Left;