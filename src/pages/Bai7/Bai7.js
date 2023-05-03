import { CarryOutOutlined, CheckOutlined, DownOutlined } from '@ant-design/icons';
import { Select, Switch, Tree } from 'antd';
import question from './question_answer.json'
import _ from 'lodash'
import { useState } from 'react';
const Bai7 = () => {
    let data = question.question;

    const [showLine, setShowLine] = useState(true);
    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    let newData = (_.chain(data)
        // Group the elements of Array based on `color` property
        .groupBy("parent_id")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => {

            let newChildrent = value.map((item) => {
                return {
                    key: `${item.id}`,
                    title: item.question,
                    children: [
                        {
                            key: `${item.id}`,
                            title: item.answer,
                            // children: [
                            //     {

                            //     }
                            // ]
                        }
                    ]
                }
            });
            return {
                key: `${key}`,
                children: newChildrent,
            }
        }
        )
        .value())

    // console.log(newData)

    // console.log("----", newData)
    let catArr = []
    let questionArr = []
    newData.map((item, index) => {
        if (item.key == 'null') {
            catArr = item.children;
        }
    })
    newData.map((item, index) => {
        if (item.key !== 'null') {
            questionArr.push(item)
        }
    })

    // console.log('-----------------')
    // console.log('cat arr', catArr)
    // console.log('-----------------')
    // console.log('question arr', questionArr)


    let treeData = catArr.map((itemCat) => {
        let catChildren = []
        questionArr.map((itemQues, index) => {
            if (itemCat.key == itemQues.key) {
                // console.log("ques", itemQues.children)
                // console.log('-----------')
                let x = itemQues.children.map((item, index) => {
                    return {
                        key: `${itemCat.key}-${item.key}`,
                        title: item.title,
                        // children: item.children
                    }
                })
                // console.log('x>>', x)
                catChildren = x;
            }
        })
        return {
            key: itemCat.key,
            title: itemCat.title,
            children: catChildren
        }
    })

    console.log(treeData)
    return (
        <>
            <div>
                <Tree
                    showLine={
                        showLine
                    }
                    defaultExpandedKeys={['6-13']}
                    onSelect={onSelect}
                    treeData={treeData}
                />
            </div>
        </>
    )
}
export default Bai7;