import Profile from "../assets/ProfilePic.png";

const About = () => {
  return (
    <div className="bg-coastalTeal dark:bg-leafGreen text-offWhite p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="flex justify-center">
          <img src={Profile} alt="Profile" className="h-48 md:h-96 w-auto" />
        </div>
        <div className="text-justify">
          <h2 className="text-2xl text-center my-4">About Me</h2>
          <p>
            Hey, I&rsquo;m Derek — a front-end developer who&rsquo;s all about
            building clean, responsive, and user-friendly websites that
            don&rsquo;t just look good, but feel good to use.
          </p>
          <p className="mt-4">
            I recently completed SAIT&rsquo;s Web Development Certificate
            program, where I sharpened my skills in HTML, CSS, JavaScript, and
            frameworks like React, Vue.js, and Nuxt.js. I love working with
            tools like Tailwind CSS, Supabase, and Figma to bring ideas to life
            and make sure everything is just as intuitive under the hood as it
            is on the screen.
          </p>
          <p className="mt-4">
            Before getting into web development, I spent years in sales
            leadership and customer experience. That background taught me how to
            think from the user&rsquo;s perspective, communicate clearly, and
            stay adaptable — skills that directly shape the way I approach
            building digital experiences today.
          </p>
          <p className="mt-4">
            I also have a creative streak from my earlier work in hospitality
            and interior design consulting, which gives me a solid sense for
            visual design, space, and flow — all things that come in handy when
            designing interfaces with strong UI/UX.
          </p>
          <p className="mt-4">
            This portfolio is a reflection of everything I love: thoughtful
            design, practical problem-solving, and clean, modern code. Thanks
            for checking it out!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
