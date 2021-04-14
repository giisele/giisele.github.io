if (self.CavalryLogger) { CavalryLogger.start_js(["D5YkVz5"]); }

__d("CometNotificationsDropdownMenuButton_notification.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"isToast"},{defaultValue:!1,kind:"LocalArgument",name:"menuUseEntryPoint"}],kind:"Fragment",metadata:null,name:"CometNotificationsDropdownMenuButton_notification",selections:[{condition:"menuUseEntryPoint",kind:"Condition",passingValue:!1,selections:[{args:[{kind:"Variable",name:"isToast",variableName:"isToast"}],kind:"FragmentSpread",name:"CometNotificationsDropdownMenu_notification"}]},{alias:null,args:null,kind:"ScalarField",name:"notif_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"notif_type",storageKey:null},{condition:"menuUseEntryPoint",kind:"Condition",passingValue:!0,selections:[{kind:"ClientExtension",selections:[{alias:"id_for_entrypoint",args:null,kind:"ScalarField",name:"__id",storageKey:null}]}]}],type:"Notification",abstractKey:null};e.exports=a}),null);
__d("CometNotificationsDropdownMenuContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3886344821433375",metadata:{},name:"CometNotificationsDropdownMenuContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometNotificationsListItemAttachment_notification.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"isToast"}],kind:"Fragment",metadata:null,name:"CometNotificationsListItemAttachment_notification",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"notif_attachments",plural:!0,selections:[{kind:"InlineFragment",selections:[{documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemFriendRequestAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"FriendRequestNotifAttachment",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemInlineCTAAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"InlineCTACometNotifAttachment",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemPageInviteAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"PageInviteNotifAttachment",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemQuickPromotionAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"QuickPromotionNotifAttachment",abstractKey:null},{condition:"isToast",kind:"Condition",passingValue:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemInlineSurveyAttachment_attachment",fragmentPropName:"attachment",kind:"ModuleImport"}],type:"InlineSurveyNotifAttachment",abstractKey:null}]}],storageKey:null}],type:"Notification",abstractKey:null};e.exports=a}),null);
__d("CometNotificationsListItem_actor.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometNotificationsListItem_actor",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"Actor",abstractKey:"__isActor"};e.exports=a}),null);
__d("CometNotificationsListItem_notification.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Variable",name:"isToast",variableName:"isToast"};return{argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"hideIcon"},{defaultValue:!1,kind:"LocalArgument",name:"isToast"},{defaultValue:!1,kind:"LocalArgument",name:"menuUseEntryPoint"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometNotificationsListItem_notification",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"notif_id",storageKey:null},{args:[a,{kind:"Variable",name:"menuUseEntryPoint",variableName:"menuUseEntryPoint"}],kind:"FragmentSpread",name:"CometNotificationsDropdownMenuButton_notification"},{args:[a],kind:"FragmentSpread",name:"CometNotificationsListItemAttachment_notification"},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"body",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"notif_attachments",plural:!0,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"StructuredSurveySession",kind:"LinkedField",name:"inline_survey",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],type:"InlineSurveyNotifAttachment",abstractKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:56},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:56}],concreteType:"Image",kind:"LinkedField",name:"notif_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"notif_type",storageKey:null},{args:null,kind:"FragmentSpread",name:"useCometNotificationURL_notification"},{alias:null,args:null,kind:"ScalarField",name:"www_url_should_open_in_blank_target",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"seen_state",storageKey:null},{alias:"creation_time",args:null,concreteType:"CreationTimeWithRelativeText",kind:"LinkedField",name:"creation_time_with_relative_text",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"timestamp",storageKey:null}],storageKey:null},{condition:"hideIcon",kind:"Condition",passingValue:!1,selections:[{alias:null,args:null,concreteType:"GlyphIconData",kind:"LinkedField",name:"icon_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"glyph_name",storageKey:null}],storageKey:null}]},{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_hidden",storageKey:null}]}],type:"Notification",abstractKey:null}}();e.exports=a}),null);
__d("getCometNotificationURL_notification.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"getCometNotificationURL_notification"};e.exports=a}),null);
__d("useCometNotificationURL_notification.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometNotificationURL_notification",selections:[{kind:"InlineDataFragmentSpread",name:"getCometNotificationURL_notification",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'}]}],type:"Notification",abstractKey:null};e.exports=a}),null);
__d("useNotificationsImpressionLogger",["gkx","react","requireDeferred","usePartialViewImpression"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react"),i=b("requireDeferred")("NotifImpressionEventsFalcoEvent").__setRef("useNotificationsImpressionLogger");function a(a){var c=a.actorId,d=a.loggerContext,e=a.notifId,f=a.trackingData;a=h.useCallback(function(a){a=a.visibleDuration;var b={notification_data:{duration:String(a),logger_context:d,notif_id:e,user_id:c},ref:"www_tab",tracking:JSON.stringify(f)};i.onReady(function(a){a=a.log;return a(function(){return b})})},[f,d,e,c]);a=b("usePartialViewImpression")({onImpressionEnd:a});return[a,null]}}),null);
__d("CometNotificationsListItemSeenContext",["react"],(function(a,b,c,d,e,f){"use strict";var g;a=g||b("react");c=a.createContext(function(){});e.exports=c}),null);
__d("CometNotificationsDropdownMenuContainer.entrypoint",["CometNotificationsDropdownMenuContainerQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){a={encoded_notif_id:a.encodedNotifId,scale:b("WebPixelRatio").get()};return{queries:{dropdownQueryRef:{parameters:b("CometNotificationsDropdownMenuContainerQuery$Parameters"),variables:a}}}},root:b("JSResourceForInteraction")("CometNotificationsDropdownMenuContainer.react").__setRef("CometNotificationsDropdownMenuContainer.entrypoint")};e.exports=a}),null);
__d("CometNotificationsDropdownMenuButton.react",["fbt","CometListCellHoverButton.react","CometNotificationsDropdownMenuButton_notification.graphql","CometNotificationsDropdownMenuContainer.entrypoint","CometRelay","JSResourceForInteraction","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j=i||b("react"),k=b("JSResourceForInteraction")("CometNotificationsDropdownMenu.react").__setRef("CometNotificationsDropdownMenuButton.react"),l=b("requireDeferred")("OpenOptionsMenuFalcoEvent").__setRef("CometNotificationsDropdownMenuButton.react");function a(a){var c=b("CometRelay").useFragment(h!==void 0?h:h=b("CometNotificationsDropdownMenuButton_notification.graphql"),a.notification),d=a.userId,e=j.useCallback(function(){l.onReady(function(a){a=a.log;return a(function(){return{notification_data:{alert_id:c==null?void 0:c.notif_id,logger_context:"www_tab",notif_type:c==null?void 0:c.notif_type,user_id:d},ref:"www_tab"}})})},[c,d]);return(c==null?void 0:c.id_for_entrypoint)==null?j.jsx(b("CometListCellHoverButton.react"),{hidden:a.hidden,label:g._("Op\u00e7\u00f5es para esta notifica\u00e7\u00e3o"),onFocusChange:a.onFocusChange,onHoverChange:a.onHoverChange,onMenuStateChange:a.onMenuStateChange,onPress:e,popoverProps:{notification:c},popoverResource:k,popoverTriggerType:"lazy",popoverType:"menu"}):j.jsx(b("CometListCellHoverButton.react"),{entryPointParams:{encodedNotifId:c.id_for_entrypoint},hidden:a.hidden,label:g._("Op\u00e7\u00f5es para esta notifica\u00e7\u00e3o"),onFocusChange:a.onFocusChange,onHoverChange:a.onHoverChange,onMenuStateChange:a.onMenuStateChange,onPress:e,popoverEntryPoint:b("CometNotificationsDropdownMenuContainer.entrypoint"),popoverProps:{},popoverTriggerType:"entryPoint",popoverType:"menu"})}}),null);
__d("CometNotificationsListItemAttachment.react",["CometErrorBoundary.react","CometNotificationsListItemAttachment_notification.graphql","CometRelay","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){var c=a.date,d=a.notification;a=a.onPress;return i.jsx(b("CometErrorBoundary.react"),{children:i.jsx(j,{date:c,notification:d,onPress:a})})}function j(a){var c=a.date,d=a.notification,e=a.onPress;a=b("CometRelay").useFragment(g!==void 0?g:g=b("CometNotificationsListItemAttachment_notification.graphql"),d);d=a.notif_attachments;if(d==null)return null;a=d.map(function(a,d){return i.jsx(b("CometRelay").MatchContainer,{match:a,props:{date:c,notifAttachments:a,onPress:e}},d)}).filter(Boolean);return a.length===0?null:a}}),null);
__d("UntruncatedNotificationsTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:UntruncatedNotificationsLoggerConfig")}),null);
__d("cometNotificationsListItemIcon",["ix","ImageIconSource","getReactionSVGSource"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h={app_facebook:g("958818"),app_messenger:g("958823"),app_pages:g("958824"),app_rooms:g("1395467"),arrows_up_down:g("958826"),badge_heart:g("958827"),bar_chart:g("958828"),bookmark:g("958830"),breaking_news:g("958831"),briefcase:g("958832"),cake:g("958833"),calendar:g("958835"),camcorder_live:g("958836"),card:g("1289629"),caution_triangle:g("958837"),circle_3:g("958838"),comment:g("958852"),comment_star:g("958851"),"default":g("958829"),"desktop-mobile":g("1964681"),direct:g("958854"),friend_add:g("958857"),friends:g("958858"),fundraiser:g("958859"),games:g("958821"),group:g("958860"),headphones:g("2007797"),heart_lock:g("1250959"),high_five_hands:g("958861"),instagram_reels:g("1951540"),marketplace:g("894424"),notif_messages_question_live:g("1495236"),"notif-star-tip":g("1970274"),pencil:g("958866"),pencil_checkmark:g("958865"),photo:g("958867"),pin:g("958868"),play_circle:g("958869"),poke:g("958870"),politics:g("958871"),polls:g("958872"),posts:g("958873"),profile_circle:g("958874"),relationship:g("958875"),safety_check:g("958876"),share:g("958877"),shield:g("958878"),shops:g("1686153"),spark_ar:g("1079479"),stories:g("1819883"),tag:g("958882"),topics:g("958883"),watch_tv:g("958885"),water:g("958886")};function i(a){return new(b("ImageIconSource"))(h[a]||h["default"],28,28)}function a(a,c){if(c!=null){c=b("getReactionSVGSource")(c);if(c!=null)return new(b("ImageIconSource"))(c,28,28)}return a!=null?i(a):null}}),null);
__d("isDevelopersURI",["isFacebookURI"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){return b("isFacebookURI")(a)&&a.getSubdomain()==="developers"}}),null);
__d("getCometNotificationURL",["CometRelay","ConstUriUtils","absoluteToRelative","getCometNotificationURL_notification.graphql","isBusinessURI","isDevelopersURI"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g;function a(a){a=b("CometRelay").readInlineData(g!==void 0?g:g=b("getCometNotificationURL_notification.graphql"),a);a=a==null?void 0:a.url;if(a==null)return null;var c=b("ConstUriUtils").getUri(a);return c==null?a:window.location.hostname.startsWith("www.facebook.com")?a:b("isBusinessURI")(c)||b("isDevelopersURI")(c)?a:b("absoluteToRelative")(a)}}),null);
__d("useCometNotificationURL",["CometRelay","getCometNotificationURL","useCometNotificationURL_notification.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g;function a(a){a=b("CometRelay").useFragment(g!==void 0?g:g=b("useCometNotificationURL_notification.graphql"),a);return b("getCometNotificationURL")(a)}}),null);
__d("XCometNotificationsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/notifications/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("useScrollToNotif",["CometRouteMatch","XCometNotificationsControllerRouteBuilder","react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");a=function(a){var c,d=(c=b("CometRouteMatch")).useCurrentRouteMatcher(c.MatchFunctions.urlMatchFunction);c=c.useHostedRouteMatcher(c.MatchFunctions.urlMatchFunction);c=a!=null?c(a):!1;a=d(b("XCometNotificationsControllerRouteBuilder").buildURL({}).toString());d=h.useRef(c&&!a);return[c,d]};f.useScrollToNotif=a}),null);
__d("CometNotificationsListItem.react",["fbt","CometBadge.react","CometBoldedEntityRenderer","CometEmojiTransform","CometEmoticonTransform","CometFocusTableContext","CometNotificationsDropdownMenuButton.react","CometNotificationsListItemAttachment.react","CometNotificationsListItemSeenContext","CometNotificationsListItem_actor.graphql","CometNotificationsListItem_notification.graphql","CometNotificationsTimestamp.react","CometPressable.react","CometRelay","CometTextWithEntitiesRelay.react","FocusWithinHandler.react","JSResourceForInteraction","TetraAccessoryListCell.react","TetraIcon.react","UntruncatedNotificationsTypedLoggerLite","cometNotificationsListItemIcon","mergeRefs","promiseDone","qex","react","requireDeferred","scrollIntoView","stylex","useCometNotificationURL","useCometPreloader","useCometRouterDispatcher","useMenuButtonVisibilityState","useNotificationsImpressionLogger","useScrollToNotif","useVisibilityObserver"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k,l=j||b("react"),m=b("requireDeferred")("NotifClickEventsFalcoEvent").__setRef("CometNotificationsListItem.react"),n=b("JSResourceForInteraction")("CometNotificationsMarkReadMutation").__setRef("CometNotificationsListItem.react"),o=0,p={hiddenLabel:{clip:"q45zohi1",clipPath:"g0aa4cga",position:"pmk7jnqg",wordBreak:"dxrwds1f"},listItemContainer:{position:"l9j0dhe7"},pressable:{alignItems:"bp9cbjyn",display:"j83agx80",height:"m7zwrmfr",justifyContent:"taijpn5t",paddingStart:"b3onmgus",width:"odw8uiq3"},spacer:{height:"cyypbtt7",width:"fwizqjfa"}},q={"*":[b("CometBoldedEntityRenderer")]},r=[b("CometEmoticonTransform")(),b("CometEmojiTransform")()],s=h!==void 0?h:h=b("CometNotificationsListItem_actor.graphql"),aa=i!==void 0?i:i=b("CometNotificationsListItem_notification.graphql");function a(a){var c=a.actor,d=a.hideMenuButton,e=d===void 0?!1:d;d=a.isFromPageNotification;var f=a.isNotificationsRoute,h=f===void 0?!1:f;f=a.loggerContext;var i=f===void 0?"www_tab":f;f=a.notification;var j=a.onClick,t=a.onClose,u=a.preventLocalNavigation,v=a.replace,w=a.routeTarget,x=a.shouldPrefetch;x=x===void 0?!1:x;var y=a.showSelectedState,ba=y===void 0?!1:y,z=a.trackingData;y=b("CometRelay").useFragment(s,c);var A=b("CometRelay").useFragment(aa,f),B=b("useCometNotificationURL")(A);a=A.body;c=A.creation_time;var C=A.id;f=A.notif_attachments;var D=A.notif_id,E=A.notif_image,F=A.notif_type,G=A.seen_state,H=A.tracking,I=l.useRef(null),J=y==null?void 0:y.id,K=(y=d)!=null?y:!1;d=babelHelpers["extends"]({navigation_source:"notifications_click"},F!=null?{notif_type:F}:null);y=l.useMemo(function(){var a;return(a=z)!=null?a:{notif_tracking:H}},[H,z]);var ca={onNavigate:t,passthroughProps:{initialTracePolicy:"comet.notifications",notification_id:(t=D)!=null?t:void 0,notificationTracking:y,notificationType:F,ref:"notification"},prefetchQueries:x,preventLocalNavigation:(t=u)!=null?t:!1,productAttribution:{tap_point:"via_notification"},replace:(x=v)!=null?x:void 0,routeTarget:K?"content":(u=w)!=null?u:void 0,target:Boolean(A.www_url_should_open_in_blank_target)?"_blank":void 0,traceParams:d,url:(t=B)!=null?t:void 0},L=b("CometRelay").useRelayEnvironment(),da="MAIN_SURFACE",M="unknown",N=b("useCometRouterDispatcher")();v=b("useScrollToNotif").useScrollToNotif(B);var ea=v[0],O=v[1],P=O.current;x=l.useContext(b("CometFocusTableContext"));w=x.FocusCell;u=x.FocusRow;var fa=(d=w)!=null?d:l.Fragment,ga=(t=u)!=null?t:l.Fragment;l.useLayoutEffect(function(){I.current!=null&&P&&(b("scrollIntoView")(I.current,{behavior:"auto",verticalAlign:"center"}),O.current=!1)},[P,O]);var ha=l.useCallback(function(){C!=null&&J!=null&&(j&&j(),m.onReady(function(a){a=a.log;return a(function(){var a;return{notification_data:{alert_id:(a=D)!=null?a:"",logger_context:(a=i)!=null?a:"",to_user:J},ref:h?"notifications_route":"www_tab",tracking:JSON.stringify(z)}})}),b("promiseDone")(n.load().then(function(a){return a(L,{input:{is_comet:!0,notif_id:C,source:M}})})))},[J,L,C,j,z,D,i,h]),Q=l.useCallback(function(){C!=null&&b("promiseDone")(n.load().then(function(a){return a(L,{input:{environment:da,is_comet:!0,notif_id:C,source:M}})}))},[L,C]),R=a;v=c==null?void 0:c.timestamp;x=E==null?void 0:E.uri;w=b("useMenuButtonVisibilityState")();var ia=w[0];d=w[1];var S=d.setListItemHovered,ja=d.setMenuBtnFocused,ka=d.setMenuBtnHovered,la=d.setMenuOpened,T=G==="UNSEEN_AND_UNREAD"||G==="SEEN_BUT_UNREAD";u=l.useCallback(function(){N&&B!=null&&T&&b("qex")._("1590992")&&N.prefetchRouteQueries(B,{})},[N,T,B]);t=b("useCometPreloader")("button",u,u);var U=t[0],V=t[1],ma=l.useCallback(function(){S(!1),V()},[V,S]),na=l.useCallback(function(a){S(!0),U(a)},[U,S]);a=b("useNotificationsImpressionLogger")({actorId:J,loggerContext:i,notifId:D,trackingData:y});var W=a[0],oa=a[1],pa=l.useContext(b("CometNotificationsListItemSeenContext")),X=b("useVisibilityObserver")({onVisible:function(){pa(C)}}),qa=l.useMemo(function(){if(i==="www_tab"||i==="beeper")return b("mergeRefs")(W,I,X);else return I},[X,i,W]),Y=R==null?void 0:(c=R.text)==null?void 0:c.length;l.useEffect(function(){Y!=null&&Y>o&&b("UntruncatedNotificationsTypedLoggerLite").log({length:Y,notification_type:F})},[F,Y]);if(C==null||R==null||x==null||G==null||v==null)return null;E=new Date(v*1e3);var Z=G==="SEEN_AND_READ";d=(w=A.icon_data)==null?void 0:w.reaction_type;t=(u=A.icon_data)==null?void 0:u.glyph_name;y=b("cometNotificationsListItemIcon")(t,d);a=y!=null?{backgroundColor:"transparent",icon:l.jsx(b("TetraIcon.react"),{color:"white",icon:y}),size:28,type:"activityBadge"}:null;var ra=l.jsx(b("CometNotificationsTimestamp.react"),{date:E,seenAndRead:Z}),sa={addOn:a,shape:"circle",size:56,source:{uri:x},type:"profile-photo"},ta={override_component:l.jsx(b("CometNotificationsListItemAttachment.react"),{date:E,notification:A,onPress:Q}),type:"designOverride_Notifications_bottomAddOn"};c=A==null?void 0:A.is_hidden;if(c===!0)return null;var $=f.find(function(a){return a.inline_survey!=null})!=null;return l.jsx(b("FocusWithinHandler.react"),{children:function(a,c){return l.jsx(ga,{children:l.jsxs("div",{className:(k||(k=b("stylex")))(p.listItemContainer),onMouseEnter:na,onMouseLeave:ma,ref:qa,role:"row",children:[oa,l.jsx(b("TetraAccessoryListCell.react"),{addOnBottom:ta,addOnPrimary:sa,addOnSecondary:{addOn:Z?l.jsx("div",{className:(k||(k=b("stylex")))(p.spacer)}):l.jsx(b("CometPressable.react"),{expanding:!0,onPress:Q,overlayDisabled:!0,role:"none",testid:void 0,xstyle:p.pressable,children:l.jsx(b("CometBadge.react"),{color:"blue",isProfileBadge:!0,size:12})}),type:"body"},addOnSecondaryVerticalAlign:$?"start":"center",body:l.jsxs(l.Fragment,{children:[Z?null:l.jsx("div",{className:(k||(k=b("stylex")))(p.hiddenLabel),children:g._("N\u00e3o lida")}),l.jsx(b("CometTextWithEntitiesRelay.react"),{renderers:q,textWithEntities:R,transforms:r})]}),bodyColor:Z?"secondary":"primary",bodyLineLimit:3,linkProps:ca,meta:ra,onPress:ha,role:"none",selected:ea&&ba,testid:void 0}),F!=="friend"&&F!=="page_invite"&&!$?l.jsx(fa,{children:l.jsx(b("CometNotificationsDropdownMenuButton.react"),{hidden:e||K||!(a&&c)&&!ia,notification:A,onFocusChange:ja,onHoverChange:ka,onMenuStateChange:la,userId:J})}):null]})})}})}c=l.memo(a);e.exports=c}),null);