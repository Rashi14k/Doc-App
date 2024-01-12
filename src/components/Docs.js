
import React, { useEffect, useRef, useState } from 'react'
import ModalComponent from './ModalComponents';
import { addDoc, collection, doc, onSnapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import EditDocs from './EditDocs';

function Docs({database}) {
    const [open, setOpen] = React.useState(false);
    const [title,setTitle]=useState('')
    const handleOpen = () => setOpen(true);
    const handleClose=()=>setOpen(false);
    const collectionRef = collection(database, 'docsData')
    const isMounted = useRef()
    const[docsData,seteDocsData]=useState([])
    let navigate=useNavigate()
    const addData=()=>{
      addDoc(collectionRef,{title:title,
                docQuill:''})
      .then(()=>{
        alert("document added")
        handleClose()
      })
      .catch(()=>{
        alert("document cannot added")
      })

     }
     const getData=()=>{
      onSnapshot(collectionRef, (data) => {
        seteDocsData(data.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
        }))
    })
     }
     useEffect(() => {
      if(isMounted.current){
          return 
      }
      isMounted.current = true;
      getData()
  }, [])

  const getID = (id) => {
    navigate(`/editdocs/${id}`)
}
    

    
  return (
    <div className='docs-main'>
        <div dangerouslySetInnerHTML={{__html: doc.docQuill}} />
        <h1>Doc App</h1>
        <button onClick={handleOpen} className='docs-add rounded mt-2' style={{border:'none', cursor:'pointer',  height: '40px',
    width: '200px'}}>Add Document</button>
    <ModalComponent open={open} setOpen={setOpen} title={title} setTitle={setTitle} addData={addData} />
    <div className='row m-3 mt-5'>
                {docsData.map((doc) => {
                    return (
                        <div className='col-lg-3 col-m-4 col-sm-6 me-auto '>
                            <div className='grid mt-5' onClick={()=>getID(doc.id)}>
                            <p>{doc.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
  )

  }
export default Docs