import WindowWrapper from "../components/WindowWrapper";
import { useImageLoader } from "../utils/useImageLoader";
import contact_profile from "../assets/images/contact_profile.jpg";

export default function Contact() {
  const { handleImageLoad, renderPlaceholder, isLoading } = useImageLoader();

  return (
    <>
      <WindowWrapper style="row-start-2 row-span-10 col-start-2 col-span-10 tablet:row-start-3 tablet:row-span-8 tablet:col-start-4 tablet:col-span-6 tabletLandscape:row-start-2 tabletLandscape:row-span-10 tabletLandscape:col-start-5 tabletLandscape:col-span-4 desktop:row-start-3 desktop:row-span-8">
        <div className="w-full h-full flex flex-col overflow-hidden -translate-y-[9%]">
          <div className="relative w-full h-full">
            {renderPlaceholder("contact-profile")}
            <img
              src={contact_profile}
              className={`absolute top-0 left-0 w-full h-full object-[0%_25%] object-cover brightness-125 transition-opacity duration-500 ${
                isLoading("contact-profile") ? "opacity-0" : "opacity-100"
              } brightness-[0.95]`}
              onLoad={() => handleImageLoad("contact-profile")}
            />
          </div>
          <div className="flex flex-col justify-between w-full h-[150px] shrink-0 p-2 pt-4 pb-3 tablet:p-4 tablet:pt-6 tablet:pb-5">
            <div className="px-2">
              <div className="font-bold tracking-tight text-2xl uppercase leading-[1.2]">
                Jenny Kim
              </div>
              <a
                href="mailto:jennykimdev@gmail.com"
                className="underline text-blue-500 hover:text-orion"
              >
                jennykimdev@gmail.com
              </a>
            </div>
            <div className="flex gap-x-1 items-center tracking-wide uppercase text-sm">
              <a
                href="https://www.linkedin.com/in/kim-jenny5/"
                target="_blank"
                className="py-1 px-2 rounded-md hover:bg-gray-100 hover:font-medium active:text-orion"
              >
                LinkedIn
              </a>
              <span className="inline-block w-1 h-1 bg-black rounded-full"></span>
              <a
                href="https://github.com/kim-jenny5"
                target="_blank"
                className="py-1 px-2 rounded-md hover:bg-gray-100 hover:font-medium active:text-orion"
              >
                GitHub
              </a>
              <span className="inline-block w-1 h-1 bg-black rounded-full"></span>
              <a
                href="/resume.pdf"
                download="Jenny Kim Resume.pdf"
                className="py-1 px-2 rounded-md hover:bg-gray-100 hover:font-medium active:text-orion"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </WindowWrapper>
    </>
  );
}
