import React,{useState} from 'react'
import {IoCloudUpload, IoTrash} from 'react-icons/io5'
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { auth } from "../../Firebase/firebase";
import Link from "next/link"

import {projectfirestore, projectstorage} from '../../Firebase/firebase'
import { updateDoc,arrayUnion, onSnapshot,setdoc,doc } from "firebase/firestore"; 
import { ref,getDownloadURL,uploadBytes,deleteObject,listAll,uploadBytesResumable} from 'firebase/storage';

export default function UploadForm (){
    const [error, setError] = useState(null);
    const [loading,setloading] = useState(false)
    const [imgloading,setimgloading] = useState(false)
    const [file, setFile] = useState(null);
    const [user,setUser] = useState({});
    const [imagesucess,setimagesuccess] = useState(null);
    const [imagelist,setImagelist] = useState([])
    const [progress,setprogress] = useState(null)
    const [url,seturl] = useState(null);

    let options = ['image/png', "image/jpg", "image/jpeg"];


    const Upload = (e)=>{
        setloading(true);
        const file = e.target.files[0]
        const storageref = ref(projectstorage,`files/${user?.email}-${file.name}`);
        const uploadTask = uploadBytesResumable(storageref, file);
        
        uploadTask.on("state_changed", (snapshot)=>{
          const uploadprogress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setprogress(uploadprogress)
        },  (error) => {
          // Handle unsuccessful uploads
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            seturl(downloadURL)
            setloading(false)
          });
        }
        )
    }
    

    const uploadimage = async ()=>{
        try{
            setloading(true)
            if(!url){
              alert("Error")
            }
            else{
              const data = {
                  id:`${user?.uuid}`,

                  fileUrl:url
              }
              await updateDoc(doc(projectfirestore, "images", `${user?.email}`), {
                saveImages:arrayUnion({
                 
                    id:`${user?.uuid}`,
  
                    fileUrl:url
                
              })
              }  
           )
              setloading(false);
              seturl(null)
              
            }
          }
          catch(err){
          console.log(err.message)
          }
          }
    return(
        <>

        <div className='flex flex-col items-center  mt-[200px]'>
            <h1 className='font-bold text-2xl'>Files and assets</h1>
            <button className='border-[1px] border-white rounded-md p-2'><Link href="/dashboard">Back to all files</Link></button>
        </div>
     

        <div className='flex flex-col items-center  mt-[30px]'>
            <div>
         </div>

            <div className='border-[1px] border-white md:w-[550px] flex flex-col items-center justify-center p-4'>
        <label for='img' className='flex justify-center cursor-pointer items-center gap-3'>
          <IoCloudUpload fontSize="30"/> Upload Files
                      </label>
                   <input type="file"  id='img' style={{display:'none'}} onChange={Upload}/>

                   <p className='mt-[25px]'>PDF,DOC,TXT files are allowed</p>
                   
                   </div>

                   <div className='LoadingProgress'>
                    {progress !== null ? (<div className="flex flex-col">
                        <p>Loading..</p>
                    <span>{progress}</span>
                    </div>):null}
                   </div>
        </div>

        

        </>
    )
}