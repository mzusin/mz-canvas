/* 
mzCanvas a TypeScript-based library for manipulating canvas element and 2D graphics in the browser.
Version: 1.0.14
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-canvas
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var h=(e,n)=>{for(let i of n){let t=i[1];if(t===void 0)continue;let l=i[0];e.setAttribute(l,t.toString())}},d=(e,n)=>{for(let i of e){let t=i[1];if(t===void 0)continue;let l=i[0];n[l]=t}},g=e=>{let n=document.createElement("canvas");h(n,[["id",e.id],["class",e.classes],["style",e.style],["title",e.title],["tabindex",e.tabindex],["role",e.role],["aria-label",e.ariaLabel]]),e.fallback&&(n.textContent=e.fallback);let i=typeof n.getContext=="function"?n.getContext("2d",e.contextAttributes):null;return n.width=e.width,n.height=e.height,{ctx:i,$canvas:n}},r=(e,n)=>{d([["lineWidth",e.lineWidth],["strokeStyle",e.strokeStyle],["lineCap",e.lineCap],["lineJoin",e.lineJoin],["miterLimit",e.miterLimit],["lineDashOffset",e.lineDashOffset]],n),e.lineDashSegments&&n.setLineDash(e.lineDashSegments)},s=(e,n)=>{e.fillStyle!==void 0&&(n.fillStyle=e.fillStyle),d([["shadowOffsetX",e.shadowOffsetX],["shadowOffsetY",e.shadowOffsetY],["shadowBlur",e.shadowBlur],["shadowColor",e.shadowColor]],n)};var u=(e,n)=>{let{x1:i,y1:t,x2:l,y2:a}=e;n.save(),n.beginPath(),n.moveTo(i,t),n.lineTo(l,a),e.strokeStyle&&(r(e,n),n.stroke()),n.restore()},C=(e,n)=>{let{x1:i,y1:t,x2:l,y2:a}=e,o=new Path2D;return o.moveTo(i,t),o.lineTo(l,a),n&&(n.save(),e.strokeStyle&&(r(e,n),n.stroke(o)),n.restore()),o},v=(e,n)=>{let{x:i,y:t,w:l,h:a}=e;if(e.clear){n.clearRect(i,t,l,a);return}if(e.radii){n.save(),s(e,n),r(e,n),n.beginPath(),n.roundRect(i,t,l,a,e.radii),e.fillStyle&&n.fill(),e.strokeStyle&&n.stroke(),n.restore();return}n.save(),e.fillStyle&&(s(e,n),n.fillRect(i,t,l,a)),e.strokeStyle&&(r(e,n),n.strokeRect(i,t,l,a)),n.restore()},R=(e,n)=>{let{x:i,y:t,w:l,h:a}=e,o=new Path2D;return e.radii?o.roundRect(i,t,l,a,e.radii):o.rect(i,t,l,a),n&&(n.save(),e.fillStyle&&(s(e,n),n.fill(o)),e.strokeStyle&&(r(e,n),n.stroke(o)),n.restore()),o},k=(e,n)=>{let{points:i}=e;n.save(),s(e,n),r(e,n),n.beginPath();for(let t=0;t<i.length;t++){let l=i[t];t===0?n.moveTo(l[0],l[1]):n.lineTo(l[0],l[1])}e.closed&&n.closePath(),e.fillStyle&&n.fill(),e.strokeStyle&&n.stroke(),n.restore()},m=(e,n)=>{let{points:i}=e,t=new Path2D;for(let l=0;l<i.length;l++){let a=i[l];l===0?t.moveTo(a[0],a[1]):t.lineTo(a[0],a[1])}return e.closed&&t.closePath(),n&&(n.save(),e.fillStyle&&(s(e,n),n.fill(t)),e.strokeStyle&&(r(e,n),n.stroke(t)),n.restore()),t},c=(e,n)=>{let{cx:i,cy:t,r:l}=e,a=e.startAngleRad===void 0?0:e.startAngleRad,o=e.endAngleRad===void 0?2*Math.PI:e.endAngleRad;n.save(),n.beginPath(),s(e,n),r(e,n),n.arc(i,t,l,a,o,e.counterclockwise),e.fillStyle&&n.fill(),e.strokeStyle&&(r(e,n),n.stroke()),n.restore()},S=(e,n)=>{let{cx:i,cy:t,r:l}=e,a=e.startAngleRad===void 0?0:e.startAngleRad,o=e.endAngleRad===void 0?2*Math.PI:e.endAngleRad,f=new Path2D;return f.arc(i,t,l,a,o,e.counterclockwise),n&&(n.save(),e.fillStyle&&(s(e,n),n.fill(f)),e.strokeStyle&&(r(e,n),n.stroke(f)),n.restore()),f};export{g as canvas,c as circle,S as circlePath,s as fill,u as line,C as linePath,k as polynomial,m as polynomialPath,v as rect,R as rectPath,d as setContextProps,r as stroke};
//# sourceMappingURL=mz-canvas.esm.js.map
