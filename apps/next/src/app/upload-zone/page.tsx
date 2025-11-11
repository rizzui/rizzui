'use client';

import { UploadZone } from '@/components/upload-zone';
import { useState } from 'react';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function UploadZonePage() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [imageFiles, setImageFiles] = useState<FileList | null>(null);
  const [multipleFiles, setMultipleFiles] = useState<FileList | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/upload-zone" />

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            UploadZone Component
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Drag and drop file upload with native HTML5 APIs
          </p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Built-in • No third-party dependencies • Follows rizzui patterns
          </div>
        </div>

        {/* Default */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Default
          </h2>
          <div className="space-y-4">
            <UploadZone label="File Upload" />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Basic upload zone with default outline variant. Drag files here or
              click to browse.
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
              <UploadZone label="Outline Variant" variant="outline" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Flat
              </h3>
              <UploadZone label="Flat Variant" variant="flat" />
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Sizes
          </h2>
          <div className="space-y-4">
            <UploadZone label="Small Upload Zone" size="sm" />
            <UploadZone label="Medium Upload Zone (Default)" size="md" />
            <UploadZone label="Large Upload Zone" size="lg" />
          </div>
        </section>

        {/* Multiple Files */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Multiple Files Support
          </h2>
          <div className="space-y-4">
            <UploadZone
              label="Upload Multiple Files"
              multiple
              onChange={(files) => setMultipleFiles(files)}
              helperText="You can drag and drop multiple files or click to browse"
            />
            {multipleFiles && multipleFiles.length > 0 && (
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Selected Files ({multipleFiles.length}):
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  {Array.from(multipleFiles).map((file, index) => (
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
              <UploadZone
                label="Upload Images"
                accept="image/*"
                onChange={(files) => setImageFiles(files)}
                helperText="Only image files are allowed (JPG, PNG, GIF, etc.)"
              />
              {imageFiles && imageFiles.length > 0 && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Array.from(imageFiles).map((file, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700"
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                PDF Files Only
              </h3>
              <UploadZone
                label="Upload PDF"
                accept=".pdf,application/pdf"
                helperText="Only PDF files are allowed"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Documents (PDF, DOC, DOCX)
              </h3>
              <UploadZone
                label="Upload Documents"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                helperText="PDF, DOC, and DOCX files are allowed"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Images and Videos
              </h3>
              <UploadZone
                label="Upload Media"
                accept="image/*,video/*"
                multiple
                helperText="Images and videos are allowed"
              />
            </div>
          </div>
        </section>

        {/* Custom Placeholder */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Custom Placeholder & Icon
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Custom Text
              </h3>
              <UploadZone
                label="Custom Placeholder"
                placeholder="Drop your files here or click to select"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Custom Icon
              </h3>
              <UploadZone
                label="With Custom Icon"
                icon={
                  <svg
                    className="w-12 h-12 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                }
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                No Icon
              </h3>
              <UploadZone
                label="Without Icon"
                icon={null}
                placeholder="Just text, no icon"
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
            <UploadZone
              label="Upload File"
              helperText="Maximum file size: 10MB. Supported formats: PDF, DOC, DOCX"
            />
            <UploadZone
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
            <UploadZone
              label="Upload File"
              error="Please select a valid file"
            />
            <UploadZone
              label="Upload Image"
              accept="image/*"
              error="File size exceeds the maximum limit of 10MB"
            />
            <UploadZone
              label="Required File"
              error="This field is required"
              required
            />
          </div>
        </section>

        {/* Disabled State */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Disabled State
          </h2>
          <div className="space-y-4">
            <UploadZone label="Disabled Upload Zone" disabled />
            <UploadZone
              label="Disabled with Helper Text"
              disabled
              helperText="This upload zone is disabled"
            />
            <UploadZone
              label="Disabled Multiple Files"
              multiple
              disabled
              helperText="Multiple file selection is disabled"
            />
          </div>
        </section>

        {/* File Preview */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            File Preview Example
          </h2>
          <div className="space-y-4">
            <UploadZone
              label="Upload Images"
              accept="image/*"
              multiple
              onChange={(files) => setFiles(files)}
              helperText="Select multiple images to see preview"
            />
            {files && files.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Preview ({files.length}{' '}
                  {files.length === 1 ? 'file' : 'files'})
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Array.from(files).map((file, index) => (
                    <div
                      key={index}
                      className="relative group rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700"
                    >
                      {file.type.startsWith('image/') ? (
                        <div className="aspect-square">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="aspect-square flex items-center justify-center">
                          <div className="text-center">
                            <svg
                              className="w-12 h-12 mx-auto text-gray-400 mb-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            <p className="text-xs text-gray-500 truncate px-2">
                              {file.name}
                            </p>
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <p className="text-white text-xs font-medium px-2 text-center">
                          {file.name}
                        </p>
                      </div>
                      <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {(file.size / 1024).toFixed(1)} KB
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Props Documentation */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            UploadZone Props & API
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
                    'outline' | 'flat'
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
                    Upload zone size
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
                    Accepted file types (e.g., 'image/*', '.pdf',
                    'image/*,video/*')
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
                    placeholder
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    ReactNode
                  </td>
                  <td className="p-3 font-mono text-xs">-</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Custom placeholder text (default: "Drag & drop files here or
                    click to browse")
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    icon
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    ReactNode | null
                  </td>
                  <td className="p-3 font-mono text-xs">-</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Custom icon (set to null to hide icon)
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    onChange
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    (files: FileList | null) =&gt; void
                  </td>
                  <td className="p-3 font-mono text-xs">-</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Callback when files are selected
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    onDrop
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    (files: FileList) =&gt; void
                  </td>
                  <td className="p-3 font-mono text-xs">-</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Callback specifically for drag and drop events
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
                    Helper text below upload zone
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
                    Disable upload zone
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
                  {`import { UploadZone } from '@/components/upload-zone';

<UploadZone label="File Upload" />`}
                </pre>
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Multiple files with accept types:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                  {`<UploadZone
  label="Upload Images"
  accept="image/*"
  multiple
  onChange={(files) => {
    if (files) {
      console.log('Selected files:', files);
    }
  }}
/>`}
                </pre>
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Custom placeholder and icon:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                  {`<UploadZone
  label="Upload Documents"
  placeholder="Drop your PDF files here"
  icon={<CustomIcon />}
  accept=".pdf"
/>`}
                </pre>
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  With drag and drop callback:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                  {`<UploadZone
  label="Upload Files"
  multiple
  onDrop={(files) => {
    console.log('Files dropped:', files);
    // Handle file upload
  }}
  onChange={(files) => {
    console.log('Files selected:', files);
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
