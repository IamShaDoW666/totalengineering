import { ImagesIcon, LayoutGrid, Package } from "lucide-react";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <aside className="w-64 bg-background shadow-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
      </div>
      <nav className="mt-4">
        <Link href={"/admin/categories"}>
          <span className="flex items-center px-4 py-2 text-foreground hover:bg-secondary">
            <LayoutGrid className="mr-2" size={20} />
            Categories
          </span>
        </Link>
        <Link href={"/admin/products"}>
          <span className="flex items-center px-4 py-2 text-foreground hover:bg-secondary">
            <Package className="mr-2" size={20} />
            Products
          </span>
        </Link>
        <Link href={"/admin/slider"}>
          <span className="flex items-center px-4 py-2 text-foreground hover:bg-secondary">
            <ImagesIcon className="mr-2" size={20} />
            Slider
          </span>
        </Link>
      </nav>
    </aside>
  );
};

export default SideBar;
