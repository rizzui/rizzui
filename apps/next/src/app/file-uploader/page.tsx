'use client';

import { FileUploader } from '@/components/file-uploader';
import { useState } from 'react';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function FileUploaderPage() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [errorFiles, setErrorFiles] = useState<FileList | null>(null);
  const [clearableFiles, setClearableFiles] = useState<FileList | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleClear = () => {
    setClearableFiles(null);
    // Reset the input value
    const input = document.getElementById('clearable-uploader') as HTMLInputElement;
    if (input) {
      input.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/file-uploader" />

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            File Uploader Component
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Native file input with multiple files and accept types support
          </p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Follows rizzui patterns
          </div>
        </div>

        {/* Default */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Default
          </h2>
          <div className="space-y-4">
            <FileUploader label="Upload File" />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Basic file uploader with default outline variant
            </p>
          </div>
        </section>

        {/* Variants */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Variants
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Outline (Default)
              </h3>
              <FileUploader label="Outline Variant" variant="outline" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Flat
              </h3>
              <FileUploader label="Flat Variant" variant="flat" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Text
              </h3>
              <FileUploader label="Text Variant" variant="text" />
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Sizes
          </h2>
          <div className="space-y-4">
            <FileUploader label="Small File Uploader" size="sm" />
            <FileUploader label="Medium File Uploader (Default)" size="md" />
            <FileUploader label="Large File Uploader" size="lg" />
          </div>
        </section>

        {/* Multiple Files */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Multiple Files Support
          </h2>
          <div className="space-y-4">
            <FileUploader
              label="Upload Multiple Files"
              multiple
              helperText="You can select multiple files at once"
            />
            {files && files.length > 0 && (
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Selected Files ({files.length}):
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  {Array.from(files).map((file, index) => (
                    <li key={index}>
                      {file.name} ({(file.size / 1024).toFixed(2)} KB)
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Accept File Types */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Accept File Types
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Images Only
              </h3>
              <FileUploader
                label="Upload Images"
                accept="image/*"
                helperText="Only image files are allowed"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                PDF Files Only
              </h3>
              <FileUploader
                label="Upload PDF"
                accept=".pdf,application/pdf"
                helperText="Only PDF files are allowed"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Documents (PDF, DOC, DOCX)
              </h3>
              <FileUploader
                label="Upload Documents"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                helperText="PDF, DOC, and DOCX files are allowed"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Images and Videos
              </h3>
              <FileUploader
                label="Upload Media"
                accept="image/*,video/*"
                multiple
                helperText="Images and videos are allowed"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Multiple Images with Multiple Selection
              </h3>
              <FileUploader
                label="Upload Multiple Images"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                helperText="Select multiple image files"
              />
            </div>
          </div>
        </section>

        {/* With Helper Text */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            With Helper Text
          </h2>
          <div className="space-y-4">
            <FileUploader
              label="Upload File"
              helperText="Maximum file size: 10MB. Supported formats: PDF, DOC, DOCX"
            />
            <FileUploader
              label="Profile Picture"
              accept="image/*"
              helperText="Recommended size: 500x500px. Max size: 2MB"
            />
          </div>
        </section>

        {/* Error State */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Error State
          </h2>
          <div className="space-y-4">
            <FileUploader
              label="Upload File"
              error="Please select a valid file"
            />
            <FileUploader
              label="Upload Image"
              accept="image/*"
              error="File size exceeds the maximum limit of 10MB"
            />
            <FileUploader
              label="Required File"
              error="This field is required"
              required
            />
          </div>
        </section>

        {/* Clearable */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Clearable File Uploader
          </h2>
          <div className="space-y-4">
            <FileUploader
              id="clearable-uploader"
              label="Upload File"
              clearable
              onClear={handleClear}
              helperText="Select a file and use the clear button to reset"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Select a file and hover over the input to see the clear button
            </p>
          </div>
        </section>

        {/* Disabled State */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Disabled State
          </h2>
          <div className="space-y-4">
            <FileUploader label="Disabled Uploader" disabled />
            <FileUploader
              label="Disabled with Helper Text"
              disabled
              helperText="This uploader is disabled"
            />
            <FileUploader
              label="Disabled Multiple Files"
              multiple
              disabled
              helperText="Multiple file selection is disabled"
            />
          </div>
        </section>

        {/* Combined Examples */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Combined Examples
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Multiple Images with Flat Variant
              </h3>
              <FileUploader
                label="Upload Multiple Images"
                variant="flat"
                accept="image/*"
                multiple
                helperText="Select multiple image files (JPG, PNG, GIF)"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Large Size with Text Variant
              </h3>
              <FileUploader
                label="Upload Document"
                variant="text"
                size="lg"
                accept=".pdf,.doc,.docx"
                helperText="Upload your document here"
              />
            </div>
          </div>
        </section>

        {/* Props Documentation */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            File Uploader Props & API
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="p-3 text-left text-gray-900 dark:text-white">
                    Prop
                  </th>
                  <th className="p-3 text-left text-gray-900 dark:text-white">
                    Type
                  </th>
                  <th className="p-3 text-left text-gray-900 dark:text-white">
                    Default
                  </th>
                  <th className="p-3 text-left text-gray-900 dark:text-white">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    variant
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    'outline' | 'flat' | 'text'
                  </td>
                  <td className="p-3 font-mono text-xs">'outline'</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Visual style variant
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    size
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    'sm' | 'md' | 'lg'
                  </td>
                  <td className="p-3 font-mono text-xs">'md'</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Uploader size
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    multiple
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    boolean
                  </td>
                  <td className="p-3 font-mono text-xs">false</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Allow multiple file selection
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    accept
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    string
                  </td>
                  <td className="p-3 font-mono text-xs">-</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Accepted file types (e.g., 'image/*', '.pdf', 'image/*,video/*')
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    label
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    ReactNode
                  </td>
                  <td className="p-3 font-mono text-xs">-</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Field label
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    clearable
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    boolean
                  </td>
                  <td className="p-3 font-mono text-xs">false</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Show clear button
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    onClear
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    (e) =&gt; void
                  </td>
                  <td className="p-3 font-mono text-xs">-</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Clear button callback
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    helperText
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    ReactNode
                  </td>
                  <td className="p-3 font-mono text-xs">-</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Helper text below input
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    error
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    string
                  </td>
                  <td className="p-3 font-mono text-xs">-</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Error message
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    disabled
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    boolean
                  </td>
                  <td className="p-3 font-mono text-xs">false</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Disable uploader
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-gray-50 dark:bg-gray-900 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Usage Examples
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Basic:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                  {`import { FileUploader } from '@/components/file-uploader';

<FileUploader label="Upload File" />`}
                </pre>
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Multiple files:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                  {`<FileUploader
  label="Upload Multiple Files"
  multiple
/>`}
                </pre>
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  With accept types:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                  {`<FileUploader
  label="Upload Images"
  accept="image/*"
  multiple
  helperText="Only image files are allowed"
/>`}
                </pre>
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  With state management:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                  {`const [files, setFiles] = useState<FileList | null>(null);

<FileUploader
  label="Upload Files"
  multiple
  accept="image/*"
  onChange={(e) => setFiles(e.target.files)}
  clearable
  onClear={() => {
    setFiles(null);
    // Reset input value
  }}
/>`}
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

