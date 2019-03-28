import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import InputGroup from 'react-bootstrap/InputGroup';
import './css/stylein.css';
import '../Component/react-tabs.css';


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
            <Col md={12} style={{backgroundColor:'#F8F8F8',height:'100%',marginTop:'100px',borderRadius:'10px',padding:'20px'}}>
              <Form>
                  <Form.Group controlId="formBasicText">
                    <Form.Label>Judul</Form.Label>
                    <Form.Control type="text" placeholder="Title here" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Tipe Berita</Form.Label>
                    <Form.Control as="select" onChange={(e)=>{console.log(e.target.value)}}>
                      <option value="1">Advokasi</option>
                      <option value="2">Medinfo</option>
                      <option value="3">Perhubungan</option>
                      <option value="4">Psdm</option>
                      <option value="5">Kastrat</option>
                    </Form.Control>
                  </Form.Group>
                  <Tabs>
                    <TabList>
                      <Tab>Text</Tab>
                      <Tab>Editor</Tab>
                    </TabList>

                    <TabPanel>
                    <Form.Group controlId="exampleForm.Controltextarea">
                        <Editor
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={this.onEditorStateChange}
                        placeholder="text here"
                      />
                    </Form.Group>
                    </TabPanel>
                    <TabPanel>
                    <Form.Group controlId="exampleForm.Controltextarea" style={{width:'100%'}}>
                        <textarea
                          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                        />
                    </Form.Group>
                    </TabPanel>
                  </Tabs>
                  <Form.Group>
                    <input type="file">
                    </input>
                  </Form.Group>             
                  <Form.Group controlId="exampleForm.Controlsubmit">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form.Group>
                </Form>
                </Col>
              </Row>
        </Container>
      </div>
    );
  }
}
