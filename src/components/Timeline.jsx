"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  return (
    <div className="pb-16">
      <h2 className="text-center font-bold text-3xl mb-8">Company Timeline</h2>
      <VerticalTimeline>
        {/* 2014 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(223,225,221)",
            color: "#000",
            padding: "24px",
            borderRadius: "8px",
          }}
          icon={
            <div
              style={{
                background: "#016633", // Dark green background
                color: "#fff", // White text
                padding: "8px 20px", // Adjust padding for button shape
                borderRadius: "20px", // Pill shape
                fontWeight: "bold",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              2014
            </div>
          }
          iconStyle={{
            background: "transparent", // Remove the default circle
            boxShadow: "none",
          }}
        >
          <p>
            After Vishal Garg’s first attempt to purchase his own dream home, he
            quickly realized that the homebuying process is unnecessarily
            broken. This inspired him to found a technology-first company led by
            engineers and data experts with the mission of digitizing and
            automating home finance to make it cheaper, easier, and faster for
            all.
          </p>
        </VerticalTimelineElement>
        {/* 2015 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(223,225,221)",
            color: "#000",
            padding: "24px",
            borderRadius: "8px",
          }}
          icon={
            <div
              style={{
                background: "#016633", // Dark green background
                color: "#fff", // White text
                padding: "8px 20px", // Adjust padding for button shape
                borderRadius: "20px", // Pill shape
                fontWeight: "bold",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              2015
            </div>
          }
          iconStyle={{
            background: "transparent", // Remove the default circle
            boxShadow: "none",
          }}
        >
          <p>
            Better Mortgage funds its first mortgage loan entirely online
            (without a single phone call!).
          </p>
        </VerticalTimelineElement>
        {/* 2016 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(223,225,221)",
            color: "#000",
            padding: "24px",
            borderRadius: "8px",
          }}
          icon={
            <div
              style={{
                background: "#016633", // Dark green background
                color: "#fff", // White text
                padding: "8px 20px", // Adjust padding for button shape
                borderRadius: "20px", // Pill shape
                fontWeight: "bold",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              2016
            </div>
          }
          iconStyle={{
            background: "transparent", // Remove the default circle
            boxShadow: "none",
          }}
        >
          <p>
            Better Mortgage becomes a Fannie Mae approved seller + servicer and
            establishes relationships with top mortgage investors.
          </p>
        </VerticalTimelineElement>
        {/* 2017 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(223,225,221)",
            color: "#000",
            padding: "24px",
            borderRadius: "8px",
          }}
          icon={
            <div
              style={{
                background: "#016633", // Dark green background
                color: "#fff", // White text
                padding: "8px 20px", // Adjust padding for button shape
                borderRadius: "20px", // Pill shape
                fontWeight: "bold",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              2017
            </div>
          }
          iconStyle={{
            background: "transparent", // Remove the default circle
            boxShadow: "none",
          }}
        >
          <p>
            Better expands into the real estate market with Better Real Estate.
          </p>
        </VerticalTimelineElement>
        {/* 2018 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(223,225,221)",
            color: "#000",
            padding: "24px",
            borderRadius: "8px",
          }}
          icon={
            <div
              style={{
                background: "#016633", // Dark green background
                color: "#fff", // White text
                padding: "8px 20px", // Adjust padding for button shape
                borderRadius: "20px", // Pill shape
                fontWeight: "bold",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              2018
            </div>
          }
          iconStyle={{
            background: "transparent", // Remove the default circle
            boxShadow: "none",
          }}
        >
          <p>
            Better Mortgage partners with Ally Bank to build Ally powered by
            Better.
          </p>
        </VerticalTimelineElement>
        {/* 2019 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(223,225,221)",
            color: "#000",
            padding: "24px",
            borderRadius: "8px",
          }}
          icon={
            <div
              style={{
                background: "#016633", // Dark green background
                color: "#fff", // White text
                padding: "8px 20px", // Adjust padding for button shape
                borderRadius: "20px", // Pill shape
                fontWeight: "bold",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              2019
            </div>
          }
          iconStyle={{
            background: "transparent", // Remove the default circle
            boxShadow: "none",
          }}
        >
          <p>
            Better Mortgage launches its pilot partnership with American Express
            to deliver a seamless homebuying experience to AMEX customers.
          </p>
        </VerticalTimelineElement>
        {/* 2021 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(223,225,221)",
            color: "#000",
            padding: "24px",
            borderRadius: "8px",
          }}
          icon={
            <div
              style={{
                background: "#016633", // Dark green background
                color: "#fff", // White text
                padding: "8px 20px", // Adjust padding for button shape
                borderRadius: "20px", // Pill shape
                fontWeight: "bold",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              2021
            </div>
          }
          iconStyle={{
            background: "transparent", // Remove the default circle
            boxShadow: "none",
          }}
        >
          <p>
            Better acquires Trussle — The UK’s most innovative online mortgage
            broker.
          </p>
        </VerticalTimelineElement>
        {/* 2022 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(223,225,221)",
            color: "#000",
            padding: "24px",
            borderRadius: "8px",
          }}
          icon={
            <div
              style={{
                background: "#016633", // Dark green background
                color: "#fff", // White text
                padding: "8px 20px", // Adjust padding for button shape
                borderRadius: "20px", // Pill shape
                fontWeight: "bold",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              2022
            </div>
          }
          iconStyle={{
            background: "transparent", // Remove the default circle
            boxShadow: "none",
          }}
        >
          <p>
            Better Mortgage becomes the first fintech to fund $100B home loans
            entirely online.
          </p>
        </VerticalTimelineElement>
        {/* 2023 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(223,225,221)",
            color: "#000",
            padding: "24px",
            borderRadius: "8px",
          }}
          icon={
            <div
              style={{
                background: "#016633", // Dark green background
                color: "#fff", // White text
                padding: "8px 20px", // Adjust padding for button shape
                borderRadius: "20px", // Pill shape
                fontWeight: "bold",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              2023
            </div>
          }
          iconStyle={{
            background: "transparent", // Remove the default circle
            boxShadow: "none",
          }}
        >
          <p>
            Better Mortgage launches One Day Mortgage¹: The first offering to
            customers to go from application to full mortgage Commitment Letter
            within 24 hours vs. typical industry process of 30+ days.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(223,225,221)",
            color: "#000",
            padding: "24px",
            borderRadius: "8px",
          }}
          iconStyle={{ display: "none" }}
        >
          <p>Better Mortgage launches the fully digital 3-day HELOC².</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(223,225,221)",
            color: "#000",
            padding: "24px",
            borderRadius: "8px",
          }}
          iconStyle={{ display: "none" }}
        >
          <p>Better Mortgage launches One Day Verified Approval Letter.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(223,225,221)",
            color: "#000",
            padding: "24px",
            borderRadius: "8px",
          }}
          icon={
            <div
              style={{
                background: "#016633", // Dark green background
                color: "#fff", // White text
                padding: "8px 20px", // Adjust padding for button shape
                borderRadius: "20px", // Pill shape
                fontWeight: "bold",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              Today
            </div>
          }
          iconStyle={{
            background: "transparent", // Remove the default circle
            boxShadow: "none",
          }}
        >
          <p>
            You become part of the story by joining tens of thousands of happy
            Better Mortgage borrowers.
          </p>
          <button className="py-2 px-4 hover:bg-primary bg-accent text-white rounded-lg">
            Get Started
          </button>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
