import {v2 as cloudinary}  from "cloudinary";
import fs from "fs";
 
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_KEY 
});

const uploadOnCloudinary = async(localFilePath)=>{
    try{
        if(!localFilePath) return null;
        const response=await cloudinary.uploader.upload(localFilePath, {resource_type:'auto'})
        console.log("file is uploaded in cloudinary",response.url);
        return response;
    }catch(error){
        fs.unlinkSync(localFilePath); // delete thelocally saved temperorary file if upload fails
        console.error("Error uploading to Cloudinary:",error.message);
    }
}
    
export {uploadOnCloudinary}