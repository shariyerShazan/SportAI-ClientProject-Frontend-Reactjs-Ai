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
                    },
                    {
                        path: "suggested-weekly-structure" ,
                        element: <SuggestedWeeklyStructure />
                    },
                    {
                        path: "priority-focus-areas" ,
                        element: <PriorityFocusAreas />
                    },
                    {
                        path : "nutrition-hydration-guidance",
                        element: <NutritionHydrationGuidance />
                    },
                    {
                        path: "mental-health",
                        element: <MentalHealth />
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