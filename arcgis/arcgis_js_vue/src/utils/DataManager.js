//定义项目级别字典
export const projectGrades = [{
		value: "1",
		label: '国家级'
	},
	{
		value: "2",
		label: '省级'
	},
	{
		value: "3",
		label: '市级'
	},
	{
		value: "4",
		label: '县级'
	}
]
//解析项目级别
export function parseGrade(grade) {
	var label = "";
	switch(grade) {
		case "1":
			label = "国家级";
			break;
		case "2":
			label = "省级";
			break;
		case "3":
			label = "市级";
			break;
		case "4":
			label = "县级";
			break;
		default:
			break;
	}
	return label;
}
//定义经营要素类别字典
export const marketType = [
	{
		value: "五金机械",
		label: '五金机械'
	},
	{
		value: "服装服饰",
		label: '服装服饰'
	},
	{
		value: "日用百货",
		label: '日用百货'
	},
	{
		value: "陶瓷建材",
		label: '陶瓷建材'
	},
	{
		value: "钢材大宗",
		label: '钢材大宗'
	},
	{
		value: "板材家具",
		label: '板材家具'
	},
	{
		value: "汽车配件",
		label: '汽车配件'
	}
]
//解析经营要素类别
export function parseMarketType(grade) {
	var label = "";
	switch(grade) {
		case "1":
			label = "国家级";
			break;
		case "2":
			label = "省级";
			break;
		case "3":
			label = "市级";
			break;
		case "4":
			label = "县级";
			break;
		default:
			break;
	}
	return label;
}

//定义招商项目类型字典
export const investProjectType = [{
		value: "物流",
		label: '物流'
	},
	{
		value: "金融",
		label: '金融'
	},
	{
		value: "餐饮",
		label: '餐饮'
	},
	{
		value: "商超",
		label: '商超'
	}
]


/**
 * 阿拉伯数字转汉字
 */
const chnNumChar = ["零","一","二","三","四","五","六","七","八","九"];
const chnUnitSection = ["","万","亿","万亿","亿亿"];
const chnUnitChar = ["","十","百","千"];
// 转换算法主函数
export function NumberToChinese(num){
    var unitPos = 0;
    var strIns = '', chnStr = '';
    var needZero = false;

    if(num === 0){
        return chnNumChar[0];
    }
    while(num > 0){
        var section = num % 10000;
        if(needZero){
            chnStr = chnNumChar[0] + chnStr;
        }
        strIns = SectionToChinese(section);
        strIns += (section !== 0) ? chnUnitSection[unitPos] : chnUnitSection[0];
        chnStr = strIns + chnStr;
        needZero = (section < 1000) && (section > 0);
        num = Math.floor(num / 10000);
        unitPos++;
    }
    return chnStr;
}
// 节内转换算法
export function SectionToChinese(section){
    var strIns = '', chnStr = '';
    var unitPos = 0;
    var zero = true;
    while(section > 0){
        var v = section % 10;
        if(v === 0){
            if(!zero){
                zero = true;
                chnStr = chnNumChar[v] + chnStr;
              }
        }else{
              zero = false;
              strIns = chnNumChar[v];
              strIns += chnUnitChar[unitPos];
              chnStr = strIns + chnStr;
        }
        unitPos++;
        section = Math.floor(section / 10);
    }
    return chnStr;
}

//将日期字符串格式化（"20181111"转化为"2018-11-11"）
export function formatDateString(dateString){
	if(!dateString) return ''
	return dateString.replace(/^(\d{4})(\d{2})(\d{2})$/,"$1-$2-$3")
}

//对象数组排序（按照指定的某一个key排序）
export function compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }
}

/**
 * 将导入的TXT生成的坐标数组转换为WKT格式
 * @param rings 封闭图形坐标环数组
*/
export function RingsToWKT(rings){
	var wkt = [];
	console.log(rings)
	for(var i in rings){
		var ring = rings[i];
		for(var j in ring){
			var p = ring[j];
			wkt.push(p.join(" "));
		}
	}	
	return "POLYGON (("+wkt.join(",")+"))";
}

