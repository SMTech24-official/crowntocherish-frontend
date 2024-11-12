import { Link2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            Admin Dash board

            <Link href={"/"}>
                <Link2 />
            </Link>

        </div>
    );
};

export default page;