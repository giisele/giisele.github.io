if (self.CavalryLogger) { CavalryLogger.start_js(["7tUIezr"]); }

__d("PagesCometUnownedFeedContainerFeedQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4238272896204009",metadata:{},name:"PagesCometUnownedFeedContainerFeedQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PagesCometUnownedSinglePageRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3814107142010641",metadata:{},name:"PagesCometUnownedSinglePageRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("buildPagesUnownedSinglePageRoute.entrypoint",["JSResourceForInteraction","PagesCometUnownedSinglePageRootQuery$Parameters","WebPixelRatio","createContentAreaCompoundEntryPointBuilder"],(function(a,b,c,d,e,f){"use strict";a=b("createContentAreaCompoundEntryPointBuilder")(b("JSResourceForInteraction")("PagesCometUnownedSinglePageRoot.react").__setRef("buildPagesUnownedSinglePageRoute.entrypoint"),function(a){a=a.routeProps.pageID;a={parameters:b("PagesCometUnownedSinglePageRootQuery$Parameters"),variables:{pageID:a,scale:b("WebPixelRatio").get()}};return{singlePageRootQueryReference:a}});e.exports=a}),null);
__d("PagesCometUnownedRoot.entrypoint",["CometPageCardsContainerQuery$Parameters","JSResourceForInteraction","PagesCometUnownedFeedContainerFeedQuery$Parameters","WebPixelRatio","buildPagesUnownedSinglePageRoute.entrypoint"],(function(a,b,c,d,e,f){"use strict";a=b("buildPagesUnownedSinglePageRoute.entrypoint")(b("JSResourceForInteraction")("PagesCometUnownedRoot.react").__setRef("PagesCometUnownedRoot.entrypoint"),function(a){a=a.routeProps;return{extraProps:{pageID:a.pageID},queries:{pageCardsContainerQueryReference:{parameters:b("CometPageCardsContainerQuery$Parameters"),variables:{location:"SECONDARY_COLUMN",pageID:a.pageID,scale:b("WebPixelRatio").get(),useDefaultActor:!1}},pageFeedQueryReference:{parameters:b("PagesCometUnownedFeedContainerFeedQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"CometSinglePageContentContainerFeedQuery",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"PAGE_TIMELINE",feedbackSource:22,pageID:a.pageID,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"timeline",scale:b("WebPixelRatio").get(),useDefaultActor:!1}}}}});e.exports=a}),null);