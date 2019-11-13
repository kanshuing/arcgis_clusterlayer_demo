import test from "../backendAPI/test";

const ApprovedSuperviseActions = {
  actions: {
    //获取所有的点坐标
    getPoints({ commit }) {
      return new Promise((resolve, reject) => {
        test
          .getPoints()
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

  }
};

export default ApprovedSuperviseActions;
