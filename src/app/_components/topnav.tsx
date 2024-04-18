"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

const TopNav = () => {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b bg-gray-800 p-4 text-xl font-semibold text-white">
      <div className="">T3 Gallery</div>

      <div className="flex space-x-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              //resim eklediğimizde sayfayı yenilemesini sağlıyoruz.
              router.refresh();
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default TopNav;
