"use client";

import { useState } from "react";
import { Button } from "rizzui/button";
import { Modal } from "rizzui/modal";

export default function Page() {
  const [modalState, setModalState] = useState(false);
  return (
    <div>
      <Button onClick={() => setModalState(true)}>Open Modal</Button>
      <Modal
        isOpen={modalState}
        onClose={() => setModalState(false)}
        // customSize="384px"
      >
        <div className="py-4 px-5 min-h-[400px]">Default Modal</div>
      </Modal>
    </div>
  );
}
