import { useLoaderData } from "react-router-dom";

const VolunteerDetails = () => {
  const data = useLoaderData();
  return (
    <div>
      <h2>data: {data.postTitle}</h2>
    </div>
  );
};

export default VolunteerDetails;
