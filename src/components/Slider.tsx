import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export interface Project {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
  link?: string;
}

export default function Slider({
  projects,
}: Readonly<{ projects: Array<Project> }>) {
  return (
    <Carousel
      className="border-2 border-gray-700 rounded-lg max-w-lg p-2"
      showArrows={true}
      showStatus={true}
      showIndicators={false}
      infiniteLoop={true}
      showThumbs={false}
      swipeable={true}
      emulateTouch={true}
    >
      {projects.map((project) => (
        <div
          key={project.id}
          className="h-full flex flex-col justify-between items-center gap-8"
        >
          <h3 className="text-2xl font-bold p-2">{project.title}</h3>
          <img
            loading="lazy"
            className="rounded-lg max-w-60"
            alt=""
            src={project.imgSrc}
            draggable="false"
          />
          <div className="flex flex-col justify-center items-center gap-8">
            <p className="max-w-fit text-balance">
              {project.description + " "}
            </p>
            {project.link ? (
              <a
                className="w-full max-w-48 p-2 rounded-full border-2 border-gray-700 mb-2"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </Carousel>
  );
}
