export default function request(url, params, method = "POST") {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({
        errorCode: 0,
        errorMessage: "请求失败"
      })
    }, 1000)
  })
}
