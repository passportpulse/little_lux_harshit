import {
  Home,
  Bike,
  Star,
  BookOpenText ,
  Search,
  Truck,
  RotateCcw,
  ShieldCheck,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

/* ================= NAVIGATION ================= */
export const navigationLinks = [
  { id: 1, label: "Home", path: "/", icon: Home, color: "text-pink-400" },
  {
    id: 2,
    label: "Products",
    path: "/products",
    icon: Bike,
    color: "text-orange-400",
  },
  {
    id: 3,
    label: "Blog",
    path: "/blogs",
    icon: BookOpenText,
    color: "text-purple-400",
  },
  {
    id: 4,
    label: "FAQ's",
    path: "/frequently-asked-questions",
    icon: Star,
    color: "text-yellow-400",
  },
];

/* ================= SUPPORT ================= */
export const supportLinks = [
  {
    id: 1,
    label: "Track Order",
    path: "/track-order",
    icon: Search, 
    color: "text-blue-400",
  },
  {
    id: 2,
    label: "Shipping Info",
    path: "/shipping-policy",
    icon: Truck,
    color: "text-green-400",
  },
  {
    id: 3,
    label: "Return Policy",
    path: "/returns",
    icon: RotateCcw,
    color: "text-rose-400",
  },
  {
    id: 4,
    label: "Warranty",
    path: "/warranty-claim",
    icon: ShieldCheck,
    color: "text-indigo-400",
  },
];

/* ================= SOCIAL MEDIA ================= */
// Note: In newer Lucide versions, use Facebook, Instagram, Twitter
export const socialLinks = [
  {
    id: 1,
    label: "Facebook",
    url: "https://facebook.com/",
    icon: Facebook,
    bg: "hover:bg-blue-500",
    color: "text-blue-600",
  },
  {
    id: 2,
    label: "Instagram",
    url: "https://instagram.com/",
    icon: Instagram,
    bg: "hover:bg-pink-500",
    color: "text-pink-500",
  },
  {
    id: 3,
    label: "Twitter",
    url: "https://twitter.com/",
    icon: Twitter,
    bg: "hover:bg-sky-500",
    color: "text-sky-500",
  },
];
