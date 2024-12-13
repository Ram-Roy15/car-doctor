import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="carousel w-full">
        {banners.map((banner, index) => (
          <div
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7),rgba(0,0,0,0.3)), url(/assets/images/banner/${
                index + 1
              }.jpg)`,
            }}
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item h-[78vh] relative w-full bg-cover bg-top bg-no-repeat"
          >
            <div className="flex space-y-6 items-center p-36 h-full w-full">
              <div className="space-y-6">
                <h1 className="text-white font-bold text-5xl">
                  {banner.title}
                </h1>
                <p className="text-white ">{banner.description}</p>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-primary btn-outline">
                  Latest Projects
                </button>
              </div>
            </div>
            btn-outline
            <div className="absolute right-12 space-x-4  bottom-12 ">
              <a
                href={banner.prev}
                className="btn hover:text-orange-500 btn-circle"
              >
                ❮
              </a>
              <a
                href={banner.next}
                className="btn hover:text-orange-500 btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
  {
    title: "Car doctor pro yess",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus delectus, at rerum, aspernatur mollitia repellat adipisci qui quasi voluptatum placeat suscipit ullam recusandae animi id aliquam magni necessitatibus ratione sint!",
    prev: "#slide4",
    next: "#slide2",
  },
  {
    title: "Car doctor pro yess",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus delectus, at rerum, aspernatur mollitia repellat adipisci qui quasi voluptatum placeat suscipit ullam recusandae animi id aliquam magni necessitatibus ratione sint!",
    prev: "#slide1",
    next: "#slide3",
  },
  {
    title: "Car doctor pro yess",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus delectus, at rerum, aspernatur mollitia repellat adipisci qui quasi voluptatum placeat suscipit ullam recusandae animi id aliquam magni necessitatibus ratione sint!",
    prev: "#slide2",
    next: "#slide4",
  },
  {
    title: "Car doctor pro yess",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus delectus, at rerum, aspernatur mollitia repellat adipisci qui quasi voluptatum placeat suscipit ullam recusandae animi id aliquam magni necessitatibus ratione sint!",
    prev: "#slide3",
    next: "#slide1",
  },
];

export default Banner;
