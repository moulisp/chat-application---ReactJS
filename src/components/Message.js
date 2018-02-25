import React from 'react';
import moment from 'moment';

const Message = (props) => (
    <li
        className={props.user !== props.message.from
        ? "othersMessage"
        : "ownMessage"}>
        <div className="message-title">
            <span className="message-creator">
                {props.message.from}
            </span>
            <span className="message-createdAt">{moment(props.message.createdAt).format("hh:mm a")}</span>
        </div>
        <div className="message-body">
            <p>
                {props.message.text}
            </p>
        </div>
    </li>
)
export default Message;