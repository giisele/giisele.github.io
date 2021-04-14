if (self.CavalryLogger) { CavalryLogger.start_js(["H\/KbgQ+"]); }

__d("useProfileCometFriendsDataSourceQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"first"},b={defaultValue:null,kind:"LocalArgument",name:"include_gender"},c={defaultValue:null,kind:"LocalArgument",name:"photo_size"},d={defaultValue:null,kind:"LocalArgument",name:"query"},e={defaultValue:null,kind:"LocalArgument",name:"scale"},f={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},g={kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Variable",name:"first",variableName:"first"},{kind:"Variable",name:"named",variableName:"query"},{kind:"Literal",name:"orderby",value:["memorialized_friends_last","importance"]}],concreteType:"FriendsConnection",kind:"LinkedField",name:"friends",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"nodes",plural:!0,selections:[{condition:"include_gender",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"gender",storageKey:null}]},f,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Variable",name:"height",variableName:"photo_size"},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Variable",name:"width",variableName:"photo_size"}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"User",abstractKey:null};return{fragment:{argumentDefinitions:[a,b,c,d,e],kind:"Fragment",metadata:null,name:"useProfileCometFriendsDataSourceQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[g],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[d,a,c,e,b],kind:"Operation",name:"useProfileCometFriendsDataSourceQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},g,f],storageKey:null}],storageKey:null}]},params:{id:"3537389239662235",metadata:{},name:"useProfileCometFriendsDataSourceQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("useProfileCometHubsTypeaheadDataSourceQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"first"},b={defaultValue:null,kind:"LocalArgument",name:"photo_size"},c={defaultValue:null,kind:"LocalArgument",name:"query"},d={defaultValue:null,kind:"LocalArgument",name:"section"},e=[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:[{kind:"Variable",name:"first",variableName:"first"},{kind:"Variable",name:"named",variableName:"query"},{kind:"Variable",name:"of_section",variableName:"section"}],concreteType:"TimelineProfileTypeaheadConnection",kind:"LinkedField",name:"eligible_hubs",plural:!1,selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:[{kind:"Variable",name:"height",variableName:"photo_size"},{kind:"Variable",name:"width",variableName:"photo_size"}],concreteType:"Image",kind:"LinkedField",name:"page_logo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[a,b,c,d],kind:"Fragment",metadata:null,name:"useProfileCometHubsTypeaheadDataSourceQuery",selections:e,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[d,c,a,b],kind:"Operation",name:"useProfileCometHubsTypeaheadDataSourceQuery",selections:e},params:{id:"4636573846412938",metadata:{},name:"useProfileCometHubsTypeaheadDataSourceQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("useProfileCometHubsTypeaheadDataSource_node.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"photo_size"}],kind:"Fragment",metadata:null,name:"useProfileCometHubsTypeaheadDataSource_node",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:[{kind:"Variable",name:"height",variableName:"photo_size"},{kind:"Variable",name:"width",variableName:"photo_size"}],concreteType:"Image",kind:"LinkedField",name:"page_logo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],type:"Page",abstractKey:null};e.exports=a}),null);
__d("ProfileCometProgressiveDateRange.react",["fbt","ProfileCometProgressiveDateSelector.react","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=h||b("react");function a(a){var c=a.endDate,d=a.onEndChange,e=a.onStartChange,f=a.startDate;a=a.yearRange;return i.jsxs("div",{className:"sv5sfqaa lhclo0ds j83agx80 bp9cbjyn",children:[i.jsx("div",{className:"aov4n071 pfnyh3mw oi9244e8","data-testid":void 0,children:i.jsx(b("ProfileCometProgressiveDateSelector.react").ProfileCometProgressiveDateSelector,{date:f,onChange:e,yearRange:a})}),i.jsx("div",{className:"aov4n071 pfnyh3mw oi9244e8",children:i.jsx(b("TetraText.react"),{type:"body3",children:g._("a")})}),i.jsx("div",{className:"aov4n071 pfnyh3mw","data-testid":void 0,children:i.jsx(b("ProfileCometProgressiveDateSelector.react").ProfileCometProgressiveDateSelector,{date:c,onChange:d,yearRange:a})})]})}}),null);
__d("ProfileCometTypeaheadEntityViewItem.react",["ix","CometImageIcon.react","CometTypeaheadViewItem.react","TetraIcon.react","TetraText.react","fbicon","react"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=h||b("react");function a(a){var c=a.entry;a.queryString;a=babelHelpers.objectWithoutPropertiesLoose(a,["entry","queryString"]);var d=c.getRawData();if(d==null)return null;var e=d.photo;d=(d=d.isSelected)!=null?d:!1;return i.jsx(b("CometTypeaheadViewItem.react"),babelHelpers["extends"]({},a,{entry:c,children:i.jsxs("div",{className:"i1fnvgqd btwxx1t3 j83agx80",children:[i.jsxs("div",{className:"a8nywdso r8blr3vg rz4wbd8a jwdofwj8 stjgntxs ni8dbmo4 dumg13m2 jifvfom9 btwxx1t3 j83agx80",children:[i.jsx("div",{className:"b3onmgus",children:e!=null&&e!==""&&i.jsx(b("CometImageIcon.react"),{size:36,src:e,style:"roundedRect"})}),i.jsx("div",{className:"ni8dbmo4 kwzhilbh cbu4d94t j83agx80",children:i.jsx("div",{className:"hzawbc8m tw6a2znq",children:i.jsx(b("TetraText.react"),{numberOfLines:1,type:"headlineEmphasized4",children:c.getLabel()})})})]}),d&&i.jsx("div",{className:"q7yjyuk5 taijpn5t cbu4d94t j83agx80",children:i.jsx(b("TetraIcon.react"),{color:"highlight",icon:b("fbicon")._(g("477814"),20)})})]})}))}}),null);
__d("useProfileCometFriendsDataSource",["CometTypeaheadDataEntry","WebPixelRatio","useCometTypeaheadGraphQLDataSource","useProfileCometFriendsDataSourceQuery.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h="/images/silhouettes/person_50x50.png",i=g!==void 0?g:g=b("useProfileCometFriendsDataSourceQuery.graphql");function j(a){a=a==null?void 0:(a=a.viewer)==null?void 0:(a=a.actor)==null?void 0:(a=a.friends)==null?void 0:a.nodes;if(!a)return[];a=a.map(function(a){var c=a.gender,d=a.id,e=a.name;a=a.profile_picture;return e==null||d==null?null:new(b("CometTypeaheadDataEntry"))({key:d,label:e,rawData:{gender:c,id:d,name:e,photo:(a==null?void 0:a.uri)||h}})}).filter(Boolean);return a}function a(a){var c=a.includeGender,d=a.limit;return b("useCometTypeaheadGraphQLDataSource")({gqlQuery:i,limit:d,normalize:j,queryVariablesBuilderFunction:function(a){a=a.query;return{first:d,include_gender:c,photo_size:50,query:a,scale:b("WebPixelRatio").get()}}})}}),null);
__d("ProfileCometFriendsTypeahead.react",["CometFormTypeahead.react","ProfileCometTypeaheadEntityViewItem.react","emptyFunction","react","useCometTypeaheadStateQueryString","useCometTypeaheadViewListStrategy","useProfileCometFriendsDataSource"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){var c=a.includeGender;c=c===void 0?!1:c;var d=a.isDisabled;d=d===void 0?!1:d;var e=a.label,f=a.onChange,g=f===void 0?b("emptyFunction"):f;f=a.onPressEntry;var i=a.placeholder;i=i===void 0?"":i;var j=a.queryString;j=j===void 0?"":j;a=a.testid;a=b("useCometTypeaheadStateQueryString")(j);j=a[0];var k=a[1];a=b("useProfileCometFriendsDataSource")({includeGender:c,limit:10});c=h.useCallback(function(a){k(a),g&&g(a)},[g,k]);var l=b("useCometTypeaheadViewListStrategy")({viewItemStrategyRenderer:b("ProfileCometTypeaheadEntityViewItem.react")});return h.jsx(b("CometFormTypeahead.react"),{dataSource:a,isDisabled:d,label:e,onChange:c,onPressEntry:f,placeholder:i,queryString:j,testid:void 0,viewStrategyRenderer:l})}}),null);
__d("useProfileCometHubsTypeaheadDataSource",["CometTypeaheadDataEntry","useCometTokenizerDataSource","useProfileCometHubsTypeaheadDataSourceQuery.graphql","useProfileCometHubsTypeaheadDataSource_node.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i="/images/tiles/typeahead_default.png",j=g!==void 0?g:g=b("useProfileCometHubsTypeaheadDataSourceQuery.graphql");h!==void 0?h:h=b("useProfileCometHubsTypeaheadDataSource_node.graphql");function k(a){a=a==null?void 0:(a=a.viewer)==null?void 0:(a=a.eligible_hubs)==null?void 0:a.nodes;return!a?[]:a.map(function(a){var c=a.id,d=a.name;a=a.page_logo;return d==null||c==null?null:new(b("CometTypeaheadDataEntry"))({key:c,label:d,rawData:{id:c,name:d,photo:(a==null?void 0:a.uri)||i}})}).filter(Boolean)}function a(a){var c=a.limit,d=a.section;return b("useCometTokenizerDataSource")({gqlQuery:j,limit:c,normalize:k,queryVariablesBuilderFunction:function(a){a=a.query;return{first:c,photo_size:50,query:a,section:d}}})}}),null);
__d("ProfileCometHubsTypeahead.react",["CometFormTypeahead.react","ProfileCometTypeaheadEntityViewItem.react","react","useCometTypeaheadViewListStrategy","useProfileCometHubsTypeaheadDataSource"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function a(a){var c=a.isDisabled;c=c===void 0?!1:c;var d=a.label,e=a.onChange,f=a.placeholder,g=a.section,i=a.testid,j=a.value;i=b("useProfileCometHubsTypeaheadDataSource")({limit:10,section:g});a=h.useCallback(function(a){a!==j.name&&e({id:"",name:a})},[e,j.name]);g=h.useCallback(function(a){e((a=a.getRawData())!=null?a:{id:"",name:""})},[e]);var k=b("useCometTypeaheadViewListStrategy")({viewItemStrategyRenderer:b("ProfileCometTypeaheadEntityViewItem.react")});return h.jsx(b("CometFormTypeahead.react"),{dataSource:i,isDisabled:c,label:d,onChange:a,onPressEntry:g,placeholder:f||"",queryString:(i=j.name)!=null?i:"",testid:void 0,viewStrategyRenderer:k})}c=h.memo(a);e.exports=c}),null);