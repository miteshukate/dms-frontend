"use client";

import { File, X } from "lucide-react";
import { useRef, useState } from "react";
import type { ChangeEvent, DragEvent } from "react";
import { toast } from "sonner";
import type { AxiosProgressEvent } from "axios";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FilesApi } from "@/client";
import { getAxiosInstance } from "@/client/axios-setup";

export default function FileUpload04({ setIsUploadModalOpen }: { setIsUploadModalOpen: (open: boolean) => void }) {
  const [uploadState, setUploadState] = useState<{
    file: File | null;
    progress: number;
    uploading: boolean;
  }>({
    file: null,
    progress: 0,
    uploading: false,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File | undefined) => {
    if (!file) return;

    // Allow any file type - set uploading to false so Upload button can be clicked
    setUploadState({ file, progress: 0, uploading: false });
  };

  const uploadFileToAPI = async (file: File) => {
    try {
      // Set uploading to true when upload starts
      setUploadState((prev) => ({
        ...prev,
        uploading: true,
        progress: 0,
      }));

      const axiosInstance = getAxiosInstance();
      const fileApi = new FilesApi(undefined, undefined, axiosInstance);

      // Set up progress tracking for the upload
      const config = {
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          if (progressEvent.total) {
            const percentComplete = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadState((prev) => ({
              ...prev,
              progress: percentComplete,
            }));
            // Once upload is complete, close the modal after a short delay to show 100% progress
            if (percentComplete === 100) {
              setTimeout(() => {
                setIsUploadModalOpen(false);
              }, 1500);
            }
          }
        },
      };

      console.log("Uploading file:", file.name);
      const response = await fileApi.uploadFile(
        file,
        undefined,
        undefined,
        undefined,
        config
      );

      console.log("File uploaded successfully:", response.data);
      toast.success("File uploaded successfully!", {
        position: "bottom-right",
        duration: 3000,
      });

      setUploadState((prev) => ({
        ...prev,
        progress: 100,
        uploading: false,
      }));

      // Close modal after successful upload
      setTimeout(() => {
        setIsUploadModalOpen(false);
        resetFile();
      }, 1500);
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Failed to upload file. Please try again.", {
        position: "bottom-right",
        duration: 3000,
      });
      resetFile();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleFile(event.target.files?.[0]);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    handleFile(event.dataTransfer.files?.[0]);
  };

  const resetFile = () => {
    setUploadState({ file: null, progress: 0, uploading: false });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getFileIcon = () => {
    if (!uploadState.file) return <File />;
    // Return file icon for all file types
    return <File className="h-5 w-5 text-foreground" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  const { file, progress, uploading } = uploadState;

  return (
    <div className="flex items-center justify-center p-10 w-full">
      <form className="w-full" onSubmit={(e) => e.preventDefault()}>
        <h3 className="text-balance text-lg font-semibold text-foreground">File Upload</h3>

        <div
          className="flex justify-center rounded-md border mt-2 border-dashed border-input px-6 py-12"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <div>
            <File
              className="mx-auto h-12 w-12 text-muted-foreground"
              aria-hidden={true}
            />
            <div className="flex text-sm leading-6 text-muted-foreground">
              <p>Drag and drop or</p>
              <label
                htmlFor="file-upload-03"
                className="relative cursor-pointer rounded-sm pl-1 font-medium text-primary hover:underline hover:underline-offset-4"
              >
                <span>choose file</span>
                <input
                  id="file-upload-03"
                  name="file-upload-03"
                  type="file"
                  className="sr-only"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                />
              </label>
              <p className="text-pretty pl-1">to upload</p>
            </div>
          </div>
        </div>

        <p className="text-pretty mt-2 text-xs leading-5 text-muted-foreground sm:flex sm:items-center sm:justify-between">
          <span>Accepted file types: All file types.</span>
          <span className="pl-1 sm:pl-0">Max. size: 10MB</span>
        </p>


        {file && (
          <Card className="relative mt-8 bg-muted p-4 gap-4">
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              className="absolute right-1 top-1 text-muted-foreground hover:text-foreground"
              aria-label="Remove"
              onClick={resetFile}
            >
              <X className="h-5 w-5 shrink-0" aria-hidden={true} />
            </Button>

            <div className="flex items-center space-x-2.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-background shadow-sm ring-1 ring-inset ring-border">
                {getFileIcon()}
              </span>
              <div>
                <p className="text-pretty text-xs font-medium text-foreground">
                  {file?.name}
                </p>
                <p className="text-pretty mt-0.5 text-xs text-muted-foreground">
                  {file && formatFileSize(file.size)}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Progress value={progress} className="h-1.5" />
              <span className="text-xs text-muted-foreground">{progress}%</span>
            </div>
          </Card>
        )}

        <div className="mt-8 flex items-center justify-end space-x-3">
          <Button
            type="button"
            variant="outline"
            className="whitespace-nowrap"
            onClick={resetFile}
            disabled={!file}
          >
            Cancel
          </Button>
          <Button
            type="button"
            className="whitespace-nowrap"
            disabled={!file || uploading}
            onClick={() => {
              if (file && !uploading) {
                uploadFileToAPI(file);
              }
            }}
          >
            Upload
          </Button>
        </div>
      </form>
    </div>
  );
}
