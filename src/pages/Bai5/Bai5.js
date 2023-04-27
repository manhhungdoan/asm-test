import { useEffect, useState } from "react";

const { Space, Input, Button } = require("antd")

const Bai5 = () => {
    const [value, setValue] = useState(60)
    const [money, setMoney] = useState('')
    const handleReset = () => {
        setValue(60);
    }

    useEffect(() => {
        let interval = setInterval(() => {
            if (value > 0) {
                setValue(value - 1)
            }
        }, 1000);
        return () => clearInterval(interval)
    }, [value])


    return (
        <>
            <Space size="large" direction="vertical">
                <div className="title" style={{ fontSize: '30px' }}>Bài 5: Countdown 60s</div>
                <Space>
                    <Space>

                        <span>{value}</span>
                    </Space>
                    <Button onClick={() => handleReset()}>Reset</Button>
                </Space>
            </Space>
        </>
    )
}
export default Bai5;