import React from 'react'
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
export default function(props){
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
    return <Paper  >
        <ToggleButtonGroup
            value={alignment}
            exclusive
            orientation="vertical" 
            onChange={handleAlignment}
            aria-label="text alignment"
        >
            <ToggleButton value="left" aria-label="left aligned" style={{fontSize:"9px",fontWeight:"bold",padding:"5px"}}>
                AERIAL-WON
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered" style={{fontSize:"9px",fontWeight:"bold",padding:"5px"}}>
                DEFLECTED
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned" style={{fontSize:"9px",fontWeight:"bold",padding:"5px"}}>
                FIRST-TIME
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned" style={{fontSize:"9px",fontWeight:"bold",padding:"5px"}}>
                REDIRECT
            </ToggleButton>
        </ToggleButtonGroup>
    </Paper>

}