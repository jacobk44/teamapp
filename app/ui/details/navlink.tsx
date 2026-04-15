"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { HomeIcon, UserGroupIcon, DocumentDuplicateIcon, PhoneIcon } from "@heroicons/react/24/outline";

type NavLink = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

type NavLinksProps = {
  onLinkClick?: () => void;
};

const links: NavLink[] = [
  { name: "Home", href: "/", icon: <HomeIcon className="w-6" /> },
  { name: "Services", href: "/services", icon: <UserGroupIcon className="w-6" /> },
  { name: "About", href: "/about", icon: <DocumentDuplicateIcon className="w-6" /> },
  { name: "Contacts", href: "/contacts", icon: <PhoneIcon className="w-6" /> },
];

export default function NavLinks({ onLinkClick }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={onLinkClick}
          className={clsx(
            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
            {
              "bg-gray-100 text-blue-600": pathname === link.href,
            }
          )}
        >
          {link.icon}
          <p className="hidden md:block">{link.name}</p>
        </Link>
      ))}
    </>
  );
}