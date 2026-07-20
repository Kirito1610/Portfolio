"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-100 to-transparent rounded-full h-80 w-80 z-0 blur-2xl absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-slate-900 my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-slate-600 mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-3">
          <Link
            href="https://github.com/Kirito1610"
            className="p-2 rounded-full bg-slate-800 shadow-sm hover:bg-primary-600 hover:shadow-md transition-all"
          >
            <Image src={GithubIcon} alt="Github Icon" width={28} height={28} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vishal-kundu-a974112ba/"
            className="p-2 rounded-full bg-slate-800 shadow-sm hover:bg-primary-600 hover:shadow-md transition-all"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={28} height={28} />
          </Link>
        </div>
      </div>
      <div className="z-10">
        {emailSubmitted ? (
          <p className="text-green-600 text-sm mt-2 bg-green-50 ring-1 ring-green-200 rounded-lg p-4">
            Email sent successfully!
          </p>
        ) : (
          <form
            className="flex flex-col bg-white rounded-xl ring-1 ring-slate-200 shadow-sm p-6"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-slate-700 block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-slate-50 border border-slate-200 placeholder-slate-400 text-slate-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-slate-700 block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-slate-50 border border-slate-200 placeholder-slate-400 text-slate-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-slate-700 block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-slate-50 border border-slate-200 placeholder-slate-400 text-slate-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-br from-primary-500 to-secondary-500 hover:shadow-lg hover:shadow-primary-200 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-shadow"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
