if (self.CavalryLogger) { CavalryLogger.start_js(["BDBB4G5"]); }

__d("CoplayDiscoveryContentContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3711499398971707",metadata:{live:{config_id:"comet_coplay_discovery_rooms_query"}},name:"CoplayDiscoveryContentContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingCoplayRejoinRoomModalContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3837591416325210",metadata:{},name:"CometGamingCoplayRejoinRoomModalContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingGamesRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3883375498420326",metadata:{},name:"CometGamingGamesRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingLeftRailContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3990162721041880",metadata:{},name:"CometGamingLeftRailContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingVideoRootContentQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3975897745831394",metadata:{},name:"CometGamingVideoRootContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingVideoRootHeroBannerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4190449544299027",metadata:{},name:"CometGamingVideoRootHeroBannerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupsCometCrossGroupFeedRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3065250066933330",metadata:{},name:"GroupsCometCrossGroupFeedRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupsCometLeftRailContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4136833213019689",metadata:{},name:"GroupsCometLeftRailContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupsCometLeftRailResponsiveContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4755927894477695",metadata:{},name:"GroupsCometLeftRailResponsiveContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometMarketplaceHashtagFollowButtonContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3370143536356746",metadata:{},name:"CometMarketplaceHashtagFollowButtonContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("MarketplaceBannerContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3880281475399294",metadata:{},name:"MarketplaceBannerContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("MarketplaceCometBrowseFeedLightContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3916944315008291",metadata:{},name:"MarketplaceCometBrowseFeedLightContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometMarketplaceNotificationsListContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4138447572833602",metadata:{},name:"CometMarketplaceNotificationsListContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometMarketplaceHashtagFeedPageHeaderQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4086688864735848",metadata:{},name:"CometMarketplaceHashtagFeedPageHeaderQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometMarketplaceLeftRailNavigationContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3864801000265667",metadata:{},name:"CometMarketplaceLeftRailNavigationContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometBookmarksRoot.entrypoint",["CometClassicHomeLeftRailContainerQuery$Parameters","JSResourceForInteraction","WebPixelRatio","gkx"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){return{queries:{menuContainerQueryReference:{environmentProviderOptions:{ssrBoundary:"root"},parameters:b("CometClassicHomeLeftRailContainerQuery$Parameters"),variables:{numExploreBookmarks:b("gkx")("2029639")?10:9,scale:b("WebPixelRatio").get()}}}}},root:b("JSResourceForInteraction")("CometBookmarksRoot.react").__setRef("CometBookmarksRoot.entrypoint")};e.exports=a}),null);
__d("buildCometGamingRoute.entrypoint",["CometGamingCoplayRejoinRoomModalContainerQuery$Parameters","CometGamingLeftRailContainerQuery$Parameters","JSResourceForInteraction","createContentAreaCompoundEntryPointBuilder"],(function(a,b,c,d,e,f){"use strict";a=b("createContentAreaCompoundEntryPointBuilder")(b("JSResourceForInteraction")("CometGamingRoot.react").__setRef("buildCometGamingRoute.entrypoint"),function(a){return{coplayRejoinRoomModalQueryReference:{parameters:b("CometGamingCoplayRejoinRoomModalContainerQuery$Parameters"),variables:{}},leftRailQueryReference:{parameters:b("CometGamingLeftRailContainerQuery$Parameters"),variables:{}}}});e.exports=a}),null);
__d("CometGamingGamesRoot.entrypoint",["CometGamingGamesRootQuery$Parameters","CoplayDiscoveryContentContainerQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometGamingRoute.entrypoint","gkx","qex"],(function(a,b,c,d,e,f){"use strict";var g=b("WebPixelRatio").get(),h=35,i=b("gkx")("976093"),j=b("gkx")("1250838");function k(){return b("qex")._("2009075")||b("qex")._("2011959")}a=b("buildCometGamingRoute.entrypoint")(b("JSResourceForInteraction")("CometGamingGamesRoot.react").__setRef("CometGamingGamesRoot.entrypoint"),function(a){return{extraProps:{category:a.routeProps.category,cloud_binary_id:a.routeProps.cloud_binary_id,context_source_id:a.routeProps.context_source_id,context_type:a.routeProps.context_type,game_session_id:a.routeProps.game_session_id,gameorlink:a.routeProps.gameorlink,launched_game_id:a.routeProps.launched_game_id,payload:a.routeProps.payload,source:a.routeProps.source},queries:{coplayDiscoveryQuery:{parameters:b("CoplayDiscoveryContentContainerQuery$Parameters"),variables:{is_logged_in:j}},gamesRootQuery:{parameters:b("CometGamingGamesRootQuery$Parameters"),variables:{app_id:a.routeProps.gameorlink,first:h,game_type:a.routeProps.category,hasAppID:!!a.routeProps.gameorlink,is_logged_out:i,launched_game_id:(a=a.routeProps.launched_game_id)!=null?a:"0",scale:g,show_ig_featured_hero_banner:k()}}}}});e.exports=a}),null);
__d("CometGamingVideoRoot.entrypoint",["CometGamingVideoRootContentQuery$Parameters","CometGamingVideoRootHeroBannerQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometGamingRoute.entrypoint"],(function(a,b,c,d,e,f){"use strict";a=b("buildCometGamingRoute.entrypoint")(b("JSResourceForInteraction")("CometGamingVideoRoot.react").__setRef("CometGamingVideoRoot.entrypoint"),function(a){a=a.routeParams;var c=b("WebPixelRatio").get();return{queries:{contentQueryReference:{parameters:b("CometGamingVideoRootContentQuery$Parameters"),variables:{scale:c}},heroBannerQueryReference:{parameters:b("CometGamingVideoRootHeroBannerQuery$Parameters"),variables:{scale:c,videoID:a.video_id}}}}});e.exports=a}),null);
__d("GroupsCometTabRootBEOneAhead",["JSResourceForInteraction"],(function(a,b,c,d,e,f){"use strict";b("JSResourceForInteraction")("GroupsCometTabRoot.react").__setRef("GroupsCometTabRootBEOneAhead");a=null;e.exports=a}),null);
__d("buildCometGroupsTabRoute.entrypoint",["GroupsCometLeftRailContainerQuery$Parameters","GroupsCometLeftRailResponsiveContainerQuery$Parameters","JSResourceForInteraction","WebPixelRatio","cr:1714511","createContentAreaCompoundEntryPointBuilder","gkx"],(function(a,b,c,d,e,f){"use strict";b("cr:1714511");var g=(a=b("gkx")("1619299"))!=null?a:!1;c=b("createContentAreaCompoundEntryPointBuilder")(b("JSResourceForInteraction")("GroupsCometTabRoot.react").__setRef("buildCometGroupsTabRoute.entrypoint"),function(a){a={adminGroupsCount:3,memberGroupsCount:10,scale:b("WebPixelRatio").get()};return g?{leftRailResponsiveQueryReference:{parameters:b("GroupsCometLeftRailResponsiveContainerQuery$Parameters"),variables:a}}:{leftRailQueryReference:{parameters:b("GroupsCometLeftRailContainerQuery$Parameters"),variables:a}}});e.exports=c}),null);
__d("GroupsCometCrossGroupFeedRoot.entrypoint",["GroupsCometCrossGroupFeedRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometGroupsTabRoute.entrypoint","cr:1714512"],(function(a,b,c,d,e,f){"use strict";b("cr:1714512");a=b("buildCometGroupsTabRoute.entrypoint")(b("JSResourceForInteraction")("GroupsCometCrossGroupFeedRoot.react").__setRef("GroupsCometCrossGroupFeedRoot.entrypoint"),function(a){var c,d=a.routeProps,e=d.groupID;d=d.hoistStories;var f=e!=null&&d!=null&&d.length>0;return{queries:{feedQueryReference:{parameters:b("GroupsCometCrossGroupFeedRootQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"GroupsCometCrossGroupFeedRootQuery",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"GROUP",feedbackSource:69,firstLoadCount:(c=a.routeProps.firstLoadCount)!=null?c:2,focusCommentID:null,groupID:(c=e)!=null?c:"0",hasHoistStories:f,hoistStories:d,hoistStoriesCount:Math.min((e=d==null?void 0:d.length)!=null?e:0,6),privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"groups_tab",scale:b("WebPixelRatio").get(),streamInitialCount:(c=a.routeProps.streamInitialCount)!=null?c:1,useDefaultActor:!1}}}}});e.exports=a}),null);
__d("GroupsCometCrossGroupFeedRootBEOneAhead",["JSResourceForInteraction"],(function(a,b,c,d,e,f){"use strict";b("JSResourceForInteraction")("GroupsCometCrossGroupFeedRoot.react").__setRef("GroupsCometCrossGroupFeedRootBEOneAhead");a=null;e.exports=a}),null);
__d("CometMarketplaceRootBEOneAhead",["JSResourceForInteraction"],(function(a,b,c,d,e,f){"use strict";b("JSResourceForInteraction")("CometMarketplaceRoot.react").__setRef("CometMarketplaceRootBEOneAhead");a=null;e.exports=a}),null);
__d("buildMarketplaceRoute.entrypoint",["CometMarketplaceHashtagFeedPageHeaderQuery$Parameters","CometMarketplaceHashtagFollowButtonContainerQuery$Parameters","CometMarketplaceLeftRailNavigationContainerQuery$Parameters","JSResourceForInteraction","cr:1714514","createContentAreaCompoundEntryPointBuilder","gkx","qex"],(function(a,b,c,d,e,f){"use strict";b("cr:1714514");a=b("createContentAreaCompoundEntryPointBuilder")(b("JSResourceForInteraction")("CometMarketplaceRoot.react").__setRef("buildMarketplaceRoute.entrypoint"),function(a){var c=a.routeProps.location;a=a.routeParams.hashtag_id;c={leftRailQueryReference:{environmentProviderOptions:{ssrBoundary:"left_rail"},parameters:b("CometMarketplaceLeftRailNavigationContainerQuery$Parameters"),variables:{buyLocation:{latitude:c.latitude,longitude:c.longitude},canViewCustomizedProfile:b("gkx")("1781610")||((c=b("qex")._("1874488"))!=null?c:!1),category_ranking_enabled:!1,hide_l2_cats:b("gkx")("2013123")}}};Boolean(a)&&(c=babelHelpers["extends"]({},c,{hashtagFollowButtonQueryReference:{environmentProviderOptions:{ssrBoundary:"left_rail"},parameters:b("CometMarketplaceHashtagFollowButtonContainerQuery$Parameters"),variables:{hashtagID:a}},hashtagPageHeaderQueryReference:{environmentProviderOptions:{ssrBoundary:"left_rail"},parameters:b("CometMarketplaceHashtagFeedPageHeaderQuery$Parameters"),variables:{hashtagID:a}}}));return c});e.exports=a}),null);
__d("MarketplaceHomeRootSharedPreloaders.entrypoint",["CometMarketplaceNotificationsListContainerQuery$Parameters","MarketplaceBannerContainerQuery$Parameters","MarketplaceCometBrowseFeedLightContainerQuery$Parameters","WebPixelRatio","gkx"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=1e3;function h(a){a=a.routeProps.location;return{feedQueryReferenceLight:{environmentProviderOptions:{ssrBoundary:"feed"},parameters:b("MarketplaceCometBrowseFeedLightContainerQuery$Parameters"),variables:{buyLocation:{latitude:a.latitude,longitude:a.longitude},count:1,cursor:null,imageWidth:256,mediaType:b("gkx")("1872513")?"image/webp":"image/jpeg",radius:a.radius*g,scale:b("WebPixelRatio").get(),sizing:"cover-fill-cropped",useSDFPath:!0}}}}function i(){return{notificationsQueryReference:{environmentProviderOptions:{ssrBoundary:"feed"},parameters:b("CometMarketplaceNotificationsListContainerQuery$Parameters"),variables:{isCOBMOB:b("gkx")("1489406"),scale:b("WebPixelRatio").get()}}}}function a(a){a=h(a);b("gkx")("1250838")&&(a=babelHelpers["extends"]({},a,i()));a=babelHelpers["extends"]({},a,{bannerV2QueryReference:{environmentProviderOptions:{ssrBoundary:"feed"},parameters:b("MarketplaceBannerContainerQuery$Parameters"),variables:{params:{render_location:"HOME_FEED"},scale:b("WebPixelRatio").get()}}});return a}}),null);
__d("CometMarketplaceHomeRoot.entrypoint",["JSResourceForInteraction","MarketplaceHomeRootSharedPreloaders.entrypoint","buildMarketplaceRoute.entrypoint","cr:1745778"],(function(a,b,c,d,e,f){"use strict";b("cr:1745778");a=b("buildMarketplaceRoute.entrypoint")(b("JSResourceForInteraction")("CometMarketplaceHomeRoot.react").__setRef("CometMarketplaceHomeRoot.entrypoint"),function(a){a=b("MarketplaceHomeRootSharedPreloaders.entrypoint")(a);return{queries:a}});e.exports=a}),null);
__d("CometMarketplaceHomeRootBEOneAhead",["JSResourceForInteraction"],(function(a,b,c,d,e,f){"use strict";b("JSResourceForInteraction")("CometMarketplaceHomeRoot.react").__setRef("CometMarketplaceHomeRootBEOneAhead");a=null;e.exports=a}),null);