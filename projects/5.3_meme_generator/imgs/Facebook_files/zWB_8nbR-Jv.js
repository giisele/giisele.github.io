if (self.CavalryLogger) { CavalryLogger.start_js(["5DwzbrQ"]); }

__d("ProfileCometGridTileImage_photo.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometGridTileImage_photo",selections:[{args:null,kind:"FragmentSpread",name:"useCometPhotoViewerPlaceholderPassthroughProps_photo"}],type:"Photo",abstractKey:null};e.exports=a}),null);
__d("ProfileCometGridTileImage_warningScreen.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometGridTileImage_warningScreen",selections:[{documentName:"ProfileCometGridTileImage_warningScreen",fragmentName:"CometWarningScreenOverlay_data",fragmentPropName:"data",kind:"ModuleImport"}],type:"OverlayWarningScreenViewModel",abstractKey:null};e.exports=a}),null);
__d("ProfileCometTilePhotoGridViewItem_image.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileCometTilePhotoGridViewItem_image",selections:[{alias:null,args:[{kind:"Literal",name:"height",value:150},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:150}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],type:"ProfileTileItem",abstractKey:null};e.exports=a}),null);
__d("ProfileCometTilePhotoGridViewItem_profileTileItem.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileCometTilePhotoGridViewItem_profileTileItem",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"framework",value:"WARNING_SCREENS"},{kind:"Literal",name:"location",value:"profile"}],concreteType:"CIXScreen",kind:"LinkedField",name:"cix_screen",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"view_model",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometGridTileImage_warningScreen"}],storageKey:null}],storageKey:'cix_screen(framework:"WARNING_SCREENS",location:"profile")'}],type:"CanRenderCIXScreen",abstractKey:"__isCanRenderCIXScreen"}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:150},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:150}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],type:"ProfileTileItem",abstractKey:null};e.exports=a}),null);
__d("ProfileCometTilePhotoGridView_viewStyleRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c=[{alias:null,args:null,kind:"ScalarField",name:"reference_token",storageKey:null}];return{kind:"SplitOperation",metadata:{},name:"ProfileCometTilePhotoGridView_viewStyleRenderer$normalization",selections:[{alias:null,args:null,concreteType:"ProfileTileView",kind:"LinkedField",name:"view",plural:!1,selections:[{alias:null,args:null,concreteType:"ProfileTileItemsConnection",kind:"LinkedField",name:"profile_tile_items",plural:!1,selections:[{alias:null,args:null,concreteType:"ProfileTileItem",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[a,b,{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"framework",value:"WARNING_SCREENS"},{kind:"Literal",name:"location",value:"profile"}],concreteType:"CIXScreen",kind:"LinkedField",name:"cix_screen",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"view_model",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{documentName:"ProfileCometGridTileImage_warningScreen",fragmentName:"CometWarningScreenOverlay_data",fragmentPropName:"data",kind:"ModuleImport"}],type:"OverlayWarningScreenViewModel",abstractKey:null},{kind:"InlineFragment",selections:[b],type:"Node",abstractKey:"__isNode"}],storageKey:null}],storageKey:'cix_screen(framework:"WARNING_SCREENS",location:"profile")'}],type:"CanRenderCIXScreen",abstractKey:"__isCanRenderCIXScreen"}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:150},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:150}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"view_mediaset",plural:!1,selections:[a,{kind:"InlineFragment",selections:c,type:"GenericMediaSet",abstractKey:null},{kind:"InlineFragment",selections:c,type:"MediaUploadedByUserMediaSet",abstractKey:null},b],storageKey:null},b],storageKey:null}]}}();e.exports=a}),null);
__d("ProfileCometTilePhotoGridView_viewStyleRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"reference_token",storageKey:null}];return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileCometTilePhotoGridView_viewStyleRenderer",selections:[{alias:null,args:null,concreteType:"ProfileTileView",kind:"LinkedField",name:"view",plural:!1,selections:[{alias:null,args:null,concreteType:"ProfileTileItemsConnection",kind:"LinkedField",name:"profile_tile_items",plural:!1,selections:[{alias:null,args:null,concreteType:"ProfileTileItem",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"ProfileCometTilePhotoGridViewItem_profileTileItem"},{alias:null,args:[{kind:"Literal",name:"height",value:150},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:150}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"view_mediaset",plural:!1,selections:[{kind:"InlineFragment",selections:a,type:"GenericMediaSet",abstractKey:null},{kind:"InlineFragment",selections:a,type:"MediaUploadedByUserMediaSet",abstractKey:null}],storageKey:null}],storageKey:null}],type:"ProfileTileViewPhotoGridRenderer",abstractKey:null}}();e.exports=a}),null);
__d("ProfileCometGridTileImage.react",["CometRelay","ProfileCometGridTileImage_photo.graphql","ProfileCometGridTileImage_warningScreen.graphql","ProfileCometTileImage.react","react","useCometPhotoViewerPlaceholderPassthroughProps"],(function(a,b,c,d,e,f){"use strict";var g,h,i,j=i||b("react");function a(a,c){var d=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometGridTileImage_photo.graphql"),a.photo),e=b("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometGridTileImage_warningScreen.graphql"),a.warningScreen),f=a.onPress,i=a.roundCorner,k=a.src;d=b("useCometPhotoViewerPlaceholderPassthroughProps")({photo:d,placeholderImageSrc:a.passthroughImage});return j.jsx("div",{className:"qno324ep l9j0dhe7 tvmbv18p j83agx80",ref:c,children:j.jsxs("div",{className:"k4urcfbm l9j0dhe7 stjgntxs ni8dbmo4 cgat1ltu datstx6m",children:[j.jsx(b("ProfileCometTileImage.react"),{linkProps:{passthroughProps:babelHelpers["extends"]({},d),url:a.url},onPress:f,roundCorner:i,src:k||""}),e!=null&&j.jsx(b("CometRelay").MatchContainer,{match:e,props:{alwaysShowCoverComponent:!0,alwaysUseSmallLayout:!0,data:e,integrityUIElement:"profile_media_tile",mediaUri:k,surface:"profile",url:a.url}})]})})}c=j.forwardRef(a);e.exports=c}),null);
__d("ProfileCometTilePhotoGridView.react",["CometRelay","ProfileCometGridTileImage.react","ProfileCometTilePhotoGridViewItem_image.graphql","ProfileCometTilePhotoGridViewItem_profileTileItem.graphql","ProfileCometTilePhotoGridView_viewStyleRenderer.graphql","XCometPhotoControllerRouteBuilder","getRoundedCorners","react","useProfileEngagementClickCallback","useProfileEngagementImpression"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i,j,k=j||b("react"),l=3;g!==void 0?g:g=b("ProfileCometTilePhotoGridViewItem_image.graphql");function m(a){var c,d,e=a.item,f=a.mediasetToken;a=a.roundCorner;e=b("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometTilePhotoGridViewItem_profileTileItem.graphql"),e);c=(c=e.node)==null?void 0:c.id;d=(d=e.node)==null?void 0:(d=d.cix_screen)==null?void 0:d.view_model;var g={content_id:c,item_type:"photo_thumbnail"},i=b("useProfileEngagementImpression")(g);g=b("useProfileEngagementClickCallback")(g);return k.jsx(b("ProfileCometGridTileImage.react"),{onPress:g,passthroughImage:null,photo:null,ref:i,roundCorner:a,src:((g=e.image)==null?void 0:g.uri)||"",url:c!=null?b("XCometPhotoControllerRouteBuilder").buildURL({fbid:c,set:f}):"#",warningScreen:d})}function a(a){var c;a=a.viewStyleRenderer;a=b("CometRelay").useFragment(i!==void 0?i:i=b("ProfileCometTilePhotoGridView_viewStyleRenderer.graphql"),a);c=a==null?void 0:(c=a.view)==null?void 0:c.profile_tile_items;if(!c)return null;c=c.nodes.filter(function(a){return((a=a.image)==null?void 0:a.uri)!=null});var d=(a=a==null?void 0:(a=a.view)==null?void 0:(a=a.view_mediaset)==null?void 0:a.reference_token)!=null?a:"";a=c.length;var e=b("getRoundedCorners")(a,l);a=l-a%l;return k.jsxs("div",{className:"dlv3wnog enqfppq2 lhclo0ds j83agx80",children:[c.map(function(a,b){var c;c=(c=a.node)==null?void 0:c.id;return k.jsx(m,{item:a,mediasetToken:d,roundCorner:e[b]||null},(a=c)!=null?a:b)}),a!==l?Array.from(new Array(a),function(a,b){return k.jsx("div",{className:"k4urcfbm l9j0dhe7 stjgntxs ni8dbmo4 cgat1ltu datstx6m"},"filler"+b)}):null]})}}),null);