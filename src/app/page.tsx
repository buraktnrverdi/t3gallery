import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  if (!images) return null;

  return (
    <div className="flex items-center justify-center">
      {images.map((image) => (
        <>
          <div key={image.id} className="w-48 self-center">
            <img src={image.url} alt="image" />
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
