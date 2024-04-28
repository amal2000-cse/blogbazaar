import React from "react";
import CallToAction from "../components/CallToAction";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center max-w-7xl mx-auto p-3 gap-6">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500">Build fun and engaging projects</p>

      <div className="flex gap-4 flex-col sm:flex-row  ">
        <div className="flex flex-col  sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
          <div className="flex-1 justify-center flex flex-col">
            <h2 className="text-2xl">
              Dalle Clone: Text-to-Image Generation & Creativity Showcase
            </h2>
            <p className="text-gray-500 my-2">
              Dalle Clone is a SaaS product that enables users to generate
              images from text inputs using OpenAI's DALL-E model. Users can
              showcase their creativity by sharing their generated images on a
              community page where others also share their creations.
            </p>
            <Button
              gradientDuoTone="purpleToPink"
              className="rounded-tl-xl rounded-bl-none mt-5"
            >
              <a href="https://github.com/amal2000-cse/dall-E" target="_blank">GitHub</a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
          <div className="flex-1 justify-center flex flex-col">
            <h2 className="text-2xl">
              Summary Application: Summarize Web Content & Videos with OpenAI
            </h2>
            <p className="text-gray-500 my-2">
              Summary Application is a SaaS product that utilizes OpenAI's
              language models to summarize web content and videos. Users can
              input links to any website or YouTube videos, and the application
              generates concise summaries of the content.
            </p>
            <Button
              gradientDuoTone="purpleToPink"
              className="rounded-tl-xl rounded-bl-none mt-5"
            >
              <a
                href="https://github.com/amal2000-cse/ai-summary"
                target="_blank"
              >
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
