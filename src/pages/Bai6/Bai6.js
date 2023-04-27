import { Button, Col, InputNumber, Radio, Rate, Row, Slider, Space, Typography, Image } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons'
import product from './product.json'
import _ from 'lodash';
import { useEffect, useState } from 'react';
import './Bai6.scss'
const Bai6 = () => {
    const { Text, Link } = Typography;
    // console.log(product)

    const [data, setData] = useState({})
    const [visible, setVisible] = useState(false);
    const [color, setColor] = useState('Space black')
    const [capacity, setCapacity] = useState('128GB')
    const [qty, setQty] = useState(1)
    const [imageSelected, setImageSelected] = useState('')

    // console.log(capacity)

    const productImages = _.chain(product.variants)
        // Group the elements of Array based on `color` property
        .groupBy("imageId")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => {
            let image
                = value.map((item => {
                    return {
                        color: (item.name.split(',')[0]).split(':')[1].substring(1).toLowerCase(),
                        src: item.imageId
                    }
                }))
            return {
                image: image[0]
            }
        }
        )
        .value()

    console.log(productImages)
    const getImage = (color) => {
        productImages.map((item) => {

            if (item.image.color.toUpperCase() == color.toUpperCase()) {
                setImageSelected(item.image.src)
            }
        })
    }

    const getData = (color, capacity) => {
        let params = `color: ${color}, capacity: ${capacity}`
        product.variants.map((item) => {
            if (item.name.replace(/\s+/g, '').toUpperCase() == params.replace(/\s+/g, '').toUpperCase()) {
                setData(item)
            }
        })
    }

    useEffect(() => {
        getImage(color)
    }, [color])

    useEffect(() => {
        getData(color, capacity)
    }, [color, capacity])

    return (
        <div
            className='product-page'
            style={{
                maxWidth: '1170px',
                margin: '0 auto',
            }}
        >
            <Row gutter={10}>
                <Col className='product-page-left' span={10}>
                    <Row className='product-page-left-image'>
                        <Image
                            preview={{ visible: false }}
                            // width={200}
                            src={imageSelected}
                            onClick={() => setVisible(true)}
                        />
                        <div style={{ display: 'none' }}>
                            <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
                                {
                                    productImages.map((item, index) => {
                                        return (
                                            <Image src={item.image.src} key={index} />
                                        )
                                    })
                                }

                            </Image.PreviewGroup>
                        </div>
                    </Row>

                    <Row className='product-page-left-image-list'>\
                        {
                            productImages.map((item, index) => {
                                return (
                                    <Space key={index} className='product-page-left-image-list-item'>
                                        <img src={item.image.src} alt=''></img>
                                    </Space>
                                )
                            })
                        }
                    </Row>

                    <Row className='product-page-left-social'>
                        <Space>
                            <div className='share'>
                                <div className='share-title'>Chia sẻ</div>
                                <div className='social-icon'>

                                </div>
                            </div>
                            |
                            <div className='like-status'>
                                <span>Đã thích </span>
                                <span>(1,4k)</span>
                            </div>
                        </Space>
                    </Row>
                </Col>
                <Col span={14} className='product-page-right'>
                    <Row className='product-page-right-top'>
                        <Space style={{ display: 'flex', alignItems: 'flex-start' }}>
                            <div className='shop-type'>Mall</div>
                            <div className='product-name'>
                                {product.productName}
                            </div>
                        </Space>
                    </Row>
                    <Row className='product-page-right-rate'>
                        <div className='rate'>
                            <Space size={30}>
                                <span>4.9 <Rate allowHalf defaultValue={4.9} style={{ fontSize: '1rem' }} /></span>
                                <Text type='secondary'>|</Text>
                                <span>337 <Text type="secondary">Đánh giá</Text> </span>
                                <Text type='secondary'>|</Text>
                                <span>1.6k <Text type="secondary">Đã bán</Text> </span>
                            </Space>
                        </div>
                        <div className='report'>
                            <Text type='secondary'>Tố cáo</Text>
                        </div>
                    </Row>
                    <Row className='product-page-right-price'>
                        <Space>
                            <div className='price-before'>
                                <Text delete type='secondary'>
                                    <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.priceBeforeDiscount)}</span>
                                </Text>
                            </div>
                            <div className='price-after'>
                                <Text type='danger'>
                                    <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}</span>
                                </Text>
                            </div>
                        </Space>
                    </Row>
                    <Row className='product-page-right-insure'>
                        <Col span={5}>Bảo hiểm</Col>
                        <Col span={19}>
                            <Space>
                                <span>
                                    Bảo hiểm thiết bị di động nâng cao
                                </span>
                                <span
                                    style={
                                        {
                                            backgroundColor: "#ee4d2d",
                                            borderRadius: '8px',
                                            borderBottomLeftRadius: '0',
                                            color: '#fff',
                                            padding: '0 5px'
                                        }
                                    }
                                >Mới</span>
                                <a>Tìm hiểu thêm</a>

                            </Space>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='product-page-right-select'>
                            <Row className='product-select color' >
                                <Col span={5} className='product-color-title'>Color</Col>
                                <Col span={19}>
                                    <Radio.Group
                                        defaultValue={color}
                                        onChange={(event) => setColor((event.target.value))}
                                    >
                                        <Space>
                                            {
                                                product.optionValues[0].value.map((item) => {
                                                    return (
                                                        <Radio.Button value={item}>{item}</Radio.Button>
                                                    )
                                                })
                                            }

                                        </Space>
                                    </Radio.Group>
                                </Col>
                            </Row>
                            <Row className='product-select capacity'>
                                <Col span={5} className='product-capacity-title'>Capacity</Col>
                                <Col span={19}>
                                    <Radio.Group defaultValue={capacity} onChange={(event) => setCapacity(event.target.value)}>
                                        <Space>
                                            {
                                                product.optionValues[1].value.map((item) => {
                                                    return (
                                                        <Radio.Button value={item}>{item}</Radio.Button>
                                                    )
                                                })
                                            }
                                        </Space>
                                    </Radio.Group>
                                </Col>
                            </Row>
                            <Row className='product-select qty'>
                                <Col span={5} className='product-qty-title'>Số lượng</Col>
                                <Col span={19}>
                                    <Space>
                                        <InputNumber
                                            min={1}
                                            defaultValue={1}
                                            onChange={(value) => setQty(value)}
                                            disabled={data.stock === 0 ? true : false}
                                        />
                                        <span>{`${data.stock} sản phẩm có sẵn`}</span>
                                    </Space>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    <Row className='product-page-right-action'>
                        <Space>
                            <Button danger icon={<ShoppingCartOutlined />}>Thêm vào giỏ hàng</Button>
                            <Button type='primary' danger>Mua ngay</Button>
                        </Space>
                    </Row>
                </Col>
            </Row >
        </div >
    )
}
export default Bai6;