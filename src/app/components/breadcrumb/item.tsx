import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";
import { UrlObject } from "url";

type ItemProps = Omit<LinkProps, "href"> & {
  href?: string | UrlObject;
  label: string;
  rightBar?: boolean;
  icon?: ReactElement;
};

export function Item({
  href,
  label,
  rightBar = true,
  icon,
  ...rest
}: ItemProps) {
  return (
    <li className="inline-flex items-center">
      {href ? (
        <Link
          href={href || "#"}
          className="inline-flex gap-1 items-center text-md md:text-sm font-medium text-zinc-900 hover:text-black"
          {...rest}
        >
          {icon &&
            cloneElement(icon, {
              className: "text-zinc-900 hover:text-black w-5",
            } as HTMLElement)}
          {label}
        </Link>
      ) : (
        <span className="text-md md:text-sm font-medium hover:cursor-default text-zinc-500 ">
          {label}
        </span>
      )}
      {rightBar && (
        <span className="mx-2 text-zinc-900 hover:cursor-default">/</span>
      )}
    </li>
  );
}
