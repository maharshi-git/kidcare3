import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import EditableList from './editableList';
// import TabBar from './dataAccordion';

function FileUploader() {

    const location = useLocation();
    let data = location.state;


    let navigate = useNavigate();
    const [selectedFiles, setSelectedFiles] = useState([]);
   

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const files = Array.from(event.dataTransfer.files);
        setSelectedFiles([...selectedFiles, ...files]);
    };

    const handleFileSelect = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFiles([...selectedFiles, ...files]);
    };

    const handleUpload = () => {
        // Upload selected files
        // You can use a library like Axios or fetch to upload the files to a server
        // or use a cloud storage service like AWS S3 or Azure Blob Storage
        // console.log(selectedFiles);
        data.uploadSelected = true
        navigate('/VaccineDet', { "state": data })
        // navigate.push({
        //     pathname: "/VaccineDet",
        //     state: { data: dataToPass },
        //   });

    };

    const onBackToVaccDet = () => {
        
        navigate('/VaccineDet', { "state": data })
    }

    return (
        <div
            className="file-uploader"
            onDragOver={(event) => {
                event.preventDefault();
                event.stopPropagation();
            }}
            onDrop={handleDrop}
        >

            <div className='dragdroparea MediumMargin' >

                <input
                    id="file-select"
                    type="file"
                    multiple
                    onChange={handleFileSelect}
                    className='custom-file-input'
                    style={{ "marginTop": "3.5rem" }}
                />
            </div>
            {/* <h2>File Uploader</h2> */}
            <div className="selected-files MediumMargin">
                {selectedFiles.map((file) => (
                    <div key={file.name} className="file">
                        <div className="file-name">{file.name}</div>
                        <div className="file-size">{file.size} bytes</div>
                    </div>
                ))}
            </div>
            <div className="file-inputs MediumMargin">
                {/* <label htmlFor="file-select" className='smallMargin'>Browse</label> */}

                <button disabled={selectedFiles.length === 0} onClick={handleUpload} className='btn btn-success smallMargin appButtonPurple'>Upload</button>
            </div>
            <a onClick={onBackToVaccDet} href="/#">Back</a>

        </div>
    );
}

export default FileUploader;
