import { Button, Space, Input } from "antd";
import { useState } from "react";

const Bai1 = () => {
    const [value, setValue] = useState('')
    const handleCheckNumber = () => {
        while (value <= 20) {
            window.confirm('please enter n > 20');
            break;
        }
    }
    return (
        <>
            <div className="title">Bài 1</div>
            <Space>
                <Input placeholder="enter n" onChange={(event) => setValue(event.target.value)}></Input>
                <Button onClick={() => handleCheckNumber()}>Check</Button>
            </Space>

        </>
    )
}
export default Bai1;