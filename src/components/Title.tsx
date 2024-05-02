import ToothIcon from "./icons/Tooth"
export default function Title({ children, className = '', color = 'primary' }: any) {
    return (
        <div className={`flex flex-col items-center justify-center my-8 text-${color}-400 ${className}`}>
            <h1 className="font-bold">
                {children}
            </h1>
            <footer className={`text-${color}-400 flex items-center justify-center gap-4 w-full mt-2`}>
                <div className={`flex-1 h-1 w-full ${ color === "white"? "bg-white":`bg-${color}-400`} mt-2`}/>
                <ToothIcon/>
                <div className={`flex-1 h-1 w-full ${ color === "white"? "bg-white":`bg-${color}-400`} mt-2`}/>
            </footer>     
        </div>
    )
}