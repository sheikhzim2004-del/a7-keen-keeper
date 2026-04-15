
import Homepage from "../pages/homepage/Homepage";
import FriendDetails from "../pages/frienddetails/FriendDetails";
import MainLayout from "../layouts/MainLayout";
import Stats from "../pages/stats/Stats";
import Timeline from "../pages/timeline/Timeline";
import { createBrowserRouter } from "react-router";


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
        path: 'frienddetails',
        element: <FriendDetails></FriendDetails>
      },
      {
        path: 'stats',
        element: <Stats></Stats>
      },
      {
        path: 'timeline',
        element: <Timeline></Timeline>
      },
    ]
  },
])