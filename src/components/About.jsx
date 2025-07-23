import Profile from "../assets/ProfilePic.png";

const About = () => {
  return (
    <div className="bg-teal-200 dark:bg-leafGreen text-offWhite p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="flex justify-center">
          <img src={Profile} alt="Profile" className="h-60 w-auto rounded-lg" />
        </div>
        <div>
          <h2 className="text-2xl text-center my-4">About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
            lacus at sodales sodales. Quisque sagittis orci ut diam condimentum,
            vel euismod erat placerat. In iaculis arcu eros, eget tempus orci
            facilisis id.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
