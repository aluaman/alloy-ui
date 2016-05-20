if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-node-accessible/aui-node-accessible.js']) {
   __coverage__['build/aui-node-accessible/aui-node-accessible.js'] = {"path":"build/aui-node-accessible/aui-node-accessible.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":50}}},"2":{"name":"(anonymous_2)","line":20,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":31}}},"3":{"name":"(anonymous_3)","line":32,"loc":{"start":{"line":32,"column":20},"end":{"line":32,"column":31}}},"4":{"name":"(anonymous_4)","line":44,"loc":{"start":{"line":44,"column":22},"end":{"line":44,"column":38}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":56,"column":80}},"2":{"start":{"line":11,"column":0},"end":{"line":11,"column":54}},"3":{"start":{"line":13,"column":0},"end":{"line":54,"column":3}},"4":{"start":{"line":21,"column":8},"end":{"line":21,"column":45}},"5":{"start":{"line":23,"column":8},"end":{"line":23,"column":58}},"6":{"start":{"line":33,"column":8},"end":{"line":33,"column":48}},"7":{"start":{"line":45,"column":8},"end":{"line":46,"column":53}},"8":{"start":{"line":48,"column":8},"end":{"line":52,"column":9}},"9":{"start":{"line":49,"column":12},"end":{"line":49,"column":34}},"10":{"start":{"line":51,"column":12},"end":{"line":51,"column":34}}},"branchMap":{"1":{"line":45,"type":"cond-expr","locations":[{"start":{"line":45,"column":40},"end":{"line":45,"column":45}},{"start":{"line":46,"column":16},"end":{"line":46,"column":52}}]},"2":{"line":48,"type":"if","locations":[{"start":{"line":48,"column":8},"end":{"line":48,"column":8}},{"start":{"line":48,"column":8},"end":{"line":48,"column":8}}]}},"code":["(function () { YUI.add('aui-node-accessible', function (A, NAME) {","","/**"," * A set of utility methods for Node to allow 'hiding'"," * while still allowing screen readers access."," *"," * @module aui-node-accessible"," * @submodule aui-node-accessible"," */","","var CSS_BOOTSTRAP_SR_ONLY = A.getClassName('sr-only');","","A.mix(A.Node.prototype, {","","    /**","     * Hides the node, while still keeping it accessible by screen readers.","     *","     * @method hideAccessible","     */","    hideAccessible: function() {","        this.addClass(CSS_BOOTSTRAP_SR_ONLY);","","        this.onceAfter(this.showAccessible, this, 'show');","    },","","    /**","     * Shows the node. Fires after the node-base `show` method to clean up nodes","     * which were hidden through the `hideAccessible` method.","     *","     * @method showAccessible","     */","    showAccessible: function() {","        this.removeClass(CSS_BOOTSTRAP_SR_ONLY);","    },","","    /**","     * Toggles the node visibility, while still keeping it accessible by screen\\","     * readers.","     *","     * @param {Boolean} force If true the node will be shown, otherwise it will","     *     be hidden.","     * @method toggleAccessible","     */","    toggleAccessible: function(force) {","        force = (force !== undefined) ? force :","                this.hasClass(CSS_BOOTSTRAP_SR_ONLY);","","        if (force) {","            this.showAccessible();","        } else {","            this.hideAccessible();","        }","    }","});","","}, '3.0.3-deprecated.34', {\"requires\": [\"aui-node-base\", \"event-custom-base\"]});","","}());"]};
}
var __cov_he8NjsVRwxS8EkzdRJFMTQ = __coverage__['build/aui-node-accessible/aui-node-accessible.js'];
__cov_he8NjsVRwxS8EkzdRJFMTQ.s['1']++;YUI.add('aui-node-accessible',function(A,NAME){__cov_he8NjsVRwxS8EkzdRJFMTQ.f['1']++;__cov_he8NjsVRwxS8EkzdRJFMTQ.s['2']++;var CSS_BOOTSTRAP_SR_ONLY=A.getClassName('sr-only');__cov_he8NjsVRwxS8EkzdRJFMTQ.s['3']++;A.mix(A.Node.prototype,{hideAccessible:function(){__cov_he8NjsVRwxS8EkzdRJFMTQ.f['2']++;__cov_he8NjsVRwxS8EkzdRJFMTQ.s['4']++;this.addClass(CSS_BOOTSTRAP_SR_ONLY);__cov_he8NjsVRwxS8EkzdRJFMTQ.s['5']++;this.onceAfter(this.showAccessible,this,'show');},showAccessible:function(){__cov_he8NjsVRwxS8EkzdRJFMTQ.f['3']++;__cov_he8NjsVRwxS8EkzdRJFMTQ.s['6']++;this.removeClass(CSS_BOOTSTRAP_SR_ONLY);},toggleAccessible:function(force){__cov_he8NjsVRwxS8EkzdRJFMTQ.f['4']++;__cov_he8NjsVRwxS8EkzdRJFMTQ.s['7']++;force=force!==undefined?(__cov_he8NjsVRwxS8EkzdRJFMTQ.b['1'][0]++,force):(__cov_he8NjsVRwxS8EkzdRJFMTQ.b['1'][1]++,this.hasClass(CSS_BOOTSTRAP_SR_ONLY));__cov_he8NjsVRwxS8EkzdRJFMTQ.s['8']++;if(force){__cov_he8NjsVRwxS8EkzdRJFMTQ.b['2'][0]++;__cov_he8NjsVRwxS8EkzdRJFMTQ.s['9']++;this.showAccessible();}else{__cov_he8NjsVRwxS8EkzdRJFMTQ.b['2'][1]++;__cov_he8NjsVRwxS8EkzdRJFMTQ.s['10']++;this.hideAccessible();}}});},'3.0.3-deprecated.34',{'requires':['aui-node-base','event-custom-base']});
