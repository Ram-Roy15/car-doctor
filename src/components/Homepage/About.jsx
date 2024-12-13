import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 mt-20 lg:grid-cols-2">
          <div className="px-8 my-20 ">
            <Image
              alt="person"
              src="/assets/images/about_us/person.jpg"
              height={700}
              width={500}
            ></Image>
            <Image
              alt="parts"
              src="/assets/images/about_us/parts.jpg"
              height={400}
              width={400}
              className="-mt-20 ml-56"
            ></Image>
          </div>
          <div className="space-y-8 my-20 pe-10">
            <h6 className="text-primary font-bold">About Us</h6>
            <h1 className="text-5xl font-bold">
              We are Qualified and Experience of this field
            </h1>
            <p>
              Lorem ipsum dolor sit amet. lorem50 Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptate eaque et fugit nisi atque.
              Cum recusandae molestias repellendus blanditiis neque possimus,
              modi ex a eius assumenda quod reprehenderit corrupti quaerat iste
              ea dolorum praesentium minus explicabo quos optio magni quo
              perspiciatis cumque. Praesentium architecto ipsam ratione deleniti
              harum vel veritatis.
            </p>
            <button className="btn btn-primary">Get more info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
