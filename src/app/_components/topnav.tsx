import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const TopNav = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b bg-gray-800 p-4 text-xl font-semibold text-white">
      <div className="">T3 Gallery</div>

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default TopNav;
