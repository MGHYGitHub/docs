import{_ as n,c as o,j as e,I as t,w as i,a as c,as as l,D as d,o as m}from"./chunks/framework.BBmOMSeO.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Mc/Purpur-1.20.1/权限列表.md","filePath":"Mc/Purpur-1.20.1/权限列表.md","lastUpdated":1721809173000}'),b={name:"Mc/Purpur-1.20.1/权限列表.md"},h={id:"权限列表",tabindex:"-1"},p=e("strong",null,"权限列表",-1),u=e("a",{class:"header-anchor",href:"#权限列表","aria-label":'Permalink to "<center>**权限列表**</center>"'},"​",-1),_=l('<h2 id="ess权限" tabindex="-1">Ess权限 <a class="header-anchor" href="#ess权限" aria-label="Permalink to &quot;Ess权限&quot;">​</a></h2><table tabindex="0"><thead><tr><th>权限节点</th><th>描述</th></tr></thead><tbody><tr><td>essentials.home</td><td>允许访问 /home 命令</td></tr><tr><td>essentials.sethome</td><td>允许访问 /sethome 命令</td></tr><tr><td>essentials.sethome.bed</td><td>允许玩家在白天右键单击床来更新他们的“床”之家</td></tr><tr><td>essentials.sethome.multiple</td><td>允许玩家拥有多个家园，或创建命名家园。2 个以上家园时必须如此</td></tr><tr><td>essentials.sethome.multiple.unlimited</td><td>取消人们可拥有的住房数量的限制（如果他们拥有多套住房）</td></tr><tr><td>essentials.delhome</td><td>允许访问 /delhome 命令。</td></tr><tr><td>essentials.sethome.multiple.default(vip/svip)</td><td>将多个家庭限制提升到配置文件中定义的设置。</td></tr><tr><td>essentials.back</td><td>允许访问/back 命令</td></tr><tr><td>essentials.back.ondeath</td><td>授予此权限以允许玩家使用 /back 前往其死亡地点</td></tr><tr><td></td><td></td></tr><tr><td>coreprotect.inspect</td><td>允许访问 CoreProtect 检查命令</td></tr><tr><td>coreprotect.lookup.near</td><td>查看半径五格内的方块记录</td></tr><tr><td></td><td></td></tr><tr><td>xconomy.user.pay</td><td>允许玩家转账给其他人</td></tr><tr><td>xconomy.user.pay.receive</td><td>允许玩家从其他人那里接收</td></tr><tr><td>xconomy.user.balancetop</td><td>允许玩家查看TOP10排名</td></tr><tr><td>xconomy.user.paytoggle</td><td>允许玩家切换接受付款</td></tr></tbody></table><h2 id="residence-领地" tabindex="-1">Residence-领地 <a class="header-anchor" href="#residence-领地" aria-label="Permalink to &quot;Residence-领地&quot;">​</a></h2><p>加粗为重要权限，有（OP）代表OP权限并且默认OP拥有，有（default)代表玩家权限，默认拥有 默认不需要给权限，如出现权限错误请看Q&amp;A</p><table tabindex="0"><thead><tr><th>权限节点</th><th>描述</th></tr></thead><tbody><tr><td>residence.group.[groupname]</td><td>自定义玩家所在的Residence权限组。</td></tr><tr><td>residence.flag.[flag]</td><td>允许玩家使用某个标志(flag)。</td></tr><tr><td>residence.max.res.[number]</td><td>设置玩家可拥有的最大领地数量。</td></tr><tr><td>residence.create.subzone</td><td><strong>(默认)</strong> 允许创建子领地。</td></tr><tr><td>residence.expand</td><td><strong>(默认)</strong> 允许扩张领地。</td></tr><tr><td>residence.create</td><td><strong>(默认)</strong> 允许玩家创建领地。</td></tr><tr><td>residence.randomtp</td><td><strong>(默认)</strong> 允许在领地内使用 /res rt 指令进行随机传送。</td></tr><tr><td>residence.versioncheck</td><td>(OP) 允许接收插件更新检查。</td></tr><tr><td>residence.command.[commandName]</td><td>允许玩家使用某个指令。</td></tr><tr><td>residence.tpdelaybypass</td><td>无视领地传送延迟。</td></tr><tr><td>residence.randomtp.delaybypass</td><td>无视随机传送延迟。</td></tr><tr><td>residence.randomtp.cooldownbypass</td><td>无视随机传送冷却。</td></tr><tr><td>residence.admin.tp</td><td>(OP) 无视TP权限。</td></tr><tr><td>residence.admin.move</td><td>(OP) 无视移动权限。</td></tr><tr><td>residence.nofly.bypass</td><td>(OP) 无视禁止飞行。</td></tr><tr><td>residence.max.subzones.[number]</td><td>设置可拥有的最大子领地数量。</td></tr><tr><td>residence.delete</td><td><strong>(默认)</strong> 允许删除你自己的领地。</td></tr><tr><td>residence.delete.subzone</td><td><strong>(默认)</strong> 允许删除你自己的子领地。</td></tr><tr><td>residence.rename</td><td><strong>(默认)</strong> 允许为领地改名。</td></tr><tr><td>residence.expand.subzone</td><td><strong>(默认)</strong> 允许扩张子领地。</td></tr><tr><td>residence.contract</td><td><strong>(默认)</strong> 允许合并自己的领地。</td></tr><tr><td>residence.resize</td><td><strong>(默认)</strong> 允许重新设置领地的大小。</td></tr><tr><td>residence.buy</td><td>允许玩家购买领地。</td></tr><tr><td>residence.sell</td><td>允许玩家出售领地。</td></tr><tr><td>residence.market.evict</td><td>允许通过武力将玩家驱逐出领地。</td></tr><tr><td>residence.command.message.enter</td><td>允许修改进入领地时发送的信息。</td></tr><tr><td>residence.command.message.leave</td><td>允许修改离开领地时发送的信息。</td></tr><tr><td>residence.nofly.bypass</td><td>(OP) 无视领地禁止飞行设置。</td></tr><tr><td>residence.flag.command.bypass</td><td>(OP) 无视领地禁止输入指令设置。</td></tr><tr><td>residence.bypass.build</td><td>无视领地禁止放置方块设置。</td></tr><tr><td>residence.bypass.destroy</td><td>无视领地禁止破坏方块设置。</td></tr><tr><td>residence.admin</td><td>(OP) 管理员权限，可以使用 /resadmin 指令。</td></tr></tbody></table><h2 id="广告牌" tabindex="-1">广告牌 <a class="header-anchor" href="#广告牌" aria-label="Permalink to &quot;广告牌&quot;">​</a></h2><table tabindex="0"><thead><tr><th>权限节点</th><th>描述</th></tr></thead><tbody><tr><td>billboards.admin</td><td>**[OP]**是否能新建或删除广告牌</td></tr><tr><td>billboards.sign.color</td><td>是否能在广告牌上使用颜色代码 (§ 0-9, a-f)</td></tr><tr><td>billboards.sign.format</td><td>是否能在广告牌上使用格式代码 (§ lmnor)</td></tr><tr><td>billboards.sign.magic</td><td>是否能在广告牌上使用乱码代码 (§k)</td></tr><tr><td>billboards.rent</td><td>**[默认]**是否能租用并编辑广告牌</td></tr></tbody></table>',7);function g(y,P,f,x,k,O){const r=d("center"),s=d("NolebaseGitContributors"),a=d("NolebaseGitChangelog");return m(),o("div",null,[e("h2",h,[t(r,null,{default:i(()=>[p]),_:1}),c(),u]),_,t(s),t(a)])}const C=n(b,[["render",g]]);export{v as __pageData,C as default};
