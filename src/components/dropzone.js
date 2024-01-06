import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileDropzone = () => {
  const onDrop = useCallback(acceptedFiles => {
    
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={dropzoneStyles} className='m-auto'>
      <input {...getInputProps()} />
      <p>{isDragActive ? 'Drop files here' : 'Drag and drop files here, or click to select files'}</p>
    </div>
  );
};

const dropzoneStyles = {
  border: '2px dashed black',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
  width: '200px',
  top:'20px',
  

};

export default FileDropzone;
