import { generateReactHelpers } from "@uploadthing/react/hooks";
 
import type { OurFileRouter } from "@/src/api/uploadthing/core";
 
export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();