
import Homepage from "../pages/homepage/Homepage";
import MainLayout from "../layouts/MainLayout";
import Stats from "../pages/stats/Stats";
import { createBrowserRouter } from "react-router";
import Timeline from "../pages/timeline/Timeline";
import FriendDetails from "../pages/homepage/friendDetails/FriendDetails";
import ErrrorPage from "../errrorpage/ErrrorPage";


 export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>
      },
      {
        path: 'frienddetails/:id',
        element: <FriendDetails></FriendDetails>,
        loader: () => fetch("/friendsData.json")
      },
      {
        path: 'stats',
        element: <Stats></Stats>
      },
      {
        path: 'timeline',
        element: <Timeline></Timeline>
      },
    ],
    errorElement: <ErrrorPage></ErrrorPage>
  },
])