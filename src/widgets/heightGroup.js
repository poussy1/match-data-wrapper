import React from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
               GROUND
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered" style={{fontSize:"9px",fontWeight:"bold",padding:"5px"}}>
               HIGH
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned" style={{fontSize:"9px",fontWeight:"bold",padding:"5px"}}>
               LOW
            </ToggleButton>
        </ToggleButtonGroup>

    </Paper>

}