if (self.CavalryLogger) { CavalryLogger.start_js(["0cmI2w\/"]); }

__d("FeedCometComposerAMASprout_sprout$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"FeedCometComposerAMASprout_sprout$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}]};e.exports=a}),null);
__d("FeedCometComposerAMASprout_sprout.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FeedCometComposerAMASprout_sprout",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"CometComposerAMASprout",abstractKey:null};e.exports=a}),null);
__d("AMACommonFBT",["fbt","QE2Logger","qex"],(function(a,b,c,d,e,f,g){"use strict";f.getComposerAMASproutName=a;f.getComposerAMAEducationName=c;function a(){var a;b("QE2Logger").logExposureForUser("ama_branding_universe");return(a=b("qex")._("1798442"))!=null?a:g._("Organizar perguntas e respostas")}function c(){return g._("O que s\u00e3o as perguntas e respostas?")}}),null);
__d("composerAMAPostReducer",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,b){switch(b.type){case"ADD_AMA_ATTACHMENT":return babelHelpers["extends"]({},a,{amaMetadata:{formattedTextPresetID:b.amaFormattedTextPresetID,text:b.amaText}});case"REMOVE_ATTACHMENT_TYPE":return babelHelpers["extends"]({},a,{amaMetadata:void 0});default:return a}}}),null);
__d("FeedCometComposerAMAButton.react",["ix","AMACommonFBT","CometComposerAttachmentPluginTypes","CometComposerPushPageContext","CometComposerSproutButton.react","JSResourceForInteraction","composerAMAPostReducer","composerAttachmentAreaChecker","composerAttachmentAreaReducer","lazyLoadComponent","react","useCometComposerPushPage","useComposerViewStateReducer","withComposerViewStatePart"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||b("react"),j=b("lazyLoadComponent")(b("JSResourceForInteraction")("AMACometCreationContainer.react").__setRef("FeedCometComposerAMAButton.react"));function a(a){var c;b("useComposerViewStateReducer")(b("composerAttachmentAreaReducer").composerAttachmentAreaReducer,b("composerAttachmentAreaChecker"));b("useComposerViewStateReducer")(b("composerAMAPostReducer"));var d=b("useCometComposerPushPage")(),e=i.useCallback(function(){d!=null&&d("",function(c){c=c.onReturn;return i.jsx(b("CometComposerPushPageContext").Provider,{value:d,children:i.jsx(j,{metadata:a.amaMetadata,onCreate:c})})},{hasCustomHeader:!0})},[d,a.amaMetadata]);c=((c=a.attachmentArea)==null?void 0:c.activeAttachmentType)==="AMA";var f=i.useRef(!1);i.useEffect(function(){a.visibleOnLoad===!0&&f.current===!1&&(f.current=!0,e())},[a.visibleOnLoad,e]);return i.jsx(b("CometComposerSproutButton.react"),{activeColor:"var(--fds-spectrum-tomato-tint-90)",disabledIcon:g("1535423"),icon:g("1535422"),isActive:c,label:b("AMACommonFBT").getComposerAMASproutName(),loggingName:"ama_sprout",onClick:e,pluginName:b("CometComposerAttachmentPluginTypes").AMA,testid:void 0})}c=b("withComposerViewStatePart")(a,function(a){return{amaMetadata:a.amaMetadata,attachmentArea:a.attachmentArea}});e.exports=c}),null);
__d("FeedCometComposerAMASprout.react",["CometRelay","FeedCometComposerAMAButton.react","FeedCometComposerAMASprout_sprout.graphql","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){var c=a.pushedPageOnLoad;a=a.sprout;b("CometRelay").useFragment(g!==void 0?g:g=b("FeedCometComposerAMASprout_sprout.graphql"),a);return i.jsx(b("FeedCometComposerAMAButton.react"),{visibleOnLoad:c==="ask_me_anything"})}}),null);