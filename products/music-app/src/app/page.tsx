import Image from "next/image";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { House } from "lucide-react";
import { Library } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { Search } from "lucide-react";
import { Mic } from "lucide-react";
import { CirclePlay } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import { Radio } from "lucide-react";
import { ListMusic } from "lucide-react";
import { Music2 } from "lucide-react";
import { User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex GeistSans min-h-screen bg-black dark:[color-scheme:dark] flex-col items-center justify-between p-24">
      <div className="contentsP active" id="musicContent">
        <div className="flex justify-center mt-[6rem]">
          <div className="h-[750px] w-[1300px] flex flex-col rounded-lg border border-[#202020]">
            <div className="flex gap-[2rem] bg-black rounded-t-lg border-b border-b-[#202020] ">
              <Menubar className="bg-black border-none">
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      New Window <MenubarShortcut>⌘N</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled>New Incognito Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                      <MenubarSubTrigger>Share</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Email link</MenubarItem>
                        <MenubarItem>Messages</MenubarItem>
                        <MenubarItem>Notes</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>
                      Print... <MenubarShortcut>⌘P</MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                      <MenubarSubTrigger>Find</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Search the web</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Find...</MenubarItem>
                        <MenubarItem>Find Next</MenubarItem>
                        <MenubarItem>Find Previous</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>Cut</MenubarItem>
                    <MenubarItem>Copy</MenubarItem>
                    <MenubarItem>Paste</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>View</MenubarTrigger>
                  <MenubarContent>
                    <MenubarCheckboxItem>
                      Always Show Bookmarks Bar
                    </MenubarCheckboxItem>
                    <MenubarCheckboxItem checked>
                      Always Show Full URLs
                    </MenubarCheckboxItem>
                    <MenubarSeparator />
                    <MenubarItem inset>
                      Reload <MenubarShortcut>⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled inset>
                      Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Hide Sidebar</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Profiles</MenubarTrigger>
                  <MenubarContent>
                    <MenubarRadioGroup value="benoit">
                      <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                      <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                      <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                    </MenubarRadioGroup>
                    <MenubarSeparator />
                    <MenubarItem inset>Edit...</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Add Profile...</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
            <div className="flex h-full">
              <div className="border-r w-[300px] py-[1.5rem] flex flex-col items-start justify-center pl-[2rem]  gap-[2rem]  border-r-[#202020]">
                <div className="flex flex-col gap-[1rem]">
                  <div className="text-xl font-bold">Discover</div>
                  <div className="flex gap-[1rem]">
                    <div className="flex flex-col text-md gap-[1rem]">
                      <div className="flex items-center gap-[1rem]">
                        <CirclePlay className="w-4 h-4" />
                        <p>Listen Now</p>
                      </div>
                      <div className="flex items-center gap-[1rem]">
                        <LayoutGrid className="w-4 h-4" />
                        <p>Browser</p>
                      </div>
                      <div className="flex items-center gap-[1rem]">
                        <Radio className="w-4 h-4" />
                        <p>Radio</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[1rem]">
                  <div className="text-xl font-bold">Library</div>
                  <div className="flex gap-[1rem]">
                    <div className="flex flex-col text-md gap-[1rem]">
                      <div className="flex items-center gap-[1rem]">
                        <ListMusic className="w-4 h-4" />
                        <p>Playlist</p>
                      </div>
                      <div className="flex items-center gap-[1rem]">
                        <Music2 className="w-4 h-4" />
                        <p>Songs</p>
                      </div>
                      <div className="flex items-center gap-[1rem]">
                        <User className="w-4 h-4" />
                        <p>Make for You</p>
                      </div>
                      <div className="flex items-center gap-[1rem]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                          <circle cx="17" cy="7" r="5"></circle>
                        </svg>
                        <p>Artists</p>
                      </div>
                      <div className="flex items-center gap-[1rem]">
                        <Library className="w-4 h-4" />
                        <p>Albums</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[1rem]">
                  <div className="text-xl font-bold">Playlists</div>
                  <div className="flex gap-[1rem]">
                    <div className="flex flex-col text-md gap-[1rem]">
                      <div className="flex items-center gap-[1rem]">
                        <ListMusic className="w-4 h-4" />
                        <p>Playlist</p>
                      </div>
                      <div className="flex items-center gap-[1rem]">
                        <ListMusic className="w-4 h-4" />
                        <p>Playlist</p>
                      </div>
                      <div className="flex items-center gap-[1rem]">
                        <ListMusic className="w-4 h-4" />
                        <p>Playlist</p>
                      </div>
                      <div className="flex items-center gap-[1rem]">
                        <ListMusic className="w-4 h-4" />
                        <p>Playlist</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col">
                <div className="flex mt-[1rem] mx-[2rem] justify-between">
                  <div className="">
                    <Tabs defaultValue="music" className="w-[400px]">
                      <TabsList>
                        <TabsTrigger value="music">Music</TabsTrigger>
                        <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                        <TabsTrigger value="live">Live</TabsTrigger>
                      </TabsList>
                      <TabsContent value="music">
                        <div className="mt-[2rem]">
                          <div className="">
                            <h1 className="font-bold text-2xl">Listen Now</h1>
                            <p>Top picks for you. Updated daily.</p>
                          </div>
                          <div>
                            <div className="grid gap-[3rem] grid-cols-3">
                              <Image
                                src="/kelly-sikkema-_-TwILDnZSU-unsplash.jpg"
                                width={400}
                                height={700}
                                alt="Picture of the author"
                                className="rounded-lg"
                              />
                              <Image
                                src="/kelly-sikkema-_-TwILDnZSU-unsplash.jpg"
                                width={200}
                                height={400}
                                alt="Picture of the author"
                                className="rounded-lg"
                              />
                              <Image
                                src="/kelly-sikkema-_-TwILDnZSU-unsplash.jpg"
                                width={200}
                                height={400}
                                alt="Picture of the author"
                                className="rounded-lg"
                              />
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="podcasts">
                        Change your password here.
                      </TabsContent>
                      <TabsContent value="live">
                        Change your password here.
                      </TabsContent>
                    </Tabs>
                  </div>
                  <div>
                    <Button>
                      <CirclePlus className="mr-2 h-4 w-4" /> Add Music
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
