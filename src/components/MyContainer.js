import React, { Component } from 'react';
import {Image, Modal, Card, Button, Form} from 'semantic-ui-react'


class MyContainer extends Component{
    state = { modalOpen: false }
    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })
    handleSubmit = () => {
        let arrImg = this.props.myProps;
        let insertId = (arrImg[arrImg.length-1].id)+1;
        let insertObj = {id:insertId, desc:this.state.desc, url:this.state.url};
        arrImg.push(insertObj);
        this.handleClose();
        console.log("form has been submitted");
    }
    handleDesc = (e) => {
        this.setState({desc: e.target.value});
    }
    handleURL = (e) => {
        this.setState({url: e.target.value});
    }
    render() {
        let arrImg = this.props.myProps;
        return(
            <div>
            <Card.Group itemsPerRow={6}>
            {arrImg.map((img,i)=>(
            
            <Card key={img.id}>
                <Modal trigger={<Image src={img.url} size='small' centered rounded/>}>
                    <Modal.Content image>
                        <Image src={img.url} size='small' centered rounded/>
                        <Modal.Description>
                            <p>{img.desc}</p>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Card>
            ))}
            </Card.Group>
            {/*modal d'ajout d'image*/}
            <Button onClick={this.handleOpen} content='Ajouter une image'/>
            <Modal 
                open={this.state.modalOpen}
                onClose={this.handleClose}
                size='small'>
                <Modal.Content image>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Input placeholder='description' name='descInput' onChange={this.handleDesc} />
                            <Form.Input placeholder='URL' name='urlInput' onChange={this.handleURL} />
                            <Form.Button content='Ajouter' />
                        </Form.Group>
                    </Form>
                </Modal.Content>
            </Modal>
            </div>
        );
     }
    
}

export default MyContainer;