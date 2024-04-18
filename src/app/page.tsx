import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  if (!images) return null;

  return (
    <div className="flex flex-wrap gap-4 p-8">
      {images.map((image, index) => (
        <>
          <div key={image.id}>{image.name}</div>
          <div key={image.id + "-" + index} className="w-48 self-center">
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
