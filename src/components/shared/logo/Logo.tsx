import Image from "next/image";
import logo from "@/assets/logo/logo.jpeg"
import Link from "next/link";
const Logo = () => {
    return (
        <Link href={"/"}>
            <div className="w-24 h-24 rounded-md">
                <Image src={logo} alt="Company Logo" objectFit="fit" className="rounded-md inset-5" />
            </div>
        </Link>

    );
};

export default Logo;