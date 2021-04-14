if (self.CavalryLogger) { CavalryLogger.start_js(["Yjd1r2k"]); }

__d("CometFormNumberStepper.react",["fbt","ix","BaseTextInput.react","CometFormInputWrapper.react","CometPressable.react","CometPressableChildrenWithOverlay.react","CometTintedIcon.react","fbicon","react","recoverableViolation","stylex","useBaseInputValidators"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=i||b("react"),l={button:{appearance:"dwo3fsh8",backgroundColor:"g5ia77u1",borderStyle:"ow4ym5g4",borderWidth:"auili1gw",boxSizing:"rq0escxv",cursor:"nhd2j8a9",marginBottom:"oygrvhab",marginEnd:"cxmmr5t8",marginStart:"hcukyx3x",marginTop:"kvgmc6g5",paddingBottom:"qt6c0cv9",paddingEnd:"rz4wbd8a",paddingStart:"a8nywdso",paddingTop:"jb3vyjys",position:"l9j0dhe7",textAlign:"i1ao9s8h",zIndex:"du4w35lb",alignSelf:"o8rfisnq"},buttonChild:{height:"jnigpg78",paddingTop:"pybr56ya",paddingEnd:"d1544ag0",paddingBottom:"f10w8fjw",paddingStart:"tw6a2znq",width:"odw8uiq3"},buttonDisabled:{cursor:"rj84mg9z"},input:{appearance:"i7zh9fkn",backgroundColor:"g5ia77u1",borderTop:"gcieejh5",borderEnd:"bn081pho",borderBottom:"humdl8nn",borderStart:"izx4hr6d",boxSizing:"rq0escxv",color:"oo9gr5id",fontSize:"jagab5yi",fontWeight:"knj5qynh",lineHeight:"fo6rh5oj",outline:"lzcic4wl",paddingBottom:"osnr6wyh",paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a",paddingTop:"p0x8y401",width:"k4urcfbm","::-webkit-inner-spin-button":{appearance:"j6asxxtt",marginTop:"tub8yoxk",marginEnd:"m4pajkqc",marginBottom:"l2w9msy4",marginStart:"atu3xdcb"},"::-webkit-outer-spin-button":{appearance:"f3ca4sy5",marginTop:"fmqv64c0",marginEnd:"iq6ygqs2",marginBottom:"al8xmw5g",marginStart:"otdoqm2w"}}};function m(a){var c=a.disabled,d=a.icon,e=a.label;a=a.onPress;return k.jsx(b("CometPressable.react"),{"aria-label":e,disabled:c,display:"inline",onPress:a,overlayOffset:10,overlayRadius:12,xstyle:l.button,children:function(a){a=a.overlay;return k.jsx("div",{className:(j||(j=b("stylex")))(l.buttonChild,c&&l.buttonDisabled),children:k.jsx(b("CometPressableChildrenWithOverlay.react"),{overlay:a,children:k.jsx(b("CometTintedIcon.react"),{color:c?"fds-gray-30":"fds-primary-icon",icon:d})})})}})}function a(a,c){var d=a.disabled,e=d===void 0?!1:d;d=a.helperText;var f=a.hideStepperButtons;f=f===void 0?!1:f;var i=a.label,j=a.max,n=a.min,o=n===void 0?0:n,p=a.onBlur,q=a.onValueChange,r=a.placeholder;n=a.step;var s=n===void 0?1:n;n=a.testid;n=a.validationState;var t=a.validator,u=a.value;t=b("useBaseInputValidators")({validator:t,value:(a=u)!=null?a:0});a=t.topResultReason;t=t.topResultType;var v=t!=="CORRECT"?t:n,w=e||u==null||u<=o,x=e||u!=null&&j!=null&&u>=j;t=function(){if(w)return;if(u!=null)q(Math.max(u-s,o));else{var a;q((a=j)!=null?a:o)}};n=function(){if(x)return;if(u!=null){var a;q(Math.min(u+s,(a=j)!=null?a:Number.MAX_SAFE_INTEGER))}else q(o)};if(o<0){b("recoverableViolation")("Minimum value cannot be less than 0, given: "+o,"comet_ui");return null}else if(j!=null&&j>Number.MAX_SAFE_INTEGER){b("recoverableViolation")("Maximum value cannot be more than than Number.MAX_SAFE_INTEGER, given: "+j,"comet_ui");return null}return k.jsx(b("CometFormInputWrapper.react"),{auxContent:f?null:k.jsxs(k.Fragment,{children:[k.jsx(m,{disabled:w,icon:b("fbicon")._(h("518013"),20),label:g._("Diminuir"),onPress:t}),k.jsx(m,{disabled:x,icon:b("fbicon")._(h("487090"),20),label:g._("Aumentar"),onPress:n})]}),cursor:"text",disabled:e,helperText:a!=null?a:d,label:i,validationState:v,value:u,children:function(a){var d=a.focused,f=a.helperTextID;a=a.id;return k.jsx(b("BaseTextInput.react"),{"aria-describedby":f,"aria-invalid":v==="ERROR",autoComplete:"off",disabled:e,id:a,max:j,min:o,onBlur:p,onChange:function(a){a=((a=a.target.value)!=null?a:"").split("").filter(function(a){return/^[0-9]$/.test(a)}).join("");q(a!==""?Number(a):null)},onKeyDown:function(a){if(a.ctrlKey||a.metaKey||a.altKey)return;switch(a.key){case"e":case"E":case"-":case".":case",":a.preventDefault();a.stopPropagation();return}},pattern:"[0-9]*",placeholder:d?r:null,ref:c,step:s,suppressFocusRing:!0,testid:void 0,type:"number",value:(f=u)!=null?f:"",xstyle:l.input})}})}c=k.forwardRef(a);e.exports=c}),null);
__d("CometFormSelectBase.react",["fbt","ix","CometComponentWithKeyCommands.react","CometDeferredPopoverTrigger.react","CometEntryPointPopoverTrigger.react","CometFormInputWrapper.react","CometKeys","CometLazyPopoverTrigger.react","CometPopoverLoadingState.react","JSResourceReference","TetraIcon.react","TetraProfilePhoto.react","fbicon","react","stylex","unrecoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j,k=i||b("react");function a(a){var c=a.align,d=a.ariaLabel,e=a.defaultIcon,f=a.disabled,i=f===void 0?!1:f;f=a.entryPointParams;var l=a.helperText,m=a.label,n=a.labelRef,o=a.popoverEntryPoint,p=a.popoverProps,q=a.popoverResource,r=a.position;r=r===void 0?"below":r;var s=a.selectedIcon,t=a.selectedLabel,u=a.testid;u=a.truncate;var v=u===void 0?!0:u,w=a.validationState,x=a.value,y=(u=s)!=null?u:e;a=function(a,c){return k.jsx(b("CometComponentWithKeyCommands.react"),{commandConfigs:[{command:{key:b("CometKeys").ENTER},description:g._("Mostrar menu"),handler:c},{command:{key:b("CometKeys").SPACE},description:g._("Mostrar menu"),handler:c},{command:{key:b("CometKeys").DOWN},description:g._("Mostrar menu"),handler:c}],children:k.jsx(b("CometFormInputWrapper.react"),{addOnPrimary:y!=null&&(y.type==="icon"?k.jsx("div",{className:"eluhq753 dati1w0a",children:k.jsx(b("TetraIcon.react"),{color:"secondary",icon:y.iconProps})}):y.type==="profile-picture"?k.jsx("div",{className:"pybr56ya dati1w0a",children:k.jsx(b("TetraProfilePhoto.react"),babelHelpers["extends"]({},y.iconProps,{size:32}))}):null),ariaLabel:d,auxContent:k.jsx("div",{className:"hv4rvrfc o8rfisnq",children:k.jsx(b("TetraIcon.react"),{color:"primary",icon:b("fbicon")._(h("481882"),16)})}),cursor:"pointer",disabled:i,helperText:l,label:m,labelRef:n,onPress:c,shrinkLabelOnFocus:!1,validationState:w,value:x,children:function(c){var d=c.helperTextID;c=c.id;return k.jsx("div",{"aria-describedby":d,"aria-invalid":w==="ERROR",className:y!=null?"kw0a5h6o":"k4urcfbm","data-testid":void 0,id:c,ref:a,children:k.jsx("div",{className:(j||(j=b("stylex"))).dedupe({"appearance-1":"dwo3fsh8","background-color-1":"g5ia77u1","border-style-0.2":"ow4ym5g4","border-width-0.2":"auili1gw","cursor-1":"nhd2j8a9","margin-bottom-1":"oygrvhab","margin-end-1":"cxmmr5t8","margin-start-1":"hcukyx3x","margin-top-1":"kvgmc6g5","position-1":"l9j0dhe7","text-align-1":"i1ao9s8h","z-index-1":"du4w35lb","box-sizing-1":"rq0escxv","color-1":"oo9gr5id","display-1":"j83agx80","font-size-1":"jagab5yi","font-weight-1":"knj5qynh","line-height-1":"fo6rh5oj","outline-0.1":"lzcic4wl","padding-bottom-1":"osnr6wyh","padding-end-1":"hv4rvrfc","padding-start-1":"dati1w0a","padding-top-1":"p0x8y401","width-1":"k4urcfbm"},i?{"color-1":"erlsw9ld","cursor-1":"rj84mg9z","pointer-events-1":"hzruof5a"}:null,y!=null?{"padding-start-1":"c088b7cy"}:null),children:k.jsx("span",{className:v?"g0qnabr5 ltmttdrg stjgntxs ni8dbmo4":"",children:(d=t)!=null?d:"\xa0"})})})}})})};if(f!=null&&o!=null)return k.jsx(b("CometEntryPointPopoverTrigger.react"),{align:c,entryPointParams:f,fallback:k.jsx(b("CometPopoverLoadingState.react"),{}),otherProps:babelHelpers["extends"]({},p,{truncate:v}),popoverEntryPoint:o,popoverType:"menu",position:r,children:a});if(q==null)throw b("unrecoverableViolation")("popoverResource is null","comet_ui");return q instanceof b("JSResourceReference")?k.jsx(b("CometLazyPopoverTrigger.react"),{align:c,fallback:k.jsx(b("CometPopoverLoadingState.react"),{}),popoverProps:babelHelpers["extends"]({},p,{truncate:v}),popoverResource:q,popoverType:"menu",position:r,children:a}):k.jsx(b("CometDeferredPopoverTrigger.react"),{align:c,fallback:k.jsx(b("CometPopoverLoadingState.react"),{}),popoverProps:babelHelpers["extends"]({},p,{truncate:v}),popoverResource:q,popoverType:"menu",position:r,children:a})}}),null);
__d("CometFormSelect.react",["CometFormSelectBase.react","JSResourceForInteraction","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react"),i=b("JSResourceForInteraction")("CometFormSelectMenuImpl.react").__setRef("CometFormSelect.react");function a(a){var c=a.align,d=a.ariaLabel,e=a.aux,f=a.defaultIcon,g=a.disabled;g=g===void 0?!1:g;var j=a.footer,k=a.header,l=a.helperText,m=a.label,n=a.labelRef,o=a.onValueChange,p=a.options,q=a.position,r=a.size,s=a.testid;s=a.truncate;s=s===void 0?!0:s;var t=a.validationState,u=a.value;a={aux:e,footer:j!=null?{text:j}:void 0,header:k,onChange:o,options:p,selectedValue:u,size:r};e=i;j=null;k=null;o=p.find(function(a){return a.value===u});u!=null&&o!=null&&(j=o.icon,k=o.label);return h.jsx(b("CometFormSelectBase.react"),{align:r==="full"?"stretch":c,ariaLabel:d,defaultIcon:f==null?void 0:{iconProps:f,type:"icon"},disabled:g,helperText:l,label:m,labelRef:n,popoverProps:a,popoverResource:e,position:q,selectedIcon:j==null?void 0:{iconProps:j,type:"icon"},selectedLabel:k!=null?String(k):null,testid:void 0,truncate:s,validationState:t,value:u})}}),null);
__d("EventCometPressableText.react",["CometPressable.react","TetraIcon.react","TetraText.react","react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h,i=g||b("react"),j={button:{backgroundColor:"g5ia77u1",borderTop:"gcieejh5",borderEnd:"bn081pho",borderBottom:"humdl8nn",borderStart:"izx4hr6d"},buttonContent:{alignItems:"bp9cbjyn",display:"j83agx80"},buttonText:{paddingStart:"pcp91wgn"}};function a(a){var c=a.disabled,d=a.icon,e=a.iconColor;e=e===void 0?"primary":e;var f=a.onPress,g=a.text;a=a.textColor;a=a===void 0?"primary":a;a=i.jsx(b("TetraText.react"),{color:a,type:"body4",children:g});return i.jsx(b("CometPressable.react"),{disabled:c,display:"inline",onPress:f,overlayDisabled:!0,xstyle:j.button,children:d!=null?i.jsxs("div",{className:(h||(h=b("stylex")))(j.buttonContent),children:[i.jsx(b("TetraIcon.react"),{color:e,icon:d}),i.jsx("div",{className:(h||(h=b("stylex")))(j.buttonText),children:a})]}):a})}c=i.memo(a);e.exports=c}),null);