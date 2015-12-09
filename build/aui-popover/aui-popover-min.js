YUI.add("aui-popover",function(e,t){var n=e.WidgetStdMod,r=e.getClassName,i=r("arrow"),s=r("popover-content"),o=r("popover-footer"),u=r("popover-title");e.Popover=e.Base.create("popover",e.Widget,[e.WidgetCssClass,e.WidgetPosition,e.WidgetStdMod,e.WidgetToggle,e.WidgetAutohide,e.WidgetToolbars,e.WidgetModality,e.WidgetPositionAlign,e.WidgetPositionAlignSuggestion,e.WidgetPositionConstrain,e.WidgetStack,e.WidgetTransition,e.WidgetTrigger],{initializer:function(){var t=this;e.after(t._afterRenderBoxClassNames,t,"_renderBoxClassNames"),this._resizeHandle=e.on("windowresize",e.bind(this._onResize,this))},destructor:function(){this._resizeHandle.detach()},renderUI:function(){var t=this,n=t.get("boundingBox");n.append(e.Popover.TEMPLATES.arrow),t.suggestAlignment()},_afterRenderBoxClassNames:function(){var e=this,t=e.get("contentBox");t.removeClass(e.getClassName("content"))},_onResize:function(){this.suggestAlignment()},_uiSetVisible:function(e){var t=this,n=t.get("boundingBox");t._widgetUiSetVisible(e),n.setStyle("display",e?"block":"none"),e&&t.suggestAlignment()},_getStdModTemplate:function(t){return e.Node.create(e.Popover.TEMPLATES[t],this._stdModNode.get("ownerDocument"))},_widgetUiSetVisible:e.Widget.prototype._uiSetVisible},{CSS_PREFIX:r("popover"),ATTRS:{triggerToggleEvent:{value:"click"}},TEMPLATES:{header:'<div class="'+n.SECTION_CLASS_NAMES[n.HEADER]+" "+u+'"></div>',body:'<div class="'+n.SECTION_CLASS_NAMES[n.BODY]+" "+s+'"></div>',footer:'<div class="'+n.SECTION_CLASS_NAMES[n.FOOTER]+" "+o+'"></div>',arrow:'<div class="'+i+'"></div>'}})},"3.0.3-deprecated.2",{requires:["event-resize","widget","widget-autohide","widget-buttons","widget-modality","widget-position","widget-position-align","widget-position-constrain","widget-stack","widget-stdmod","aui-classnamemanager","aui-widget-cssclass","aui-widget-toggle","aui-widget-toolbars","aui-widget-transition","aui-widget-trigger","aui-widget-position-align-suggestion","aui-component","aui-node-base"],skinnable:!0});
