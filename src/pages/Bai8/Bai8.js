import { Avatar, Divider, Input, Space } from 'antd';
import './Bai8.scss'
import data from './messages.json'
import moment from 'moment'
import { useEffect, useRef, useState } from 'react';
import { FileImageTwoTone, PlusCircleOutlined, PlusCircleTwoTone, SendOutlined, UserOutlined } from '@ant-design/icons';

const Bai8 = () => {
    console.log(data.messages)
    let arr = data.messages

    const timeFormat = "HH:mm DD-MM-YYYY"
    return (
        <div className='message-chat'>
            <h1>message chat</h1>
            <Divider></Divider>
            <div className='conversation'>
                {
                    data?.messages?.map((message, index) => {
                        if (message.from === "bob") {
                            return (
                                <div className='receiver'>
                                    <div className='receiver-avatar'>
                                        <Avatar icon={<UserOutlined />}></Avatar>
                                    </div>
                                    <div className='receiver-message-main'>
                                        <div className='send-time'>
                                            {/* {moment(message.timestamp[index + 1]).format(timeFormat)} */}
                                            {message.timestamp}
                                        </div>
                                        {
                                            message.message && <div className='receiver-message'>
                                                {message.message}
                                            </div>
                                        }
                                        {
                                            message.attachments && message.attachments.length > 0 && message.attachments.length == 1 ? <div className='message-image'>
                                                <img src={message.attachments[0].url} alt='' />
                                            </div>
                                                :
                                                <div className='message-image-grid'>
                                                    {
                                                        message.attachments.map((image, index) => {
                                                            return (

                                                                <div className='item' key={index}>
                                                                    <img src={image.url} alt='' />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>

                                        }
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className='sender'>
                                    {console.log(message.timestamp)}
                                    <div className='send-time'>
                                        {moment(message.timestamp).format(timeFormat)}
                                    </div>
                                    {
                                        message.message && <div className='sender-message'>
                                            {message.message}
                                        </div>
                                    }
                                    {
                                        message.attachments && message.attachments.length > 0 && message.attachments.length == 1 ? <div className='message-image'>
                                            <img src={message.attachments[0].url} alt='' />
                                        </div>
                                            :
                                            <div className='message-image-grid'>
                                                {
                                                    message.attachments.map((image, index) => {
                                                        return (

                                                            <div className='item' key={index}>
                                                                <img src={image.url} alt='' />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                    }
                                </div>
                            )
                        }
                    })
                }

            </div>
            <div className='input-message'>
                <Space>
                    <FileImageTwoTone />
                    <PlusCircleTwoTone />
                    <Input placeholder='enter your message' style={{ maxWidth: '1000px' }}></Input>
                    <SendOutlined />
                </Space>
            </div>
        </div>
    )
}
export default Bai8;