"use client";

import { useState } from "react";
import { Button } from "rizzui/button";
import { Input } from "rizzui/input";
import { Modal } from "rizzui/modal";
import { MultiSelect } from "rizzui/multi-select";
import { NumberInput } from "rizzui/number-input";
import { Password } from "rizzui/password";
import { Select } from "rizzui/select";
import { Textarea } from "rizzui/textarea";
import { FileInput } from "rizzui/upload";

export default function Page() {
  const [modalState, setModalState] = useState(false);
  return (
    <div>
      <Button onClick={() => setModalState(true)}>Open Modal</Button>
      <Modal
        isOpen={modalState}
        onClose={() => setModalState(false)}
        // customSize={500}
        // rounded="xl"
        // size="full"
      >
        <div className="py-4 px-5 min-h-[400px] space-y-4">
          <Input label="Hello" isRequired />
          <Password label="Password" isRequired />
          <Textarea label="Message" isRequired />
          <Select options={[]} label="Select Category" isRequired />
          <MultiSelect options={[]} label="Select Tags" isRequired />
          <NumberInput
            formatType="numeric"
            placeholder="Type your number"
            customInput={Input as React.ComponentType<unknown>}
            {...{ label: "Number Input", isRequired: true }}
          />
          <FileInput label="Upload Logo" isRequired />
        </div>
      </Modal>
    </div>
  );
}
