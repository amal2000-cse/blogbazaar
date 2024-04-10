import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">JavaScript: Powering Interactive Web Experiences </h2>
        <p className="text-gray-500 my-2">
          JavaScript, the backbone of modern web development, enables dynamic
          and engaging user interactions. From interactive forms to dynamic
          content updates, JavaScript empowers developers to create immersive
          web experiences that captivate audiences worldwide.{" "}
        </p>
        <Button gradientDuoTone="purpleToPink" className="rounded-tl-xl rounded-bl-none mt-5">
          <Link to="">Learn More</Link>
        </Button>
      </div>
      <div className="p-7 flex-1 ">
        <img
        className="rounded-lg"
          src="https://images.prismic.io/turing/652ec059fbd9a45bcec818e1_How_to_Use_Java_Script_for_Backend_Development_5889da971c.webp?auto=format,compress"
          alt=""
        />
      </div>
    </div>
  );
};

export default CallToAction;
