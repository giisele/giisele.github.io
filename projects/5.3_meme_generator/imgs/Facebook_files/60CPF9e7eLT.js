if (self.CavalryLogger) { CavalryLogger.start_js(["elPlnrP"]); }

__d("CometSinglePostRootQuery.graphql",["CometFeedUnit_feedUnit$normalization.graphql","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"UFI2CommentsProvider_commentsKey"},c={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextEnableComment"},d={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsAdPreview"},e={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsAggregatedShare"},f={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsStorySet"},g={defaultValue:null,kind:"LocalArgument",name:"displayCommentsFeedbackContext"},h={defaultValue:null,kind:"LocalArgument",name:"feedLocation"},i={defaultValue:null,kind:"LocalArgument",name:"feedbackSource"},j={defaultValue:null,kind:"LocalArgument",name:"focusCommentID"},k={defaultValue:null,kind:"LocalArgument",name:"privacySelectorRenderLocation"},l={defaultValue:null,kind:"LocalArgument",name:"renderLocation"},m={defaultValue:null,kind:"LocalArgument",name:"scale"},n={defaultValue:null,kind:"LocalArgument",name:"storyID"},o={defaultValue:!1,kind:"LocalArgument",name:"useDefaultActor"},p=[{kind:"Variable",name:"id",variableName:"storyID"}];return{fragment:{argumentDefinitions:[a,c,d,e,f,g,h,i,j,k,l,m,n,o],kind:"Fragment",metadata:null,name:"CometSinglePostRootQuery",selections:[{alias:null,args:p,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometFeedUnit_feedUnit"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[g,c,d,e,f,h,i,j,k,m,o,n,l,a],kind:"Operation",name:"CometSinglePostRootQuery",selections:[{alias:null,args:p,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{args:null,fragment:b("CometFeedUnit_feedUnit$normalization.graphql"),kind:"FragmentSpread"}],type:"FeedUnit",abstractKey:"__isFeedUnit"},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]},params:{id:"5647003865324549",metadata:{},name:"CometSinglePostRootQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometSinglePostRoot.react",["CometContentArea.react","CometErrorRoot.react","CometFeedHighlightedStoriesContext","CometFeedStoryGlimmer.react","CometFeedUnit.react","CometFeedWidthStyles","CometInteractionSourceContext","CometPlaceholder.react","CometRelay","CometRouteParams","CometSSRMultipassBoundary.react","CometSinglePostRootQuery.graphql","CometStoryRenderLocationContext.react","PagesLogger","PagesLoggerEventEnum","PagesPermalinkImpressionFalcoEvent","RelayUFI2CommentsKeyContext","VideoAutoplayLocalScopeProvider.react","VideoPlayerAutoplayRulesProvider","cr:1832048","react","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i,j=h||b("react"),k={feedUnitContainer:{marginBottom:"nzypyw8j",marginEnd:"nhadk0th",marginStart:"t7yuvbsa",marginTop:"tr9rh885",minWidth:"glvd648r",width:"oh7imozk"},wrapper:{alignItems:"ll8tlv6m",display:"j83agx80",justifyContent:"taijpn5t",width:"k4urcfbm"}},l=b("CometFeedWidthStyles").getFeedWidthStyles(),m=0,n=g!==void 0?g:g=b("CometSinglePostRootQuery.graphql");function o(){return j.jsx(b("CometContentArea.react"),{children:j.jsx("div",{className:(i||(i=b("stylex")))(k.wrapper),children:j.jsx("div",{className:i(k.feedUnitContainer),children:j.jsx(b("CometFeedStoryGlimmer.react"),{})})})})}function p(a){var c=a.singlePostRootQueryReference,d=a.storyID;a=b("CometRelay").usePreloadedQuery(n,c);c=c.variables;a=a.node;var e=j.useMemo(function(){return new Set([d])},[d]),f=j.useState(null),g=f[0];f=f[1];return a==null||g!=null?j.jsx(b("CometErrorRoot.react"),{routeProps:{fourZerofour:!0}}):j.jsx(b("CometContentArea.react"),{children:j.jsx(b("CometInteractionSourceContext").Provider,{value:8,children:j.jsx(b("RelayUFI2CommentsKeyContext").Provider,{value:c.UFI2CommentsProvider_commentsKey,children:j.jsx(b("CometStoryRenderLocationContext.react").Provider,{value:c.renderLocation,children:j.jsx(b("CometFeedHighlightedStoriesContext").Provider,{value:e,children:j.jsx("div",{className:(i||(i=b("stylex")))(k.wrapper),children:j.jsx("div",{className:i(k.feedUnitContainer,l.feedContainer),children:j.jsx(b("CometFeedUnit.react"),{feedUnit:a,onError:f,position:m,variables:c})})})})})})})})}function a(a){var c=b("CometRouteParams").useRouteParams();c=String(c==null?void 0:c.story_token);var d=a.props.routeProps,e=d.isViewerAdmin,f=d.pageID;j.useEffect(function(){e&&(b("PagesLogger").log(f,b("PagesLoggerEventEnum").IMPRESSION,"admin_permalink_view",null,["core_biz_growth"]),b("PagesPermalinkImpressionFalcoEvent").log(function(){return{event_data:{},event_location:"notification",page_id:f}}))},[f,e]);d=b("VideoPlayerAutoplayRulesProvider").provideAutoplayRules("default_feed");return j.jsxs(b("CometPlaceholder.react"),{fallback:j.jsx(o,{}),children:[j.jsx(b("CometSSRMultipassBoundary.react"),{fallback:j.jsx(o,{}),id:"feed",children:j.jsx(b("VideoAutoplayLocalScopeProvider.react"),{autoplayLocalRules:d,children:j.jsx(p,{singlePostRootQueryReference:a.queries.singlePostRootQueryReference,storyID:c})})}),b("cr:1832048")&&a.queries.loggedOutCTAfooterDataQueryReference&&j.jsx(b("cr:1832048"),{footerDataQueryReference:a.queries.loggedOutCTAfooterDataQueryReference})]})}}),null);
__d("isStringNullOrWhitespaceOnly",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){return a==null||a.trim()===""}}),null);