/**
 * websocket
 * @type {{data(): *, create(): void, destory(): void, methods: {initWebSocket(): void, websocketonopen(): void, websocketonerror(*): void, websocketonmessage(*): void, websocketclose(*): void}}}
 */
var websocket = {
  data(){
    return {
      websock:null,
      websock_url:`ws://localhost:8888/api/v1/websocket/task/all`
    }
  },
  created(){
    console.log('6666');
    this.initWebSocket()
    // setInterval(()=>{
    //   this.websocketonopen()
    // },3000)
  },
  destory(){
    this.websocketclose()
  },
  methods:{
    initWebSocket(){
      if ('WebSocket' in window) {
        this.websock = new WebSocket(this.websock_url);
        this.websock.onopen = this.websocketonopen;
        this.websock.onerror = this.websocketonerror;
        this.websock.onmessage = this.websocketonmessage;
        this.websock.onclose = this.websocketclose;
      } else {
        alert('Not support websocket')
      }

    },
    websocketonopen() {
      console.log("WebSocket连接成功");
    },
    websocketonerror(e) {
      console.log("WebSocket连接发生错误");
    },
    websocketonmessage(e) {
      this.handleData(e)
    },
    websocketclose(e) {
      this.websock.close();
      if(e){
        console.log("connection closed (" + e.code + ' ' + e.reason + ' ' + e.wasClean+")");
      }
    },
    websocketChange(){
        this.websocketclose();
        var internal= window.setInterval(()=>{
          if(this.websock.readyState === this.websock.CLOSED){
            this.initWebSocket()
            window.clearInterval(internal)
          }
        },500)


    }
  }
}

export default websocket;
