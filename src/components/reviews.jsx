import React, { useEffect, useState } from 'react'
import { FaReply } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';

import { IoMdSend } from "react-icons/io";
import { FaRegComments } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import ReplysHolder from './replysHolder'

export default function Reviews({currentSingle}) {

  const [replyCommentId, setReplyCommentId] = useState(null);
  const [replyInReplyId, setReplyInReplyId] = useState(null);

  const [seeReply, setSeeReply] = useState(null);
  const [commentValue, setCommentValue] = useState('');


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const replyBtnClick = (id) => {
    setReplyCommentId(id === replyCommentId ? null : id);
    setCommentValue('');
    setReplyInReplyId(null)
    setSeeReply(null)
  }
  const replyNumClick = (id) => {
    setSeeReply(id === seeReply ? null : id);
    setReplyCommentId(null)
  }

  return (
    <div className="ReviewS">
    <h1>{currentSingle.comments.length < 1 ? 'Type The First Comment' : 'Comments'}</h1>
    <div className="commentsHolder">
      {currentSingle.comments.map((comment) => (
        <div key={comment.userId} className="card">
          <button className="reply" onClick={() => {replyBtnClick(comment.userId)}}>
            <FaReply /> Reply
          </button>
          <h3 className='imageText'>
            {comment.name.split(' ').length === 1 ? comment.name.substring(0, 2)
            : `${comment.name.split(' ')[0][0]}${comment.name.split(' ')[1][0]}`}
          </h3>
          <div className="text">
            <h3>{comment.name}</h3>         
            <p>{comment.details}</p>
            <h4 className='replyNum' onClick={() => {replyNumClick(comment.userId)}}>
              <FaRegComments /> {comment.replys.length == 0 ? 'No Replys' : comment.replys.length == 1 ? `${comment.replys[0].name} has Replied` : `${comment.replys[0].name} and ${comment.replys.length -1 } other replies`}
            </h4>

            {/*! ====================== replysHolder ==================== */}
            {seeReply === comment.userId && (
              <ReplysHolder comment={comment}/>
            )}

            {replyCommentId === comment.userId && (
              <TextField
                className='customInput'
                InputLabelProps={{ classes: { root: 'customLabel', focused: 'focusedLabel' } }}
                error={Boolean(errors.comment)}
                helperText={Boolean(errors.comment) ? "Please enter atleast two words" : null}
                {...register("comment", { required: true, minLength: 7 })}
                variant="filled"
                label="Comment"
                placeholder="Type a Comment"
                value={commentValue}
                onChange={(event) => {
                  setCommentValue(event.target.value);
                }}
                InputProps={{ endAdornment: <InputAdornment position="end"><IoMdSend onClick={() => {
                  alert('')
                }}/></InputAdornment> 
              }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
    <div className="addCommentDev">
      <h3 className='imageText'>
        MS
      </h3>
      <TextField
        className='customInput'
        InputLabelProps={{ classes: { root: 'customLabel', focused: 'focusedLabel' } }}
        error={Boolean(errors.comment)}
        helperText={Boolean(errors.comment) ? "Please enter atleast two words" : null}
        {...register("comment", { required: true, minLength: 7 })}
        variant="filled"
        label="Comment"
        placeholder="Type a Comment"
        style={{flex: '1'}}
        value={commentValue}
        onChange={(event) => {
          setCommentValue(event.target.value);
        }}
        InputProps={{ endAdornment: <InputAdornment position="end"><IoMdSend onClick={() => {
          alert('')
        }}/></InputAdornment> 
      }}
      />
    </div>
  </div>
  )
}
