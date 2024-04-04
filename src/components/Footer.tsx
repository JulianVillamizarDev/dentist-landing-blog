import { Link, Image } from "@nextui-org/react";
import { navbarData,socialLinks } from "../utils/data";

export default function Footer() {
    return (
        <footer >
            <div className="max-w-7xl mx-auto p-6 mt-4 grid grid-cols-2 gap-4">
                {/* logo */}
                <div className="flex gap-2">
                    <Image src="/logo-2.webp" className="w-8 h-8" alt="logo" />
                    <span>Angela Villamizar</span>
                </div>
                {/* items */}
                <div className="grid lg:grid-cols-2 gap-4 lg:gap-0">
                    {/* nav items */}
                    <div className="flex flex-col gap-2">
                        <h1 className="text-lg font-medium">Paginas</h1>
                        <ul>
                            {
                                navbarData.map((item) => (
                                    <li key={item.title}>
                                        <Link className="font-normal text-gray-400 hover:text-primary-400 w-full" href={item.href}>{item.title}</Link>
                                    </li>
                                ))
                            }    
                        </ul>
                    </div>  
                    {/* socials items */}
                    <div className="flex flex-col gap-2">
                        <h1 className="text-lg font-medium">Encuentranos</h1>
                        <ul>
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
                <div className="col-span-2 py-4 flex items-center justify-center border-t border-gray-200">
                    <p className="text-gray-400 text-sm"> &copy; {new Date().getFullYear()} Angela Villamizar</p>
                </div>  
            </div>
        </footer>
    )
}