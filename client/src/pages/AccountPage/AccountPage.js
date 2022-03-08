import React, { useState, useEffect } from 'react'
import PollAPI from '../../utils/PollAPI'
import './AccountPage.css'
import avatar from '../../images/Avatar.svg'
import UserContext from '../../utils/UserContext'
import CreateAvatar from "../../components/CreateAvatar";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const AccountPage = _ => {


  const { updateUser, uploadAvatar } = PollAPI

  const [ userState, userSetState ] = useState({
    userInfo: sessionStorage.getItem('userInfo') || '',
    username: '',
    email: '',
    userAvatar: '',
    userId: '',
    imagePreview: ''
  })

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");


  userState.handleToggleClick = () => {
    toggle();
    getData(true, imageSrc);
  };

  userState.handleSetImagePreview = (imagePreview) => {
    console.log(userState)
    userSetState({...userState, imagePreview: imagePreview})
  }

  userState.onSelectPic = () => {
    //console.log(preview)
    uploadAvatar({image: userState.imagePreview, user: userState.userId})
      .then(({data}) => {
        console.log(data)
        updateUser(userState.userId, {avatar: data.secure_url})
      })
  };


  const getData = (isOpened, imageSrc) => {
    setIsOpen(isOpened);
    setImageSrc(imageSrc);
  };

  useEffect(() => {
    console.log(userState)
    // Check token session, set initalLoad to false
    let userInfo = JSON.parse(userState.userInfo)
    userSetState({...userState,
      username: userInfo.username,
      email: userInfo.email,
      userAvatar: userInfo.userAvatar,
      userId: userInfo.userId
    })
  }, [userState.userInfo])


  return (

    <UserContext.Provider value={userState}>
      <h2 className="myPollsH2">My Polls</h2>
      <button
        type="button"
        onClick={userState.handleToggleClick}
        className="btn btn-primary rounded-circle mt-2 opaque profile-pic"
        >
        <div className="user-avatar">
          <img alt="User Avatar" src={userState.userAvatar ? userState.userAvatar : avatar }/>
          <div className="user-info">
            <h4>{userState.username}</h4>
            <p className="email">{userState.email}</p>
          </div>
        </div>
      </button>
      {isOpen && !imageSrc && (
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Upload Image</ModalHeader>
          <ModalBody>
            <CreateAvatar getData={getData} />
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      )}
    </UserContext.Provider>

  )

}
export default AccountPage