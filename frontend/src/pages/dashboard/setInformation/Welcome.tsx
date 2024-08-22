import { Button, Modal } from "antd";
import { useState } from "react";

const Welcome = ({ value }: { value: boolean }) => {
  const [open, setOpen] = useState(value);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Modal footer={[]} open={open} onCancel={handleClose}>
      <div className="flex justify-center mt-5 items-center flex-col ">
        <img className="w-[200px]" src="/images/welcome.svg" alt="welcome" />
        <h1 className="text-primary font-bold text-3xl mt-4 ">Welcome</h1>
        <p className="text-gray-500 font-thin">to bloodsbd.com</p>
        <p className="text-gray-500 font-thin">
          আপনার সহানুভূতি অনেকের জন্য আশার আলো!
        </p>
        <Button onClick={handleClose} className="mt-5" type="primary">
          Get Start
        </Button>
      </div>
    </Modal>
  );
};

export default Welcome;
