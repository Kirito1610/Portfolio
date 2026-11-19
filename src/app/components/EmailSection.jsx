"use client";
import { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import {
  EnvelopeIcon,
  CheckCircleIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      if (response.status === 200) {
        setEmailSubmitted(true);
      }
    } catch (err) {
      console.error("Failed to send email:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="section-divider my-4" />

      <div className="py-12 sm:py-16">
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-xs font-semibold text-primary-500 mb-2">
            Get in touch
          </p>
          <h2 className="text-4xl font-bold text-slate-900">Contact Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 relative">
          {/* Background glow */}
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 blur-3xl opacity-50 pointer-events-none" />

          {/* Left — info */}
          <div className="relative z-10 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Let&apos;s build something together
            </h3>
            <p className="text-slate-500 leading-relaxed mb-8 text-[15px]">
              I&apos;m currently open to new opportunities — full-time, freelance, or consulting.
              Whether you have a project in mind, a question, or just want to say hello,
              I&apos;ll get back to you as quickly as I can.
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <div className="h-9 w-9 rounded-lg bg-primary-50 ring-1 ring-primary-100 flex items-center justify-center flex-shrink-0">
                  <EnvelopeIcon className="h-5 w-5 text-primary-500" />
                </div>
                <a
                  href="mailto:vishalkundu1610@gmail.com"
                  className="hover:text-primary-600 hover:underline underline-offset-2 transition-colors"
                >
                  vishalkundu1610@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <div className="h-9 w-9 rounded-lg bg-primary-50 ring-1 ring-primary-100 flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="h-5 w-5 text-primary-500" />
                </div>
                <span>Gurugram, Haryana, India</span>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Find me on
              </p>
              <div className="flex gap-3">
                <Link
                  href="https://github.com/Kirito1610"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-700 transition-colors"
                >
                  <Image src={GithubIcon} alt="GitHub" width={16} height={16} />
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/vishal-kundu-a974112ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 text-white text-xs font-semibold hover:bg-sky-700 transition-colors"
                >
                  <Image src={LinkedinIcon} alt="LinkedIn" width={16} height={16} />
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="relative z-10">
            {emailSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center bg-white ring-1 ring-slate-200 rounded-2xl shadow-sm p-10 gap-4">
                <CheckCircleIcon className="h-14 w-14 text-green-500" />
                <h4 className="text-xl font-bold text-slate-900">Message sent!</h4>
                <p className="text-slate-500 text-sm max-w-xs">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                className="flex flex-col bg-white rounded-2xl ring-1 ring-slate-200 shadow-sm p-7 gap-5"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide"
                  >
                    Your email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="bg-slate-50 border border-slate-200 placeholder-slate-400 text-slate-900 text-sm rounded-xl block w-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-shadow"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide"
                  >
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className="bg-slate-50 border border-slate-200 placeholder-slate-400 text-slate-900 text-sm rounded-xl block w-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-shadow"
                    placeholder="Project opportunity / Hello / ..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    className="bg-slate-50 border border-slate-200 placeholder-slate-400 text-slate-900 text-sm rounded-xl block w-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-shadow resize-none"
                    placeholder="Tell me about your project or just say hi..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-xl w-full transition-all shadow-sm hover:shadow-md hover:shadow-primary-200 hover:-translate-y-0.5"
                >
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
