import { DownOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import question from './question_answer.json'
import _ from 'lodash'
import { useState } from 'react';
const Bai7 = () => {
    let data = question.question;
    // console.log("data------", data)
    // console.log('------------------------------------------------')

    let newData = (_.chain(data)
        // Group the elements of Array based on `color` property
        .groupBy("parent_id")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => {

            let newChildrent = value.map((item) => {
                // children.push(element)
                // return {
                //     key: element.id,
                //     title: element.question,
                //     children: element.answer,
                // }
                return {
                    key: item.id,
                    title: item.question,
                    children: [
                        {
                            key: item.id,
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
                key: key,
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
        questionArr.map((itemQues) => {
            if (itemCat.key == itemQues.key) {
                catChildren.push(itemQues.children)
            }
        })
        return {
            key: itemCat.key,
            title: itemCat.title,
            children: catChildren[0]
        }
    })

    console.log("check treedata", treeData)
    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };
    return (
        <>
            <Tree
                showLine
                switcherIcon={<DownOutlined />}
                defaultExpandedKeys={['0-0-0']}
                onSelect={onSelect}
                treeData={treeData}
            />
        </>
    )
}
export default Bai7;