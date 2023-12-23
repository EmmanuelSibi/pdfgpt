"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import Dropzone from "react-dropzone";

const UploadDropZone = () => {
  return <Dropzone multiple={false} onDrop={(acceptedFile)=>{
    console.log(acceptedFile)
  }}>
    {({ getRootProps, getInputProps }) => (
      
        <div {...getRootProps()} className="border h-64  border-dashed border-gray-300 m-4 rounded-lg ">
          <div className='flex items-center justify-center h-full w-full'>
          <label
              htmlFor='dropzone-file'
              className='flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'>
              <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                example
                </div>
                </label>
          </div>
        </div>
    
    )}

  </Dropzone>
};

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger
        asChild
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Button> Upload PDF</Button>
      </DialogTrigger>
      <DialogContent>
        <UploadDropZone />
      </DialogContent>
    </Dialog>
  );
};

export default UploadButton;
