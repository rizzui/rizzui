// upload.stories.ts|tsx

/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */

import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Upload, { useDropzone } from '.';

export default {
  title: 'Components/Upload',
  component: Upload,
} as ComponentMeta<typeof Upload>;

const Template: ComponentStory<typeof Upload> = (args) => <Upload {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Upload',
  accept: 'img',
};

export const BasicListStyling = () => {
  const [listFiles, setListFiles] = React.useState<Array<File>>([]);
  const handleListFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = (event.target as HTMLInputElement).files;
    const newFiles = Object.entries(uploadedFiles as object)
      .map((file) => {
        if (file[1].type.includes('image') || file[1].type.includes('pdf'))
          return file[1];
      })
      .filter((file) => file !== undefined);
    setListFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  return (
    <Upload
      label="File List"
      accept="imgAndPdf"
      onChange={handleListFileUpload}
    >
      <h2 className="text-md mt-5 mb-3 font-semibold">Files</h2>
      <ul>
        {listFiles?.map((file) => (
          <li key={file.name}>
            {file.name} -{file.size}
          </li>
        ))}
      </ul>
    </Upload>
  );
};

export const ImagePreview = () => {
  const imageRef = React.useRef<HTMLInputElement>(null);
  const [images, setImages] = React.useState<Array<File>>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = (event.target as HTMLInputElement).files;
    const newFiles = Object.entries(uploadedFiles as object)
      .map((file) => {
        if (file[1].type.includes('image')) return file[1];
      })
      .filter((file) => file !== undefined);
    setImages((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleImageDelete = (index: number) => {
    const updatedFiles = images.filter((_, i) => i !== index);
    setImages(updatedFiles);
    (imageRef.current as HTMLInputElement).value = '';
  };

  return (
    <Upload
      ref={imageRef}
      label="Image Only"
      accept="img"
      onChange={handleImageUpload}
    >
      <ul className="mt-5 flex flex-row flex-wrap gap-4">
        {images?.map((file: File, index: number) => (
          <li
            className="group relative h-24 w-28 overflow-hidden rounded-md"
            key={file.name}
          >
            <img
              className="h-full w-full rounded-md object-cover"
              src={URL.createObjectURL(file)}
              alt={file.name}
            />
            <div className="absolute top-full h-full w-full bg-gray-900/50 transition-all duration-75 ease-out group-hover:top-0" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="invisible absolute bottom-2 right-1 h-5 w-5 translate-y-full cursor-pointer text-gray-0 transition duration-75 group-hover:visible group-hover:translate-y-0"
              onClick={() => handleImageDelete(index)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </li>
        ))}
      </ul>
    </Upload>
  );
};

export const PdfPreview = () => {
  const pdfRef = React.useRef<HTMLInputElement>(null);
  const [pdfs, setPdfs] = React.useState<Array<File>>([]);

  const handlePdfUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = (event.target as HTMLInputElement).files;
    const newFiles = Object.entries(uploadedFiles as object)
      .map((file) => {
        if (file[1].type.includes('pdf')) return file[1];
      })
      .filter((file) => file !== undefined);
    setPdfs((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handlePdfDelete = (index: number) => {
    const updatedFiles = pdfs.filter((_, i) => i !== index);
    setPdfs(updatedFiles);
    (pdfRef.current as HTMLInputElement).value = '';
  };

  return (
    <Upload
      ref={pdfRef}
      label="Pdf Only"
      accept="pdf"
      onChange={handlePdfUpload}
    >
      <ul className="mt-5">
        {pdfs?.map((file: File, index: number) => (
          <li
            className="relative my-3 h-10 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-500"
            key={file.name}
          >
            <h2>{file.name}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute top-2 right-3 h-5 w-5 cursor-pointer text-gray-500"
              onClick={() => handlePdfDelete(index)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </li>
        ))}
      </ul>
    </Upload>
  );
};

export const ImgPdfPreview = () => {
  const imgPdfRef = React.useRef<HTMLInputElement>(null);
  const [imgPdfs, setImgPdfs] = React.useState<Array<File>>([]);

  const handleImgPdfUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = (event.target as HTMLInputElement).files;
    const newFiles = Object.entries(uploadedFiles as object)
      .map((file) => {
        if (file[1].type.includes('image') || file[1].type.includes('pdf'))
          return file[1];
      })
      .filter((file) => file !== undefined);
    setImgPdfs((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleImgPdfDelete = (index: number) => {
    const updatedFiles = imgPdfs.filter((_, i) => i !== index);
    setImgPdfs(updatedFiles);
    (imgPdfRef.current as HTMLInputElement).value = '';
  };

  return (
    <Upload
      ref={imgPdfRef}
      label="Image & Pdf Only"
      accept="imgAndPdf"
      onChange={handleImgPdfUpload}
    >
      <ul className="mt-5">
        {imgPdfs?.map((file: File, index: number) => (
          <li
            className="relative my-3 h-10 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-500"
            key={file.name}
          >
            <h2>{file.name}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute top-2 right-3 h-5 w-5 cursor-pointer text-gray-500"
              onClick={() => handleImgPdfDelete(index)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </li>
        ))}
      </ul>
    </Upload>
  );
};

export const MultipleFiles = () => {
  const multiRef = React.useRef<HTMLInputElement>(null);
  const [multiImages, setMultiImages] = React.useState<Array<File>>([]);

  const handleMultiImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const uploadedFiles = (event.target as HTMLInputElement).files;
    const newFiles = Object.entries(uploadedFiles as object)
      .map((file) => {
        if (file[1].type.includes('image')) return file[1];
      })
      .filter((file) => file !== undefined);
    setMultiImages((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleMultiImageDelete = (index: number) => {
    const updatedFiles = multiImages.filter((_, i) => i !== index);
    setMultiImages(updatedFiles);
    (multiRef.current as HTMLInputElement).value = '';
  };

  return (
    <Upload
      ref={multiRef}
      label="Choose Multiple Files"
      accept="img"
      multiple
      onChange={handleMultiImageUpload}
    >
      <ul className="mt-5 flex flex-row flex-wrap gap-4">
        {multiImages?.map((file: File, index: number) => (
          <li
            className="group relative h-24 w-28 overflow-hidden rounded-md"
            key={file.name}
          >
            <img
              className="h-full w-full rounded-md object-cover"
              src={URL.createObjectURL(file)}
              alt={file.name}
            />
            <div className="absolute top-full h-full w-full bg-gray-900/50 transition-all duration-75 ease-out group-hover:top-0" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="invisible absolute bottom-2 right-1 h-5 w-5 translate-y-full cursor-pointer text-gray-0 transition duration-75 group-hover:visible group-hover:translate-y-0"
              onClick={() => handleMultiImageDelete(index)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </li>
        ))}
      </ul>
    </Upload>
  );
};

export const WithDropzone = () => {
  const [dropzoneFiles, setDropzoneFiles] = React.useState<Array<File>>([]);

  const onDrop = React.useCallback((acceptedFiles: Array<File>) => {
    setDropzoneFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const handleDelete = (index: number) => {
    const updatedFiles = dropzoneFiles.filter((_, i) => i !== index);
    setDropzoneFiles(updatedFiles);
  };

  const { getRootProps, getInputProps, inputRef } = useDropzone({
    onDrop,
    accept: { 'image/png': ['.png'] },
  });

  return (
    <Upload
      ref={inputRef}
      label="Image & Pdf Only"
      accept="imgAndPdf"
      dropzoneRootProps={getRootProps()}
      dropzoneInputProps={getInputProps()}
    >
      <ul className="mt-5">
        {dropzoneFiles?.map((file: File, index: number) => (
          <li
            className="relative my-3 h-10 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-500"
            key={file.name}
          >
            <h2>{file.name}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute top-2 right-3 h-5 w-5 cursor-pointer text-gray-500"
              onClick={() => handleDelete(index)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </li>
        ))}
      </ul>
    </Upload>
  );
};
