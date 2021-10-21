export default function request(url, params, method = "POST") {
  return new Promise((resolve, reject) => {
    let success = Math.random() > 0;
    setTimeout(() => {
      if (success) {
        resolve({
          errorCode: 0,
          data: {
            title: "返回成功"
          }
        })
      } else {
        reject({
          errorCode: 0,
          errorMessage: "请求失败"
        })
      }
    }, 1000)
  })
}
