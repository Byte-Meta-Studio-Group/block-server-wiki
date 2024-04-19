# 保护石插件简易教程

<u>由于我们资金不足，买不起常见的圈地插件（划重点）</u>

所以，我们选择了开源且免费的[ProtectionStones](https://github.com/espidev/ProtectionStones)插件

## 通过菜单操作（推荐）

依次找到`菜单`->`保护石`，并点击后即可对保护石进行操作

包括但不限于购买，隐藏/显示保护石，调整设置等操作

## 获取保护石

要获取保护石，请在打开菜单后依次点击

或者直接执行指令以获取保护石

::: tip
不同的保护石类型代表了不同的价格，激活消耗以及保护大小，详细请查看[保护石价格概览](price.md)
:::

```plain
/ps get [block]
```

如果你没有输入*block*的类型，你将会收到一个简单的菜单，你可以通过点击文字直接获取保护石，例如

```plain
===== 保护石 (点击获取) =====
> 16x (16 x 16) ($160)
> 32x (32 x 32) ($160)
> 64x (64 x 64) ($160)
```

## 放置保护石

这一步很简单，如果一切正常，你会收到扣费通知以及一个

> 此区域现已被保护

的一条消息通知，这说明你的领地已经注册成功了！

## 查看领地信息

执行该命令后，你会收到一长串信息，具体解释如下

```plain
/ps info
```

例如：

```plain
===== 领地信息 =====
Region: ps-114x51y4z, Priority: 0
Type: 32x
Flags: invincible: -g MEMBERS ALLOW, greeting: 正在进入 SomeOne 的保护区域, pvp: DENY, tnt: DENY, chest-access: -g NON_MEMBERS DENY, fire-spread: DENY, greeting-action: 正在进入 SomeOne 的保护区域, notify-leave: -g OWNERS true, use: ALLOW, farewell-action: 正在离开 SomeOne 的保护区域, creeper-explosion: DENY, notify-enter: -g OWNERS true, farewell: 正在离开 SomeOne 的保护区域, ps-home: -1383.0 73.0 -771.0, .
Owners: SomeOne
Members: (没有协助成员)
Bounds: (-1415, -803) -> (-1351, -739)
```

其中，`Region`表示的是你的领地id（如果你已经改名将会显示为`<名称> (<领地id>)`）

`Type`栏内显示的是保护石的类型

`Flags`栏内显示的是当前领地的配置（本插件依赖WorldGuard，配置项可以非常轻松的前往[WorldGuard文档](http://worldguard.enginehub.org/en/latest/regions/flags/)查看）

`Owners`，`Members`指示的是当前领地的主人以及协作者

最后的`Bounds`指的是领地保护的范围

::: tip
一个领地可以有多个主人，主人可以自己修改领地配置
:::

## 设置领地名称（可选）

现在该给你的领地取个新名字了吧！

::: warning
领地的名字在服务器内是独一无二的，设置时请避免重复名字
:::

要设置名字，请执行

```plain
/ps name <新名字>
```

::: details 想要取消设置名字？
请执行

```plain
/ps name none
```

:::

## 分享领地

想和服务器的其他人分享你的领地？不用慌！

首先，你需要获取你的领地ID/名字（可以通过计分板查看）

然后告诉他（她）们领地ID/名字

收到领地ID/名字后执行下面的命令后，你就可以传送至目标领地了！

```plain
/ps tp <ID/名字>
```

## 添加成员/主人

想要邀请其他玩家一起使用你的领地？没问题！

通过执行

```plain
/ps add <ID/名字>
```

或

```plain
/ps addowner <ID/名字>
```

即可做到

::: warning 安全警告
若您执行了前者，则该玩家默认状态下将会可以与您领地内所有内容交互（例如破坏/放置方块、打开箱子等）

若您执行了后者，则该玩家不仅拥有成员级别的权限，还可以修改领地的设置、成员（某些情况下可以将您踢出领地），所以一般来说不推荐这级权限

要想移除这些玩家，请执行

```plain
/ps remove <ID/名字>
```

或

```plain
/ps removeowner <ID/名字>
```

即可
:::

## 配置领地

您可以通过直接执行

```plain
/ps flag
```

来打开配置界面

当然，也可以通过如下命令直接设置

```plain
/ps flag [flagname] [var|default|null]
```

### 常见配置

::: info
`bool`指示的是一个选项，可以为`是（Allow）`或`否（Deny）`
:::

|名称|var|解释|
|---|---|---|
|fire-spread|bool(Allow/Deny)|是否允许火焰蔓延|
|invincible|bool|是否允许无敌|
|pvp|bool|是否允许PVP|
|mob-spawning|bool|是否允许刷怪|
|creeper-explosion|bool|苦力怕爆炸是否破坏方块|
|entry|bool|是否允许进入领地|
|use|bool|是否允许和领地内的内容交互|
|chest-access|bool|是否允许打开领地内的箱子|

### 更多配置项

配置项请前往[WorldGuard文档](http://worldguard.enginehub.org/en/latest/regions/flags/)查看定义

## 参考资料

1. 插件帮助文本
2. [插件英文wiki](https://github.com/espidev/ProtectionStones/wiki)
3. [插件github页面](https://github.com/espidev/ProtectionStones)
4. [spigot发布页](https://www.spigotmc.org/resources/protectionstones-updated-for-1-13-1-16-wg7.61797/)
