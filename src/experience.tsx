import React, { useState, useEffect } from "react";
import "./component/experience.scss";

type JobList = {
  list_job: string;
};

type JobDesc = {
  company_name: string;
  data: JobData;
};

type JobData = {
  job_title: string;
  job_desc: string;
  date_start: string;
  date_end: string;
  detail: JobDetail;
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

      const responseFinpoint = await fetch("/data/detail-finexus.json");
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
                  <p className="list-text" onClick={() => handleClick(index)}>
                    {job.list_job}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-8">
            <div className="list-description">
              <div
                className="block"
                style={{ marginRight: "190px", width: "auto" }}
              >
                <p className="title-job">Laboratory Assistance</p>
              </div>

              <div className="block" style={{ background: "white" }}>
                <p className="exp-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam ut porta quam. Aliquam mauris nibh, euismod eget ante
                  porta, iaculis scelerisque quam. Cras lacinia bibendum
                  tristique. Aliquam erat volutpat. Aenean ac ultricies quam, in
                  lacinia libero. Mauris sollicitudin aliquet magna in
                  vulputate. Vivamus a enim vitae tortor lacinia consequat. Cras
                  condimentum diam sit amet tempus lacinia. Vestibulum laoreet
                  fringilla mauris vel tincidunt. Sed venenatis, sem in
                  venenatis egestas, lacus justo luctus ipsum, a fringilla ex
                  sem ac neque. Morbi efficitur diam sit amet pretium semper.
                  Cras vel tellus nec nisi lacinia placerat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
