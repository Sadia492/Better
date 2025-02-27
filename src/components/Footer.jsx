import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#FEFCFA] py-10 px-6 md:px-16 text-gray-700 border-t-2">
      <div className="w-4/5 mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Overview */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-accent">Better</h2>
            <p className="mt-2">
              Better is a family of companies serving all your homeownership
              needs.
            </p>
            <div className="mt-4 space-y-8">
              <h3 className="font-bold text-accent text-xl">
                Better{" "}
                <span className="text-gray-400 font-medium">Mortgage</span>
              </h3>
              <p>Apply 100% online with expert support.</p>

              <h3 className="font-bold text-accent text-xl">
                Better{" "}
                <span className="text-gray-400 font-medium">Real Estate</span>
              </h3>
              <p>Connect with a local agent to find savings.</p>

              <h3 className="font-bold text-accent text-xl">
                Better <span className="text-gray-400 font-medium">Cover</span>
              </h3>
              <p>Shop, bundle, and save on insurance.</p>

              <h3 className="font-bold text-accent text-xl">
                Better{" "}
                <span className="text-gray-400 font-medium">Inspect</span>
              </h3>
              <p>Get free repair estimates and inspections.</p>

              <h3 className="font-bold text-accent text-xl">
                Better{" "}
                <span className="text-gray-400 font-medium">
                  Settlement Services
                </span>
              </h3>
              <p>Get transparent rates for title insurance.</p>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="mt-3 space-y-8">
              <li>Home affordability calculator</li>
              <li>Mortgage calculator</li>
              <li>Mortgage calculator with taxes</li>
              <li>Mortgage calculator with PMI</li>
              <li>Rent vs buy calculator</li>
              <li>HELOC payment calculator</li>
              <li>Buy a home</li>
              <li>Sell a home</li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="mt-3 space-y-8">
              <li>About Us</li>
              <li>Careers</li>
              <li>Media</li>
              <li>Partner With Us</li>
              <li>Learning Center</li>
              <li>FAQs</li>
              <li>Investor Relations</li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="mt-2">hello@better.com</p>
            <p>415-523-8837</p>

            <h3 className="text-lg font-bold mt-5">Legal</h3>
            <ul className="mt-3 space-y-8">
              <li>NMLS Consumer Access</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Disclosures & Licensing</li>
              <li>Affiliated Business</li>
              <li>Browser Disclaimer</li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-start space-x-4 mt-32 text-2xl">
          <FiFacebook />
          <FiInstagram />
          <FiLinkedin />
        </div>

        {/* Legal Notice */}
        <div className="border-t mt-10 pt-5 text-sm text-gray-500">
          <div className="space-y-4">
            <p>
              <sup>1</sup>Better Mortgage’s One Day Mortgage™ promotion offers
              qualified customers who provide certain required financial
              information/documentation to Better Mortgage within 4 hours of
              locking a rate on a mortgage loan the opportunity to receive an
              underwriting determination from Better Mortgage within 24 hours of
              their rate lock. The underwriting determination is subject to
              customary terms, including fraud and anti-money laundering checks,
              that take place pre-closing and which may trigger additional
              required documentation from the customer. Better Mortgage does not
              guarantee that initial underwriting approval will result in a
              final underwriting approval. See One Day Mortgage™ Terms and
              Conditions.
            </p>
            <p>
              <sup>2</sup>Better Mortgage’s One Day HELOC™ promotion offers
              qualified customers who provide certain required financial
              information/documentation to Better Mortgage within 4 hours of
              locking a rate on a HELOC loan the opportunity to receive an
              underwriting determination from Better Mortgage within 24 hours of
              their rate lock. The underwriting determination is subject to
              customary terms, including fraud and anti-money laundering checks,
              that take place pre-closing and which may trigger additional
              required documentation from the customer. Better Mortgage does not
              guarantee that initial underwriting approval will result in final
              underwriting approval. See One Day Heloc™ Terms and Conditions.
            </p>
            <p>
              <sup>3</sup>Assumes borrowers are eligible for the Automated
              Valuation Model (AVM) to calculate their home value, their loan
              amount is less than $400,000, all required documents are uploaded
              to their Better Mortgage online account within 24 hours of
              application, closing is scheduled for the earliest available date
              and time, and a notary is readily available. Funding timelines may
              vary and may be longer if an appraisal is required to calculate a
              borrower’s home value.
            </p>
          </div>
          <div className="border-t-2 mt-10 pt-10 space-y-4">
            <p className="mt-4">
              © 2025 Better Home & Finance Holding Company and/or its
              affiliates. Better is a family of companies. Better Mortgage
              Corporation provides home loans; Better Real Estate, LLC and
              Better Real Estate California Inc License # 02164055 provides real
              estate services; Better Cover, LLC sells insurance products; and
              Better Settlement Services provides title insurance services; and
              Better Inspect, LLC provides home inspection services. All rights
              reserved.
            </p>

            <p className="mt-2">
              Home lending products offered by Better Mortgage Corporation.
              Better Mortgage Corporation is a direct lender. NMLS #330511. 1
              World Trade Center, 80th Floor, New York, NY 10007. Loans made or
              arranged pursuant to a California Finance Lenders Law License. Not
              available in all states. Equal Housing Lender. NMLS Consumer
              Access
            </p>

            <p className="mt-2">
              Better Real Estate, LLC dba BRE, Better Home Services, BRE
              Services, LLC and Better Real Estate, and operating in the State
              of California through its wholly owned subsidiary Better Real
              Estate California Inc., is a licensed real estate brokerage and
              maintains its corporate headquarters at 325-41 Chestnut Street,
              Suite 826, Philadelphia, PA 19106. Here is a full listing of
              Better Real Estate, LLC’s license numbers. Better Real Estate, LLC
              provides access to real estate brokerage services via its
              nationwide network of partner brokerages and real estate agents
              (“Better Real Estate Partner Agents”). Equal Housing Opportunity.
              All rights reserved.
            </p>

            <p className="mt-2">
              <a href="#" className="underline">
                New York State Housing and Anti-Discrimination Notice
              </a>
            </p>
            <p>
              <a href="#" className="underline">
                New York Standard Operating Procedures
              </a>
            </p>
            <p>
              <a href="#" className="underline">
                Texas Real Estate Commission: Information About Brokerage
                Services | Consumer Protection Notice
              </a>
            </p>

            <p className="mt-2">
              Better Settlement Services, LLC. 325-41 Chestnut Street, Suite
              803, Philadelphia, PA 19106.
            </p>
            <p>
              Homeowners insurance policies are offered through Better Cover,
              LLC, a Pennsylvania Resident Producer Agency. License #881593.
              325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.
            </p>
            <p>
              Insurance quotes and policies are offered through Better Cover,
              LLC. A Pennsylvania Resident Producer Agency. License #881593.
              Here is a full listing of Better Cover, LLC’s license numbers.
            </p>
            <p>
              Better Inspect, LLC maintains its corporate headquarters at 325-41
              Chestnut Street, Suite 846, Philadelphia, PA 19106.
            </p>
            <p>
              Better Mortgage Corporation, Better Real Estate, LLC, Better
              Settlement Services, LLC, Better Cover, LLC, Better Connect, and
              Better Inspect, LLC are separate operating subsidiaries of Better
              Home & Finance Holding Company. Each company is a separate legal
              entity operated and managed through its own management and
              governance structure as required by its state of incorporation,
              and applicable and legal and regulatory requirements. Products not
              available in all states.
            </p>
            <p>
              Any unauthorized use of any proprietary or intellectual property
              is strictly prohibited. All trademarks, service marks, trade
              names, logos, icons, and domain names are proprietary to Better
              Home & Finance Holding Company. Better Home & Finance Holding
              Company trademarks are federally registered with the U. S. Patent
              and Trademark Office. Better Cover is a registered trademark with
              the U.S. Patent and Trademark Office and is owned by Better Cover,
              LLC.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
