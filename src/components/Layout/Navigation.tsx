"use client";

import { LayoutDashboard, Menu, Package, Settings, X } from "lucide-react";
import Link from "next/link";
import {
  useParams,
  usePathname,
  useSelectedLayoutSegments,
} from "next/navigation";
import { type ReactNode, useEffect, useMemo, useState } from "react";

import { cn } from "~/lib/utils";

import { Logo } from "./Logo";

export function Navigation({ children }: { children: ReactNode }) {
  const segments = useSelectedLayoutSegments();
  const { id } = useParams<{ id?: string }>();

  const tabs = useMemo(() => {
    return [
      {
        name: "Dashboard",
        href: "/",
        isActive: segments.length === 0,
        icon: <LayoutDashboard width={18} />,
      },
      {
        name: "Shipments",
        href: "/shipments",
        isActive: segments[0] === "shipments",
        icon: <Package width={18} />,
      },
      {
        name: "Settings",
        href: "/settings",
        isActive: segments[0] === "settings",
        icon: <Settings width={18} />,
      },
    ] as const;
    // TODO: Careful with this
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [segments, id]);

  const [showSidebar, setShowSidebar] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    // hide sidebar on path change
    setShowSidebar(false);
  }, [pathname]);

  return (
    <>
      <div className="flex items-center justify-between border-b border-stone-200 bg-stone-100 sm:hidden">
        <div
          className={cn("w-52 p-5", {
            hidden: showSidebar,
          })}
        >
          <Logo />
        </div>
        <button
          className={cn(
            "fixed z-20",
            // left align for Editor, right align for other pages
            segments[0] === "post" && segments.length === 2 && !showSidebar
              ? "left-5 top-5"
              : "right-5 top-7",
          )}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {showSidebar ? <X width={20} /> : <Menu width={20} />}
        </button>
      </div>
      <div
        className={cn(
          "transform",
          showSidebar ? "w-full translate-x-0" : "-translate-x-full",
          "fixed z-10 flex h-full flex-col justify-between border-r border-stone-200 bg-stone-100 p-4 transition-all sm:w-60 sm:translate-x-0",
        )}
      >
        <div className="grid gap-2">
          <Link href="/" className="w-40 rounded-lg p-1 hover:bg-stone-200">
            <Logo />
          </Link>

          <div className="grid gap-1">
            {tabs.map(({ name, href, isActive, icon }) => (
              <Link
                key={name}
                href={href}
                className={cn(
                  "flex items-center space-x-3",
                  isActive && "bg-stone-200 text-black",
                  "rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:bg-stone-200 active:bg-stone-300",
                )}
              >
                {icon}
                <span className="text-sm font-medium">{name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="my-2 border-t border-stone-200" />
          {children}
        </div>
      </div>
    </>
  );
}
