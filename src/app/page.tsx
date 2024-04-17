import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/77962b11-b879-4a7a-aa7f-fe4ee7d04bcb-b2qhj9.png",
  "https://utfs.io/f/4e46e037-1f59-4456-9385-97a1a97a4f11-eej4h6.png",
  "https://utfs.io/f/b8c5b07c-7a4b-4a46-b2a5-ea77e8476819-atzoa0.jpg",
  "https://utfs.io/f/4f709370-8978-4c51-a0d3-372cd6f8253a-gxeaks.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url: url,
}));

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
