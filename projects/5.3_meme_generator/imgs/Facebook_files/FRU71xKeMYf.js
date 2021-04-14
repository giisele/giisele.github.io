if (self.CavalryLogger) { CavalryLogger.start_js(["kQ2Y+dB"]); }

__d("CometFeedStoryVideoCTAScreenCallToAction_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryVideoCTAScreenCallToAction_attachment",selections:[{alias:"cta_screen_renderer",args:[{kind:"Literal",name:"supported",value:["StoryAttachmentLinkOpenCallToActionRenderer","StoryAttachmentLeadGenCallToActionRenderer","StoryAttachmentGetOfferCallToActionRenderer"]}],concreteType:null,kind:"LinkedField",name:"call_to_action_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryVideoCTAScreenCallToAction_attachment",fragmentName:"CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentLinkOpenCallToActionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryVideoCTAScreenCallToAction_attachment",fragmentName:"CometFeedStoryVideoCTAScreenLeadGenCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentLeadGenCallToActionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryVideoCTAScreenCallToAction_attachment",fragmentName:"CometFeedStoryVideoCTAScreenGetOfferCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentGetOfferCallToActionRenderer",abstractKey:null}],storageKey:'call_to_action_renderer(supported:["StoryAttachmentLinkOpenCallToActionRenderer","StoryAttachmentLeadGenCallToActionRenderer","StoryAttachmentGetOfferCallToActionRenderer"])'}],type:"StoryAttachment",abstractKey:null};e.exports=a}),null);
__d("CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_link",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"link_display",storageKey:null},{alias:null,args:[{kind:"Literal",name:"scale",value:2}],concreteType:"Image",kind:"LinkedField",name:"link_video_endscreen_icon",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:"link_video_endscreen_icon(scale:2)"},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"LinkOpenActionLink",abstractKey:null}],storageKey:null}]};e.exports=a}),null);
__d("CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_link",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"link_display",storageKey:null},{alias:null,args:[{kind:"Literal",name:"scale",value:2}],concreteType:"Image",kind:"LinkedField",name:"link_video_endscreen_icon",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:"link_video_endscreen_icon(scale:2)"},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"LinkOpenActionLink",abstractKey:null}],storageKey:null}],type:"StoryAttachmentLinkOpenCallToActionRenderer",abstractKey:null};e.exports=a}),null);
__d("CometFeedStoryVideoCTAScreenOverlay_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryVideoCTAScreenOverlay_attachment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_links",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"link_style",storageKey:null}],type:"LinkOpenActionLink",abstractKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometFeedStoryVideoCTAScreenCallToAction_attachment"}],type:"StoryAttachment",abstractKey:null};e.exports=a}),null);
__d("useCometFeedStoryVideoCTAScreenOverlay_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometFeedStoryVideoCTAScreenOverlay_attachment",selections:[{args:null,kind:"FragmentSpread",name:"CometFeedStoryVideoCTAScreenOverlay_attachment"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_links",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],type:"StoryAttachment",abstractKey:null};e.exports=a}),null);
__d("CometFeedStoryVideoCTAScreenCallToAction.react",["CometFeedStoryVideoCTAScreenCallToAction_attachment.graphql","CometRelay","CometTrackingNodeProvider.react","react"],(function(a,b,c,d,e,f){"use strict";var g,h,i=h||b("react");function a(a){var c=a.attachment;a=babelHelpers.objectWithoutPropertiesLoose(a,["attachment"]);return c.cta_screen_renderer==null?null:i.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:186,children:i.jsx(b("CometRelay").MatchContainer,{match:c.cta_screen_renderer,props:a})})}c=b("CometRelay").createSuspenseFragmentContainer_DEPRECATED(a,{attachment:g!==void 0?g:g=b("CometFeedStoryVideoCTAScreenCallToAction_attachment.graphql")});e.exports=c}),null);
__d("CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react",["BaseButtonOrLink_DEPRECATED.react","CometImage.react","TetraText.react","react","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=g||b("react"),j={image:{height:"qypqp5cg",width:"q676j6op"},interactiveArea:{height:"datstx6m",position:"pmk7jnqg",start:"j9ispegn",width:"k4urcfbm"},root:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"btwxx1t3",position:"l9j0dhe7",textAlign:"hzawbc8m"},smallImage:{height:"jnigpg78",width:"odw8uiq3"},smallText:{lineHeight:"jiuqdcnw",paddingStart:"b3onmgus",position:"l9j0dhe7",whiteSpace:"g0qnabr5"},text:{lineHeight:"jiuqdcnw",paddingStart:"tw6a2znq",position:"l9j0dhe7",whiteSpace:"g0qnabr5"},textLinkDisplay:{marginTop:"aahdfvyu",maxWidth:"nlp0uwpm"}};function a(a){var c=a.buttonSize;c=c===void 0?"large":c;var d=a.iconImageUri,e=a.label,f=a.linkDisplay,g=a.title,k=a.triggerRef;a=babelHelpers.objectWithoutPropertiesLoose(a,["buttonSize","iconImageUri","label","linkDisplay","title","triggerRef"]);return c==="small"?i.jsxs("div",{className:(h||(h=b("stylex")))(j.root),children:[i.jsx(b("CometImage.react"),{alt:e,src:d,xstyle:j.smallImage}),i.jsx("div",{className:(h||(h=b("stylex")))(j.smallText),children:i.jsx(b("TetraText.react"),{color:"white",type:"body4",children:g})}),i.jsx(b("BaseButtonOrLink_DEPRECATED.react"),babelHelpers["extends"]({},a,{label:e,ref:k,xstyle:j.interactiveArea}))]}):i.jsxs("div",{className:(h||(h=b("stylex")))(j.root),children:[i.jsx(b("CometImage.react"),{alt:e,src:d,xstyle:j.image}),i.jsxs("div",{className:(h||(h=b("stylex")))(j.text),children:[i.jsx(b("TetraText.react"),{color:"white",type:"headlineEmphasized3",children:g}),f!=null&&c!=="large_without_link"?i.jsx("div",{className:(h||(h=b("stylex")))(j.textLinkDisplay),children:i.jsx(b("TetraText.react"),{color:"white",numberOfLines:1,type:"headline3",children:f})}):null]}),i.jsx(b("BaseButtonOrLink_DEPRECATED.react"),babelHelpers["extends"]({},a,{label:e,ref:k,xstyle:j.interactiveArea}))]})}}),null);
__d("CometFeedStoryVideoCTAScreenLinkOpenCallToAction.react",["CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink.graphql","CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react","CometRelay","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){var c,d,e=a.actionLink;a=a.buttonSize;a=a===void 0?"large":a;e=b("CometRelay").useFragment(g!==void 0?g:g=b("CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink.graphql"),e);e=e.action_link;if(e==null||e.url==null||e.title==null)return null;var f=e.url;c=(c=e.title)!=null?c:"";d=(d=e.link_display)!=null?d:"";e=(e=(e=e.link_video_endscreen_icon)==null?void 0:e.uri)!=null?e:"/images/calltoaction/videoendscreen/learnmore_40dp-2x.png";return i.jsx(b("CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react"),{buttonSize:a,href:f,iconImageUri:e,label:c,linkDisplay:d,rel:"nofollow",target:"_blank",title:c})}}),null);
__d("CometFeedStoryVideoCTAScreenOverlay.react",["fbt","BaseButtonOrLink_DEPRECATED.react","CometFeedStoryVideoCTAScreenCallToAction.react","CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react","CometFeedStoryVideoCTAScreenOverlay_attachment.graphql","CometImage.react","CometRelay","CometTrackingNodeProvider.react","TetraText.react","VideoPlayerHooks","VideoPlayerInteractionOverlay.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j,k=i||b("react"),l=["BUTTON_WITH_TEXT_ONLY","ATTACHMENT_AND_ENDSCREEN","VIDEO_DR_STYLE"],m={image:{height:"jnigpg78",width:"odw8uiq3"},interactiveArea:{height:"datstx6m",position:"pmk7jnqg",start:"j9ispegn",width:"k4urcfbm"},root:{alignItems:"bp9cbjyn",bottom:"i09qtzwb",display:"j83agx80",flexDirection:"btwxx1t3",paddingTop:"l29c1vbm",paddingEnd:"gvs12r03",paddingBottom:"j7796vcc",paddingStart:"up7ckamt",position:"pmk7jnqg",start:"j9ispegn"},title:{lineHeight:"jiuqdcnw",paddingStart:"b3onmgus",verticalAlign:"pzggbiyp"}};function n(a){var c=a.iconImageUri,d=a.label,e=a.onClick;a=a.title;var f=k.useState(!1),g=f[0],h=f[1];return k.jsxs("div",{className:(j||(j=b("stylex")))(m.root),onMouseLeave:function(){h(!1)},onMouseOver:function(){h(!0)},children:[k.jsx(b("CometImage.react"),{src:c,xstyle:m.image}),g?k.jsx("div",{className:(j||(j=b("stylex")))(m.title),children:k.jsx(b("TetraText.react"),{color:"white",type:"headlineEmphasized4",children:a})}):null,k.jsx(b("BaseButtonOrLink_DEPRECATED.react"),{label:d,onClick:e,xstyle:m.interactiveArea})]})}var o={content:{display:"j83agx80",flexDirection:"cbu4d94t",justifyContent:"taijpn5t",position:"l9j0dhe7"},root:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",alignItems:"bp9cbjyn",backgroundColor:"iuug3ofb",display:"j83agx80",flexDirection:"cbu4d94t",justifyContent:"taijpn5t",transition:"jnzl11fr"},verticalSpacingBetweenButtons:{height:"jnigpg78"}};function a(a){var c,d=a.adClientToken,e=a.adID,f=a.attachment,i=a.buttonSize;i=i===void 0?"large":i;a=a.ctaScreenOverlayType;f=b("CometRelay").useFragment(h!==void 0?h:h=b("CometFeedStoryVideoCTAScreenOverlay_attachment.graphql"),f);var m=b("VideoPlayerHooks").useController();if(f==null)return null;c=(c=f.action_links)!=null?c:[];c=c[0];if(c!=null&&c.__typename==="LinkOpenActionLink"&&(c.link_style!=null&&l.indexOf(c.link_style)===-1))return null;c=k.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:186,children:k.jsx(b("CometFeedStoryVideoCTAScreenCallToAction.react"),{adClientToken:d,adID:e,attachment:f,buttonSize:i})});d=a==="pausescreen"?k.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:206,children:k.jsx(b("CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react"),{buttonSize:i,iconImageUri:"/images/video/play_circle_40dp-2x.png",label:g._("reproduzir"),onClick:function(){m.play("user_initiated")},title:g._("Retomar v\u00eddeo")})}):null;e=a==="endscreen"?k.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:188,children:i==="small"?k.jsx(b("CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react"),{buttonSize:i,iconImageUri:"/images/video/replay_20dp-2x.png",label:g._("reproduzir"),onClick:function(){m.play("user_initiated")},title:g._("Assistir novamente")}):k.jsx(n,{iconImageUri:"/images/video/replay_20dp-2x.png",label:g._("reproduzir"),onClick:function(){m.play("user_initiated")},title:g._("Assistir novamente")})}):null;return i==="small"?k.jsx(b("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay,{children:k.jsxs("div",{className:(j||(j=b("stylex")))(o.root),children:[k.jsxs("div",{className:(j||(j=b("stylex")))(o.content),children:[d,d!=null&&c!=null?k.jsx("div",{className:(j||(j=b("stylex")))(o.verticalSpacingBetweenButtons)}):null,c]}),c!=null&&e!=null?k.jsx("div",{className:(j||(j=b("stylex")))(o.verticalSpacingBetweenButtons)}):null,k.jsx("div",{className:(j||(j=b("stylex")))(o.content),children:e})]})}):k.jsx(b("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay,{children:k.jsxs("div",{className:(j||(j=b("stylex")))(o.root),children:[k.jsxs("div",{className:(j||(j=b("stylex")))(o.content),children:[d,d!=null&&c!=null?k.jsx("div",{className:(j||(j=b("stylex")))(o.verticalSpacingBetweenButtons)}):null,c]}),e]})})}}),null);
__d("CometObserveChildrenRenderedAnyDOM.react",["react","useLayoutEffect_SAFE_FOR_SSR","useStable"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react"),i={attributes:!1,characterData:!0,childList:!0,subtree:!1};function a(a){var c=a.children,d=a.onChanged,e=h.useRef(d);b("useLayoutEffect_SAFE_FOR_SSR")(function(){e.current=d;return function(){e.current=null}},[d]);var f=h.useRef(!1),g=h.useRef(null),j=h.useRef(null);a=b("useStable")(function(){function a(){var a=e.current;if(a){var b,c=f.current;b=((b=j.current)==null?void 0:b.firstChild)!=null;f.current=b;b!==c&&a(b)}}function b(b){if(b!==j.current){j.current=b;var c=g.current;c&&(c.disconnect(),g.current=null);if(b==null)a();else{c=new MutationObserver(function(b){a()});g.current=c;c.observe(b,i);a()}}}return b});h.useEffect(function(){return function(){g.current&&(g.current.disconnect(),g.current=null)}},[]);return c({containerElementRefCallback:a})}c=h.memo(a);e.exports=c}),null);
__d("VideoPlayerObserveChildrenRenderedAnyDOM.react",["CometObserveChildrenRenderedAnyDOM.react","react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function a(a){var c=a.children;a=a.onChanged;var d=h.useCallback(function(a){a=a.containerElementRefCallback;return h.jsx("div",{className:"ttbfdpzt hwddc3l5 ggxiycxj hihg3u9x do00u71z",ref:a,children:c})},[c]);return h.jsx(b("CometObserveChildrenRenderedAnyDOM.react"),{onChanged:a,children:d})}c=h.memo(a);e.exports=c}),null);
__d("useCometFeedStoryVideoCTAScreenOverlay",["CometFeedStoryVideoCTAScreenOverlay.react","CometRelay","VideoPlayerHooks","VideoPlayerObserveChildrenRenderedAnyDOM.react","react","useCometFeedStoryVideoCTAScreenOverlay_attachment.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react"),j=["LinkOpenActionLink","LeadGenActionLink"];function a(a){var c=a.adClientToken,d=a.adID,e=a.attachment;a=a.buttonSize;a=a===void 0?"large":a;e=b("CometRelay").useFragment(g!==void 0?g:g=b("useCometFeedStoryVideoCTAScreenOverlay_attachment.graphql"),e);var f=i.useState(!1),h=f[0];f=f[1];var k=b("VideoPlayerHooks").useEnded(),l=b("VideoPlayerHooks").useIsFullscreen(),m=b("VideoPlayerHooks").usePaused(),n=i.useState(!1),o=n[0],p=n[1];n=e==null?void 0:e.action_links.some(function(a){return j.includes(a.__typename)});i.useEffect(function(){m||p(!0)},[m]);l=!l&&n===!0;n=l&&k?"endscreen":l&&o&&m?"pausescreen":null;k=e!=null&&n!=null?i.jsx(b("VideoPlayerObserveChildrenRenderedAnyDOM.react"),{onChanged:f,children:i.jsx(b("CometFeedStoryVideoCTAScreenOverlay.react"),{adClientToken:c,adID:d,attachment:e,buttonSize:a,ctaScreenOverlayType:n})}):null;return{ctaScreenOverlayElement:k,ctaScreenOverlayType:n,isRenderedCTAScreenOverlay:h}}}),null);
__d("CometComposerStoryLinkAttachmentPreviewContext",["react"],(function(a,b,c,d,e,f){"use strict";f.CometComposerStoryLinkAttachmentPreviewContextProvider=a;f.useCometComposerStoryLinkAttachmentPreviewContext=c;var g,h=g||b("react"),i=h.createContext(!1);function a(a){return h.jsx(i.Provider,{value:!0,children:a.children})}function c(){return h.useContext(i)}}),null);