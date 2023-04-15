import{n as o}from"./_plugin-vue2_normalizer.61652a7c.js";const r={props:{scoreColor:String,score:{type:Number,required:!0},strokeWidth:{type:Number,default(){return 2}}},computed:{getClass(){let t="",s="";switch(!0){case 33>=this.score:t="fast",s="stroke-red";break;case 66>=this.score:t="medium",s="stroke-orange";break;default:t="slow",s="stroke-green"}return this.scoreColor!==void 0&&(s=`stroke-${this.scoreColor}`),`${t} ${s}`}}};var n=function(){var s=this,e=s._self._c;return e("svg",{staticClass:"aioseo-seo-site-score-svg",attrs:{viewBox:"0 0 34 34",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{staticClass:"aioseo-seo-site-score__background",attrs:{"stroke-width":s.strokeWidth,fill:"none",cx:"17",cy:"17",r:17-s.strokeWidth/2}}),e("circle",{staticClass:"aioseo-seo-site-score__circle",class:s.getClass,attrs:{"stroke-width":s.strokeWidth,"stroke-dasharray":`${s.score},100`,"stroke-linecap":"round",fill:"none",cx:"17",cy:"17",r:17-s.strokeWidth/2}})])},a=[],i=o(r,n,a,!1,null,null,null,null);const c=i.exports;const l={};var _=function(){var s=this,e=s._self._c;return e("svg",{staticClass:"aioseo-seo-site-score-svg-loading",attrs:{viewBox:"0 0 33.83098862 33.83098862",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{staticClass:"aioseo-seo-site-score-loading__circle",attrs:{fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431","stroke-linecap":"round","stroke-width":"2","stroke-dasharray":"93","stroke-dashoffset":"90"}})])},u=[],d=o(l,_,u,!1,null,null,null,null);const p=d.exports;const g={components:{SvgSeoSiteScore:c,SvgSeoSiteScoreLoading:p},props:{score:Number,loading:Boolean,description:String},data(){return{strings:{analyzing:this.$t.__("Analyzing...",this.$td)}}}};var v=function(){var s=this,e=s._self._c;return e("div",{staticClass:"aioseo-site-score"},[s.loading?e("svg-seo-site-score-loading"):s._e(),s.loading?s._e():e("svg-seo-site-score",{attrs:{score:s.score}}),e("div",{staticClass:"aioseo-score-amount-wrapper"},[s.loading?s._e():e("div",{staticClass:"aioseo-score-amount"},[e("span",{staticClass:"score"},[s._v(s._s(s.score))]),e("span",{staticClass:"total"},[s._v("/ 100")])]),s.loading?s._e():e("div",{staticClass:"score-description",domProps:{innerHTML:s._s(s.description)}}),s.loading?e("div",{staticClass:"score-analyzing"},[s._v(" "+s._s(s.strings.analyzing)+" ")]):s._e()])],1)},f=[],m=o(g,v,f,!1,null,null,null,null);const h=m.exports;export{h as C,c as S};
