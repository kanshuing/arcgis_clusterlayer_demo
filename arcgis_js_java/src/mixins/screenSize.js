/**
 * 动态获取屏幕的尺寸，因为好几个vue中用到了，放在mixins中
 */
var screenSize = {
	data(){
		return {
			//屏幕宽度
			scWidth:document.body.clientWidth,
			//屏幕高度
			scHeight:document.body.clientHeight,
		}
	},
	mounted(){
		let that = this;
		window.onresize =()=>{
			return(()=>{
				window.screenWidth = document.body.clientWidth;
				window.screenHeight = document.body.clientHeight;
      			that.scWidth = window.screenWidth-100;
      			that.scHeight = window.screenHeight-100;
      			
			})()
		}
	}
}
export default screenSize;