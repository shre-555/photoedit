import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './ImageEdit.css'; 
function DropzoneComponent(props) {
  const [files, setFiles] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false); 

  const onDrop = useCallback(acceptedFiles => {
    setFiles(
      acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))
    );
    setIsUploaded(true); 
  }, []);


/*onDrop: This is a function that gets called when files are dragged and dropped into the drop zone.
acceptedFiles: This is the array of files that the user has dropped into the zone.
URL.createObjectURL(file): This creates a temporary URL for the file so it can be displayed in the browser as an image preview.
setFiles: The setFiles function updates the files state with the new file, adding a preview URL to each file.
setIsUploaded: This sets isUploaded to true, marking that a file has been uploaded.*/


  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png'
  });

/* getRootProps: This function provides props that you need to apply to the root element of the drop zone (the area where you drop files).
getInputProps: This provides props to the input element, making it possible to select files via the file picker (useful for users who don't want to drag and drop).
isDragActive: A boolean indicating whether a file is currently being dragged over the drop zone.
isDragAccept: A boolean indicating whether the dragged file is an accepted type (i.e., jpeg or png).
isDragReject: A boolean indicating whether the dragged file is rejected (not of type jpeg or png). */


  
  const classNames = useMemo(() => {
    let classes = 'dropzone';
    if (isDragActive) classes += ' active';
    if (isDragAccept) classes += ' accept';
    if (isDragReject) classes += ' reject';
    return classes;
  }, [isDragActive, isDragReject, isDragAccept]);

  const thumbs = files.map(file => (
    <div key={file.name}>
      <img
        src={file.preview}
        alt={file.name}
      />
    </div>
  ));

  // Clean up
  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  // Reset function to clear files and show the dropzone again
  const handleReset = () => {
    setFiles([]);
    setIsUploaded(false);
  };

  return (
    <>
    <section>
      {/* Conditionally render the dropzone if a file hasn't been uploaded */}
      {!isUploaded && (
        <div {...getRootProps({ className: classNames })}>
          <input {...getInputProps()} />
          <div>Drag and drop your images here.</div>
        </div>
      )}

      {/* Render thumbnails if files are uploaded */}
      <div className="dropzone-thumbs">
        {thumbs}
      </div>
    </section> 
    {/* Show Reset button if file is uploaded */}
      {isUploaded && (
        <button onClick={handleReset} className="reset-button">
          Upload Another File
        </button>
      )}
    </>
    
  );
}

export default DropzoneComponent;
