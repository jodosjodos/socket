import { useState } from "react";
import { ButtonGroup, Button, IconButton } from "@material-tailwind/react";
import { FunnelIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import AccountsTable from "@/components/home/AccountsTable";
import TradesTable from "@/components/home/TradesTable";
import HistoryTable from "@/components/home/HistoryTable";
export function Home() {
  const [buttonState, setButtonState] = useState("accounts");
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <div className="flex justify-between gap-2">
        <ButtonGroup color="green">
          <Button onClick={() => setButtonState("accounts")}>Accounts</Button>
          <Button onClick={() => setButtonState("trades")}>Trades</Button>
          <Button onClick={() => setButtonState("history")}>History</Button>
        </ButtonGroup>
        <div className="flex gap-2">
          <IconButton
            size="md"
            color="blue"
            className="flex items-center gap-2"
          >
            <FunnelIcon color="white" className="h-5 w-5 text-inherit" />
          </IconButton>
          <IconButton
            size="md"
            color="blue"
            className="flex items-center gap-2"
          >
            <EyeSlashIcon color="white" className="h-5 w-5 text-inherit" />
          </IconButton>
        </div>
      </div>
      {buttonState === "accounts" ? (
        <AccountsTable />
      ) : buttonState === "trades" ? (
        <TradesTable />
      ) : (
        <HistoryTable />
      )}
    </div>
  );
}

export default Home;
