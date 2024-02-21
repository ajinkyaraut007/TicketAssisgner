import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { StyledStatusIcon } from './Style';


const StatusIcon = ({data}) => {

    const {status, assigned, due} = data;
  return (
    <>
    {status == "Close"? 
         <CheckCircleIcon color='success'/> 
         : (assigned == "AJ"? 
                <StyledStatusIcon color='#03C0D4'/> 
                :
                due == "overdue" ?
                <StyledStatusIcon color='#FF451A'/> 
                : 
                <StyledStatusIcon/> 
         
         
         ) 

}
       
    </>
  )
}

export default StatusIcon