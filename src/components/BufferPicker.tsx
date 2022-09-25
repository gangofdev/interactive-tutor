import { RadioGroup } from "@headlessui/react";

interface BufferPickerInterface {
  buffers: Array<string>;
  onBufferChange: (buffer: string) => void;
  currentBuffer: string;
}

const BufferPicker = ({
  buffers,
  onBufferChange,
  currentBuffer,
}: BufferPickerInterface) => {
  return (
    <RadioGroup value={currentBuffer} onChange={onBufferChange}>
      <RadioGroup.Label className="sr-only">buffer:</RadioGroup.Label>
      <div className="flex flex-row justify-start">
        {buffers.map((buffer) => (
          <RadioGroup.Option
            key={buffer}
            value={buffer}
            className={({ active, checked }) =>
              `${
                checked ? "bg-sky-900 bg-opacity-75 text-white border-b-2" : ""
              } relative flex cursor-pointer px-4 py-2 outline-none`
            }
          >
            {buffer}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};
export default BufferPicker;
