import { Link, Image } from "@heroui/react";
import { navbarData,socialLinks } from "../utils/data";

export default function Footer() {
    return (
        <footer >
            <div className="max-w-7xl mx-auto p-6 mt-4 flex flex-col items-center justify-center gap-4">
                {/* logo */}
                <div className="flex gap-2">
                    <Image src="/logo.webp" className="w-24 h-2w-24" alt="logo" />
                </div>
                {/* items */}
                <div className="">
                    {/* socials items */}
                    <div className="flex flex-col items-center justify-center gap-2">
                        <ul className="flex flex-wrap gap-4 ">
                            {
                                socialLinks.map((item) => (
                                    <li key={item.title}>
                                        <Link className="font-normal text-gray-400 hover:text-primary-400 w-full" href={item.href}>{item.title}</Link>
                                    </li>
                                ))
                            }    
                        </ul>
                    </div>
                </div>
                {/* copy */}
                <p className="text-center text-gray-400 text-sm border-t border-gray-300 w-full py-4">
                    Cúcuta, Norte de Santander, Colombia <br />
                    Av. Libertadores, bahía Torres del Parque, Local C1 <br />
                    <span className="text-xs"> &copy; {new Date().getFullYear()} Angela Villamizar </span> 
                </p>
            </div>
        </footer>
    )
}