import { Container, Col, Stack } from "react-bootstrap";

import "../components/VerticalTimeline/VerticalTimeline.css";

import experienceData from "../data/experience.json";

function getMonthName(month: number) {
  return [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "June",
    "July",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ][month - 1];
}

interface Date {
  isPresent: boolean;
  month: number;
  day?: number;
  year: number;
}

interface Experience {
  startDate: Date;
  endDate: Date;
  type: string;
  location: string;
  position: string;
  company: string;
  description: Array<string>;
}

function NewTimeline() {
  experienceData.experiences.sort((a, b) => {
    if (a.endDate.isPresent && !b.endDate.isPresent) return -1;
    if (!a.endDate.isPresent && b.endDate.isPresent) return 1;
    if (!a.endDate.isPresent && !b.endDate.isPresent) {
      if (a.endDate.year! > b.endDate.year!) return -1;
      if (a.endDate.year! < b.endDate.year!) return 1;
      if (a.endDate.month! > b.endDate.month!) return -1;
      if (a.endDate.month! < b.endDate.month!) return 1;
      return 0;
    }
    if (a.startDate.year > b.startDate.year) return -1;
    if (a.startDate.year < b.startDate.year) return 1;
    if (a.startDate.month > b.startDate.month) return -1;
    if (a.startDate.month < b.startDate.month) return 1;
    return 0;
  });
  // const timelineData = new Map<String, Array<Object>>();
  // for (let index = 0; index < experienceData.experiences.length; index++) {
  //   var isPresent = experienceData.experiences[index].endDate.isPresent;
  //   var searchKey = "Present";
  //   if (!isPresent) {
  //     searchKey = experienceData.experiences[index].endDate.year!.toString();
  //   }
  //   if (!(searchKey in timelineData)) {
  //     timelineData.set(searchKey, []);
  //   }
  //   timelineData.get(searchKey)!.push(experienceData.experiences[index]);
  // }

  let timelineArray: Array<Array<Experience>> = [];
  let i = 0;
  while (
    i < experienceData.experiences.length &&
    experienceData.experiences[i].endDate.isPresent
  ) {
    if (i == 0) timelineArray.push([]);
    timelineArray[0].push(experienceData.experiences[i]);
    i++;
  }
  var latestYear = null;
  for (let index = i; index < experienceData.experiences.length; index++) {
    const exp = experienceData.experiences[index];
    if (latestYear == null || exp.endDate.year! != latestYear) {
      timelineArray.push([exp]);
      latestYear = exp.endDate.year!;
    } else {
      timelineArray[timelineArray.length - 1].push(exp);
    }
  }

  return (
    <section className="timeline_area section_padding_130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-lg-6">
            <div className="section_heading text-center">
              <h1>{experienceData.name}</h1>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {timelineArray.map((expList) => (
              <div
                className="apland-timeline-area"
                key={
                  expList[0].endDate.isPresent
                    ? "Present"
                    : expList[0].endDate.year
                }
              >
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
                    <h3>
                      {expList[0].endDate.isPresent
                        ? "Present"
                        : expList[0].endDate.year}
                    </h3>
                  </div>
                  <div className="row">
                    {expList.map(
                      ({
                        startDate,
                        endDate,
                        // type,
                        location,
                        position,
                        company,
                        description,
                      }) => (
                        <div
                          key={position + " " + company}
                          className={
                            expList.length == 1
                              ? "col-12 col-md-12 col-lg-12"
                              : expList.length == 2
                                ? "col-12 col-md-12 col-lg-6"
                                : "col-12 col-md-12 col-lg-4"
                          }
                        >
                          <div
                            className="single-timeline-content d-flex wow fadeInLeft"
                            data-wow-delay="0.3s"
                            key={
                              expList[0].endDate.isPresent
                                ? "Present"
                                : expList[0].endDate.year
                            }
                            style={{
                              visibility: "visible",
                              animationDelay: "0.3s",
                              animationName: "fadeInLeft",
                            }}
                          >
                            <Col sm={12} style={{ textAlign: "left" }}>
                              <div className="timeline-text">
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "end",
                                  }}
                                >
                                  <h2>{company}</h2>
                                  <h5>
                                    {getMonthName(startDate.month)}{" "}
                                    {startDate.year} -{" "}
                                    {endDate.isPresent
                                      ? "Present"
                                      : getMonthName(endDate.month) +
                                        " " +
                                        endDate.year}
                                  </h5>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "end",
                                  }}
                                >
                                  <h4>{position}</h4>
                                  <h5>{location}</h5>
                                </div>
                                <ul style={{ textAlign: "left" }}>
                                  {description.map((descr) => (
                                    <div key={descr.substring(0, 30)}>
                                      <br />
                                      <li>{descr}</li>
                                    </div>
                                  ))}
                                </ul>
                              </div>
                            </Col>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperiencePage() {
  return (
    <Container>
      <Stack gap={3}>
        <NewTimeline />
      </Stack>
    </Container>
  );
}

export default ExperiencePage;
