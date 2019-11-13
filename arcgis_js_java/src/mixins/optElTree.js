/*
 * elementui中的方法重写,需要与object一同使用
 * 因el-tree中的update以及添加数量统计后的数量变化合并与实际需要不符，且多个页面使用到，所以添加到mixins
 * 
 */
var elementui = {
    methods: {
    	/********************************************tree相关***********************************************/
    	/**
    	 * 添加
    	 * @param {Object} data 对应节点的数据
      	 * @param {Object} _obj  添加的对象
    	 */
//	  	append:function(data,_obj) {
//	        if (!data.children) {
//	          this.$set(data, 'children', []);
//	        }
//	        data.children.push(_obj);
//	        this.$refs['tree'].getNode(data.id).expanded = true;
//    	},
      	/**
      	 * 删除
      	 * @param {Object} data 对应节点的数据
      	 */
//	   	remove:function(data) {
//	   		var _this = this.getIndex(data);
//	        _this.children.splice(_this.index, 1);
//    	},
      	/**
      	 * 更新
      	 * @param {Object} data  对应节点的数据
      	 * @param {Object} data  更新的对象
      	 */
  	  	update:function(data,_obj) {
			 var _this = this.getIndex(data);
	        //创建一个方法，将第二个对象与第一个的相同变量赋值给第一个,编写到object方法中
	        this.merge(_this.children[_this.index],_obj);
	  	},
	  	/**
	  	 * 获取相关索引与数组
	  	 * @param {Object} data
	  	 */
	  	getIndex:function(data){
	  		const _parent = this.$refs['tree'].getNode(data.id).parent;
	  		const _children = _parent.data.children || _parent.data;
	  		const obj = {
		        children : _children,
		        index : _children.findIndex(d => d.id === data.id)
	  		}
	        return obj;
	  	},
	  	recursionTree:function(data){
	  		var _parent = this.$refs['tree'].getNode(data.id).parent;
	  		if(_parent.level!="0"){
		  			_parent.data.count = _parent.data.count + 1;
		  			this.recursionTree(_parent.data)
  			}
	  		
	  	},
	  	searchTreeNode:function(id,_parent,_root){
	  		var _bool = false;
	  		if(!_root){
	  			_root = this.$refs['tree'].root
	  		}
	  		for(var o of _root.childNodes){
	  			if(o.data.id == id&&o.parent.data.id==_parent){
	  				this.$refs['tree'].remove(o);
	  				_bool = true;
	  				break;
	  			}
		  		if(!_bool){
		  			this.searchTreeNode(id,_parent,o)
		  		}
	  		}
	  	}
  	}
}
export default elementui;