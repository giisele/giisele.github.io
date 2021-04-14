if (self.CavalryLogger) { CavalryLogger.start_js(["v0W0PB8"]); }

__d("JobsCometCreateMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={alias:null,args:null,concreteType:"JobOpening",kind:"LinkedField",name:"job_opening",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"container_post_id",storageKey:null},c,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null},e={alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"JobsCometCreateMutation",selections:[{alias:null,args:b,concreteType:"JobOpeningCreateResponsePayload",kind:"LinkedField",name:"job_opening_create",plural:!1,selections:[d,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[e],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"JobsCometCreateMutation",selections:[{alias:null,args:b,concreteType:"JobOpeningCreateResponsePayload",kind:"LinkedField",name:"job_opening_create",plural:!1,selections:[d,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[e,c],storageKey:null}],storageKey:null}]},params:{id:"3865303086886028",metadata:{},name:"JobsCometCreateMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("composerDirtyStateViewStateReducer",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,b){switch(b.type){case"set_ignore_dirty_flag":return babelHelpers["extends"]({},a,{ignoreDirtyFlag:b.value})}return a}}),null);
__d("JobsCometComposerVoiceData",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum").Mirrored(["PAGE","PROFILE_PLUS","USER","USER_FOR_PAGE"]);f.JobsComposerVoice=a}),null);
__d("JobsCometInterceptionLogger",["JobsActionsTypedLoggerLite","WebSession"],(function(a,b,c,d,e,f){"use strict";var g=b("JobsActionsTypedLoggerLite").log;function h(a){return{extra_data:a==null?void 0:a.extraData,intercept_post_text:a==null?void 0:a.interceptPostText,referer_mechanism:a==null?void 0:a.refererMechanism}}a=function(){function a(a,c,d){this.$1=a;this.$2=c;this.$3=(a=d)!=null?a:b("WebSession").getId()}var c=a.prototype;c.log=function(a,b){g(babelHelpers["extends"]({name:a,override_employer_id:this.$1,referer_surface:this.$2,waterfall_session_id:this.$3},h(b)))};c.logAutoconversionAttempt=function(){this.log("job_opening_composer_intercept_autoconversion_attempt")};c.logAutoconversionSuccess=function(){this.log("job_opening_composer_intercept_autoconversion_success")};c.logAutoconversionFailure=function(a){this.log("job_opening_composer_intercept_autoconversion_failure",{extraData:{reason:a}})};c.logAutoconversionDialogImpression=function(){this.log("job_opening_composer_intercept_autoconversion_dialog_impression")};c.logInterceptDialogImpression=function(a,b){this.log("job_opening_composer_intercept_impression",{interceptPostText:a,refererMechanism:b})};c.logJobOpeningComposerInterceptUsed=function(a,b){this.log("job_opening_composer_intercept_use_custom_flow",{interceptPostText:a,refererMechanism:b})};c.logJobOpeningComposerInterceptNotUsed=function(a,b){this.log("job_opening_composer_intercept_post_original",{interceptPostText:a,refererMechanism:b})};return a}();e.exports=a}),null);
__d("JobOpeningCreateSurfaceHelpers",[],(function(a,b,c,d,e,f){"use strict";f.isGroupsComposer=a;f.isJobsSurfaceComposer=b;f.isPagesComposer=c;f.isEventComposer=d;function a(a){return a==="GROUP"}function b(a){return a==="JOBS"}function c(a){return a==="PAGE"}function d(a){return a==="EVENT"}}),null);
__d("JobsCometCreateMutation",["CometRelay","JobOpeningCreateSurfaceHelpers","JobsCometComposerTypes","JobsCometComposerVoiceData","JobsCometCreateMutation.graphql"],(function(a,b,c,d,e,f){"use strict";f.commit=a;var g,h=g!==void 0?g:g=b("JobsCometCreateMutation.graphql");function a(a,c,d,e,f,g,i){var j,k,l,m,n,o,p,q=c.audience||[];b("JobOpeningCreateSurfaceHelpers").isGroupsComposer(c.jobOpeningCreateSurface)?q=q.filter(function(a){return a.id!==d}):(b("JobOpeningCreateSurfaceHelpers").isPagesComposer(c.jobOpeningCreateSurface)||b("JobOpeningCreateSurfaceHelpers").isJobsSurfaceComposer(c.jobOpeningCreateSurface)&&(((j=c.voice)==null?void 0:j.type)===b("JobsCometComposerVoiceData").JobsComposerVoice.PAGE||((j=c.voice)==null?void 0:j.type)===b("JobsCometComposerVoiceData").JobsComposerVoice.PROFILE_PLUS))&&(q=q.filter(function(a){return a.id!==f}));q=q.map(function(a){return{cross_post_location:a.type,cross_post_location_id:a.id}});j=(j=c.location)==null?void 0:j.multiLineAddress;k=(k=c.salary)==null?void 0:k.currency;l=(l=c.salary)==null?void 0:l.amountMax;m=(m=c.salary)==null?void 0:m.amount;n=(n=c.customQuestions)!=null?n:[];o=c.contactPreference===b("JobsCometComposerTypes").JobApplicationMedium.OFFSITE_URL&&c.websiteLink!=null&&c.websiteLink!==""&&((o=c.voice)==null?void 0:o.type)===b("JobsCometComposerVoiceData").JobsComposerVoice.USER?c.websiteLink:null;e={application_notification_emails:(p=c.emails)==null?void 0:p.filter(Boolean),benefits:c.benefits,business_name:c.businessName,city_name:(p=c.location)==null?void 0:p.cityName,cross_post_locations:q,custom_questions:n.map(function(a){return{custom_question_id:a.customQuestionId,is_required:a.isRequired,label:a.label,multiple_choice_options:a.multipleChoiceOptions,question_type:a.questionType,suggested_custom_question_type:a.suggestedCustomQuestionType}}),employer_id:f,form_config:c.jobApplicationFormConfig,full_address:(p=c.location)==null?void 0:p.singleLineAddress,group_id:d,group_post_id:e,hours_per_week:c.hoursPerWeek,is_auto_convert:Boolean(i==null?void 0:i.isAutoConvert),job_application_medium:c.contactPreference,job_details:c.description,job_opening_create_mechanism:Boolean(i==null?void 0:i.isAutoConvert)?"AUTOCONVERT":"COMPOSER",job_opening_create_surface:c.jobOpeningCreateSurface,job_search_mechanism:c.refererMechanism,job_status:i==null?void 0:i.jobStatus,job_title:(q=c.jobTitle)==null?void 0:q.title,job_type:c.jobType,job_voice_type:((n=c.voice)==null?void 0:n.type)?c.voice.type:void 0,latitude:(p=c.location)==null?void 0:p.latitude,location_id:(e=c.location)==null?void 0:e.locationID,longitude:(q=c.location)==null?void 0:q.longitude,max_wage:k!=null&&l!=null?{amount_in_hundredths:l,currency:k}:null,min_wage:k!=null&&m!=null?{amount_in_hundredths:m,currency:k}:null,multi_line_address:j!=null?j.join():null,offsite_application_url:o,photo_id:(n=c.photo)==null?void 0:n.id,post_id:g,remote_type:c.remoteType,schedule_types:c.scheduleTypes,source:c.source,time_commitment:c.timeCommitment,wage_type:(p=c.salary)==null?void 0:p.type,waterfall_session_id:c.waterfallSessionID};b("CometRelay").commitMutation(a,{mutation:h,onCompleted:i&&i.onSuccess,onError:i&&i.onFailure,variables:{input:e}})}}),null);
__d("timelineStoryLiveInsertUpdater",["CometRelay"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){var c=function(c){var d=c.getRootField("story_create"),e=d&&d.getLinkedRecord("timeline_feed_units_edge"),f=c.get(a);if(!f)return;d=["ProfileCometTimelineFeed_user_timeline_list_feed_units","ProfileCometTimelineFeed_user_timeline_grid_feed_units","CometManagePostsFeed_user_timeline_manage_feed_units","ProfileGeminiTimelineFeed_user_timeline_feed_units","ProfileCometMentionsFeed_user_mentions_list_feed_units"];function g(a,d){a=b("CometRelay").ConnectionHandler.getConnection(f,a,d);if(!a)return;d=b("CometRelay").ConnectionHandler.buildConnectionEdge(c,a,e);d&&b("CometRelay").ConnectionHandler.insertEdgeBefore(a,d)}d.forEach(function(a){return g(a)});g("ProfileCometTimelineFeed_user_timeline_list_feed_units",{omit_pinned_post:!0});g("ProfileCometTimelineFeed_user_timeline_grid_feed_units",{omit_pinned_post:!0});g("CometManagePostsFeed_user_timeline_manage_feed_units",{omit_pinned_post:!0});g("ProfileCometTimelineFeed_user_timeline_list_feed_units",{memorialized_split_time_filter:"AFTER",omit_pinned_post:!0});g("ProfileCometTimelineFeed_user_timeline_list_feed_units",{posted_by:{group:"NON_OWNER"}});g("ProfileCometTimelineFeed_user_timeline_list_feed_units",{omit_pinned_post:!0,posted_by:{group:"OWNER"}});g("ProfileCometTimelineFeed_user_timeline_grid_feed_units",{omit_pinned_post:!0,posted_by:{group:"OWNER"}})};return c}}),null);
__d("ProfileCometComposerDialog.react",["fbt","Actor","CometCardedDialog.react","CometComposerHeader.react","ProfileCometComposerRoot.react","QPLUserFlow","composerCometCardedDialogProps","cr:1587768","react","useQPLInstanceKey"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=h||b("react"),j=b("cr:1587768")!=null?b("cr:1587768"):function(a,b){};function a(a){var c=a.props;a=a.queries;var d=c.askMeAnythingVisibleOnLoad,e=c.beginningViewState,f=c.feelingTaggerVisibleOnLoad,h=c.locationTaggerVisibleOnLoad,k=c.onBeforeClose,l=c.onClose,m=c.onSave,n=c.onSaveError,o=c.onSubmit,p=c.profileID,q=c.withCloseButton;c=c.withTaggerVisibleOnLoad;var r=i.useRef({isSaving:!1}),s=b("useQPLInstanceKey")(),t=b("Actor").useActor();t=t[0];var u=j(t,(t=p)!=null?t:"");p==null&&(u=null);t=(t=(t=u)==null?void 0:t.getViewStateWithSuspense())!=null?t:{};e=babelHelpers["extends"]({},e,t);i.useEffect(function(){b("QPLUserFlow").start(917556,{annotations:{string:{composerType:"profile"}},instanceKey:s})},[s]);var v=i.useRef(null);t=i.useCallback(function(){r.current.isSaving||b("QPLUserFlow").endCancel(917556,{instanceKey:s}),k&&k(v.current!=null?v.current.getViewState():void 0),l()},[k,l,s]);var w=i.useCallback(function(){r.current.isSaving=!1,b("QPLUserFlow").endFailure(917556,"onSubmitError",{instanceKey:s}),n&&n()},[s,n]),x=i.useCallback(function(){r.current.isSaving=!1,b("QPLUserFlow").endSuccess(917556,{instanceKey:s}),m&&m()},[s,m]),y=i.useCallback(function(){var a;r.current.isSaving=!0;b("QPLUserFlow").addPoint(917556,"onSubmitCommit",{instanceKey:s});o&&o();(a=u)==null?void 0:a.remove()},[s,u,o]),z=i.useCallback(function(a,b){if(a.editorState!==b.editorState){(b=u)==null?void 0:b.save(a)}},[u]);q=i.jsx(b("CometComposerHeader.react"),{closeButtonTestID:"ProfileCometComposer-CloseButton",onClose:t,testid:void 0,title:g._("Criar publica\u00e7\u00e3o"),withCloseButton:q});return i.jsx(b("CometCardedDialog.react"),babelHelpers["extends"]({},b("composerCometCardedDialogProps"),{onClose:t,testid:void 0,children:i.jsx(b("ProfileCometComposerRoot.react"),{askMeAnythingVisibleOnLoad:d,beginningViewState:e,feelingTaggerVisibleOnLoad:f,headerComponent:q,locationTaggerVisibleOnLoad:h,onBeforeViewStateChange:z,onClose:t,onSave:x,onSaveError:w,onSubmit:y,profileID:p,queries:a,ref:v,withTaggerVisibleOnLoad:c})}))}}),null);
__d("UnifiedInterceptionInterceptAcceptFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744453");c=b("FalcoLoggerInternal").create("unified_interception_intercept_accept",a);e.exports=c}),null);
__d("UnifiedInterceptionInterceptCreateFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744454");c=b("FalcoLoggerInternal").create("unified_interception_intercept_create",a);e.exports=c}),null);
__d("UnifiedInterceptionInterceptRejectFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744455");c=b("FalcoLoggerInternal").create("unified_interception_intercept_reject",a);e.exports=c}),null);
__d("JobOpeningType",[],(function(a,b,c,d,e,f){a=Object.freeze({CONTRACT:"CONTRACT",FULL_TIME:"FULL_TIME",INTERNSHIP:"INTERNSHIP",PART_TIME:"PART_TIME",VOLUNTEER:"VOLUNTEER"});e.exports=a}),null);