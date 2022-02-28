const apps: any[] = [
  {
    name: "qiankun-vue",
    entry: "//localhost:8081",
    container: "#frame",
    activeRule: "/qiankun-vue",
  },
  {
    name: "qiankun-react",
    entry: "//localhost:7788/",
    activeRule: "/qiankun-react",
    container: "#frame", // 子应用挂载的div
  },
];

export default apps;
