import React, { useState, useContext } from "react";

//modules for dialog
import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import VaccineDetail from './resources/vaccineDetail.json'
import {MyContext} from './App'

//imported images
import VaccLogo from './resources/buffer.png';

const ImageUploader = ({vaccFunc}) => {

    //setState
    // const [selectedFile, setSelectedFile] = useState(null);
    // const [previewUrl, setPreviewUrl] = useState(null);
    const [open, setOpen] = useState(false);
    
    // const [fileUploaded, setFileUploaded] = useState(false);

    const {selectedFile, setSelectedFile, previewUrl, setPreviewUrl, fileUploaded, setFileUploaded } = useContext(MyContext);
    const { tiles } = useContext(MyContext);
    const {selectedTile } = useContext(MyContext);

    // if(selectedTile.fileDetail){
    //     setSelectedFile(selectedTile.fileDetail.fileDet)
    // }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        // Generate a preview URL for the selected image
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {

            tiles.find(x => x.name === selectedTile.name).fileDetail = {
                fileDet : file
            }

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

            tiles.find(x => x.name === selectedTile.name).fileDetail = {
                fileDet : file
            }

            setPreviewUrl(reader.result);
        };
    };

    //upload Button functions
    const handleUpload = async () => {

        setFileUploaded(true);

        // fetch('http://localhost:3000/upldVaccData', {
        let currentUrl = window.location.origin;

        fetch(`${currentUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "previewUrl": previewUrl
            })
        }).then((response) => response.json())
            .then((data) => {

                console.log("Success:", data);

                let finalArr = [], vaccObjFound;
                finalArr = finalArr.concat(VaccineDetail.vaccine0To6Mnth, VaccineDetail.vaccine6To12Mnth, VaccineDetail.vaccine1YearTo5Years, VaccineDetail.vaccine6YearsPlus)
                for (let i in finalArr) { 
                    vaccObjFound = data.find((x) => x.COLUMN1 === finalArr[i].VaccineName)
                    if(vaccObjFound){
                        finalArr[i].admnstDate =vaccObjFound['Given on']
                        finalArr[i].vaccineDone = true
                        
                    }
                }
                // console.log(finalArr)
                finalArr.forEach(x => x.admnstDate = (x.admnstDate) ?  convertDate(x.admnstDate) : "")

                vaccFunc(finalArr);

                setFileUploaded(false);
                
            })
            .catch((error) => {
                console.error("Error:", error);
            });

    

        // setFileUploaded(true);

    };

    const convertDate = (dateString) => {
        // Split the string into day, month, and year
        const parts = dateString.split('-');
        const day = parts[0];
        const month = parts[1];
        let year = parts[2];
        if(year.length === 2){
            year = "20" + year
        }
      
        // Use the Date constructor to create a new date object
        const date = new Date(year, month - 1, day);
      
        // Use the toISOString() method to format the date in yyyy-mm-dd format
        const formattedDate = date.toISOString().substring(0, 10);
      
        return formattedDate;
      }

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
                    <input type="file" multiple={false} accept="image/jpeg" onChange={handleFileChange} className="fileUploaderBtn" style={{ "marginTop": "1.3rem" }} />
                </div>

                {previewUrl &&
                    <button style={{ "height": "5rem", "borderRadius": "1rem", "marginLeft": "2rem", "marginRight": "1rem", "border": "none", "boxShadow": "rgb(164 164 164) 1px 1px 1px 1px" }}>
                        <img onClick={handleOpen} src={previewUrl} alt="Preview" style={{ "width": "5rem" }} />
                    </button>}

                <button hidden={(!selectedFile)} style={{ "marginLeft": "1rem" }} onClick={handleUpload} className='btn btn-success appButtonPurple'>Upload</button>
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
