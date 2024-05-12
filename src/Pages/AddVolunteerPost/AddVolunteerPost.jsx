import { useContext, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Providers/AuthProvider";

const AddVolunteerPost = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const handleAddPost = (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const posttitle = form.posttitle.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const date = form.date.value;
    const name = user?.email;
    const email = user?.email;
    const newVoluteerPost = {
      thumbnail,
      posttitle,
      description,
      category,
      location,
      date,
      name,
      email,
    };
    console.log(newVoluteerPost);
  };
  return (
    <div>
      <h2 className="text-center text-5xl font-bold underline">
        Add a Volunteer Post
      </h2>
      <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
        <form
          onClick={handleAddPost}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium text-xl">Voluteer Inormation</p>
              <p className="text-base">
                At our organization, we deeply value the contribution of
                volunteers in our mission to create positive change in our
                community. Volunteers play a crucial role in supporting our
                various programs and initiatives, helping us to reach our goals
                and make a meaningful impact.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Thumbnail
                </label>
                <input
                  id="thumbnail"
                  type="text"
                  name="thumbnail"
                  placeholder="Thumbnail"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Post Title
                </label>
                <input
                  id="posttitle"
                  type="text"
                  name="posttitle"
                  placeholder="Post Title"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
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
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium text-xl">Organizer Information</p>
              <p className="text-base">
                Welcome to the Organizer Profile section! This is your space to
                showcase your involvement, contributions, and passion for
                organizing volunteer opportunities and making a difference in
                your community.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-sm">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  name="name"
                  defaultValue={user.displayName}
                  readOnly
                  placeholder="Username"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="website" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  defaultValue={user.email}
                  readOnly
                  placeholder="Email"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="btn btn-block bg-green-400 text-black text-wpx-4 py-2 border rounded-md dark:border-gray-800"
                  >
                    Add Post
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddVolunteerPost;
