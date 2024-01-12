import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    width:400,
    padding:4,
    height:200
};

function ModalComponent({
    open,
    setOpen,
    setTitle,addData
}) {
    const handleClose = () => setOpen(false);
    
    

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <input onChange={e=>setTitle(e.target.value)} className='text-center p-3 w-100' type='text' placeholder='add new document'/>
                    <div onClick={addData} className='button-add'><button className='docs-add'>Add</button></div>
                </Box>
            </Modal>
        </div>
    );
}
export default ModalComponent;