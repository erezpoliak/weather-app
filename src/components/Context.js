import React, {createContext, useState, useEffect} from "react";
import * as Api from './Api';

const Forecast_Context = createContext();
const {Provider} = Forecast_Context;

const Forecast_Provider = ({children}) => {
    // const [autoCompleteData, setAutoCompleteData] = useState([]);
    const [data12hour , setData12hour] = useState([]);
    const [currentData , setCurrentData] = useState({});
    const [weeklyData , setWeeklyData] = useState([]);
    const [hourleyTemp , setHourleyTemp] = useState([]);
    const [currentTemp , setCurrentTemp] = useState(null);
    useEffect(() =>{
        const getData = async () => {
            // const fetchedAutoComplete = await Api.fetch_autoComplete;
            // setAutoCompleteData(fetchedAutoComplete);
            const fetched12hour = await Api.fetch12HourData();
            setData12hour(fetched12hour);
            const fetchedCurrent = await Api.fetchCurrentData();
            setCurrentData(fetchedCurrent);
            const fetchedWeekly = await Api.fetchWeeklyData();
            setWeeklyData(fetchedWeekly);
        }
        getData();
        
        const getHourleyTemps = (data12hour) =>{
            let result = [];
            for(let i of data12hour){
                result.push(i.Temperature.Value);
            }
            setHourleyTemp(result);
        }
        getHourleyTemps(data12hour);

        const temporaryCurrentTemp = currentData && currentData.temp;
        setCurrentTemp(temporaryCurrentTemp);
    },[data12hour, currentData, weeklyData])


    const state = {
        // autoCompleteData ,
        data12hour ,
        currentData ,
        weeklyData ,
        hourleyTemp ,
        currentTemp
    };

    const actions = {
        // setAutoCompleteData ,
        setData12hour ,
        setCurrentData ,
        setWeeklyData ,
        setHourleyTemp ,
        setCurrentTemp
    };

    return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
}

export {Forecast_Provider , Forecast_Context};
