import React, {useState, useEffect} from 'react'
import { Container } from 'reactstrap';
import './styles.css';
const url = 'https://raw.githubusercontent.com/ivoTsolov/about/main/data';

const About = () => {

    const [myInfo, setMyInfo] = useState([]);

    const getInfo= async () => {
        const response = await fetch(url);
        const info = await response.json();
        setMyInfo(info);
      };

    useEffect(() => {
        getInfo();
        
    }, []);


    return (
       <Container fluid style={{marginTop: '20px'}}>
       {myInfo.map((info)=>{
           const {id, h, text} = info;
            return (
                <Container key={id} fluid>
                    <h4>{h}</h4>
                        <p>{text}</p>
                    <hr/>
                </Container>
                /*just some dumb content to log in, was tired to write all the logic for it */
            )
       })}
       </Container>
    )
}

export default About
