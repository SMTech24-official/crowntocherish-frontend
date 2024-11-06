import Image from "next/image";
import logo from "@/assets/logo/logo.jpeg"
import Link from "next/link";
const Logo = () => {
    return (
        <Link href={"/"}>
            <div className="w-24 h-24 ">
                <Image src={logo} alt="Company Logo" objectFit="fit" />
            </div>
        </Link>

    );
};

export default Logo;