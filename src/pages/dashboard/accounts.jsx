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
import { UserPlusIcon, BuildingLibraryIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import ManageAccount from "@/components/config/ManageAccount";
export function Accounts() {
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
          <UserPlusIcon color="white" className="h-5 w-5 text-inherit" />
          <div>Add</div>
        </Button>
        <Button
          size="md"
          color="blue"
          className="flex items-center justify-center gap-2"
        >
          <BuildingLibraryIcon color="white" className="h-5 w-5 text-inherit" />
          <div>HOST</div>
        </Button>
      </div>
      <ManageAccount />
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Add Account</DialogHeader>
        <DialogBody className="grid grid-cols-1 divide-y">
          <div className="grid grid-cols-4 gap-4 p-3">
            <div className="m-auto font-bold">Account Type</div>
            <div className="col-span-3 flex flex-col gap-4">
              <Radio
                name="type"
                label="Metatrader 4(MT4)"
                color="blue"
                defaultChecked
              />
              <Radio name="type" label="Metatrader 5(MT5)" color="green" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 p-3">
            <div className="m-auto font-bold">Descriptive Name</div>
            <div className="col-span-3 flex w-72 flex-col ">
              <Input label="Name" color="blue" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 p-3">
            <div className="m-auto font-bold">Account Number</div>
            <div className="col-span-3 flex w-72 flex-col ">
              <Input label="Account Number" color="blue" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 p-3">
            <div className="m-auto font-bold">Password</div>
            <div className="col-span-3 flex w-72 flex-col ">
              <Input label="Password" color="blue" type="password" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 p-3">
            <div className="m-auto font-bold">Broker Name</div>
            <div className="col-span-3 flex w-72 flex-col ">
              <Select color="blue" label="Select Version">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
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

export default Accounts;
