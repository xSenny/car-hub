import Link from "next/link";
import Image from "next/image";
import {CustomButton} from "@/components/index";

const Navbar = () => {
    return (
        <header className={"w-full absolute z-10"}>
            <nav className={"max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-6"}>
                <Link href={'/'} className={"flex justify-center items-center"}>
                    <Image src={'/logo.svg'} alt={"Car hub logo"} width={130} height={18} className={"object-container"}/>
                </Link>

            </nav>
        </header>
    )
}

export default Navbar;