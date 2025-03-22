
import Image from "next/image";
import Link from "next/link";

import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/">
            <Image src="/images/logo.svg" alt={`${APP_NAME} logo`} width={48} height={48} priority={true} />
          </Link>
          <span className="hidden lg:block font-bold text-2xl ml-3">{APP_NAME}</span>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
