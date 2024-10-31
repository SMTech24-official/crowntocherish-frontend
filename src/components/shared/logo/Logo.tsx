import Image from "next/image";
import logo from "@/assets/logo/logo.jpeg"
const Logo = () => {
    return (
        <div className="w-20 h-20 ">
            <Image src={logo} alt="Company Logo" objectFit="fit"/>
        </div>
    );
};

export default Logo;