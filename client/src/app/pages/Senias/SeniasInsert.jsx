import React, { Component } from "react";

import { Button, FormGroup, Input, Label, Col, Form, Row } from "reactstrap";
// import "./PantallasUsuario.css";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import Logotipo_Dark from "../../img/Logotipo_Dark.png";
import firebaseConfig from "./../../../api/.firebase/firebaseController"
class SeniasInsert extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            // reference for files: https://www.geeksforgeeks.org/file-uploading-in-react-js/
        }
    }

    onFileChange = async event => {
        // Update the state
        await this.setState({ selectedFile: event.target.files[0] });
    };

    handleUpload = async event => {
        event.preventDefault();
        var config = firebaseConfig;

        const firebase = initializeApp(config);
        const storage = getStorage(firebase);
        // Create a storage reference from our storage service
        const storageRef = ref(storage);
        const file = await this.state.selectedFile;

        if (file) {
            const spaceRef = ref(storageRef, `images${file.name}`);

            const metadata = {
                cacheControl: 'public,max-age=300',
                contentType: 'image/jpeg',
                timeCreated: Date.now()
            };
            // 'file' comes from the Blob or File API
            const uploadTask = uploadBytesResumable(spaceRef, file, metadata);
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        // setURL(downloadURL);
                    }).catch((err) => {
                        console.log('error', err);
                    });
                }
            );
        }
    };

    render() {
        return (
            <div className="principal">
                <div className="container">
                    <div className="logo">
                        <img src={Logotipo_Dark} width="240px" />
                    </div>
                    <Form onSubmit={this.handleUpload}>
                        <div className="formulario" >
                            <h1>Resgistro Senia</h1>
                            <div className="General col-12 offset-md-1">
                                <FormGroup row>
                                    <Label for="Nombre" sm={2}>
                                        Nombre Senia
                                    </Label>
                                    <Col sm={6}>
                                        <Input
                                            id="Nombre"
                                            name="Nombre Usuario"
                                            placeholder="Nombre de usuario"
                                            type="text"
                                        />
                                    </Col>
                                </FormGroup><FormGroup row>
                                    <Label for="Descripcion" sm={2}>
                                        Descripcion
                                    </Label>
                                    <Col sm={6}>
                                        <Input
                                            id="Descripcion"
                                            name="Descripcion"
                                            placeholder="Descripcion"
                                            type="text"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Input
                                        id="Imagen"
                                        name="Imagen"
                                        placeholder="Imagen"
                                        type="file"
                                        onChange={this.onFileChange}
                                    />
                                </FormGroup>
                                {
                                    (this.state.selectedFile) ? <div>{this.state.selectedFile.type} {this.state.selectedFile.size/1000}kb</div> : <div>no file</div>
                                }
                            </div>
                            <div>
                                <button>submit</button>

                                <Button
                                    // onClick={this.submit()}
                                    type="submit"
                                    disabled={!this.state.selectedFile}
                                    
                                    size="lg"
                                    style={{
                                        backgroundColor: "#22201C",
                                        border: "#22201C",
                                        marginTop: "35px",
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="60"
                                        height="60"
                                        fill="currentColor"
                                        className="bi bi-play-circle text-warning"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </Form>
                    <div className="Regresar">
                        <Button
                            type="submit"
                            onClick=" "
                            style={{
                                backgroundColor: "#22201C",
                                marginTop: "2em",
                                marginRight: "65em",
                                border: "#22201C",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                fill="currentColor"
                                className="bi bi-arrow-counterclockwise text-warning "
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
                                />
                                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SeniasInsert;
