import { cloud, cloudy, fog, hail, sunny } from "../../assets"

 
export const convertWeatherCode =(code:number)=> {

    const  weatherCodeIcon = [
        { code:0, name:'Clear', icon:sunny },
        { code:1, name:'Partly cloudy', icon:cloud } ,
        { code:2, name:'cloudy', icon:cloudy },
        { code:3, name:'covered by Clouds', icon:cloudy },
        { code:4, name:'fog', icon:fog },
        { code:45,name:'Hail ', icon:hail },
    ]
 const data =  weatherCodeIcon.find((d, i) => d.code===code)
return data;
}
 