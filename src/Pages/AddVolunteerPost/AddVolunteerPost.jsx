import { useContext, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const AddVolunteerPost = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const handleAddPost = (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const postTitle = form.postTitle.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteerNeed = form.volunteerNeed.value;
    const date = form.date.value;
    const name = user?.displayName;
    const email = user?.email;
    console.log(thumbnail);
    const newVoluteerPost = {
      thumbnail,
      postTitle,
      description,
      category,
      location,
      volunteerNeed,
      date,
      name,
      email,
    };
    fetch(
      "https://b9a11-volunteer-management-server.vercel.app/volunteerPost",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newVoluteerPost),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          MySwal.fire({
            title: "Good job!",
            text: "Volunteer Post Added Succesfully",
            icon: "success",
          });
        }
      });
  };
  return (
    <div>
      <h2 className="text-center text-5xl font-bold underline">
        Add a Volunteer Post
      </h2>
      <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
        <form
          onSubmit={handleAddPost}
          className="container flex flex-col space-y-12 dark:bg-gray-200"
        >
          <fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm ">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 items-center">
              <div className="col-span-full sm:col-span-3 ">
                <label className="text-sm">Thumbnail</label>
                <input
                  id="thumbnail"
                  name="thumbnail"
                  type="text"
                  required
                  placeholder="Thumbnail"
                  className="w-full mt-2 rounded-md dark:text-gray-400 focus:ring p-4 focus:ring-opacity-75  focus:dark:ring-violet-600 border border-black dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Post Title
                </label>
                <input
                  id="postTitle"
                  name="postTitle"
                  type="text"
                  required
                  placeholder="Post Title"
                  className="w-full mt-2  rounded-md p-4 focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 border border-black dark:border-gray-300"
                />
              </div>
              <div className="col-span-full ">
                <label className="text-sm">Description</label>
                <textarea
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Description"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Category</label>
                <select
                  required
                  name="category"
                  className="w-full p-4 mt-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 border border-black dark:border-gray-300"
                >
                  <option>Select One</option>
                  <option>Environmental Conservation</option>
                  <option>Healthcare</option>
                  <option>Education</option>
                  <option>Social Service</option>
                  <option>Animal Welfare</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="city" className="text-sm">
                  Location
                </label>
                <input
                  id="city"
                  type="text"
                  name="location"
                  placeholder="Your location"
                  className="w-full p-4 mt-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 border border-black dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="date" className="text-sm">
                  Date
                </label>
                <br />
                <ReactDatePicker
                  showIcon
                  name="date"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-full p-4 mt-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 border border-black dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="volunteerNeed" className="text-sm">
                  Volunteer Need
                </label>
                <input
                  id="volunteerNeed"
                  type="number"
                  name="volunteerNeed"
                  required
                  placeholder="Volunteer Need"
                  className="w-full p-4 mt-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 border border-black dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3 ">
                <label className="text-slate-900 dark:text-slate-500">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  defaultValue={user.email}
                  type="email"
                  disabled
                  placeholder="email"
                  className="w-full border border-black mt-2 rounded-md focus:ring p-4 focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  UserName
                </label>
                <input
                  id="username"
                  defaultValue={user.displayName}
                  name="username"
                  type="text"
                  disabled
                  placeholder="username"
                  className="w-full mt-2 rounded-md p-4 focus:ring focus:ring-opacity-75 dark:text-gray-500 border border-black focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <button className="btn btn-block col-span-6 bg-teal-500">
                Add Volunteer
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddVolunteerPost;
