const x = localStorage.getItem("x");
const hasMap = JSON.parse(x) || [
  { logo: "A", url: "https://www.acfun.cn" },
  { logo: "B", url: "https://www.bilibili.com" },
  { logo: "R", url: "http://www.ruanyifeng.com/blog/" },
  { logo: "E", url: "https://es6.ruanyifeng.com/" },
  { logo: "W", url: "https://wangdoc.com/javascript/" },
  { logo: "C", url: "https://caniuse.com/" },
  { logo: "C", url: "https://css-tricks.com/" },
  { logo: "P", url: "https://www.pexels.com/zh-cn/" },
  { logo: "S", url: "https://www.stickpng.com/" }
];

const simply = url => {
  return url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .replace(/\/.*/, "");
};
const render = () => {
  $(".siteList")
    .find(".site:not(.addButton)")
    .remove();
  hasMap.forEach((node, index) => {
    const $li = $(` 
        <li class="site">
            <div class="logo">${node.logo}</div>
            <div class="link">${simply(node.url)}</div>
            <svg class="iconClose">
                <use xlink:href="#icon-close"></use>
            </svg>
        </li>
    `).insertBefore(".addButton");
    $li.on("click", () => {
      window.open(node.url, "_self");
    });
    $li.on("click", ".iconClose", e => {
      e.stopPropagation();
      hasMap.splice(index, 1);
      render();
      const string = JSON.stringify(hasMap);
      localStorage.setItem("x", string);
    });
  });
};

render();

$(".search:first-child").on("click", () => {
  $("form").attr("action", "//www.baidu.com/s");
  $("input").attr("name", "wd");
  $(".search:nth-child(1)").attr("style", "background: #fff;color: black;");
  $(".search:nth-child(2)").attr("style", "background: red;color: #fff;");
});

$(".search:nth-child(2)").on("click", () => {
  $("form").attr("action", "//www.google.com/search");
  $("input").attr("name", "q");
  $(".search:nth-child(2)").attr("style", "background: #fff;color: black;");
  $(".search:nth-child(1)").attr("style", "background: red;color: #fff;");
});

$(".addButton").on("click", () => {
  let url = window.prompt("请输入你想要添加的网址");
  if (url.indexOf("http") !== 0) url = "https://" + url;
  hasMap.push({ logo: simply(url)[0].toUpperCase(), url: url });
  render();
  const string = JSON.stringify(hasMap);
  localStorage.setItem("x", string);
});
