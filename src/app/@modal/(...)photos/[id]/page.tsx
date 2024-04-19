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
      <div key={image.id} className="flex items-center justify-center">
        <img src={image.url} className="h-48 w-48" />
      </div>
    </Modal>
  );
}
