# 皮肤插件简易教程

由于离线的限制，你没办法在客户端设置自己的皮肤

但是你可以在服务器内设置自己的皮肤

## 快速开始

### 自动模式（推荐）

你可以通过直接执行`/skin`命令，插件会尝试猜测你的行为

```plain
/skin <玩家ID|url|namemc skin>

# 举个栗子
/skin Yang_161941
/skin https://littleskin.cn/textures/707cf8d262da1ae8155600d7a9bec957ea9009f216b21a0e6bdc9b32b5634973
/skin https://namemc.com/skin/d0058e51f5b652f2
/skin https://example.com/skin.png
```

### 基于玩家名设置皮肤

首先，你需要一位正版玩家的ID（或者已经设置过皮肤的离线ID），通过这个方法，可以在服务器内克隆这位玩家的皮肤

```plain
/skin set <玩家ID>
```

### 通过GUI选择

你可以通过点选直接切换皮肤

```plain
/skins
```

## 寻找想要的皮肤

你可以通过各大权威网站直接获取皮肤（或者对应的用户名），这里推荐一个插件官方支持的网站[namemc.com](https://namemc.com/)

或者你也可以通过命令搜索

```plain
/skin search <关键词>
```

## 参考资料

1. [SkinsRestorer/SkinsRestorerX](https://github.com/SkinsRestorer/SkinsRestorerX/wiki)
2. 插件命令帮助

```plain
>skin
[11:48:31] [Server thread/INFO]: [SkinsRestorer] - Showing help for skin.
[11:48:31] [Server thread/INFO]:   skin set <skin> - Changes your skin.
[11:48:31] [Server thread/INFO]:   skin set <target> <skin/url> - Sets the skin for a target player.
[11:48:31] [Server thread/INFO]:   skin help [help]
[11:48:31] [Server thread/INFO]:   skin clear <target> - Clears the skin of a target player.
[11:48:31] [Server thread/INFO]:   skin clear  - Clears your skin.
[11:48:31] [Server thread/INFO]:   skin update <target> - Updates the skin of a target player.
[11:48:31] [Server thread/INFO]:   skin update  - Updates your skin.
[11:48:31] [Server thread/INFO]:   skin url <skinurl> [classic/slim] - Sets the skin from an url for a target player.
[11:48:31] [Server thread/INFO]:   skin search <search> - Search up a skin that you want
```
