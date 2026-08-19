"use client";
import React, { useState } from "react";
import { CodeXml, Server, Wrench } from "lucide-react";
import { Button } from "@/components/Button";
import SkillsCard from "./SkillsCard";
import { SkillsData } from "../data";


const Skills = () => {
  const [active, setActive] = useState("frontend");
  return (
    <div className="px-6 md:px-16 py-20" id="skills">
      <div className="w-full text-center mb-10">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
          My Skills
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 animate-fade-in animation-delay-100 text-secondary-foreground">
          Technologies I{" "}
          <span className="font-serif italic font-normal text-white">
            excel in
          </span>
        </h2>

        <p className="text-muted-foreground animate-fade-in animation-delay-200 max-w-xl mx-auto">
          I work with modern web technologies like React, Node.js, Express,
          MongoDB, and more to build responsive and scalable applications.
        </p>
      </div>
      <div className="w-full flex flex-wrap gap-1 sm:gap-10 justify-center rounded-2xl py-2 mb-20  h-full shadow-2xl">
        <Button
          className={`h-[70px] relative w-[150px] sm:w-[220px] rounded-2xl cursor-pointer ${
            active === "frontend"
              ? "bg-cyan-500 !text-white hover:bg-cyan-500"
              : "bg-white hover:bg-gray-50 !text-white"
          } transition duration-500 hover:scale-104 `}
          onClick={() => setActive("frontend")}
        >
          {active === "frontend" && (
            <div className="absolute inset-0 bg-gradient-to-r from-background-color/10 to-transparent w-1/2 slideAnimation"></div>
          )}

          <span
            className={`${
              active === "frontend" ? "!text-white" : "!text-black"
            } p-2 border-2 rounded-xl `}
          >
            <CodeXml size={20} />
          </span>
          <span
            className={` ${
              active === "frontend" ? "!text-white" : "!text-gray-700"
            } text-[18px] sm:text-xl`}
          >
            Frontend
          </span>
        </Button>
        <Button
          className={`h-[70px] relative w-[150px] sm:w-[220px] rounded-2xl cursor-pointer ${
            active === "backend"
              ? "bg-blue-500 !text-white hover:bg-blue-500"
              : "bg-white hover:bg-gray-50 !text-white"
          } transition duration-500 hover:scale-104 `}
          onClick={() => setActive("backend")}
        >
          {active === "backend" && (
            <div className="absolute inset-0 bg-gradient-to-r from-background-color/10 to-transparent w-1/2 slideAnimation"></div>
          )}
          <span
            className={`${
              active === "backend" ? "!text-white" : "!text-black"
            } p-2 border-2 rounded-xl `}
          >
            <Server size={20} />
          </span>
          <span
            className={` ${
              active === "backend" ? "!text-white" : "!text-gray-700"
            } text-[18px] sm:text-xl`}
          >
            Backend
          </span>
        </Button>
        <Button
          className={`h-[70px] relative w-[150px] sm:w-[220px] rounded-2xl cursor-pointer ${
            active === "tools"
              ? "bg-indigo-500 !text-white hover:bg-indigo-500"
              : "bg-white hover:bg-gray-50 !text-white"
          } transition duration-500 hover:scale-104 `}
          onClick={() => setActive("tools")}
        >
          {active === "tools" && (
            <div className="absolute inset-0 bg-gradient-to-r from-background-color/10 to-transparent w-1/2 slideAnimation"></div>
          )}

          <span
            className={`${
              active === "tools" ? "!text-white" : "!text-black"
            } p-2 border-2 rounded-xl `}
          >
            <Wrench size={20} />
          </span>
          <span
            className={` ${
              active === "tools" ? "!text-white" : "!text-gray-700"
            } text-[13px] sm:text-xl`}
          >
            DevOps
          </span>
        </Button>
      </div>
      <div className="w-full grid gap-5 grid-cols-2 md:grid-cols-3 pb-20">
        {active === "frontend" &&
          SkillsData.frontend.map((item, index) => (
            <SkillsCard item={item} key={index} />
          ))}
        {active === "backend" &&
          SkillsData.backend.map((item, index) => (
            <SkillsCard item={item} key={index} />
          ))}
        {active === "tools" &&
          SkillsData.tools.map((item, index) => (
            <SkillsCard item={item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Skills;
