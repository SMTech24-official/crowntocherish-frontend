import Image from "next/image";
import logo from "@/assets/logo/logo.jpeg"
const Logo = () => {
    return (
        <div>
            <Image src={logo} alt="Company Logo" width={100} height={80}/>
        </div>
    );
};

export default Logo;