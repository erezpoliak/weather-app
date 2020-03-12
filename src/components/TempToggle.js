import React , {useState , useContext} from 'react';
import Toggle from 'react-toggle'
import "react-toggle/style.css";
import {Forecast_Context} from './Context';

const TempToggle = () => {
    
    const [isF , set_isF] = useState(true);
    const {hourleyTemp , setHourleyTemp , currentTemp , setCurrentTemp} = useContext(Forecast_Context);

    function changeTemp (e) {
        if(isF){
            set_isF(false);
            const temporaryCurrent = Math.round((currentTemp - 32) * 5 / 9);
            setCurrentTemp(temporaryCurrent);
            const temporaryHourley = [...hourleyTemp];
            for(let i=0; i<temporaryHourley.length; i++){
                temporaryHourley[i] = Math.round((temporaryHourley[i] - 32) * 5 / 9);
            }
            setHourleyTemp(temporaryHourley);
        }
        else{
            set_isF(true);
            const temporaryCurrent = Math.round(currentTemp / 5 * 9 + 32);
            setCurrentTemp(temporaryCurrent);
            const temporaryHourley = [...hourleyTemp];
            for(let i=0; i<temporaryHourley.length; i++){
                temporaryHourley[i] = Math.round(temporaryHourley[i] / 5 * 9 + 32);
            }
            setHourleyTemp(temporaryHourley);
        }
    }

    return(
        <label>
  <Toggle
    defaultChecked={false}
    icons={{
        checked: 'C' ,
        unchecked: 'F'
    }}
    onChange={changeTemp} 
    />
</label>
    )
}

export default TempToggle;