import { Avatar, Button, Divider, Input, Space } from 'antd';
import _, { set } from 'lodash'
import data from './messages.json'
import moment from 'moment'
import { useEffect, useRef, useState } from 'react';
import { FileImageTwoTone, PlusCircleOutlined, PlusCircleTwoTone, SendOutlined, UserOutlined } from '@ant-design/icons';
import './Bai8.scss'

const Bai8 = () => {

    const messages = data.messages;
    const [backupTime, setBackupTime] = useState('');
    let newMessages = messages.map((item) => {
        return {
            item,
            show: ''
        }
    })
    const newData = []
    for (let i = 0; i < newMessages.length - 1; i++) {
        if (moment(newMessages[i + 1].item.timestamp).diff(moment(newMessages[i].item.timestamp)) > 1800000) {
            newMessages[i + 1].show = true
        }

    }
    const timeFormat = "HH:mm DD-MM-YYYY"
    return (
        <div className='message-chat' >
            {/* <Button onClick={() => handleData()}>process</Button> */}
            <h1>message chat</h1>
            <Divider></Divider>
            {
                console.log('check', newMessages)
            }
            <div className='conversation'>
                {

                    newMessages?.map((message, index) => {

                        if (message.item.from === "bob") {
                            return (
                                <div className='receiver'>
                                    <div className='receiver-avatar'>
                                        <Avatar icon={<UserOutlined />}></Avatar>
                                    </div>
                                    <div className='receiver-message-main'>


                                        {
                                            message.show === true ?
                                                <div className='send-time'>
                                                    {message.item.timestamp}
                                                </div>
                                                : ''
                                        }


                                        <Space>
                                            {
                                                message.item.message && <div className='receiver-message'>
                                                    {message.item.message}
                                                </div>
                                            }
                                        </Space>
                                        {
                                            message.item.attachments && message.item.attachments.length > 0 && message.item.attachments.length == 1 ? <div className='message-image'>
                                                <img src={message.item.attachments[0].url} alt='' />
                                            </div>
                                                :
                                                <div className='message-image-grid'>
                                                    {
                                                        message.item.attachments.map((image, index) => {
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
                                    {
                                        message.show === true ?
                                            <div className='send-time'>
                                                {message.item.timestamp}
                                            </div>
                                            : ''
                                    }


                                    {
                                        message.item.message && <div className='sender-message'>
                                            {message.item.message}
                                        </div>
                                    }

                                    {
                                        message.item.attachments && message.item.attachments.length > 0 && message.item.attachments.length == 1 ? <div className='message-image'>
                                            <img src={message.item.attachments[0].url} alt='' />
                                        </div>
                                            :
                                            <div className='message-image-grid'>
                                                {
                                                    message.item.attachments.map((image, index) => {
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
            <div className='input-message' >
                <Space>
                    <FileImageTwoTone />
                    <PlusCircleTwoTone />
                    <Input placeholder='enter your message' style={{ maxWidth: '1000px' }}></Input>
                    <SendOutlined />
                </Space>
            </div>
        </div >
        // <>
        //     <Button onClick={() => handleData()}>process</Button>
        // </>
    )
}
export default Bai8;