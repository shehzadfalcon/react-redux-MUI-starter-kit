let apiEndpoint = "";

if (process.env.NODE_ENV === "production") {
  //apiEndpoint = "http://127.0.0.1:5000";
}
if (process.env.NODE_ENV === "development") {
  //apiEndpoint = "http://127.0.0.1:5000";
}

export default apiEndpoint;