if (self.CavalryLogger) { CavalryLogger.start_js(["O1+43sU"]); }

__d("CometTopChartsCityQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3803444283097040",metadata:{},name:"CometTopChartsCityQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometTopChartsCity.entrypoint",["CometTopChartsCityQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f){"use strict";a=new Date();var g=new Date(a.getFullYear(),a.getMonth(),a.getDate()+1),h=new Date(a.getFullYear(),a.getMonth(),a.getDate()+2),i=new Date(a.getFullYear(),a.getMonth(),a.getDate()+7),j=new Date(a.getFullYear(),a.getMonth()+1,a.getDate());c={getPreloadProps:function(a){return{queries:{queryRef:{parameters:b("CometTopChartsCityQuery$Parameters"),variables:{args:{city_extended_info:!0,city_query:a.routeProps.id},pageId:a.routeProps.id,timestamp_day_after_next_day:Math.floor(h.getTime()/1e3),timestamp_next_day:Math.floor(g.getTime()/1e3),timestamp_next_month:Math.floor(j.getTime()/1e3),timestamp_next_week:Math.floor(i.getTime()/1e3)}}}}},root:b("JSResourceForInteraction")("CometTopChartsCity.react").__setRef("CometTopChartsCity.entrypoint")};e.exports=c}),null);
__d("ReactXHPContext",["react"],(function(a,b,c,d,e,f){"use strict";var g;a=g||b("react");c=a.createContext(null);d=c;e.exports=d}),null);