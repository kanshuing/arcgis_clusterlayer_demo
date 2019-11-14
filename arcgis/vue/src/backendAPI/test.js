import request from "@/extension/interceptor/request";

export default {
  /**
   * 获取点坐标
   */
  getPoints() {
    return request({
      url: "/learn/test/test",
      method: "post"
    });
  }
};
