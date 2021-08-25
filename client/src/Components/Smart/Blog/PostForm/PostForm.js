import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import FileBase from 'react-file-base64';
import { createPost, updatePost } from '../../../../actions/posts/posts';

const PostForm = ({currentId, setCurrentId}) => {


  const [postData, setPostData] = useState({
    title: '',
    message: '',
    selectedFile: '',

  });
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();

  useEffect(() => {
    if(post) setPostData(post);
    
  }, [post])

  const handleSubmit = (e) => {
  
    e.preventDefault()
    if(currentId) {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
    } else {
      dispatch(createPost({...postData, name: user?.result?.name})); 
    }
    clear();

  }

  const clear = () => {
    setCurrentId((prevId) => prevId = null);
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  };
  console.log(user.result.name);

  return (
    <>
    <h2>{currentId ? 'Edit' : 'Create'} your opinion</h2>
    <Form onSubmit={handleSubmit} style={{marginBottom: '10px'}}>
      <FormGroup>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Title</Label>
        <Input type="textarea" name="title" id="title" 
        onChange={(e)=> setPostData({...postData, title: e.target.value})}
        value={postData.title}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">message</Label>
        <Input type="textarea" name="message" id="message" 
        onChange={(e)=> setPostData({...postData, message: e.target.value})}
        value={postData.message}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">Picture</Label>
        <div>
          <FileBase
          type="file"
          multiple={false}
          onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
          />
        </div>
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <Row>
         <Button type="submit">Submit</Button> 
      </Row>
      <Row style={{marginTop: '5px'}}>
         <Button onClick={clear}>Clear</Button>
      </Row>
    </Form>
    </>
  );
}

export default PostForm;