async function scheduleHtmlProvider() {
    // 加载小爱组件
    await loadTool('AIScheduleTools')
    url = 'https://ehall.seu.edu.cn/jwapp/sys/wdkb/modules/xskcb/xskcb.do'
    // 获取cookie和UA
    const cookie = document.cookie
    const UA = navigator.userAgent
    // 计算学期字段
    const element = document.getElementById("dqxnxq2");
    if (element) {
        var XNXQDM = element.getAttribute("value");
    } else {
        await AIScheduleAlert("无法获取到学期信息");
    }
    try {
        const res = await fetch(url,
            {
                method: "post",
                mode: 'no-cors',
                credentials: "include",
                "Access-Control-Allow-Origin": "*",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    "Accept": "application/json, text/javascript, */*; q=0.01",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9",
                    "Content-Length": "40",
                    "Cookie": cookie,
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Host": "ehall.seu.edu.cn",
                    "Origin": "https://ehall.seu.edu.cn",
                    "Referer": "https://ehall.seu.edu.cn/jwapp/sys/wdkb/*default/index.do?EMAP_LANG=zh&THEME=millennium&amp_sec_version_=1",
                    "User-Agent": UA,
                    "X-Requested-With": "XMLHttpRequest",
                },
                body: 'XNXQDM=' + XNXQDM
            })
        resJson = await res.json()
        return JSON.stringify(resJson)
    } catch (error) {
        // console.error(error)
        await AIScheduleAlert("请登录后打开课表界面导入" + error.message)
        return 'do not continue'
    }
}