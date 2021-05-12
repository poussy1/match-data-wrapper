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
    const [formats, setFormats] = React.useState(() => ['left']);

    const handleFormat = (event, newFormats) => {
        if (newFormats.length) {
            setFormats(formats=>formats.concat(newFormats));
          }
    };
    return <div  style={{display:"flex", flexDirection:"row"}}>
    <Paper style={{marginRight:"15px"}} >
        <ToggleButtonGroup
            value={alignment}
            exclusive
            orientation="vertical" 
            onChange={handleAlignment}
            aria-label="text alignment"
           
        >
            <ToggleButton value="left" aria-label="left aligned" style={{fontSize:"9px",fontWeight:"bold",padding:"5px"}}>
               HEAD
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered" style={{fontSize:"9px",fontWeight:"bold",padding:"5px"}}>
               RIGHT FOOT
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned" style={{fontSize:"9px",fontWeight:"bold",padding:"5px"}}>
               LEFT FOOT
            </ToggleButton>
        </ToggleButtonGroup>
    </Paper>
    <Paper>
        <ToggleButtonGroup
                value={formats}
                onChange={handleFormat}
                exclusive
                orientation="vertical" 
                aria-label="text alignment"
            >
            <ToggleButton value="left" aria-label="left aligned" style={{fontSize:"9px",fontWeight:"bold",padding:"5px"}}>
               Aerial-won
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered" style={{fontSize:"9px",fontWeight:"bold",padding:"5px"}}>
               Backheel
            </ToggleButton>
        </ToggleButtonGroup>
    </Paper>    
</div>
}