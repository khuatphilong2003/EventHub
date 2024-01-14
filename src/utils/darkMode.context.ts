import { Context,createContext } from "react";

type DarkModecontextValue = {
    isDarkMode:boolean;
    useDeviceSettings: boolean;
    setIsDarkMode: (prev:boolean) =>void;
    setUseDeviceSettings: (prev:boolean) =>void
}

const DarkMode: Context<DarkModecontextValue> = createContext<DarkModecontextValue>({
    isDarkMode: false,
    setIsDarkMode:()=>{},
    setUseDeviceSettings:()=>{},
    useDeviceSettings:false
})

export default DarkMode