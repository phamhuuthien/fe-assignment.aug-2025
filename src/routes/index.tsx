import HomePage from "@/pages/Home/HomePage";
import { useRoutes } from "react-router-dom";

export default function AppRoutes() {
  const routes = [
    {
      path: "*",
      element: <HomePage />,
    },
  ];

  const element = useRoutes([...routes]);
  return <>{element}</>;
}
