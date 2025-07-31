import Profile from "../assets/ProfilePic.png";

const About = () => {
  return (
    <div className="bg-coastalTeal dark:bg-leafGreen text-offWhite p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="flex justify-center">
          <img src={Profile} alt="Profile" className="h-48 md:h-96 w-auto" />
        </div>
        <div className="text-justify">
          <h1 class="text-2xl md:text-3xl font-extrabold mb-4 relative inline-block">
            <span class="relative z-10">Hello, I&rsquo;m Derek</span>
          </h1>
          <p>
            I&rsquo;m a front-end developer who&rsquo;s passionate about
            building clean, responsive websites that feel as good to use as they
            look.
          </p>
          <p className="mt-4">
            After completing SAIT&rsquo;s Web Development Certificate, I dove
            into modern tools like React, Vue.js, and Nuxt.js to bring engaging,
            user-focused interfaces to life. My background in sales leadership
            and customer experience shaped how I think — from communication and
            adaptability to always designing with the end user in mind.
          </p>
          <p className="mt-4">
            Before tech, I worked in hospitality and interior design consulting
            — where I picked up an eye for layout, flow, and visual balance.
            Now, I use those same instincts in my code and interface design.
          </p>
          <p className="mt-4">
            This portfolio brings all of that together: thoughtful design, clear
            problem-solving, and modern development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
