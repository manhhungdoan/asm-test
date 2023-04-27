import { useState } from "react";

const { Space, Input, Button } = require("antd")

const Bai4 = () => {
    const [value, setValue] = useState('')
    const [money, setMoney] = useState('')
    const handleProcess = () => {
        // let newValue = BigNumber(`${value}`)
        setMoney(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 20 }).format(+value))
    }



    return (
        <>
            <Space size="large" direction="vertical">
                <div className="title" style={{ fontSize: '30px' }}>Bài 4: Chuyển đổi số sang dạng tiền tệ</div>
                <Space>
                    <Input placeholder="Enter number:" onChange={(event) => setValue(event.target.value)}></Input>
                    <Button onClick={() => handleProcess()}>Xử lý</Button>
                    <Space>
                        <label>Kết quả:</label>
                        <Input value={money}></Input>
                    </Space>
                </Space>
            </Space>
        </>
    )
}
export default Bai4;