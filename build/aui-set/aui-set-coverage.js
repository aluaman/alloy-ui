if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-set/aui-set.js']) {
   __coverage__['build/aui-set/aui-set.js'] = {"path":"build/aui-set/aui-set.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":19},"end":{"line":1,"column":38}}},"2":{"name":"(anonymous_2)","line":28,"loc":{"start":{"line":28,"column":17},"end":{"line":28,"column":28}}},"3":{"name":"(anonymous_3)","line":51,"loc":{"start":{"line":51,"column":9},"end":{"line":51,"column":25}}},"4":{"name":"(anonymous_4)","line":62,"loc":{"start":{"line":62,"column":11},"end":{"line":62,"column":22}}},"5":{"name":"(anonymous_5)","line":74,"loc":{"start":{"line":74,"column":9},"end":{"line":74,"column":35}}},"6":{"name":"(anonymous_6)","line":83,"loc":{"start":{"line":83,"column":13},"end":{"line":83,"column":24}}},"7":{"name":"(anonymous_7)","line":93,"loc":{"start":{"line":93,"column":12},"end":{"line":93,"column":28}}},"8":{"name":"(anonymous_8)","line":104,"loc":{"start":{"line":104,"column":10},"end":{"line":104,"column":21}}},"9":{"name":"(anonymous_9)","line":113,"loc":{"start":{"line":113,"column":12},"end":{"line":113,"column":23}}},"10":{"name":"(anonymous_10)","line":125,"loc":{"start":{"line":125,"column":15},"end":{"line":125,"column":31}}},"11":{"name":"(anonymous_11)","line":136,"loc":{"start":{"line":136,"column":17},"end":{"line":136,"column":28}}},"12":{"name":"(anonymous_12)","line":139,"loc":{"start":{"line":139,"column":40},"end":{"line":139,"column":56}}},"13":{"name":"(anonymous_13)","line":152,"loc":{"start":{"line":152,"column":18},"end":{"line":152,"column":34}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":166,"column":52}},"2":{"start":{"line":19,"column":0},"end":{"line":161,"column":3}},"3":{"start":{"line":29,"column":8},"end":{"line":29,"column":28}},"4":{"start":{"line":31,"column":8},"end":{"line":31,"column":36}},"5":{"start":{"line":32,"column":8},"end":{"line":42,"column":11}},"6":{"start":{"line":52,"column":8},"end":{"line":54,"column":11}},"7":{"start":{"line":63,"column":8},"end":{"line":63,"column":27}},"8":{"start":{"line":75,"column":8},"end":{"line":75,"column":46}},"9":{"start":{"line":84,"column":8},"end":{"line":84,"column":35}},"10":{"start":{"line":94,"column":8},"end":{"line":96,"column":11}},"11":{"start":{"line":105,"column":8},"end":{"line":105,"column":32}},"12":{"start":{"line":114,"column":8},"end":{"line":114,"column":32}},"13":{"start":{"line":126,"column":8},"end":{"line":126,"column":64}},"14":{"start":{"line":137,"column":8},"end":{"line":137,"column":28}},"15":{"start":{"line":139,"column":8},"end":{"line":141,"column":11}},"16":{"start":{"line":140,"column":12},"end":{"line":140,"column":35}},"17":{"start":{"line":153,"column":8},"end":{"line":155,"column":56}},"18":{"start":{"line":157,"column":8},"end":{"line":157,"column":52}},"19":{"start":{"line":163,"column":0},"end":{"line":163,"column":16}}},"branchMap":{},"code":["(function () { YUI.add('aui-set', function (A, NAME) {","","/**"," * The Collection Utility"," *"," * @module aui-collection"," * @submodule aui-set"," */","","/**"," * A base class for HashSet."," *"," * @class A.HashSet"," * @extends Base"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","var HashSet = A.Base.create('set', A.Base, [], {","    _map: null,","","    /**","     * Construction logic executed during `A.HashSet` instantiation. Lifecycle.","     *","     * @method initializer","     * @protected","     */","    initializer: function() {","        var instance = this;","","        instance._map = new A.Map();","        instance.publish({","            add: {","                defaultFn: instance._defAddFn","            },","            clear: {","                defaultFn: instance._defClearFn","            },","            remove: {","                defaultFn: instance._defRemoveFn","            }","        });","    },","","    /**","     * Fires the `add` custom event.","     *","     * @method add","     * @param value","     */","    add: function(value) {","        this.fire('add', {","            value: value","        });","    },","","    /**","     * Fires the `clear` custom event.","     *","     * @method clear","     */","    clear: function() {","        this.fire('clear');","    },","","    /**","     * Checks if this set has the specified key.","     *","     * @method has","     * @param value","     * @param opt_hash","     * @return {Boolean}","     */","    has: function(value, opt_hash) {","        return this._map.has(value, opt_hash);","    },","","    /**","     * Returns `true` if this set contains no elements.","     *","     * @method isEmpty","     */","    isEmpty: function() {","        return this._map.isEmpty();","    },","","    /**","     * Fires the `remove` custom event with an argument.","     *","     * @method remove","     * @param value","     */","    remove: function(value) {","        this.fire('remove', {","            value: value","        });","    },","","    /**","     * Get the size of the map.","     *","     * @method size","     */","    size: function() {","        return this._map.size();","    },","","    /**","     * Get the keys of the map.","     *","     * @method values","     */","    values: function() {","        return this._map.keys();","    },","","    /**","     * Implements the `add` custom event behavior. Adds the specified element to","     * this set.","     *","     * @method _defAddFn","     * @param event","     * @protected","     */","    _defAddFn: function(event) {","        this._map.put(event.value, HashSet.PRESENT, event.hash);","    },","","    /**","     * Implements the `clear` custom event behavior. Removes all of the elements","     * from this set.","     *","     * @method _defClearFn","     * @protected","     */","    _defClearFn: function() {","        var instance = this;","","        A.Array.each(instance.values(), function(value) {","            instance.remove(value);","        });","    },","","    /**","     * Implements the `remove` custom event behavior. Removes the specified","     * element from this set if it is present.","     *","     * @method _defRemoveFn","     * @param event","     * @protected","     */","    _defRemoveFn: function(event) {","        var instance = this,","            map = instance._map,","            value = map.remove(event.value, event.hash);","","        event.removed = (value === HashSet.PRESENT);","    }","}, {","    PRESENT: {}","});","","A.Set = HashSet;","","","}, '3.0.3-deprecated.2', {\"requires\": [\"aui-map\"]});","","}());"]};
}
var __cov_y0WJJ2BKjEE8vXpoym$Ncg = __coverage__['build/aui-set/aui-set.js'];
__cov_y0WJJ2BKjEE8vXpoym$Ncg.s['1']++;YUI.add('aui-set',function(A,NAME){__cov_y0WJJ2BKjEE8vXpoym$Ncg.f['1']++;__cov_y0WJJ2BKjEE8vXpoym$Ncg.s['2']++;var HashSet=A.Base.create('set',A.Base,[],{_map:null,initializer:function(){__cov_y0WJJ2BKjEE8vXpoym$Ncg.f['2']++;__cov_y0WJJ2BKjEE8vXpoym$Ncg.s['3']++;var instance=this;__cov_y0WJJ2BKjEE8vXpoym$Ncg.s['4']++;instance._map=new A.Map();__cov_y0WJJ2BKjEE8vXpoym$Ncg.s['5']++;instance.publish({add:{defaultFn:instance._defAddFn},clear:{defaultFn:instance._defClearFn},remove:{defaultFn:instance._defRemoveFn}});},add:function(value){__cov_y0WJJ2BKjEE8vXpoym$Ncg.f['3']++;__cov_y0WJJ2BKjEE8vXpoym$Ncg.s['6']++;this.fire('add',{value:value});},clear:function(){__cov_y0WJJ2BKjEE8vXpoym$Ncg.f['4']++;__cov_y0WJJ2BKjEE8vXpoym$Ncg.s['7']++;this.fire('clear');},has:function(value,opt_hash){__cov_y0WJJ2BKjEE8vXpoym$Ncg.f['5']++;__cov_y0WJJ2BKjEE8vXpoym$Ncg.s['8']++;return this._map.has(value,opt_hash);},isEmpty:function(){__cov_y0WJJ2BKjEE8vXpoym$Ncg.f['6']++;__cov_y0WJJ2BKjEE8vXpoym$Ncg.s['9']++;return this._map.isEmpty();},remove:function(value){__cov_y0WJJ2BKjEE8vXpoym$Ncg.f['7']++;__cov_y0WJJ2BKjEE8vXpoym$Ncg.s['10']++;this.fire('remove',{value:value});},size:function(){__cov_y0WJJ2BKjEE8vXpoym$Ncg.f['8']++;__cov_y0WJJ2BKjEE8vXpoym$Ncg.s['11']++;return this._map.size();},values:function(){__cov_y0WJJ2BKjEE8vXpoym$Ncg.f['9']++;__cov_y0WJJ2BKjEE8vXpoym$Ncg.s['12']++;return this._map.keys();},_defAddFn:function(event){__cov_y0WJJ2BKjEE8vXpoym$Ncg.f['10']++;__cov_y0WJJ2BKjEE8vXpoym$Ncg.s['13']++;this._map.put(event.value,HashSet.PRESENT,event.hash);},_defClearFn:function(){__cov_y0WJJ2BKjEE8vXpoym$Ncg.f['11']++;__cov_y0WJJ2BKjEE8vXpoym$Ncg.s['14']++;var instance=this;__cov_y0WJJ2BKjEE8vXpoym$Ncg.s['15']++;A.Array.each(instance.values(),function(value){__cov_y0WJJ2BKjEE8vXpoym$Ncg.f['12']++;__cov_y0WJJ2BKjEE8vXpoym$Ncg.s['16']++;instance.remove(value);});},_defRemoveFn:function(event){__cov_y0WJJ2BKjEE8vXpoym$Ncg.f['13']++;__cov_y0WJJ2BKjEE8vXpoym$Ncg.s['17']++;var instance=this,map=instance._map,value=map.remove(event.value,event.hash);__cov_y0WJJ2BKjEE8vXpoym$Ncg.s['18']++;event.removed=value===HashSet.PRESENT;}},{PRESENT:{}});__cov_y0WJJ2BKjEE8vXpoym$Ncg.s['19']++;A.Set=HashSet;},'3.0.3-deprecated.2',{'requires':['aui-map']});
