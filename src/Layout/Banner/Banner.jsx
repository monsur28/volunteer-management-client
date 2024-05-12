import { Carousel } from "flowbite-react";

const Banner = () => {
  return (
    <div className="h-56 z-1 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img
          className="object-cover"
          src="https://students.1fbusa.com/hubfs/25%20Ways%20to%20Volunteer%20in%20Your%20Community.jpg#keepProtocol"
          alt="..."
        />
        <img
          src="https://mealsonwheelsplus.org/wp-content/uploads/2021/01/VolunteerBannerFull-Slide.jpg"
          alt="..."
        />
        <img
          src="https://volunteeringqld.org.au/wp-content/uploads/2021/11/img-banner1-1.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default Banner;
