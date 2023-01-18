import React from 'react'
import ButtonOutlineBlue from './ButtonOutlineBlue';
import Modal from 'react-bootstrap/Modal';
import AlbumsList from '../features/albums/AlbumsList'

const AlbumsModal = (props) => {
 

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title  id="contained-modal-title-vcenter">
          Albums
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
       <div className='w-full flex justify-center items-center border'>
         <AlbumsList  />
       </div>
       

      </Modal.Body>
      <Modal.Footer>
        <ButtonOutlineBlue onClick={props.onHide}>Close</ButtonOutlineBlue>
      </Modal.Footer>
    </Modal>
  );
}

export default AlbumsModal