import React, { useState, useEffect } from "react";
import "./component/experience.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


type JobList = {
  list_job: string;
};

type JobDesc = {
  company_name: string;
  data: JobData[];
};

type JobData = {
  job_title: string;
  job_desc: string;
  date_start: string;
  date_end: string;
  detail: JobDetail[];
};

type JobDetail = {
  id: string;
  desc: string;
};

function Experience() {
  const [job, setJob] = useState<JobList[]>([]);
  const [umn, setUmn] = useState<JobDesc[]>([]);
  const [Finpoint, setFinpoint] = useState<JobDesc[]>([]);
  const [Finexus, setFinexus] = useState<JobDesc[]>([]);
  const [selected, setSelected] = useState<number>(0);
  const [selectedData, setSelectedData] = useState<JobData[]>([]);

  useEffect(() => {
    const fetchJobList = async () => {
      const response = await fetch("/data/list-job.json");
      const data = await response.json();
      console.log("cool file", data);

      setJob(data);
    };

    const fetchJobDetail = async () => {
      const responseUmn = await fetch("/data/detail-umn.json");
      const dataUmn = await responseUmn.json();
      console.log("data UMN", dataUmn);

      setUmn(dataUmn);
      setSelectedData(dataUmn[0].data);

      const responseFinpoint = await fetch("/data/detail-finpoint.json");
      const dataFinpoint = await responseFinpoint.json();
      console.log("data Finpoint", dataFinpoint);

      setFinpoint(dataFinpoint);

      const responseFinexus = await fetch("/data/detail-finexus.json");
      const dataFinexus = await responseFinexus.json();
      console.log("data Finexus", dataFinexus);

      setFinexus(dataFinexus);
    };

    fetchJobList();
    fetchJobDetail();
  }, []);

  const handleClick = (index: number) => {
    setSelected(index);

    switch (index) {
      case 0:
        setSelectedData(umn[0].data);
        break;
      case 1:
        setSelectedData(Finpoint[0].data);
        break;
      case 2:
        setSelectedData(Finexus[0].data);
        break;
      default:
        setSelectedData([]);
    }
  };

  return (
    <div id="experience" className="experience">
      <div className="block">
        <p className="title">Experience</p>
      </div>

      <div
        className="container mx-0"
        style={{ paddingLeft: "100px", paddingRight: "100px" }}
      >
        <div className="row">
          <div className="col">
            <div className="list">
              {job.map((job, index) => (
                <div
                  className="square"
                  key={index}
                  onClick={() => handleClick(index)}
                  style={
                    index === selected
                      ? {}
                      : {
                          backgroundColor: "rgba(156, 158, 254, 0.2)",
                          borderLeft: "4px solid #D1D2FF",
                        }
                  }
                >
                  <p className="list-text">{job.list_job}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            id="myCarousel"
            className="col-9 carousel slide"
            data-ride="carousel"
          >
            <div className="container">
              <div className="row">
                <div
                  className="carousel-inner col-10"
                  style={{ padding: "15px" }}
                >
                  {/* loop */}
                  {selectedData.map((data, indexDet) => (
                    <div
                      className={`carousel-item ${
                        indexDet === 0 ? "active" : ""
                      }`}
                      key={indexDet}
                    >
                      <div className="row">
                        <div className="block col-md">
                          <p className="title-job">{data.job_title}</p>
                        </div>
                        <div className="col-sm d-flex">
                          <p className="date-job">
                            {data.date_start} - {data.date_end}
                          </p>
                        </div>
                      </div>
                      <div className="block" style={{ background: "white" }}>
                        <p className="exp-desc">{data.job_desc}</p>
                        <ul>
                          {data.detail.map((dataDetail, indexDetail) => (
                            <li
                              className="exp-desc"
                              style={{ marginTop: "0%" }}
                              key={indexDetail}
                            >
                              {dataDetail.desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="Container">
              <div className="row">
                <button
                  className="carousel-control-prev block"
                  style={{ borderRadius: "5px", marginRight: "10px" }}
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next block"
                  style={{ borderRadius: "5px" }}
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
