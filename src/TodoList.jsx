import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import MinimizeIcon from '@material-ui/icons/Minimize';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Clock from 'react-digital-clock';
const TodoList =()=>{
       const[num,setNum]=useState(0);
       const incNum=()=>{
        setNum(num+1);
       }
       
       const decNum=()=>{
           if(num>0){
        setNum(num-1);
        } else{
            alert('You cannot go less than zero' )
            setNum(0);
        }
       }

    return(
    <>
    <div className='main_div'>
    
    <div className='center_div'>
     <h1> {num} </h1>
     <div className='btn_div'>
      
     <Tooltip title="Delete">
     <Button onClick={decNum} className='btn_red' ><MinimizeIcon /> </Button>
     </Tooltip>
     <Tooltip title="Add">
      <Button onClick={incNum} className='btn_green'><AddIcon/></Button>
      </Tooltip>
     </div>
    </div>
    <Clock/>
    </div>
    </>
    )
}

export default TodoList;