import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar';
import './History.css';

const ProctorHistory = () => {
  const [sampleApplications, setSampleApplications] = useState([
    {
      name: 'Pranav I',
      leaveType: 'Parent Leave',
      startDate: new Date('2022-03-01'),
      endDate: new Date('2022-03-05'),
      reason: "Grandma's death",
      startTime: '1:00PM',
      endTime: '2:00PM',
      approvalStatus: 'Not Approved',
      disapprovalReason: ''
    },
    {
      name: 'Vansh V',  
      leaveType: 'Official Leave',
      startDate: new Date('2022-04-10'),
      endDate: new Date('2022-04-15'),
      reason: 'Project work',
      startTime: '1:00PM',
      endTime: '2:00PM',
      approvalStatus: 'Approved',
      disapprovalReason: ''
    },
    {
      name: 'Charutha',  
      leaveType: 'Official Leave',
      startDate: new Date('2022-04-10'),
      endDate: new Date('2022-04-15'),
      reason: 'IEEE Demo',
      startTime: '1:00PM',
      endTime: '2:00PM',
      approvalStatus: 'Waiting For Approval',
      disapprovalReason: ''
    },
    {
      name: 'Srinidhi',  
      leaveType: 'Official Leave',
      startDate: new Date('2022-04-10'),
      endDate: new Date('2022-04-15'),
      reason: 'Academic Conference',
      startTime: '1:00PM',
      endTime: '2:00PM',
      approvalStatus: 'Waiting For Approval',
      disapprovalReason: ''
    },
    {
      name: 'Anubroto Ghose',  
      leaveType: 'Official Leave',
      startDate: new Date('2022-04-10'),
      endDate: new Date('2022-04-15'),
      reason: 'Sightseeing',
      startTime: '1:00PM',
      endTime: '2:00PM',
      approvalStatus: 'Waiting For Approval',
      disapprovalReason: ''
    }
  ]);
  

  const handleApproval = (index, status, reason = '') => {
    const newApplications = [...sampleApplications];
    newApplications[index].approvalStatus = status;
    if (status === 'Disapproved') {
      newApplications[index].disapprovalReason = reason;
    }
    setSampleApplications(newApplications);
  };

  return (
    <div className="container mt-5">
      <h2 className="title is-2">Proctor Approval History</h2>
      
      {sampleApplications.length > 0 ? (
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Leave Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Reason</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Proctor Approval</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sampleApplications.map((application, index) => (
              <tr key={index}>
                <td>{application.name}</td>
                <td>{application.leaveType}</td>
                <td>{application.startDate.toLocaleDateString()}</td>
                <td>{application.endDate.toLocaleDateString()}</td>
                <td>{application.reason}</td>
                <td>{application.startTime}</td>
                <td>{application.endTime}</td>
                <td>{application.approvalStatus}</td>
                <td>
                  {application.approvalStatus === 'Waiting For Approval' && (
                    <>
                      <button 
                        onClick={() => handleApproval(index, 'Approved')}
                        className="approve-btn"
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => {
                          const reason = document.getElementById(`disapproval-reason-${index}`).value;
                          handleApproval(index, 'Disapproved', reason);
                        }}
                        className="disapprove-btn"
                      >
                        Disapprove
                      </button>
                      <input 
                        id={`disapproval-reason-${index}`}
                        type="text" 
                        placeholder="Reason for Disapproval" 
                        className="reason-input"
                      />
                    </>
                  )}
                  {application.disapprovalReason && (
                    <p>Reason for Disapproval: {application.disapprovalReason}</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No applications submitted yet.</p>
      )}
    </div>
  );
}

  

export default ProctorHistory;
