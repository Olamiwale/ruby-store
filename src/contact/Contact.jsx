import React from "react";

import ContactM from "../assets/contactImg.png";
import { logo } from "../data";
import PageHeader from "../components/PageHeader";
import ContactBg from '../assets/contact.png'

export default function Contact({img, title}) {
  return (
    <div>
      <PageHeader img={ContactBg} title='Contact Us here' />

      <div className="flex justify-center max-w-[800px] m-auto items-center p-10 gap-3">
        <div className=" bg-slate-300 shadow-gray-600 shadow-lg h-[450px]  w-full">
          <div>
            <img
              src={ContactM}
              className="w-full h-[250px]"
              alt="contact-img"
            />
          </div>

          <div className="bg-gray-100 m-2 p-5 shadow-lg">
            <p className="pb-3 text-xl">
              <span className="font-bold"> Head Office: </span> No 43 Adesanya
              Street, Iperun Road Plot 4, Lagos, Nigeria
            </p>

            <div className="flex justify-between mt-5 p-5 ">
              {logo.map((logoItem, index) => (
                <div>
                  <img
                    src={logoItem.url}
                    className="w-[40px] shadow-lg shadow-black rounded-lg"
                    alt={logoItem.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-300 h-[450px] shadow-lg shadow-gray-600 p-4 w-full">
          <form className="space-y-4">
            <div className="flex justify-between gap-5">
              <div className="flex flex-col ">
                <label className="py-2">First name</label>
                <input type="text" className="p-3" />
              </div>
              <div className="flex flex-col">
                <label className="py-2">Last name</label>
                <input type="text" className="p-3" />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="py-2">Email</label>
              <input type="text" className="p-3" />
            </div>

            <div className="flex flex-col">
              <label className="py-2">Phone Number</label>
              <input type="text" className="p-3" />
            </div>
            <div className="flex flex-col">
              <label className="py-2">Message</label>
              <textarea rows={6} />
            </div>

            <div className="flex justify-center items-center">
              <button className="bg-blue-600 w-full p-3 rounded-lg text-white font-bold">
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
