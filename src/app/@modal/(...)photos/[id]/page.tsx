import { getImage } from "~/server/queries";
import { Modal } from "./modal";
import { clerkClient } from "@clerk/nextjs/server";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);

  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo ID");

  const image = await getImage(idAsNumber);

  const uploader = await clerkClient.users.getUser(image.userId);

  return (
    <Modal>
      <div key={image.id} className="flex h-1/2 w-1/2">
        <div className="flex flex-shrink items-center justify-center border-r">
          <img src={image.url} className="flex-shrink object-contain" />
        </div>
        <div className="ml-2 flex flex-col items-center justify-center">
          <div className="flex-shrink-0 text-2xl">{image.name}</div>
          <div>Uploaded By: {uploader.fullName}</div>
        </div>
      </div>
    </Modal>
  );
}
