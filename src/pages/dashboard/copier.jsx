import { useState } from "react";
import {
  Button,
  Radio,
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import {
  UserPlusIcon,
  BuildingLibraryIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import TradeCopierTable from "@/components/config/TradeCopier";
export function Copier() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <div className="flex justify-between px-10">
        <Button
          size="md"
          color="blue"
          className="flex items-center justify-center gap-2"
          onClick={handleOpen}
          variant="gradient"
        >
          <PlusCircleIcon color="white" className="h-5 w-5 text-inherit" />
          <div>Create</div>
        </Button>
      </div>
      <TradeCopierTable />
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Create New Trade Copier</DialogHeader>
        <DialogBody className="grid grid-cols-1 divide-y">
          <div className="grid grid-cols-4 gap-4 p-3">
            <div className="m-auto font-bold">Copy From</div>
            <div className="col-span-3 flex w-72 flex-col ">
              <Select color="blue" label="Provider">
                <Option>Demo Account</Option>
                <Option>Signals</Option>
                <Option>Trading Network Club</Option>
                <Option>My accounts</Option>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 p-3">
            <div className="m-auto font-bold">Send To</div>
            <div className="col-span-3 flex w-72 flex-col ">
              <Select color="blue" label="Copier">
                <Option>Demo Account</Option>
                <Option>Signals</Option>
                <Option>Trading Network Club</Option>
                <Option>My accounts</Option>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 p-3">
            <div className="m-auto font-bold">Risk Type</div>
            <div className="col-span-3 flex w-72 flex-col ">
              <Select color="blue" label="Copier">
                <Option>Risk multiplier by balance</Option>
                <Option>Risk multiplier by equity</Option>
                <Option>Lot Multiplierffffffffffff</Option>
                <Option>Fixed lot</Option>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 p-3">
            <div className="m-auto font-bold">Multiplier</div>
            <div className="col-span-3 flex w-72 flex-col ">
              <Input label="Multiplier" color="blue" type="number" />
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default Copier;
