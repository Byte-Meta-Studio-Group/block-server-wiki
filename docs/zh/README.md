# 教 你 怎 么 玩 服 务 器

## 安装我的世界

在此之前，我们假定您的电脑是基于NT Core的Windows（毕竟会用linux和mac的基本不会看教程）

如果您没有安装我的世界（Minecraft），或您的设备特殊（如手机），请前往[我的世界简易安装教程](../install-minecraft/)

如果您已安装，请前往[确定你的我的世界版本](#确定你的我的世界版本)

## 确定你的我的世界版本

以下说明几种确定我的世界版本，以及是否加载了服务器不支持的mod的方法

### 看启动器

打开您的启动器（如HMCL, PCL2），跟随教程进行操作：

::: details 启动器看起来是什么样子的？
请记住它们的图标：

这是PCL2的图标：
![PCL2的图标](data:image/webp;base64,UklGRtADAABXRUJQVlA4IMQDAAAQEgCdASpAAEAAPok6lkelI6IhMBgN+KARCWwAvvQOUWaHPV/wnyOpdISm2l8xnnDedp6QHUtbz6+5jCazZNHVmjRPIZ9X+wSxeqx0MBWbLX/8MnxumeBhj4hYsS+qnbb1oZypxJxs6qXjEuS53ptzGPIzJDRlLBjRVmAY0kXgbKtDSb6X3Yd1q8kHx2whAYeLHtZmLIzqkUAA/v92KaABOHO/rV2sLyITRYewKch3vEZoVP42Uqem+TPLToP00b8xM2tZNpIz9QdGiPLSDJ7lAo8OgP1q46qamoeIeijXZmg3Jgw+MrtdAqZ0aBj1/bhxym07g2o8LfSEWWb/2gb+obquv7CCaYwxct3Sq2v/gALBEUMCehY5Qu+Q54RCWR+u9fvZvNqHip9gB1Omsawd238G9L8BYchyGD/5aPw1pMk90/YDRg5D/5D71DWO+0B1BqWZ7GzpumitsHAHxPForckXvWCiu0PqwVBCAXGsCUpld/ZeFWj6hFw1DUuulWLQf2Pqb2T9pPGHD71IiKFy2WQ5sE9p2nuOAGzfXSfbdjEeoV2380ga9nxo8pwn6mf++hr4SgZl8dPyxb3mg/RS4Mz/l3Zs79KR6gMmnEuodaEaFsUnLKFslJEOW0WtLgkv13Q+b+ggf9Z8KFGdL/SQYVa4oEjvarv98sXLjSLMAVVggneGfyHutZyyPIE5V9p7yYJoixr42DaxEy6XKZAJzLyLVD1dWzQxtBThsIvKsK1It6+dU1kTlCzKu9UqZn59TP8vPOXz2M4U7HSuF9F7Gfr9Zcwaf6RLqFxMmcsZhUle86+IoBBdrTfPyot5xNF9Av666ktE2iB87ZhTvq6jVWM5W945s0fHgI2wIGF6GwiRJIzgoS1hVzrnZIXrHKSkLx0HgIOaoHLnHkOajqu6UCNQHf6qCqEHCqnzb0tAqod9zGVqaoyRg8rL1kesdWDo+NP3LU/THyqFbtZLm092B8IUo9HMrOUq1pWLvtr4ofXDJ5WBFjt3JQpMxG4fjCw5kc4Sl75RseUEFSkzuZQLwcxd9uaoY4/QNBWC/gXXeUC11tZIljKFMYJr8V8AmeCBN0xJyYJdu0zn1dDCa5wJBkwuU8LdfAyQ5+HlHY/Wl85BQLn/rnb6SG2SohwuT6rgK1Y/KGDXXCBRPXSQxd8GwZL0iFaAWPdFfDIhd/Jkkoe1Vx281Vm7o8VPpeEDRcsOiec4ipGA4YC0poMRcpIPy1QOJ5m4TNrF6EP4061NnpRBXf6ATXx6qrvny3lNsUmywAAA)

而这是HMCL的图标，它看起来像一个工作台：
![HMCL的图标](data:image/webp;base64,UklGRk4EAABXRUJQVlA4IEIEAAAwEgCdASpAAEAAPpE6l0iloyIhLB1bMLASCWMnABLHzCP6JzozvQ2DfcLsgxYDkMrj+NHTJTUf/F5lfrX2Ct1NYq1g/OMZvPL5wxFQReShKD7eetYvPKQAxxwhzd7pSg0l+dNu4+/wZAw0zPd2FD2VYbT4WAlB2j/MKT3ho40K3UykLHLTeSrrMP9sarArjp41u288+PT30xgAAP7/MkKiSLZvzj1FuJzn+FpOentDRMeHiZo0PdnO/iv0+X9xIHDwMd/wfsvRjciu05/T5aREC+MsapuxfWXesV+pgpOevddLWlUBRCl07izoZKobKYclBlxJzwvP/V22q4wn9X1VFkU3/xMfh4Ze5ZK9U3dNw9Ehx7qLI2+n24dXByDzmE+d/fHXt2DHiwkYmSYTappSmXfDKQf/IKV+XzxHI6JBkU3GBGBNdOyvDFa6R7w6gCfVqGd2HCwYU8otRm0LIErCcehPACHlNcasTLq75n3xq/7owpBYzpYUbzDUFvsYTAZc2TsvhwrIKnsPJ+Ik3e/3EKvi80NjxlolNgCfb+UZCmvrAABrobdjVZtKbTfADh2freZYjIp6tDsdgAE3ySh81ClZyC7c3eEccieYx9+i9YAmC0oPjygF7l9MbbgMBXK91dtzfl8WHXKIGr2sRIUkFjI5ylxNh6uXZW43ZRzYcyv1p24j/UTA+iobLGnx75IdUNOXwohQV3AJRQbuBHu3uanFGUv8xG4q4mj7RdoNafAFeIEBTt1Rs57Tn1UwId+dtOkjIogymd645kL9C6Gq0R7NLYSzXczxi0m+jBuVCXeutvw4KfGndw4ApWzuogjbffs+BD+nP2UR87hsmqC/WhvNcKVRHJ2LHCtUXDMHtO1dfSisHJA8NndhGj2PFk5r+Cdx2kH+6lSzmYddNz/LjE3jQXdpV5gmV5JfVFZ5j3Eo7JxKbvZUv/izyyQ93yHq5FhH69iqRP72XfQc/9l/YxDneYG1N3BWjnkLNy2IR2zAbxw4eRHNJuRPFCBboD3igfvs7bS9pAv8evK+8ft/yk/JT9s2iFiL5/aX18xEXTYGNiabZSnSjDhfonSAYXP/CPDPxVmbPkbdP8wpy/iYOQXC/sVY+oqoT+C6ulPKU94NPKJXqsJW5ZUsmd2NzvhAegSIOaMLa+0fO9skDNGfa+NVx/tzF6jXtyKDB3KrvMbgVLutbbszzxnnvHqDQTVzR+ZYpYtzt473ZlnYl+gF5jNM22rct6PqiUIPVz21rkFZgDU0e3tVSpiXzTzWje2PDrlBz7pI8AyLD1dVNlh0sqJpdYna8UeXmd++j2Kqm+8AH0UFEFiDdwxjlwtiDWIoUJm7HJk2VsY03ygASmAkj4yF9ldYkMmgFoAmPNpqKHLI0afT8H5hafYQpFj04tJ8z5yc/85XONV19Izfbh4NjHIMPceuZXUU4AA62bktqAAA)
:::

## 进服地址

- aismc.bid
- ais.kkkmc.icu

::: warning
本服务器**不在中国教育网提供服务**
:::

::: details 我不会添加多人服务器...
请善用<a href="javascript:seeerbaidu('我的世界%20添加多人服务器')">搜索引擎</a>
:::

## 进服第一步

### 注册&登录

你需要根据聊天框指示进行注册，指令如下：

```plain
/reg <密码> <重复密码>
```

::: tip
请记住你的密码，若您不慎忘记，请前往[找回密码（没做完呢）](../../README.md)
:::

当您下次登录的时候，请执行：

```plain
/l <你设置的密码>
```

::: details 我并没有注册过却提示我登录？
你需要更换你的玩家ID，具体方法请前往[常见问题（未完成）](../faq/)
:::

### 获取工具

在默认情况下，新手套装在第一次进入时会默认发放

::: details 如果没有新手套装...
如果出于插件bug无法获取新手套装，请执行
`/kit newbie`
获取新手套装(包含附魔皮革套，工具一套，食物，及其他生存用品)
:::

### 传送

传送到某个玩家：`/tpa <玩家ID>`

接受玩家的传送：`/tpaccept`

拒绝玩家的传送：`/tpadeny`

让玩家传送到你：`/tpahere <玩家ID>`

随机传送：`/tpr`

传送到传送点：`/warp <传送点名字>`

> 常用传送点: shop(商店), hub(主城), town(玩家聚集地), afk(挂机点)

::: tip
为避免卡服，传送前与传送后拥有冷却 准备传送时请勿移动
:::

### 家

设置家：

```plain
/sethome [家的名字]
```

回去：

```plain
/home [家的名字]
```

::: tip
`/home bed`是传送到床旁边，除非你没床
:::

### 菜单

点击钟或者输入指令 `/cd`

### 私聊

`/msg <玩家ID> <你想说的话>` 或者 `/tell <玩家ID> <你想说的话>`

### 邮件

读邮件: `/mail read`

::: details 对于管理...
发邮件: `/mail send <玩家ID> <内容（支持颜色代码）>`
发全体邮件: `/mail sendall <内容（支持颜色代码）>`
:::

### 全球市场

打开市场列表：

```plain
/ca gui
```

发起拍卖：

```plain
/ca bid <价格> [数量]
```

出售：

```plain
/ca sell <价格> [数量]
```

收购：

```plain
/ca buy <价格> [数量]
```

打开市场邮箱

```plain
/ca mail
```

### 转账

向某位玩家付款：

```plain
/pay <玩家ID> <金额（0.01~3.4e+38）>
```

切换付款二次确认

```plain
/payconfirm
/payconfirmon  # 开启
/payconfirmoff  # 关闭
/payconfirmtoggle
```

::: details 如果您不再接受付款...
请执行`/paytoggle`
:::

## 粘液科技

### 获得指南

获取粘液科技指南: `/sf guide`

阅读粘液科技指南(但不获取书): `/sf open_guide`

::: tip
了解更多关于粘液科技的教程，请参考[粘液科技简易教程（未完成）](../slimefun/)
:::

## 语音模组

未完成

## 社交礼仪

由于服务器内的玩家们来自于中国乃至世界各个地方，难免会因为各种各样的问题产生冲突

所以我们应该尽可能做到：

- 多一份礼貌
- 多一份善良
- 尽可能不要爆粗口
- 做一些可能会影响其他玩家的事情时，应该先询问他人意见

当然，如果您遇到了不怀好心的玩家，您也可以向管理组举报，管理组会视具体情况给出处罚

互动案例请查看[社交礼仪典例](./social-example/)
