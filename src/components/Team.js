import React from "react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jane Doe",
      position: "CTO",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Jack Smith",
      position: "CFO",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Jill Smith",
      position: "COO",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Mark Johnson",
      position: "Lead Developer",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Emily Davis",
      position: "UI/UX Designer",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Sam Brown",
      position: "Backend Developer",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Alex Green",
      position: "Frontend Developer",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {teamMembers.map((member) => (
          <div key={member.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
              <img src={member.image} className="card-img-top" alt={member.name} />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
