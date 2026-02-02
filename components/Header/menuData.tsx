import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Users & Members",
        newTab: false,
        path: "/features/users",
      },
      {
        id: 22,
        title: "Clubs & Communities",
        newTab: false,
        path: "/features/clubs",
      },
      {
        id: 23,
        title: "Pros & Coaches",
        newTab: false,
        path: "/features/pros",
      },
      {
        id: 24,
        title: "Creators & Influencers",
        newTab: false,
        path: "/features/creators",
      },
      {
        id: 25,
        title: "Brands & Small Businesses",
        newTab: false,
        path: "/features/brands",
      },
    ],
  },
  {
    id: 3,
    title: "Support",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
