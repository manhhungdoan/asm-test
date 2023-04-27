import { useState } from "react";

const { Space, Input, Button } = require("antd")

const Bai3 = () => {
    const [value, setValue] = useState();
    const [result, setResult] = useState('')
    let regexPhone = /^(0|84|\+84)([0-9]{9})$/
    let regexEmail = /^[a-zA-Z0-9.]+@([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+))*$/


    const handleCheck = () => {
        let testEmail = regexEmail.test(value)
        let testPhone = regexPhone.test(value)
        if (testPhone) {
            setResult('PHONE');
        }
        else if (testEmail) {
            setResult('EMAIL')
        }
        else {
            setResult('false')
        }
    }
    return (
        <>
            <Space size="large" direction="vertical">
                <div className="title" style={{ fontSize: '30px' }}>Bài 3: Kiểm tra chuỗi là số điện thoại(vn) hay email:</div>
                <Space>
                    <Input placeholder="Enter value:" onChange={(event) => setValue(event.target.value)}></Input>
                    <Button onClick={() => handleCheck()}>Kiểm tra</Button>
                    <Space>
                        <label>Kết quả:</label>
                        <Input value={result}></Input>
                    </Space>
                </Space>
            </Space>
        </>
    )
}
export default Bai3;