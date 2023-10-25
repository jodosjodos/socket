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
  ChartBarSquareIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { accountsTableData, projectsTableData } from "@/data";
import ReactPaginate from "react-paginate";
import { useState } from "react";

export function AccountsTable() {
  const [pageNumber, setPageNumber] = useState(1);
  const accountsPerPage = 5;
  const pagesVisited = (pageNumber - 1) * accountsPerPage;

  const pageCount = Math.ceil(accountsTableData.length / accountsPerPage);

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

  const displayData = accountsTableData
    .slice(pagesVisited, pagesVisited + accountsPerPage)
    .map(
      (
        {
          account,
          mt,
          balance,
          equity,
          equity_percent,
          open_traders,
          pending,
          day,
          week,
          month,
          total,
        },
        key
      ) => {
        const className = `py-3 px-5 ${
          key === accountsTableData.length - 1
            ? ""
            : "border-b border-blue-gray-50"
        }`;

        return (
          <tr key={key}>
            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                <WifiIcon strokeWidth={2} className="h-4 w-4" color="green" />
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                {account}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                {mt}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {balance}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {equity}
              </Typography>
            </td>
            <td className={className}>
              <Typography
                className="text-xs font-normal"
                color={
                  equity_percent < 50
                    ? "red"
                    : equity_percent < 90
                    ? "purple"
                    : equity_percent < 100
                    ? "blue"
                    : "green"
                }
              >
                {equity_percent}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {open_traders}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {pending}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {day}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {week}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {month}
              </Typography>
            </td>
            <td className={className}>
              <Typography className="text-xs font-normal text-blue-gray-500">
                {total}
              </Typography>
            </td>
            <td className={className}>
              <IconButton color="blue" className="h-8 w-8">
                <ChartBarSquareIcon strokeWidth={2} className="h-4 w-4" />
              </IconButton>
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
                  "",
                  "Account",
                  "MT",
                  "Balance",
                  "Equity",
                  "Equity %",
                  "Open Trades(Lots)",
                  "Pending",
                  "Day",
                  "Week",
                  "Month",
                  "Total",
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

export default AccountsTable;
