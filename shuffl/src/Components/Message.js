import React from 'react';

const Message = (props) => {
    return (
        <div className="message">
            <div className="data">
                    <div className="text">
                        {props.message}
                    </div>
            </div>

        </div>
    )
};

export default Message;