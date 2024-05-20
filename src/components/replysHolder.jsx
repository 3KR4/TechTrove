import React, { useEffect, useState } from 'react'
import { FaReply } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';

import { IoMdSend } from "react-icons/io";
import { FaRegComments } from "react-icons/fa";
import { useForm } from 'react-hook-form';

export default function ReplysHolder({comment}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const [seeNestedReply, setSeeNestedReply] = useState(null);
  const [replyCommentId, setReplyCommentId] = useState(null);
  const [secondCommentValue, setSecondCommentValue] = useState('');

  return (
    <div className='replysHolder'>
    {comment.replys?.map((x) => (
      <div key={x.id} className="card">

        <h3 className='imageText'>
          {x.name.split(' ').length === 1 ? x.name.substring(0, 2)
          : `${x.name.split(' ')[0][0]}${x.name.split(' ')[1][0]}`}
        </h3>
        <div className="text">
          <div className="info">
            {x.replys?.length > 0 && (
              <button className="reply" onClick={() => {setReplyCommentId(x.userId === replyCommentId ? null : x.userId)}}>
                <FaReply /> Reply
              </button>
            )}
            <h3>{x.name}</h3>         
            <p>{x.details}</p>
            {x.replys?.length > 0 && (
              <h4 className='replyNum' onClick={() => { setSeeNestedReply(x.userId === seeNestedReply ? null : x.userId) }}>
                <FaRegComments /> {x.replys.length == 0 ? 'No Replys' : x.replys.length == 1 ? `${x.replys[0].name} has Replied` : `${x.replys[0].name} and ${x.replys.length -1 } other replies`}
              </h4>
            )}
            </div>
          {seeNestedReply === x.userId && (
            <ReplysHolder comment={x}/>
          )}
          {replyCommentId === x.userId && (
            <TextField
              className='customInput'
              InputLabelProps={{ classes: { root: 'customLabel', focused: 'focusedLabel' } }}
              error={Boolean(errors.comment)}
              helperText={Boolean(errors.comment) ? "Please enter atleast two words" : null}
              {...register("comment", { required: true, minLength: 7 })}
              variant="filled"
              label="Comment"
              placeholder="Type a Comment"
              value={secondCommentValue}
              onChange={(event) => {
                setSecondCommentValue(event.target.value);
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
  )
}
