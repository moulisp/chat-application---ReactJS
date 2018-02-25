import React from 'react';
import Message from './Message';

/**
 * Messages component holding all messages
 * @param {*} props
 */
const Messages = (props) => (
    <ul id="messages-list">
        {props
            .messages
            .map((message, index) => (<Message key={index} message={message} user={props.user}/>))
}
    </ul>
)
export default Messages;