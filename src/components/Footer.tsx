import { FooterList } from "@/configs/FooterList";
import Link from "next/link";
import React from "react";

interface ItemProps {
  name: string;
  icon?: React.ReactNode;
  href: string;
}

const Footer = () => {
  const list = FooterList;
  return (
    <div className="mt-20 mx-auto max-w-[var(--max-width-2)] py-10 p-5  md:py-10 border-t">
      <div className="flex flex-wrap gap-10">
        <List list={list} />
      </div>
      <div className="mt-16">
        <p className="text-sm font-light">
          © Reiro 2024. Published with Ghost and Reiro.
        </p>
      </div>
    </div>
  );
};

export default Footer;

const List = ({ list }: any) => {
  return (
    <div className="flex flex-wrap justify-between items-center m-auto w-full gap-10">
      {list.map((item: any, i: number) => (
        <div className="flex flex-col" key={i}>
          <h1 className="font-semibold mb-3 text-sm">{item.heading}</h1>
          <ul className="space-y-2">
            {item.items.map((item: ItemProps, i: number) => (
              <li key={i}>
                <Link
                  className="flex font-light group items-center gap-2"
                  href={item.href}
                >
                  {item.icon}
                  <span className="group-hover:underline underline-offset-4 text-sm">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
