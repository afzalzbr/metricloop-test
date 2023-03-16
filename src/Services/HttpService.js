import axios from "axios";

const instance = axios.create({
  timeout: 1000 * 120, //wait for 120 seconds
  withCredentials: false,
});

instance.interceptors.request.use(async (req) => {
  // const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  req.headers["Authorization"] = 'Token c7e2413b9367b46c40d95b375d27630a92bf55eb';
  // if (req.method === "get") {
  //   req.url = req.url.includes("?") ? req.url + "&user_tz=" + tz : req.url + "?user_tz=" + tz;
  // } else if (req.method === "post") {
  //   if (!req.data) {
  //     let data = new FormData();
  //     data.append("user_tz", tz);
  //     req.data = data;
  //   } else if (req.data instanceof FormData) {
  //     // data is in form data
  //     req.data.append("user_tz", tz);
  //   } else {
  //     req.data.user_tz = tz;
  //   }
  // }
  return req;
});

instance.interceptors.response.use((response) => {
  try {
    if (
      response.status === 200 &&
      (response?.data?.message?.toLowerCase() === "permission denied" || response.data?.error_code === 403)
    ) {
      alert("You do not have Permissions to access this resource");
      return;
    }
    return response;
  } catch (e) {
    return response;
  }
});

instance.interceptors.response.use(null, (error) => {
  if (error?.response?.status === 403) {
    localStorage.removeItem("csrfToken");
    let hostName = window.location.hostname;
    // if (hostName !== "localhost") {
    //   setRedirectionPath();
    //   // setCookie("isLogout", "1");
    //   window.location.href = `${XIQ_ONLINE_URL}auth/login?redirectURL=${window.location.origin}`;
    // } else {
    //   setRedirectionPath();
    //   return <Redirect to={"/"} />;
    // }
  }
  return Promise.reject(error);
});

const http = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default http;
