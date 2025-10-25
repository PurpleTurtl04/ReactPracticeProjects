export default function BackToTop() {
  return (
    <button onClick="topFunction()" id="topBtn" title="Go to top">
      Top
    </button>
  );
}

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 700 ||
//     document.documentElement.scrollTop > 700
//   ) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
