import React from 'react';
import Message from './Message';

const Messages = (props) => (
    <ul id="messages-list">
        {props
            .messages
            .map((message, index) => (<Message key={index} message={message} user={props.user}/>))
}
    </ul>
)
export default Messages;