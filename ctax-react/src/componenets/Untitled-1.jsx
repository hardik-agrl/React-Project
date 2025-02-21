 
        <ul className="list-unstyled topnav-menu float-right mb-0">
          <li className="d-none d-lg-block">
            <form className="app-search">
              <div className="app-search-box dropdown">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search..."
                    id="top-search"
                  />
                  <div className="input-group-append">
                    <button className="btn" type="submit">
                      <i className="fe-search"></i>
                    </button>
                  </div>
                </div>
                <div className="dropdown-menu dropdown-lg" id="search-dropdown">
                  {/* // <!-- item--> */}
                  <div className="dropdown-header noti-title">
                    <h5 className="text-overflow mb-2">Found 22 results</h5>
                  </div>

                  {/* // <!-- item--> */}
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item"
                  >
                    <i className="fe-home mr-1"></i>
                    <span>Analytics Report</span>
                  </a>

                  {/* // <!-- item--> */}
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item"
                  >
                    <i className="fe-aperture mr-1"></i>
                    <span>How can I help you?</span>
                  </a>

                  {/* // <!-- item--> */}
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notify-item"
                  >
                    <i className="fe-settings mr-1"></i>
                    <span>User profile settings</span>
                  </a>

                  {/* // <!-- item--> */}
                  <div className="dropdown-header noti-title">
                    <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                  </div>

                  <div className="notification-list">
                    {/* // <!-- item--> */}
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item notify-item"
                    >
                      <div className="media">
                        <img
                          className="d-flex mr-2 rounded-circle"
                          src="../assets/images/users/user-2.jpg"
                          alt="Generic placeholder image"
                          height="32"
                        />
                        <div className="media-body">
                          <h5 className="m-0 font-14">Erwin E. Brown</h5>
                          <span className="font-12 mb-0">UI Designer</span>
                        </div>
                      </div>
                    </a>

                    {/* // <!-- item--> */}
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item notify-item"
                    >
                      <div className="media">
                        <img
                          className="d-flex mr-2 rounded-circle"
                          src="../assets/images/users/user-5.jpg"
                          alt="Generic placeholder image"
                          height="32"
                        />
                        <div className="media-body">
                          <h5 className="m-0 font-14">Jacob Deo</h5>
                          <span className="font-12 mb-0">Developer</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </li>

          <li className="dropdown d-inline-block d-lg-none">
            <a
              className="nav-link dropdown-toggle arrow-none waves-effect waves-light"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="fe-search noti-icon"></i>
            </a>
            <div className="dropdown-menu dropdown-lg dropdown-menu-right p-0">
              <form className="p-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search ..."
                  aria-label="Recipient's username"
                />
              </form>
            </div>
          </li>

          <li className="dropdown d-none d-lg-inline-block">
            <a
              className="nav-link dropdown-toggle arrow-none waves-effect waves-light"
              data-toggle="fullscreen"
              href="#"
            >
              <i className="fe-maximize noti-icon"></i>
            </a>
          </li>

          <li className="dropdown notification-list topbar-dropdown">
            <a
              className="nav-link dropdown-toggle waves-effect waves-light"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="fe-bell noti-icon"></i>
              <span className="badge badge-danger rounded-circle noti-icon-badge">
                9
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-lg">
              {/* // <!-- item--> */}
              <div className="dropdown-item noti-title">
                <h5 className="m-0">
                  <span className="float-right">
                    <a href="" className="text-dark">
                      <small>Clear All</small>
                    </a>
                  </span>
                  Notification
                </h5>
              </div>

              <div className="noti-scroll" data-simplebar="init">
                <div className="simplebar-wrapper" style="margin: 0px;">
                  <div className="simplebar-height-auto-observer-wrapper">
                    <div className="simplebar-height-auto-observer"></div>
                  </div>
                  <div className="simplebar-mask">
                    <div
                      className="simplebar-offset"
                      style="right: 0px; bottom: 0px;"
                    >
                      <div
                        className="simplebar-content-wrapper"
                        style="height: auto; overflow: hidden;"
                      >
                        <div
                          className="simplebar-content"
                          style="padding: 0px;"
                        >
                          {/* // <!-- item--> */}
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item notify-item active"
                          >
                            <div className="notify-icon">
                              <img
                                src="../assets/images/users/user-1.jpg"
                                className="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <p className="notify-details">Cristina Pride</p>
                            <p className="text-muted mb-0 user-msg">
                              <small>
                                Hi, How are you? What about our next meeting
                              </small>
                            </p>
                          </a>

                          {/* // <!-- item--> */}
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item notify-item"
                          >
                            <div className="notify-icon bg-primary">
                              <i className="mdi mdi-comment-account-outline"></i>
                            </div>
                            <p className="notify-details">
                              Caleb Flakelar commented on Admin
                              <small className="text-muted">1 min ago</small>
                            </p>
                          </a>

                          {/* // <!-- item--> */}
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item notify-item"
                          >
                            <div className="notify-icon">
                              <img
                                src="../assets/images/users/user-4.jpg"
                                className="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <p className="notify-details">Karen Robinson</p>
                            <p className="text-muted mb-0 user-msg">
                              <small>
                                Wow ! this admin looks good and awesome design
                              </small>
                            </p>
                          </a>

                          {/* // <!-- item--> */}
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item notify-item"
                          >
                            <div className="notify-icon bg-warning">
                              <i className="mdi mdi-account-plus"></i>
                            </div>
                            <p className="notify-details">
                              New user registered.
                              <small className="text-muted">5 hours ago</small>
                            </p>
                          </a>

                          {/* // <!-- item-->  */}
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item notify-item"
                          >
                            <div className="notify-icon bg-info">
                              <i className="mdi mdi-comment-account-outline"></i>
                            </div>
                            <p className="notify-details">
                              Caleb Flakelar commented on Admin
                              <small className="text-muted">4 days ago</small>
                            </p>
                          </a>

                          {/* // <!-- item--> */}
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item notify-item"
                          >
                            <div className="notify-icon bg-secondary">
                              <i className="mdi mdi-heart"></i>
                            </div>
                            <p className="notify-details">
                              Carlos Crouch liked
                              <b>Admin</b>
                              <small className="text-muted">13 days ago</small>
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="simplebar-placeholder"
                    style="width: 0px; height: 0px;"
                  ></div>
                </div>
                <div
                  className="simplebar-track simplebar-horizontal"
                  style="visibility: hidden;"
                >
                  <div
                    className="simplebar-scrollbar"
                    style="width: 0px; display: none;"
                  ></div>
                </div>
                <div
                  className="simplebar-track simplebar-vertical"
                  style="visibility: hidden;"
                >
                  <div
                    className="simplebar-scrollbar"
                    style="height: 0px; display: none;"
                  ></div>
                </div>
              </div>

              {/* // <!-- All--> */}
              <a
                href="javascript:void(0);"
                className="dropdown-item text-center text-primary notify-item notify-all"
              >
                View all
                <i className="fe-arrow-right"></i>
              </a>
            </div>
          </li>

          <li className="dropdown notification-list topbar-dropdown">
            <a
              className="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img src="#" alt="user-image" className="rounded-circle" />
              <span className="pro-user-name ml-1">
                <span>Demo</span> <i className="mdi mdi-chevron-down"></i>
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
              {/* // <!-- item--> */}
              <div className="dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome !</h6>
              </div>

              {/* // <!-- item--> */}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <i className="fe-user"></i>
                <span>My Account</span>
              </a>

              <div className="dropdown-divider"></div>

              {/* // <!-- item--> */}
              <a href="/Home/Logout" className="dropdown-item notify-item">
                <i className="fe-log-out"></i>
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>