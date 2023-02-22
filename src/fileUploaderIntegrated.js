import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const ImageUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        // Generate a preview URL for the selected image
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setPreviewUrl(reader.result);
        };

        console.log(selectedFile);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div>
                <div
                    className="dragdroparea"
                    onDragOver={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                    }}
                    onDrop={handleDrop}
                >
                    <input type="file" onChange={handleFileChange} className="fileUploaderBtn" />
                </div>

                {previewUrl && <img onClick={handleOpen} src={previewUrl} alt="Preview" style={{ "width": "5rem" }} />}
            </div>
            <Dialog open={open} onClose={handleClose}>
                {/* <DialogTitle>{props.VaccineName}</DialogTitle> */}
                <DialogContent>
                    <img onClick={handleOpen} src={previewUrl} alt="Preview" />

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
