import ErrorPage from "@/components/error/ErrorPage";
import AgentLayout from "@/layout/AgentLayout";
import ClubLayout from "@/layout/ClubLayout";
import MainLayout from "@/layout/MainLayout";
import PlayerLayout from "@/layout/PlayerLayout";
import PlayerDHome from "@/main/player/dashboard/home/PlayerDHome";
import { createBrowserRouter } from "react-router";

export const Routes = createBrowserRouter([
    {
        path: "/" ,
        element: <MainLayout />, 
        errorElement: <ErrorPage />,
        children: [
            {
                path: "player/dashboard",
                element: <PlayerLayout />,
                children : [
                    {
                        index: true ,
                        element : <PlayerDHome />
                    }
                ]
            },
            {
                path: "club/dashboard" ,
                element: <ClubLayout />
            }, 
            {
                path: "agent/dashboard" ,
                element: <AgentLayout />
            }
        ]

    }
])