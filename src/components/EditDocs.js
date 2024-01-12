import { collection, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom'

function EditDocs({database}) {
    const[docQuill, setdocQuill]=useState('')
    let params=useParams()
    console.log(params);
    const collectionRef = collection(database, 'docsData')
    const [documentTitle, setDocumentTitle] = useState('')
    const getQuillData=(value)=>{
        setdocQuill(value)

    }
    
    useEffect(()=>{
        const updateDocsData=setTimeout(()=>{
            const document = doc(collectionRef, params.id)
            updateDoc(document, { docQuill:docQuill

            })
            

        },100) 
        return () => clearTimeout(updateDocsData)  
    },[docQuill])
    
    const isMounted=useRef()
    const getData = () => {
        const document = doc(collectionRef, params.id)
        onSnapshot(document, (docs) => {
            setDocumentTitle(docs.data().title)
            setdocQuill(docs.data().docQuill)
        })
    }
    useEffect(() => {
        if(isMounted.current){
            return 
        }

        isMounted.current = true;
        getData()
    }, [])
  return (
    <div className='editdoc'>
        <h1 className='text-center'>{documentTitle}</h1>
        <ReactQuill value={docQuill} onChange={getQuillData}/>

    </div>
  )
}

export default EditDocs