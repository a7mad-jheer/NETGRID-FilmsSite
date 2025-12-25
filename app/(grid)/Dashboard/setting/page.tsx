import { ButtonDemo } from "@/app/components/ButtonAnimations/ButtonCard";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { Form } from "react-hook-form";

export default function Setting() {
  return (
    <>
      <div className="w-full text-center my-10">
        <h1 className="font-semibold text-3xl ">User Setting </h1>
        <p className="text-gray-500">Mange Your Account And Preferences.</p>
      </div>

      <section className="p-2 bg-gray-900 ">
        <div className="grid grid-cols-12 gap-4  ">
          <div className="col-span-4 ">
            <div className="bg-gray-950 p-4">
              <h1 className="w-fit">Profile</h1>
              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="w-30 h-30 rounded-full border-2-white relative overflow-hidden">
                  <Image
                    alt=""
                    src="/page2.jpg"
                    className="object-cover"
                    fill
                  />
                </div>

                <ButtonDemo title="Upload New Photo" />
              </div>

              <form className=" flex flex-col  gap-2 mt-2 w-full">
                <div className="flex gap-1 ">
                  <label className="w-25">Full Name:</label>
                  <input
                    placeholder="Inter New Name"
                    className="border focus:outline-none focus-ring-0 py-1 px-3 flex-1"
                  />
                </div>

                <div className="flex gap-1 ">
                  <label className="w-25">UserName:</label>
                  <input
                    placeholder="Inter New UserName"
                    className="border focus:outline-none focus-ring-0 py-1 px-3 flex-1"
                  />
                </div>

                <div className="flex gap-1 ">
                  <label className="w-25">Your Bio:</label>
                  <input
                    placeholder="Inter New Bio"
                    className="border focus:outline-none focus-ring-0 py-1 px-3 flex-1"
                  />
                </div>

                <div className="w-full flex justify-center">
                  <ButtonDemo title="Save Changes" />
                </div>
              </form>
            </div>

            <div className="bg-gray-950 p-4 mt-2 ">
              <h1>Perferences</h1>

              <div className="mt-5">
                <div className="flex justify-around items-center space-x-2 py-3 border-t border-b">
                  <Label htmlFor="airplane-mode">Email Notification</Label>
                  <Switch id="airplane-mode" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-8">
            <div className="bg-gray-950 p-4 col-span-8">
              <h1 className="w-fit">Account Setting</h1>
              <form className=" flex flex-col  gap-2 mt-5 w-full">
                <div className="flex gap-1 ">
                  <label className="w-25">Email Address:</label>
                  <input
                    placeholder="ahmed@example.com"
                    className="border focus:outline-none focus-ring-0 py-1 px-3 flex-1"
                  />
                </div>

                <div className="flex gap-1 ">
                  <label className="w-25">UserName:</label>
                  <div className="flex flex-col gap-2 flex-1">
                    <input
                      placeholder="Current Password"
                      className="border focus:outline-none focus-ring-0 py-1 px-3 flex-1"
                    />
                    <input
                      placeholder="New Password"
                      className="border focus:outline-none focus-ring-0 py-1 px-3 flex-1"
                    />
                    <input
                      placeholder="Confirm New Password"
                      className="border focus:outline-none focus-ring-0 py-1 px-3 flex-1"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="grid grid-cols-8 gap-1">
              <div className=" bg-gray-950 p-4 col-span-4 mt-2">
                <h1>Perferences</h1>

                <div className="mt-5  ">
                  <div className="flex justify-around items-center space-x-2 py-3 border-t border-b">
                    <Label htmlFor="airplane-mode">Email Notification</Label>
                    <Switch id="airplane-mode" />
                  </div>

                  <div className="flex justify-center mt-2">
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select your Language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Language vailabel</SelectLabel>
                          <SelectItem value="apple">Arabic</SelectItem>
                          <SelectItem value="banana">English</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="bg-gray-950 p-4 col-span-4 mt-2">
                <h1>Security</h1>

                <div>
                  <div className="flex justify-around items-center space-x-2 py-3 border-t border-b">
                    <Label htmlFor="airplane-mode">
                      Tow-Factor Authentication
                    </Label>
                    <Switch id="airplane-mode" />
                  </div>

                  <div className="w-full flex justify-center mt-2">
                    <ButtonDemo title="Manage Sessions" />
                  </div>
                </div>
              </div>
            </div>


            <div className="bg-gray-950 mt-2 ">
          <h1>Danger Zone</h1>

          <div className="flex justify-around items-center space-x-2 py-3 border-t border-b">
            <ButtonDemo title="LogOut" />
            <ButtonDemo title="Delete Account" />
          </div>

          <p className="text-[10px] text-gray-500">permanetly remove your account.</p>
        </div>
          </div>
        </div>
      </section>
    </>
  );
}
