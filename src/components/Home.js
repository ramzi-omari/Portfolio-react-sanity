import React from "react";
import imageOne from "../image-1.jpg";

const Home = () => {
  return (
    <main>
      <img
        src={imageOne}
        alt="My Background"
        className="absolute object-cover w-full h-full"
      ></img>
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Hello, i'm Ramzi.
        </h1>
      </section>
    </main>
  );
};

export default Home;
