import React, { useCallback, useState } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';

interface MyDropzoneProps {
  onFileUpload: (files: FileWithPath[]) => void;
}

const MyDropzone: React.FC<MyDropzoneProps> = ({ onFileUpload }) => {
  const [hasNonPdfFile, setHasNonPdfFile] = useState<boolean>(false);

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      // Check if there are non-PDF files
      const hasNonPdf = acceptedFiles.some(file => file.type !== 'application/pdf');
      setHasNonPdfFile(hasNonPdf);

      // Filter out non-PDF files
      const pdfFiles = acceptedFiles.filter(file => file.type === 'application/pdf');
      onFileUpload(pdfFiles);
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.pdf', // Specify accepted file types
  });

  return (
    <div
      {...getRootProps()}
      className={`dropzone ${isDragActive ? 'active' : ''} mt-4 p-10 w-[400px]`}
      style={{
        borderStyle: 'dashed',
        borderWidth: '2px',
        borderRadius: '4px',
        borderColor: hasNonPdfFile ? 'red' : '#ccc', // Change border color if there's a warning
        backgroundColor: isDragActive ? '' : '',
      }}
    >
      <input {...getInputProps()} className="" />
      <p>Drag & drop .pdf file or click to select files</p>
      {hasNonPdfFile && <p style={{ color: 'red'}}>Warning: Only PDF files are allowed</p>}
      {isDragActive && <p>Drop it here</p>}
    </div>
  );
};

export default MyDropzone;
