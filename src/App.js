import logo from './logo.svg';
import styled from 'styled-components'

import './App.css';
import Middle from './components/middle'
import Resume from './components/resume'
import TeamA  from './components/TeamA'
import ChelseaFlag from "./assets/Chelsea-Football-Club-Flag.png";
import LiverpooolFlag from "./assets/Liverpool-Football-Club-Flag.jpeg";
const Container = styled.div`
    display:flex;
    flex-direction:row;
`
const MiddleContent = styled.div`
    display:flex;
    flex-direction:column;
`
function App() {
  return (
   <Container>
    <TeamA flag={ChelseaFlag} color={'#0018aaa1'}/> 
    <MiddleContent>
      <Resume/> 
      <Middle/>
    </MiddleContent>
    <TeamA flag={LiverpooolFlag} color={'#aa00005e'}/>
   </Container>
  );
}

export default App;
