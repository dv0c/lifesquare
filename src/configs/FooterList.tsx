import { FacebookIcon, Twitter, Youtube } from "lucide-react";

export const FooterList = [
  {
    heading: "Social",
    items: [
      {
        name: "Facebook",
        icon: <FacebookIcon size={18} />,
        href: "/facebook",
      },
      {
        name: "Twitter",
        icon: <Twitter size={18} />,
        href: "/twitter",
      },
      {
        name: "Youtube",
        icon: <Youtube size={18} />,
        href: "/youtube",
      },
    ],
  },
  {
    heading: "About",
    items: [
      {
        name: "Style Guides",
        href: "/style-guides",
      },
      {
        name: "Features",
        href: "/features",
      },
      {
        name: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    heading: "Membership",
    items: [
      {
        name: "Editor's Choice",
        href: "/editors-choice",
      },
      {
        name: "Membership",
        href: "/membership",
      },
    ],
  },
  {
    heading: "Resources",
    items: [
      {
        name: "Tags",
        href: "/tags",
      },
      {
        name: "Authors",
        href: "/authors",
      },
    ],
  },
];
