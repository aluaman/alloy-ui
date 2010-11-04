AUI.add("aui-scheduler-event",function(AT){var AE=AT.Lang,A3=AE.isString,I=AE.isDate,At=AE.isFunction,j=AE.isObject,Av=AE.isBoolean,t=AE.isNumber,c=AT.Color,N=AT.DataType.DateMath,Aq=AT.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),A0="-",AJ=".",S="",T=" ",P="_",AY="_propagateSet",o="activeView",BA="borderWidth",Ah="colorBrightnessFactor",Ay="colorSaturationFactor",k="Change",Ap="color",AP="content",z="contentNode",Am="duration",Ab="endDate",A4="events",Ao="id",Aj="isoTime",A9="locale",Q="node",K="overlay",AV="parentEvent",BE="recorder",AZ="repeat",A2="repeated",n="repeatedEvents",y="scheduler",AH="scheduler-event",AI="scheduler-event-recorder",A6="startDate",As="template",Ag="title",H="titleDateFormat",h="titleNode",AR="borderStyle",G="%H:%M",Ar="%I:%M",f=AT.ClassNameManager.getClassName,U=f(AH),AF=f(AH,BE),Ac=f(AH,AP),AL=f(AH,A2),b=f(AH,Ag),AW='<div class="'+U+'">'+'<div class="'+b+'"></div>'+'<div class="'+Ac+'"></div>'+"</div>";var p=AT.Component.create({NAME:AH,ATTRS:{borderStyle:{value:"solid",validator:A3},borderWidth:{value:"1px",validator:A3},colorBrightnessFactor:{value:0.75,validator:t},colorSaturationFactor:{value:1.5,validator:t},content:{value:"(no title)",validator:A3},color:{lazyAdd:false,setter:"_setColor",value:"#D96666",validator:A3},titleDateFormat:{getter:"_getTitleDateFormat",validator:A3},endDate:{valueFn:function(){var A=N.clone(this.get(A6));A.setHours(A.getHours()+1);return A;},validator:I},columnNode:{setter:AT.one},node:{valueFn:function(){return AT.Node.create(AW).setData(AH,this);},setter:AT.one},parentEvent:{},repeat:{setter:"_setRepeat"},scheduler:{lazyAdd:false,setter:"_setScheduler"},startDate:{valueFn:function(){return new Date();},validator:I}},EXTENDS:AT.Base,PROPAGATE_ATTRS:[A6,Ab,AP,Ap,Ah,Ay,AR,BA,H],prototype:{eventStack:null,initializer:function(){var A=this;var BC=A.get(Q);A.eventStack={};A.nodeStack={};AT.Array.each(AT.SchedulerEvent.PROPAGATE_ATTRS,function(BD){A.after(BD+k,A._propagateAttrChange);});A.contentNode=BC.one(AJ+Ac);A.titleNode=BC.one(AJ+b);A.syncNodeUI(true);},destroy:function(){var A=this;A.eachRepeatedEvent(function(BC,BD){BC.destroy();});A.eventStack={};A.get(Q).remove(true);},copyDates:function(BC){var A=this;A.set(Ab,N.clone(BC.get(Ab)));A.set(A6,N.clone(BC.get(A6)));},copyPropagateAttrValues:function(BC,BD){var A=this;A.copyDates(BC);AT.Array.each(AT.SchedulerEvent.PROPAGATE_ATTRS,function(BG){if(!(BG in (BD||{}))){var BH=BC.get(BG);if(!j(BH)){A.set(BG,BH);}}});},getBorderColor:function(){var A=this;return A.borderColorRGB.hex;},getDaysDuration:function(){var A=this;return N.getDayOffset(A.get(Ab),A.get(A6));},getHoursDuration:function(){var A=this;return N.getHoursOffset(A.get(Ab),A.get(A6));},getMinutesDuration:function(){var A=this;return N.getMinutesOffset(A.get(Ab),A.get(A6));},getSecondsDuration:function(){var A=this;return N.getSecondsOffset(A.get(Ab),A.get(A6));},sameEndDate:function(BC){var A=this;return N.compare(A.get(Ab),BC.get(Ab));},sameStartDate:function(BC){var A=this;return N.compare(A.get(A6),BC.get(A6));},isAfter:function(BG){var BD=this;var BC=BD.get(A6);var A=BG.get(A6);return N.after(BC,A);},isBefore:function(BG){var BD=this;var BC=BD.get(A6);var A=BG.get(A6);return N.before(BC,A);},repeatByDate:function(BD){var A=this;var BG=A.uidByDate(BD);if(!A.eventStack[BG]){var BC=N.clone(BD);var BH=N.clone(BD);N.copyHours(BC,A.get(A6));N.copyHours(BH,A.get(Ab));var BI=new AT.SchedulerEvent({endDate:BH,parentEvent:A,scheduler:A.get(y),startDate:BC});BI.copyPropagateAttrValues(A);A.eventStack[BG]=BI;}return A.eventStack[BG];},intersects:function(BG){var BD=this;var BH=BD.get(Ab);var BC=BD.get(A6);var A=BG.get(A6);return(BD.sameStartDate(BG)||N.between(A,BC,BH));},intersectHours:function(BD){var BC=this;var BH=BC.get(Ab);var A=BC.get(A6);var BG=N.clone(A);N.copyHours(BG,BD.get(A6));return(N.compare(A,BG)||N.between(BG,A,BH));},isDayOverlapEvent:function(){var A=this;return N.isDayOverlap(A.get(A6),A.get(Ab));},isRepeatableDate:function(BC){var A=this;var BD=A.get(AZ);return(BD&&BD.validate(A,BC));},getClearEndDate:function(){var A=this;return N.safeClearTime(A.get(Ab));},getClearStartDate:function(){var A=this;return N.safeClearTime(A.get(A6));},uidByDate:function(BC){var A=this;BC=I(BC)?N.safeClearTime(BC):A.getClearStartDate();return[AH,BC.getTime()].join(P);},setContent:function(BD,BC){var A=this;A._setContent(z,BD,BC);},setTitle:function(BD,BC){var A=this;A._setContent(h,BD,BC);},syncNodeUI:function(BC){var A=this;A.get(Q).toggleClass(AL,!!(A.get(AV)));A.syncNodeColorUI(BC);A.syncNodeTitleUI(BC);A.syncNodeContentUI(BC);},syncNodeColorUI:function(BC){var A=this;var BD=A.get(Q);var BG=A.getBorderColor();if(BD){BD.setStyles({borderWidth:A.get(BA),borderColor:BG,backgroundColor:A.get(Ap),borderStyle:A.get(AR)});}if(A.titleNode){A.titleNode.setStyles({backgroundColor:BG});}if(BC){A.eachRepeatedEvent(function(BH,BI){BH.syncNodeColorUI();});}},syncNodeContentUI:function(BC){var A=this;A.setContent(A.get(AP),BC);},syncNodeTitleUI:function(BC){var A=this;var BD=A._formatDate(A.get(A6));var BG=A._formatDate(A.get(Ab));A.setTitle([BD,BG].join(T+A0+T),BC);},eachRepeatedEvent:function(BC){var A=this;AT.each(A.eventStack,BC,A);},unlink:function(){var A=this;if(A.get(AV)){A.set(AV,null);}else{A.eachRepeatedEvent(function(BC,BD){BC.unlink();});}A.eventStack={};A.syncNodeUI();},_propagateAttrChange:function(BG){var A=this;var BD=BG.attrName;var BC=BG.newVal;A.eachRepeatedEvent(function(BH,BI){var BJ=BH[AY+Aq(BD)];if(BJ){BJ.apply(A,[BH,BD,BC]);}else{BH.set(BD,BG.newVal);}BH.syncNodeUI();});A.syncNodeUI();},_propagateSetEndDate:function(A,BC,BG){var BD=N.clone(A.get(Ab));N.copyHours(BD,BG);A.set(Ab,BD);},_propagateSetStartDate:function(BC,BD,BG){var A=N.clone(BC.get(A6));N.copyHours(A,BG);BC.set(A6,A);},_setColor:function(BC){var A=this;A.hsbColor=c.rgb2hsb(c.getRGB(BC));A.borderColor=AT.clone(A.hsbColor);A.borderColor.b*=A.get(Ah);A.borderColor.s*=A.get(Ay);A.borderColorRGB=c.hsb2rgb(A.borderColor);return BC;
},_setContent:function(BD,BH,BC){var A=this;var BG=A[BD];if(BG){BG.setContent(BH);}if(BC){A.eachRepeatedEvent(function(BI,BJ){BI[BD].setContent(BH);});}},_setRepeat:function(BC){var A=this;if(A3(BC)){BC=AT.SchedulerEventRepeat[BC];}return BC;},_setScheduler:function(BD){var A=this;var BC=A.get(y);if(BC){A.removeTarget(BC);}A.addTarget(BD);return BD;},_formatDate:function(BD,BG){var BC=this;var A=BC.get(A9);BG=BG||BC.get(H);return AT.DataType.Date.format(BD,{format:BG,locale:A});},_getTitleDateFormat:function(BD){var A=this;if(!A3(BD)){var BC=A.get(y);BD=(BC&&BC.get(o).get(Aj))?G:Ar;}return BD;}}});AT.SchedulerEvent=p;AT.SchedulerEventRepeat={dayly:{description:"Every day",validate:function(A,BC){return true;}},monthly:{description:"Every month",validate:function(BC,BD){var BG=BC.get(Ab);var A=BC.get(A6);return(A.getDate()===BC.getDate());}},monWedFri:{description:"Every Monday, Wednesday and Friday",validate:function(A,BC){return N.isMonWedOrFri(BC);}},tuesThurs:{description:"Every Tuesday and Thursday",validate:function(A,BC){return N.isTueOrThu(BC);}},weekDays:{description:"Every week days",validate:function(A,BC){return N.isWeekDay(BC);}},weekly:{description:"Every week",validate:function(BC,BD){var BG=BC.get(Ab);var A=BC.get(A6);return(A.getDay()===BC.getDay());}}};var A8="bc",A7="bd",AK="bodyContent",R="boundingBox",AU="button",F="column",AP="content",AN="dblclick",An="desc",AM="disk",Au="field",AX="fieldset",AO="form",AA="hint",AD="input",Aa="label",V="layout",Af="menu",d="overlayContextPanel",AZ="repeat",O="row",s="select",m="strings",B="tc",g="text",r="when",AQ="dateFormat",y="scheduler",Aj="isoTime",AB="auiSchedulerEventRecorderWhen",Az="auiSchedulerEventRecorderDesc",Al="auiSchedulerEventRecorderSelect",a="auiSchedulerEventRecorderButtonRow",AS="scheduler-event-recorder:save",x="scheduler-event-recorder:cancel",A0="-",e="#",BF=f(AH,BE,K),Ax=f(AH,BE,AO),W=f(AO),L=f(V,AP),A1=f(V,AX),AG=f(V,AX,A7),w=f(V,AX,AP),Z=f(V,"w100"),M=f(F),Ad=f(F,AP),C=f(Au),X=f(Au,Af),Ae=f(Au,s),A5=f(Au,AP),E=f(Au,Aa),Ak=f(Au,g),J=f(AU,O),Aw=f(Au,AD),AC=f(Au,AD,s),Y=f(Au,AD,g),Ai=f(AH,BE,Aa,r),D=f(AH,BE,An),l=f(AH,BE,Au,AA),v=f(AH,BE,AZ),u=f(AH,BE,AU,O),i="<option></option>",BB='<form id="auiSchedulerEventRecorderForm" class="'+[Ax,L,W].join(T)+'">'+'<div class="'+[A1,Z,M].join(T)+'">'+'<div class="'+[w,Ad].join(T)+'aui-fieldset-content aui-column-content">'+'<div class="'+AG+'">'+'<span class="'+[C,Ak].join(T)+'">'+'<span class="'+A5+'">'+'<label class="'+E+'">{when}:</label>'+'<span id="auiSchedulerEventRecorderWhen" class="'+Ai+'"></span>'+"</span>"+"</span>"+'<span class="'+[C,Ak].join(T)+'">'+'<span class="'+A5+'">'+'<label class="'+E+'" for="auiSchedulerEventRecorderDesc">{description}</label>'+'<input id="auiSchedulerEventRecorderDesc" class="'+[Aw,Y,D].join(T)+'" size="30" type="text" />'+'<div class="'+l+'">'+"<span>{description-hint}</span>"+"</div>"+"</span>"+"</span>"+'<span class="'+[C,X,Ae].join(T)+'">'+'<label class="'+E+'" for="auiSchedulerEventRecorderSelect">{repeat}:</label>'+'<select id="auiSchedulerEventRecorderSelect" class="'+[Aw,AC,v].join(T)+'">'+'<option selected="selected" value="">{no-repeat}</option>'+"</select>"+"</span>"+'<div id="auiSchedulerEventRecorderButtonRow" class="'+[C,J,u].join(T)+'"></div>'+"</div>"+"</div>"+"</div>"+"</form>";var q=AT.Component.create({NAME:AI,ATTRS:{content:{value:S},duration:{value:60},dateFormat:{value:"%a, %B %d,",validator:A3},strings:{value:{},setter:function(A){return AT.merge({save:"Save",cancel:"Cancel",description:"Description",repeat:"Repeat",when:"When","description-hint":"e.g., Dinner at Brian's","no-repeat":"No repeat"},A||{});},validator:j},overlayContextPanel:{value:{},setter:function(BC){var A=this;var BD=AT.Node.create(AT.substitute(BB,A.get(m)));return AT.merge({align:{points:[A8,B]},anim:false,bodyContent:BD,hideOn:AN,trigger:A.get(Q),visible:false,zIndex:9999},BC||{});}}},EXTENDS:AT.SchedulerEvent,prototype:{initializer:function(){var A=this;A._createEvents();A.on("startDateChange",A._onStartDateChange);A.get(Q).addClass(AF);},showOverlay:function(){var A=this;if(!A.overlay){A._initOverlay();}A.overlay.render().show();},getEventCopy:function(BC){var A=this;var BG=A.overlayDescNode.val();var BD=new AT.SchedulerEvent({endDate:A.get(Ab),scheduler:A.get(y),startDate:A.get(A6),repeat:A.overlaySelectNode.val()});BD.copyPropagateAttrValues(A,{content:true});if(BG){BD.set(AP,BG);}return BD;},hideOverlay:function(){var A=this;if(A.overlay){A.overlay.hide();}},_createEvents:function(){var A=this;var BC=function(BD,BG){A.publish(BD,{defaultFn:BG,queuable:false,emitFacade:true,bubbles:true,prefix:AI});};BC(AS,this._defSaveEventFn);BC(x,this._defCancelEventFn);},_initOverlay:function(){var BC=this;var A=BC.get(m);BC.overlay=new AT.OverlayContextPanel(BC.get(d));var BG=BC.overlay;var BD=BG.get(R);var BH=BG.get(AK);BC.overlayButtonRowNode=BH.one(e+a);BC.overlayDescNode=BH.one(e+Az);BC.overlaySelectNode=BH.one(e+Al);BC.overlayWhenNode=BH.one(e+AB);BC.overlaySaveBtn=new AT.ButtonItem({label:A.save,icon:AM,render:BC.overlayButtonRowNode,handler:{fn:BC._handleSaveEvent,context:BC}});BC.overlayCancelBtn=new AT.ButtonItem({label:A.cancel,render:BC.overlayButtonRowNode,handler:{fn:BC._handleCancelEvent,context:BC}});AT.each(AT.SchedulerEventRepeat,function(BJ,BI){BC.overlaySelectNode.append(AT.Node.create(i).val(BI).setContent(BJ.description));});BG.on("hide",AT.bind(BC._onOverlayHide,BC));BG.on("show",AT.bind(BC._onOverlayShow,BC));BH.on("submit",AT.bind(BC._handleSaveEvent,BC));BD.addClass(BF);},_defCancelEventFn:function(BC){var A=this;A.hideOverlay();},_defSaveEventFn:function(BD){var A=this;var BC=A.get(y);BC.addEvent(A.getEventCopy());A.hideOverlay();BC.syncEventsUI();},_getWhenFormattedDt:function(){var BD=this;var BC=BD.get(AQ);var BI=BD.get(Ab);var BH=BD.get(y);var A=BD.get(A6);var BG=(BH.get(Aj)?N.toIsoTimeString:N.toUsTimeString);return[BD._formatDate(A,BC),BG(A),A0,BG(BI)].join(T);},_handleSaveEvent:function(BC){var A=this;A.fire(AS);BC.preventDefault();
},_handleCancelEvent:function(BC){var A=this;A.fire(x);BC.preventDefault();},_onOverlayHide:function(BC){var A=this;A.get(Q).remove();},_onOverlayShow:function(BC){var A=this;A.overlayWhenNode.setContent(A._getWhenFormattedDt());setTimeout(function(){A.overlayDescNode.val(S).selectText();},0);},_onStartDateChange:function(BC){var A=this;var BD=A.get(Am);A.set(Ab,N.add(BC.newVal,N.MINUTES,BD));}}});AT.SchedulerEventRecorder=q;},"@VERSION@",{requires:["aui-base","aui-color","aui-datatype","aui-overlay-context-panel","substitute"],skinnable:true});