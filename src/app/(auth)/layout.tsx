import { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

interface Props {
    children?: ReactNode;
}

export default function AuthLayout({ children }: Props): React.ReactNode {
    return (
        <div className="bg-gray-100 w-screen h-screen flex items-center justify-center">
            {children}
        </div>
    );
}
