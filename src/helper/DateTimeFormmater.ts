import { number } from "yup";

export const getDateToday = () => {
    return new Date().toISOString().slice(0, 10);
}

interface props {
    year?: number;
    month?: number;
    date?: number;
}
export const getDateTodayWithArgs = ({year=0, month=0, date=0}:props ) => {
        const dateObj = new Date();
        const dd = String(dateObj.getDate() - date).padStart(2, '0');
        console.log(dd);
        const mm = String(dateObj.getMonth() + 1 - month).padStart(2, '0');
        const yyyy = dateObj.getFullYear() - year;
        const today = `${yyyy}-${mm}-${dd}`;
        return today
}
export const dateTimeRemoveZ = (dateTimeLocal: string) => {
    return dateTimeLocal.substring(0,dateTimeLocal.indexOf("."))
}

export const dateTimeLocalFormatter = (dateTimeLocal: string) => {
    const date = new Date(dateTimeLocal).toISOString().slice(0, 10);
    
    const time = new Date(dateTimeLocal).toLocaleString('en-US', { timeZone:"Asia/Manila", hour: 'numeric', minute: 'numeric', hour12: true })
    //  const time = new Date(dateTimeLocal).toLocaleString('en-US', { timeZone:"Asia/Manila"})
    
    return {
        date, time
    }
}