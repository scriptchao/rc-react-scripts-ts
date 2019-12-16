---
module: 时间选择
title: admin-date-picker
author: 托尼
---

### @yt/admin-date-picker
从DatePicker组件定制而来，支持不同类型的输出格式

## 何时使用
antd的日期选择框value只能传moment类型，业务代码中需要进行大量的转化，产生很多重复代码，故开发该组件来减少代码量

### DEMO

```jsx
import React from 'react'
import moment from 'moment'
import AdminDatePicker from '@yt/admin-date-picker'


export default class Demo extends React.Component {

    state = {
        value: moment().format('YYYY-MM-DD')
    };

    render() {
        const { value } = this.state;

        return (
            <AdminDatePicker
                format="YYYY-MM-DD HH:mm:ss"
                // outputFormat="moment"
                value={value}
                onChange={(value) => {
                    console.log(value);
                    this.setState({
                        value
                    })
                }}
            />
        )
    }
}


```

### API

|  参数  |  类型   |   默认值   | 描述  |
| :------------------: | :-----: | :----------: | :----------------------- |
|**`value`**| string/number/Date/moment.Moment | - | 日期  |
|**`defaultValue`**| string/number/Date/moment.Moment | - | 默认日期  |
|**`format`**| 'YYYY-MM-DD'/'YYYY-MM-DD HH:mm:ss' | 'YYYY-MM-DD' | 日期格式 |
|**`onChange`**| (value?: string/moment.Moment) => void | - | 时间发生变化时的回调  |
|**`outputFormat`**| 'moment'/'string' | 'string' | 日期输出格式  |

> More options in [ant-DatePicker](https://ant.design/components/date-picker-cn/#API)
