import {state, mutations} from "../store";

export default function(context) {
  console.log(state.user);
  if (state.user === null) {
    context.$router.push("/login");
    console.log(null);
  } else {
    console.log("用户已登录!");
  }
}
