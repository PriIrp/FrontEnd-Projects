// // when the animation starts
// document.querySelector("#bouncy02")
//   .addEventListener("animationstart", (evt) => {
//   // double check it the animation we wanted
//   if (evt.animationName === "bounce") {
//     // retrieve both Animation objects
//     const myAnim = findAnimByName(evt.target, "bounce");
//     const otherAnim = findAnimByName(document.querySelector("#bouncy01"), "bounce");
//     // update mine to act as if it started
//     // at the same time as the first one
//     myAnim.startTime = otherAnim.startTime;
//   }
// });
// // simple helper to find an Animation by animationName
// function findAnimByName(elem, name) {
//   // get all the active animations on this element
//   const anims = elem.getAnimations();
//   // return the first one with the expected animationName
//   return anims.find((anim) => anim.animationName === name);
// }

const onLoadAnim = () => {
  const intro_container_bar = document.querySelector('#intro-container-underscore')
  const T_Box = document.querySelector('#T-box')
  const A_Box = document.querySelector('#A-box')
  const dot = document.querySelector('#dot')
  const delay = getComputedStyle(document.documentElement).getPropertyValue('--ball-drop-animation')
  console.log("Hello")
  
  window.onload = event => {
      dot.classList.add('anim')

      setTimeout(() => {
        intro_container_bar.classList.add('anim')
      }, delay);

      setTimeout(() => {
        T_Box.classList.add('anim')
        A_Box.classList.add('anim')
      }, delay);

  }
}



onLoadAnim()
