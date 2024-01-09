interface OptionType {
    hour: "numeric" | "2-digit",
    minute: "numeric" | "2-digit",
    hour12: boolean,
  }
export function convertTimestampToTime(timestamp:number) {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const options:OptionType = { hour: 'numeric', minute: '2-digit', hour12: true };
    const formattedTime = date.toLocaleTimeString('en-US', options);
     
    return formattedTime;
  }