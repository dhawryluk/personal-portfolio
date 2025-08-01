import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("personal_portfolio", "template_h0vq8ui", form.current, {
        publicKey: "VcIB62HdSA8oGv4IJ",
      })
      .then(
        () => {
          setShowModal(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 mt-12">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-full max-w-xl mx-auto py-12 px-6 my-6 bg-white dark:bg-offWhite rounded-lg shadow-md"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-coastalTeal dark:text-leafGreen">
          Get in Touch
        </h2>

        <label className="ml-2 dark:text-softFern text-coastalTeal font-semibold">
          Name
        </label>
        <input
          type="text"
          name="user_name"
          required
          className="bg-sunbleachedSand dark:bg-mistGrey border-2 border-driftwoodBeige dark:border-deepForestGreen rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-coastalTeal dark:focus:ring-softFern transition w-full"
        />

        <label className="ml-2 dark:text-softFern text-coastalTeal font-semibold">
          Email
        </label>
        <input
          type="email"
          name="user_email"
          required
          className="bg-sunbleachedSand dark:bg-mistGrey border-2 border-driftwoodBeige dark:border-deepForestGreen rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-coastalTeal dark:focus:ring-softFern transition w-full"
        />

        <label className="ml-2 dark:text-softFern text-coastalTeal font-semibold">
          Message
        </label>
        <textarea
          name="message"
          required
          rows="5"
          className="bg-sunbleachedSand dark:bg-mistGrey border-2 border-driftwoodBeige dark:border-deepForestGreen rounded-md p-2 mb-6 focus:outline-none focus:ring-2 focus:ring-coastalTeal dark:focus:ring-softFern transition w-full"
        />

        <input
          type="submit"
          value="Send"
          className="
            bg-coastalTeal dark:bg-leafGreen 
            text-white 
            border-2 border-driftwoodBeige dark:border-deepForestGreen 
            p-2 rounded-md 
            transition-colors duration-200 
            cursor-pointer 
            hover:bg-coastalTeal/80 dark:hover:bg-softFern 
            hover:text-sunbleachedSand 
            focus:outline-none focus:ring-2 focus:ring-coastalTeal 
            active:bg-coastalTeal active:text-white
            w-full
          "
        />
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-deepForestGreen text-center p-8 rounded-lg shadow-xl transition duration-300 w-11/12 sm:w-96">
            <p className="text-lg font-semibold dark:text-offWhite text-softFern">
              Your message has been sent!
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-6 py-2 rounded-md bg-coastalTeal dark:bg-leafGreen text-white hover:bg-coastalTeal/80 dark:hover:bg-softFern transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
