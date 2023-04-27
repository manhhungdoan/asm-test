import { useState } from "react";

const { Space, Input, Button } = require("antd")

const Bai2 = () => {
    const [name, setName] = useState('')
    const [shortName, setShortName] = useState('')
    const handleGetShortName = () => {
        let arrName = name.split(' ')

        //only string
        let newArrName = arrName.filter(function (e) {
            return /^[A-Za-z]+$/.test(e); // test if the element is only letters
        });

        if (newArrName.length > 1) {
            let arrTwoLast = newArrName.splice(-2)
            let tmp = [];
            for (let i = 0; i < arrTwoLast.length; i++) {
                tmp.push(arrTwoLast[i].charAt(0))
            }
            setShortName(tmp.join(''))
        }
        else if (newArrName.length === 1) {
            setShortName(newArrName[0].substring(0, 2))
        }
        else (
            setShortName('')
        )
    }


    return (
        <>
            <Space size="large" direction="vertical">
                <div className="title" style={{ fontSize: '30px' }}>Bài 2: Chuyển tên thành viết tắt</div>
                <Space>
                    <Input placeholder="Enter name:" onChange={(event) => setName(event.target.value)}></Input>
                    <Button onClick={() => handleGetShortName()}>Xử lý</Button>
                    <Space>
                        <label>Kết quả:</label>
                        <Input value={shortName}></Input>
                    </Space>
                </Space>
            </Space>
        </>
    )
}
export default Bai2;