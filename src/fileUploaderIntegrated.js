import React, { useState } from "react";

//modules for dialog
import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

//imported images
import VaccLogo from './resources/buffer.png';

const ImageUploader = () => {

    //setState
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [open, setOpen] = useState(false);
    const [fileUploaded, setFileUploaded] = useState(false);


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        // Generate a preview URL for the selected image
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setPreviewUrl(reader.result);
        };
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const file = Array.from(event.dataTransfer.files)[0];
        setSelectedFile(file);

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setPreviewUrl(reader.result);
        };
    };

    //upload Button functions
    const handleUpload = () => {
        // Upload selected files
        // You can use a library like Axios or fetch to upload the files to a server
        // or use a cloud storage service like AWS S3 or Azure Blob Storage
        // console.log(selectedFiles);
        setFileUploaded(true);

    };

    //open uploaded data in a dialogBox
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div style={{ "display": "flex", "marginLeft": "5rem" }}>
                {
                    (!fileUploaded) ?
                        <p style={{ "color": "Black", "width": "10rem" }}>Please select a file or drag and drop a file to autopopulate</p>
                        :
                        <div style={{ "marginTop": "1rem" }}>
                            <img src={VaccLogo} className="spin-icon" style={{ "width": "1rem", "height": "1rem" }} alt=""></img>
                            <p style={{ "color": "Black" }}>Your Data is Loading</p>
                        </div>
                }

                <div
                    style={{ "marginLeft": "5rem" }}
                    className="dragdroparea"
                    onDragOver={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                    }}
                    onDrop={handleDrop}
                >
                <input type="file" multiple={false} accept="image/jpeg" onChange={handleFileChange} className="fileUploaderBtn" style={{ "marginTop": "1.3rem"}} />
                </div>

                {previewUrl &&
                    <button style={{ "height": "5rem", "borderRadius": "1rem", "marginLeft": "2rem", "marginRight": "1rem", "border" : "none", "boxShadow": "rgb(164 164 164) 1px 1px 1px 1px"}}>
                        <img onClick={handleOpen}  src={previewUrl} alt="Preview" style={{ "width": "5rem" }} />
                    </button>}

                <button hidden={(!selectedFile)} style={{"marginLeft": "1rem"}} onClick={handleUpload} className='btn btn-success appButtonPurple'>Upload</button>
            </div>
            <Dialog open={open} onClose={handleClose} >
                {/* <DialogTitle>{props.VaccineName}</DialogTitle> */}
                <DialogContent>
                    <img src={previewUrl} alt="Preview" style={{ "maxHeight": "40rem", "maxWidth": "30rem" }} />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ImageUploader;
