import { Link } from "react-router-dom";
import { v4 as randomId } from "uuid";
import DiscordMainLogo from "../../assets/discord_main_logo.svg";
import LeftBgLandingHeader from "../../assets/left_bg_landing_header.svg";
import RightBgLandingHeader from "../../assets/right_bg_landing_header.svg";
import JustChilling from "../../assets/just_chiling_landing.svg";
import UsaFlag from "../../assets/usa_flag.png";
import SmallRoundedButton from "../utils/SmallRoundedButton.component";
import MainRoundedButton from "../utils/MainRoundedButton.component ";
import FeatureHighlights from "../components/feature-highlights.component";
import FooterInfoElements from "../components/footer-info-elements.component";
import featureHighlights from "../models/featureHighlights.model";
import elements from "../models/elements.model";

const navElements = [
  "Download",
  "Nitro",
  "Discover",
  "Safety",
  "Support",
  "Blog",
  "Careers",
];

function CoverPage() {
  return (
    <div>
      <div
        id="main-container"
        className="relative bg-[url('../../assets/center_bg_landing_header.svg')] bg-[#404eed]"
      >
        <div className="h-[80px] px-[150px] flex justify-evenly items-center">
          <div className="cursor-pointer">
            <img src={DiscordMainLogo} alt="" />
          </div>
          <div>
            {navElements.map((navElement) => (
              <a
                key={randomId()}
                className="m-4 text-base font-semibold text-white hover:underline underline-offset-4"
                href=""
              >
                {navElement}
              </a>
            ))}
          </div>
          <div>
            <SmallRoundedButton bgColor="white" textColor="black">
              <Link to="/login">Login</Link>
            </SmallRoundedButton>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-[794px] py-[123px] mx-auto text-center">
          <div className="flex flex-col justify-center items-center mb-2">
            <h1 className="text-white text-[56px] font-extrabold">
              IMAGINE A PLACE...
            </h1>
            <p className="text-white text-xl font-normal mt-10">
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </p>
          </div>
          <div className="flex w-full justify-center items-center">
            <MainRoundedButton bgColor="white" textColor="black">
              Download For Windows
            </MainRoundedButton>
            <MainRoundedButton bgColor="black" textColor="white">
              Open Discord in your browser
            </MainRoundedButton>
          </div>
        </div>

        <img
          className="absolute bottom-0 right-[1288px]"
          src={LeftBgLandingHeader}
          alt="left-img-main"
        />
        <img
          className="absolute bottom-0 left-[1288px]"
          src={RightBgLandingHeader}
          alt="right-img-main"
        />
      </div>

      <div id="feature-highlights">
        {featureHighlights.map(
          ({ bgColor, imageSrc, imageAlt, title, description, reverseRow }) => (
            <FeatureHighlights
              key={randomId()}
              bgColor={bgColor}
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              title={title}
              description={description}
              reverseRow={reverseRow}
            />
          )
        )}
      </div>

      <div id="feature-bottom" className="py-9 bg-[#f6f6f6]">
        <div className="flex flex-col justify-center items-center w-1/2 text-center mx-auto">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-extrabold text-[40px]">
              RELIABLE TECH FOR STAYING CLOSE
            </h1>
            <p className="mt-6 font-normal text-xl">
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share.
            </p>
          </div>
          <img src={JustChilling} alt="" />
          <div className="mt-8 flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold">Ready to start your journey?</h2>
            <button className="text-white bg-[#5865f2] flex justify-center items-center rounded-[28px] text-xl font-medium px-8 py-4 mr-6 mt-6">
              Download For Windows
            </button>
          </div>
        </div>
      </div>

      <footer className="bg-[#23272a] text-white">
        <div className="flex justify-center pt-20 w-2/3 mx-auto">
          <div className="w-1/3">
            <div className="flex items-center">
              <img className="h-4 w-6 mr-2" src={UsaFlag} alt="usa-flag" />
              <span>English, USA</span>
            </div>
          </div>
          <div className="w-2/3 flex justify-around">
            {elements.map((elementsMeta) => (
              <FooterInfoElements
                key={randomId()}
                elementsMeta={elementsMeta}
              />
            ))}
          </div>
        </div>
        <div className="w-2/3 mx-auto py-4"></div>
        <div className="w-2/3 mx-auto pb-16 flex justify-between items-center border-t-2 border-[#5865f2]">
          <div className="flex justify-between items-center w-full pt-6">
            <div className="cursor-pointer">
              <img src={DiscordMainLogo} alt="" />
            </div>
            <div>
              <SmallRoundedButton bgColor="#5865f2" textColor="White">
                Sign Up
              </SmallRoundedButton>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CoverPage;
