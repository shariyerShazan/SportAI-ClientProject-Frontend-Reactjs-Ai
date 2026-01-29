import ErrorPage from "@/components/error/ErrorPage";
import AgentLayout from "@/layout/AgentLayout";
import ClubLayout from "@/layout/ClubLayout";
import MainLayout from "@/layout/MainLayout";
import PlayerLayout from "@/layout/PlayerLayout";
import MentalHealth from "@/main/player/dashboard/home/_components/AiRecommendation/MentalHealth";
import NutritionHydrationGuidance from "@/main/player/dashboard/home/_components/AiRecommendation/NutritionHydrationGuidance";
import PriorityFocusAreas from "@/main/player/dashboard/home/_components/AiRecommendation/PriorityFocusAreas";
import SuggestedWeeklyStructure from "@/main/player/dashboard/home/_components/AiRecommendation/SuggestedWeeklyStructure";
import PlayerDHome from "@/main/player/dashboard/home/PlayerDHome";
import PlayerHelpAndSupport from "@/main/player/helpAndSupport/PlayerHelpAndSupport";
import PlayerNotifications from "@/main/player/notification/PlayerNotifications";
import PlayerData from "@/main/player/playerData/PlayerData";
import PlayerProfile from "@/main/player/profile/PlayerProfile";
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
                        path: "overview",
                        element : <PlayerDHome />
                    },
                    {
                        path: "overview/suggested-weekly-structure" ,
                        element: <SuggestedWeeklyStructure />
                    },
                    {
                        path: "overview/priority-focus-areas" ,
                        element: <PriorityFocusAreas />
                    },
                    {
                        path : "overview/nutrition-hydration-guidance",
                        element: <NutritionHydrationGuidance />
                    },
                    {
                        path: "overview/mental-health",
                        element: <MentalHealth />
                    },
                    {
                        path: "data",
                        element : <PlayerData />
                    },
                    {
                        path: "profile" ,
                        element: <PlayerProfile />
                    },
                    {
                        path: "notifications" ,
                        element: <PlayerNotifications />
                    }, 
                    {
                        path: "support" ,
                        element: <PlayerHelpAndSupport />
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