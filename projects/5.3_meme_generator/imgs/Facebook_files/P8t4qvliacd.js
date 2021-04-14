if (self.CavalryLogger) { CavalryLogger.start_js(["Lwe9j+7"]); }

__d("useHostedRouteEntityKey",["getCometEntityKey","react","useHostedRoute"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(){var a=b("useHostedRoute")(),c=h.useMemo(function(){return a?b("getCometEntityKey")(a):null},[a]);return c}}),null);
__d("CometLeftRailBreadcrumbLink.react",["CometLink.react","TetraText.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){var c=a.isCurrentPage;c=c===void 0?!1:c;a=a.linkInfo;var d="secondary",e=a.url!=null||a.onPress!=null,f=a.replace!=null?a.replace:!1;e=e?h.jsx(b("CometLink.react"),{"aria-current":c?"page":void 0,color:d,href:a.url,onClick:a.onPress,replace:f,target:f===!0?"_self":void 0,weight:"normal",children:a.label}):a.label;return h.jsx(b("TetraText.react"),{color:d,type:"meta3",children:e})}}),null);
__d("CometLeftRailBreadcrumbs.react",["fbt","CometLeftRailBreadcrumbLink.react","TetraText.react","TetraTextPairing.react","gkx","react"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=h||b("react");function a(a){var c=a.breadcrumbs;a=a.label;var d=" \u203a ",e=c.map(function(a,e){return i.jsxs(i.Fragment,{children:[e===0?null:i.jsx(b("TetraText.react"),{color:"tertiary",type:"meta3",children:d}),i.jsx(b("CometLeftRailBreadcrumbLink.react"),{isCurrentPage:e===c.length-1,linkInfo:a})]},e)});return i.jsx("div",{"aria-label":(a=a)!=null?a:g._("Trilha de navega\u00e7\u00e3o"),"data-testid":void 0,role:"navigation",suppressHydrationWarning:!b("gkx")("708253"),children:i.jsx(b("TetraTextPairing.react"),{body:e,level:2})})}}),null);
__d("CometLeftRailLayoutContext",["react"],(function(a,b,c,d,e,f){"use strict";var g;a=g||b("react");c=a.createContext(!1);e.exports=c}),null);
__d("CometLeftRailPrimaryContext",["react"],(function(a,b,c,d,e,f){"use strict";var g;a=g||b("react");c=a.createContext(!1);e.exports=c}),null);
__d("CometLeftRailAndMainContentContainer.react",["BaseHeadingContext","BaseRow.react","BaseRowItem.react","CometLeftRailLayoutContext","CometLeftRailPrimaryContext","CometRouterFocusRegion.react","gkx","react","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=g||b("react"),j={container:{display:"j83agx80",flexGrow:"buofh1pr",minHeight:"dp1hu0rb",position:"l9j0dhe7",zIndex:"du4w35lb"},containerWithMinWidth:{minWidth:"ka73uehy"},contentArea:{display:"j83agx80",flexDirection:"cbu4d94t",flexGrow:"buofh1pr",minHeight:"dp1hu0rb",minWidth:"hpfvmrgz",position:"l9j0dhe7",zIndex:"du4w35lb"},contentAreaWithLeftRailPrimary:{"@media (max-width: 899px)":{display:"hlyrhctz"}},hideLeftRail:{display:"mkhogb32"},leftRail:{flexShrink:"pfnyh3mw",minHeight:"dp1hu0rb",overflowAnchor:"rek2kq2y",width:"o36gj0jk",zIndex:"tkr6xdv7"},leftRailPrimaryResponsive:{"@media (max-width: 900px)":{width:"oali7pvx"}},leftRailSecondaryResponsive:{"@media (max-width: 900px)":{display:"ahb00how"}},mainContent:{display:"j83agx80",minHeight:"dp1hu0rb"}};function a(a){var c=a.hideLeftRail;c=c===void 0?!1:c;var d=a.isLeftRailResponsive;d=d===void 0?!1:d;var e=a.leftRailContent,f=a.leftRailHeading,g=a.leftRailPrimary;g=g===void 0?!1:g;var k=a.leftRailRole;k=k===void 0?"navigation":k;var l=a.mainContent,m=a.mainContentHeading;a=a.testid;a=i.useContext(b("BaseHeadingContext"));a=i.jsx("div",{className:(h||(h=b("stylex")))(j.contentArea,g===!0&&j.contentAreaWithLeftRailPrimary),children:i.jsx(b("CometRouterFocusRegion.react"),{children:i.jsx(b("CometLeftRailLayoutContext").Provider,{value:!0,children:i.jsx(b("BaseHeadingContext").Provider,{value:a+1,children:l})})})});l=k==="main";return i.jsx(b("BaseRow.react"),{align:"start",testid:void 0,xstyle:[j.container,!d&&j.containerWithMinWidth],children:i.jsxs(b("CometLeftRailPrimaryContext").Provider,{value:g,children:[i.jsx(b("BaseRowItem.react"),{"aria-label":f,role:k,suppressHydrationWarning:!b("gkx")("708253"),xstyle:[j.leftRail,d&&!l&&j.leftRailSecondaryResponsive,d&&l&&j.leftRailPrimaryResponsive,c&&j.hideLeftRail],children:e}),i.jsx(b("BaseRowItem.react"),{"aria-label":m,expanding:!0,role:l?"complementary":"main",suppressHydrationWarning:!b("gkx")("708253"),xstyle:j.mainContent,children:a})]})})}}),null);
__d("CometLeftRailListItemSeparator.react",["react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){var b=a.marginHorizontal;b=b===void 0?12:b;a=a.marginVertical;a=a===void 0?8:a;return h.jsx("div",{className:"s1tcr66n",role:"separator",style:{margin:a+"px "+b+"px"}})}}),null);
__d("CometLeftRailComponent.react",["BaseHeadingContext","CometBase.react","CometLeftRailListItemSeparator.react","CometLeftRailPrimaryContext","CometRouteRenderType","CometScrollView.react","CurrentUser","gkx","react","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=g||b("react"),j=b("gkx")("708253"),k=b("gkx")("1217157"),l=b("gkx")("1745416"),m={headerOnGemini:{marginTop:"ourw01k9"},leftRailContainer:{backgroundColor:"hybvsw6c",boxSizing:"cjfnh4rs",display:"j83agx80",flexDirection:"cbu4d94t",minHeight:"dp1hu0rb",position:"l9j0dhe7",top:"kr520xx4",width:"o36gj0jk","@media (max-width: 899px)":{height:"spg0vajj",position:"aip8ia32"},"@media (min-width: 900px)":{maxHeight:"so2p5rfc",position:"hxa2dpaq"}},leftRailContainerInBizWeb:{backgroundColor:"hybvsw6c",boxSizing:"cjfnh4rs",display:"j83agx80",flexDirection:"cbu4d94t",minHeight:"dp1hu0rb",position:"l9j0dhe7",top:"kr520xx4",width:"o36gj0jk"},leftRailContainerInDialog:{top:"kr520xx4","@media (max-width: 899px)":{minHeight:"pnfry9he",position:"ow71b3p4"},"@media (min-width: 900px)":{minHeight:"wrtwqps9",position:"owhy4gn4"}},leftRailContainerPermalink:{top:"be9z9djy","@media (max-width: 899px)":{height:"jyyn76af",position:"aip8ia32"},"@media (min-width: 900px)":{position:"hxa2dpaq"}},leftRailContainerPermalinkBlue:{top:"t38bcc6f","@media (max-width: 899px)":{position:"aip8ia32"},"@media (min-width: 900px)":{position:"hxa2dpaq"}},leftRailContainerPermalinkBlueLoggedOut:{top:"kr520xx4","@media (max-width: 899px)":{minHeight:"pnfry9he",position:"ow71b3p4"},"@media (min-width: 900px)":{minHeight:"wrtwqps9",position:"owhy4gn4"}},leftRailContainerPushViewHeader:{boxShadow:"q0erg9cb",flexShrink:"pfnyh3mw",height:"byvelhso"},leftRailPrimaryContainer:{"@media (max-width: 899px)":{height:"spskuzq3",position:"ow71b3p4",top:"iy36qjp1"}},leftRailPrimaryShadow:{"@media (max-width: 899px)":{display:"hlyrhctz"}},leftRailShadow:{backgroundImage:"kd0sc8dh",backgroundRepeat:"sl8jk4me",backgroundSize:"ie5zihkj",bottom:"i09qtzwb",end:"rm3jng1j",pointerEvents:"hzruof5a",position:"pmk7jnqg",top:"kr520xx4",width:"c0wkt4kp"},primaryNav:{marginTop:"aov4n071"},primaryNavExpanding:{display:"j83agx80",flexDirection:"cbu4d94t",flexGrow:"buofh1pr"},primaryNavWithSearch:{marginTop:"aahdfvyu"},scrollDropShadow:{borderBottom:"s1tcr66n",marginEnd:"wkznzc2l",marginStart:"dhix69tm"},search:{marginBottom:"n851cfcs",marginTop:"aahdfvyu"}};function a(a){var c=a.footer,d=a.header,e=a.isCometLeftRailInDialog;e=e===void 0?!1:e;var f=a.isNonCometLeftRailWithoutTopSpacing;f=f===void 0?!1:f;var g=a.onLeftRailScroll,n=a.primaryNav,o=a.primaryNavExpanding;o=o===void 0?!1:o;var p=a.search,q=a.secondaryNav,r=a.shouldHidePushViewHeader;r=r===void 0?!1:r;var s=a.testid;s=a.xstyle;a=i.useContext(b("BaseHeadingContext"));var t=b("CometRouteRenderType").useIsPushView(),u=i.useContext(b("CometLeftRailPrimaryContext")),v=i.useState(!1),w=v[0],x=v[1];v=i.useCallback(function(a){g&&g(a),x(!0)},[g]);var y=i.useCallback(function(){x(!1)},[]);return i.jsxs("div",{className:(h||(h=b("stylex")))(l?m.leftRailContainerInBizWeb:m.leftRailContainer,!t&&j&&m.leftRailContainerPermalink,!t&&!j&&!f&&!l&&m.leftRailContainerPermalinkBlue,!t&&!j&&!b("CurrentUser").isLoggedIn()&&m.leftRailContainerPermalinkBlueLoggedOut,u===!0&&m.leftRailPrimaryContainer,e===!0&&m.leftRailContainerInDialog,s),"data-testid":void 0,children:[t&&!r&&i.jsx("div",{className:(h||(h=b("stylex")))(m.leftRailContainerPushViewHeader)}),k?i.jsx(b("CometBase.react"),{xstyle:m.headerOnGemini,children:d}):d,p!=null&&i.jsx(b("CometBase.react"),{xstyle:m.search,children:p}),(d!=null||p!=null)&&w&&i.jsx("div",{className:(h||(h=b("stylex")))(m.scrollDropShadow)}),i.jsx(b("CometScrollView.react"),{onScroll:v,onScrollTop:y,showsHorizontalScrollIndicator:!1,children:i.jsxs(b("BaseHeadingContext").Provider,{value:a+1,children:[n!=null&&i.jsx("div",{className:(h||(h=b("stylex")))(d!=null&&p==null&&m.primaryNav,d!=null&&p!=null&&m.primaryNavWithSearch,o&&m.primaryNavExpanding),children:n}),n!=null&&q!=null?i.jsx(b("CometLeftRailListItemSeparator.react"),{}):null,q]})}),c,i.jsx("div",{className:h(m.leftRailShadow,u===!0&&m.leftRailPrimaryShadow)})]})}}),null);
__d("SearchCometScopedTypeaheadPlaceholder.react",["BaseGlimmer.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){return h.jsx(b("BaseGlimmer.react"),{className:"dhix69tm oygrvhab wkznzc2l kvgmc6g5 tv7at329 owxd89k7 n3ddgdk9 h2jyy9rg br7hx15l",index:0})}}),null);