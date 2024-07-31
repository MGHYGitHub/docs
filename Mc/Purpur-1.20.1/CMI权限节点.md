**CMI权限节点**

由于翻译原因，某些[.]可能被翻译为句号。
原文：https://www.zrips.net/cmi/permissions/

可以使用 /cmi checkperm （keyWord） 命令在游戏中检查权限节点，该命令将始终与插件中使用的所有权限节点保持同步。
在大多数情况下，缺少权限节点将通过将鼠标悬停在游戏聊天中的错误消息来显示。为此，您应该具有 **cmi.permisiononerror** 权限节点。
所有命令都有权限节点，如果下面没有列出（为了避免混乱，不会显示基本命令权限），您可以遵循 **cmi.command 的格式。commandName]** 匹配 **/cmi [命令]
权限基本规则**是 **cmi.command。commandName]** 来访问特定命令（例如：**cmi.command.heal**）。如果您尝试执行不是自己的命令，其中一些将需要额外的权限节点：**cmi.command。commandName].others**（例如：**cmi.command.heal.others**）
**cmi.command**– 让玩家可以访问命令的基本用法。一个很好的起点。

- **cmi.security.admin** – 设置玩家安全级别
- **cmi.buttonteleport** – 允许在单击位置图标上的库存编辑 GUI 时传送到目标位置
- **cmi.enderedit** – 允许编辑其他人的末影宝箱
- **cmi.bedhome** – 允许在交互时设置家庭位置
- **cmi.actionbar.colors** – 允许在 actionbarmsg 命令中使用颜色
- **cmi.elevator.use** – 允许根据标志使用电梯
- **cmi.elevator.create** – 允许创建电梯标志
- **cmi.bossbar.colors** – 允许在 bossbarmsg 命令中使用颜色
- **cmi.bossbar.hpbar** – 允许在对实体造成伤害时看到 hp boss 栏。每分钟重新检查一次。
- **cmi.dynmap.hidden** – 从 dynmap 地图中隐藏玩家
- **cmi.prewards.notification** – 允许查看游戏时间奖励通知
- **cmi.prewards 中。[奖励]**- 允许获得特定的游戏时间奖励
- **cmi.anvil.colors** – 允许在重命名项目时使用颜色
- **cmi.title.colors** – 允许在 titlemsg 命令中使用颜色
- **cmi.tag.color** – 标记的玩家名称被着色
- **cmi.colors。[type].\*** – 允许在特定区域使用所有颜色
- **cmi.colors。[类型]。[颜色名称/十六进制]**– 允许在特定区域使用颜色。类型：publicmessage、privatemessage、昵称、标志、书籍、我
- **cmi.seevanished** – 允许看到消失的人
- **cmi.messages.disablelogin** – 禁用登录消息
- **cmi.messages.disablequit** – 禁用注销消息
- **cmi.scrollpainting** – 允许修改绘画
- **cmi.autorespawn** – 允许自动重生
- **cmi.elytralaunch** – 允许使用鞘翅启动功能
- **cmi.permisiononerror** – 允许查看错误消息中缺少的权限
- **cmi.invedit** – 允许编辑玩家库存
- **cmi.book.colors** – 允许为书籍着色
- **cmi.book.pages。[20to100]** – 定义可在图书中创建的最大页数
- **CMI.Damage控制。[组名]**– 按组定义伤害乘数
- **cmi.chorusteleport** – 允许使用合唱传送
- **cmi.teleport.with。[实体类型]**– 允许使用定义的坐骑进行传送
- **cmi.randomteleport.cooldownbypass** – 允许绕过随机传送冷却
- **cmi.fullserver.bypass** – 允许加入完整服务器
- **cmi.signs.shiftedit** – 允许通过 shift 右键单击来编辑标志
- **cmi.signs.shifteditbypass** – 允许在受保护的土地上编辑标志
- **cmi.netherportalbypass** – 在配置文件中禁用下界门户时允许创建下界门户
- **cmi.silentchest.editing** – 允许在静默打开模式下编辑宝箱
- **CMI.InteractiveSign。[IC名称]**– 允许在使用 ic：[icName] 作为标志顶行时创建交互式标志
- **cmi.versioncheck** – 允许在登录时查看新版本消息
- **cmi.worldlimit.gamemode.bypass** – 允许通过世界绕过游戏模式限制
- **cmi.worldlimit.fly.bypass** – 允许绕过世界的飞行模式限制
- **cmi.worldlimit.elytra.bypass** – 允许通过世界绕过鞘翅模式限制
- **cmi.worldlimit.fly.aboveroof** – 允许飞越世界构建限制。应在配置文件中启用该功能
- **cmi.worldlimit.god.bypass** – 允许通过世界绕过上帝模式限制
- **cmi.spawners.charge.bypass** – 允许绕过收费限制
- **cmi.inventoryhat** – 允许从库存中将块放在头上
- **cmi.inventoryhat.bypass** – 允许绕过项目限制
- **cmi.minecart.change。[矿车类型]**– 允许通过右键单击适当的项目来更改矿车类型
- **cmi.hologram 中。[全息图名称]**–允许查看全息图
- **CMI.kit。[套件名称]**– 允许使用套件
- **CMI.kit。[kitname].preview** – 允许在不访问套件的情况下预览套件
- **cmi.kit.bypass.money** – 允许绕过套件资金要求
- **cmi.kit.bypass.exp** – 允许绕过套件 exp 要求
- **cmi.kit.bypass.time** – 允许绕过套件时间限制
- **cmi.kit.bypass.onetimeuse** – 允许绕过套件一次性使用限制
- **cmi.pvp.cmdBypass** – 允许在战斗模式下使用命令
- **cmi.pvp.godBypass** – 允许在上帝模式下伤害玩家
- **cmi.pve.godBypass** – 允许在上帝模式下伤害生物
- **cmi.pvp.PFlyBypass** – 允许玩家在进入战斗模式时继续飞行
- **cmi.pvp.MFlyBypass** – 允许在怪物进入战斗模式时继续飞行
- **cmi.spawnonjoin.bypass** – 允许绕过 spawnOnJoin 选项
- **cmi.spawngroup。[生成组]**- 定义玩家个人出生点
- **cmi.respawngroup。[重生组]**- 定义玩家个人重生点
- **CMI.rank。[排名名称]**– 定义默认玩家等级
- **cmi.select** – 允许使用选择工具进行选择
- **cmi.chatgroup。[组号]**– 为公共消息格式定义玩家自定义聊天组
- **cmi.chatmessage组。[组号]**– 为公共消息格式定义玩家自定义聊天消息组
- **cmi.chat.shout** – 允许在更远的距离发送消息
- **cmi.chat.rangebypass** – 允许在更远的距离发送消息
- **cmi.chat.rangespy** – 允许查看更远距离的所有消息
- **cmi.tablist。[组号]**– 定义玩家自定义选项卡列表组
- **cmi.elytra** – 允许装备鞘翅
- **cmi.elytra.boost** – 允许使用基本的鞘翅增强。右键单击
- **cmi.elytra.superboost** – 允许使用鞘翅超级增强。+Shift 单击
- **cmi.elytra.speedometer** – 允许在使用鞘翅飞行时查看车速表
- **cmi.elytra.freeflight** – 允许免费使用鞘翅增强
- **cmi.hunger.keepafterdeath** – 防止饥饿在死后得到补充
- **cmi.anvil.itemrename.bypass** – 允许重命名列入黑名单名称的项目。/itemanem 和物理铁砧
- **cmi.sleepignore** – 在检查世界上有多少玩家在睡觉以加快时间时，将忽略具有此权限节点的玩家
- **cmi.chatfilter.inform** – 当有人违反聊天过滤器规则时通知玩家
- **cmi.chatfilter.bypass。[组名]**- 允许绕过特定的聊天过滤器组
- **cmi.commandfilter.bypass** – 允许绕过命令垃圾邮件过滤器
- **cmi.chatfilter.spambypass** – 允许绕过聊天垃圾邮件过滤器
- **cmi.chatfilter.capbypass** – 允许绕过聊天上限过滤器
- **cmi.deathlocation** – 允许查看死后的死亡位置
- **cmi.saveinv** – 在死亡时保存玩家库存，以便在以后需要时恢复
- **cmi.scheduler.exclude** – 从调度程序随机玩家列表中排除玩家
- **cmi.openshulker** – 允许将 shulkerbox 用作背包
- **cmi.openshulker.free** – 允许免费使用 shulkerbox
- **cmi.openshulker.shift** – 允许使用 shulkerbox 作为背包，右键单击 shift
- **cmi.safeteleport** – 防止传送到不安全的位置
- **cmi.safeteleport.bypass。[熔岩/虚空/窒息/未知/插件/不安全传送/noperm]**– 允许在未经确认的情况下传送到不安全的位置
- **cmi.viewrange** – 允许具有自定义视图范围
- **cmi.viewrange 。[范围（1-15）]**– 定义自定义视图范围
- **cmi.dropspawner** – 允许在刷怪器被破坏后丢弃
- **cmi.dropspawner。[实体类型]**– 允许在被定义类型破坏后丢弃刷怪器
- **cmi.dropspawner.nosilk** – 没有丝线接触的掉落刷怪器
- **cmi.dropspawner.basedropchance。[正值]**– 定义基础掉落几率。用于高于配置文件中定义的
- **cmi.spawners.proximity.bypass** – 绕过刷怪器放置范围限制
- **cmi.spawners.charge。[组名]**– 定义刷怪充值组
- **cmi.keepinventory** – 允许在死后保留库存
- **cmi.keepexp** – 允许在死后保留 exp
- **cmi.informDurability** – 当耐久性达到阈值时，将通知玩家
- **cmi.egg互动。[实体类型]**- 允许通过与鸡蛋互动来改变产卵器
- **cmi.placespawner** – 允许放置 spawner 并保留其类型
- **cmi.placespawner.[实体类型]**- 允许按特定类型放置刷怪器并保留其类型
- **cmi.teleport.bypassblacklist** – 允许绕过黑名单物品的传送保护
- **cmi.teleport.currentlocation** – 允许启动传送到当前玩家位置
- **cmi.armorstand.hands** – 允许用手生成 armorstand
- **cmi.armorstand.offhand** – 允许操作 armorstand off hand 物品
- **cmi.bungee.public消息。[服务器名称]**– 允许向目标服务器发送公共消息
- **cmi.warmupbypass.[命令名称]**– 允许绕过特定的 CMI 命令预热
- **cmi.warmuptime.[命令名称]。[时间以秒为单位]**– 允许设置预热时间。优先级越低
- **cmi.command** – 提供对命令基本用法的访问
- **cmi.command.options 中。[可见全息图/shiftsignedit/totembossbar/bassbarcompass/tagsound/chatspy/cmdspy/signspy/acceptingpm/acceptingtpa/acceptingmoney/chatbubble/pmsound/rideme/pvedamagenumbers/pvpdamagenumbers/informdurability]**– 允许修改特定选项
- **cmi.command.jump 中。[距离]**– 定义最大跳跃距离
- **cmi.costbypass.[命令名称]**– 允许绕过命令成本
- **cmi.cooldownbypass .[命令名称]**– 允许绕过命令冷却
- **cmi.cooldown.[some_command]。[计时器]**– 定义玩家的命令冷却时间。空格需要用 _ 分隔
- **cmi.command.armorstand.[更新项目/盘子/大小/可见/手臂/重力/发光/无懈可击/名称/可交互/头部/身体/左臂/右臂/左腿/右腿/姿势/躯干]**– 允许访问特定的装甲架编辑器功能
- **cmi.command.armorstand.movebypass** – 允许将装甲架移动到无法建造的地方。可以帮助绕过反作弊插件限制
- **cmi.command.armorstand.admin** – 允许保存/加载/删除保存的装甲板
- **cmi.command.armorstand.template.[模板名称]**– 允许部署保存的装甲架
- **cmi.command.donate.bypass** – 阻止您使用 donate 命令获取项目
- **cmi.command.donate.accept** – 允许您接受发送的物品 throw donate 命令
- **cmi.command.donate.send** – 允许您发送物品 throw donate 命令
- **cmi.command.portal 中。[门户名称]**– 允许使用门户
- **cmi.command.kill.byforce** – 允许独立于保护插件杀死玩家
- **cmi.command.kiteditor.admin** – 允许定义套件的更危险方面，例如命令
- **cmi.command.itemframe。[隐形/固定/无懈可击/全部]**– 允许特定操作
- **cmi.command.world。[世界名称]**– 允许通过命令传送到特定世界
- **cmi.command.skin.perm文件。[皮肤名称]**- 允许将皮肤更改为特定玩家
- **cmi.command.point。[粒子类型]**– 允许更改颗粒类型
- **cmi.command.ender.preventmodify** – 防止其他人修改末影宝箱
- **cmi.command.ender.preventmodify.bypass** – 末影箱修改保护的旁路
- **cmi.command.inv.preventmodify** – 防止其他人修改清单
- **cmi.command.inv.location** – 在 GUI 中显示目标玩家位置
- **cmi.command.inv.information** – 在 GUI 中显示目标玩家信息
- **cmi.command.inv.preventmodify.bypass** – 定期库存修改保护的旁路
- **cmi.command.give.max。[数字]**- 玩家可以使用的最大物品堆栈大小
- **cmi.command.tfly.admin** – 允许为玩家管理 tfly
- **cmi.command.tfly.maxtime。[秒]**– 定义玩家使用 tfly 命令可以拥有的最大时间
- **cmi.command.spawner.shiftclick** – 允许在 shift 单击它时使用 spawner set GUI
- **cmi.command.spawner。[实体类型]**– 允许使用命令将 spawner 更改为定义的类型
- **cmi.command.repair。[手/盔甲/全部]**– 允许修复特定区域
- **cmi.command.head.othersource** – 允许获取其他玩家的头部
- **cmi.command.note.add** – 允许添加注释
- **cmi.command.note.remove** – 允许删除或清除注释
- **cmi.command.gm。[游戏类型]**– 允许将游戏模式更改为特定类型
- **cmi.command.replaceblock.speed** – 允许调整替换块速度
- **cmi.command.scan.speed** – 允许调整扫描速度
- **cmi.command.fixchunk.speed** – 允许调整块固定速度
- **cmi.command.enchant.bypasslimit** – 允许绕过附魔限制
- **cmi.command.enchant.bypassinvalid** – 允许使用通常无法在物品上使用的附魔对物品进行附魔
- **cmi.enchantments.** – 允许用特定的附魔对物品进行附魔
- **CMI.enchantments..$2** – 允许将具有特定附魔的物品附魔到特定的最高等级
- **cmi.command.attachcommand.cc** – 允许将控制台命令附加到项目
- **cmi.command.attachcommand.silent** – 允许附加静默命令
- **cmi.command.sendall.bypass** – 阻止将玩家发送到目标服务器
- **cmi.command.heal.all** – 允许治愈每个在线玩家
- **cmi.command.feed.all** – 允许为每个在线玩家提供食物
- **cmi.command.command.[commandname].others** – 允许对其他玩家执行命令
- **cmi.command.prewards.others.claim** – 允许为他人领取奖励
- **cmi.command.[commandname].others。[额外]**– 允许对其他玩家执行命令
- **cmi.command.msg.vanish** – 允许向消失的玩家发送私人消息
- **cmi.command.msg.togglebypass** – 即使玩家已关闭 pm 也允许发送私人消息
- **cmi.command.msg。[maingroupname].send** – 允许向特定玩家组发送私人消息
- **cmi.command.bossbarmsg.admin** – 允许在 bossbar 自动消息中使用命令
- **cmi.command.sell。[块/全部]**– 不仅允许从您的手中出售物品
- **cmi.command.patrol.bypass** – 具有权限的玩家不会包含在巡逻列表中
- **cmi.command.afk.auto** – 自动将播放器置于 afk 模式
- **cmi.command.afk.staffinform** – 使用不同的 afk 自动响应消息
- **cmi.command.afk.kickbypass** – 防止玩家在 afk 模式触发事件时被踢出服务器
- **cmi.command.afk.kickOutIn。[秒]**– 定义玩家进入 afk 模式后需要被踢的时间（以秒为单位）
- **cmi.command.cheque.admin** – 允许直接向目标玩家发放金额支票，无需纸张
- **cmi.command.cheque.withdraw** – 允许在启用配置文件中的选项时提取支票余额
- **cmi.command.invcheck.edit** – 允许编辑已保存的清单
- **cmi.command.warp。[翘曲名称]**– 如果翘曲需要权限节点，则允许使用特定的翘曲
- **cmi.command.warp.showlist** – 允许在聊天或 gui 中查看扭曲列表
- **cmi.command.warp.redefine** – 允许重新定义变形
- **cmi.command.warp.specificlocation** – 允许定义翘曲特定位置
- **cmi.command.warp.diffdisplayname** – 允许定义不同的变形显示名称
- **cmi.command.setwarp.multiloc** – 允许为翘曲点设置多个位置
- **cmi.command.setwarp.unlimited** – 允许无限数量的扭曲
- **cmi.command.setwarp。[任意正数]**– 允许有定义的翘曲量
- **cmi.command.removewarp.bypass** – 允许删除属于 anoher 播放器的变形
- **cmi.command.counter.autojoin** – 玩家将在服务器加入时自动加入计数器组
- **cmi.command.tpa.warmupbypass** – 允许绕过 tpa 命令预热
- **cmi.command.tpahere.warmupbypass** – 允许绕过 tpahere 命令预热
- **cmi.command.home.bypassprivate** – 允许传送到私有的另一个玩家主位置
- **cmi.command.homes.range** – 允许从您那里按范围查看房屋
- **cmi.command.sethome.unlimited** – 允许拥有无限数量的房屋
- **cmi.command.sethome。[任意正数]**– 允许拥有一定数量的房屋
- **cmi.command.sethome.customloc** – 允许为新家定义自定义位置
- **cmi.command.sethome.iconpicker** – 允许在使用命令后查看图标选择器
- **cmi.command.sethome.overwrite** – 允许覆盖现有的主位置
- **cmi.command.sethome.bypass** – 允许绕过块中断保护
- **cmi.command.sethome.bypasslimit** – 允许绕过世界的限制
- **cmi.command.mail.read** – 允许读取邮件
- **cmi.command.mail.clear** – 允许清除邮件
- **cmi.command.mail.send** – 允许发送邮件
- **cmi.command.mail.sendtemp** – 允许发送定时邮件
- **cmi.command.itemlore.modification** – 允许修改现有物品知识
- **cmi.command.glow.color。[颜色名称]**– 允许改变发光颜色
- **cmi.command.walkspeed。[范围0-10]**- 定义玩家可以设置的最大步行速度
- **cmi.command.tptoggle.bypass** – 允许传送到禁用传送的玩家身上
- **cmi.command.sudo.bypass** – 阻止玩家在获得许可的情况下在播放器上使用 sudo
- **cmi.command.repair.repairshare.bypass** – 允许绕过应用于物料的修复共享
- **cmi.command.repair.bypass** – 允许绕过项目的维修成本
- **cmi.command.nick.bypassblacklist** – 允许绕过昵称黑名单
- **cmi.command.nick.bypass.length** – 允许绕过昵称长度限制
- **cmi.command.nick.bypassinuse** – 允许绕过使用现有名称的限制
- **cmi.command.nick.different** – 允许将昵称设置为与原始昵称不同的昵称
- **cmi.command.msg.clean** – 允许使用 ！在开始时
- **cmi.command.msg.noreply** – 允许在开始时使用 ！- 向玩家发送干净的消息，而无需选择回复
- **cmi.command.ignore.bypass** – 允许对谁忽略你执行命令
- **cmi.command.silence.bypass** – 允许发送处于静默模式的消息
- **cmi.command.more.oversize** – 允许获取超大堆栈
- **cmi.command.recipe.admin** – 允许启用/禁用配方
- **cmi.command.list.admin** – 将播放器放入列表中的管理员组中
- **cmi.command.list.staff** – 将玩家放入列表中的员工组中
- **cmi.command.list.hidden** – 允许查看玩家列表中隐藏的玩家
- **cmi.command.list.group。[组号]**- 将玩家分配到定义的组
- **cmi.command.checkban.seereason** – 允许查看玩家封禁原因
- **cmi.command.mirror.nodeduct** – 将块置于生存模式和镜像模式时不会使用块
- **cmi.command.lfix.admin** – 允许将光线固定在比您能看到的区域更大的区域
- **cmi.command.commandspy.hide** – 隐藏从 commandspy 执行的命令
- **cmi.command.commandspy.bypass** – 绕过列入黑名单的命令间谍命令
- **cmi.command.signspy.hide** – 从 signspy 中隐藏创建的标志
- **cmi.command.socialspy.hide** – 隐藏社交间谍的社交消息
- **cmi.command.mute.max。[任意正数]**– 允许在定义的最大时间内进行临时静音
- **cmi.command.mute.bypass** – 绕过个人公共聊天静音
- **cmi.command.mutechat.bypass** – 绕过公共聊天静音
- **cmi.command.money.admin** – 允许操纵玩家平衡
- **cmi.command.money.betweenworldgroups** – 允许在世界之间转账
- **cmi.command.time。[冻结/解冻/白天/早晨/晚上/黄昏/添加/拍摄/实时/自动实时]**– 允许操纵时间
- **cmi.command.weather。[阳光/雨水/暴风雨/锁]**– 允许将天气更改为特定状态
- **cmi.command.weather。[阳光/雨水]。[最大值]**- 允许定义最大长度玩家可以改变天气
- **cmi.command.p天气。[日/雨/复位]**– 允许将个人天气更改为特定状态
- **cmi.command.back.ondeath** – 允许在死亡后使用返回命令返回死亡位置
- **cmi.command.back.worldbypass** – 允许返回黑名单世界
- **cmi.command.flightcharge.admin** – 允许编辑玩家的飞行费用
- **cmi.command.nameplate.admin** – 允许编辑玩家的铭牌
- **cmi.command.kick.bypass** – 防止玩家被踢出服务器
- **cmi.command.ride。[实体类型]**– 允许乘坐实体
- **cmi.command.sit.stairs** – 允许自动坐在楼梯上
- **cmi.command.sit.persistent** – 允许以持久模式坐下
- **cmi.command.sit.location** – 允许坐在特定位置
- **cmi.command.maintenance.bypass** – 允许绕过维护模式
- **cmi.command.alert.inform** – 玩家将收到玩家加入通知并发出警报
- **cmi.command.helpop.inform** – 具有权限的玩家会收到 helpop 消息
- **cmi.command.fly.safelogin** – 如果玩家在空中，则在重新登录后安全着陆
- **cmi.command.cuff.bypass** – 允许在戴上袖口时使用命令
- **cmi.command.jail.bypasscmd** – 允许在被监禁时使用命令
- **cmi.command.jail.bypass** – 防止玩家被监禁
- **cmi.command.jail.maxtime。[秒]**- 定义玩家可以监禁某人的最长时间
- **cmi.command.near.hide** – 隐藏玩家不显示在 near 命令中
- **cmi.command.near.max。[块]**– 定义 near 命令覆盖默认值的最大距离
- **cmi.command.tpa.max。[块]**– 定义 tpa 命令覆盖默认值的最大距离
- **cmi.command.tpahere.max。[块]**– 定义 tpahere 命令覆盖默认值的最大距离
- **cmi.command.silent** – 允许在命令中使用 -s 变量以避免向目标玩家发送反馈消息
- **cmi.command.warn.bypass** – 防止玩家收到警告
- **cmi.command.ban.bypass** – 防止玩家被禁止
- **cmi.command.banip.bypass** – 防止玩家被 ip 禁止
- **cmi.command.tempban.bypass** – 防止玩家被临时禁止
- **cmi.command.tempban.max.unlimited** – 允许临时禁止超过配置允许的时间
- **cmi.command.tempban.max。[任意正数]**– 允许在定义的最大时间内临时禁止
- **cmi.command.broadcast.colors** – 允许在广播消息中使用颜色
- **cmi.command.broadcast.clean** – 允许使用 ！发送干净的广播消息
- **cmi.command.charges.edit** – 允许编辑玩家刷怪费用
- **cmi.command.checkaccount.showip** – 允许在支票帐户中查看玩家的 ip
- **cmi.command.info.ip** – 允许在信息页面中查看玩家 ip
- **cmi.command.info.pos** – 允许在信息页面中查看 pos 位置
- **cmi.command.info.bed** – 允许在信息页面中查看床位位置
- **cmi.command.info.back** – 允许在信息页面中查看返回位置
- **cmi.command.info.deathlocation** – 允许在信息页面中查看死亡位置
- **cmi.command.clearchat.bypass** – 有权限的玩家聊天不会被清除
- **cmi.command.counter.force** – 允许对周围的玩家强制发送反击消息
- **cmi.command.counter.time** – 允许更改计数器默认时间
- **cmi.command.counter.range** – 允许更改计数器默认范围
- **cmi.command.counter.center** – 允许使用计数器自定义位置
- **cmi.command.counter.msg** – 允许更改计数器默认消息
- **cmi.command.ctext。[ctextname]**– 允许查看定义的自定义消息
- **cmi.command.flyspeed。[范围1-10]**- 定义玩家可以设置的最大飞行速度
- **cmi.command.shoot。[类型]**– 允许拍摄特定类型的实体
- **cmi.command.chat.kick** – 允许将玩家踢出聊天室
- **cmi.command.chat.see** – 允许在聊天室中查看消息
- **cmi.command.chat.force** – 允许强制加入玩家进入聊天室
- **cmi.command.chat.create** – 允许创建聊天室
- **cmi.command.chat.create.private** – 允许创建私人聊天室
- **cmi.command.chat.create.locked** – 允许创建锁定的聊天室
- **cmi.command.chat.leave.locked** – 允许离开锁定的聊天室
- **cmi.command.chat.create.persistent** – 允许创建持久聊天室
- **cmi.command.chat.invite** – 允许将玩家启动到聊天室
- **cmi.command.chat.joinbypass** – 允许在没有邀请的情况下加入私人聊天室
- **cmi.command.chat.seebypass** – 允许查看私人聊天室
- **cmi.command.chat.list** – 允许在聊天室中列出玩家
- **cmi.command.chat.listrooms** – 允许列出所有聊天室
- **cmi.customalias。[别名]**– 如果需要权限，允许使用特定别名

## 基本命令权限节点

- actionbarmsg

  -> 向玩家发送操作栏消息

  - **cmi.command.actionbarmsg** -> 默认值：**op**

- afk

  -> 切换 afk 模式。可以提供理由

  - **cmi.command.afk** ->默认值：**op**
  - **cmi.command.afk.others（英文）**

- afkcheck

  -> 检查玩家 afk 状态

  - **cmi.command.afkcheck** -> 默认值：**op**
  - **cmi.command.afkcheck.others**

- air

  -> 设置玩家空气

  - **cmi.command.air** ->默认值：**op**
  - **cmi.command.air.others（英文）**

- alert

  -> 玩家登录时的警报管理

  - **cmi.command.alert** ->默认值：**op**

- alertlist

  -> 列出所有记录的警报

  - **cmi.command.alertlist** ->默认值：**op**

- aliaseditor

  -> 别名编辑器

  - **cmi.command.aliaseditor** ->默认值：**op**

- 砧

  座 -> 开放式砧座

  - **cmi.command.anvil** -> 默认值：**op**
  - **cmi.command.anvil.others**

- anvilrepaircost

  -> 套装项目维修成本

  - **cmi.command.anvilrepaircost** ->默认值：**op**
  - **cmi.command.anvilrepaircost.others**

- armorstand

  -> 打开装甲支架编辑器

  - **cmi.command.armorstand** ->默认值：**op**

- attachcommand

  -> 将命令附加到项目

  - **cmi.command.attachcommand** -> 默认值：**op**

- autorecharge

  -> 切换自动飞行充值

  - **cmi.command.autorecharge** ->默认值：**op**
  - **cmi.command.autorecharge.others**

- back

  -> 传送回上次保存的位置

  - **cmi.command.back** -> 默认值：**op**
  - **cmi.command.back.其他**

- balance

  \> 检查资金余额

  - **cmi.command.balance** -> 默认值：**op**
  - **cmi.command.balance.其他**

- baltop

  -> 查看最高货币清单

  - **cmi.command.baltop** -> 默认值：**op**
  - **cmi.command.baltop.others（英文）**

- ban

  -> 禁止玩家

  - **cmi.command.ban** -> 默认值：**op**

- banlist

  -> 禁止列表

  - **cmi.command.banlist** ->默认值：**op**

- bbroadcast

  -> 向所有服务器上的所有玩家发送特殊消息

  - **cmi.command.bbroadcast** -> 默认值：**op**

- blockcycling

  -> 循环块状态

  - **cmi.command.blockcycling** -> 默认值：**op**

- blockinfo

  -> 检查区块信息

  - **cmi.command.blockinfo** ->默认值：**op**

- blocknbt

  -> 显示块 NBT 信息

  - **cmi.command.blocknbt** ->默认值：**op**

- book

  -> 图书编辑

  - **cmi.command.book** ->默认值：**op**

- bossbarmsg

  -> 向玩家发送 boss bar 消息

  - **cmi.command.bossbarmsg** -> 默认值：**op**

- broadcast

  -> 向所有玩家发送特殊消息

  - **cmi.command.broadcast** -> 默认值：**op**

- burn

  -> 烧伤玩家

  - **cmi.command.burn** -> 默认值：**op**
  - **cmi.command.burn.others**

- cartographytable

  -> 打开制图表

  - **cmi.command.cartographytable** ->默认值：**op**
  - **CMI.Command.Cartographytable.其他**

- charges

  -> 显示左边的刷怪费用

  - **cmi.command.charges** ->默认值：**op**
  - **cmi.command.charges.others**

- chat

  -> 创建和加入聊天室

  - **cmi.command.chat** ->默认值：**op**

- checkaccount

  -> 搜索玩家其他帐户

  - **cmi.command.checkaccount** ->默认值：**op**

- checkban

  -> 检查玩家封禁状态

  - **cmi.command.checkban** ->默认值：**op**

- checkcommand

  -> 按关键字搜索可能的命令

  - **cmi.command.checkcommand** -> 默认值：**op**

- checkexp

  -> 检查玩家经验值

  - **cmi.command.checkexp** -> 默认值：**op**
  - **cmi.command.checkexp.others**

- checkperm

  -> 检查可能的权限节点

  - **cmi.command.checkperm** -> 默认值：**op**

- cheque

  -> 将钱兑换成支票

  - **cmi.command.cheque** ->默认值：**op**

- clear

  -> 清除玩家库存

  - **cmi.command.clear** -> 默认值：**op**
  - **cmi.command.clear.others**

- clearchat

  -> 清除聊天

  - **cmi.command.clearchat** ->默认值：**op**

- clearender

  -> 清除玩家末影宝箱

  - **cmi.command.clearender** -> 默认值：**op**
  - **cmi.command.clearender.others**

- colorlimits

  -> 显示所有可能的颜色

  - **cmi.command.colorlimits** ->默认值：**op**
  - **cmi.command.colorlimits.others**

- colorpicker

  -> 选择十六进制颜色

  - **cmi.command.colorpicker** ->默认值：**op**
  - **cmi.command.colorpicker.others**

- colors

  -> 显示所有可能的颜色

  - **cmi.command.colors** ->默认值：**op**
  - **cmi.command.colors.others**

- compass

  -> 将玩家指南针指向您的位置

  - **cmi.command.compass** -> 默认值：**op**
  - **cmi.command.compass.others**

- condense

  -> 将项目压缩成块

  - **cmi.command.condense** -> 默认值：**op**
  - **cmi.command.condense.others**

- counter

  -> 为周围玩家启动计数器

  - **cmi.command.counter** -> 默认值：**op**

- cplaytime

  -> 详细的游戏时间

  - **cmi.command.cplaytime** ->默认值：**op**
  - **cmi.command.cplaytime.others**

- ctellraw

  -> 发送 tellraw 类型的消息

  - **cmi.command.ctellraw** -> 默认值：**op**

- ctext

  -> 显示自定义文本

  - **cmi.command.ctext** -> 默认值：**true**
  - **cmi.command.ctext.others**

- cuff

  -> 暂停玩家动作

  - **cmi.command.cuff** -> 默认值：**op**

- customrecipe

  -> 管理项目自定义配方

  - **cmi.command.customrecipe** ->默认值：**op**

- dback

  -> 返回死亡地点

  - **cmi.command.dback** ->默认值：**op**
  - **cmi.command.dback.others**

- disableenchant

  -> 禁用附魔

  - **cmi.command.disableenchant** -> 默认值：**op**

- dispose

  -> 处理不需要的物品

  - **cmi.command.dispose** -> 默认值：**op**
  - **cmi.command.dispose.others**

- distance

  -> 检查 2 点之间的距离

  - **cmi.command.distance** -> 默认值：**op**
  - **cmi.command.distance.其他**

- donate

  -> 捐赠您持有的物品

  - **cmi.command.donate** ->默认值：**op**

- down

  -> 向下传送一层

  - **cmi.command.down** -> 默认值：**op**
  - **cmi.command.down.其他**

- dsign

  -> 管理动态标志

  - **cmi.command.dsign** -> 默认值：**op**

- dye

  ->染料皮甲

  - **cmi.command.dye** -> 默认值：**op**
  - **cmi.command.dye.others其他**

- editctext

  -> 自定义文本编辑器

  - **cmi.command.editctext** ->默认值：**op**

- editlocale

  -> 编辑区域设置文件

  - **cmi.command.editlocale** -> 默认值：**op**

- editplaytime

  -> 编辑玩家游戏时间

  - **cmi.command.editplaytime** -> 默认值：**op**
  - **cmi.command.editplaytime.others**

- editwarnings

  -> 检查玩家警告

  - **cmi.command.editwarnings** ->默认值：**op**
  - **cmi.command.editwarnings.others**

- editwarp

  -> 编辑翘曲

  - **cmi.command.editwarp** ->默认值：**op**
  - **cmi.command.editwarp.others**

- effect

  -> 为玩家添加药水效果。使用清除可删除所有效果

  - **cmi.command.effect** -> 默认值：**op**
  - **cmi.command.effect.其他**

- enchant

  ->附魔物品

  - **cmi.command.enchant** -> 默认值：**op**
  - **cmi.command.enchant.others**

- ender

  -> 打开玩家的末影宝箱

  - **cmi.command.ender** ->默认值：**op**
  - **cmi.command.ender.others**

- endgateway

  -> 切换端网关梁

  - **cmi.command.endgateway** ->默认值：**op**

- entityinfo

  -> 检查实体信息

  - **cmi.command.entityinfo** -> 默认值：**op**

- entitynbt

  -> 检查实体 nbt 信息

  - **cmi.command.entitynbt** -> 默认值：**op**

- exp

  -> 设置玩家经验值。 使用 L 设置关卡

  - **cmi.command.exp** -> 默认值：**op**
  - **cmi.command.exp.其他**

- ext

  -> 消灭玩家

  - **cmi.command.ext** -> 默认值：**op**
  - **cmi.command.ext.others**

- falldistance

  -> 设置玩家的falldistance

  - **cmi.command.falldistance** -> 默认值：**op**
  - **cmi.command.falldistance.others**

- feed

  -> Feed 播放器

  - **cmi.command.feed** ->默认值：**op**
  - **cmi.command.feed.others**

- findbiome

  -> 按名称查找最近的生物群落

  - **cmi.command.findbiome** ->默认值：**op**

- fixchunk

  -> 扫描损坏的块

  - **cmi.command.fixchunk** -> 默认值：**op**

- flightcharge

  -> 管理和检查航班费用

  - **cmi.command.flightcharge** ->默认值：**op**
  - **cmi.command.flightcharge.others**

- fly

  -> set players fly true or false

  - **cmi.command.fly** -> 默认值：**op**
  - **cmi.command.fly.其他**

- flyc

  -> 切换飞行充电模式

  - **cmi.command.flyc** ->默认值：**op**
  - **cmi.command.flyc.others（英文）**

- flyspeed

  -> 设置玩家的飞行速度从 0 到 10

  - **cmi.command.flyspeed** -> 默认值：**op**
  - **cmi.command.flyspeed.others**

- gamerule

  -> 管理游戏规则

  - **cmi.command.gamerule** ->默认值：**op**

- generateworth

  -> 自动生成可能的项目价值值

  - **cmi.command.generateworth** ->默认值：**op**

- getbook

  -> 获取书籍

  - **cmi.command.getbook** ->默认值：**op**
  - **cmi.command.getbook.others（英文）**

- give

  -> 将物品赠送给玩家

  - **cmi.command.give** -> 默认值：**op**
  - **cmi.command.give.其他**

- giveall

  -> 为所有玩家提供物品

  - **cmi.command.giveall** ->默认值：**op**

- glow

  -> 设置玩家发光模式

  - **cmi.command.glow** -> 默认值：**op**
  - **cmi.command.glow.others**

- gm

  -> 设置玩家游戏模式

  - **cmi.command.gm** -> 默认值：**op**

- god

  -> 将玩家的上帝模式设置为 true 或 false

  - **cmi.command.god** ->默认值：**op**
  - **cmi.command.god.其他**

- 磨石

  -> 开放式磨石

  - **cmi.command.grindstone** ->默认值：**op**
  - **cmi.command.grindstone.others（英文）**

- groundclean

  -> 清除服务器中不必要的物品

  - **cmi.command.groundclean** ->默认值：**op**

- haspermission

  -> 检查玩家是否具有特定权限

  - **cmi.command.haspermission** ->默认值：**op**
  - **cmi.command.haspermission.others**

- hat

  -> 放置像帽子一样的物品

  - **cmi.command.hat** -> 默认值：**op**
  - **cmi.command.hat.others（英文）**

- head

  -> 让玩家头

  - **cmi.command.head** ->默认值：**op**
  - **cmi.command.head.其他**

- 治疗

  -> 治疗玩家

  - **cmi.command.heal** -> 默认值：**op**
  - **cmi.command.heal.others（英文）**

- helpop

  -> 向工作人员发送求助消息

  - **cmi.command.helpop** ->默认值：**op**

- hideflags

  -> 隐藏项目标志

  - **cmi.command.hideflags** ->默认值：**op**
  - **cmi.command.hideflags.others**

- hologram

  -> 管理全息影像

  - **cmi.command.hologram** ->默认值：**op**

- hologrampages

  -> 更改全息影像页面

  - **cmi.command.hologrampages** ->默认值：**op**
  - **cmi.command.hologrampages.others**

- home

  -> 传送到家乡位置

  - **cmi.command.home** ->默认值：**op**
  - **cmi.command.home.others（英文）**

- homes

  -> 您可以单击以传送到的房屋列表。

  - **cmi.command.homes** ->默认值：**op**
  - **cmi.command.homes.others**

- hunger

  -> 设置玩家饥饿

  - **cmi.command.hunger** ->默认值：**op**
  - **cmi.command.hunger.others（英语：cmi.command.hunger.others）**

- ic

  -> 创建交互式命令

  - **cmi.command.ic** -> 默认值：**op**

- ifoffline

  -> 仅在播放器离线时执行命令

  - **cmi.command.ifoffline** ->默认值：**op**

- ifonline

  -> 仅在玩家在线时执行命令

  - **cmi.command.ifonline** ->默认值：**op**

- ignore

  -> 忽略玩家

  - **cmi.command.ignore** -> 默认值：**op**
  - **cmi.command.ignore.others**

- importfrom

  -> 从其他插件导入数据

  - **cmi.command.import从** -> 默认值：**op**

- importoldusers

  -> 从主世界文件夹中的 playerdata 文件夹导入用户。服务器在导入过程中可能会遇到滞后峰值

  - **cmi.command.importoldusers** ->默认值：**op**

- info

  -> 显示玩家信息

  - **cmi.command.info** -> 默认值：**op**
  - **cmi.command.info.others（英文）**

- inv

  -> 打开玩家库存

  - **cmi.command.inv** -> 默认值：**op**

- invcheck

  -> 在预览模式下打开保存的库存

  - **cmi.command.invcheck** ->默认值：**op**
  - **cmi.command.invcheck.others**

- invlist

  -> 显示已保存的库存列表

  - **cmi.command.invlist** ->默认值：**op**
  - **cmi.command.invlist.others**

- invload

  -> 加载保存的库存

  - **cmi.command.invload** -> 默认值：**op**
  - **cmi.command.invload.others**

- invremove

  -> 删除玩家保存的物品栏

  - **cmi.command.invremove** -> 默认值：**op**
  - **cmi.command.invremove.others**

- invremoveall

  -> 删除所有已保存的库存

  - **cmi.command.invremoveall** -> 默认值：**op**

- invsave

  -> 保存库存

  - **cmi.command.invsave** -> 默认值：**op**
  - **cmi.command.invsave.others**

- ipban

  -> 禁止 ip

  - **cmi.command.ipban** ->默认值：**op**

- ipbanlist

  -> 禁止 ip 列表

  - **cmi.command.ipbanlist** ->默认值：**op**

- item

  -> 给自己物品

  - **cmi.command.item** ->默认值：**op**

- itemcmdata

  -> 检查或修改项自定义模型数据

  - **cmi.command.itemcmdata** ->默认值：**op**
  - **cmi.command.itemcmdata.others**

- itemframe

  -> 管理项目框架

  - **cmi.command.itemframe** ->默认值：**op**

- iteminfo

  -> 显示项目信息

  - **cmi.command.iteminfo** ->默认值：**op**
  - **cmi.command.iteminfo.others**

- itemlore

  -> 更改物品知识

  - **cmi.command.itemlore** ->默认值：**op**
  - **cmi.command.itemlore.others**

- itemname

  -> 重命名项目

  - **cmi.command.itemname** ->默认值：**op**
  - **cmi.command.itemname.others**

- itemnbt

  -> 显示项目 NBT 信息

  - **cmi.command.itemnbt** -> 默认值：**op**
  - **cmi.command.itemnbt.others**

- jail

  -> 一段时间的监狱玩家

  - **cmi.command.jail** ->默认值：**op**

- jailedit

  -> 编辑监狱

  - **cmi.command.jailedit** -> 默认值：**op**

- jaillist

  -> 列出监狱

  - **cmi.command.jaillist** ->默认值：**op**

- jump

  -> 跳转到目标块

  - **cmi.command.jump** -> 默认值：**op**

- kick

  -> 带有自定义消息的踢球播放器

  - **cmi.command.kick** -> 默认值：**op**

- kill

  -> 杀戮玩家

  - **cmi.command.kill** -> 默认值：**op**

- killall

  -> 杀死你周围的小怪

  - **cmi.command.killall** -> 默认值：**op**

- kit

  -> 提供预定义的套件。

  - **cmi.command.kit** -> 默认值：**true**
  - **cmi.command.kit.others（英文）**

- kitcdreset

  -> 复位套件计时器

  - **cmi.command.kitcdreset** ->默认值：**op**
  - **cmi.command.kitcdreset.others**

- kiteditor

  -> 套件编辑器。

  - **cmi.command.kiteditor** ->默认值：**op**

- kitusagereset

  -> 重置套件使用计数器

  - **cmi.command.kitusagereset** ->默认值：**op**
  - **cmi.command.kitusagereset.others**

- lastonline

  -> 显示过去 x 分钟的球员

  - **cmi.command.lastonline** ->默认值：**op**

- launch

  -> 以您正在看的方向或角度发射

  - **cmi.command.launch** ->默认值：**op**
  - **cmi.command.launch.others**

- lfix

  -> 将光固定在你周围的块状

  - **cmi.command.lfix** ->默认值：**op**

- list

  -> 显示在线玩家列表

  - **cmi.command.list** ->默认值：**op**

- lockip

  -> 防止从不同的 IP 登录帐户

  - **cmi.command.lockip** -> 默认值：**op**
  - **cmi.command.lockip.others**

- loom

  -> 开放式织机

  - **cmi.command.loom** ->默认值：**op**
  - **cmi.command.loom.others（英文）**

- mail

  -> 发送和接收邮件

  - **cmi.command.mail** -> 默认值：**op**
  - **cmi.command.mail.其他**

- mailall

  -> 检查或向所有玩家发送邮件

  - **cmi.command.mailall** ->默认值：**op**

- maintenance

  -> 将服务器设置为维护模式

  - **cmi.command.maintenance** ->默认值：**op**

- maxhp

  -> 设置玩家的最大生命值

  - **cmi.command.maxhp** -> 默认值：**op**
  - **cmi.command.maxhp.others**

- maxplayers

  -> 更改可以连接到服务器的最大玩家数量

  - **cmi.command.maxplayers** ->默认值：**op**

- me

  -> 向所有玩家发送特殊消息

  - **cmi.command.me** -> 默认值：**op**

- merchant

  -> 打开merchant trade窗口

  - **cmi.command.merchant** ->默认值：**op**
  - **cmi.command.merchant.others**

- migratedatabase

  -> 更改数据库系统并迁移所有数据

  - **cmi.command.migratedatabase** ->默认值：**op**

- mirror

  -> 启动块放置/中断镜像。

  - **cmi.command.mirror** -> 默认值：**op**

- mobhead

  -> 获取暴民头

  - **cmi.command.mobhead** ->默认值：**op**
  - **cmi.command.mobhead.others（英文）**

- money

  -> 管理资金余额

  - **cmi.command.money** ->默认值：**op**

- more

  -> 将物品堆栈填充到最大数量

  - **cmi.command.more** ->默认值：**op**
  - **cmi.command.more.others**

- msg

  -> 向玩家发送消息

  - **cmi.command.msg** -> 默认值：**op**

- mute

  -> 静音播放器

  - **cmi.command.mute** ->默认值：**op**

- mutechat

  -> 阻止公开消息

  - **cmi.command.mutechat** -> 默认值：**op**

- nameplate

  -> 设置玩家铭牌前缀、后缀或其颜色

  - **cmi.command.nameplate** ->默认值：**op**
  - **cmi.command.nameplate.others**

- near

  -> 检查谁在你附近

  - **cmi.command.near** -> 默认值：**op**

- nick

  -> 更改玩家名称

  - **cmi.command.nick** -> 默认值：**op**
  - **cmi.command.nick.others**

- notarget

  -> 切换无生物目标模式

  - **cmi.command.notarget** ->默认值：**op**
  - **cmi.command.notarget.others**

- note

  -> 管理玩家笔记

  - **cmi.command.note** ->默认值：**op**
  - **cmi.command.note.others**

- openbook

  -> 打开书 gui

  - **cmi.command.openbook** -> 默认值：**true**
  - **cmi.command.openbook.others**

- oplist

  -> 检查操作员玩家列表

  - **cmi.command.oplist** ->默认值：**op**

- options

  -> 修改个人选项

  - **cmi.command.options** ->默认值：**op**
  - **cmi.command.options.others**

- panimation

  -> 播放自定义粒子动画

  - **cmi.command.panimation** ->默认值：**op**
  - **cmi.command.panimation.others**

- patrol

  -> 巡逻

  - **cmi.command.patrol** ->默认值：**op**

- pay

  -> 执行货币交易

  - **cmi.command.pay** -> 默认值：**op**

- ping

  -> 显示玩家 ping

  - **cmi.command.ping** -> 默认值：**op**
  - **cmi.command.ping.其他**

- 占位符

  ->列出所有占位符

  - **cmi.command.placeholders** ->默认值：**op**

- playercollision

  -> 设置玩家碰撞模式

  - **cmi.command.playercollision** ->默认值：**op**
  - **cmi.command.playercollision.others**

- playtime

  -> 显示玩家的总游戏时间

  - **cmi.command.playtime** ->默认值：**op**
  - **cmi.command.playtime.其他**

- playtimetop

  -> 显示玩家总游戏时间的顶级列表

  - **cmi.command.playtimetop** ->默认值：**op**

- point

  -> 指向块

  - **cmi.command.point** ->默认值：**op**

- portals

  -> 设置门户

  - **cmi.command.portals** ->默认值：**op**

- pos

  -> 显示玩家的当前位置

  - **cmi.command.pos** -> 默认值：**op**
  - **cmi.command.pos.others（英语：cmi.command.pos.others）**

- preview

  -> 加载给定范围的块

  - **cmi.command.preview** ->默认值：**op**

- prewards

  -> 查看游戏时间奖励

  - **cmi.command.prewards** -> 默认值：**op**
  - **cmi.command.prewards.others**

- ptime

  -> 控制玩家的个人时间

  - **cmi.command.ptime** ->默认值：**op**
  - **cmi.command.ptime.others**

- purge

  -> 按非活动天数清除世界文件夹中的玩家数据

  - **cmi.command.purge** -> 默认值：**op**

- pweather

  -> 控制玩家天气

  - **cmi.command.pweather** ->默认值：**op**
  - **cmi.command.pweather.others**

- rankdown

  -> 降低你的排名

  - **cmi.command.rankdown** ->默认值：**op**
  - **cmi.command.rankdown.others**

- rankinfo

  -> 您的排名信息

  - **cmi.command.rankinfo** -> 默认值：**op**
  - **cmi.command.rankinfo.others**

- ranklist

  -> 可能的排名列表

  - **cmi.command.ranklist** ->默认值：**op**

- rankset

  -> 设置玩家排名

  - **cmi.command.rankset** -> 默认值：**op**
  - **cmi.command.rankset.others**

- rankup

  -> 提高你的排名

  - **cmi.command.rankup** ->默认值：**op**
  - **cmi.command.rankup.others**

- realname

  -> 检查玩家的真实姓名

  - **cmi.command.realname** ->默认值：**op**

- recipe

  -> 检查项目食谱

  - **cmi.command.recipe** ->默认值：**op**

- reload

  -> 重新加载插件、配置文件和语言环境文件

  - **cmi.command.reload** -> 默认值：**op**

- removehome

  -> 删除主页

  - **cmi.command.removehome** -> 默认值：**op**
  - **cmi.command.removehome.others**

- removeuser

  -> 删除用户及其数据

  - **cmi.command.removeuser** ->默认值：**op**

- removewarp

  -> 删除翘曲

  - **cmi.command.removewarp** -> 默认值：**op**

- repair

  -> 修复项目

  - **cmi.command.repair** -> 默认值：**op**
  - **cmi.command.repair.其他**

- repaircost

  -> 检查项目 repair cost

  - **cmi.command.repaircost** ->默认值：**op**
  - **cmi.command.repaircost.others**

- replaceblock

  -> 替换您周围当前世界中的方块

  - **cmi.command.replaceblock** ->默认值：**op**

- reply

  ->回复最后一条消息的发件人

  - **cmi.command.reply** -> 默认值：**op**

- resetback

  -> 将玩家重置回位置

  - **cmi.command.resetback** -> 默认值：**op**
  - **cmi.command.resetback.others**

- resetdbfields

  -> 将特定数据库列重置为默认值

  - **cmi.command.resetdbfields** ->默认值：**op**

- ride

  -> Ride 目标实体

  - **cmi.command.ride** ->默认值：**op**

- rt

  -> 传送到随机位置

  - **cmi.command.rt** -> 默认值：**op**
  - **cmi.command.rt.others**

- sameip

  -> 列出从同一 IP 登录的玩家

  - **cmi.command.sameip** ->默认值：**op**

- saturation

  -> 设置玩家饱和度

  - **cmi.command.saturation** ->默认值：**op**
  - **cmi.command.saturation.others**

- saveall

  -> 保存每个玩家库存

  - **cmi.command.saveall** -> 默认值：**op**

- saveditems

  -> 保存或管理已保存的项目

  - **cmi.command.saveditems** ->默认值：**op**
  - **cmi.command.saveditems.others**

- sc

  -> 启动签名复制过程

  - **cmi.command.sc** -> 默认值：**op**

- scan

  -> 扫描当前世界中的项目

  - **cmi.command.scan** ->默认值：**op**

- scavenge

  -> 回收物品及其附魔

  - **cmi.command.scavenge** -> 默认值：**op**
  - **cmi.command.scavenge.others**

- schedule

  -> 触发时间表

  - **cmi.command.schedule** -> 默认值：**op**

- se

  -> 更改符号文本行。

  - **cmi.command.se** -> 默认值：**op**

- search

  -> 从所有用户那里搜索项目/附魔/飞行/maxhp/gm/超大尺寸模式和其他东西

  - **cmi.command.search** -> 默认值：**op**
  - **cmi.command.search.others**

- seen

  -> 检查玩家最后一次出现的时间

  - **cmi.command.seen** ->默认值：**op**

- select

  -> 管理选择区域

  - **cmi.command.select** -> 默认值：**op**
  - **cmi.command.select.others**

- sell

  -> 从库存中销售商品

  - **cmi.command.sell** -> 默认值：**op**

- sendall

  -> 将所有在线玩家发送到目标服务器

  - **cmi.command.sendall** ->默认值：**op**

- server

  -> 连接到蹦极绳服务器

  - **cmi.command.server** -> 默认值：**op**
  - **cmi.command.server.others**

- serverlist

  -> 显示服务器列表

  - **cmi.command.serverlist** -> 默认值：**op**
  - **cmi.command.serverlist.others**

- servertime

  -> 显示服务器时间

  - **cmi.command.servertime** ->默认值：**op**

- setenchantworth

  -> 改变附魔值

  - **cmi.command.setenchantworth** ->默认值：**op**

- setfirstspawn

  -> 设置第一个出生点

  - **cmi.command.setfirstspawn** -> 默认值：**op**

- sethome

  -> 设置主位置

  - **cmi.command.sethome** -> 默认值：**op**
  - **cmi.command.sethome.others**

- setmotd

  -> 设置服务器 motd

  - **cmi.command.setmotd** -> 默认值：**op**

- setrt

  -> 设置随机传送边界

  - **cmi.command.setrt** -> 默认值：**op**

- setspawn

  -> 设置 spawn 命令传送点

  - **cmi.command.setspawn** ->默认值：**op**

- setwarp

  -> 设置翘曲位置

  - **cmi.command.setwarp** ->默认值：**op**

- setworth

  -> 更改项目价值

  - **cmi.command.setworth** ->默认值：**op**

- shadowmute

  -> 静音玩家，不告诉他自己是静音的

  - **cmi.command.shadowmute** ->默认值：**op**

- shakeitoff

  -> 让任何骑在你身上的实体下马

  - **cmi.command.shakeitoff** ->默认值：**op**

- shoot

  -> 射击弹丸

  - **cmi.command.shoot** -> 默认值：**op**
  - **cmi.command.shoot.其他**

- silence

  -> 阻止公共消息

  - **cmi.command.silence** -> 默认值：**op**

- silentchest

  -> 切换 silent chest

  - **cmi.command.silentchest** ->默认值：**op**

- sit

  -> 坐在你的位置上

  - **cmi.command.sit** -> 默认值：**op**
  - **cmi.command.sit.其他**

- skin

  -> 更改玩家皮肤

  - **cmi.command.skin** ->默认值：**op**
  - **cmi.command.skin.others（英文）**

- smite

  -> 用闪电击中地面或玩家

  - **cmi.command.smite** -> 默认值：**op**
  - **cmi.command.smite.others**

- smithingtable

  -> 开放式锻造台

  - **cmi.command.smithingtable** ->默认值：**op**
  - **cmi.command.smithingtable.others**

- solve

  -> 求解方程

  - **cmi.command.solve** -> 默认值：**op**

- sound

  -> 在目标位置播放声音

  - **cmi.command.sound** ->默认值：**op**
  - **cmi.command.sound.others（英语：cmi.command.sound.others）**

- spawn

  -> 传送回出生地点

  - **cmi.command.spawn** -> 默认值：**op**
  - **cmi.command.spawn.others**

- spawner

  -> Sets spawner

  - **cmi.command.spawner** ->默认值：**op**

- spawnereditor

  -> 编辑生成器

  - **cmi.command.spawnereditor** ->默认值：**op**

- spawnmob

  -> 在您的位置生成实体

  - **cmi.command.spawnmob** ->默认值：**op**

- speed

  -> 设置玩家步行或飞行速度

  - **cmi.command.speed** ->默认值：**op**
  - **cmi.command.speed.others（英语：cmi.command.speed.others）**

- staffmsg

  -> 向员工频道发送消息

  - **cmi.command.staffmsg** ->默认值：**op**

- stats

  -> 查看玩家统计数据

  - **cmi.command.stats** ->默认值：**op**
  - **cmi.command.stats.others**

- statsedit

  -> 编辑玩家统计数据

  - **cmi.command.statsedit** -> 默认值：**op**

- status

  -> 显示服务器状态

  - **cmi.command.status** -> 默认值：**op**

- 石匠

  -> 开放式石匠

  - **cmi.command.stonecutter** ->默认值：**op**
  - **cmi.command.stonecutter.others**

- sudo

  -> 强制其他玩家执行命令

  - **cmi.command.sudo** ->默认值：**op**

- 自杀

  -> 自杀

  - **cmi.command.suicide** ->默认值：**op**
  - **cmi.command.suicide.others**

- switchplayerdata

  -> 将所有数据从一个播放器切换到另一个播放器

  - **cmi.command.switchplayerdata** ->默认值：**op**

- tablistupdate

  -> 强制更新所有或特定玩家的标签列表

  - **cmi.command.tablistupdate** -> 默认值：**op**

- tempban

  -> TempBan 播放器

  - **cmi.command.tempban** -> 默认值：**op**

- tempipban

  -> 临时禁止 ip

  - **cmi.command.tempipban** -> 默认值：**op**

- tfly

  -> 设置临时玩家飞行模式，直到重新登录或时间结束

  - **cmi.command.tfly** -> 默认值：**op**
  - **cmi.command.tfly.others（英文）**

- tgod

  -> 暂时设置玩家的上帝模式，直到重新登录或时间结束

  - **cmi.command.tgod** ->默认值：**op**
  - **cmi.command.tgod.others（英文）**

- time

  -> 控制服务器时间

  - **cmi.command.time** -> 默认值：**op**

- titlemsg

  -> 向玩家发送标题消息

  - **cmi.command.titlemsg** -> 默认值：**op**

- toast

  -> 向玩家发送 toast 消息

  - **cmi.command.toast** ->默认值：**op**

- top

  -> 传送到您所在位置的最高点

  - **cmi.command.top** -> 默认值：**op**
  - **cmi.command.top.其他**

- tp

  -> 传送到玩家的位置

  - **cmi.command.tp** -> 默认值：**op**
  - **cmi.command.tp.others（其他）**

- tpa

  -> 询问玩家是否可以传送到他们身边

  - **cmi.command.tpa** -> 默认值：**op**

- tpaall

  -> 要求所有在线玩家传送到您的位置

  - **cmi.command.tpaall** ->默认值：**op**

- tpaccept

  -> 接受传送请求

  - **cmi.command.tpaccept** -> 默认值：**op**

- tpahere

  -> 要求玩家接受传送到你的位置

  - **cmi.command.tpahere** ->默认值：**op**

- tpall

  -> 将所有在线玩家传送到位置

  - **cmi.command.tpall** -> 默认值：**op**

- tpallworld

  -> 传送来自特定世界的所有玩家

  - **cmi.command.tpallworld** ->默认值：**op**

- tpbypass

  -> 绕过传送到不安全的位置

  - **cmi.command.tpbypass** ->默认值：**op**
  - **cmi.command.tpbypass.others**

- tpdeny

  -> 拒绝传送请求

  - **cmi.command.tpdeny** -> 默认值：**op**

- tphere

  -> 将播放器传送到您的位置

  - **cmi.command.tphere** ->默认值：**op**
  - **cmi.command.tphere.其他**

- tpo

  -> 通过武力传送到玩家的位置

  - **cmi.command.tpo** -> 默认值：**op**
  - **cmi.command.tpo.其他**

- tpohere

  -> 强行将玩家传送到您的位置

  - **cmi.command.tpohere** ->默认值：**op**
  - **cmi.command.tpohere.others**

- tpopos

  -> 强行传送到位置

  - **cmi.command.tpopos** -> 默认值：**op**
  - **cmi.command.tpopos.others**

- tppos

  ->传送到位置

  - **cmi.command.tppos** -> 默认值：**op**
  - **cmi.command.tppos.others**

- tps

  -> 检查服务器 tps 状态

  - **cmi.command.tps** ->默认值：**op**

- tree

  -> 生成树

  - **cmi.command.tree** -> 默认值：**op**
  - **cmi.command.tree.others（cmi.command.tree.others）**

- unban

  -> 解禁玩家或 ip

  - **cmi.command.unban** -> 默认值：**op**

- unbreakable

  -> 使物品牢不可破

  - **cmi.command.unbreakable** -> 默认值：**op**
  - **cmi.command.unbreakable.others**

- uncondense

  -> 将项目解压缩成更小的部分

  - **cmi.command.uncondense** -> 默认值：**op**
  - **cmi.command.uncondense.others**

- unjail

  -> 将玩家从监狱中释放出来

  - **cmi.command.unjail** ->默认值：**op**

- unloadchunks

  -> 从服务器内存中卸载块

  - **cmi.command.unloadchunks** -> 默认值：**op**

- unmute

  -> 取消静音播放器

  - **cmi.command.unmute** ->默认值：**op**

- unmutechat

  -> 取消隐藏公共聊天

  - **cmi.command.unmutechat** ->默认值：**op**

- usermeta

  -> 管理玩家元数据

  - **cmi.command.usermeta** -> 默认值：**op**

- util

  -> 管理工具

  - **cmi.command.util** -> 默认值：**op**

- vanish

  -> 消失玩家

  - **cmi.command.vanish** ->默认值：**op**
  - **cmi.command.vanish.others**

- vanishedit

  -> 编辑玩家的消失模式

  - **cmi.command.vanishedit** -> 默认值：**op**
  - **cmi.command.vanishedit.others**

- version

  -> 显示插件版本

  - **cmi.command.version** ->默认值：**op**

- viewrange

  -> 更改视图范围

  - **cmi.command.viewrange** ->默认值：**op**
  - **cmi.command.viewrange.others**

- voteedit

  -> 管理玩家投票

  - **cmi.command.voteedit** ->默认值：**op**
  - **cmi.command.voteedit.others**

- 投票

  -> 检查玩家投票计数

  - **cmi.command.votes** -> 默认值：**op**
  - **cmi.command.votes.其他**

- votetop

  -> 查看最高投票列表

  - **cmi.command.votetop** ->默认值：**op**
  - **cmi.command.votetop.others**

- walkspeed

  -> 将玩家的步行速度从 0 设置为 10

  - **cmi.command.walkspeed** ->默认值：**op**
  - **cmi.command.walkspeed.others**

- warn

  -> 警告玩家

  - **cmi.command.warn** -> 默认值：**op**

- warnings

  -> 检查玩家警告

  - **cmi.command.warnings** ->默认值：**op**
  - **cmi.command.warnings.others**

- warp

  -> 传送到扭曲位置

  - **cmi.command.warp** ->默认值：**op**
  - **cmi.command.warp.others**

- warpgroups

  -> 列出变形组

  - **cmi.command.warpgroups** ->默认值：**op**

- weather

  -> 控制服务器天气

  - **cmi.command.weather** ->默认值：**op**

- whowas

  -> 显示玩家以前的名字

  - **cmi.command.whowas** ->默认值：**op**

- workbench

  -> 打开工作台

  - **cmi.command.workbench** ->默认值：**op**
  - **cmi.command.workbench.others（英语：cmi.command.workbench.others）**

- world

  -> 传送到不同的世界

  - **cmi.command.world** -> 默认值：**op**
  - **cmi.command.world.others（英语：cmi.command.world.others）**

- worth

  -> 检查物品价值

  - **cmi.command.worth** -> 默认值：**op**

- worthlist

  -> 检查具有固定销售价格的物品清单

  - **cmi.command.worthlist** ->默认值：**op**
  - **cmi.command.worthlist.others**