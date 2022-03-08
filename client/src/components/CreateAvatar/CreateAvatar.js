import React, { useContext, useState } from "react";
import Avatar from "react-avatar-edit";
import UserContext from '../../utils/UserContext'
import PollAPI from "../../utils/PollAPI";


const CreateAvatar = () => {

  const [preview, setPreview] = useState("");

  const { handleUpdateUser, imagePreview, onSelectPic, handleSetImagePreview } = useContext(UserContext)


  return (
    <>
          <div className="row mx-auto my-3">
            <div className="col-md-6 m-auto">
              <div
                className="mx-auto my-4 choose-file"
                // style={{ overflow: "scroll" }}
              >
                <Avatar
                  width={320}
                  height={180}
                  imageWidth={"100%"}
                  onCrop={handleSetImagePreview}
                  cropRadius
                />
              </div>
            </div>
            <div className="col-md-6 m-auto">
              <div className="previewDiv rounded-circle m-auto">
                {imagePreview && (
                  <img
                    alt="preview"
                    src={imagePreview}
                    width="100%"
                    height="100%"
                    className="rounded-circle"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <button
                type="button"
                className="btn btn-success btn-md float-right mr-2 mb-3 text-center"
                onClick={onSelectPic}
                disabled={!imagePreview}
                style={{ minWidth: "100px" }}
              >
                Ok
              </button>
            </div>
          </div>
    </>
  );
};

export default CreateAvatar;
