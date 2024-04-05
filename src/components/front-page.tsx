import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Github, LinkedinIcon } from "lucide-react";

export default function FrontPage() {
  return (
    <main className="mt-20">
      <h1 className="text-6xl font-bold">Tom Szpak</h1>
      <p className="mt-6 text-xl">
        Hey👋, I'm Tom. I'm a Software Developer with a focus on creating
        efficient and user-friendly applications.
      </p>
      <div className="mt-8 flex space-x-6">
        <Avatar>
          <AvatarImage
            alt="Tom Szpak"
            // src="/placeholder.svg?height=128&width=128"
          />
          <AvatarFallback>TS</AvatarFallback>
        </Avatar>
        <div className="space-y-4">
          <p>
            <a
              href="https://www.linkedin.com/in/💻tom-szpak-40a0757a"
              target="_blank"
            >
              <LinkedinIcon className="inline mr-2" /> Linkedin
            </a>
          </p>
          <p>
            <a href="https://github.com/bwSpiceBall" target="_blank">
              <Github className="inline mr-2" /> GitHub
            </a>
          </p>
        </div>
      </div>
      <p className="mt-8 text-xl">Page in progress</p>
    </main>
  );
}
