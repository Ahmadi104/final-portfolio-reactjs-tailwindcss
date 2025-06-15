import {
  BsLinkedin,
  BsGithub,
  BsTelegram,
  BsInstagram,
  BsEnvelope,
  BsTelephone,
  BsGeoAlt,
} from "react-icons/bs";
function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen w-full mt-12 text-white px-4 py-16 flex flex-col items-center"
    >
      <div className="text-center mb-10">
        <h1 className="text-2xl font-light text-white md:text-5xl">
          Let&apos;s work together
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl shadow-md rounded-md overflow-hidden">
        {/* Contact Form */}
        <div className="flex-1 p-8">
          <p>
            Feel free to reach out via email or the form below. I’m always open
            to discussing new projects or collaboration opportunities.
          </p>
          <form className="space-y-4 bg-gray-950 p-4 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter Name..."
                className="w-full rounded-md border border-indigo-600 s px-4 py-2"
              />
              <input
                type="email"
                placeholder="Enter Email..."
                className="w-full rounded-md border border-indigo-600 s px-4 py-2"
              />
            </div>
            <input
              type="text"
              placeholder="Enter Subject..."
              className="w-full rounded-md border border-indigo-600 px-4 py-2"
            />
            <textarea
              placeholder="Enter Message..."
              className="w-full rounded-md border border-indigo-600 px-4 py-2"
              rows={4}
            />
            <button
              type="submit"
              className="nowrap rounded-lg border border-indigo-600 px-4 py-2 text-white shadow-md shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-indigo-900 hover:shadow-indigo-600 w-full"
            >
              Send Me
            </button>
          </form>
        </div>

        {/* Contact Info Box */}
        <div className=" text-white p-8 flex-1 space-y-6 md:ml-32">
          <div>
            <h4 className="font-semibold flex items-center gap-4">
              <BsEnvelope className="text-xl text-indigo-400" />
              E-Mail:
            </h4>
            <p className="text-sm px-2 py-1 inline-block mt-1 rounded">
              ezatullahahmadi2023f@gmail.com
            </p>
          </div>

          <div>
            <h4 className="font-semibold flex items-center gap-4">
              <BsGeoAlt className="text-xl text-indigo-500" />
              Address:
            </h4>
            <p className="text-sm px-2 py-1 inline-block mt-1 rounded">
              Afghanistan,
              <br />
              Herat City
            </p>
          </div>

          <div>
            <h4 className="font-semibold flex items-center gap-4">
              <BsTelephone className="text-xl text-indigo-400" />
              Phone:
            </h4>
            <p className="text-sm px-2 py-1 inline-block mt-1 rounded">
              0787342079
            </p>
            <p className="text-sm px-2 py-1 inline-block mt-1 rounded">
              0772018162
            </p>
          </div>

          <div className="flex gap-4 mt-4 p-2">
            <span className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-red-400 hover:opacity-100">
              <BsInstagram />
            </span>
            <span className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
              <BsLinkedin />
            </span>
            <span className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-gray-100 hover:opacity-100">
              <BsGithub />
            </span>
            <span className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-blue-400 hover:opacity-100">
              <BsTelegram />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
