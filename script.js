// 每日计划数据
const dailyPlans = [
    { day: 1, content: "闹钟直接“扔”了！我要一觉睡到大中午，太阳晒屁股也不管。醒了就继续在床上“挺尸”，发呆、胡思乱想，怎么舒服怎么来。什么教学任务、学生作业，统统抛到九霄云外。" },
    { day: 2, content: "继续睡到自然醒，享受没有闹钟的生活。今天可以尝试在床上吃早餐，体验一下当'废柴'的快乐。" },
    { day: 3, content: "今天可以尝试在床上躺一整天，连吃饭都叫外卖，体验一下真正的'躺平'生活。" },
    { day: 4, content: "开启“日夜颠倒”模式。晚上熬夜追剧，悬疑、爱情、科幻，啥类型都不放过，零食堆满床，边吃边看。" },
    { day: 5, content: "继续追剧生活，今天可以尝试一些新的剧集类型，比如韩剧、日剧或者美剧，拓宽一下视野。" },
    { day: 6, content: "白天是游戏时间，和朋友组队开黑，在游戏里大杀四方，喊破嗓子也没人管，主打一个尽情撒欢。" },
    { day: 7, content: "继续游戏狂欢，今天可以尝试一些新的游戏，或者挑战一些高难度的关卡。" },
    { day: 8, content: "化身“美食探险家”。大街小巷的美食都要尝个遍，早餐来碗热气腾腾的馄饨，中午吃顿香辣过瘾的火锅。" },
    { day: 9, content: "继续美食之旅，今天可以尝试一些异国料理，比如泰国菜、印度菜或者墨西哥菜。" },
    { day: 10, content: "晚上去夜市吃各种小吃，烤冷面、炸串、糖葫芦，一个都不能少。要是心情好，还能自己在家试着做黑暗料理。" },
    { day: 11, content: "约上好友去咖啡馆，点杯拿铁，聊聊天，吐槽工作的烦恼，分享生活的趣事。" },
    { day: 12, content: "今天可以去参加一些轻松的活动，像手工陶艺课，把泥巴捏成各种奇奇怪怪的形状。" },
    { day: 13, content: "继续社交活动，今天可以约上朋友去看场电影，或者去KTV唱歌，释放压力。" },
    { day: 14, content: "今天可以尝试一些新的社交活动，比如参加读书会或者桌游聚会，认识新朋友。" },
    { day: 15, content: "彻底宅在家里，穿着最舒服的睡衣，在沙发上“葛优瘫”。看看书，不过看几页就犯困也没关系。" },
    { day: 16, content: "继续宅家生活，今天可以尝试一些新的休闲方式，比如拼图、乐高或者绘画。" },
    { day: 17, content: "听听音乐，跟着哼几句跑调也无所谓。偶尔打开窗户，晒晒太阳，感受一下温暖。" },
    { day: 18, content: "开始冥想练习，找个安静的角落，闭上眼睛，什么都不想，让自己的内心平静下来。" },
    { day: 19, content: "继续冥想练习，今天可以尝试一些引导式冥想，帮助自己更好地放松。" },
    { day: 20, content: "回顾这个假期的快乐时光，整理照片和回忆，制作一个假期纪念册。" },
    { day: 21, content: "为新学期做准备，整理心情，调整作息，带着满满的能量迎接新的挑战。" }
];

document.getElementById('relaxForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const startDate = new Date(document.getElementById('startDate').value);
    const startDay = Math.floor((startDate - new Date('2025-01-20')) / (1000 * 60 * 60 * 24)) + 1;
    
    displayPlan(startDay);
    document.getElementById('planResult').classList.remove('hidden');
});

function displayPlan(startDay) {
    const planStagesContainer = document.getElementById('planStages');
    planStagesContainer.innerHTML = '';

    // 计算当前是第几天和剩余天数
    const currentDay = startDay;
    const remainingDays = 21 - currentDay + 1;
    
    // 获取当天计划
    const todayPlan = dailyPlans.find(plan => plan.day === currentDay);
    
    // 显示信息
    const infoDiv = document.createElement('div');
    infoDiv.className = 'day-info';
    infoDiv.innerHTML = `
        <h3>今天是假期的第 ${currentDay} 天</h3>
        <h4>剩余假期天数：${remainingDays} 天</h4>
    `;
    planStagesContainer.appendChild(infoDiv);

    // 显示当天计划
    if (todayPlan) {
        const planDiv = document.createElement('div');
        planDiv.className = 'day-plan';
        planDiv.innerHTML = `
            <h4>今日摆烂计划</h4>
            <p>${todayPlan.content}</p>
        `;
        planStagesContainer.appendChild(planDiv);
    } else {
        const noPlanDiv = document.createElement('div');
        noPlanDiv.className = 'day-plan';
        noPlanDiv.innerHTML = `<p>今天没有安排特别的计划，随心所欲地放松吧！</p>`;
        planStagesContainer.appendChild(noPlanDiv);
    }
}
