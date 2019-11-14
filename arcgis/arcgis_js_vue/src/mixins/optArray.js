/*
 * js中数组的相关优化、
 * 因utils中的resetTemp对数组内均采取设置为null，且合并时合并对象即使未null也会被合并，与实际需要不符，所以提供了相关的方法
 * 
 */
var object = {
    methods: {
    	/*
    	 * 清空对象中的值，不影响结构
    	 * temp  需要被清空对象
    	 */
    	resetTemp:function(temp) {
      		for(let prop in temp){
				if(Array.isArray(temp[prop])){
		  			temp[prop] = []
			  	}else{
			  		temp[prop] = null;
			  	}
		 	}
		  return temp;
 		},
 		/*
 		 * 合并
 		 * 将obj2的值覆盖掉obj1中相同的字段
 		 */
 		merge:function(obj1,obj2){
 			for(var i in obj1){
 				for(var j in obj2){
 					if(i==j&&obj2[j]!=null){
 						obj1[i] = obj2[j];
 					}
 				}
 			}
 		}
  	}
}
export default object;