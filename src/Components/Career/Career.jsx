import React, { useEffect, useState } from 'react';
import './Career.css'; // Assuming the CSS file is in the same folder as this component
import cardImg from '../../Assests/job.png'
import { Services } from '../../Services/Service';

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    // Fetch all careers (replace with actual API call)
    const fetchCareer = async () => {
      try {
        const response = await Services.getAllCareer()
        console.log(response);
        
        if(response){
          setJobs(response.data)
        }
      } catch (error) {
        alert("Jobs not found")
      }
    }
    fetchCareer()

  }, []);

  const handleJobDetails = (id) => {
    // Fetch job details by ID (replace with actual API call)
    fetch(`https://www.directadmissionguideline.com/api/getCarrerid/${id}`)
      .then(response => response.json())
      .then(data => setSelectedJob(data));
  };

  return (
    <>
      <div className="body1">
        <div className="card">
          <img src={cardImg} alt="Job" className="card-img" />
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">Latest Job Openings</h2>
        <div className="row">
          {jobs.map(job => (
            <div className="col-md-12 mb-3" key={job.id}>
              <div className="card p-3 shadow-sm">
                <div className="d-flex justify-content-between align-items-center">
                  <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <h5 className="mb-0">{job.job_name}</h5>
                  </a>
                  <h1 className="text-primary">DAG</h1>
                </div>
                <div className="mt-2">
                  <a href={job.companyLink} target="_blank" rel="noopener noreferrer" className="text-muted text-decoration-none">
                    <strong>Direct Admission Guideline</strong>
                  </a>
                  <a href={job.reviewsLink} target="_blank" rel="noopener noreferrer" className="ms-3 text-muted">
                    <span><i className="bi bi-star-fill text-warning"></i> 4.0</span> (208 Reviews)
                  </a>
                </div>
                <div className="mt-3">
                  <span className="badge bg-primary me-2">Experience: {job.job_experience}</span>
                  <span className="badge bg-secondary me-2">Salary: Depend on interview</span>
                  <span className="badge bg-info">Job Type: {job.job_type}</span>
                </div>
                <div className="mt-3 text-muted">
                  <p>{job.disc1}...</p>
                </div>
                <div className="mt-3">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <span className="badge bg-light text-dark border">Skills: {job.skills}</span>
                    </li>
                  </ul>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#jobModal"
                    onClick={() => handleJobDetails(job.id)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="jobModal" tabIndex="-1" aria-labelledby="jobModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="jobModalLabel">Details</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {selectedJob && (
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="card p-3 shadow-sm">
                      <div className="d-flex justify-content-between align-items-center">
                        <a href={selectedJob.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                          <h5 className="mb-0">{selectedJob.job_name}</h5>
                        </a>
                        <h1 className="text-primary">DAG</h1>
                      </div>
                      <div className="mt-2">
                        <a href={selectedJob.companyLink} target="_blank" rel="noopener noreferrer" className="text-muted text-decoration-none">
                          <strong>Direct Admission Guideline</strong>
                        </a>
                        <a href={selectedJob.reviewsLink} target="_blank" rel="noopener noreferrer" className="ms-3 text-muted">
                          <span><i className="bi bi-star-fill text-warning"></i> 4.0</span> (208 Reviews)
                        </a>
                      </div>
                      <div className="mt-3">
                        <span className="badge bg-primary me-2">Experience: {selectedJob.job_experience}</span>
                        <span className="badge bg-secondary me-2">Salary: Depend on interview</span>
                        <span className="badge bg-info">Job Type: {selectedJob.job_type}</span>
                      </div>
                      <div className="mt-3">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="badge bg-light text-dark border">Skills: {selectedJob.skills}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-3 text-muted">
                        <p>{selectedJob.disc1}</p>
                        {[...Array(10).keys()].map(i => selectedJob[`disc${i + 1}`] && (
                          <div key={i}>
                            <span>• {selectedJob[`disc${i + 1}`]}</span>
                            <br /><br />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career
