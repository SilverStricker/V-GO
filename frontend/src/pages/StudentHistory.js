import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar';
import './History.css';
const HistoryPage = () => {
  
  const sampleApplications = [
    {
      name: 'Anubroto Ghose',
      leaveType: 'Parent Leave',
      startDate: new Date('2022-03-01'),
      endDate: new Date('2022-03-05'),
      reason: 'Grandma\'s death',
      startTime: '1:00PM',
      endTime: '2:00PM',
      approvalStatus: 'Not Approved'

    },
    {
      name: 'Anubroto Ghose',  
      leaveType: 'Official Leave',
      startDate: new Date('2022-04-10'),
      endDate: new Date('2022-04-15'),
      reason: 'Welcome to the VGO-Outing-App GitHub repository! This application is designed to streamline the outing approval process for students of VIT Chennai, ensuring clear communication between students, proctors, and hostel authorities.',
      startTime: '1:00PM',
      endTime: '2:00PM',
      approvalStatus: 'Approved'
    },
    {
        name: 'Anubroto Ghose',  
        leaveType: 'Official Leave',
        startDate: new Date('2022-04-10'),
        endDate: new Date('2022-04-15'),
        reason: 'IEEE Demo',
        startTime: '1:00PM',
        endTime: '2:00PM',
        approvalStatus: 'Waiting For Approval'
      },
  ];

  return (
    <div className="container mt-5">
      <h2 className="title is-2">Leave Application History</h2>
      <div className="buttons">
        <Link to="/leaveapplication" className="apply-button">
          Apply for Leave
        </Link>
      </div>
      {sampleApplications.length > 0 ? (
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Leave Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Reason</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Proctor Approval</th>
            </tr>
          </thead>
          <tbody>
            {sampleApplications.map((application, index) => (
              <tr key={index}>
                <td>{application.leaveType}</td>
                <td>{application.startDate.toLocaleDateString()}</td>
                <td>{application.endDate.toLocaleDateString()}</td>
                <td>{application.reason}</td>
                <td>{application.startTime}</td>
                <td>{application.endTime}</td>
                <td>{application.approvalStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No applications submitted yet.</p>
      )}
    </div>
  );
};


function StudentHistory() {
    return (
      <div className="App">
        <HistoryPage />
      </div>
    );
  }

export default StudentHistory;
