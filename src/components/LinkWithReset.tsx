import React from "react";
import Link from "next/link";

interface CustomLinkProps {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const LinkWithReset: React.FC<CustomLinkProps> = ({
  href,
  onClick,
  children,
  className,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Reset body overflow
    document.body.style.overflow = "auto";

    // Call onClick if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link href={href}>
      <div className={className} onClick={handleClick}>
        {children}
      </div>
    </Link>
  );
};

export default LinkWithReset;
