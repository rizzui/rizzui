import Upload from './upload';
import FileInput from './file-input';

export { useDropzone } from 'react-dropzone';
export type {
  ErrorCode,
  FileError,
  FileRejection,
  Accept,
} from 'react-dropzone';

export type { UploadProps } from './upload';
export type { FileInputProps } from './file-input';

export { FileInput };

export default Upload;
