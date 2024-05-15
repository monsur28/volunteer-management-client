import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const NeedVolunteer = () => {
  const { user } = useContext(AuthContext) || {};
  const [myPosts, setMyPost] = useState([]);

  useEffect(() => {
    fetch(
      `https://b9a11-volunteer-management-server.vercel.app/volunteerPost?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyPost(data);
        console.log(data);
      });
  }, [user]);
  return (
    <div>
      <h2 className="text-center text-5xl">Need Volunteer</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
        {myPosts.map((myPost) => (
          <>
            <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 h-full">
              <img
                src={myPost.thumbnail}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracking-wide">
                    {myPost.postTitle}
                  </h2>
                  <div className="flex justify-between">
                    <h2>
                      Date :{" "}
                      <span className="text-green-500">{myPost.date}</span>
                    </h2>
                    <h2>Location : {myPost.location}</h2>
                  </div>
                </div>
                <Link to={`/needVolunteer/${myPost._id}`}>
                  <button className="btn btn-block bg-orange-400 flex items-center justify-center p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">
                    Be a Volunteer
                  </button>
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default NeedVolunteer;
