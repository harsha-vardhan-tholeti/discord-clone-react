import InviteOnly from "../../assets/invite_only_landing.svg";
import HangingOutEasy from "../../assets/hanging_out_easy_landing.svg";
import Fandom from "../../assets/fandom_landing.svg";

const featureHighlights = [
  {
    bgColor: null,
    imageSrc: InviteOnly,
    imageAlt: "Invite only landing",
    title: "Create an invite-only place where you belong",
    description: `Discord servers are organized into topic-based channels where
      you can collaborate, share, and just talk about your day
      without clogging up a group chat.`,
    reverseRow: false,
  },
  {
    bgColor: "#f6f6f6",
    imageSrc: HangingOutEasy,
    imageAlt: "Invite only landing",
    title: "Where hanging out is easy",
    description: `Grab a seat in a voice channel when you're free. Friends in
      your server can see you're around and instantly pop in to talk
      without having to call.`,
    reverseRow: true,
  },
  {
    bgColor: null,
    imageSrc: Fandom,
    imageAlt: "Fandom",
    title: "From few to a fandom",
    description: `Get any community running with moderation tools and custom
      member access. Give members special powers, set up private
      channels, and more.`,
    reverseRow: false,
  },
];

export default featureHighlights;
