"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="fixed left-0 top-0 flex h-screen w-screen bg-black bg-opacity-5 text-white"
      onClick={onDismiss}
    >
      {children}
      {/* <button onClick={onDismiss} className="close-button">
          Close
        </button> */}
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
