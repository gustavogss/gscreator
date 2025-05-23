"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon, VoicemailIcon } from "lucide-react";
import { usePathname } from "next/navigation";


const montserrat = Montserrat({
  weight: "600", subsets: ["latin"]
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500"
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500"
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-orange-400"
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700"
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500"
  },
  {
    label: "Voice Generation",
    icon: VoicemailIcon,
    href: "/voice",
    color: "text-amber-400"
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-slate-400"
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-slate-100"
  },
]

export default function SideBar() {
  const pathName = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#212121] text-slate-50">
      <div className="px-3 py-2 flex-1">
        <Link href="/dasboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image
              fill
              alt="Logo"
              src="/logo.png"
            />
            <h1 className={cn("text-2xl font-bold ml-9", montserrat.className)}>
              GSCreator
            </h1>
          </div>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn("text-md group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathName === route.href ? "text-white bg-white/10" : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1 pl-4">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}