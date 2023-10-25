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
  EllipsisVerticalIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { historyTableData } from "@/data";
import { useState } from "react";

export function HistoryTable() {
  const [pageNumber, setPageNumber] = useState(1);
  const historyPerPage = 5;
  const pagesVisited = (pageNumber - 1) * historyPerPage;

  const pageCount = Math.ceil(historyTableData.length / historyPerPage);

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

  const displayData = historyTableData
    .slice(pagesVisited, pagesVisited + historyPerPage)
    .map(
      (
        {
          id,
          ticket,
          account,
          opentime,
          symbol,
          type,
          lots,
          openprice,
          sl,
          tp,
          closetime,
          closeprice,
          com,
          swap,
          profit,
        },
        key
      ) => {
        const className = `py-3 px-2 ${
          key === historyTableData.length - 1
            ? ""
            : "border-b border-blue-gray-50"
        }`;

        return (
          <tr key={key}>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {id}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                {ticket}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {account}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {opentime}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {symbol}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {type}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {lots}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {openprice}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {sl}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {tp}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {closetime}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {closeprice}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {com}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {swap}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {profit}
              </Typography>
            </td>
            {/* <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                {job[0]}
              </Typography>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {job[1]}
              </Typography>
            </td>
            <td className={className}>
              <Chip
                variant="gradient"
                color={online ? "green" : "blue-gray"}
                value={online ? "online" : "offline"}
                className="py-0.5 px-2 text-[11px] font-medium"
              />
            </td>
            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                {date}
              </Typography>
            </td>
            <td className={className}>
              <Typography
                as="a"
                href="#"
                className="text-xs font-semibold text-blue-gray-600"
              >
                Edit
              </Typography>
            </td> */}
          </tr>
        );
      }
    );
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            History
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[
                  "ID",
                  "Ticket",
                  "Account",
                  "Open Time",
                  "Symbol",
                  "Type",
                  "Lots",
                  "Open Price",
                  "SL",
                  "TP",
                  "Close Time",
                  "Close Price",
                  "Com",
                  "Swap",
                  "Profit",
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

export default HistoryTable;
