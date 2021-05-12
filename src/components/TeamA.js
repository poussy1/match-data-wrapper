import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import HeightGroup from '../widgets/heightGroup'
import TypeGroup   from '../widgets/typeGroup'
import BodyPartsGroup from '../widgets/bodyPartsGroup'

import ShotTypeGroup   from '../widgets/shotTypeGroup'
import Extras   from '../widgets/extras'
import pass from "../assets/pass.png";
import shot from "../assets/football-player-setting-ball.png";

const Container = styled.div`
    width:400px;
    padding:20px;
`

const SelectionsContainer = styled.div`
    margin:10px;
`
function TeamA({flag,color}){

    return (<Container style={{position:"relative"}}>
        {/* //pass */}
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginBottom:"5px"}}>  
        <img width="30" height="20" style={{marginRight:"10px"}} src={flag}/> 
        <div>Performance</div>    
      </div>
      <Card style={{backgroundColor:`${color}`}}> 
        <Typography variant="subtitle1" gutterBottom style={{textAlign:"center",marginTop:"13px"}}>
            <img width="30" height="30" style={{marginRight:"10px"}} src={pass}/> 
        </Typography>
        <SelectionsContainer> 
            <Card style={{padding:"5px",display:"Flex",flexDirection:"row",marginTop:"-7px"}}>
                <Grid container justify="center" spacing={1}>
                        <Grid item>
                            <Typography variant="overline" style={{fontSize:"9px",fontWeight:"bold"}}> 
                                type: 
                            </Typography>     
                        </Grid>
                        <Grid item >
                            <TypeGroup/>
                        </Grid>
                </Grid>

                <Grid container justify="center" spacing={1}>
                    <Grid item>
                        <Typography variant="overline" style={{fontSize:"9px",fontWeight:"bold"}}> 
                            height:
                        </Typography>     
                    </Grid>
                    <Grid item >
                        <HeightGroup/>
                    </Grid>
                </Grid>
            </Card> 
        </SelectionsContainer>   
        <SelectionsContainer>
            <Card style={{padding:"5px",display:"flex",flexDirection:"row",marginBottom:"-3px"}}>
                <Grid item>
                    <Typography variant="overline" style={{fontSize:"9px",fontWeight:"bold",padding:"5px",marginRight:"5px"}}> 
                        Body-Part: 
                    </Typography>   
                </Grid>   
                <Grid item>  
                    <BodyPartsGroup/>
                </Grid>   
            </Card> 
        </SelectionsContainer>
        <div style={{textAlign:"center",marginBottom:"5px"}}>
            <Button variant="outlined" style={{background:"white"}}>save</Button>
        </div>
      </Card>  
        {/* Shot */}
      <Card style={{marginTop:"10px",background:`${color}`}}>  
        <Typography variant="subtitle1" gutterBottom style={{textAlign:"center",marginTop:"13px"}}>
            <img width="30" height="30" style={{marginRight:"10px"}} src={shot}/> 
        </Typography>
       
            <SelectionsContainer> 
                <Card style={{padding:"5px",display:"Flex",flexDirection:"row",marginTop:"-10px"}}>
                    <Grid container justify="center" spacing={1}>
                            <Grid item>
                                <Typography variant="overline" style={{fontSize:"9px",fontWeight:"bold"}}> 
                                    type: 
                                </Typography>     
                            </Grid>
                            <Grid item >
                                <ShotTypeGroup/>
                            </Grid>
                    </Grid>

                    <Grid container justify="center" spacing={1}>
                            <Grid item>
                                <Typography variant="overline" style={{fontSize:"9px",fontWeight:"bold"}}> 
                                    EXTRA:
                                </Typography>     
                            </Grid>
                            <Grid item >
                                <Extras/>
                            </Grid>
                    
                    </Grid>
                </Card> 
            </SelectionsContainer>   
            <SelectionsContainer>
            <Card style={{padding:"5px",display:"flex",flexDirection:"row",marginBottom:"-3px"}}>
                <Grid item>
                    <Typography variant="overline" style={{fontSize:"9px",fontWeight:"bold",padding:"5px",marginRight:"5px"}}> 
                        Body-Part: 
                    </Typography>   
                </Grid>   
                <Grid item>  
                    <BodyPartsGroup/>
                </Grid>   
            </Card> 
        </SelectionsContainer>
        <div style={{textAlign:"center",marginBottom:"5px"}}>
            <Button variant="outlined" style={{background:"white"}}>save</Button>
        </div>
      </Card>    
    </Container>

    )
}
export default TeamA;
