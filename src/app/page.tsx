import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await getMyImages();

  if (!images) return null;

  return (
    <div className="grid grid-cols-5 pl-32 pt-8">
      {[...images].map((image) => (
        <>
          <div
            key={image.id}
            className="flex h-24 w-24 flex-col justify-center self-center"
          >
            <Link href={`/photos/${image.id}`}>
              <Image
                src={image.url}
                alt={image.name}
                style={{
                  objectFit: "contain",
                }}
                width={192}
                height={192}
              />
            </Link>
          </div>
        </>
      ))}
    </div>
  );
};

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="mt-4 h-full w-full text-center text-2xl">
          Galeriye erişebilmek için giriş yapınız.
        </div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
