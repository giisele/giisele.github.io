if (self.CavalryLogger) { CavalryLogger.start_js(["SSyqA\/G"]); }

__d("ProfileCometAppCollectionItemHovercardWrapper_timelineAppCollectionItem.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometAppCollectionItemHovercardWrapper_timelineAppCollectionItem",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"Entity",abstractKey:"__isEntity"}],storageKey:null}],type:"TimelineAppCollectionItem",abstractKey:null};e.exports=a}),null);
__d("ProfileCometAppSectionNonSelfFriendsActionRenderer_actionsRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"ProfileCometAppSectionNonSelfFriendsActionRenderer_actionsRenderer$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}]};e.exports=a}),null);
__d("ProfileCometAppSectionNonSelfFriendsActionRenderer_actionsRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometAppSectionNonSelfFriendsActionRenderer_actionsRenderer",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"TimelineAppSectionFriendsNonSelfActionRenderer",abstractKey:null};e.exports=a}),null);
__d("ProfileCometAppCollectionContext",["react"],(function(a,b,c,d,e,f){"use strict";var g;a=g||b("react");c={collectionID:null};d=a.createContext(c);e.exports=d}),null);
__d("ProfileCometAppCollectionItemHovercardWrapper.react",["ActorHovercard.react","CometRelay","ProfileCometAppCollectionItemHovercardWrapper_timelineAppCollectionItem.graphql","canRenderHovercardForGraphQLEntityType","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){var c,d=a.children;a=a.timelineAppCollectionItem;a=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometAppCollectionItemHovercardWrapper_timelineAppCollectionItem.graphql"),a);c=(c=a.node)!=null?c:{};var e=c.id;c=c.url;return e!=null&&c!=null&&c!==""&&b("canRenderHovercardForGraphQLEntityType")((c=a.node)==null?void 0:c.__typename)?i.jsx(b("ActorHovercard.react"),{actorID:e,children:d}):d(null)}}),null);
__d("ProfileCometAppSectionSearchContext",["react"],(function(a,b,c,d,e,f){"use strict";var g;a=g||b("react");c=a.createContext({isSearchEnabled:!1,refetch:null,searchQuery:null,setGlimmerComponent:function(){},setRefetch:function(){},setSearchQuery:function(){}});e.exports=c}),null);
__d("ProfileCometAppSectionSearchControl.react",["fbt","ix","CometRoundedTextInput.react","ProfileCometAppSectionSearchContext","TetraIcon.react","debounce","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=i||b("react");function a(){var a=j.useContext(b("ProfileCometAppSectionSearchContext")),c=a.isSearchEnabled;a=a.setSearchQuery;var d=j.useState(""),e=d[0],f=d[1],i=j.useCallback(b("debounce")(a?a:function(){},100),[a]);d=j.useCallback(function(a){a.target instanceof HTMLInputElement&&(f(a.target.value),i(a.target.value))},[f,i]);return!c?null:j.jsx(b("CometRoundedTextInput.react"),{icon:j.jsx(b("TetraIcon.react"),{color:"tertiary",icon:b("fbicon")._(h("491282"),16)}),label:"Label for text input",onChange:d,placeholder:g._("Pesquisar"),value:e})}}),null);
__d("ProfileCometAppSectionNonSelfFriendsActionRenderer.react",["CometRelay","CometRow.react","CometRowItem.react","ProfileCometAppSectionNonSelfFriendsActionRenderer_actionsRenderer.graphql","ProfileCometAppSectionSearchControl.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){a=a.actionsRenderer;b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometAppSectionNonSelfFriendsActionRenderer_actionsRenderer.graphql"),a);return i.jsx(b("CometRow.react"),{paddingHorizontal:0,paddingTop:0,spacing:8,verticalAlign:"center",children:i.jsx(b("CometRowItem.react"),{children:i.jsx(b("ProfileCometAppSectionSearchControl.react"),{})})})}}),null);