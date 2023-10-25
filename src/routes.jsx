import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
  UserPlusIcon,
  MagnifyingGlassIcon,
  UsersIcon,
  ShareIcon,
  EnvelopeIcon,
  ArrowRightIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/solid";
import {
  Home,
  Profile,
  Tables,
  Notifications,
  Accounts,
  Signals,
  Copier,
} from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      // {
      //   icon: <HomeIcon {...icon} />,
      //   name: "dashboard",
      //   path: "/home",
      //   element: <Home />,
      // },
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: "profile",
      //   path: "/profile",
      //   element: <Profile />,
      // },
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "tables",
      //   path: "/tables",
      //   element: <Tables />,
      // },
      // {
      //   icon: <BellIcon {...icon} />,
      //   name: "notifactions",
      //   path: "/notifactions",
      //   element: <Notifications />,
      // },
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <ChartBarSquareIcon {...icon} />,
        name: "signals",
        path: "/signals",
        element: <Signals />,
      },

      // {
      //   icon: <Cog6ToothIcon {...icon} />,
      //   name: "configuration",
      //   path: "/configuration",
      //   element: <Notifications />,
      // },
      {
        icon: <UsersIcon {...icon} />,
        name: "accounts",
        path: "/accounts",
        element: <Accounts />,
      },
      {
        icon: <ShareIcon {...icon} />,
        name: "trade copier",
        path: "/trade copier",
        element: <Copier />,
      },
      {
        icon: <EnvelopeIcon {...icon} />,
        name: "email alerts",
        path: "/email alerts",
        element: <Tables />,
      },
      {
        icon: <ArrowRightIcon {...icon} />,
        name: "signal followers",
        path: "/signal followers",
        element: <Tables />,
      },
      {
        icon: <ArrowsRightLeftIcon {...icon} />,
        name: "signal provider",
        path: "/signal provider",
        element: <Tables />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
