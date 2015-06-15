// calculate the days between input and now
function dayPass(input, toNow) {

	var _input = input.replace(/-/g, '/');
	var target = new Date(_input);

	// 获得当前时间的凌晨
	var now = toNow ? new Date(toNow) : Date.now();
	var nowZero = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate() + ' 00:00:00';
	var nowZero = new Date(nowZero);

	// 获得当前时间距离凌晨的时间长度, 和目标时间距离当前的时间长度
	var nowToZero = now - nowZero;
	var gap = now - target;

	if (gap <= nowToZero) {  // 如果小于, 说明在当天, 返回刚刚
		return "刚刚";
	}
	// 截去今天读过的时候吗, 计算时间长度
	gap = nowZero - target;
	var passedDay = Math.floor(gap /(1000 * 3600 * 24));	

	// 根据日期数返回文本
	switch (passedDay) {
		case 0:  /* 0 - 24h */
			return "昨天"
			break;
		case 1: /* 24 - 48 */
			return "前天";
			break;
		default:
			return input.split(' ')[0];
	}
}

// 测试数据
// 2015-06-15 15:21:11
var testdates = [
	'2015-06-15 14:21:11',  // just now 
	'2015-06-14 23:21:11',  // yesterday
	'2015-06-14 14:21:11',
	'2015-06-13 14:21:11',
	'2015-06-13 23:21:11',
	'2015-06-12 23:21:11',
	'2015-06-11 23:21:11'
]

for ( i=0; i<testdates.length; i++) {
	console.log('--->', testdates[i]);
	console.log(dayPass(testdates[i], '2015/06/15 15:21:11'));
}
