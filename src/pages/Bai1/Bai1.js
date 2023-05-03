import { Button, Space, Input, Divider } from "antd";
import { useState } from "react";

const Bai1 = () => {
    const [value_1, setValue_1] = useState('')
    const [value_2, setValue_2] = useState('')
    const handleCheckNumber_1 = () => {
        while (value_1 <= 20) {
            window.confirm('please enter n > 20');
            break;
        }
    }
    const handleCheckNumber_2 = () => {
        switch (true) {
            case value_2 < 20:
                window.confirm('please enter n > 20');
                break;
            default:
                break
        }
    }
    return (
        <>
            <h1 className="title">Bài 1</h1>
            <Space>
                <div>Cách 1:</div>
                <Input placeholder="enter n" onChange={(event) => setValue_1(event.target.value)}></Input>
                <Button onClick={() => handleCheckNumber_1()}>Check</Button>
            </Space>
            <Divider></Divider>
            <Space>
                <div>Cách 2:</div>
                <Input placeholder="enter n" onChange={(event) => setValue_2(event.target.value)}></Input>
                <Button onClick={() => handleCheckNumber_2()}>Check</Button>
            </Space>

        </>
    )
}
export default Bai1;