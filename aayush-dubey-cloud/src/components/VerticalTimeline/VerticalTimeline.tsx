import "./VerticalTimeline.css";
// Taken from https://www.bootdey.com/snippets/view/timeline-events-area#html

function VerticalTimeline() {
  return (
    <section className="timeline_area section_padding_130">
      <div className="container">
        {/* <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-lg-6">
            <div className="section_heading text-center">
              <h6>Our History</h6>
              <h3>A brief stories of our 2 years company journey</h3>
              <div className="line"></div>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-12">
            <div className="apland-timeline-area">
              <div className="single-timeline-area">
                <div
                  className="timeline-date wow fadeInLeft"
                  data-wow-delay="0.1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.1s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <p>Near Future</p>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div
                      className="single-timeline-content d-flex wow fadeInLeft"
                      data-wow-delay="0.3s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <div className="timeline-icon">
                        <i
                          className="fa fa-address-card"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="timeline-text">
                        <h6>Updated 5.0</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div
                      className="single-timeline-content d-flex wow fadeInLeft"
                      data-wow-delay="0.5s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.5s",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <div className="timeline-icon">
                        <i className="fa fa-archive" aria-hidden="true"></i>
                      </div>
                      <div className="timeline-text">
                        <h6>Fixed bug</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div
                      className="single-timeline-content d-flex wow fadeInLeft"
                      data-wow-delay="0.7s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.7s",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <div className="timeline-icon">
                        <i
                          className="fa fa-address-book"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="timeline-text">
                        <h6>Reach 1k Users</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div
                      className="single-timeline-content d-flex wow fadeInLeft"
                      data-wow-delay="0.7s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.7s",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <div className="timeline-icon">
                        <i
                          className="fa fa-address-book"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="timeline-text">
                        <h6>Reach 1k Users</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Lorem ipsum dolor sit amet, consectetur
                          adipisicing elit. Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit. Lorem ipsum dolor sit
                          amet, consectetur adipisicing elit. Lorem ipsum dolor
                          sit amet, consectetur adipisicing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div
                      className="single-timeline-content d-flex wow fadeInLeft"
                      data-wow-delay="0.7s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.7s",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <div className="timeline-icon">
                        <i
                          className="fa fa-address-book"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="timeline-text">
                        <h6>Reach 1k Users</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div
                      className="single-timeline-content d-flex wow fadeInLeft"
                      data-wow-delay="0.7s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.7s",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <div className="timeline-icon">
                        <i
                          className="fa fa-address-book"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="timeline-text">
                        <h6>Reach 1k Users</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div
                      className="single-timeline-content d-flex wow fadeInLeft"
                      data-wow-delay="0.7s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.7s",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <div className="timeline-icon">
                        <i
                          className="fa fa-address-book"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="timeline-text">
                        <h6>Reach 1k Users</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-timeline-area">
                <div
                  className="timeline-date wow fadeInLeft"
                  data-wow-delay="0.1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.1s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <p>2020</p>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div
                      className="single-timeline-content d-flex wow fadeInLeft"
                      data-wow-delay="0.3s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <div className="timeline-icon">
                        <i className="fa fa-briefcase" aria-hidden="true"></i>
                      </div>
                      <div className="timeline-text">
                        <h6>Updated 4.4.0</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div
                      className="single-timeline-content d-flex wow fadeInLeft"
                      data-wow-delay="0.5s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.5s",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <div className="timeline-icon">
                        <i className="fa fa-desktop" aria-hidden="true"></i>
                      </div>
                      <div className="timeline-text">
                        <h6>Fixed bug</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-timeline-area">
                <div
                  className="timeline-date wow fadeInLeft"
                  data-wow-delay="0.1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.1s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <p>2019</p>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div
                      className="single-timeline-content d-flex wow fadeInLeft"
                      data-wow-delay="0.3s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <div className="timeline-icon">
                        <i className="fa fa-id-card" aria-hidden="true"></i>
                      </div>
                      <div className="timeline-text">
                        <h6>Updated 4.0</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div
                      className="single-timeline-content d-flex wow fadeInLeft"
                      data-wow-delay="0.5s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.5s",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <div className="timeline-icon">
                        <i className="fa fa-desktop" aria-hidden="true"></i>
                      </div>
                      <div className="timeline-text">
                        <h6>Fixed bug</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div
                      className="single-timeline-content d-flex wow fadeInLeft"
                      data-wow-delay="0.7s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.7s",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <div className="timeline-icon">
                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                      </div>
                      <div className="timeline-text">
                        <h6>Reach 500 Users</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerticalTimeline;
