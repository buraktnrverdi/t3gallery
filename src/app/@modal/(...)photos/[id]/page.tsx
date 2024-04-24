import { getImage } from "~/server/queries";
import { Modal } from "./modal";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);

  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo ID");

  const image = await getImage(idAsNumber);

  return (
    <Modal>
      <div key={image.id} className="flex w-full">
        <img
          src={image.url}
          className="flex flex-shrink items-center justify-center border-r"
        />
        <h1 className="ml-2 flex-shrink-0 self-center text-2xl">
          {image.name}
        </h1>
      </div>
    </Modal>
  );
}
