import React, { useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import moment from "moment";
import { useSelector } from "react-redux";
import { Button, Textarea } from "flowbite-react";
const Comment = ({ comment, onLike, onEdit }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedcontent, setEditedContent] = useState(comment.content);

  console.log(user);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${comment.userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, [comment]);

  const handleEdit = async () => {
    setIsEditing(true);
    setEditedContent(comment.content);
  };

  const handleSave = async () => {
    try {
        const res = await fetch(`/api/comment/editComment/${comment._id}`,{
            method:"PUT",
            body:JSON.stringify({
                content:editedcontent
            }),
            headers:{
                "Content-Type":"application/json"
            }
        })
        if(res.ok){
            setIsEditing(false);
            onEdit(comment, editedcontent)
        }
    } catch (error) {
        console.log(error.message);
    }
  }
  

  return (
    <div className="flex p-4 border-b dark:border-gray-600 text-sm">
      <div className="flex-shrink-0 mr-3">
        <img
          className="w-10 h-10 rounded-full bg-gray-200"
          src={user.profilePicture}
          alt={user.username}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-1">
          <span className="font-bold mr-1 text-xs truncate">
            {user ? `@${user.username}` : "anonymous user"}
          </span>
          <span className="text-gray-500 text-xs">
            {moment(comment.createdAt).fromNow()}
          </span>
        </div>

        {isEditing ? (
          <>
            <Textarea
              className="mb-2"
              value={editedcontent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
            <div className="flex justify-end gap-2 text-sm">
                <Button type="button" size='sm' gradientDuoTone='purpleToBlue'
                onClick={handleSave}>
                    Save

                </Button>
                <Button onClick={()=>setIsEditing(false)} type="button" size='sm' gradientDuoTone='purpleToBlue' outline>
                    Cancel
                </Button>
            </div>
          </>
        ) : (
          <>
            <p className="text-gray-500 pb-2">{comment.content}</p>
            <div className="flex items-center pt-2 text-xs border-t dark:border-gray-700 max-w-fit gap-2">
              <button
                type="button"
                onClick={() => onLike(comment._id)}
                className={`text-gray-400 hover:text-blue-500 ${
                  currentUser &&
                  comment.likes.includes(currentUser._id) &&
                  "!text-blue-500"
                }`}
              >
                <FaThumbsUp className="text-sm" />
              </button>
              <p className="text-gray-400">
                {comment.numberOfLike > 0 &&
                  comment.numberOfLike +
                    " " +
                    (comment.numberOfLike === 1 ? "like" : "likes")}
              </p>

              {
                // we are only showing the edit button to the ower of the comment or the admin
                currentUser &&
                  (currentUser._id === comment.userId ||
                    currentUser.isAdmin) && (
                    <button
                      onClick={handleEdit}
                      type="button"
                      className="text-gray-400 hover:text-blue-500"
                    >
                      Edit
                    </button>
                  )
              }
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Comment;
