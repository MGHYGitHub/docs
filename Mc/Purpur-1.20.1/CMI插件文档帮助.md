# CMI 插件文档帮助

## INFO

这是一个功能多合一的插件，可代替一些功能分散的老旧插件并用于服务器管理，它完全可以替代 Essentials/EssentialsX，并且可以通过简单的指令操作把旧玩家数据从 Essentials 导入进本插件。

它提供了很多超乎你想象的全新特性和实用的功能来让你创建拥有全新游戏风格的服务器。完全涵盖老插件的基础功能，比如 `/heal` 治疗，同时给老功能添加了一些新的拓展。

比如游戏内编辑 kit 礼包，在所有容器中查找指定物品，传送门系统，动态牌等等！为什么这插件要卖 15 欧？说实话我觉得它值 150 欧，只是对你们来说太贵了 =_=

## TRANSLATOR

嘤鹉 @z1224748848 字数: 20029 字 [贼长的感言]  
@longlongz 字数: 7461 字  
特别鸣谢: @秋风残叶 #CMI 插件搬运者

## Wiki

### 权限 | Permission

在大多数情况下把鼠标放在错误提示信息上会显示缺失的权限节点。如果想要这样的效果，你需要拥有 `cmi.permisiononerror` 权限。

所有命令都有对应的权限节点，如果下方的列表没有你想要的权限，你可以根据 `cmi.command.<命令>` 这个格式来匹配 `/cmi <命令>`。

使用特定指令的权限节点基本规律是 `cmi.command.[命令名字]` (例子: `cmi.command.heal`) 并且有一些指令如果作用对象不是你自己的话，需要额外的权限节点来使用: `cmi.command.[命令名字].others` (例子: `cmi.command.heal.others`)

可以通过 `/cmi checkperm (关键词)` 命令来在游戏内查看权限节点，并且永远都是最新的插件权限列表。

### CMI 插件权限节点

| 权限                                     | 描述                                                         |
| ---------------------------------------- | ------------------------------------------------------------ |
| `cmi.command`                            | 允许使用基础命令                                             |
| **A**                                    |                                                              |
| `cmi.command.afk.auto`                   | 自动使玩家进入 AFK 模式                                      |
| `cmi.command.afk.kickbypass`             | 当 AFK 模式触发事件时阻止玩家被踢出服务器                    |
| `cmi.command.afk.staffinform`            | 使用不同的 AFK 模式自动回复消息                              |
| `cmi.command.alert.inform`               | 玩家将会在某玩家伴随警告加入服务器的时候收到通知             |
| `cmi.command.armorstand.updateitems`     | 允许使用特定盔甲架编辑器的功能                               |
| `cmi.command.armorstand.movebypass`      | 允许在不可以建造的地方移动盔甲架                             |
| `cmi.command.attachcommand.cc`           | 允许将控制台命令绑定到物品上                                 |
| `cmi.command.attachcommand.silent`       | 允许在绑定命令的时候使用 `!silent!` 变量                     |
| **B**                                    |                                                              |
| `cmi.command.back.ondeath`               | 允许在死亡后使用 Back 命令返回死亡地点                       |
| `cmi.command.ban.bypass`                 | 阻止玩家被 Ban                                               |
| `cmi.command.bossbarmsg.admin`           | 允许在 BossBar 自动消息中使用命令                            |
| `cmi.command.broadcast.colors`           | 允许在公告信息中使用颜色代码                                 |
| **C**                                    |                                                              |
| `cmi.command.charges.edit`               | 允许编辑玩家的重生能量 (! 不确定翻译)                        |
| `cmi.command.checkaccount.showip`        | 允许在检查账户时查看对应的 IP 地址                           |
| `cmi.command.clearchat.bypass`           | 绕过聊天清屏 (拥有权限的玩家的消息将不会被清空)              |
| `cmi.command.commandspy.bypass`          | 允许绕过命令间谍的命令黑名单                                 |
| `cmi.command.commandspy.hide`            | 隐藏来自命令间谍的已执行命令                                 |
| `cmi.command.cooldownbypass`             | 允许绕过命令冷却时间                                         |
| `cmi.command.others`                     | 允许对其他玩家执行命令                                       |
| `cmi.command.warmupbypass`               | 允许绕过特定的 CMI 命令预热                                  |
| `cmi.command.counter.autojoin`           | 玩家将在进入服务器后自动加入计数器                           |
| `cmi.command.counter.center`             | 允许设置计数器的中心                                         |
| `cmi.command.counter.force`              | 允许强制范围内所有玩家显示计数消息                           |
| `cmi.command.counter.time`               | 允许设置计数器的时间范围                                     |
| `cmi.command.counter.range`              | 允许设置计数器的半径                                         |
| `cmi.command.counter.msg`                | 允许设置计数器的提示信息                                     |
| `cmi.command.ctext.[自定义消息名字]`     | 允许看见 Custom Text 文件夹内的自定义提示消息                |
| `cmi.command.cuff.bypass`                | 允许受限制时使用命令                                         |
| **E**                                    |                                                              |
| `cmi.command.enchant.bypasslimit`        | 允许绕过附魔限制                                             |
| `cmi.command.enchant.bypassinvalid`      | 允许给物品附魔上默认不适用于此物品的附魔                     |
| `cmi.command.ender.preventmodify`        | 阻止其他人修改末影箱                                         |
| `cmi.command.ender.preventmodify.bypass` | 绕过上一个权限节点                                           |
| `cmi.command.editwarnings`               | 允许管理玩家的警告记录                                       |
| **F**                                    |                                                              |
| `cmi.command.fixchunk.speed`             | 允许调整损坏区块修复速度                                     |
| `cmi.command.flightcharge.admin`         | 允许编辑玩家的飞行能量                                       |
| `cmi.command.fly.safelogin`              | 登录时若玩家在空中，让玩家安全着陆                           |
| `cmi.command.flyspeed.[1~10]`            | 决定玩家可以设置的最大飞行速度                               |
| **G**                                    |                                                              |
| `cmi.command.give.max.[数值]`            | 限制玩家可以使用 Give 命令生成物品的数量                     |
| `cmi.command.glow.color.[颜色代码]`      | 允许改变发光效果的颜色                                       |
| `cmi.command.gm.[游戏模式]`              | 允许改变游戏模式为特定模式                                   |
| **H**                                    |                                                              |
| `cmi.command.head.othersource`           | 允许获取其他玩家的头颅                                       |
| `cmi.command.home.bypassprivate`         | 允许传送到其他玩家的私人 Home 位置                           |
| **I**                                    |                                                              |
| `cmi.command.ignore.bypass`              | 允许对屏蔽你的人使用命令                                     |
| `cmi.command.info.deathlocation`         | 允许在信息页面中查看死亡位置                                 |
| `cmi.command.info.ip`                    | 允许在信息页面中查看玩家 IP 地址                             |
| `cmi.command.invcheck.edit`              | 允许编辑已保存的背包                                         |
| `cmi.command.inv.preventmodify`          | 阻止其他人修改背包                                           |
| `cmi.command.inv.preventmodify.bypass`   | 绕过上一个权限节点                                           |
| **J**                                    |                                                              |
| `cmi.command.jail.bypass`                | 阻止玩家被关进监狱                                           |
| `cmi.command.jail.bypasscmd`             | 允许在被监禁时使用命令                                       |
| `cmi.command.jail.maxtime.[秒数]`        | 决定玩家可以监禁其他人的最大时长                             |
| `cmi.command.jump.[距离]`                | 决定最大跳跃距离                                             |
| **K**                                    |                                                              |
| `cmi.command.kick.bypass`                | 阻止玩家被踢出服务器                                         |
| **L**                                    |                                                              |
| `cmi.command.lfix.admin`                 | 允许修复视野外区域的光照                                     |
| `cmi.command.list.admin`                 | 将玩家放入列表中的管理员组                                   |
| `cmi.command.list.group.[组序号]`        | 将玩家分配到指定的组                                         |
| `cmi.command.list.hidden`                | 允许在玩家列表中查看隐藏的玩家                               |
| `cmi.command.list.staff`                 | 将玩家放入列表中的 Staff 组                                  |
| **M**                                    |                                                              |
| `cmi.command.maintenance.bypass`         | 允许绕过“正在制作”模式                                       |
| `cmi.command.money.admin`                | 允许修改玩家的资金                                           |
| `cmi.command.money.betweenworldgroups`   | 允许跨世界资金转账                                           |
| `cmi.command.more.oversize`              | 允许物品堆叠超过默认最大数                                   |
| `cmi.command.msg.clean`                  | 允许通过在消息前带上 `!` 来发送不带名字的消息 (公告?)        |
| `cmi.command.msg.noreply`                | 允许使用 `/cmi msg [玩家名字] !-内容!`                       |
| `cmi.command.msg.vanish`                 | 允许向隐身玩家发送私人消息                                   |
| `cmi.command.msg.togglebypass`           | 允许向关闭私人消息接收的玩家发送私人消息                     |
| `cmi.command.mute.bypass`                | 绕过个人禁言                                                 |
| `cmi.command.mutechat.bypass`            | 绕过拒收公共聊天消息                                         |
| **N**                                    |                                                              |
| `cmi.command.near.max.[方块数]`          | 决定 Near 命令的最大距离                                     |
| `cmi.command.nick.bypassblacklist`       | 允许绕过昵称黑名单                                           |
| `cmi.command.nick.bypass.length`         | 允许绕过昵称长度限制                                         |
| `cmi.command.nick.bypassinuse`           | 允许使用已被使用的昵称                                       |
| `cmi.command.nick.different`             | 允许将昵称设置为与原始名称不同的昵称                         |
| `cmi.command.note.remove`                | 允许清除或删除便签                                           |
| `cmi.command.note.add`                   | 允许添加便签                                                 |
| **P**                                    |                                                              |
| `cmi.command.patrol.bypass`              | 拥有权限节点的玩家不会被列入巡逻名单                         |
| `cmi.command.point.[特定种类]`           | 允许修改特定种类                                             |
| **R**                                    |                                                              |
| `cmi.command.repair.[hand/armor/all]`    | 允许修复特定区域的装备                                       |
| `cmi.command.repair.repairshare.bypass`  | 允许在共享修复应用到物品前绕过它                             |
| `cmi.command.replaceblock.speed`         | 允许调整方块替换速度                                         |
| `cmi.command.ride.[实体种类]`            | 允许骑乘特定实体                                             |
| `cmi.command.removewarp.bypass`          | 允许删除属于其他玩家的地标                                   |
| **S**                                    |                                                              |
| `cmi.command.scan.speed`                 | 允许修改物品扫描速度                                         |
| `cmi.command.sell.[blocks/all/gui]`      | 允许通过其他方式来出售物品                                   |
| `cmi.command.sendall.bypass`             | 阻止玩家被传送到指定服务器                                   |
| `cmi.command.sethome.bypass`             | 允许玩家在没有建造权限的地方设置 Home 位置                   |
| `cmi.command.sethome.unlimited`          | 允许设置无限个 Home                                          |
| `cmi.command.sethome.[任意正数]`         | 允许设置指定数量个 Home                                      |
| `cmi.command.sethome.[组名]`             | 允许根据组配置设置指定数量个 Home                            |
| `cmi.command.sethome.overwrite`          | 允许覆写已有 Home                                            |
| `cmi.command.signspy.hide`               | 将不会被牌子间谍记录                                         |
| `cmi.command.silent`                     | 允许在命令里面使用 `-s` 变量以避免向目标玩家发送反馈消息     |
| `cmi.command.sit.stairs`                 | 允许自动坐在椅子上                                           |
| `cmi.command.silence.bypass`             | 绕过消息屏蔽                                                 |
| `cmi.command.spawner.[实体种类]`         | 允许通过命令来更改刷怪笼为指定类型                           |
| `cmi.command.spawner.shiftclick`         | 允许潜行点击刷怪笼来打开设置界面                             |
| `cmi.command.sudo.bypass`                | 阻止其他玩家对拥有此权限的玩家使用 Sudo                      |
| `cmi.command.setwarp.unlimited`          | 允许设置无限个地标                                           |
| `cmi.command.setwarp.[数量]`             | 允许设置指定数量个地标                                       |
| **T**                                    |                                                              |
| `cmi.command.tempban.bypass`             | 阻止玩家被临时封禁                                           |
| `cmi.command.tempban.max.unlimited`      | 允许临时封禁超过配置的数量                                   |
| `cmi.command.tempban.max.[任意正数]`     | 允许临时封禁的最大时长                                       |
| `cmi.command.tfly.give`                  | 允许给其它玩家临时飞行                                       |
| `cmi.command.tfly.maxtime.[数量]`        | 设置玩家可以给其他玩家临时飞行的最大时长。如果玩家超过了这个限制，tfly 将不会被改动。 |
| `cmi.command.tgod.give`                  | 允许给其它玩家临时上帝模式                                   |
| `cmi.command.time.edit`                  | 允许设置时间                                                 |
| `cmi.command.toggleshiftedit`            | 允许使用 `/cmi toggleshiftedit`                              |
| `cmi.command.tpa.warmupbypass`           | 允许绕过 Tpa 命令预热                                        |
| `cmi.command.tpahere.warmupbypass`       | 允许绕过 Tpahere 命令预热                                    |
| `cmi.command.tptoggle.bypass`            | 允许传送到禁用远程传送的玩家身边                             |
| **W**                                    |                                                              |
| `cmi.command.walkspeed.[0-10]`           | 决定玩家可以设置的最大移动速度                               |
| `cmi.command.warn.bypass`                | 允许绕过警告                                                 |
| `cmi.command.warnings`                   | 列出玩家收到的警告列表及其过期时间                           |
| `cmi.command.warp.[地标名字]`            | 当一个地标需要权限节点的时候，添加此权限允许使用指定的地标   |
| `cmi.command.warp.redefine`              | 要求覆写现有的地标点。如果你想让普通玩家创建地标点，则此权限节点非常有用 |
| `cmi.command.world.[世界名字]`           | 通过当前的位置传送到指定的世界                               |
| **A**                                    |                                                              |
| `cmi.actionbar.colors`                   | 允许在 actionbarmsg 命令中使用颜色代码                       |
| `cmi.anvil.colors`                       | 允许在重命名物品的时候使用颜色代码                           |
| `cmi.anvil.itemrename.bypass`            | 允许绕过重命名黑名单                                         |
| `cmi.anvil.nolimits`                     | 允许无等级限制修复物品                                       |
| `cmi.armorstand.arms`                    | 允许生成带手臂的盔甲架                                       |
| `cmi.armorstand.offhand`                 | 允许完全操作盔甲架的副手物品                                 |
| `cmi.autorespawn`                        | 允许自动重生                                                 |
| **B**                                    |                                                              |
| `cmi.bedhome`                            | 允许点击床来设置 Home 位置                                   |
| `cmi.book.colors`                        | 允许在编辑书时使用颜色代码                                   |
| `cmi.bossbar.colors`                     | 允许在 bossbarmsg 命令中使用颜色代码                         |
| `cmi.bossbar.hpbar`                      | 允许显示生命值 Boss Bar，默认自动启用。如果你想隐藏的话就给予负权限 |
| `cmi.bungee.publicmessages.[服务器名字]` | 允许跨服发送大喇叭消息                                       |
| `cmi.buttonteleport`                     | 允许在点击背包编辑界面的位置按钮的时候传送到目标位置         |
| **C**                                    |                                                              |
| `cmi.chat.bypassrange`                   | 允许无视常规聊天范围                                         |
| `cmi.chatfilter.bypass.[组名]`           | 允许绕过特定的聊天过滤器配置组                               |
| `cmi.chatfilter.inform`                  | 当玩家违反聊天过滤规则时通知玩家                             |
| `cmi.chatfilter.spambypass`              | 允许绕过聊天刷屏过滤器                                       |
| `cmi.chatgroup.[组名]`                   | 由自定义聊天组决定玩家的公共消息格式                         |
| `cmi.chorusteleport`                     | 允许使用 chorus 来传送到周围 (随机传送?)                     |
| `cmi.colors.[种类].*`                    | 允许在特定消息范围内使用所有颜色代码                         |
| `cmi.colors.[种类].[颜色]`               | 允许在特定消息范围内使用指定颜色代码。消息范围种类: `publicmessage`, `privatemessage`, `nickname`, `signs`, `me` |
| `cmi.commandfilter.bypass`               | 允许绕过刷命令过滤器                                         |
| `cmi.customalias.[指令简写]`             | 限定自定义指令简写的使用 (拥有权限才可使用)                  |
| **D**                                    |                                                              |
| `cmi.damagecontrol.[组名]`               | 按组配置来决定伤害倍数                                       |
| `cmi.deathlocation`                      | 允许在死后看见死亡位置                                       |
| `cmi.dropspawner`                        | 允许在挖掉刷怪笼后掉落它                                     |
| `cmi.dropspawner.[实体种类]`             | 允许在挖掉特定种类的刷怪笼后掉落它                           |
| `cmi.dropspawner.nosilk`                 | 不需要精准采集就可以掉落刷怪笼                               |
| `cmi.dynmap.hidden`                      | 在网页地图中隐藏玩家                                         |
| **E**                                    |                                                              |
| `cmi.egginteract.[实体种类]`             | 允许通过手持刷怪蛋点击刷怪笼来改变刷怪种类                   |
| `cmi.elevator.use`                       | 允许使用基于牌子的电梯                                       |
| `cmi.elevator.create`                    | 允许创建电梯                                                 |
| `cmi.elytra`                             | 允许装备鞘翅                                                 |
| `cmi.elytra.boost`                       | 允许使用鞘翅加速                                             |

# 特殊命令格式 | Specialized Commands

这些功能可与 Ranks、计划任务、传送门、EventCommands、可交互命令和礼包共同使用。

- **仅使用一个动作变量**，否则只会使用最后一个动作变量。
- 如果命令包含 `[playerName]`，将会作为目标玩家的名字（定时任务除外，因为无法确定目标玩家）。
- 如果命令以 `msg!` 开头并且指定了玩家名字，将会发送一条信息。例如：`msg! Zrips 你好啊!`
- 如果命令以 `broadcast!` 开头，信息将以简单的格式发送至服务器的所有在线玩家，没有任何前缀。
- 如果命令以 `actionbar!` 开头，所有玩家将收到一条 ActionBar 消息。
- 如果命令以 `title!` 开头，所有玩家将收到一条 Title 消息。
- 如果命令以 `subtitle!` 开头，所有玩家将收到一条 SubTitle 消息。
- 如果命令以 `kickall!` 开头，所有玩家将被以指定消息踢出服务器（在服务器关闭时特别好用）。
- 如果命令以 `asPlayer!` 开头，命令将以发送初始化命令玩家的身份执行。
- 如果命令以 `asConsole!` 开头，命令将以控制台的身份执行（适用于默认以玩家身份执行的自定义命令简写）。
- 如果命令以 `cooldown:[秒数]!` 开头，那一行或下方的所有行将在重复使用之前有冷却时间。例如：`cooldown:5! cmi heal [playerName]` 将会治疗玩家，但不会在5秒内重复治疗。
- 如果命令以 `perm:[权限节点]!` 开头，只有玩家拥有该权限节点时才会执行命令（未指定目标玩家时无效）。例如：`perm:cmi.announce.vip! broadcast! 你好鸭, VIP 们`
- 如果命令以 `moneycost:[数值]!` 开头，只有玩家有足够的钱时才会执行命令。
- 如果命令以 `hasmoney:[数值]!` 开头，只有玩家有足够的钱时才会继续执行下方代码，否则停止。
- 如果命令以 `expcost:[数值]!` 开头，只有玩家有足够的经验值时才会执行命令。
- 如果命令以 `hasexp:[数值]!` 开头，只有玩家有足够的经验值时才会继续执行下方代码，否则停止。
- 如果命令以 `item:[(物品:附加值)(-数量)]!` 开头，只有玩家有指定的物品时才会执行命令。例如：`item:stone:1-12!` 将需要12个花岗岩来执行命令。
- 如果命令以 `hasitem:[(物品:附加值)(-数量)]!` 开头，只有玩家有指定的物品时才会执行命令（不会消耗物品）。
- 如果命令以 `ifonline:[玩家名]!` 开头，只有指定玩家在线时才会执行命令（支持固定名称或变量名称）。
- 如果命令以 `ifoffline:[玩家名]!` 开头，只有指定玩家离线时才会执行命令（支持固定名称或变量名称）。
- 如果命令以 `votes:[数量]!` 开头，只有在有足够的票数时才会执行命令（Votifier）。
- 在命令中间插入 `delay! 5`，将在触发5秒后执行命令。这可以用于在服务器关闭前创建一个示例计数器。
  ```yaml
  - cmi launch [playerName]
  - delay! 2
  - cmi launch [playerName]

- `[randomPlayer]` 占位符可以随机获取一个没有 `cmi.scheduler.exclude` 权限的在线玩家，用于在特定时间随机抽取奖励。例如：`cmi give [randomPlayer] diamond %rand/1-5%` 将随机给在线玩家送1~5个钻石。
- 如果命令以 `allPlayers!` 开头，将对所有在线玩家执行命令。在需要填入玩家名的地方写 `[allPlayers]`。例如：`allPlayers! cmi heal [allPlayers]` 治疗所有在线的玩家。
- 支持 PlaceHolderAPI 变量。

## 附加内容 | EXTRA

- `perm:[权限节点]!`、 `moneycost:[数值]!`、 `hasmoney:[数值]!`、 `hasexp:[数值]!` 和 `expcost:[数值]!` 都是条件判断。如果玩家没有权限节点或足够的钱/经验值，下方的代码将不会执行。例如：`perm:cmi.testperm! cmi heal [playerName]`
- 如果你想通知玩家他没有该命令所需的权限节点或足够的钱/经验值，可以在条件判断变量上加 `?`。例如：`perm:cmi.testperm?! cmi heal [playerName]` 这样如果玩家没有 `cmi.testperm` 权限，他们会得到关于此权限的通知消息，并且不会执行该命令。
- 如果玩家不符合要求并且你想要取消所有命令，可以在条件判断变量上加 `#`。例如：
  ```yaml
  - moneycost:150#! cmi heal [playerName]
  - cmi feed [playerName]
  ```
  这样如果玩家账户中没有150元，他既不会被治疗也不会被喂食。

同时写上两个额外条件可用于通知玩家并在需要时取消执行其他命令。

# BossBar 命令用法 | BossBar Usage

CMI 提供了为一个或所有在线玩家发送完全可自定义 BossBar 信息、颜色及其他内容的方法。命令可以通过指定名字发送给特定玩家，或使用 `all` 作为名字发送给所有玩家。

### 用法和变量示例

```yaml
cmi bossbarmsg Zrips &2嘿!
cmi bossbarmsg all &2嘿!
```
向Zrips发送内容为“嘿”的BossBar消息，并在3秒后消失。

```yaml
cmi bossbarmsg Zrips &2嘿! -t:5
```
向Zrips发送内容为“嘿”的BossBar消息，并在5秒后消失。

```yaml
cmi bossbarmsg Zrips &2嘿! -c:red
```
向Zrips发送内容为红色（默认为绿色）的“嘿”的BossBar消息，并在5秒后消失。

```yaml
cmi bossbarmsg Zrips &2嘿! -s:1
```
设置BossBar样式。可用选项有：1, 6, 10, 12, 20。将BossBar分成特定数量的部分。例如，填1会看到一条连续的Boss血条，填20会看到被分成20个部分的Boss血条。

```yaml
cmi bossbarmsg Zrips &2嘿! -n:bossBarName
```
设置BossBar的名字，用于识别相同的老BossBar。如果需要，将更新其为最新内容。例如，先运行 `cmi bossbarmsg Zrips &2嘿! -n:myBar`，然后再运行 `cmi bossbarmsg Zrips &2怎么了? -n:myBar`，名字相同的BossBar将更新为新内容，而不是重新创建一个新的。如果不设定名字，每次执行命令都会创建一个新的BossBar。

```yaml
cmi bossbarmsg Zrips &2嘿! -p:100/23
```
设置BossBar显示的进度条。例如，这个示例将BossBar填充23%。可以使用PlaceHolderAPI变量，例如 `-p:%server_max_players%/%server_online%`。

可以设置进度条自增自减的间隔：
```yaml
cmi bossbarmsg Zrips &2嘿! -p:+1
```
进度条将逐渐提高百分比。如果未设置初始值，将以0开始。写成 `cmi bossbarmsg Zrips &2嘿! -p:-1`，BossBar将以100开始并逐渐减少百分比。

如果进度条自减/自增到0或100（取决于进度条类型），BossBar将在 `-t` 计时器结束后消失。此功能可用于任何类型的计数器。

```yaml
cmi bossbarmsg Zrips &2嘿! -cmd:"msg [playerName] hey;;cmi heal [playerName]"
```
设置进度条自增/自减到0或100后执行的命令。可以通过 `;;` 分隔多个命令并允许使用特殊命令格式。玩家需要拥有 `cmi.command.bossbarmsg.admin` 权限节点来在BossBar信息中附带命令。

```yaml
cmi bossbarmsg Zrips &2嘿! -a:20
```
设置BossBar的自动更新间隔（每隔x游戏刻自动更新BossBar信息）。注意20游戏刻为1秒。

```yaml
cmi bossbarmsg Zrips -cancel:testbar
```
取消BossBar。

所有变量都是可选项，除了消息文本本身。可以组合使用任何变量来获得最佳效果。

### 示例

```yaml
cmi bossbarmsg all -a:1 医疗援助将在[autoTimeLeft]后到达! -t:2 -p:1 -cmd:"msg [playerName] &2医生治疗了你!;;cmi heal [playerName] -s" -n:test -c:red
```
上面示例代码将使BossBar每Tick自动+1（每秒20次），从0到100。同时显示内容为“医疗援助将在5秒后到达！”（计时器将自动更新）的Title信息。在达到100后，所有在线玩家将收到消息：“医生治疗了你！”并被治疗，BossBar将在两秒后消失。

# 飞行能量 | Flight Charge

飞行能量是一种可选的限制飞行模式，与 tfly（临时飞行）模式不同，它不仅基于时间，还更强大和有趣。

- **默认禁用**：因为需要额外检查玩家的移动方式，如果不感兴趣，最好避免不必要的检查。
- **购买飞行能量**：玩家可以使用钱或经验值购买飞行能量（未来可能支持物品购买）。
- **默认设置**：玩家可以购买1000点能量，可飞行1000个方块。
- **悬浮消耗**：玩家悬浮在一个地方时，每秒扣1点能量。
- **摔落处理**：
  - **能量消耗**：玩家摔落时损失摔落高度x2的飞行能量。例如，从7格高的地方跌落，扣除 (7-3)*2=8 点能量（默认配置）。
  - **伤害模拟**：玩家将受到实际摔落伤害（默认仅在悬崖信仰之跃时生效，可配置）。
  - **最低生命值**：从200高度跳下不会死，但会剩下1颗心（可配置）。
- **内置GUI**：玩家可通过 `/recharge` 命令重充能飞行能量。
- **默认兑换比率**：1点经验值/金钱兑换1点飞行能量（可配置）。
- **BossBar显示**：玩家会看到BossBar显示剩余飞行能量、损失/获得的能量及最大飞行能量点数。颜色随剩余能量变化：>50% 绿色, >30% 黄色, <30% 红色。
- **命令**：`/cmi flightcharge (add/take/set/show/expcharge/moneycharge/recharge) (玩家名字)(数量)` 可在需要时使用，但简单的重新充能只需输入 `/recharge` 命令。
- **防止意外**：如果玩家在空中用光了所有飞行能量，他会被传送到地面。

# 交互式命令 | Interactive Command

交互式命令功能允许你创建一些在交互后可以执行命令的方块或实体。

## 创建交互式命令步骤：

1. **创建新命令**：运行命令 `/cmi ic new [名字]`，例如 `/cmi ic new healer`。
2. **添加交互对象**：点击一个 `+` 号来添加你指针指向的方块（第一个+号）或实体（第二个+号）。
3. **确认消息**：系统会发送确认消息，之后你可以添加更多方块或实体，或添加需要执行的命令。
4. **查看命令列表**：点击 `!` 号查看交互式命令的命令执行列表。
5. **添加新命令**：点击 `+` 号添加新命令，插件将等待你在聊天窗口中输入新命令（不需要以 `/` 开头）。
6. **输入新命令**：在聊天中输入新命令，然后按 Enter 键。
7. **测试交互**：右键单击方块或实体，查看交互结果。

## 其他功能：

- **公共模式**：玩家拥有 `cmi.interactivesign` 权限节点后，可通过在牌子的第一行写 `[ic:[交互式指令名称]]` 自动将牌子添加到指定交互式命令的方块列表中。
- **本地化运行**：例如 PvP 倒计时，必须定义世界范围，以便让服务器“知道”命令的运行位置。

### 示例

```yaml
pvp:
    Location:
    - ==: org.bukkit.Location
        world: world
            x: -1204.0
            y: 90.0
            z: 1120.0
            pitch: 0.0
            yaw: 0.0
        Commands:
        - asConsole! cmi counter start c:world:-1204:90:1120 t:5 -f r:100 msg:PvP_Start!
    SignLines:
    - pvp
    - ' '
    - ' '
    - ' '
    Public: false
```

# 自定义命令简写 | Custom Alias

CMI 提供了为任何命令创建输入一条命令就可以运行一个或多个命令的方法（简写命令）。

## 创建简写命令：

- **单一命令简写**：使用 `/cmi aliaseditor new [简写]-[原始命令]`。例如，想把 `/h` 设置为 `/cmi heal` 的命令简写，输入 `/cmi aliaseditor new h-cmi heal [playerName] $1`。

## 内置编辑器：

- 执行 `/cmi aliaseditor` 并找到你想要修改的命令简写，点击它获取命令列表。可以编辑、删除、改变顺序或新加一个命令。

### 示例

运行两个命令的命令简写：

```yaml
– fromConsole! moneycost:20#?! cmi heal [playerName] -s
– fromConsole! msg [playerName] !&2You just been healed by God’s of minecraft!
```

带有延迟执行的命令简写：

```yaml
– fromConsole! cmi launch [playerName]
– delay! 3
– fromConsole! cmi launch [playerName]
```

使用 `?` 变量显示帮助页面：

```yaml
– /cmi aliaseditot new tipi sub-asConsole! cmi msg [playerName] apple
– /cmi aliaseditot new tipi ?-asConsole! cmi msg [playerName] carrot
```

# 自定义文本 | Custom Text

自定义文本功能允许你创建要为玩家显示的任何文本。

## 功能特点：

1. **自动分页**：如果有多页自定义文本，将自动显示下一页按钮查看下一页。
2. **自动命令**：新的自定义文本收录为具有相同名称的新命令。例如，默认情况下 rules 文件将拥有一个 `/rules` 命令。
3. **Raw消息**：创建悬停显示更多信息和可点击的高级文本。
4. **游戏内编辑**：使用 `/cmi editctext` 命令可以创建和编辑自定义文本。

### 示例

Raw消息示例：

```yaml
<T>Text</T> <H>Hover text</H> <C>cmi heal</C> <SC>Suggested text</SC>
```

# 命令绑定 | Attached Commands

任何物品都可以绑定一个或多个命令，并在交互物品时执行。

## 选项：

- **使用次数**：设置物品的使用次数，达到次数后物品消失。例如：`/cmi attachcommand !limiteduse:5!`。
- **控制台执行**：例如 `/cmi attachcommand !cc!cmi fly [playerName]`。

### 示例

```yaml
/cmi attachcommand !limiteduse:3!;;!cc!cmi fly [playerName] true
/cmi attachcommand !limiteduse:3!;;!cc!cmi tfly [playerName] 60
/cmi attachcommand !limiteduse:3!;;!cc!cmi heal [playerName]
/cmi attachcommand !left!cmi heal;;!right!cmi feed
/cmi attachcommand cmi launch [interactedPlayer] a:45
/cmi attachcommand!left!!silent!cmi heal;;!right!!silent!cmi feed
```

# KillAll 用法 | Killall

`/cmi kill all` 命令提供了一个按照可自定义的筛选规则清除当前加载的实体的方法。

## 筛选规则：

- **-monsters**：清除所有怪物实体。
- **-pets**：清除所有可以被驯服的实体。
- **-npc**：清除所有包含元数据的NPC实体。
- **-animals**：清除所有动物实体。
- **-ambient**：清除蝙蝠等实体。
- **-named**：清除所有拥有自定义名字的实体。
- **[mobType]**：清除特定种类的实体。
- **-f**：综合筛选符。
- **-lightning**：在实体被移除的地方召唤天雷。
- **-list**：列出符合筛选条件的实体。

### 示例

```yaml
/cmi killall – 清除所有怪物
/cmi killall 60 – 清除60格内的怪物
/cmi killall zombie – 清除所有僵尸
/cmi killall zombie skeleton – 清除所有僵尸和骷髅
/cmi killall -list – 列出所有实体
/cmi killall -monsters -lightning – 清除所有怪物并在移除它们的地方劈一道闪电
```

# 扫描 | Scan

扫描功能允许你在整个地图上查找包含某物品的任意种类的容器。

## 支持的容器：

- 箱子
- 陷阱箱
- 潜影盒
- 漏斗
- 盔甲架
- 物品展示框
- 熔炉
- 投掷器
- 酿造台
- 马箱（驴/骡身上的箱子）
- 箱子矿车
- 漏斗矿车

## 扫描指令可用变量：

- **id [ID:附加值]**：通过ID或数据值识别物品。
- **q [最低数量]**：扫描到物品的容器，物品高于此最低数量才会呈递结果。
- **r [半径(单位区块)]**：范围扫描，填入 `g` 代表扫描整张地图。
- **n [物品名字]**：查找显示名，忽略颜色符号。使用下划线表示空格。
- **l [物品Lore]**：查找Lore。使用下划线表示空格。
- **h**：将手持的物品作为扫描目标。
- **e [附魔名字]**：查找拥有指定附魔的物品。
- **elvl [附魔最低等级]**：查找具有等于或大于指定附魔等级的物品。
- **oversize**：查找过量堆叠的物品。
- **purge**：删除找到的物品（需在配置文件中启用，默认禁用）。

### 命令示例

```yaml
/scan id 52 r 30 – 寻找以你为中心30区块范围内的所有刷怪笼（物品）。
/scan id diamond_block r g q 32 – 全地图查找堆叠数量超过32的钻石块。
/scan id 276 r 30 n power_sword e sharpness elvl 10 – 在30区块范围内查找名字为“powersword”并且锋利附魔等级大于等于10的钻石剑。
```
# Tab 列表 | Tab List

- **支持多行显示**。
- **异步运行**：避免在主线程上操作导致过载。
- **变量支持**：完全支持 PlaceHolderAPI 的任何变量，也支持 CMI 自己的变量。
- **自定义页眉和页脚**：可以自定义 Tab 列表中玩家列表上方和下方显示的内容。
- **自动刷新**：支持以特定间隔自动刷新内容，或者在特定事件触发时刷新内容。
- **自定义玩家名称格式**：可以自定义列表中玩家名称的显示格式。
- **隐身玩家处理**：不会把隐身玩家计入在线玩家数内。
- **不同玩家不同显示**：支持为不同玩家设定不同的显示格式。
- **配置组数量无限制**：可以创建任意数量的格式配置组（默认有2个配置组）。
- **权限节点**：通过 `cmi.tablist.[组序号]` 权限节点来使玩家看到不同的 Tab 列表格式，数字越大，显示优先级越高。
- **刷新间隔设置**：建议设置为最高值，避免低于5秒的刷新间隔。

## 示例

```yaml
Header:
  '1':
  - '&f------------------------------------'
  - '&7在线人数 &f%server_online%&7/&f%server_max_players%'
  - '&f------------------------------------'
  '2':
  - '&7------------------------------------'
  - '&7在线人数 &f%server_online%&7/&f%server_max_players%'
  - '&7------------------------------------'
  '3':
  - '&8------------------------------------'
  - '&7在线人数 &f%server_online%&7/&f%server_max_players%'
  - '&8------------------------------------'
```

# 游戏时间奖励 | PlayTime Rewards

游戏时间奖励系统在玩家积累到一定时长的游戏时间后执行命令。

## 配置示例

```yaml
hourly1:
  DisplayName: "&7Hourly reward"
  AutoClaim: true
  Description:
  - "&2Get reward for every hour you are online"
  - "&2Free heal and 20 bucks into your pocket"
  PayEvery: 3600
  Commands:
  - asConsole! cmi heal [playerName] -s
  - asConsole! cmi money give [playerName] 20
daily1:
  DisplayName: "&7Daily reward"
  AutoClaim: true
  Description:
  - "&2Get reward for every 24 hours of playtime"
  - "&22000 bucks into your pocket!"
  PayEvery: 86400
  Commands:
  - asConsole! cmi money give [playerName] 2000
1hour:
  DisplayName: "&fOne hour reward"
  AutoClaim: false
  Description:
  - "&2Get reward for 1 hour you have been online"
  - "&2500 bucks into your pocket!"
  PayFor: 3600
  Commands:
  - asConsole! cmi money give [playerName] 500
6hour:
  DisplayName: "&f6 hour reward"
  AutoClaim: false
  Description:
  - "&2Get reward for 6 hour's you have been online"
  - "&22 000 bucks into your pocket!"
  PayFor: 21600
  Commands:
  - asConsole! cmi money give [playerName] 2000
12hour:
  DisplayName: "&f12 hour reward"
  AutoClaim: false
  Description:
  - "&2Get reward for 12 hour's you have been online"
  - "&25 000 bucks into your pocket!"
  PayFor: 43200
  Commands:
  - asConsole! cmi money give [playerName] 5000
24hour:
  DisplayName: "&f24 hour reward"
  AutoClaim: false
  Description:
  - "&2Get reward for 24 hour's you have been online"
  - "&215 000 bucks into your pocket!"
  PayFor: 86400
  Commands:
  - asConsole! cmi money give [playerName] 15000
7days:
  DisplayName: "&f7 day reward"
  AutoClaim: false
  Description:
  - "&2Get reward for 7 days you have been online"
  - "&250 000 bucks into your pocket!"
  PayFor: 604800
  Commands:
  - asConsole! cmi money give [playerName] 50000
30days:
  DisplayName: "&f30 day reward"
  AutoClaim: false
  Description:
  - "&2Get reward for 30 days you have been online"
  - "&2500 000 bucks into your pocket!"
  PayFor: 2592000
  Commands:
  - asConsole! cmi money give [playerName] 500000
```

- **DisplayName**：奖励名字。
- **AutoClaim**：是否自动发放奖励。
- **Description**：奖励描述。
- **PayFor**：游戏总时长达到指定秒数后发放奖励。
- **PayEvery**：每在线一定时长发放一次奖励。
- **Commands**：领取奖励时执行的命令。

# 不死图腾 | Totem

不死图腾功能使其在服务器上更有用，而不会显得太无敌或无用。

## 新功能

1. **自动生效**：不死图腾不需要持有在手上，只需放入背包，便会在受到致命伤害时自动生效。
2. **冷却系统**：默认情况下，玩家每隔10分钟才能再使用一次不死图腾。BossBar将显示冷却剩余时间。
3. **无敌时间**：使用不死图腾后，玩家将有10秒钟的无敌时间，在此期间如果死亡，将原地复活。

# 全息字 | Holograms

CMI 全息字功能提供了以全息方式显示任何自定义文本的方法。

## 功能特点

- **数据包和悬浮物品仅存在于客户端会话上**：防止被第三方清理插件清掉。
- **游戏内编辑器**：可以添加新行、删除旧行、移动全息字、改变激活范围和行间距。
- **支持 PlaceholderAPI 插件的变量**：根据不同玩家显示不同信息。
- **自动刷新文本**：按指定时间间隔自动刷新。
- **自动隐藏**：为了最小化客户端负载，远离时自动隐藏，靠近时刷新。
- **显示悬浮物品或静态图标**：适用于大多数自定义需求。

## 示例

创建一个新的全息字：

```bash
/cmi hologram new [名字]
```

编辑全息字：

```bash
/cmi hologram
```

创建图标：

```yaml
ICON:Stone
ICON:Stone:3
ICON:%iteminhand%
```

# 传送门 | Portals

CMI 传送门功能允许创建当玩家穿越时执行命令的传送门，并支持特殊命令格式。

## 创建传送门步骤

1. **选择区域**：使用木锄选择区域（类似于 WorldEdit）。
2. **创建传送门**：运行命令 `/cmi portals new [名字]`。
3. **设置目的地**：设置传送目的地。
4. **自定义传送门**：运行命令 `/cmi portals edit [名字]` 打开编辑 GUI。

## 示例

```yaml
Test1:
   Loc: 358.0:64.0:77.0:358.0:67.0:81.0
   enabled: true
   effect: reddust
   showParticles: true
   Tp:
     ==: org.bukkit.Location
     world: world
     x: 370.6645173225757
     y: 64.0
     z: 79.38387030052189
     pitch: 2.5499883
     yaw: -268.79987
   particleAmount: 20
   particleHide: 0
   activationRange: 16
   commandsWithoutTp: false
   commands:
     - cmi effect [playerName] blindness 2 1 -s
     - cmi fly [playerName] false
```

# 出生点与地标 | Spawn & Warp

## 出生点 | SPAWN

设置传送位置或玩家复活位置。

```bash
cmi setspawn (玩家名) (true/false) (-g:[组名]) (-rng:[半径]) (-w:world,world_nether)
```

- **(true/false)**：设置为 true 时，运行 `/cmi spawn` 命令为玩家设置复活点。
- **(-g:[组名])**：设置为特定组的玩家设置复活点。
- **(-rng:[半径])**：根据定义的范围随机化玩家的出生点。
- **(-w:world,world_nether)**：根据玩家所处的世界定义出生点。

## 地标点 | WARPS

设置地标点。

```bash
cmi setwarp [地标点名] (true/false) (hand) (slot)
```

- **(true/false)**：需要权限节点才能传送的地标点。
- **(hand)**：以手持物品作为 GUI 上图标的地标点。
- **(slot)**：在 GUI 的指定位置显示的地标点（1-54）。

## 示例

```yaml
Warp5:
  Location: world;398.72;64.0;34.06;176.83;5.99
  ReqPerm: true
  Slot: 4
  Item:
    type: COBBLESTONE
    amount: 1
    meta:
      ==: ItemMeta
      meta-type: UNSPECIFIC
      display-name: "Warp5"
      lore:
      - "Lore 1"
      - "Lore 2"
      enchants:
        DURABILITY: 10
      ItemFlags:
      - HIDE_ENCHANTS
```

# 盔甲架编辑器 | Armor Stand Editor

## 功能

- **傻瓜式编辑的 GUI 菜单**：编辑盔甲架手中物品、基座、头部、双手和双腿的方向。
- **移动盔甲架**：在一定范围内移动盔甲架。
- **开启/关闭显示盔甲架基座、大小、隐身效果、重力效果、手臂、名称、发光模式、无敌效果、可交互效果**。
- **内置 GUI 编辑**：通过内置 GUI 编辑盔甲架。

## 权限节点

```bash
cmi.command.armorstand.updateitems
cmi.command.armorstand.plate
cmi.command.armorstand.size
cmi.command.armorstand.visible
cmi.command.armorstand.arms
cmi.command.armorstand.gravity
cmi.command.armorstand.glow
cmi.command.armorstand.invulnerable
cmi.command.armorstand.name
cmi.command.armorstand.interactable
cmi.command.armorstand.head
cmi.command.armorstand.body
cmi.command.armorstand.leftArm
cmi.command.armorstand.rightArm
cmi.command.armorstand.leftLeg
cmi.command.armorstand.rightLeg
cmi.command.armorstand.pos
```

# 变量 | Placeholder

可以在语言文件中使用 PlaceholderAPI 变量来使 CMI 发送信息时显示一些内容。

## 自定义/非静态变量

- **%cmi_user_meta_[键]%**：与自定义元数据功能一起使用。
- **%cmi_user_kitcd_[礼包名]%**：显示礼包的剩余冷却时间。
- **%cmi_jail_time_[监狱名]_[牢房ID]%**：显示特定监狱/牢房的禁闭剩余时间。
- **%cmi_jail_username_[监狱名]_[牢房ID]%**：显示在特定监狱/牢房中禁闭的玩家名。
- **%cmi_jail_reason_[监狱名]_[牢房ID]%**：显示特定监狱/牢房中玩家的禁闭原因。
- **%cmi_worth_sell_[物品英文ID:附加值]%**：显示指定物品的出售价格。
- **%cmi_worth_buy_[物品英文ID:附加值]%**：显示指定物品的购买价格。

## 静态变量

静态变量可以在游戏中通过 **`/cmi placeholders`** 命令查看, 还会显示带有可能输出值的示例:

## 玩家信息变量

| 变量                               | 描述                       |
| ---------------------------------- | -------------------------- |
| %cmi_user_charges_left%            | 剩余的使用次数             |
| %cmi_user_charges_max%             | 最大使用次数               |
| %cmi_user_charges_time%            | 使用时间                   |
| %cmi_user_charges_cooldown%        | 冷却时间                   |
| %cmi_user_display_name%            | 显示名称                   |
| %cmi_user_nickname%                | 昵称                       |
| %cmi_user_name%                    | 玩家名称                   |
| %cmi_user_cuffed%                  | 是否被铐住                 |
| %cmi_user_god%                     | 是否处于上帝模式           |
| %cmi_user_afk%                     | 是否处于离开状态           |
| %cmi_user_afk_symbol%              | 离开状态符号               |
| %cmi_user_joinedcounter%           | 加入次数统计               |
| %cmi_user_banned%                  | 是否被封禁                 |
| %cmi_user_maxhomes%                | 最大家园数量               |
| %cmi_user_homeamount%              | 家园数量                   |
| %cmi_user_vanished_symbol%         | 隐身状态符号               |
| %cmi_user_balance_formatted%       | 格式化后的余额             |
| %cmi_user_balance%                 | 余额                       |
| %cmi_user_prefix%                  | 前缀                       |
| %cmi_user_suffix%                  | 后缀                       |
| %cmi_user_group%                   | 所属组                     |
| %cmi_user_tfly%                    | 临时飞行时间               |
| %cmi_user_tfly_formatted%          | 格式化后的临时飞行时间     |
| %cmi_user_tgod%                    | 临时上帝模式时间           |
| %cmi_user_tgod_formatted%          | 格式化后的临时上帝模式时间 |
| %cmi_user_votecount%               | 投票次数                   |
| %cmi_user_rank%                    | 等级                       |
| %cmi_user_nextranks%               | 下一个等级                 |
| %cmi_user_nextrankpercent%         | 下一个等级的百分比         |
| %cmi_user_nextvalidranks%          | 下一个有效等级             |
| %cmi_user_canrankup%               | 是否可以升级               |
| %cmi_user_country%                 | 国家                       |
| %cmi_user_country_code%            | 国家代码                   |
| %cmi_user_city%                    | 城市                       |
| %cmi_user_jailname%                | 监狱名称                   |
| %cmi_user_jailcell%                | 牢房编号                   |
| %cmi_user_jailtime%                | 监禁时间                   |
| %cmi_user_jailreason%              | 监禁原因                   |
| %cmi_user_bungeeserver%            | 所在的 Bungee 服务器       |
| %cmi_user_playtime_days%           | 游戏时间（天）             |
| %cmi_user_playtime_dayst%          | 游戏时间（天，格式化）     |
| %cmi_user_playtime_hours%          | 游戏时间（小时）           |
| %cmi_user_playtime_hoursf%         | 游戏时间（小时，格式化）   |
| %cmi_user_playtime_hourst%         | 游戏时间（小时，格式化）   |
| %cmi_user_playtime_minutes%        | 游戏时间（分钟）           |
| %cmi_user_playtime_minutest%       | 游戏时间（分钟，格式化）   |
| %cmi_user_rank_percent_[rankName]% | 等级百分比                 |
| %cmi_user_meta_[key]%              | 自定义元数据               |
| %cmi_user_kitcd_[kitName]%         | 礼包冷却时间               |

## 物品变量

| 变量                         | 描述             |
| ---------------------------- | ---------------- |
| %cmi_iteminhand_displayname% | 手中物品显示名称 |
| %cmi_iteminhand_realname%    | 手中物品真实名称 |
| %cmi_iteminhand_type%        | 手中物品类型     |
| %cmi_iteminhand_itemdata%    | 手中物品数据     |
| %cmi_iteminhand_amount%      | 手中物品数量     |
| %cmi_iteminhand_worth%       | 手中物品价值     |

## 定时任务变量

| 变量                               | 描述                 |
| ---------------------------------- | -------------------- |
| %cmi_schedule_nextin_[定时任务名]% | 下一个定时任务的时间 |

## 经济变量

| 变量                          | 描述                   |
| ----------------------------- | ---------------------- |
| %cmi_baltop_name_[1-10]%      | 服务器前10名玩家的名称 |
| %cmi_baltop_money_[1-10]%     | 服务器前10名玩家的余额 |
| %vault_eco_balance_formatted% | 格式化后的余额         |

## 物品价值变量

| 变量                                   | 描述         |
| -------------------------------------- | ------------ |
| %cmi_worth_buy_[物品英文ID:(附加值)]%  | 物品购买价格 |
| %cmi_worth_sell_[物品英文ID:(附加值)]% | 物品出售价格 |

## 蹦极网络变量

| 变量                                 | 描述               |
| ------------------------------------ | ------------------ |
| %cmi_bungee_total_[服务器名]%        | 服务器总人数       |
| %cmi_bungee_current_[服务器名]%      | 服务器当前在线人数 |
| %cmi_bungee_motd_[服务器名]%         | 服务器 MOTD        |
| %cmi_bungee_onlinestatus_[服务器名]% | 服务器在线状态     |

## 玩家变量

| 变量           | 描述             |
| -------------- | ---------------- |
| %player_world% | 玩家所在世界     |
| %player_x%     | 玩家 X 坐标      |
| %player_y%     | 玩家 Y 坐标      |
| %player_z%     | 玩家 Z 坐标      |
| %player_biome% | 玩家所在生物群系 |

## 服务器变量

| 变量                     | 描述               |
| ------------------------ | ------------------ |
| %server_online%          | 当前在线玩家数     |
| %server_max_players%     | 服务器最大玩家数   |
| %server_unique_joins%    | 服务器唯一加入次数 |
| %server_time_[时间格式]% | 服务器时间         |

## 在线玩家变量

| 变量                         | 描述             |
| ---------------------------- | ---------------- |
| %onlineplayers_names%        | 在线玩家名称     |
| %onlineplayers_displaynames% | 在线玩家显示名称 |

## 随机值变量

| 变量                     | 描述         |
| ------------------------ | ------------ |
| %cmi_random_player_name% | 随机玩家名称 |
| %cmi_random_[from]_[to]% | 随机值       |

## 监狱变量

| 变量                                  | 描述         |
| ------------------------------------- | ------------ |
| %cmi_jail_time_[监狱名]_[牢房ID]%     | 监禁时间     |
| %cmi_jail_username_[监狱名]_[牢房ID]% | 监禁玩家名称 |
| %cmi_jail_reason_[监狱名]_[牢房ID]%   | 监禁原因     |

## Ranks 等级

### 功能特点

- **自动获取默认等级组**：根据权限节点 `cmi.defaultrank.[等级组名]` 自动分配。
- **忽略未启用的等级组**。
- **DisplayName**：用于显示等级名称，不影响权限分配。
- **DefaultRank**：默认等级组，优先级最高的等级组将分配给玩家。
- **AutoRankup**：条件满足时自动升级。
- **RankupConfirmation**：升级时需要确认。
- **NextRanks**：可升级到的下一个等级列表。
- **MoneyCost**：升级所需金钱。
- **ExpCost**：升级所需经验值。
- **Commands**：升级时执行的命令。
- **CommandsOnRankDown**：降级时执行的命令。

### 条件要求

| 条件                      | 描述                 |
| ------------------------- | -------------------- |
| Travel                    | 总旅行距离           |
| Walk                      | 行走距离             |
| Sneak                     | 潜行距离             |
| Sprint                    | 疾跑距离             |
| Swim                      | 游泳距离             |
| Fall                      | 下坠距离             |
| Climb                     | 攀爬距离             |
| Fly                       | 飞行距离             |
| Dive                      | 水下行走距离         |
| MinecartTravel            | 矿车行进距离         |
| BoatTravel                | 船行进距离           |
| PigTravel                 | 骑猪行进距离         |
| HorseTravel               | 骑马行进距离         |
| ElytraTravel              | 鞘翅飞行距离         |
| PlayTime                  | 总游戏时间           |
| AccountAge                | 账户年龄             |
| FromLastDeath             | 上次死亡到现在的时间 |
| SneakTime                 | 潜行时间             |
| GameQuit                  | 退出游戏次数         |
| Jump                      | 跳跃次数             |
| DamageDealt               | 造成的伤害总值       |
| DamageTaken               | 受到的伤害总值       |
| Deaths                    | 死亡次数             |
| MobKills                  | 击杀怪物次数         |
| PlayerKills               | 击杀玩家次数         |
| ItemEnchanted             | 附魔物品次数         |
| AnimalsBred               | 繁殖动物次数         |
| FishCaught                | 钓到鱼次数           |
| TalkedToVillager          | 与村民对话次数       |
| TradedWithVillager        | 与村民交易次数       |
| CakeSlicesEaten           | 吃的蛋糕片数         |
| CauldronFilled            | 填满炼药锅次数       |
| CauldronUsed              | 使用炼药锅次数       |
| ArmorCleaned              | 清洗皮革甲次数       |
| BannerCleaned             | 清洗旗帜次数         |
| BrewingstandInteractions  | 与酿造台互动次数     |
| BeaconInteractions        | 与信标交互次数       |
| CraftingTableInteractions | 与工作台互动次数     |
| FurnaceInteractions       | 与熔炉互动次数       |
| DispenserInspected        | 检查发射器次数       |
| DropperInspected          | 检查投掷器次数       |
| HopperInspected           | 检查漏斗次数         |
| ChestOpen                 | 打开箱子次数         |
| TrappedChestTriggered     | 触发陷阱箱次数       |
| EnderchestOpened          | 打开末影箱次数       |
| NoteblockPlayed           | 激活音符盒次数       |
| NoteblockTuned            | 调音音符盒次数       |
| FlowerPotted              | 花盆栽花次数         |
| RecordPlayed              | 播放唱片次数         |
| SleepInBed                | 睡觉次数             |
| ShulkerBoxOpened          | 打开潜影盒次数       |
| ItemDropped               | 丢弃物品次数         |
| ItemPickups               | 捡起物品次数         |
| BlocksMined               | 挖掘方块次数         |
| ItemBreaks                | 使用物品次数         |
| ItemCrafts                | 合成物品次数         |
| ItemsUsed                 | 使用物品次数         |
| MonsterKills              | 击杀怪物次数         |
| KilledBy                  | 被怪物击杀次数       |

### 示例配置

```yaml
Newbie:
  Enabled: true
  DisplayName: "&2Newbie"
  DefaultRank: true
  AutoRankup: true
  NextRanks:
  - Branch1
  - Branch2
Branch1:
  Enabled: true
  DisplayName: "&2Branch1"
  AutoRankup: true
  RankupConfirmation: true
  Votes: 5
  PermissionRequirement:
  - "cmi.command.fly:Fly"
  McMMORequirement:
  - "woodcutting:10"
  - "power:20"
  JobsRequirement:
  - "miner:10"
  - "totallevel:20"
  ItemRequirement:
  - "stone:10"
  - "stone:1:20"
  - "book:20"
  NextRanks:
  - Branch1Rank1
  MoneyCost: 100
  Commands:
  - "broadcast! &6[playerDisplayName] &eleveled up to Branch1 rank!"
  StatsRequirements:
  - "PlayTime:3600"
  - "travel:1000"
  - "MonsterKills:zombie:10"
  - "MonsterKills:slime:5"
  - "MonsterKills:wolf:5"
  - "AccountAge:1209600"
Branch1Rank1:
  Enabled: true
  DisplayName: "&2Branch1Rank1"
  DefaultRank: false
  AutoRankup: true
  RankupConfirmation: false
  PermissionRequirement:
  - "cmi.command.heal:Heal"
  NextRanks:
  - Last
  MoneyCost: 300
  ExpCost: 350
  Commands:
  - "broadcast! &6[playerDisplayName] &eleveled up to Branch1Rank1 rank!"
  CommandsOnRankDown:
  - "broadcast! &6[playerDisplayName] &eleveled down to Branch1 rank!"
  StatsRequirements:
  - "travel:10000"
  - "blocksmined:3000"
  - "blocksmined:diamond_ore:30"
  - "MonsterKills:1000"
  - "AccountAge:1209600"
  McMMORequirement:
  - "taming:10"
  - "unarmed:30"
Branch2:
  Enabled: true
  DisplayName: "&2Branch2"
  AutoRankup: true
  RankupConfirmation: true
  MoneyCost: 150
  NextRanks:
  - Branch2Rank1
  Commands:
  - "broadcast! &6[playerDisplayName] &eleveled up to Branch2 rank!"
  PermissionRequirement:
  - "cmi.command.tp:Teleport"
  StatsRequirements:
  - "PlayTime:3600"
  - "travel:2000"
  - "MonsterKills:zombie:15"
  - "MonsterKills:slime:10"
Branch2Rank1:
  Enabled: true
  DisplayName: "&2Branch2Rank1"
  AutoRankup: true
  RankupConfirmation: false
  MoneyCost: 100
  ExpCost: 150
  NextRanks:
  - Branch2Rank2
  Commands:
  - "broadcast! &6[playerDisplayName] &eleveled up to Branch1Rank1 rank!"
  StatsRequirements:
  - "PlayTime:4600"
  - "Swim:1000"
  - "SneakTime:180"
  - "MonsterKills:100"
Branch2Rank2:
  Enabled: true
  DisplayName: "&2Branch2Rank2"
  AutoRankup: true
  RankupConfirmation: false
  MoneyCost: 100
  ExpCost: 150
  NextRanks:
  - Last
  Commands:
  - "broadcast! &6[playerDisplayName] &eleveled up to Branch2Rank2 rank!"
  StatsRequirements:
  - "walk:15000"
  - "HorseTravel:1000"
  - "ItemsUsed:10000"
  - "PlayerKills:10"
Last:
  Enabled: true
  DisplayName: "&2Last"
  AutoRankup: true
  StatsRequirements:
  - "PlayTime:21600"
  - "walk:30000"
  - "MonsterKills:1000"
  - "blocksmined:30000"
  Commands:
  - "broadcast! &6[playerDisplayName] &eleveled up to Last rank!"
  - "cmi heal [playerName]"
  - "money give [playerName] 100"
```

## 礼包 | Kits

### 功能特点

- 启用/禁用礼包
- 添加物品到礼包（包括护甲槽和副手）
- 克隆背包内的物品为礼包物品
- 物品名或 Lore 包含 `{USERNAME}`, `{DISPLAYNAME}`, `{KITNAME}`, `{WORLDNAME}`, `{RANDOMPLAYER}` 变量时会自动替换

### 创建礼包

1. 执行命令 `/cmi kiteditor new [礼包名]`
2. 或者执行 `/cmi kiteditor`，点击绿色的 `+` 号来创建一个礼包
3. 输入礼包名称后，可以修改礼包内容

### 编辑礼包的高级设置

1. 点击名叫 `设置(settings)` 的工作台按钮
2. 编辑冷却时间、礼包名称、礼包介绍、礼包组和组权重
3. 设置礼包在 GUI 内显示的图标、购买花费、显示位置
4. 设置领取礼包时执行的命令和条件

### 常见问题解答

- **为什么我看不到礼包？**
  - 检查是否已给予玩家正确的权限
  - 确定礼包已启用（GUI右上方是绿色的彩色玻璃板）
- **如何打开礼包编辑器？**
  - 执行 `/cmi kiteditor` 并单击要编辑的礼包
- **如何设置组权重？**
  - 打开礼包设置，点击 `礼包组(Kit group)`，输入礼包组名，改变礼包的权重

### 权限节点

| 权限节点             | 描述                 |
| -------------------- | -------------------- |
| cmi.kit.[礼包名]     | 允许领取指定的礼包   |
| cmi.kit.bypass.exp   | 无视礼包的经验值需求 |
| cmi.kit.bypass.money | 无视礼包的金币需求   |
| cmi.kit.bypass.time  | 无视礼包的冷却时间   |

### 注意事项

- 对于大部分指令来说，玩家的在线状态对指令并没有影响
- `[]` 表示必须项，`()` 表示可选项
- 某些指令会有附加信息，包括但不限于使用 `?` 标识的权限节点，例如 `/cmi alert ?`
- 某些指令会有特殊变量 `-s`，用于防止消息输出，需要权限 `cmi.command.silent`

# CMI 插件命令详解

## A 类命令

| 命令                               | 描述                                                         |
| ---------------------------------- | ------------------------------------------------------------ |
| /cmi actionbarmsg [玩家名] [消息]  | 对指定的玩家显示 Actionbar 消息                              |
| /cmi afk (玩家名) (原因)           | 切换 AFK(挂机) 模式                                          |
| /cmi afkcheck (玩家名)             | 查看玩家 AFK 状态                                            |
| /cmi air [玩家名] (数量) (-s)      | 显示玩家潜水状态所剩的氧气或将其改为特定数量                 |
| /cmi alert [玩家名] (原因)         | 对指定玩家设置警报消息，在拥有指定权限的玩家上线时可以看到警报 |
| /cmi aliaseditor (新指令) (原指令) | 显示所有激活的自定义指令并允许你添加或删除指令               |
| /cmi armorstand (last)             | 面向盔甲架并打开盔甲架编辑，如果在指令最后添加 last 将会显示上一个编辑的盔甲架 |
| /cmi attachcommand (指令)          | 为你手上的物品添加指令。指令会一直保存在物品中               |

## B 类命令

| 命令                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| /cmi back (玩家名) (-s)                                      | 传送到原坐标点。如果填写玩家名，将会将指定玩家送回原坐标点。需要权限。 |
| /cmi balance (金钱)                                          | 检查金钱数量                                                 |
| /cmi baltop (金钱)                                           | 查看金钱排行                                                 |
| /cmi ban [玩家名] (原因) (-s)                                | 封禁玩家                                                     |
| /cmi blockcycling (forward/backward)                         | 当方块被放置时循环扔出所有可能的方块状态                     |
| /cmi blockinfo                                               | 显示方块信息，包括真实名字                                   |
| /cmi blocknbt                                                | 显示方块 NBT 信息                                            |
| /cmi book [Author(作者)/Title(标题)/Unlock(解锁)] [内容]     | 允许编辑已经锁定的书                                         |
| /cmi bossbarmsg [玩家名/all] (-t:[时长]) (-n:名称/ID) (-p:[最大值/当前值]) (-c:[颜色]) [消息] | 发送 Boss 血条消息                                           |
| /cmi broadcast [消息]                                        | 发送广播消息。如果广播消息由“!”开始，则前缀失效。            |
| /cmi burn (玩家名) (时长) (-s)                               | 燃烧一个玩家                                                 |

## C 类命令

| 命令                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| /cmi charges (玩家名) [add/set/take/clear/reset] (-f)        | 允许查看当前刷怪笼的充能状态，如果拥有权限 cmi.command.charges.edit 将可以编辑刷怪笼 |
| /cmi chat [玩家名/off]                                       | 开始或关闭聊天模式                                           |
| /cmi checkaccount (玩家名/ip)                                | 查看玩家或 IP 拥有的账号数量                                 |
| /cmi checkban (玩家名)                                       | 检查被封禁的玩家                                             |
| /cmi checkcommand (关键词)                                   | 靠关键词寻找指定命令                                         |
| /cmi checkexp (玩家名)                                       | 检查玩家的等级与经验                                         |
| /cmi checkperm (关键词)                                      | 显示整个权限列表或者使用关键词寻找相关的权限                 |
| /cmi cheque (玩家名) [数量]                                  | 拿取定义的金钱并创建定义金额的纸质支票。如果填写玩家名并且指令执行者拥有 cmi.command.cheque.admin 权限则执行者不会被扣除金钱 |
| /cmi clear (玩家名) (-s)                                     | 清除玩家的背包                                               |
| /cmi clearchat (self)                                        | 清屏。如果在指令末端添加 self 的话就只有你的聊天版会被清理。cmi.command.clearchat.bypass 会防止屏幕清理。 |
| /cmi clearender (玩家名) (-s)                                | 清除玩家末影箱。                                             |
| /cmi colorlimits (玩家名)                                    | 显示玩家聊天/昵称不可使用的颜色代码                          |
| /cmi colors (玩家名)                                         | 显示所有颜色代码                                             |
| /cmi commandspy (玩家名)                                     | 切换指令间谍模式(查看指定玩家使用过的指令)                   |
| /cmi compass [玩家名] (目标名) (x) (z) (世界名) (-s)         | 设置指南针目标来标注玩家的位置或世界内指定的位置。例如: /cmi compass Zhax, /cmi compass Zrips Zhax, /cmi compass LT_Craft 0 0 Zrips -s |
| /cmi condense (物品名)                                       | 压缩物品成一个更加紧实的形式                                 |
| /cmi counter [join/leave/start] (t:时间) (r:范围) (msg:自定义消息) (c:[world:x:y:z]) (-f) | 管理计数功能。允许对使用 /cmi counter join 加入的玩家显示倒计时或使用 -f 来强制所有在范围内的玩家。例如: /cmi counter t:5 r:50 -fc:Lt_craft:0:120:0 |
| /cmi cplaytime (玩家名)                                      | 打开 GUI 界面查看更加详细的玩家游戏时间信息                  |
| /cmi ctext (cTextName)                                       | 显示所有或部分自定义信息                                     |
| /cmi cuff [玩家名]                                           | 检查嫌疑玩家的活动。可以被 cmi.command.cuff.bypass 防止      |
| /cmi customrecipe                                            | 打开 GUI 允许你创建自己的工作台/熔炉配方，需要权限 (cmi.command.customrecipe) |

## D 类命令

| 命令                                                         | 描述                                                 |
| ------------------------------------------------------------ | ---------------------------------------------------- |
| /cmi dback (玩家名) (-s)                                     | 回到上次死亡点，需要指定权限                         |
| /cmi disableenchant                                          | 打开 GUI 关闭任何的附魔                              |
| /cmi dispose (玩家名)                                        | 打开垃圾桶                                           |
| /cmi dsign (new)                                             | 创建一个新的动态告示牌或打开已存在的告示牌显示编辑器 |
| /cmi dye (玩家名) (red,green,blue/hexCode/colorName/random/clear/rainbow/biome/health/day) (-s) | 修改皮革装备的颜色                                   |

## E 类命令

| 命令                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| /cmi editctext                                               | 显示所有已创建的自定义文本并可以添加/移除/编辑自定义文本     |
| /cmi editplaytime (玩家名) [add/take/set] [amount] (-s)      | 编辑玩家的游玩时间                                           |
| /cmi editwarnings (玩家名/clearall) (clear)                  | 管理特定/所有玩家的警告信息                                  |
| /cmi editwarp [地标名]                                       | 打开地标编辑菜单                                             |
| /cmi effect [玩家名] [效果/clear] (时长) (等级)              | 为玩家添加/清除药水效果                                      |
| /cmi enchant (玩家名) [附魔名] [等级] (-o) (-onlyvalid) (-inform) (-s) (-i:[物品ID:子ID]) | 为手中的物品附魔指定等级与条目的附魔。-o 允许附魔物品为副手物品 -onlyvalid 会查物品是否适合该附魔 -inform 会对被附魔道具的玩家发送消息。-i:[itemName:data] 会限制指定物品的附魔数量 |
| /cmi ender (玩家名)                                          | 打开末影箱或查看其它玩家的末影箱。需要 cmi.enderedit 权限节点才能查看与编辑其他玩家的末影箱 |
| /cmi entityinfo                                              | 检查玩家面对的生物的信息                                     |
| /cmi entitynbt                                               | 检查玩家面对的生物的 NBT 信息                                |
| /cmi exp (玩家名) [add/set/take/clear] [数量] (-s)           | 编辑玩家的经验点数 例如: /exp 10, /exp add 10, /exp set 10L, /exp take 10, /exp Zrips clear, /exp Zrips add 10 |
| /cmi ext (玩家名) (-s)                                       | 惩罚一个玩家                                                 |

## F 类命令

| 命令                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| /cmi feed (玩家名)                                           | 将玩家饱食度调满                                             |
| /cmi fixchunk w [世界名] r [范围] c [x:z]                    | 尝试寻找损坏的模块并修复它们。例子：/fixchunk w LT_Craft, /fixchunk w LT_Craft r 50 c 1024:-2048, /fixchunk w LT_Craft r g, /fixchunk fix |
| /cmi flightcharge (add/take/set/show/expcharge/moneycharge/recharge) (玩家名) (数量) | 操作玩家的飞行蓄力。重新蓄力可使用 /recharge。检查蓄力可使用 /fcharge |
| /cmi fly (玩家名) (true/false)                               | 切换飞行模式                                                 |
| /cmi flyspeed (玩家名) [数量] (-s)                           | 修改飞行速度 (0-10)                                          |

## G 类命令

| 命令                                       | 描述                                                         |
| ------------------------------------------ | ------------------------------------------------------------ |
| /cmi getbook [cText] (玩家名)              | 切换自定义文本到书里并将书给予目标玩家                       |
| /cmi give (玩家名) [物品名] (数量)         | 给玩家指定的物品。特殊标签可以被使用。                       |
| /cmi giveall [物品名] (数量) (e            | l                                                            |
| /cmi glow (玩家名) [true/false/color] (-s) | 设置玩家的发光状态，例如: /glow Zrips red 权限: cmi.command.glow.[颜色] – 允许设置特定的颜色 |
| /cmi gm [玩家名] [游戏模式] (-s)           | 修改玩家的游戏模式                                           |
| /cmi god [玩家名] (true/false) (-s)        | 切换玩家的无敌状态                                           |
| /cmi groundclean (+cb) (+cm) (+ci) (+b)    | 移除所有的掉落物                                             |

## H 类命令

| 命令                                             | 描述                                                         |
| ------------------------------------------------ | ------------------------------------------------------------ |
| /cmi haspermission (玩家名) [权限节点]           | 显示玩家是否有目标权限                                       |
| /cmi hat (玩家名) (-s)                           | 将手上的物品放置到头上                                       |
| /cmi head [资源名] (目标名) (-s)                 | 创建一个目标玩家皮肤的头颅                                   |
| /cmi heal (玩家名) (healamount/healpercent) (-s) | 治疗玩家到满血/指定血量/百分比。例如 /cmi heal zrips, /cmi heal zrips 10, /cmi heal zrips 10% |
| /cmi helpop [消息]                               | 发送消息到帮助频道，任何拥有 cmi.command.helpop.inform 权限的玩家会看见消息 |
| /cmi hideflags (玩家名) [flag属性/clear]         | 隐藏定义物品的旗帜 Flag 或清除 flag。例如 /cmi hideflags Zrips hide_placed_on |
| /cmi hologram (new)                              | 显示所有创建的全息字或创建一个新的全息字                     |
| /cmi home (名称) (玩家名)                        | 传送到家里                                                   |
| /cmi homes (玩家名)                              | 查看所有的家                                                 |
| /cmi hunger [玩家名] [数量] (-s)                 | 设置玩家饥饿值                                               |

## I 类命令

| 命令                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| /cmi ic (new) (名称)                                         | 创建一个可点击的方块或生物                                   |
| /cmi ifoffline [玩家名] (指令)                               | 如果玩家不在线的话，运行此指令                               |
| /cmi ifonline [玩家名] (指令)                                | 如果玩家在线的话，运行此指令                                 |
| /cmi ignore (玩家名/uuid/all)                                | 将玩家添加到你的黑名单内                                     |
| /cmi importfrom [essentials] [home/warp/nick/logoutlocation/money] | 导入 Essentials 中的用户数据到 CMI 中。可重复使用。          |
| /cmi importoldusers                                          | 从 playerdata 文件中导入玩家信息                             |
| /cmi info [玩家名/uuid]                                      | 显示玩家的详细信息。需要 cmi.command.info.ip 权限查看玩家 IP。查看玩家所在国家你需要这个文件放入到你的 CMI 文件夹内 |
| /cmi inv [玩家名]                                            | 打开玩家的物品背包。需要 cmi.invedit 权限才能编辑玩家的背包 cmi.buttonteleport 权限可以点击 GUI 内的按钮传送到玩家身边 |
| /cmi invcheck (玩家名) [id] (-e)                             | 检查保存的背包。-e 决定了是否可以编辑背包。需要 cmi.command.invcheck.edit 权限使用 |
| /cmi invlist (玩家名)                                        | 显示所有已记录的背包信息                                     |
| /cmi invload (sourceName) (targetName) [id/last]             | 载入一个背包的记录到指定玩家上                               |
| /cmi invremove (玩家名) [id/all/last]                        | 移除一个/全部/最后一个记录的背包                             |
| /cmi invremoveall [confirmed]                                | 移除所有已记录的背包                                         |
| /cmi invsave (玩家名) (-s)                                   | 记录玩家的背包                                               |
| /cmi ipban [ip/玩家名] (原因) (-s)                           | 封禁玩家 IP。同时也会封禁填写的玩家名。如果填写了 IP 则禁止玩家使用这个 IP 访问游戏 |
| /cmi ipbanlist                                               | 查看所有被封禁的 IP 和相关的账号                             |
| /cmi iteminfo (玩家名)                                       | 显示手中物品信息                                             |
| /cmi itemlore (玩家名) [行数] [remove/insert/new lore line]  | 管理物品描述                                                 |
| /cmi itemname (玩家名) [remove/新物品名称]                   | 管理物品名称                                                 |
| /cmi itemnbt (玩家名)                                        | 显示所有物品的 NBT 标签                                      |

## J 类命令

| 命令                                                      | 描述                                                         |
| --------------------------------------------------------- | ------------------------------------------------------------ |
| /cmi jail [玩家名] (时间) (监狱名) (监狱房间 ID) (r:原因) | 将玩家送进监狱。时间格式 5s = 5 秒, 5m = 5 分钟, 5h = 5 小时, 5d = 5 天 |
| /cmi jailedit                                             | 编辑监狱                                                     |
| /cmi jump                                                 | 跳跃到你看着的位置                                           |

## K 类命令

| 命令                                                         | 描述                                                    |
| ------------------------------------------------------------ | ------------------------------------------------------- |
| /cmi kick [玩家名/all] (消息) (-s)                           | 将玩家提出服务器                                        |
| /cmi killall (-monsters/-pets/-npc/-animals/-ambient/-named/-f/-lightning/-list/[mobType]) (range) (-s) | 击杀所有世界/范围内的特定生物。更多信息请查看 WIKI 页面 |
| /cmi kit (礼包名) (玩家名)                                   | 显示所有/指定的礼包                                     |
| /cmi kitcdreset (礼包名) (玩家名)                            | 允许重置礼包的冷却时间                                  |
| /cmi kiteditor                                               | 打开礼包编辑器。可以在游戏内编辑任何的礼包。            |

## L 类命令

| 命令                                                  | 描述                                                     |
| ----------------------------------------------------- | -------------------------------------------------------- |
| /cmi lastonline [timeRange/list/stop] [页数]          | 显示最后一个在指定时间登录游戏的玩家。包括现在在线的玩家 |
| /cmi launch (玩家名) (p:[能量]) (a:[角度]) (d:[方向]) | 将玩家推送指定的地方                                     |
| /cmi lfix (范围) (玩家名)                             | 修复玩家周围的光源错误                                   |
| /cmi list                                             | 显示在线玩家，使用权限排序                               |
| /cmi lockip [玩家] [add/remove/list/clear] [ip]       | 防止玩家从另外一个 IP 登录账号                           |

## M 类命令

| 命令                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| /cmi mail [send/clear/read] [玩家名] (消息)                  | 发送/编辑一个邮件                                            |
| /cmi mailall [send/clear/remove] [消息]                      | 对所有 7 天内登录过的玩家发送邮件（可配置）                  |
| /cmi maintenance (消息)                                      | 使服务器进入维修模式并防止无 cmi.command.maintenance.bypass 权限的玩家加入游戏，显示在加入时默认或自定义的提示消息。可使用 PlaceholderAPI 变量 |
| /cmi maxhp [set/add/take/clear] [玩家名] [数量] (-s)         | 管理玩家的生命上限                                           |
| /cmi maxplayer [数量]                                        | 修改服务器最大人数，无需重启                                 |
| /cmi me [消息]                                               | 发送公告类消息。需要 cmi.me.colors 来添加颜色代码            |
| /cmi merchant [type] [玩家名]                                | 打开一个被定义的商人的 GUI 进行交易                          |
| /cmi migratedatabase                                         | 修改数据库类型，从 SQLite 到 MySQL 或 vice versa。           |
| /cmi mirror (start/stop)                                     | 打开GUI设置防止方块的镜像                                    |
| /cmi money [pay/set/give/take] [玩家名/all/alloffline] [数量] | 允许修改玩家的金钱. 设置/给予/拿走和all(所有)需要cmi.command.money.admin 权限节点? |
| /cmi more (玩家名) (-clone/[数量])                           | 翻倍物品最大叠加数，定义一个物品最多可以在一格背包内叠加多少个 |
| /cmi msg [玩家名] [消息/!-消息!]                             | 送私人消息给目标玩家。如果消息由“！”开始则清晰地消息会被现实。发送者需要cmi.command.msg.clean 才能使用“!” |
| /cmi msgtoggle (玩家名)                                      | 切换私人消息模式。可以使用cmi.command.msg.togglebypass权限无视此功能 |
| /cmi mute [玩家名] (时长) (原因) (-s)                        | 禁言指定玩家，防止玩家在一定时间内发送公共消息。如果没写填写时长则默认1小时。权限cmi.command.mute.bypass可以无视禁言限制 |
| /cmi mutechat (时长) (-s)                                    | 禁言所有玩家，如果没有定义时长则默认1小时。需要cmi.command.mutechat.bypass无视禁言限制 |

## N 类命令

| 命令                                                 | 描述                                  |
| ---------------------------------------------------- | ------------------------------------- |
| /cmi nameplate (玩家名) (-pref:[前缀]) (-suf:[后缀]) | 修改/添加玩家的前缀与后缀             |
| /cmi near (距离)                                     | 显示离你较近的玩家                    |
| /cmi nick [newNickName] (玩家名)                     | 修改玩家的昵称。使用 Off 可以关闭昵称 |
| /cmi notarget (玩家名) (true/false) (-s)             | 开启后怪物不会攻击你                  |
| /cmi note (玩家名) [add/remove/clear/list] (id/note) | 添加给其他玩家添加标签                |

## O 类命令

| 命令        | 描述                     |
| ----------- | ------------------------ |
| /cmi oplist | 查看所有有 OP 权限的玩家 |

## P 类命令

| 命令                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| /cmi patrol                                                  | 传送到下一个在列表中等待检查的玩家                           |
| /cmi ping (玩家名)                                           | 显示玩家帧数 Ping                                            |
| /cmi placeholders (parse) (变量)                             | 显示所有可用的 PlaceholderAPI 变量/CMI 内置变量。可以显示部分的变量并了解变量的出处 |
| /cmi playtime (玩家名)                                       | 显示玩家游玩时间                                             |
| /cmi playtimetop                                             | 显示玩家游玩时间排行榜                                       |
| /cmi playercollision (玩家名) [true/false]                   | 开启/关闭物体碰撞体积                                        |
| /cmi point (粒子效果) (玩家名) (-self) (时间) (-s:[速度])    | 画一条线到玩家所看的方块并默认标记方块 5 秒钟。              |
| /cmi portals (new/nearest) (传送门名)                        | 显示所有的已创建传送门，并可以新建一个传送门                 |
| /cmi pos (玩家名)                                            | 显示玩家当前的坐标，世界，灯光等级与合理的地狱世界坐标       |
| /cmi preview [范围] (内部范围)                               | 加载玩家周围的模块，可以加载最大 32 的范围的模块             |
| /cmi ptime (time/playername/Freeze/unfreeze/realtime/reset) [time] | 修改玩家的个人时间或定义一个                                 |
| /cmi purge                                                   | 根据离线时长清除玩家数据                                     |
| /cmi pweather (玩家名) [sun/rain/reset]                      | 设置个人的天气                                               |

## R 类命令

| 命令                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| /cmi rankdown (阶级) (confirm)                               | 将玩家降阶                                                   |
| /cmi rankinfo (阶级)                                         | 显示指定的阶级信息                                           |
| /cmi ranklist                                                | 打印出所有可能的阶级                                         |
| /cmi rankset (玩家名) [阶级] (-cmd) (-cost)                  | 设置玩家的阶级。-cost 会扣除玩家的金钱，经验或物品。         |
| /cmi rankup (阶级) (confirm)                                 | 升阶到下一个阶级或被定义的阶级                               |
| /cmi realname (玩家名/昵称)                                  | 查看玩家的真实用户名                                         |
| /cmi recipe (物品名)                                         | 显示手中物品/提供物品的配方。可设置点击配方列表 GUI 任何物品显示其配方 |
| /cmi reload                                                  | 重载配置文件                                                 |
| /cmi removehome (家名称) (玩家名)                            | 移除玩家的家                                                 |
| /cmi removeuser [uuid/duplicates]                            | 从数据库中移除特定 uuid 或玩家                               |
| /cmi removewarp (地标名)                                     | 移除地标点                                                   |
| /cmi repair (玩家名) [hand/armor/all]                        | 修复物品                                                     |
| /cmi repaircost (玩家名) [数量]                              | 设置修复物品所需的金币                                       |
| /cmi replaceblock id [方块ID:子ID] [方块ID:子ID] r [范围] y [最高高度] | 替换范围内的方块                                             |
| /cmi reply [消息]                                            | 回复最后一个给你发消息的玩家                                 |
| /cmi ride                                                    | 允许你骑在你看着的生物上。需要 cmi.command.ride.[生物名] 权限节点。 |
| /cmi rt (玩家名) (世界名)                                    | 传送玩家到一个随机地点                                       |

## S 类命令

| 命令                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| /cmi saturation (玩家名) [数量]                              | 设置玩家的饥饿值                                             |
| /cmi saveall (时间范围)                                      | 保存所有玩家的装备。包括离线玩家。                           |
| /cmi saveditems [save/get/remove/list] (保存物品名称) (-t: 玩家名) (-s) | 保存物品到配置文件中                                         |
| /cmi sc                                                      | 开始告示牌复制进程                                           |
| /cmi scan                                                    | 扫描一个定义的范围或全地图来寻找特定的物品                   |
| /cmi schedule [目标名]                                       | 触发目标                                                     |
| /cmi se [行数] [文本]                                        | 设置告示牌内容                                               |
| /cmi search                                                  | 在所有玩家的背包/末影箱/玩家账户中搜索指定的物品或者玩家状态 |
| /cmi seen [玩家名/uuid]                                      | 查看玩家最近登录时间                                         |
| /cmi sell (all/blocks/Hand/gui/same)                         | 出售手中物品/整个背包的物品/仅可出售的方块                   |
| /cmi sendall [子服名]                                        | 发送所有在线玩家到指定子服。                                 |
| /cmi server [子服名] (玩家名)                                | 通过跨服网络传送自身或者指定玩家到指定子服                   |
| /cmi servertime                                              | 显示包括时区信息的服务器时间                                 |
| /cmi setfirstspawn (玩家名)                                  | 设置自身或者指定玩家的首次重生点                             |
| /cmi sethome (Home名) (玩家名)                               | 设置自身或指定玩家的 Home 位置                               |
| /cmi setmotd [新Motd]                                        | 不需要重启就可以为服务器设置新的 MOTD。                      |
| /cmi setspawn (玩家名) (true/false) (-g:[组名]) (-rng:[半径]) | 设置自身或指定玩家的出生点。                                 |
| /cmi setwarp [地标名] (权限节点要求(true/false) (hand) (slot) (autoLore) | 创建地标。                                                   |
| /cmi setworth                                                | 打开一个可以设置物品出售/购买价格的 GUI。                    |
| /cmi shakeitoff                                              | 将所有附身于你的观察者弹出你的身体。                         |
| /cmi shoot (玩家名) (-t:目标玩家) (种类) (速度)              | 射出子弹。                                                   |
| /cmi signspy (玩家名)                                        | 开关牌子间谍模式。                                           |
| /cmi silence (one/off)                                       | 阻止玩家收到任何提示信息。                                   |
| /cmi silentchest                                             | 开关静音开箱模式。                                           |
| /cmi sit                                                     | 原地坐下。                                                   |
| /cmi skin [皮肤名/off/update] (玩家名)                       | 改变玩家皮肤。                                               |
| /cmi smite (玩家名)                                          | 重击(Smite)你看向的方块或玩家。                              |
| /cmi socialspy (玩家名)                                      | 开关全局间谍(social spy)模式。                               |
| /cmi sound [声音] (-p:[音调]) (-v:[音量]) (玩家名) (世界) (x) (z) | 向指定玩家或位置播放声音。                                   |
| /cmi spawn (玩家名)                                          | 传送自身或者指定玩家到出生点。                               |
| /cmi spawner (实体种类)                                      | 设置刷怪笼为指定种类。                                       |
| /cmi spawnmob                                                | 根据实体种类或者额外参数来生成怪物。                         |
| /cmi staffmsg [消息]                                         | 将会向管理员频道发送信息。                                   |
| /cmi staffchat [消息/toggle/on/off]                          | 主动开关管理员聊天模式。                                     |
| /cmi stats (玩家名)                                          | 显示玩家的完整统计信息。                                     |
| /cmi statsedit (玩家名) [add/take/set] [统计信息] (子分类) [数值] (-s) | 编辑玩家的统计信息。                                         |
| /cmi status                                                  | 显示服务器实时状态。                                         |
| /cmi sudo [玩家名] (command/c:[命令])                        | 强制玩家执行指定命令或者在公屏发送信息。                     |
| /cmi suicide (玩家名) (-s)                                   | 自杀或令其他人自杀                                           |

## T 类命令

| 命令                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| /cmi tablistupdate (玩家名)                                  | 强制更新所有/指定玩家的 TAB 列表                             |
| /cmi tagtoggle (玩家名)                                      | 开/关公共聊天音效标签                                        |
| /cmi tempban [玩家名] [时长/秒] (原因) (-s)                  | 限时封禁玩家                                                 |
| /cmi tempipban [ip/玩家名] [时长] (原因) (-s)                | 显示封禁 IP。                                                |
| /cmi tfly [玩家名] (时长/秒) (-s)                            | 设置玩家在一定时间内可以飞行。                               |
| /cmi tgod [玩家名] (时长/秒) (-s)                            | 设置玩家在一定时间内可以无敌。                               |
| /cmi time (time/add/take/freeze/unfreeze/realtime/autorealtime) [时间] [world/all] | 修改世界时间。                                               |
| /cmi titlemsg [玩家名/all] [title %subtitle% subtitle]       | 对玩家发送标题类消息。                                       |
| /cmi toggleshiftedit                                         | 开/关 Shift 编辑告示牌。                                     |
| /cmi toggletotem                                             | 开/关图腾 Boss 血条冷却显示。                                |
| /cmi top (玩家名) (-s)                                       | 传送玩家到他所在的位置的最高点。                             |
| /cmi tp [玩家名] (玩家名)                                    | 传送玩家到其他玩家/指定的点。                                |
| /cmi tpa [玩家名] (-c)                                       | 发送传送申请给目标玩家并传送到目标玩家所在的位置。           |
| /cmi tpaall                                                  | 对所有玩家发起传送到你所在的位置的申请。                     |
| /cmi tpaccept (玩家名)                                       | 接受传送申请。                                               |
| /cmi tpahere [玩家名] (-c)                                   | 发送传送申请给目标玩家让目标玩家传送到你所在的位置。         |
| /cmi tpall (玩家名)                                          | 传送所有的在线玩家到你的或指定玩家的位置。                   |
| /cmi tpallworld [世界名]                                     | 传送所有玩家到一个特定的世界，包括离线的玩家。               |
| /cmi tpbypass (用户名)                                       | 开/关安全传送保护模式。                                      |
| /cmi tpdeny (玩家名)                                         | 拒绝传送申请。                                               |
| /cmi tphere [玩家名] (玩家名)                                | 传送玩家到你的身边。                                         |
| /cmi tpo [玩家名] (玩家名)                                   | 会忽略任何第三方组队插件保护并甚至不检查安全地点，直接将玩家传送到目标玩家的位置。 |
| /cmi tpohere [玩家名] (玩家名)                               | 会忽略任何第三方组队插件保护并甚至不检查安全地点，直接将目标玩家传送到操作玩家所在的位置。 |
| /cmi tppos (玩家名) [x] [y] [z] (world) (pitch) (yaw) (-rng:[range]) (-s) | 传送玩家到一个特定的点。                                     |
| /cmi tps                                                     | 显示服务器 TPS。                                             |
| /cmi tptoggle (玩家名)                                       | 切换玩家的传送状态，是否可以传送。                           |
| /cmi tree (树类型)                                           | 在你看的地方生成一棵树。                                     |

## U 类命令

| 命令                                                         | 描述                                        |
| ------------------------------------------------------------ | ------------------------------------------- |
| /cmi unban (玩家名/ip)                                       | 解除封禁一个玩家/IP。                       |
| /cmi unbreakable (玩家名) (true/false)                       | 使物品变得无法破坏（无限耐久）。            |
| /cmi uncondense (itemName)                                   | 转换方块到初始状态。                        |
| /cmi unjail [玩家名]                                         | 将玩家释放出监狱。                          |
| /cmi unloadchunks (-f)                                       | 尽量卸载最多的模块来优化服务器内存。        |
| /cmi usermeta [玩家名] [add/remove/clear/list/increment] (key) (value) (-s) | 使用占位符的帮助来设置玩家显示自定义 meta。 |
| /cmi unmute [玩家名] (-s)                                    | 为目标玩家解除禁言。                        |
| /cmi util removeseats                                        | 移除所有出错的隐形盔甲架。                  |

## V 类命令

| 命令                                                    | 描述                                                |
| ------------------------------------------------------- | --------------------------------------------------- |
| /cmi vanish (玩家名/list) (on/off)                      | 将玩家设置为隐藏状态或查看所有隐身中的玩家。        |
| /cmi vanishedit (玩家名)                                | 打开隐身模式编辑器。                                |
| /cmi version                                            | 显示插件版本。                                      |
| /cmi viewrange [距离] (玩家名)                          | 设置目标玩家的可视距离。需要 ProtocolLib 作为前置。 |
| /cmi voteedit [玩家名] [add/set/take/clear] [数量] (-s) | 调整玩家投票数量。                                  |
| /cmi votes (玩家名)                                     | 查看自己或指定玩家的投票次数。                      |
| /cmi votetop (玩家名)                                   | 查看投票次数排行。                                  |

## W 类命令

| 命令                                                   | 描述                                                 |
| ------------------------------------------------------ | ---------------------------------------------------- |
| /cmi walkspeed (玩家名) [数量]                         | 设置玩家的行走速度。                                 |
| /cmi warn [玩家名] (类型) (原因) (-s)                  | 警告玩家，所有拥有特定权限的管理员都能看到警告。     |
| /cmi warnings (玩家名)                                 | 显示所有被警告的玩家的警告时间和过期时间。           |
| /cmi warp (地标名) (玩家名)                            | 传送到一个指定的地标，若没填地标名则会显示传送菜单。 |
| /cmi weather (sun/rain/storm) (lock/时长) (世界名/all) | 设置一个世界/所有世界的天气。                        |
| /cmi whowas [玩家名]                                   | 显示玩家曾经使用过的用户名。                         |
| /cmi workbench (玩家名)                                | 打开远程工作台。                                     |
| /cmi world (normal/nether/end/1/2/3…) (玩家名) (-s)    | 传送到指定的世界。                                   |
| /cmi worth (all/blocks/hand)                           | 显示你的物品的价格。                                 |



