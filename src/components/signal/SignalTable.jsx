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
  Cog8ToothIcon,
  TrashIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import signalData from "@/data/signal-table-data";
import { useState } from "react";

export function SignalTable() {
  const [pageNumber, setPageNumber] = useState(1);
  const accountsPerPage = 5;
  const pagesVisited = (pageNumber - 1) * accountsPerPage;

  const pageCount = Math.ceil(signalData.length / accountsPerPage);

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

  const displayData = signalData
    .slice(pagesVisited, pagesVisited + accountsPerPage)
    .map(
      (
        {
          signal,
          provider_name,
          email_alerts,
          trade_copier,
          access_terms,
          expires,
        },
        key
      ) => {
        const className = `py-3 px-5 ${
          key === signalData.length - 1 ? "" : "border-b border-blue-gray-50"
        }`;
        return (
          <tr key={key}>
            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                {signal}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                {provider_name}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {email_alerts ? (
                  <CheckCircleIcon color="green" className="h-5 w-5" />
                ) : (
                  <XCircleIcon color="red" className="h-5 w-5" />
                )}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {trade_copier ? (
                  <CheckCircleIcon color="green" className="h-5 w-5" />
                ) : (
                  <XCircleIcon color="red" className="h-5 w-5" />
                )}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {access_terms}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {expires ? (
                  <CheckCircleIcon color="green" className="h-5 w-5" />
                ) : (
                  <XCircleIcon color="red" className="h-5 w-5" />
                )}
              </Typography>
            </td>
            <td className={className}>
              <div className="flex gap-1">
                <IconButton color="red" className="h-8 w-8">
                  <Cog8ToothIcon className="h-4 w-4" />
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
                  "Signal",
                  "Provider Name",
                  "Email Alerts",
                  "Trade Copier",
                  "Access Terms",
                  "Expires",
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

export default SignalTable;
