import myJson from "../../data.json" assert { type: "json" };

const list = document.querySelector(".list");
`
<li>
<div>
    <img src= />
    <span></span>
</div>
<span></span>
</li>
`;

const html = myJson
  .map(
    (item) => `
<li style="background-color:${item.background}" >
<div>
    <img src=${item.icon} />
    <span style="color:${item.color}" >${item.category}</span>
</div>
<span class="percent">
<span>${item.score}</span> / 100</span>
</li> 
`
  )
  .join("");

list.innerHTML = html;
