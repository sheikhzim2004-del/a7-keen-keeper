import { createBrowserRouter } from "react-router";
import Homepage from "../pages/homepage/Homepage";
import FriendDetails from "../pages/frienddetails/FriendDetails";
import Stats from "../pages/stats/Stats";
import MainLayout from "../layouts/MainLayout";
import Timeline from "../pages/timeline/Timeline";


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
      {
        path: ''
      }
    ]
  },
])