import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './css/stylein.css';


export default class TambahBerita extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Container>
        <Row>
          <Form>

            <Form.Group controlId="formBasicText">
              <Form.Label>Judul</Form.Label>
              <Form.Control type="text" placeholder="Title here" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Example select</Form.Label>
              <Form.Control as="select" onChange={(e)=>{console.log(e.target.value)}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.Controltextarea">
              <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
              placeholder="text here"
            />
            </Form.Group>
            <Form.Group controlId="exampleForm.Controltextarea">
            <textarea
              value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            />
            </Form.Group>
            
            <Form.Group controlId="exampleForm.Controlsubmit">
            <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form.Group>
          
            </Form>
          </Row>
        </Container>
        
      </div>
    );
  }
}
