import ToothIcon from "./icons/Tooth"
export default function Title({ children, className = '' }: any) {
    return (
        <div className={`flex flex-col items-center justify-center my-8 ${className}`}>
            <h1 className="font-bold">
                {children}
            </h1>
            <footer className="text-primary-400 flex items-center justify-center gap-4 w-full mt-2">
                <div className="flex-1 h-1 w-full bg-primary-400 mt-2"/>
                <ToothIcon/>
                <div className="flex-1 h-1 w-full bg-primary-400 mt-2"/>
            </footer>     
        </div>
    )
}