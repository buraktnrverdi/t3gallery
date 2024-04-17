import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
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
    </main>
  );
}
