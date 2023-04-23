/* 
mzCanvas a TypeScript-based library for manipulating canvas element and 2D graphics in the browser.
Version: 1.0.0
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-canvas
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var d=(e,t)=>{for(let i of t){let n=i[1];if(n===void 0)continue;let l=i[0];e.setAttribute(l,n.toString())}},s=e=>{let t=document.createElement("canvas");return t.width=e.width,t.height=e.height,d(t,[["id",e.id],["class",e.classes],["style",e.style],["title",e.title],["tabindex",e.tabindex],["role",e.role]]),e.fallback&&(t.textContent=e.fallback),{ctx:typeof t.getContext=="function"?t.getContext("2d"):null,$canvas:t}},o=(e,t)=>{e.lineWidth&&(t.lineWidth=e.lineWidth),e.strokeStyle&&(t.strokeStyle=e.strokeStyle)},r=(e,t)=>{e.fillStyle&&(t.fillStyle=e.fillStyle)};var P=(e,t)=>{let{x:i,y:n,w:l,h:a}=e;if(e.clear){t.clearRect(i,n,l,a);return}if(e.radii){r(e,t),o(e,t),t.beginPath(),t.roundRect(i,n,l,a,e.radii),e.fillStyle&&t.fill(),e.strokeStyle&&t.stroke();return}e.fillStyle&&(r(e,t),t.fillRect(i,n,l,a)),e.strokeStyle&&(o(e,t),t.strokeRect(i,n,l,a))},g=(e,t)=>{let{points:i}=e;r(e,t),o(e,t),t.beginPath();for(let n=0;n<i.length;n++){let l=i[n];n===0?t.moveTo(l[0],l[1]):t.lineTo(l[0],l[1])}e.closed&&t.closePath(),e.fillStyle&&t.fill(),e.strokeStyle&&t.stroke()},y=(e,t)=>{let{x:i,y:n,w:l,h:a}=e,f=new Path2D;return e.radii?f.roundRect(i,n,l,a,e.radii):f.rect(i,n,l,a),t&&(e.fillStyle&&(r(e,t),t.fill(f)),e.strokeStyle&&(o(e,t),t.stroke(f))),f},C=(e,t)=>{let{cx:i,cy:n,r:l}=e,a=e.startAngleRad===void 0?0:e.startAngleRad,f=e.endAngleRad===void 0?2*Math.PI:e.endAngleRad;t.beginPath(),r(e,t),o(e,t),t.arc(i,n,l,a,f),e.fillStyle&&t.fill(),e.strokeStyle&&(o(e,t),t.stroke())};export{s as canvas,C as circle,r as fill,g as path,P as rect,y as rectPath,o as stroke};
//# sourceMappingURL=mz-canvas.esm.js.map
