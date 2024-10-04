import React from "react";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r bg-black text-white">
      <div className="w-[90%] m-auto mt-5">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a] py-8">MAPBYRUBY</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat odit ullam iste repellat consequatur libero
            reiciendis, blanditiis accusantium Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Id odit ullam iste repellat odit ullam
           
          </p>
        </div>

        <div className=" w-[50%] m-auto flex mt-9 mb-5 justify-between">
          
        </div>

        <div className="flex justify-between p-4">
          <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Commerce</li>
            
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">Guides</li>
             
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
             
           
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
