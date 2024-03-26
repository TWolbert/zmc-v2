import Link from "next/link";
import { SlashLg } from "react-bootstrap-icons";
import fh5logo from "@/public/fh5-logo.png";
import thefinals from "@/public/thefinals.png";
import cs2logo from "@/public/cs2logo.png";
import Image from "next/image";

export function Navbar() {
    return (
        <div className="fixed w-full flex gap-2 py-2 px-2 xl:px-[10%] border-b-2 border-text-500 shadow-xl backdrop-blur-md bg-zinc-900/10 items-center justify-between z-50">
            <Link
                href={"/"}
                className="text-3xl p-2 border-b border-transparent hover:border-accent-500 transition-all"
            >
                ZMC
            </Link>
            <div className="flex gap-2 items-center">
                <Link
                    href={"/forza"}
                    className="text-3xl p-2 border-b border-transparent hover:border-accent-500 transition-all flex font-bold gap-2"
                >
                    <Image
                        src={fh5logo}
                        className="h-10 w-fit object-contain invert"
                        alt="FH5 Logo"
                    />
                    <p className=" hidden md:block">Forza</p>
                </Link>
                <SlashLg className="text-3xl text-primary-500" />
                <Link
                    href={"/finals"}
                    className="text-3xl p-2 border-b border-transparent hover:border-accent-500 transition-all flex font-bold gap-2"
                >
                    <Image
                        src={thefinals}
                        className="h-10 w-fit object-contain aspect-square"
                        alt="The Finals"
                    />
                    <p className=" hidden md:block">Finals</p>
                </Link>
                <SlashLg className="text-3xl text-primary-500" />
                <Link
                    href={"/cs2"}
                    className="text-3xl p-2 border-b border-transparent hover:border-accent-500 transition-all flex font-bold gap-2"
                >
                    <Image
                        src={cs2logo}
                        className="h-10 w-fit object-contain aspect-square"
                        alt="CS2 Logo"
                    />
                    <p className=" hidden md:block">
                        CS2
                    </p>
                </Link>
                <SlashLg className="text-3xl text-primary-500" />
                <Link
                    href={"/auth/login"}
                    className="text-xl flex items-center justify-center px-3 py-2 transition-all bg-text-950 text-background-100 rounded-xl font-bold border-2 border-transparent hover:border-accent-500"
                >
                    Login
                </Link>
            </div>
        </div>
    );
}
