import React, { useState, useEffect, useRef }from 'react';
import io from 'socket.io-client';
import moment from 'moment';

import { Container, Row, Col, Input, Button } from 'reactstrap';

import './styles.css';



const Chat = () => {


    const user = JSON.parse(localStorage.getItem('profile'));
    const [message, setMessage] = useState('');
    const [userNames, setUserNames] = useState([]);
    const [chat, setChat] = useState([]);
    const socket = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.current.emit('message', {message});
        setMessage('')
    }
    useEffect(() => {
         
        socket.current = io('http://localhost:7000');
    }, [])

    useEffect(() => {
    socket.current.emit("addUser",  user.result._id, (user?.result.name) || 'guest');
    socket.current.on('getUsers',( users) => {
        const namesData = users.map((user)=>{
            return user.name;
        });
        console.log(namesData);
        //setUserNames([...userNames, namesData]); here i wanna add just the names of the users

   
        
    });
   
    }, [user.result._id, user.result.name, userNames]);

    useEffect(() => {
        socket.current.on('message', payload => {
          setChat([...chat, payload])
        })

      }, [chat])

    return (
        <Container fluid>
        
            <Row>
                <Col sm="9" className="chat-module">
                    <div className="chat-section">
                        {chat.map((payload, index)=> {
                            console.log(payload + 'payload')
                            return (                             
                            <p key={index}>
                                {user ? user.result.name : 'Guest'} : <span color="primary">{moment(new Date()).fromNow()} : </span>
                                <span>{payload.message}</span>
                           </p>)
                        })}
                    </div> 
                    <form onSubmit={handleSubmit}>
                        <Row className="chat-form" style={{marginTop: "5px"}}>

                                <Col sm="10">
                                    <Input color="primary" type="text" value={message} 
                                    placeholder="type message"
                                    onChange={(e)=>{setMessage(e.target.value)}} /> 
                                </Col>
                                <Col sm="2" className="send-button">
                                    <Button type="submit" style={{width:"100%"}}> Send </Button>
                                </Col>                          
                        </Row> 
                    </form>                                          
                </Col>
                <Col sm="3" className="users-lot">
                    <h3>Online Users</h3>
                <div className="chat-section">

                </div>      
                </Col>
            </Row>              
        </Container>
    )
}

export default Chat
