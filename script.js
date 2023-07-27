const box = document.getElementById("box");
const img = document.querySelector("img");

box.addEventListener("mousemove", (e) => {
  const x = e.clientX - e.target.offsetleft;
  const y = e.clientY - e.target.offsetTop;

  console.log(x, y);
  box.style.transformOrigin = `${x}px  ${y}px`;
  box.style.transform = "scale(1.2)";
});

box.addEventListener("mouseleave", (e) => {
  box.style.transformOrigin = "center center";
  box.style.transform = "scale(1)";
});
