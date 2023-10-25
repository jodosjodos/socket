import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  WifiIcon,
  Cog8ToothIcon,
  ListBulletIcon,
  TrashIcon,
  SignalSlashIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import manageAccountData from "@/data/manage-account-data";
import { useState } from "react";

export function ManageAccount() {
  const [pageNumber, setPageNumber] = useState(1);
  const accountsPerPage = 5;
  const pagesVisited = (pageNumber - 1) * accountsPerPage;

  const pageCount = Math.ceil(manageAccountData.length / accountsPerPage);

  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };

  const getItemProps = (index) => ({
    variant: pageNumber === index ? "filled" : "text",
    color: "gray",
    onClick: () => setPageNumber(index),
    className: "rounded-full",
  });

  const next = () => {
    if (pageNumber === pageCount) return;

    setPageNumber(pageNumber + 1);
  };

  const prev = () => {
    if (pageNumber === 1) return;

    setPageNumber(pageNumber - 1);
  };

  const displayData = manageAccountData
    .slice(pagesVisited, pagesVisited + accountsPerPage)
    .map(
      (
        {
          id,
          mt,
          name,
          account,
          equity_protection,
          equity_monitors_active,
          active_total_symbols,
        },
        key
      ) => {
        const className = `py-3 px-5 ${
          key === manageAccountData.length - 1
            ? ""
            : "border-b border-blue-gray-50"
        }`;
        return (
          <tr key={key}>
            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                <SignalSlashIcon
                  strokeWidth={2}
                  className="h-4 w-4"
                  color="red"
                />
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                {id}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                {mt}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {name}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {account}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                <a href="#buttons-with-link">
                  <Button color="blue" className="p-1 font-thin">
                    {equity_protection}
                  </Button>
                </a>
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {equity_monitors_active}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {active_total_symbols}
              </Typography>
            </td>
            <td className={className}>
              <div className="flex gap-1">
                <IconButton color="blue" className="h-8 w-8">
                  <WifiIcon strokeWidth={2} className="h-4 w-4" />
                </IconButton>
                <IconButton color="red" className="h-8 w-8">
                  <Cog8ToothIcon strokeWidth={2} className="h-4 w-4" />
                </IconButton>
                <IconButton color="green" className="h-8 w-8">
                  <ListBulletIcon strokeWidth={2} className="h-4 w-4" />
                </IconButton>
                <IconButton color="amber" className="h-8 w-8">
                  <TrashIcon strokeWidth={2} className="h-4 w-4" />
                </IconButton>
              </div>
            </td>
          </tr>
        );
      }
    );
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Accounts
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[
                  " ",
                  "ID",
                  "MT",
                  "Name",
                  "Account",
                  "Equity Protection",
                  "Equity Monitors Active",
                  "Active / Total Symbols",
                  " ",
                ].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{displayData}</tbody>
          </table>
        </CardBody>
      </Card>
      <div className="flex items-center justify-center gap-4">
        <Button
          variant="text"
          className="flex items-center gap-2 rounded-full"
          onClick={prev}
          disabled={pageNumber === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>
        <div className="flex items-center gap-2">
          {Array.from({ length: pageCount }, (_, i) => (
            <IconButton {...getItemProps(i + 1)} key={`page-button-${i}`}>
              {i + 1}
            </IconButton>
          ))}
        </div>

        <Button
          variant="text"
          className="flex items-center gap-2 rounded-full"
          onClick={next}
          disabled={pageNumber === pageCount}
        >
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default ManageAccount;
