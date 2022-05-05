const ThierMessage = ({lastMessage, message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;


    return(
        <div className="message-row">
            {isFirstMessageByUser && (
                <div className="message-avatar" style={{backgroundImage: `url(${message?.sender?.avatar})`}}></div>
            )}
            {message?.attachments ?.lenght > 0
                ? (
                    <img src={message.attachments[0].file} alt="message-attachment" className="message-image" style={{marginLeft: isFirstMessageByUser ? '4px' : '48px'}} />
                ) : (
                    <div className="message" style={{float:'right',backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px'}} dangerouslySetInnerHTML={{__html: `${message.text}`}}>
                    </div>
                )
            }
        </div>
    );
}

export default ThierMessage;