import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";

const NeedVolunteer = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch("https://b9a11-volunteer-management-server.vercel.app/volunteerPost")
      .then((res) => res.json())
      .then((data) => {
        setVolunteers(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-center mt-12 text-4xl">Need A Volunteer?</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
        {volunteers.map((volunteer) => (
          <>
            <Card
              className="min-h-min"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={volunteer.thumbnail}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {volunteer.postTitle}
              </h5>
              <h2>Category : {volunteer.category}</h2>
              <h2>
                Deadline :{" "}
                <span className="text-green-400">{volunteer.date}</span>
              </h2>
              <h2>Volunteer Need : {volunteer.volunteerNeed}</h2>
              <button className="btn btn-block bg-teal-500 font-semibold">
                View Details
              </button>
            </Card>
          </>
        ))}
      </div>
      <Link to="/needVolunteer">
        <button className="btn mt-3 btn-block bg-amber-400">See All</button>
      </Link>
    </div>
  );
};

export default NeedVolunteer;
