import { Inbox,LayoutDashboard,VectorSquare,Tv,TvMinimal,AudioLines,Undo } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

// Menu items.
const items = [
  {
    title: "Overview",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "MMM",
    url: "#",
    icon: VectorSquare,
  },
  {
    title: "TV",
    url: "#",
    icon: Tv,
  },
  {
    title: "OTT",
    url: "#",
    icon: TvMinimal,
  },
  {
    title: "Audio",
    url: "#",
    icon: AudioLines,
  },
  {
    title: "Campaigns",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Switch Account",
    url: "#",
    icon: Undo,
  },
]

export function AppSidebar() {
  return (
    
    <Sidebar className="h-screen w-60 mt-20 bg-gray-100" >
      <SidebarContent className="bg-gray-100" >
        <SidebarGroup className="flex flex-col gap-8 py-6" >
          <SidebarGroupLabel>
            <div className="bg-white w-full p-2 shadow-lg flex items-center justify-between gap-2 rounded-full ">
              <div className="rounded-full bg-white p-1 border border-gray-200">
              <p className="text-primary text-sm font-bold  ">JMP</p>
              </div>
              <p className="text-black text-lg font-medium ">Juice Media</p>
              <ChevronDown className="text-black" />

            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon className={index === 0 ? "text-primary" : "text-gray-400"} size={72} />
                      <span className={index === 0 ? "text-primary font-medium " : "text-gray-400 font-medium "}>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}