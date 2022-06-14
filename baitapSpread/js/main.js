const hoverText = () => {
   let content = '';
   const str = document.querySelector(".heading").innerHTML;

   const chart = [...str];

   chart.forEach((ele) => {
      content += `<span>${ele}</span>`;
   })
   document.querySelector(".heading").innerHTML = content;
}

hoverText();