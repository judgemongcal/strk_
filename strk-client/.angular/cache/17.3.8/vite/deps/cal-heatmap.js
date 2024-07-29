import {
  __objRest,
  __spreadProps,
  __spreadValues,
  __yieldStar
} from "./chunk-EGKP3FWG.js";

// node_modules/d3-selection/src/namespaces.js
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces_default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

// node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
    name = name.slice(i + 1);
  return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
}

// node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator_default(name) {
  var fullname = namespace_default(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}

// node_modules/d3-selection/src/selector.js
function none() {
}
function selector_default(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

// node_modules/d3-selection/src/selection/select.js
function select_default(select) {
  if (typeof select !== "function")
    select = selector_default(select);
  for (var groups2 = this._groups, m = groups2.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, subgroup = subgroups[j] = new Array(n), node2, subnode, i = 0; i < n; ++i) {
      if ((node2 = group2[i]) && (subnode = select.call(node2, node2.__data__, i, group2))) {
        if ("__data__" in node2)
          subnode.__data__ = node2.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/array.js
function array(x3) {
  return x3 == null ? [] : Array.isArray(x3) ? x3 : Array.from(x3);
}

// node_modules/d3-selection/src/selectorAll.js
function empty() {
  return [];
}
function selectorAll_default(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

// node_modules/d3-selection/src/selection/selectAll.js
function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}
function selectAll_default(select) {
  if (typeof select === "function")
    select = arrayAll(select);
  else
    select = selectorAll_default(select);
  for (var groups2 = this._groups, m = groups2.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, node2, i = 0; i < n; ++i) {
      if (node2 = group2[i]) {
        subgroups.push(select.call(node2, node2.__data__, i, group2));
        parents.push(node2);
      }
    }
  }
  return new Selection(subgroups, parents);
}

// node_modules/d3-selection/src/matcher.js
function matcher_default(selector) {
  return function() {
    return this.matches(selector);
  };
}
function childMatcher(selector) {
  return function(node2) {
    return node2.matches(selector);
  };
}

// node_modules/d3-selection/src/selection/selectChild.js
var find = Array.prototype.find;
function childFind(match2) {
  return function() {
    return find.call(this.children, match2);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selectChild_default(match2) {
  return this.select(match2 == null ? childFirst : childFind(typeof match2 === "function" ? match2 : childMatcher(match2)));
}

// node_modules/d3-selection/src/selection/selectChildren.js
var filter = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
function childrenFilter(match2) {
  return function() {
    return filter.call(this.children, match2);
  };
}
function selectChildren_default(match2) {
  return this.selectAll(match2 == null ? children : childrenFilter(typeof match2 === "function" ? match2 : childMatcher(match2)));
}

// node_modules/d3-selection/src/selection/filter.js
function filter_default(match2) {
  if (typeof match2 !== "function")
    match2 = matcher_default(match2);
  for (var groups2 = this._groups, m = groups2.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, subgroup = subgroups[j] = [], node2, i = 0; i < n; ++i) {
      if ((node2 = group2[i]) && match2.call(node2, node2.__data__, i, group2)) {
        subgroup.push(node2);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/selection/sparse.js
function sparse_default(update) {
  return new Array(update.length);
}

// node_modules/d3-selection/src/selection/enter.js
function enter_default() {
  return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next2) {
    return this._parent.insertBefore(child, next2);
  },
  querySelector: function(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

// node_modules/d3-selection/src/constant.js
function constant_default(x3) {
  return function() {
    return x3;
  };
}

// node_modules/d3-selection/src/selection/data.js
function bindIndex(parent, group2, enter, update, exit, data2) {
  var i = 0, node2, groupLength = group2.length, dataLength = data2.length;
  for (; i < dataLength; ++i) {
    if (node2 = group2[i]) {
      node2.__data__ = data2[i];
      update[i] = node2;
    } else {
      enter[i] = new EnterNode(parent, data2[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node2 = group2[i]) {
      exit[i] = node2;
    }
  }
}
function bindKey(parent, group2, enter, update, exit, data2, key) {
  var i, node2, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group2.length, dataLength = data2.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node2 = group2[i]) {
      keyValues[i] = keyValue = key.call(node2, node2.__data__, i, group2) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node2;
      } else {
        nodeByKeyValue.set(keyValue, node2);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data2[i], i, data2) + "";
    if (node2 = nodeByKeyValue.get(keyValue)) {
      update[i] = node2;
      node2.__data__ = data2[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data2[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node2 = group2[i]) && nodeByKeyValue.get(keyValues[i]) === node2) {
      exit[i] = node2;
    }
  }
}
function datum(node2) {
  return node2.__data__;
}
function data_default(value, key) {
  if (!arguments.length)
    return Array.from(this, datum);
  var bind2 = key ? bindKey : bindIndex, parents = this._parents, groups2 = this._groups;
  if (typeof value !== "function")
    value = constant_default(value);
  for (var m = groups2.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group2 = groups2[j], groupLength = group2.length, data2 = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data2.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind2(parent, group2, enterGroup, updateGroup, exitGroup, data2, key);
    for (var i0 = 0, i1 = 0, previous, next2; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1)
          i1 = i0 + 1;
        while (!(next2 = updateGroup[i1]) && ++i1 < dataLength)
          ;
        previous._next = next2 || null;
      }
    }
  }
  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike(data2) {
  return typeof data2 === "object" && "length" in data2 ? data2 : Array.from(data2);
}

// node_modules/d3-selection/src/selection/exit.js
function exit_default() {
  return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
}

// node_modules/d3-selection/src/selection/join.js
function join_default(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter)
      enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update)
      update = update.selection();
  }
  if (onexit == null)
    exit.remove();
  else
    onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

// node_modules/d3-selection/src/selection/merge.js
function merge_default(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge3 = merges[j] = new Array(n), node2, i = 0; i < n; ++i) {
      if (node2 = group0[i] || group1[i]) {
        merge3[i] = node2;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection(merges, this._parents);
}

// node_modules/d3-selection/src/selection/order.js
function order_default() {
  for (var groups2 = this._groups, j = -1, m = groups2.length; ++j < m; ) {
    for (var group2 = groups2[j], i = group2.length - 1, next2 = group2[i], node2; --i >= 0; ) {
      if (node2 = group2[i]) {
        if (next2 && node2.compareDocumentPosition(next2) ^ 4)
          next2.parentNode.insertBefore(node2, next2);
        next2 = node2;
      }
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/sort.js
function sort_default(compare) {
  if (!compare)
    compare = ascending;
  function compareNode(a2, b) {
    return a2 && b ? compare(a2.__data__, b.__data__) : !a2 - !b;
  }
  for (var groups2 = this._groups, m = groups2.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, sortgroup = sortgroups[j] = new Array(n), node2, i = 0; i < n; ++i) {
      if (node2 = group2[i]) {
        sortgroup[i] = node2;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
function ascending(a2, b) {
  return a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
}

// node_modules/d3-selection/src/selection/call.js
function call_default() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

// node_modules/d3-selection/src/selection/nodes.js
function nodes_default() {
  return Array.from(this);
}

// node_modules/d3-selection/src/selection/node.js
function node_default() {
  for (var groups2 = this._groups, j = 0, m = groups2.length; j < m; ++j) {
    for (var group2 = groups2[j], i = 0, n = group2.length; i < n; ++i) {
      var node2 = group2[i];
      if (node2)
        return node2;
    }
  }
  return null;
}

// node_modules/d3-selection/src/selection/size.js
function size_default() {
  let size = 0;
  for (const node2 of this)
    ++size;
  return size;
}

// node_modules/d3-selection/src/selection/empty.js
function empty_default() {
  return !this.node();
}

// node_modules/d3-selection/src/selection/each.js
function each_default(callback) {
  for (var groups2 = this._groups, j = 0, m = groups2.length; j < m; ++j) {
    for (var group2 = groups2[j], i = 0, n = group2.length, node2; i < n; ++i) {
      if (node2 = group2[i])
        callback.call(node2, node2.__data__, i, group2);
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/attr.js
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction(name, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null)
      this.removeAttribute(name);
    else
      this.setAttribute(name, v2);
  };
}
function attrFunctionNS(fullname, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null)
      this.removeAttributeNS(fullname.space, fullname.local);
    else
      this.setAttributeNS(fullname.space, fullname.local, v2);
  };
}
function attr_default(name, value) {
  var fullname = namespace_default(name);
  if (arguments.length < 2) {
    var node2 = this.node();
    return fullname.local ? node2.getAttributeNS(fullname.space, fullname.local) : node2.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}

// node_modules/d3-selection/src/window.js
function window_default(node2) {
  return node2.ownerDocument && node2.ownerDocument.defaultView || node2.document && node2 || node2.defaultView;
}

// node_modules/d3-selection/src/selection/style.js
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction(name, value, priority) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null)
      this.style.removeProperty(name);
    else
      this.style.setProperty(name, v2, priority);
  };
}
function style_default(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node2, name) {
  return node2.style.getPropertyValue(name) || window_default(node2).getComputedStyle(node2, null).getPropertyValue(name);
}

// node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null)
      delete this[name];
    else
      this[name] = v2;
  };
}
function property_default(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}

// node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node2) {
  return node2.classList || new ClassList(node2);
}
function ClassList(node2) {
  this._node = node2;
  this._names = classArray(node2.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node2, names) {
  var list = classList(node2), i = -1, n = names.length;
  while (++i < n)
    list.add(names[i]);
}
function classedRemove(node2, names) {
  var list = classList(node2), i = -1, n = names.length;
  while (++i < n)
    list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function classed_default(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n)
      if (!list.contains(names[i]))
        return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}

// node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var v2 = value.apply(this, arguments);
    this.textContent = v2 == null ? "" : v2;
  };
}
function text_default(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}

// node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v2 = value.apply(this, arguments);
    this.innerHTML = v2 == null ? "" : v2;
  };
}
function html_default(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}

// node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling)
    this.parentNode.appendChild(this);
}
function raise_default() {
  return this.each(raise);
}

// node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling)
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
  return this.each(lower);
}

// node_modules/d3-selection/src/selection/append.js
function append_default(name) {
  var create4 = typeof name === "function" ? name : creator_default(name);
  return this.select(function() {
    return this.appendChild(create4.apply(this, arguments));
  });
}

// node_modules/d3-selection/src/selection/insert.js
function constantNull() {
  return null;
}
function insert_default(name, before) {
  var create4 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
  return this.select(function() {
    return this.insertBefore(create4.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

// node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent)
    parent.removeChild(this);
}
function remove_default() {
  return this.each(remove);
}

// node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function clone_default(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

// node_modules/d3-selection/src/selection/datum.js
function datum_default(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

// node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on)
      return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i)
      on.length = i;
    else
      delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on)
      for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on)
      this.__on = [o];
    else
      on.push(o);
  };
}
function on_default(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on)
      for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i)
    this.each(on(typenames[i], value, options));
  return this;
}

// node_modules/d3-selection/src/selection/dispatch.js
function dispatchEvent(node2, type2, params) {
  var window2 = window_default(node2), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type2, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params)
      event.initEvent(type2, params.bubbles, params.cancelable), event.detail = params.detail;
    else
      event.initEvent(type2, false, false);
  }
  node2.dispatchEvent(event);
}
function dispatchConstant(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params);
  };
}
function dispatchFunction(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params.apply(this, arguments));
  };
}
function dispatch_default(type2, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type2, params));
}

// node_modules/d3-selection/src/selection/iterator.js
function* iterator_default() {
  for (var groups2 = this._groups, j = 0, m = groups2.length; j < m; ++j) {
    for (var group2 = groups2[j], i = 0, n = group2.length, node2; i < n; ++i) {
      if (node2 = group2[i])
        yield node2;
    }
  }
}

// node_modules/d3-selection/src/selection/index.js
var root = [null];
function Selection(groups2, parents) {
  this._groups = groups2;
  this._parents = parents;
}
function selection() {
  return new Selection([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: select_default,
  selectAll: selectAll_default,
  selectChild: selectChild_default,
  selectChildren: selectChildren_default,
  filter: filter_default,
  data: data_default,
  enter: enter_default,
  exit: exit_default,
  join: join_default,
  merge: merge_default,
  selection: selection_selection,
  order: order_default,
  sort: sort_default,
  call: call_default,
  nodes: nodes_default,
  node: node_default,
  size: size_default,
  empty: empty_default,
  each: each_default,
  attr: attr_default,
  style: style_default,
  property: property_default,
  classed: classed_default,
  text: text_default,
  html: html_default,
  raise: raise_default,
  lower: lower_default,
  append: append_default,
  insert: insert_default,
  remove: remove_default,
  clone: clone_default,
  datum: datum_default,
  on: on_default,
  dispatch: dispatch_default,
  [Symbol.iterator]: iterator_default
};
var selection_default = selection;

// node_modules/d3-selection/src/select.js
function select_default2(selector) {
  return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
}

// node_modules/d3-selection/src/local.js
var nextId = 0;
function local() {
  return new Local();
}
function Local() {
  this._ = "@" + (++nextId).toString(36);
}
Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node2) {
    var id3 = this._;
    while (!(id3 in node2))
      if (!(node2 = node2.parentNode))
        return;
    return node2[id3];
  },
  set: function(node2, value) {
    return node2[this._] = value;
  },
  remove: function(node2) {
    return this._ in node2 && delete node2[this._];
  },
  toString: function() {
    return this._;
  }
};

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m, l;
  format2 = (format2 + "").trim().toLowerCase();
  return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a2) {
  if (a2 <= 0)
    r = g = b = NaN;
  return new Rgb(r, g, b, a2);
}
function rgbConvert(o) {
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity2) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity2 == null ? 1 : opacity2);
}
function Rgb(r, g, b, opacity2) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity2;
}
define_default(Rgb, rgb, extend(Color, {
  brighter(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
  },
  darker(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a2 = clampa(this.opacity);
  return `${a2 === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a2 === 1 ? ")" : `, ${a2})`}`;
}
function clampa(opacity2) {
  return isNaN(opacity2) ? 1 : Math.max(0, Math.min(1, opacity2));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s2, l, a2) {
  if (a2 <= 0)
    h = s2 = l = NaN;
  else if (l <= 0 || l >= 1)
    h = s2 = NaN;
  else if (s2 <= 0)
    h = NaN;
  return new Hsl(h, s2, l, a2);
}
function hslConvert(o) {
  if (o instanceof Hsl)
    return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Hsl();
  if (o instanceof Hsl)
    return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min5 = Math.min(r, g, b), max6 = Math.max(r, g, b), h = NaN, s2 = max6 - min5, l = (max6 + min5) / 2;
  if (s2) {
    if (r === max6)
      h = (g - b) / s2 + (g < b) * 6;
    else if (g === max6)
      h = (b - r) / s2 + 2;
    else
      h = (r - g) / s2 + 4;
    s2 /= l < 0.5 ? max6 + min5 : 2 - max6 - min5;
    h *= 60;
  } else {
    s2 = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s2, l, o.opacity);
}
function hsl(h, s2, l, opacity2) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s2, l, opacity2 == null ? 1 : opacity2);
}
function Hsl(h, s2, l, opacity2) {
  this.h = +h;
  this.s = +s2;
  this.l = +l;
  this.opacity = +opacity2;
}
define_default(Hsl, hsl, extend(Color, {
  brighter(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Hsl(this.h, this.s, this.l * k2, this.opacity);
  },
  darker(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Hsl(this.h, this.s, this.l * k2, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360, s2 = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s2, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a2 = clampa(this.opacity);
    return `${a2 === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a2 === 1 ? ")" : `, ${a2})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

// node_modules/d3-color/src/math.js
var radians = Math.PI / 180;
var degrees = 180 / Math.PI;

// node_modules/d3-color/src/lab.js
var K = 18;
var Xn = 0.96422;
var Yn = 1;
var Zn = 0.82521;
var t0 = 4 / 29;
var t1 = 6 / 29;
var t2 = 3 * t1 * t1;
var t3 = t1 * t1 * t1;
function labConvert(o) {
  if (o instanceof Lab)
    return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl)
    return hcl2lab(o);
  if (!(o instanceof Rgb))
    o = rgbConvert(o);
  var r = rgb2lrgb(o.r), g = rgb2lrgb(o.g), b = rgb2lrgb(o.b), y3 = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x3, z;
  if (r === g && g === b)
    x3 = z = y3;
  else {
    x3 = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y3 - 16, 500 * (x3 - y3), 200 * (y3 - z), o.opacity);
}
function lab(l, a2, b, opacity2) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a2, b, opacity2 == null ? 1 : opacity2);
}
function Lab(l, a2, b, opacity2) {
  this.l = +l;
  this.a = +a2;
  this.b = +b;
  this.opacity = +opacity2;
}
define_default(Lab, lab, extend(Color, {
  brighter(k2) {
    return new Lab(this.l + K * (k2 == null ? 1 : k2), this.a, this.b, this.opacity);
  },
  darker(k2) {
    return new Lab(this.l - K * (k2 == null ? 1 : k2), this.a, this.b, this.opacity);
  },
  rgb() {
    var y3 = (this.l + 16) / 116, x3 = isNaN(this.a) ? y3 : y3 + this.a / 500, z = isNaN(this.b) ? y3 : y3 - this.b / 200;
    x3 = Xn * lab2xyz(x3);
    y3 = Yn * lab2xyz(y3);
    z = Zn * lab2xyz(z);
    return new Rgb(
      lrgb2rgb(3.1338561 * x3 - 1.6168667 * y3 - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x3 + 1.9161415 * y3 + 0.033454 * z),
      lrgb2rgb(0.0719453 * x3 - 0.2289914 * y3 + 1.4052427 * z),
      this.opacity
    );
  }
}));
function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}
function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}
function lrgb2rgb(x3) {
  return 255 * (x3 <= 31308e-7 ? 12.92 * x3 : 1.055 * Math.pow(x3, 1 / 2.4) - 0.055);
}
function rgb2lrgb(x3) {
  return (x3 /= 255) <= 0.04045 ? x3 / 12.92 : Math.pow((x3 + 0.055) / 1.055, 2.4);
}
function hclConvert(o) {
  if (o instanceof Hcl)
    return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab))
    o = labConvert(o);
  if (o.a === 0 && o.b === 0)
    return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * degrees;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}
function hcl(h, c4, l, opacity2) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c4, l, opacity2 == null ? 1 : opacity2);
}
function Hcl(h, c4, l, opacity2) {
  this.h = +h;
  this.c = +c4;
  this.l = +l;
  this.opacity = +opacity2;
}
function hcl2lab(o) {
  if (isNaN(o.h))
    return new Lab(o.l, 0, 0, o.opacity);
  var h = o.h * radians;
  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}
define_default(Hcl, hcl, extend(Color, {
  brighter(k2) {
    return new Hcl(this.h, this.c, this.l + K * (k2 == null ? 1 : k2), this.opacity);
  },
  darker(k2) {
    return new Hcl(this.h, this.c, this.l - K * (k2 == null ? 1 : k2), this.opacity);
  },
  rgb() {
    return hcl2lab(this).rgb();
  }
}));

// node_modules/d3-color/src/cubehelix.js
var A = -0.14861;
var B = 1.78277;
var C = -0.29227;
var D = -0.90649;
var E = 1.97294;
var ED = E * D;
var EB = E * B;
var BC_DA = B * C - D * A;
function cubehelixConvert(o) {
  if (o instanceof Cubehelix)
    return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Rgb))
    o = rgbConvert(o);
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB), bl = b - l, k2 = (E * (g - l) - C * bl) / D, s2 = Math.sqrt(k2 * k2 + bl * bl) / (E * l * (1 - l)), h = s2 ? Math.atan2(k2, bl) * degrees - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s2, l, o.opacity);
}
function cubehelix(h, s2, l, opacity2) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s2, l, opacity2 == null ? 1 : opacity2);
}
function Cubehelix(h, s2, l, opacity2) {
  this.h = +h;
  this.s = +s2;
  this.l = +l;
  this.opacity = +opacity2;
}
define_default(Cubehelix, cubehelix, extend(Color, {
  brighter(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Cubehelix(this.h, this.s, this.l * k2, this.opacity);
  },
  darker(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Cubehelix(this.h, this.s, this.l * k2, this.opacity);
  },
  rgb() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * radians, l = +this.l, a2 = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh2 = Math.cos(h), sinh2 = Math.sin(h);
    return new Rgb(
      255 * (l + a2 * (A * cosh2 + B * sinh2)),
      255 * (l + a2 * (C * cosh2 + D * sinh2)),
      255 * (l + a2 * (E * cosh2)),
      this.opacity
    );
  }
}));

// node_modules/d3-array/src/ascending.js
function ascending2(a2, b) {
  return a2 == null || b == null ? NaN : a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
}

// node_modules/d3-array/src/descending.js
function descending(a2, b) {
  return a2 == null || b == null ? NaN : b < a2 ? -1 : b > a2 ? 1 : b >= a2 ? 0 : NaN;
}

// node_modules/d3-array/src/bisector.js
function bisector(f) {
  let compare1, compare2, delta;
  if (f.length !== 2) {
    compare1 = ascending2;
    compare2 = (d, x3) => ascending2(f(d), x3);
    delta = (d, x3) => f(d) - x3;
  } else {
    compare1 = f === ascending2 || f === descending ? f : zero;
    compare2 = f;
    delta = f;
  }
  function left(a2, x3, lo = 0, hi = a2.length) {
    if (lo < hi) {
      if (compare1(x3, x3) !== 0)
        return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a2[mid], x3) < 0)
          lo = mid + 1;
        else
          hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function right(a2, x3, lo = 0, hi = a2.length) {
    if (lo < hi) {
      if (compare1(x3, x3) !== 0)
        return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a2[mid], x3) <= 0)
          lo = mid + 1;
        else
          hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function center(a2, x3, lo = 0, hi = a2.length) {
    const i = left(a2, x3, lo, hi - 1);
    return i > lo && delta(a2[i - 1], x3) > -delta(a2[i], x3) ? i - 1 : i;
  }
  return { left, center, right };
}
function zero() {
  return 0;
}

// node_modules/d3-array/src/number.js
function number(x3) {
  return x3 === null ? NaN : +x3;
}
function* numbers(values2, valueof) {
  if (valueof === void 0) {
    for (let value of values2) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index2 = -1;
    for (let value of values2) {
      if ((value = valueof(value, ++index2, values2)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}

// node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector(ascending2);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisectCenter = bisector(number).center;
var bisect_default = bisectRight;

// node_modules/d3-array/src/blur.js
var blur2 = Blur2(blurf);
var blurImage = Blur2(blurfImage);
function Blur2(blur3) {
  return function(data2, rx, ry = rx) {
    if (!((rx = +rx) >= 0))
      throw new RangeError("invalid rx");
    if (!((ry = +ry) >= 0))
      throw new RangeError("invalid ry");
    let { data: values2, width, height } = data2;
    if (!((width = Math.floor(width)) >= 0))
      throw new RangeError("invalid width");
    if (!((height = Math.floor(height !== void 0 ? height : values2.length / width)) >= 0))
      throw new RangeError("invalid height");
    if (!width || !height || !rx && !ry)
      return data2;
    const blurx = rx && blur3(rx);
    const blury = ry && blur3(ry);
    const temp = values2.slice();
    if (blurx && blury) {
      blurh(blurx, temp, values2, width, height);
      blurh(blurx, values2, temp, width, height);
      blurh(blurx, temp, values2, width, height);
      blurv(blury, values2, temp, width, height);
      blurv(blury, temp, values2, width, height);
      blurv(blury, values2, temp, width, height);
    } else if (blurx) {
      blurh(blurx, values2, temp, width, height);
      blurh(blurx, temp, values2, width, height);
      blurh(blurx, values2, temp, width, height);
    } else if (blury) {
      blurv(blury, values2, temp, width, height);
      blurv(blury, temp, values2, width, height);
      blurv(blury, values2, temp, width, height);
    }
    return data2;
  };
}
function blurh(blur3, T, S, w, h) {
  for (let y3 = 0, n = w * h; y3 < n; ) {
    blur3(T, S, y3, y3 += w, 1);
  }
}
function blurv(blur3, T, S, w, h) {
  for (let x3 = 0, n = w * h; x3 < w; ++x3) {
    blur3(T, S, x3, x3 + n, w);
  }
}
function blurfImage(radius2) {
  const blur3 = blurf(radius2);
  return (T, S, start2, stop, step) => {
    start2 <<= 2, stop <<= 2, step <<= 2;
    blur3(T, S, start2 + 0, stop + 0, step);
    blur3(T, S, start2 + 1, stop + 1, step);
    blur3(T, S, start2 + 2, stop + 2, step);
    blur3(T, S, start2 + 3, stop + 3, step);
  };
}
function blurf(radius2) {
  const radius0 = Math.floor(radius2);
  if (radius0 === radius2)
    return bluri(radius2);
  const t = radius2 - radius0;
  const w = 2 * radius2 + 1;
  return (T, S, start2, stop, step) => {
    if (!((stop -= step) >= start2))
      return;
    let sum4 = radius0 * S[start2];
    const s0 = step * radius0;
    const s1 = s0 + step;
    for (let i = start2, j = start2 + s0; i < j; i += step) {
      sum4 += S[Math.min(stop, i)];
    }
    for (let i = start2, j = stop; i <= j; i += step) {
      sum4 += S[Math.min(stop, i + s0)];
      T[i] = (sum4 + t * (S[Math.max(start2, i - s1)] + S[Math.min(stop, i + s1)])) / w;
      sum4 -= S[Math.max(start2, i - s0)];
    }
  };
}
function bluri(radius2) {
  const w = 2 * radius2 + 1;
  return (T, S, start2, stop, step) => {
    if (!((stop -= step) >= start2))
      return;
    let sum4 = radius2 * S[start2];
    const s2 = step * radius2;
    for (let i = start2, j = start2 + s2; i < j; i += step) {
      sum4 += S[Math.min(stop, i)];
    }
    for (let i = start2, j = stop; i <= j; i += step) {
      sum4 += S[Math.min(stop, i + s2)];
      T[i] = sum4 / w;
      sum4 -= S[Math.max(start2, i - s2)];
    }
  };
}

// node_modules/d3-array/src/extent.js
function extent(values2, valueof) {
  let min5;
  let max6;
  if (valueof === void 0) {
    for (const value of values2) {
      if (value != null) {
        if (min5 === void 0) {
          if (value >= value)
            min5 = max6 = value;
        } else {
          if (min5 > value)
            min5 = value;
          if (max6 < value)
            max6 = value;
        }
      }
    }
  } else {
    let index2 = -1;
    for (let value of values2) {
      if ((value = valueof(value, ++index2, values2)) != null) {
        if (min5 === void 0) {
          if (value >= value)
            min5 = max6 = value;
        } else {
          if (min5 > value)
            min5 = value;
          if (max6 < value)
            max6 = value;
        }
      }
    }
  }
  return [min5, max6];
}

// node_modules/d3-array/src/fsum.js
var Adder = class {
  constructor() {
    this._partials = new Float64Array(32);
    this._n = 0;
  }
  add(x3) {
    const p = this._partials;
    let i = 0;
    for (let j = 0; j < this._n && j < 32; j++) {
      const y3 = p[j], hi = x3 + y3, lo = Math.abs(x3) < Math.abs(y3) ? x3 - (hi - y3) : y3 - (hi - x3);
      if (lo)
        p[i++] = lo;
      x3 = hi;
    }
    p[i] = x3;
    this._n = i + 1;
    return this;
  }
  valueOf() {
    const p = this._partials;
    let n = this._n, x3, y3, lo, hi = 0;
    if (n > 0) {
      hi = p[--n];
      while (n > 0) {
        x3 = hi;
        y3 = p[--n];
        hi = x3 + y3;
        lo = y3 - (hi - x3);
        if (lo)
          break;
      }
      if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
        y3 = lo * 2;
        x3 = hi + y3;
        if (y3 == x3 - hi)
          hi = x3;
      }
    }
    return hi;
  }
};

// node_modules/internmap/src/index.js
var InternMap = class extends Map {
  constructor(entries2, key = keyof) {
    super();
    Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
    if (entries2 != null)
      for (const [key2, value] of entries2)
        this.set(key2, value);
  }
  get(key) {
    return super.get(intern_get(this, key));
  }
  has(key) {
    return super.has(intern_get(this, key));
  }
  set(key, value) {
    return super.set(intern_set(this, key), value);
  }
  delete(key) {
    return super.delete(intern_delete(this, key));
  }
};
var InternSet = class extends Set {
  constructor(values2, key = keyof) {
    super();
    Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
    if (values2 != null)
      for (const value of values2)
        this.add(value);
  }
  has(value) {
    return super.has(intern_get(this, value));
  }
  add(value) {
    return super.add(intern_set(this, value));
  }
  delete(value) {
    return super.delete(intern_delete(this, value));
  }
};
function intern_get({ _intern, _key }, value) {
  const key = _key(value);
  return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key))
    return _intern.get(key);
  _intern.set(key, value);
  return value;
}
function intern_delete({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) {
    value = _intern.get(key);
    _intern.delete(key);
  }
  return value;
}
function keyof(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}

// node_modules/d3-array/src/permute.js
function permute(source, keys4) {
  return Array.from(keys4, (key) => source[key]);
}

// node_modules/d3-array/src/sort.js
function sort(values2, ...F) {
  if (typeof values2[Symbol.iterator] !== "function")
    throw new TypeError("values is not iterable");
  values2 = Array.from(values2);
  let [f] = F;
  if (f && f.length !== 2 || F.length > 1) {
    const index2 = Uint32Array.from(values2, (d, i) => i);
    if (F.length > 1) {
      F = F.map((f2) => values2.map(f2));
      index2.sort((i, j) => {
        for (const f2 of F) {
          const c4 = ascendingDefined(f2[i], f2[j]);
          if (c4)
            return c4;
        }
      });
    } else {
      f = values2.map(f);
      index2.sort((i, j) => ascendingDefined(f[i], f[j]));
    }
    return permute(values2, index2);
  }
  return values2.sort(compareDefined(f));
}
function compareDefined(compare = ascending2) {
  if (compare === ascending2)
    return ascendingDefined;
  if (typeof compare !== "function")
    throw new TypeError("compare is not a function");
  return (a2, b) => {
    const x3 = compare(a2, b);
    if (x3 || x3 === 0)
      return x3;
    return (compare(b, b) === 0) - (compare(a2, a2) === 0);
  };
}
function ascendingDefined(a2, b) {
  return (a2 == null || !(a2 >= a2)) - (b == null || !(b >= b)) || (a2 < b ? -1 : a2 > b ? 1 : 0);
}

// node_modules/d3-array/src/array.js
var array2 = Array.prototype;
var slice = array2.slice;
var map = array2.map;

// node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);
function tickSpec(start2, stop, count3) {
  const step = (stop - start2) / Math.max(0, count3), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start2 * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start2)
      ++i1;
    if (i2 / inc > stop)
      --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start2 / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start2)
      ++i1;
    if (i2 * inc > stop)
      --i2;
  }
  if (i2 < i1 && 0.5 <= count3 && count3 < 2)
    return tickSpec(start2, stop, count3 * 2);
  return [i1, i2, inc];
}
function ticks(start2, stop, count3) {
  stop = +stop, start2 = +start2, count3 = +count3;
  if (!(count3 > 0))
    return [];
  if (start2 === stop)
    return [start2];
  const reverse2 = stop < start2, [i1, i2, inc] = reverse2 ? tickSpec(stop, start2, count3) : tickSpec(start2, stop, count3);
  if (!(i2 >= i1))
    return [];
  const n = i2 - i1 + 1, ticks2 = new Array(n);
  if (reverse2) {
    if (inc < 0)
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i2 - i) / -inc;
    else
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i2 - i) * inc;
  } else {
    if (inc < 0)
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i1 + i) / -inc;
    else
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i1 + i) * inc;
  }
  return ticks2;
}
function tickIncrement(start2, stop, count3) {
  stop = +stop, start2 = +start2, count3 = +count3;
  return tickSpec(start2, stop, count3)[2];
}
function tickStep(start2, stop, count3) {
  stop = +stop, start2 = +start2, count3 = +count3;
  const reverse2 = stop < start2, inc = reverse2 ? tickIncrement(stop, start2, count3) : tickIncrement(start2, stop, count3);
  return (reverse2 ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}

// node_modules/d3-array/src/max.js
function max(values2, valueof) {
  let max6;
  if (valueof === void 0) {
    for (const value of values2) {
      if (value != null && (max6 < value || max6 === void 0 && value >= value)) {
        max6 = value;
      }
    }
  } else {
    let index2 = -1;
    for (let value of values2) {
      if ((value = valueof(value, ++index2, values2)) != null && (max6 < value || max6 === void 0 && value >= value)) {
        max6 = value;
      }
    }
  }
  return max6;
}

// node_modules/d3-array/src/min.js
function min(values2, valueof) {
  let min5;
  if (valueof === void 0) {
    for (const value of values2) {
      if (value != null && (min5 > value || min5 === void 0 && value >= value)) {
        min5 = value;
      }
    }
  } else {
    let index2 = -1;
    for (let value of values2) {
      if ((value = valueof(value, ++index2, values2)) != null && (min5 > value || min5 === void 0 && value >= value)) {
        min5 = value;
      }
    }
  }
  return min5;
}

// node_modules/d3-array/src/quickselect.js
function quickselect(array4, k2, left = 0, right = Infinity, compare) {
  k2 = Math.floor(k2);
  left = Math.floor(Math.max(0, left));
  right = Math.floor(Math.min(array4.length - 1, right));
  if (!(left <= k2 && k2 <= right))
    return array4;
  compare = compare === void 0 ? ascendingDefined : compareDefined(compare);
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k2 - left + 1;
      const z = Math.log(n);
      const s2 = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s2 * (n - s2) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k2 - m * s2 / n + sd));
      const newRight = Math.min(right, Math.floor(k2 + (n - m) * s2 / n + sd));
      quickselect(array4, k2, newLeft, newRight, compare);
    }
    const t = array4[k2];
    let i = left;
    let j = right;
    swap(array4, left, k2);
    if (compare(array4[right], t) > 0)
      swap(array4, left, right);
    while (i < j) {
      swap(array4, i, j), ++i, --j;
      while (compare(array4[i], t) < 0)
        ++i;
      while (compare(array4[j], t) > 0)
        --j;
    }
    if (compare(array4[left], t) === 0)
      swap(array4, left, j);
    else
      ++j, swap(array4, j, right);
    if (j <= k2)
      left = j + 1;
    if (k2 <= j)
      right = j - 1;
  }
  return array4;
}
function swap(array4, i, j) {
  const t = array4[i];
  array4[i] = array4[j];
  array4[j] = t;
}

// node_modules/d3-array/src/quantile.js
function quantile(values2, p, valueof) {
  values2 = Float64Array.from(numbers(values2, valueof));
  if (!(n = values2.length) || isNaN(p = +p))
    return;
  if (p <= 0 || n < 2)
    return min(values2);
  if (p >= 1)
    return max(values2);
  var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = max(quickselect(values2, i0).subarray(0, i0 + 1)), value1 = min(values2.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}
function quantileSorted(values2, p, valueof = number) {
  if (!(n = values2.length) || isNaN(p = +p))
    return;
  if (p <= 0 || n < 2)
    return +valueof(values2[0], 0, values2);
  if (p >= 1)
    return +valueof(values2[n - 1], n - 1, values2);
  var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof(values2[i0], i0, values2), value1 = +valueof(values2[i0 + 1], i0 + 1, values2);
  return value0 + (value1 - value0) * (i - i0);
}

// node_modules/d3-array/src/median.js
function median(values2, valueof) {
  return quantile(values2, 0.5, valueof);
}

// node_modules/d3-array/src/merge.js
function* flatten(arrays) {
  for (const array4 of arrays) {
    yield* __yieldStar(array4);
  }
}
function merge(arrays) {
  return Array.from(flatten(arrays));
}

// node_modules/d3-array/src/range.js
function range(start2, stop, step) {
  start2 = +start2, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start2, start2 = 0, 1) : n < 3 ? 1 : +step;
  var i = -1, n = Math.max(0, Math.ceil((stop - start2) / step)) | 0, range3 = new Array(n);
  while (++i < n) {
    range3[i] = start2 + i * step;
  }
  return range3;
}

// node_modules/d3-array/src/shuffle.js
var shuffle_default = shuffler(Math.random);
function shuffler(random) {
  return function shuffle2(array4, i0 = 0, i1 = array4.length) {
    let m = i1 - (i0 = +i0);
    while (m) {
      const i = random() * m-- | 0, t = array4[m + i0];
      array4[m + i0] = array4[i + i0];
      array4[i + i0] = t;
    }
    return array4;
  };
}

// node_modules/d3-array/src/reverse.js
function reverse(values2) {
  if (typeof values2[Symbol.iterator] !== "function")
    throw new TypeError("values is not iterable");
  return Array.from(values2).reverse();
}

// node_modules/d3-dispatch/src/dispatch.js
var noop = { value: () => {
} };
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t))
      throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames2(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._, T = parseTypenames2(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n)
        if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name)))
          return t;
      return;
    }
    if (callback != null && typeof callback !== "function")
      throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type)
        _[t] = set(_[t], typename.name, callback);
      else if (callback == null)
        for (t in _)
          _[t] = set(_[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy3 = {}, _ = this._;
    for (var t in _)
      copy3[t] = _[t].slice();
    return new Dispatch(copy3);
  },
  call: function(type2, that) {
    if ((n = arguments.length - 2) > 0)
      for (var args = new Array(n), i = 0, n, t; i < n; ++i)
        args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type2))
      throw new Error("unknown type: " + type2);
    for (t = this._[type2], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  },
  apply: function(type2, that, args) {
    if (!this._.hasOwnProperty(type2))
      throw new Error("unknown type: " + type2);
    for (var t = this._[type2], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  }
};
function get(type2, name) {
  for (var i = 0, n = type2.length, c4; i < n; ++i) {
    if ((c4 = type2[i]).name === name) {
      return c4.value;
    }
  }
}
function set(type2, name, callback) {
  for (var i = 0, n = type2.length; i < n; ++i) {
    if (type2[i].name === name) {
      type2[i] = noop, type2 = type2.slice(0, i).concat(type2.slice(i + 1));
      break;
    }
  }
  if (callback != null)
    type2.push({ name, value: callback });
  return type2;
}
var dispatch_default2 = dispatch;

// node_modules/d3-drag/src/event.js
function DragEvent(type2, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x: x3,
  y: y3,
  dx,
  dy,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type2, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    subject: { value: subject, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    identifier: { value: identifier, enumerable: true, configurable: true },
    active: { value: active, enumerable: true, configurable: true },
    x: { value: x3, enumerable: true, configurable: true },
    y: { value: y3, enumerable: true, configurable: true },
    dx: { value: dx, enumerable: true, configurable: true },
    dy: { value: dy, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

// node_modules/d3-interpolate/src/basis.js
function basis(t13, v0, v1, v2, v3) {
  var t22 = t13 * t13, t32 = t22 * t13;
  return ((1 - 3 * t13 + 3 * t22 - t32) * v0 + (4 - 6 * t22 + 3 * t32) * v1 + (1 + 3 * t13 + 3 * t22 - 3 * t32) * v2 + t32 * v3) / 6;
}
function basis_default(values2) {
  var n = values2.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values2[i], v2 = values2[i + 1], v0 = i > 0 ? values2[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values2[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values2) {
  var n = values2.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values2[(i + n - 1) % n], v1 = values2[i % n], v2 = values2[(i + 1) % n], v3 = values2[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/constant.js
var constant_default3 = (x3) => () => x3;

// node_modules/d3-interpolate/src/color.js
function linear(a2, d) {
  return function(t) {
    return a2 + t * d;
  };
}
function exponential(a2, b, y3) {
  return a2 = Math.pow(a2, y3), b = Math.pow(b, y3) - a2, y3 = 1 / y3, function(t) {
    return Math.pow(a2 + t * b, y3);
  };
}
function hue(a2, b) {
  var d = b - a2;
  return d ? linear(a2, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant_default3(isNaN(a2) ? b : a2);
}
function gamma(y3) {
  return (y3 = +y3) === 1 ? nogamma : function(a2, b) {
    return b - a2 ? exponential(a2, b, y3) : constant_default3(isNaN(a2) ? b : a2);
  };
}
function nogamma(a2, b) {
  var d = b - a2;
  return d ? linear(a2, d) : constant_default3(isNaN(a2) ? b : a2);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y3) {
  var color3 = gamma(y3);
  function rgb2(start2, end) {
    var r = color3((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color3(start2.g, end.g), b = color3(start2.b, end.b), opacity2 = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity2(t);
      return start2 + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color3;
    for (i = 0; i < n; ++i) {
      color3 = rgb(colors[i]);
      r[i] = color3.r || 0;
      g[i] = color3.g || 0;
      b[i] = color3.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color3.opacity = 1;
    return function(t) {
      color3.r = r(t);
      color3.g = g(t);
      color3.b = b(t);
      return color3 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// node_modules/d3-interpolate/src/numberArray.js
function numberArray_default(a2, b) {
  if (!b)
    b = [];
  var n = a2 ? Math.min(b.length, a2.length) : 0, c4 = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i)
      c4[i] = a2[i] * (1 - t) + b[i] * t;
    return c4;
  };
}
function isNumberArray(x3) {
  return ArrayBuffer.isView(x3) && !(x3 instanceof DataView);
}

// node_modules/d3-interpolate/src/array.js
function genericArray(a2, b) {
  var nb = b ? b.length : 0, na = a2 ? Math.min(nb, a2.length) : 0, x3 = new Array(na), c4 = new Array(nb), i;
  for (i = 0; i < na; ++i)
    x3[i] = value_default(a2[i], b[i]);
  for (; i < nb; ++i)
    c4[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i)
      c4[i] = x3[i](t);
    return c4;
  };
}

// node_modules/d3-interpolate/src/date.js
function date_default(a2, b) {
  var d = /* @__PURE__ */ new Date();
  return a2 = +a2, b = +b, function(t) {
    return d.setTime(a2 * (1 - t) + b * t), d;
  };
}

// node_modules/d3-interpolate/src/number.js
function number_default(a2, b) {
  return a2 = +a2, b = +b, function(t) {
    return a2 * (1 - t) + b * t;
  };
}

// node_modules/d3-interpolate/src/object.js
function object_default(a2, b) {
  var i = {}, c4 = {}, k2;
  if (a2 === null || typeof a2 !== "object")
    a2 = {};
  if (b === null || typeof b !== "object")
    b = {};
  for (k2 in b) {
    if (k2 in a2) {
      i[k2] = value_default(a2[k2], b[k2]);
    } else {
      c4[k2] = b[k2];
    }
  }
  return function(t) {
    for (k2 in i)
      c4[k2] = i[k2](t);
    return c4;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero2(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a2, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s2 = [], q = [];
  a2 = a2 + "", b = b + "";
  while ((am = reA.exec(a2)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s2[i])
        s2[i] += bs;
      else
        s2[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s2[i])
        s2[i] += bm;
      else
        s2[++i] = bm;
    } else {
      s2[++i] = null;
      q.push({ i, x: number_default(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s2[i])
      s2[i] += bs;
    else
      s2[++i] = bs;
  }
  return s2.length < 2 ? q[0] ? one(q[0].x) : zero2(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2)
      s2[(o = q[i2]).i] = o.x(t);
    return s2.join("");
  });
}

// node_modules/d3-interpolate/src/value.js
function value_default(a2, b) {
  var t = typeof b, c4;
  return b == null || t === "boolean" ? constant_default3(b) : (t === "number" ? number_default : t === "string" ? (c4 = color(b)) ? (b = c4, rgb_default) : string_default : b instanceof color ? rgb_default : b instanceof Date ? date_default : isNumberArray(b) ? numberArray_default : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object_default : number_default)(a2, b);
}

// node_modules/d3-interpolate/src/round.js
function round_default(a2, b) {
  return a2 = +a2, b = +b, function(t) {
    return Math.round(a2 * (1 - t) + b * t);
  };
}

// node_modules/d3-interpolate/src/transform/decompose.js
var degrees2 = 180 / Math.PI;
var identity2 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a2, b, c4, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a2 * a2 + b * b))
    a2 /= scaleX, b /= scaleX;
  if (skewX = a2 * c4 + b * d)
    c4 -= a2 * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c4 * c4 + d * d))
    c4 /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a2 * d < b * c4)
    a2 = -a2, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a2) * degrees2,
    skewX: Math.atan(skewX) * degrees2,
    scaleX,
    scaleY
  };
}

// node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity2 : decompose_default(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null)
    return identity2;
  if (!svgNode)
    svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate()))
    return identity2;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse2, pxComma, pxParen, degParen) {
  function pop(s2) {
    return s2.length ? s2.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s2, q) {
    if (xa !== xb || ya !== yb) {
      var i = s2.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb || yb) {
      s2.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a2, b, s2, q) {
    if (a2 !== b) {
      if (a2 - b > 180)
        b += 360;
      else if (b - a2 > 180)
        a2 += 360;
      q.push({ i: s2.push(pop(s2) + "rotate(", null, degParen) - 2, x: number_default(a2, b) });
    } else if (b) {
      s2.push(pop(s2) + "rotate(" + b + degParen);
    }
  }
  function skewX(a2, b, s2, q) {
    if (a2 !== b) {
      q.push({ i: s2.push(pop(s2) + "skewX(", null, degParen) - 2, x: number_default(a2, b) });
    } else if (b) {
      s2.push(pop(s2) + "skewX(" + b + degParen);
    }
  }
  function scale3(xa, ya, xb, yb, s2, q) {
    if (xa !== xb || ya !== yb) {
      var i = s2.push(pop(s2) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s2.push(pop(s2) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a2, b) {
    var s2 = [], q = [];
    a2 = parse2(a2), b = parse2(b);
    translate(a2.translateX, a2.translateY, b.translateX, b.translateY, s2, q);
    rotate(a2.rotate, b.rotate, s2, q);
    skewX(a2.skewX, b.skewX, s2, q);
    scale3(a2.scaleX, a2.scaleY, b.scaleX, b.scaleY, s2, q);
    a2 = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n)
        s2[(o = q[i]).i] = o.x(t);
      return s2.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// node_modules/d3-interpolate/src/zoom.js
var epsilon2 = 1e-12;
function cosh(x3) {
  return ((x3 = Math.exp(x3)) + 1 / x3) / 2;
}
function sinh(x3) {
  return ((x3 = Math.exp(x3)) - 1 / x3) / 2;
}
function tanh(x3) {
  return ((x3 = Math.exp(2 * x3)) - 1) / (x3 + 1);
}
var zoom_default = function zoomRho(rho, rho2, rho4) {
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      };
    } else {
      var d1 = Math.sqrt(d2), b02 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b12 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b02 * b02 + 1) - b02), r1 = Math.log(Math.sqrt(b12 * b12 + 1) - b12);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s2 = t * S, coshr0 = cosh(r0), u4 = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s2 + r0) - sinh(r0));
        return [
          ux0 + u4 * dx,
          uy0 + u4 * dy,
          w0 * coshr0 / cosh(rho * s2 + r0)
        ];
      };
    }
    i.duration = S * 1e3 * rho / Math.SQRT2;
    return i;
  }
  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };
  return zoom;
}(Math.SQRT2, 2, 4);

// node_modules/d3-interpolate/src/hsl.js
function hsl2(hue2) {
  return function(start2, end) {
    var h = hue2((start2 = hsl(start2)).h, (end = hsl(end)).h), s2 = nogamma(start2.s, end.s), l = nogamma(start2.l, end.l), opacity2 = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.h = h(t);
      start2.s = s2(t);
      start2.l = l(t);
      start2.opacity = opacity2(t);
      return start2 + "";
    };
  };
}
var hsl_default = hsl2(hue);
var hslLong = hsl2(nogamma);

// node_modules/d3-interpolate/src/lab.js
function lab2(start2, end) {
  var l = nogamma((start2 = lab(start2)).l, (end = lab(end)).l), a2 = nogamma(start2.a, end.a), b = nogamma(start2.b, end.b), opacity2 = nogamma(start2.opacity, end.opacity);
  return function(t) {
    start2.l = l(t);
    start2.a = a2(t);
    start2.b = b(t);
    start2.opacity = opacity2(t);
    return start2 + "";
  };
}

// node_modules/d3-interpolate/src/hcl.js
function hcl2(hue2) {
  return function(start2, end) {
    var h = hue2((start2 = hcl(start2)).h, (end = hcl(end)).h), c4 = nogamma(start2.c, end.c), l = nogamma(start2.l, end.l), opacity2 = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.h = h(t);
      start2.c = c4(t);
      start2.l = l(t);
      start2.opacity = opacity2(t);
      return start2 + "";
    };
  };
}
var hcl_default = hcl2(hue);
var hclLong = hcl2(nogamma);

// node_modules/d3-interpolate/src/cubehelix.js
function cubehelix2(hue2) {
  return function cubehelixGamma(y3) {
    y3 = +y3;
    function cubehelix3(start2, end) {
      var h = hue2((start2 = cubehelix(start2)).h, (end = cubehelix(end)).h), s2 = nogamma(start2.s, end.s), l = nogamma(start2.l, end.l), opacity2 = nogamma(start2.opacity, end.opacity);
      return function(t) {
        start2.h = h(t);
        start2.s = s2(t);
        start2.l = l(Math.pow(t, y3));
        start2.opacity = opacity2(t);
        return start2 + "";
      };
    }
    cubehelix3.gamma = cubehelixGamma;
    return cubehelix3;
  }(1);
}
var cubehelix_default = cubehelix2(hue);
var cubehelixLong = cubehelix2(nogamma);

// node_modules/d3-interpolate/src/piecewise.js
function piecewise(interpolate, values2) {
  if (values2 === void 0)
    values2 = interpolate, interpolate = value_default;
  var i = 0, n = values2.length - 1, v2 = values2[0], I = new Array(n < 0 ? 0 : n);
  while (i < n)
    I[i] = interpolate(v2, v2 = values2[++i]);
  return function(t) {
    var i2 = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i2](t - i2);
  };
}

// node_modules/d3-interpolate/src/quantize.js
function quantize_default(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i)
    samples[i] = interpolator(i / (n - 1));
  return samples;
}

// node_modules/d3-timer/src/timer.js
var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1e3;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time2) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");
    time2 = (time2 == null ? now() : +time2) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail)
        taskTail._next = this;
      else
        taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time2;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time2) {
  var t = new Timer();
  t.restart(callback, delay, time2);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0)
      t._call.call(void 0, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay)
    clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t03, t13 = taskHead, t22, time2 = Infinity;
  while (t13) {
    if (t13._call) {
      if (time2 > t13._time)
        time2 = t13._time;
      t03 = t13, t13 = t13._next;
    } else {
      t22 = t13._next, t13._next = null;
      t13 = t03 ? t03._next = t22 : taskHead = t22;
    }
  }
  taskTail = t03;
  sleep(time2);
}
function sleep(time2) {
  if (frame)
    return;
  if (timeout)
    timeout = clearTimeout(timeout);
  var delay = time2 - clockNow;
  if (delay > 24) {
    if (time2 < Infinity)
      timeout = setTimeout(wake, time2 - clock.now() - clockSkew);
    if (interval)
      interval = clearInterval(interval);
  } else {
    if (!interval)
      clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

// node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay, time2) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time2);
  return t;
}

// node_modules/d3-transition/src/transition/schedule.js
var emptyOn = dispatch_default2("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule_default(node2, name, id3, index2, group2, timing) {
  var schedules = node2.__transition;
  if (!schedules)
    node2.__transition = {};
  else if (id3 in schedules)
    return;
  create(node2, id3, {
    name,
    index: index2,
    // For context during callback.
    group: group2,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node2, id3) {
  var schedule = get2(node2, id3);
  if (schedule.state > CREATED)
    throw new Error("too late; already scheduled");
  return schedule;
}
function set2(node2, id3) {
  var schedule = get2(node2, id3);
  if (schedule.state > STARTED)
    throw new Error("too late; already running");
  return schedule;
}
function get2(node2, id3) {
  var schedule = node2.__transition;
  if (!schedule || !(schedule = schedule[id3]))
    throw new Error("transition not found");
  return schedule;
}
function create(node2, id3, self2) {
  var schedules = node2.__transition, tween;
  schedules[id3] = self2;
  self2.timer = timer(schedule, 0, self2.time);
  function schedule(elapsed) {
    self2.state = SCHEDULED;
    self2.timer.restart(start2, self2.delay, self2.time);
    if (self2.delay <= elapsed)
      start2(elapsed - self2.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self2.state !== SCHEDULED)
      return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self2.name)
        continue;
      if (o.state === STARTED)
        return timeout_default(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node2, node2.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id3) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node2, node2.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout_default(function() {
      if (self2.state === STARTED) {
        self2.state = RUNNING;
        self2.timer.restart(tick, self2.delay, self2.time);
        tick(elapsed);
      }
    });
    self2.state = STARTING;
    self2.on.call("start", node2, node2.__data__, self2.index, self2.group);
    if (self2.state !== STARTING)
      return;
    self2.state = STARTED;
    tween = new Array(n = self2.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self2.tween[i].value.call(node2, node2.__data__, self2.index, self2.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self2.duration ? self2.ease.call(null, elapsed / self2.duration) : (self2.timer.restart(stop), self2.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node2, t);
    }
    if (self2.state === ENDING) {
      self2.on.call("end", node2, node2.__data__, self2.index, self2.group);
      stop();
    }
  }
  function stop() {
    self2.state = ENDED;
    self2.timer.stop();
    delete schedules[id3];
    for (var i in schedules)
      return;
    delete node2.__transition;
  }
}

// node_modules/d3-transition/src/interrupt.js
function interrupt_default(node2, name) {
  var schedules = node2.__transition, schedule, active, empty3 = true, i;
  if (!schedules)
    return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty3 = false;
      continue;
    }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node2, node2.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }
  if (empty3)
    delete node2.__transition;
}

// node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default2(name) {
  return this.each(function() {
    interrupt_default(this, name);
  });
}

// node_modules/d3-transition/src/transition/tween.js
function tweenRemove(id3, name) {
  var tween0, tween1;
  return function() {
    var schedule = set2(this, id3), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule.tween = tween1;
  };
}
function tweenFunction(id3, name, value) {
  var tween0, tween1;
  if (typeof value !== "function")
    throw new Error();
  return function() {
    var schedule = set2(this, id3), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n)
        tween1.push(t);
    }
    schedule.tween = tween1;
  };
}
function tween_default(name, value) {
  var id3 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get2(this.node(), id3).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id3, name, value));
}
function tweenValue(transition2, name, value) {
  var id3 = transition2._id;
  transition2.each(function() {
    var schedule = set2(this, id3);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node2) {
    return get2(node2, id3).value[name];
  };
}

// node_modules/d3-transition/src/transition/interpolate.js
function interpolate_default(a2, b) {
  var c4;
  return (typeof b === "number" ? number_default : b instanceof color ? rgb_default : (c4 = color(b)) ? (b = c4, rgb_default) : string_default)(a2, b);
}

// node_modules/d3-transition/src/transition/attr.js
function attrRemove2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrConstantNS2(fullname, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attrFunctionNS2(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attr_default2(name, value) {
  var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value));
}

// node_modules/d3-transition/src/transition/attrTween.js
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t03, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t03 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t03;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t03, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t03 = (i0 = i) && attrInterpolate(name, i);
    return t03;
  }
  tween._value = value;
  return tween;
}
function attrTween_default(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  var fullname = namespace_default(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

// node_modules/d3-transition/src/transition/delay.js
function delayFunction(id3, value) {
  return function() {
    init(this, id3).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id3, value) {
  return value = +value, function() {
    init(this, id3).delay = value;
  };
}
function delay_default(value) {
  var id3 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id3, value)) : get2(this.node(), id3).delay;
}

// node_modules/d3-transition/src/transition/duration.js
function durationFunction(id3, value) {
  return function() {
    set2(this, id3).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id3, value) {
  return value = +value, function() {
    set2(this, id3).duration = value;
  };
}
function duration_default(value) {
  var id3 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id3, value)) : get2(this.node(), id3).duration;
}

// node_modules/d3-transition/src/transition/ease.js
function easeConstant(id3, value) {
  if (typeof value !== "function")
    throw new Error();
  return function() {
    set2(this, id3).ease = value;
  };
}
function ease_default(value) {
  var id3 = this._id;
  return arguments.length ? this.each(easeConstant(id3, value)) : get2(this.node(), id3).ease;
}

// node_modules/d3-transition/src/transition/easeVarying.js
function easeVarying(id3, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (typeof v2 !== "function")
      throw new Error();
    set2(this, id3).ease = v2;
  };
}
function easeVarying_default(value) {
  if (typeof value !== "function")
    throw new Error();
  return this.each(easeVarying(this._id, value));
}

// node_modules/d3-transition/src/transition/filter.js
function filter_default2(match2) {
  if (typeof match2 !== "function")
    match2 = matcher_default(match2);
  for (var groups2 = this._groups, m = groups2.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, subgroup = subgroups[j] = [], node2, i = 0; i < n; ++i) {
      if ((node2 = group2[i]) && match2.call(node2, node2.__data__, i, group2)) {
        subgroup.push(node2);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/merge.js
function merge_default2(transition2) {
  if (transition2._id !== this._id)
    throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge3 = merges[j] = new Array(n), node2, i = 0; i < n; ++i) {
      if (node2 = group0[i] || group1[i]) {
        merge3[i] = node2;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/on.js
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0)
      t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id3, name, listener) {
  var on0, on1, sit = start(name) ? init : set2;
  return function() {
    var schedule = sit(this, id3), on = schedule.on;
    if (on !== on0)
      (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}
function on_default2(name, listener) {
  var id3 = this._id;
  return arguments.length < 2 ? get2(this.node(), id3).on.on(name) : this.each(onFunction(id3, name, listener));
}

// node_modules/d3-transition/src/transition/remove.js
function removeFunction(id3) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition)
      if (+i !== id3)
        return;
    if (parent)
      parent.removeChild(this);
  };
}
function remove_default2() {
  return this.on("end.remove", removeFunction(this._id));
}

// node_modules/d3-transition/src/transition/select.js
function select_default3(select) {
  var name = this._name, id3 = this._id;
  if (typeof select !== "function")
    select = selector_default(select);
  for (var groups2 = this._groups, m = groups2.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, subgroup = subgroups[j] = new Array(n), node2, subnode, i = 0; i < n; ++i) {
      if ((node2 = group2[i]) && (subnode = select.call(node2, node2.__data__, i, group2))) {
        if ("__data__" in node2)
          subnode.__data__ = node2.__data__;
        subgroup[i] = subnode;
        schedule_default(subgroup[i], name, id3, i, subgroup, get2(node2, id3));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id3);
}

// node_modules/d3-transition/src/transition/selectAll.js
function selectAll_default3(select) {
  var name = this._name, id3 = this._id;
  if (typeof select !== "function")
    select = selectorAll_default(select);
  for (var groups2 = this._groups, m = groups2.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, node2, i = 0; i < n; ++i) {
      if (node2 = group2[i]) {
        for (var children2 = select.call(node2, node2.__data__, i, group2), child, inherit2 = get2(node2, id3), k2 = 0, l = children2.length; k2 < l; ++k2) {
          if (child = children2[k2]) {
            schedule_default(child, name, id3, k2, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node2);
      }
    }
  }
  return new Transition(subgroups, parents, name, id3);
}

// node_modules/d3-transition/src/transition/selection.js
var Selection2 = selection_default.prototype.constructor;
function selection_default2() {
  return new Selection2(this._groups, this._parents);
}

// node_modules/d3-transition/src/transition/style.js
function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}
function styleRemove2(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function styleFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null)
      string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function styleMaybeRemove(id3, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule = set2(this, id3), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
    if (on !== on0 || listener0 !== listener)
      (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule.on = on1;
  };
}
function style_default2(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i, value), priority).on("end.style." + name, null);
}

// node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function styleTween_default(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

// node_modules/d3-transition/src/transition/text.js
function textConstant2(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function text_default2(value) {
  return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
}

// node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t03, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t03 = (i0 = i) && textInterpolate(i);
    return t03;
  }
  tween._value = value;
  return tween;
}
function textTween_default(value) {
  var key = "text";
  if (arguments.length < 1)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, textTween(value));
}

// node_modules/d3-transition/src/transition/transition.js
function transition_default() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups2 = this._groups, m = groups2.length, j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, node2, i = 0; i < n; ++i) {
      if (node2 = group2[i]) {
        var inherit2 = get2(node2, id0);
        schedule_default(node2, name, id1, i, group2, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups2, this._parents, name, id1);
}

// node_modules/d3-transition/src/transition/end.js
function end_default() {
  var on0, on1, that = this, id3 = that._id, size = that.size();
  return new Promise(function(resolve2, reject2) {
    var cancel = { value: reject2 }, end = { value: function() {
      if (--size === 0)
        resolve2();
    } };
    that.each(function() {
      var schedule = set2(this, id3), on = schedule.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule.on = on1;
    });
    if (size === 0)
      resolve2();
  });
}

// node_modules/d3-transition/src/transition/index.js
var id = 0;
function Transition(groups2, parents, name, id3) {
  this._groups = groups2;
  this._parents = parents;
  this._name = name;
  this._id = id3;
}
function transition(name) {
  return selection_default().transition(name);
}
function newId() {
  return ++id;
}
var selection_prototype = selection_default.prototype;
Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: select_default3,
  selectAll: selectAll_default3,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: filter_default2,
  merge: merge_default2,
  selection: selection_default2,
  transition: transition_default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: on_default2,
  attr: attr_default2,
  attrTween: attrTween_default,
  style: style_default2,
  styleTween: styleTween_default,
  text: text_default2,
  textTween: textTween_default,
  remove: remove_default2,
  tween: tween_default,
  delay: delay_default,
  duration: duration_default,
  ease: ease_default,
  easeVarying: easeVarying_default,
  end: end_default,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

// node_modules/d3-ease/src/cubic.js
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

// node_modules/d3-ease/src/poly.js
var exponent = 3;
var polyIn = function custom(e) {
  e = +e;
  function polyIn2(t) {
    return Math.pow(t, e);
  }
  polyIn2.exponent = custom;
  return polyIn2;
}(exponent);
var polyOut = function custom2(e) {
  e = +e;
  function polyOut2(t) {
    return 1 - Math.pow(1 - t, e);
  }
  polyOut2.exponent = custom2;
  return polyOut2;
}(exponent);
var polyInOut = function custom3(e) {
  e = +e;
  function polyInOut2(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }
  polyInOut2.exponent = custom3;
  return polyInOut2;
}(exponent);

// node_modules/d3-ease/src/sin.js
var pi = Math.PI;
var halfPi = pi / 2;

// node_modules/d3-ease/src/math.js
function tpmt(x3) {
  return (Math.pow(2, -10 * x3) - 9765625e-10) * 1.0009775171065494;
}

// node_modules/d3-ease/src/bounce.js
var b1 = 4 / 11;
var b2 = 6 / 11;
var b3 = 8 / 11;
var b4 = 3 / 4;
var b5 = 9 / 11;
var b6 = 10 / 11;
var b7 = 15 / 16;
var b8 = 21 / 22;
var b9 = 63 / 64;
var b0 = 1 / b1 / b1;

// node_modules/d3-ease/src/back.js
var overshoot = 1.70158;
var backIn = function custom4(s2) {
  s2 = +s2;
  function backIn2(t) {
    return (t = +t) * t * (s2 * (t - 1) + t);
  }
  backIn2.overshoot = custom4;
  return backIn2;
}(overshoot);
var backOut = function custom5(s2) {
  s2 = +s2;
  function backOut2(t) {
    return --t * t * ((t + 1) * s2 + t) + 1;
  }
  backOut2.overshoot = custom5;
  return backOut2;
}(overshoot);
var backInOut = function custom6(s2) {
  s2 = +s2;
  function backInOut2(t) {
    return ((t *= 2) < 1 ? t * t * ((s2 + 1) * t - s2) : (t -= 2) * t * ((s2 + 1) * t + s2) + 2) / 2;
  }
  backInOut2.overshoot = custom6;
  return backInOut2;
}(overshoot);

// node_modules/d3-ease/src/elastic.js
var tau = 2 * Math.PI;
var amplitude = 1;
var period = 0.3;
var elasticIn = function custom7(a2, p) {
  var s2 = Math.asin(1 / (a2 = Math.max(1, a2))) * (p /= tau);
  function elasticIn2(t) {
    return a2 * tpmt(- --t) * Math.sin((s2 - t) / p);
  }
  elasticIn2.amplitude = function(a3) {
    return custom7(a3, p * tau);
  };
  elasticIn2.period = function(p2) {
    return custom7(a2, p2);
  };
  return elasticIn2;
}(amplitude, period);
var elasticOut = function custom8(a2, p) {
  var s2 = Math.asin(1 / (a2 = Math.max(1, a2))) * (p /= tau);
  function elasticOut2(t) {
    return 1 - a2 * tpmt(t = +t) * Math.sin((t + s2) / p);
  }
  elasticOut2.amplitude = function(a3) {
    return custom8(a3, p * tau);
  };
  elasticOut2.period = function(p2) {
    return custom8(a2, p2);
  };
  return elasticOut2;
}(amplitude, period);
var elasticInOut = function custom9(a2, p) {
  var s2 = Math.asin(1 / (a2 = Math.max(1, a2))) * (p /= tau);
  function elasticInOut2(t) {
    return ((t = t * 2 - 1) < 0 ? a2 * tpmt(-t) * Math.sin((s2 - t) / p) : 2 - a2 * tpmt(t) * Math.sin((s2 + t) / p)) / 2;
  }
  elasticInOut2.amplitude = function(a3) {
    return custom9(a3, p * tau);
  };
  elasticInOut2.period = function(p2) {
    return custom9(a2, p2);
  };
  return elasticInOut2;
}(amplitude, period);

// node_modules/d3-transition/src/selection/transition.js
var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node2, id3) {
  var timing;
  while (!(timing = node2.__transition) || !(timing = timing[id3])) {
    if (!(node2 = node2.parentNode)) {
      throw new Error(`transition ${id3} not found`);
    }
  }
  return timing;
}
function transition_default2(name) {
  var id3, timing;
  if (name instanceof Transition) {
    id3 = name._id, name = name._name;
  } else {
    id3 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups2 = this._groups, m = groups2.length, j = 0; j < m; ++j) {
    for (var group2 = groups2[j], n = group2.length, node2, i = 0; i < n; ++i) {
      if (node2 = group2[i]) {
        schedule_default(node2, name, id3, i, group2, timing || inherit(node2, id3));
      }
    }
  }
  return new Transition(groups2, this._parents, name, id3);
}

// node_modules/d3-transition/src/selection/index.js
selection_default.prototype.interrupt = interrupt_default2;
selection_default.prototype.transition = transition_default2;

// node_modules/d3-brush/src/brush.js
var { abs, max: max2, min: min2 } = Math;
function number1(e) {
  return [+e[0], +e[1]];
}
function number2(e) {
  return [number1(e[0]), number1(e[1])];
}
var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function(x3, e) {
    return x3 == null ? null : [[+x3[0], e[0][1]], [+x3[1], e[1][1]]];
  },
  output: function(xy) {
    return xy && [xy[0][0], xy[1][0]];
  }
};
var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y3, e) {
    return y3 == null ? null : [[e[0][0], +y3[0]], [e[1][0], +y3[1]]];
  },
  output: function(xy) {
    return xy && [xy[0][1], xy[1][1]];
  }
};
var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
  input: function(xy) {
    return xy == null ? null : number2(xy);
  },
  output: function(xy) {
    return xy;
  }
};
function type(t) {
  return { type: t };
}

// node_modules/d3-chord/src/math.js
var pi2 = Math.PI;
var halfPi2 = pi2 / 2;
var tau2 = pi2 * 2;

// node_modules/d3-path/src/path.js
var pi3 = Math.PI;
var tau3 = 2 * pi3;
var epsilon = 1e-6;
var tauEpsilon = tau3 - epsilon;
function append(strings) {
  this._ += strings[0];
  for (let i = 1, n = strings.length; i < n; ++i) {
    this._ += arguments[i] + strings[i];
  }
}
function appendRound(digits) {
  let d = Math.floor(digits);
  if (!(d >= 0))
    throw new Error(`invalid digits: ${digits}`);
  if (d > 15)
    return append;
  const k2 = 10 ** d;
  return function(strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += Math.round(arguments[i] * k2) / k2 + strings[i];
    }
  };
}
var Path = class {
  constructor(digits) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
    this._append = digits == null ? append : appendRound(digits);
  }
  moveTo(x3, y3) {
    this._append`M${this._x0 = this._x1 = +x3},${this._y0 = this._y1 = +y3}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(x3, y3) {
    this._append`L${this._x1 = +x3},${this._y1 = +y3}`;
  }
  quadraticCurveTo(x12, y1, x3, y3) {
    this._append`Q${+x12},${+y1},${this._x1 = +x3},${this._y1 = +y3}`;
  }
  bezierCurveTo(x12, y1, x22, y22, x3, y3) {
    this._append`C${+x12},${+y1},${+x22},${+y22},${this._x1 = +x3},${this._y1 = +y3}`;
  }
  arcTo(x12, y1, x22, y22, r) {
    x12 = +x12, y1 = +y1, x22 = +x22, y22 = +y22, r = +r;
    if (r < 0)
      throw new Error(`negative radius: ${r}`);
    let x02 = this._x1, y0 = this._y1, x21 = x22 - x12, y21 = y22 - y1, x01 = x02 - x12, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
    if (this._x1 === null) {
      this._append`M${this._x1 = x12},${this._y1 = y1}`;
    } else if (!(l01_2 > epsilon))
      ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._append`L${this._x1 = x12},${this._y1 = y1}`;
    } else {
      let x20 = x22 - x02, y20 = y22 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi3 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
      if (Math.abs(t01 - 1) > epsilon) {
        this._append`L${x12 + t01 * x01},${y1 + t01 * y01}`;
      }
      this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x12 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
    }
  }
  arc(x3, y3, r, a0, a1, ccw) {
    x3 = +x3, y3 = +y3, r = +r, ccw = !!ccw;
    if (r < 0)
      throw new Error(`negative radius: ${r}`);
    let dx = r * Math.cos(a0), dy = r * Math.sin(a0), x02 = x3 + dx, y0 = y3 + dy, cw = 1 ^ ccw, da2 = ccw ? a0 - a1 : a1 - a0;
    if (this._x1 === null) {
      this._append`M${x02},${y0}`;
    } else if (Math.abs(this._x1 - x02) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._append`L${x02},${y0}`;
    }
    if (!r)
      return;
    if (da2 < 0)
      da2 = da2 % tau3 + tau3;
    if (da2 > tauEpsilon) {
      this._append`A${r},${r},0,1,${cw},${x3 - dx},${y3 - dy}A${r},${r},0,1,${cw},${this._x1 = x02},${this._y1 = y0}`;
    } else if (da2 > epsilon) {
      this._append`A${r},${r},0,${+(da2 >= pi3)},${cw},${this._x1 = x3 + r * Math.cos(a1)},${this._y1 = y3 + r * Math.sin(a1)}`;
    }
  }
  rect(x3, y3, w, h) {
    this._append`M${this._x0 = this._x1 = +x3},${this._y0 = this._y1 = +y3}h${w = +w}v${+h}h${-w}Z`;
  }
  toString() {
    return this._;
  }
};
function path() {
  return new Path();
}
path.prototype = Path.prototype;

// node_modules/d3-chord/src/array.js
var slice2 = Array.prototype.slice;

// node_modules/d3-contour/src/array.js
var array3 = Array.prototype;
var slice3 = array3.slice;

// node_modules/robust-predicates/esm/util.js
var epsilon4 = 11102230246251565e-32;
var resulterrbound = (3 + 8 * epsilon4) * epsilon4;
function vec(n) {
  return new Float64Array(n);
}

// node_modules/robust-predicates/esm/orient2d.js
var ccwerrboundA = (3 + 16 * epsilon4) * epsilon4;
var ccwerrboundB = (2 + 12 * epsilon4) * epsilon4;
var ccwerrboundC = (9 + 64 * epsilon4) * epsilon4 * epsilon4;
var B2 = vec(4);
var C1 = vec(8);
var C2 = vec(12);
var D2 = vec(16);
var u = vec(4);

// node_modules/robust-predicates/esm/orient3d.js
var o3derrboundA = (7 + 56 * epsilon4) * epsilon4;
var o3derrboundB = (3 + 28 * epsilon4) * epsilon4;
var o3derrboundC = (26 + 288 * epsilon4) * epsilon4 * epsilon4;
var bc = vec(4);
var ca = vec(4);
var ab = vec(4);
var at_b = vec(4);
var at_c = vec(4);
var bt_c = vec(4);
var bt_a = vec(4);
var ct_a = vec(4);
var ct_b = vec(4);
var bct = vec(8);
var cat = vec(8);
var abt = vec(8);
var u2 = vec(4);
var _8 = vec(8);
var _8b = vec(8);
var _16 = vec(8);
var _12 = vec(12);
var fin = vec(192);
var fin2 = vec(192);

// node_modules/robust-predicates/esm/incircle.js
var iccerrboundA = (10 + 96 * epsilon4) * epsilon4;
var iccerrboundB = (4 + 48 * epsilon4) * epsilon4;
var iccerrboundC = (44 + 576 * epsilon4) * epsilon4 * epsilon4;
var bc2 = vec(4);
var ca2 = vec(4);
var ab2 = vec(4);
var aa = vec(4);
var bb = vec(4);
var cc = vec(4);
var u3 = vec(4);
var v = vec(4);
var axtbc = vec(8);
var aytbc = vec(8);
var bxtca = vec(8);
var bytca = vec(8);
var cxtab = vec(8);
var cytab = vec(8);
var abt2 = vec(8);
var bct2 = vec(8);
var cat2 = vec(8);
var abtt = vec(4);
var bctt = vec(4);
var catt = vec(4);
var _82 = vec(8);
var _162 = vec(16);
var _16b = vec(16);
var _16c = vec(16);
var _32 = vec(32);
var _32b = vec(32);
var _48 = vec(48);
var _64 = vec(64);
var fin3 = vec(1152);
var fin22 = vec(1152);

// node_modules/robust-predicates/esm/insphere.js
var isperrboundA = (16 + 224 * epsilon4) * epsilon4;
var isperrboundB = (5 + 72 * epsilon4) * epsilon4;
var isperrboundC = (71 + 1408 * epsilon4) * epsilon4 * epsilon4;
var ab3 = vec(4);
var bc3 = vec(4);
var cd = vec(4);
var de = vec(4);
var ea = vec(4);
var ac = vec(4);
var bd = vec(4);
var ce = vec(4);
var da = vec(4);
var eb = vec(4);
var abc = vec(24);
var bcd = vec(24);
var cde = vec(24);
var dea = vec(24);
var eab = vec(24);
var abd = vec(24);
var bce = vec(24);
var cda = vec(24);
var deb = vec(24);
var eac = vec(24);
var adet = vec(1152);
var bdet = vec(1152);
var cdet = vec(1152);
var ddet = vec(1152);
var edet = vec(1152);
var abdet = vec(2304);
var cddet = vec(2304);
var cdedet = vec(3456);
var deter = vec(5760);
var _83 = vec(8);
var _8b2 = vec(8);
var _8c = vec(8);
var _163 = vec(16);
var _24 = vec(24);
var _482 = vec(48);
var _48b = vec(48);
var _96 = vec(96);
var _192 = vec(192);
var _384x = vec(384);
var _384y = vec(384);
var _384z = vec(384);
var _768 = vec(768);
var xdet = vec(96);
var ydet = vec(96);
var zdet = vec(96);
var fin4 = vec(1152);

// node_modules/delaunator/index.js
var EPSILON = Math.pow(2, -52);
var EDGE_STACK = new Uint32Array(512);

// node_modules/d3-delaunay/src/delaunay.js
var tau4 = 2 * Math.PI;

// node_modules/d3-dsv/src/dsv.js
var EOL = {};
var EOF = {};
var QUOTE = 34;
var NEWLINE = 10;
var RETURN = 13;
function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + '] || ""';
  }).join(",") + "}");
}
function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}
function inferColumns(rows) {
  var columnSet = /* @__PURE__ */ Object.create(null), columns = [];
  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });
  return columns;
}
function pad(value, width) {
  var s2 = value + "", length2 = s2.length;
  return length2 < width ? new Array(width - length2 + 1).join(0) + s2 : s2;
}
function formatYear(year) {
  return year < 0 ? "-" + pad(-year, 6) : year > 9999 ? "+" + pad(year, 6) : pad(year, 4);
}
function formatDate(date2) {
  var hours = date2.getUTCHours(), minutes = date2.getUTCMinutes(), seconds2 = date2.getUTCSeconds(), milliseconds2 = date2.getUTCMilliseconds();
  return isNaN(date2) ? "Invalid Date" : formatYear(date2.getUTCFullYear(), 4) + "-" + pad(date2.getUTCMonth() + 1, 2) + "-" + pad(date2.getUTCDate(), 2) + (milliseconds2 ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds2, 2) + "." + pad(milliseconds2, 3) + "Z" : seconds2 ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds2, 2) + "Z" : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z" : "");
}
function dsv_default(delimiter) {
  var reFormat = new RegExp('["' + delimiter + "\n\r]"), DELIMITER = delimiter.charCodeAt(0);
  function parse2(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert)
        return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }
  function parseRows(text, f) {
    var rows = [], N = text.length, I = 0, n = 0, t, eof = N <= 0, eol = false;
    if (text.charCodeAt(N - 1) === NEWLINE)
      --N;
    if (text.charCodeAt(N - 1) === RETURN)
      --N;
    function token() {
      if (eof)
        return EOF;
      if (eol)
        return eol = false, EOL;
      var i, j = I, c4;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE)
          ;
        if ((i = I) >= N)
          eof = true;
        else if ((c4 = text.charCodeAt(I++)) === NEWLINE)
          eol = true;
        else if (c4 === RETURN) {
          eol = true;
          if (text.charCodeAt(I) === NEWLINE)
            ++I;
        }
        return text.slice(j + 1, i - 1).replace(/""/g, '"');
      }
      while (I < N) {
        if ((c4 = text.charCodeAt(i = I++)) === NEWLINE)
          eol = true;
        else if (c4 === RETURN) {
          eol = true;
          if (text.charCodeAt(I) === NEWLINE)
            ++I;
        } else if (c4 !== DELIMITER)
          continue;
        return text.slice(j, i);
      }
      return eof = true, text.slice(j, N);
    }
    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF)
        row.push(t), t = token();
      if (f && (row = f(row, n++)) == null)
        continue;
      rows.push(row);
    }
    return rows;
  }
  function preformatBody(rows, columns) {
    return rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    });
  }
  function format2(rows, columns) {
    if (columns == null)
      columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
  }
  function formatBody(rows, columns) {
    if (columns == null)
      columns = inferColumns(rows);
    return preformatBody(rows, columns).join("\n");
  }
  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }
  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }
  function formatValue(value) {
    return value == null ? "" : value instanceof Date ? formatDate(value) : reFormat.test(value += "") ? '"' + value.replace(/"/g, '""') + '"' : value;
  }
  return {
    parse: parse2,
    parseRows,
    format: format2,
    formatBody,
    formatRows,
    formatRow,
    formatValue
  };
}

// node_modules/d3-dsv/src/csv.js
var csv = dsv_default(",");
var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatBody = csv.formatBody;
var csvFormatRows = csv.formatRows;
var csvFormatRow = csv.formatRow;
var csvFormatValue = csv.formatValue;

// node_modules/d3-dsv/src/tsv.js
var tsv = dsv_default("	");
var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatBody = tsv.formatBody;
var tsvFormatRows = tsv.formatRows;
var tsvFormatRow = tsv.formatRow;
var tsvFormatValue = tsv.formatValue;

// node_modules/d3-dsv/src/autoType.js
var fixtz = (/* @__PURE__ */ new Date("2019-01-01T00:00")).getHours() || (/* @__PURE__ */ new Date("2019-07-01T00:00")).getHours();

// node_modules/d3-fetch/src/text.js
function responseText(response) {
  if (!response.ok)
    throw new Error(response.status + " " + response.statusText);
  return response.text();
}
function text_default3(input, init2) {
  return fetch(input, init2).then(responseText);
}

// node_modules/d3-fetch/src/dsv.js
function dsvParse(parse2) {
  return function(input, init2, row) {
    if (arguments.length === 2 && typeof init2 === "function")
      row = init2, init2 = void 0;
    return text_default3(input, init2).then(function(response) {
      return parse2(response, row);
    });
  };
}
function dsv(delimiter, input, init2, row) {
  if (arguments.length === 3 && typeof init2 === "function")
    row = init2, init2 = void 0;
  var format2 = dsv_default(delimiter);
  return text_default3(input, init2).then(function(response) {
    return format2.parse(response, row);
  });
}
var csv2 = dsvParse(csvParse);
var tsv2 = dsvParse(tsvParse);

// node_modules/d3-fetch/src/json.js
function responseJson(response) {
  if (!response.ok)
    throw new Error(response.status + " " + response.statusText);
  if (response.status === 204 || response.status === 205)
    return;
  return response.json();
}
function json_default(input, init2) {
  return fetch(input, init2).then(responseJson);
}

// node_modules/d3-fetch/src/xml.js
function parser(type2) {
  return (input, init2) => text_default3(input, init2).then((text) => new DOMParser().parseFromString(text, type2));
}
var xml_default = parser("application/xml");
var html = parser("text/html");
var svg = parser("image/svg+xml");

// node_modules/d3-quadtree/src/add.js
function add_default(d) {
  const x3 = +this._x.call(null, d), y3 = +this._y.call(null, d);
  return add(this.cover(x3, y3), x3, y3, d);
}
function add(tree, x3, y3, d) {
  if (isNaN(x3) || isNaN(y3))
    return tree;
  var parent, node2 = tree._root, leaf = { data: d }, x02 = tree._x0, y0 = tree._y0, x12 = tree._x1, y1 = tree._y1, xm, ym, xp, yp, right, bottom, i, j;
  if (!node2)
    return tree._root = leaf, tree;
  while (node2.length) {
    if (right = x3 >= (xm = (x02 + x12) / 2))
      x02 = xm;
    else
      x12 = xm;
    if (bottom = y3 >= (ym = (y0 + y1) / 2))
      y0 = ym;
    else
      y1 = ym;
    if (parent = node2, !(node2 = node2[i = bottom << 1 | right]))
      return parent[i] = leaf, tree;
  }
  xp = +tree._x.call(null, node2.data);
  yp = +tree._y.call(null, node2.data);
  if (x3 === xp && y3 === yp)
    return leaf.next = node2, parent ? parent[i] = leaf : tree._root = leaf, tree;
  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right = x3 >= (xm = (x02 + x12) / 2))
      x02 = xm;
    else
      x12 = xm;
    if (bottom = y3 >= (ym = (y0 + y1) / 2))
      y0 = ym;
    else
      y1 = ym;
  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | xp >= xm));
  return parent[j] = node2, parent[i] = leaf, tree;
}
function addAll(data2) {
  var d, i, n = data2.length, x3, y3, xz = new Array(n), yz = new Array(n), x02 = Infinity, y0 = Infinity, x12 = -Infinity, y1 = -Infinity;
  for (i = 0; i < n; ++i) {
    if (isNaN(x3 = +this._x.call(null, d = data2[i])) || isNaN(y3 = +this._y.call(null, d)))
      continue;
    xz[i] = x3;
    yz[i] = y3;
    if (x3 < x02)
      x02 = x3;
    if (x3 > x12)
      x12 = x3;
    if (y3 < y0)
      y0 = y3;
    if (y3 > y1)
      y1 = y3;
  }
  if (x02 > x12 || y0 > y1)
    return this;
  this.cover(x02, y0).cover(x12, y1);
  for (i = 0; i < n; ++i) {
    add(this, xz[i], yz[i], data2[i]);
  }
  return this;
}

// node_modules/d3-quadtree/src/cover.js
function cover_default(x3, y3) {
  if (isNaN(x3 = +x3) || isNaN(y3 = +y3))
    return this;
  var x02 = this._x0, y0 = this._y0, x12 = this._x1, y1 = this._y1;
  if (isNaN(x02)) {
    x12 = (x02 = Math.floor(x3)) + 1;
    y1 = (y0 = Math.floor(y3)) + 1;
  } else {
    var z = x12 - x02 || 1, node2 = this._root, parent, i;
    while (x02 > x3 || x3 >= x12 || y0 > y3 || y3 >= y1) {
      i = (y3 < y0) << 1 | x3 < x02;
      parent = new Array(4), parent[i] = node2, node2 = parent, z *= 2;
      switch (i) {
        case 0:
          x12 = x02 + z, y1 = y0 + z;
          break;
        case 1:
          x02 = x12 - z, y1 = y0 + z;
          break;
        case 2:
          x12 = x02 + z, y0 = y1 - z;
          break;
        case 3:
          x02 = x12 - z, y0 = y1 - z;
          break;
      }
    }
    if (this._root && this._root.length)
      this._root = node2;
  }
  this._x0 = x02;
  this._y0 = y0;
  this._x1 = x12;
  this._y1 = y1;
  return this;
}

// node_modules/d3-quadtree/src/data.js
function data_default2() {
  var data2 = [];
  this.visit(function(node2) {
    if (!node2.length)
      do
        data2.push(node2.data);
      while (node2 = node2.next);
  });
  return data2;
}

// node_modules/d3-quadtree/src/extent.js
function extent_default(_) {
  return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}

// node_modules/d3-quadtree/src/quad.js
function quad_default(node2, x02, y0, x12, y1) {
  this.node = node2;
  this.x0 = x02;
  this.y0 = y0;
  this.x1 = x12;
  this.y1 = y1;
}

// node_modules/d3-quadtree/src/find.js
function find_default(x3, y3, radius2) {
  var data2, x02 = this._x0, y0 = this._y0, x12, y1, x22, y22, x32 = this._x1, y32 = this._y1, quads = [], node2 = this._root, q, i;
  if (node2)
    quads.push(new quad_default(node2, x02, y0, x32, y32));
  if (radius2 == null)
    radius2 = Infinity;
  else {
    x02 = x3 - radius2, y0 = y3 - radius2;
    x32 = x3 + radius2, y32 = y3 + radius2;
    radius2 *= radius2;
  }
  while (q = quads.pop()) {
    if (!(node2 = q.node) || (x12 = q.x0) > x32 || (y1 = q.y0) > y32 || (x22 = q.x1) < x02 || (y22 = q.y1) < y0)
      continue;
    if (node2.length) {
      var xm = (x12 + x22) / 2, ym = (y1 + y22) / 2;
      quads.push(
        new quad_default(node2[3], xm, ym, x22, y22),
        new quad_default(node2[2], x12, ym, xm, y22),
        new quad_default(node2[1], xm, y1, x22, ym),
        new quad_default(node2[0], x12, y1, xm, ym)
      );
      if (i = (y3 >= ym) << 1 | x3 >= xm) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    } else {
      var dx = x3 - +this._x.call(null, node2.data), dy = y3 - +this._y.call(null, node2.data), d2 = dx * dx + dy * dy;
      if (d2 < radius2) {
        var d = Math.sqrt(radius2 = d2);
        x02 = x3 - d, y0 = y3 - d;
        x32 = x3 + d, y32 = y3 + d;
        data2 = node2.data;
      }
    }
  }
  return data2;
}

// node_modules/d3-quadtree/src/remove.js
function remove_default3(d) {
  if (isNaN(x3 = +this._x.call(null, d)) || isNaN(y3 = +this._y.call(null, d)))
    return this;
  var parent, node2 = this._root, retainer, previous, next2, x02 = this._x0, y0 = this._y0, x12 = this._x1, y1 = this._y1, x3, y3, xm, ym, right, bottom, i, j;
  if (!node2)
    return this;
  if (node2.length)
    while (true) {
      if (right = x3 >= (xm = (x02 + x12) / 2))
        x02 = xm;
      else
        x12 = xm;
      if (bottom = y3 >= (ym = (y0 + y1) / 2))
        y0 = ym;
      else
        y1 = ym;
      if (!(parent = node2, node2 = node2[i = bottom << 1 | right]))
        return this;
      if (!node2.length)
        break;
      if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3])
        retainer = parent, j = i;
    }
  while (node2.data !== d)
    if (!(previous = node2, node2 = node2.next))
      return this;
  if (next2 = node2.next)
    delete node2.next;
  if (previous)
    return next2 ? previous.next = next2 : delete previous.next, this;
  if (!parent)
    return this._root = next2, this;
  next2 ? parent[i] = next2 : delete parent[i];
  if ((node2 = parent[0] || parent[1] || parent[2] || parent[3]) && node2 === (parent[3] || parent[2] || parent[1] || parent[0]) && !node2.length) {
    if (retainer)
      retainer[j] = node2;
    else
      this._root = node2;
  }
  return this;
}
function removeAll(data2) {
  for (var i = 0, n = data2.length; i < n; ++i)
    this.remove(data2[i]);
  return this;
}

// node_modules/d3-quadtree/src/root.js
function root_default() {
  return this._root;
}

// node_modules/d3-quadtree/src/size.js
function size_default2() {
  var size = 0;
  this.visit(function(node2) {
    if (!node2.length)
      do
        ++size;
      while (node2 = node2.next);
  });
  return size;
}

// node_modules/d3-quadtree/src/visit.js
function visit_default(callback) {
  var quads = [], q, node2 = this._root, child, x02, y0, x12, y1;
  if (node2)
    quads.push(new quad_default(node2, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    if (!callback(node2 = q.node, x02 = q.x0, y0 = q.y0, x12 = q.x1, y1 = q.y1) && node2.length) {
      var xm = (x02 + x12) / 2, ym = (y0 + y1) / 2;
      if (child = node2[3])
        quads.push(new quad_default(child, xm, ym, x12, y1));
      if (child = node2[2])
        quads.push(new quad_default(child, x02, ym, xm, y1));
      if (child = node2[1])
        quads.push(new quad_default(child, xm, y0, x12, ym));
      if (child = node2[0])
        quads.push(new quad_default(child, x02, y0, xm, ym));
    }
  }
  return this;
}

// node_modules/d3-quadtree/src/visitAfter.js
function visitAfter_default(callback) {
  var quads = [], next2 = [], q;
  if (this._root)
    quads.push(new quad_default(this._root, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    var node2 = q.node;
    if (node2.length) {
      var child, x02 = q.x0, y0 = q.y0, x12 = q.x1, y1 = q.y1, xm = (x02 + x12) / 2, ym = (y0 + y1) / 2;
      if (child = node2[0])
        quads.push(new quad_default(child, x02, y0, xm, ym));
      if (child = node2[1])
        quads.push(new quad_default(child, xm, y0, x12, ym));
      if (child = node2[2])
        quads.push(new quad_default(child, x02, ym, xm, y1));
      if (child = node2[3])
        quads.push(new quad_default(child, xm, ym, x12, y1));
    }
    next2.push(q);
  }
  while (q = next2.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }
  return this;
}

// node_modules/d3-quadtree/src/x.js
function defaultX(d) {
  return d[0];
}
function x_default(_) {
  return arguments.length ? (this._x = _, this) : this._x;
}

// node_modules/d3-quadtree/src/y.js
function defaultY(d) {
  return d[1];
}
function y_default(_) {
  return arguments.length ? (this._y = _, this) : this._y;
}

// node_modules/d3-quadtree/src/quadtree.js
function quadtree(nodes, x3, y3) {
  var tree = new Quadtree(x3 == null ? defaultX : x3, y3 == null ? defaultY : y3, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}
function Quadtree(x3, y3, x02, y0, x12, y1) {
  this._x = x3;
  this._y = y3;
  this._x0 = x02;
  this._y0 = y0;
  this._x1 = x12;
  this._y1 = y1;
  this._root = void 0;
}
function leaf_copy(leaf) {
  var copy3 = { data: leaf.data }, next2 = copy3;
  while (leaf = leaf.next)
    next2 = next2.next = { data: leaf.data };
  return copy3;
}
var treeProto = quadtree.prototype = Quadtree.prototype;
treeProto.copy = function() {
  var copy3 = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1), node2 = this._root, nodes, child;
  if (!node2)
    return copy3;
  if (!node2.length)
    return copy3._root = leaf_copy(node2), copy3;
  nodes = [{ source: node2, target: copy3._root = new Array(4) }];
  while (node2 = nodes.pop()) {
    for (var i = 0; i < 4; ++i) {
      if (child = node2.source[i]) {
        if (child.length)
          nodes.push({ source: child, target: node2.target[i] = new Array(4) });
        else
          node2.target[i] = leaf_copy(child);
      }
    }
  }
  return copy3;
};
treeProto.add = add_default;
treeProto.addAll = addAll;
treeProto.cover = cover_default;
treeProto.data = data_default2;
treeProto.extent = extent_default;
treeProto.find = find_default;
treeProto.remove = remove_default3;
treeProto.removeAll = removeAll;
treeProto.root = root_default;
treeProto.size = size_default2;
treeProto.visit = visit_default;
treeProto.visitAfter = visitAfter_default;
treeProto.x = x_default;
treeProto.y = y_default;

// node_modules/d3-force/src/simulation.js
var initialAngle = Math.PI * (3 - Math.sqrt(5));

// node_modules/d3-format/src/formatDecimal.js
function formatDecimal_default(x3) {
  return Math.abs(x3 = Math.round(x3)) >= 1e21 ? x3.toLocaleString("en").replace(/,/g, "") : x3.toString(10);
}
function formatDecimalParts(x3, p) {
  if ((i = (x3 = p ? x3.toExponential(p - 1) : x3.toExponential()).indexOf("e")) < 0)
    return null;
  var i, coefficient = x3.slice(0, i);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x3.slice(i + 1)
  ];
}

// node_modules/d3-format/src/exponent.js
function exponent_default(x3) {
  return x3 = formatDecimalParts(Math.abs(x3)), x3 ? x3[1] : NaN;
}

// node_modules/d3-format/src/formatGroup.js
function formatGroup_default(grouping, thousands) {
  return function(value, width) {
    var i = value.length, t = [], j = 0, g = grouping[0], length2 = 0;
    while (i > 0 && g > 0) {
      if (length2 + g + 1 > width)
        g = Math.max(1, width - length2);
      t.push(value.substring(i -= g, i + g));
      if ((length2 += g + 1) > width)
        break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}

// node_modules/d3-format/src/formatNumerals.js
function formatNumerals_default(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// node_modules/d3-format/src/formatSpecifier.js
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match2 = re.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match2;
  return new FormatSpecifier({
    fill: match2[1],
    align: match2[2],
    sign: match2[3],
    symbol: match2[4],
    zero: match2[5],
    width: match2[6],
    comma: match2[7],
    precision: match2[8] && match2[8].slice(1),
    trim: match2[9],
    type: match2[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// node_modules/d3-format/src/formatTrim.js
function formatTrim_default(s2) {
  out:
    for (var n = s2.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s2[i]) {
        case ".":
          i0 = i1 = i;
          break;
        case "0":
          if (i0 === 0)
            i0 = i;
          i1 = i;
          break;
        default:
          if (!+s2[i])
            break out;
          if (i0 > 0)
            i0 = 0;
          break;
      }
    }
  return i0 > 0 ? s2.slice(0, i0) + s2.slice(i1 + 1) : s2;
}

// node_modules/d3-format/src/formatPrefixAuto.js
var prefixExponent;
function formatPrefixAuto_default(x3, p) {
  var d = formatDecimalParts(x3, p);
  if (!d)
    return x3 + "";
  var coefficient = d[0], exponent2 = d[1], i = exponent2 - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x3, Math.max(0, p + i - 1))[0];
}

// node_modules/d3-format/src/formatRounded.js
function formatRounded_default(x3, p) {
  var d = formatDecimalParts(x3, p);
  if (!d)
    return x3 + "";
  var coefficient = d[0], exponent2 = d[1];
  return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
}

// node_modules/d3-format/src/formatTypes.js
var formatTypes_default = {
  "%": (x3, p) => (x3 * 100).toFixed(p),
  "b": (x3) => Math.round(x3).toString(2),
  "c": (x3) => x3 + "",
  "d": formatDecimal_default,
  "e": (x3, p) => x3.toExponential(p),
  "f": (x3, p) => x3.toFixed(p),
  "g": (x3, p) => x3.toPrecision(p),
  "o": (x3) => Math.round(x3).toString(8),
  "p": (x3, p) => formatRounded_default(x3 * 100, p),
  "r": formatRounded_default,
  "s": formatPrefixAuto_default,
  "X": (x3) => Math.round(x3).toString(16).toUpperCase(),
  "x": (x3) => Math.round(x3).toString(16)
};

// node_modules/d3-format/src/identity.js
function identity_default2(x3) {
  return x3;
}

// node_modules/d3-format/src/locale.js
var map3 = Array.prototype.map;
var prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function locale_default(locale3) {
  var group2 = locale3.grouping === void 0 || locale3.thousands === void 0 ? identity_default2 : formatGroup_default(map3.call(locale3.grouping, Number), locale3.thousands + ""), currencyPrefix = locale3.currency === void 0 ? "" : locale3.currency[0] + "", currencySuffix = locale3.currency === void 0 ? "" : locale3.currency[1] + "", decimal = locale3.decimal === void 0 ? "." : locale3.decimal + "", numerals = locale3.numerals === void 0 ? identity_default2 : formatNumerals_default(map3.call(locale3.numerals, String)), percent = locale3.percent === void 0 ? "%" : locale3.percent + "", minus = locale3.minus === void 0 ? "−" : locale3.minus + "", nan = locale3.nan === void 0 ? "NaN" : locale3.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill3 = specifier.fill, align = specifier.align, sign3 = specifier.sign, symbol2 = specifier.symbol, zero3 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim2 = specifier.trim, type2 = specifier.type;
    if (type2 === "n")
      comma = true, type2 = "g";
    else if (!formatTypes_default[type2])
      precision === void 0 && (precision = 12), trim2 = true, type2 = "g";
    if (zero3 || fill3 === "0" && align === "=")
      zero3 = true, fill3 = "0", align = "=";
    var prefix = symbol2 === "$" ? currencyPrefix : symbol2 === "#" && /[boxX]/.test(type2) ? "0" + type2.toLowerCase() : "", suffix = symbol2 === "$" ? currencySuffix : /[%p]/.test(type2) ? percent : "";
    var formatType = formatTypes_default[type2], maybeSuffix = /[defgprs%]/.test(type2);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type2) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix, valueSuffix = suffix, i, n, c4;
      if (type2 === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim2)
          value = formatTrim_default(value);
        if (valueNegative && +value === 0 && sign3 !== "+")
          valueNegative = false;
        valuePrefix = (valueNegative ? sign3 === "(" ? sign3 : minus : sign3 === "-" || sign3 === "(" ? "" : sign3) + valuePrefix;
        valueSuffix = (type2 === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign3 === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c4 = value.charCodeAt(i), 48 > c4 || c4 > 57) {
              valueSuffix = (c4 === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero3)
        value = group2(value, Infinity);
      var length2 = valuePrefix.length + value.length + valueSuffix.length, padding = length2 < width ? new Array(width - length2 + 1).join(fill3) : "";
      if (comma && zero3)
        value = group2(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length2 = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length2);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k2 = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
    return function(value2) {
      return f(k2 * value2) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}

// node_modules/d3-format/src/defaultLocale.js
var locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = locale_default(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

// node_modules/d3-format/src/precisionFixed.js
function precisionFixed_default(step) {
  return Math.max(0, -exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionPrefix.js
function precisionPrefix_default(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3 - exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionRound.js
function precisionRound_default(step, max6) {
  step = Math.abs(step), max6 = Math.abs(max6) - step;
  return Math.max(0, exponent_default(max6) - exponent_default(step)) + 1;
}

// node_modules/d3-geo/src/math.js
var epsilon5 = 1e-6;
var epsilon22 = 1e-12;
var pi4 = Math.PI;
var halfPi3 = pi4 / 2;
var quarterPi = pi4 / 4;
var tau5 = pi4 * 2;
var degrees3 = 180 / pi4;
var radians2 = pi4 / 180;
var abs3 = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos2 = Math.cos;
var exp = Math.exp;
var log = Math.log;
var sin2 = Math.sin;
var sign = Math.sign || function(x3) {
  return x3 > 0 ? 1 : x3 < 0 ? -1 : 0;
};
var sqrt = Math.sqrt;
var tan = Math.tan;
function acos(x3) {
  return x3 > 1 ? 0 : x3 < -1 ? pi4 : Math.acos(x3);
}
function asin(x3) {
  return x3 > 1 ? halfPi3 : x3 < -1 ? -halfPi3 : Math.asin(x3);
}

// node_modules/d3-geo/src/noop.js
function noop2() {
}

// node_modules/d3-geo/src/area.js
var areaRingSum = new Adder();
var areaSum = new Adder();

// node_modules/d3-geo/src/cartesian.js
function cartesian(spherical2) {
  var lambda = spherical2[0], phi2 = spherical2[1], cosPhi = cos2(phi2);
  return [cosPhi * cos2(lambda), cosPhi * sin2(lambda), sin2(phi2)];
}
function cartesianCross(a2, b) {
  return [a2[1] * b[2] - a2[2] * b[1], a2[2] * b[0] - a2[0] * b[2], a2[0] * b[1] - a2[1] * b[0]];
}
function cartesianNormalizeInPlace(d) {
  var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}

// node_modules/d3-geo/src/rotation.js
function rotationIdentity(lambda, phi2) {
  if (abs3(lambda) > pi4)
    lambda -= Math.round(lambda / tau5) * tau5;
  return [lambda, phi2];
}
rotationIdentity.invert = rotationIdentity;

// node_modules/d3-geo/src/clip/buffer.js
function buffer_default2() {
  var lines = [], line;
  return {
    point: function(x3, y3, m) {
      line.push([x3, y3, m]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: noop2,
    rejoin: function() {
      if (lines.length > 1)
        lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
}

// node_modules/d3-geo/src/pointEqual.js
function pointEqual_default(a2, b) {
  return abs3(a2[0] - b[0]) < epsilon5 && abs3(a2[1] - b[1]) < epsilon5;
}

// node_modules/d3-geo/src/clip/rejoin.js
function Intersection(point6, points, other, entry) {
  this.x = point6;
  this.z = points;
  this.o = other;
  this.e = entry;
  this.v = false;
  this.n = this.p = null;
}
function rejoin_default(segments, compareIntersection2, startInside, interpolate, stream) {
  var subject = [], clip = [], i, n;
  segments.forEach(function(segment) {
    if ((n2 = segment.length - 1) <= 0)
      return;
    var n2, p0 = segment[0], p1 = segment[n2], x3;
    if (pointEqual_default(p0, p1)) {
      if (!p0[2] && !p1[2]) {
        stream.lineStart();
        for (i = 0; i < n2; ++i)
          stream.point((p0 = segment[i])[0], p0[1]);
        stream.lineEnd();
        return;
      }
      p1[0] += 2 * epsilon5;
    }
    subject.push(x3 = new Intersection(p0, segment, null, true));
    clip.push(x3.o = new Intersection(p0, null, x3, false));
    subject.push(x3 = new Intersection(p1, segment, null, false));
    clip.push(x3.o = new Intersection(p1, null, x3, true));
  });
  if (!subject.length)
    return;
  clip.sort(compareIntersection2);
  link(subject);
  link(clip);
  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }
  var start2 = subject[0], points, point6;
  while (1) {
    var current = start2, isSubject = true;
    while (current.v)
      if ((current = current.n) === start2)
        return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i)
            stream.point((point6 = points[i])[0], point6[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i)
            stream.point((point6 = points[i])[0], point6[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
}
function link(array4) {
  if (!(n = array4.length))
    return;
  var n, i = 0, a2 = array4[0], b;
  while (++i < n) {
    a2.n = b = array4[i];
    b.p = a2;
    a2 = b;
  }
  a2.n = b = array4[0];
  b.p = a2;
}

// node_modules/d3-geo/src/polygonContains.js
function longitude(point6) {
  return abs3(point6[0]) <= pi4 ? point6[0] : sign(point6[0]) * ((abs3(point6[0]) + pi4) % tau5 - pi4);
}
function polygonContains_default(polygon, point6) {
  var lambda = longitude(point6), phi2 = point6[1], sinPhi = sin2(phi2), normal = [sin2(lambda), -cos2(lambda), 0], angle = 0, winding = 0;
  var sum4 = new Adder();
  if (sinPhi === 1)
    phi2 = halfPi3 + epsilon5;
  else if (sinPhi === -1)
    phi2 = -halfPi3 - epsilon5;
  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length))
      continue;
    var ring, m, point0 = ring[m - 1], lambda0 = longitude(point0), phi0 = point0[1] / 2 + quarterPi, sinPhi0 = sin2(phi0), cosPhi0 = cos2(phi0);
    for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
      var point1 = ring[j], lambda1 = longitude(point1), phi1 = point1[1] / 2 + quarterPi, sinPhi1 = sin2(phi1), cosPhi1 = cos2(phi1), delta = lambda1 - lambda0, sign3 = delta >= 0 ? 1 : -1, absDelta = sign3 * delta, antimeridian = absDelta > pi4, k2 = sinPhi0 * sinPhi1;
      sum4.add(atan2(k2 * sign3 * sin2(absDelta), cosPhi0 * cosPhi1 + k2 * cos2(absDelta)));
      angle += antimeridian ? delta + sign3 * tau5 : delta;
      if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
        var arc = cartesianCross(cartesian(point0), cartesian(point1));
        cartesianNormalizeInPlace(arc);
        var intersection2 = cartesianCross(normal, arc);
        cartesianNormalizeInPlace(intersection2);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection2[2]);
        if (phi2 > phiArc || phi2 === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }
  return (angle < -epsilon5 || angle < epsilon5 && sum4 < -epsilon22) ^ winding & 1;
}

// node_modules/d3-geo/src/clip/index.js
function clip_default(pointVisible, clipLine, interpolate, start2) {
  return function(sink) {
    var line = clipLine(sink), ringBuffer = buffer_default2(), ringSink = clipLine(ringBuffer), polygonStarted = false, polygon, segments, ring;
    var clip = {
      point: point6,
      lineStart,
      lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point6;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = merge(segments);
        var startInside = polygonContains_default(polygon, start2);
        if (segments.length) {
          if (!polygonStarted)
            sink.polygonStart(), polygonStarted = true;
          rejoin_default(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted)
            sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted)
          sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };
    function point6(lambda, phi2) {
      if (pointVisible(lambda, phi2))
        sink.point(lambda, phi2);
    }
    function pointLine(lambda, phi2) {
      line.point(lambda, phi2);
    }
    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }
    function lineEnd() {
      clip.point = point6;
      line.lineEnd();
    }
    function pointRing(lambda, phi2) {
      ring.push([lambda, phi2]);
      ringSink.point(lambda, phi2);
    }
    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }
    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();
      var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i, n = ringSegments.length, m, segment, point7;
      ring.pop();
      polygon.push(ring);
      ring = null;
      if (!n)
        return;
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted)
            sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i)
            sink.point((point7 = segment[i])[0], point7[1]);
          sink.lineEnd();
        }
        return;
      }
      if (n > 1 && clean & 2)
        ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
      segments.push(ringSegments.filter(validSegment));
    }
    return clip;
  };
}
function validSegment(segment) {
  return segment.length > 1;
}
function compareIntersection(a2, b) {
  return ((a2 = a2.x)[0] < 0 ? a2[1] - halfPi3 - epsilon5 : halfPi3 - a2[1]) - ((b = b.x)[0] < 0 ? b[1] - halfPi3 - epsilon5 : halfPi3 - b[1]);
}

// node_modules/d3-geo/src/clip/antimeridian.js
var antimeridian_default = clip_default(
  function() {
    return true;
  },
  clipAntimeridianLine,
  clipAntimeridianInterpolate,
  [-pi4, -halfPi3]
);
function clipAntimeridianLine(stream) {
  var lambda0 = NaN, phi0 = NaN, sign0 = NaN, clean;
  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda1, phi1) {
      var sign1 = lambda1 > 0 ? pi4 : -pi4, delta = abs3(lambda1 - lambda0);
      if (abs3(delta - pi4) < epsilon5) {
        stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? halfPi3 : -halfPi3);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= pi4) {
        if (abs3(lambda0 - sign0) < epsilon5)
          lambda0 -= sign0 * epsilon5;
        if (abs3(lambda1 - sign1) < epsilon5)
          lambda1 -= sign1 * epsilon5;
        phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda0 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda0 = phi0 = NaN;
    },
    clean: function() {
      return 2 - clean;
    }
  };
}
function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
  var cosPhi0, cosPhi1, sinLambda0Lambda1 = sin2(lambda0 - lambda1);
  return abs3(sinLambda0Lambda1) > epsilon5 ? atan((sin2(phi0) * (cosPhi1 = cos2(phi1)) * sin2(lambda1) - sin2(phi1) * (cosPhi0 = cos2(phi0)) * sin2(lambda0)) / (cosPhi0 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
}
function clipAntimeridianInterpolate(from3, to, direction, stream) {
  var phi2;
  if (from3 == null) {
    phi2 = direction * halfPi3;
    stream.point(-pi4, phi2);
    stream.point(0, phi2);
    stream.point(pi4, phi2);
    stream.point(pi4, 0);
    stream.point(pi4, -phi2);
    stream.point(0, -phi2);
    stream.point(-pi4, -phi2);
    stream.point(-pi4, 0);
    stream.point(-pi4, phi2);
  } else if (abs3(from3[0] - to[0]) > epsilon5) {
    var lambda = from3[0] < to[0] ? pi4 : -pi4;
    phi2 = direction * lambda / 2;
    stream.point(-lambda, phi2);
    stream.point(0, phi2);
    stream.point(lambda, phi2);
  } else {
    stream.point(to[0], to[1]);
  }
}

// node_modules/d3-geo/src/clip/rectangle.js
var clipMax = 1e9;
var clipMin = -clipMax;

// node_modules/d3-geo/src/path/area.js
var areaSum2 = new Adder();
var areaRingSum2 = new Adder();

// node_modules/d3-geo/src/path/bounds.js
var x0 = Infinity;
var x1 = -x0;

// node_modules/d3-geo/src/path/context.js
function PathContext(context) {
  this._context = context;
}
PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_) {
    return this._radius = _, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0)
      this._context.closePath();
    this._point = NaN;
  },
  point: function(x3, y3) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x3, y3);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x3, y3);
        break;
      }
      default: {
        this._context.moveTo(x3 + this._radius, y3);
        this._context.arc(x3, y3, this._radius, 0, tau5);
        break;
      }
    }
  },
  result: noop2
};

// node_modules/d3-geo/src/path/measure.js
var lengthSum = new Adder();

// node_modules/d3-geo/src/transform.js
function transformer(methods) {
  return function(stream) {
    var s2 = new TransformStream();
    for (var key in methods)
      s2[key] = methods[key];
    s2.stream = stream;
    return s2;
  };
}
function TransformStream() {
}
TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x3, y3) {
    this.stream.point(x3, y3);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};

// node_modules/d3-geo/src/projection/resample.js
var cosMinDistance = cos2(30 * radians2);

// node_modules/d3-geo/src/projection/index.js
var transformRadians = transformer({
  point: function(x3, y3) {
    this.stream.point(x3 * radians2, y3 * radians2);
  }
});

// node_modules/d3-geo/src/projection/azimuthal.js
function azimuthalRaw(scale3) {
  return function(x3, y3) {
    var cx = cos2(x3), cy = cos2(y3), k2 = scale3(cx * cy);
    if (k2 === Infinity)
      return [2, 0];
    return [
      k2 * cy * sin2(x3),
      k2 * sin2(y3)
    ];
  };
}
function azimuthalInvert(angle) {
  return function(x3, y3) {
    var z = sqrt(x3 * x3 + y3 * y3), c4 = angle(z), sc = sin2(c4), cc2 = cos2(c4);
    return [
      atan2(x3 * sc, z * cc2),
      asin(z && y3 * sc / z)
    ];
  };
}

// node_modules/d3-geo/src/projection/azimuthalEqualArea.js
var azimuthalEqualAreaRaw = azimuthalRaw(function(cxcy) {
  return sqrt(2 / (1 + cxcy));
});
azimuthalEqualAreaRaw.invert = azimuthalInvert(function(z) {
  return 2 * asin(z / 2);
});

// node_modules/d3-geo/src/projection/azimuthalEquidistant.js
var azimuthalEquidistantRaw = azimuthalRaw(function(c4) {
  return (c4 = acos(c4)) && c4 / sin2(c4);
});
azimuthalEquidistantRaw.invert = azimuthalInvert(function(z) {
  return z;
});

// node_modules/d3-geo/src/projection/mercator.js
function mercatorRaw(lambda, phi2) {
  return [lambda, log(tan((halfPi3 + phi2) / 2))];
}
mercatorRaw.invert = function(x3, y3) {
  return [x3, 2 * atan(exp(y3)) - halfPi3];
};

// node_modules/d3-geo/src/projection/equirectangular.js
function equirectangularRaw(lambda, phi2) {
  return [lambda, phi2];
}
equirectangularRaw.invert = equirectangularRaw;

// node_modules/d3-geo/src/projection/equalEarth.js
var A1 = 1.340264;
var A2 = -0.081106;
var A3 = 893e-6;
var A4 = 3796e-6;
var M = sqrt(3) / 2;
var iterations = 12;
function equalEarthRaw(lambda, phi2) {
  var l = asin(M * sin2(phi2)), l2 = l * l, l6 = l2 * l2 * l2;
  return [
    lambda * cos2(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2))),
    l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))
  ];
}
equalEarthRaw.invert = function(x3, y3) {
  var l = y3, l2 = l * l, l6 = l2 * l2 * l2;
  for (var i = 0, delta, fy, fpy; i < iterations; ++i) {
    fy = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2)) - y3;
    fpy = A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2);
    l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2;
    if (abs3(delta) < epsilon22)
      break;
  }
  return [
    M * x3 * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)) / cos2(l),
    asin(sin2(l) / M)
  ];
};

// node_modules/d3-geo/src/projection/gnomonic.js
function gnomonicRaw(x3, y3) {
  var cy = cos2(y3), k2 = cos2(x3) * cy;
  return [cy * sin2(x3) / k2, sin2(y3) / k2];
}
gnomonicRaw.invert = azimuthalInvert(atan);

// node_modules/d3-geo/src/projection/naturalEarth1.js
function naturalEarth1Raw(lambda, phi2) {
  var phi22 = phi2 * phi2, phi4 = phi22 * phi22;
  return [
    lambda * (0.8707 - 0.131979 * phi22 + phi4 * (-0.013791 + phi4 * (3971e-6 * phi22 - 1529e-6 * phi4))),
    phi2 * (1.007226 + phi22 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi22 - 5916e-6 * phi4)))
  ];
}
naturalEarth1Raw.invert = function(x3, y3) {
  var phi2 = y3, i = 25, delta;
  do {
    var phi22 = phi2 * phi2, phi4 = phi22 * phi22;
    phi2 -= delta = (phi2 * (1.007226 + phi22 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi22 - 5916e-6 * phi4))) - y3) / (1.007226 + phi22 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi22 - 5916e-6 * 11 * phi4)));
  } while (abs3(delta) > epsilon5 && --i > 0);
  return [
    x3 / (0.8707 + (phi22 = phi2 * phi2) * (-0.131979 + phi22 * (-0.013791 + phi22 * phi22 * phi22 * (3971e-6 - 1529e-6 * phi22)))),
    phi2
  ];
};

// node_modules/d3-geo/src/projection/orthographic.js
function orthographicRaw(x3, y3) {
  return [cos2(y3) * sin2(x3), sin2(y3)];
}
orthographicRaw.invert = azimuthalInvert(asin);

// node_modules/d3-geo/src/projection/stereographic.js
function stereographicRaw(x3, y3) {
  var cy = cos2(y3), k2 = 1 + cos2(x3) * cy;
  return [cy * sin2(x3) / k2, sin2(y3) / k2];
}
stereographicRaw.invert = azimuthalInvert(function(z) {
  return 2 * atan(z);
});

// node_modules/d3-geo/src/projection/transverseMercator.js
function transverseMercatorRaw(lambda, phi2) {
  return [log(tan((halfPi3 + phi2) / 2)), -lambda];
}
transverseMercatorRaw.invert = function(x3, y3) {
  return [-y3, 2 * atan(exp(x3)) - halfPi3];
};

// node_modules/d3-hierarchy/src/hierarchy/count.js
function count2(node2) {
  var sum4 = 0, children2 = node2.children, i = children2 && children2.length;
  if (!i)
    sum4 = 1;
  else
    while (--i >= 0)
      sum4 += children2[i].value;
  node2.value = sum4;
}
function count_default() {
  return this.eachAfter(count2);
}

// node_modules/d3-hierarchy/src/hierarchy/each.js
function each_default2(callback, that) {
  let index2 = -1;
  for (const node2 of this) {
    callback.call(that, node2, ++index2, this);
  }
  return this;
}

// node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
function eachBefore_default(callback, that) {
  var node2 = this, nodes = [node2], children2, i, index2 = -1;
  while (node2 = nodes.pop()) {
    callback.call(that, node2, ++index2, this);
    if (children2 = node2.children) {
      for (i = children2.length - 1; i >= 0; --i) {
        nodes.push(children2[i]);
      }
    }
  }
  return this;
}

// node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
function eachAfter_default(callback, that) {
  var node2 = this, nodes = [node2], next2 = [], children2, i, n, index2 = -1;
  while (node2 = nodes.pop()) {
    next2.push(node2);
    if (children2 = node2.children) {
      for (i = 0, n = children2.length; i < n; ++i) {
        nodes.push(children2[i]);
      }
    }
  }
  while (node2 = next2.pop()) {
    callback.call(that, node2, ++index2, this);
  }
  return this;
}

// node_modules/d3-hierarchy/src/hierarchy/find.js
function find_default2(callback, that) {
  let index2 = -1;
  for (const node2 of this) {
    if (callback.call(that, node2, ++index2, this)) {
      return node2;
    }
  }
}

// node_modules/d3-hierarchy/src/hierarchy/sum.js
function sum_default(value) {
  return this.eachAfter(function(node2) {
    var sum4 = +value(node2.data) || 0, children2 = node2.children, i = children2 && children2.length;
    while (--i >= 0)
      sum4 += children2[i].value;
    node2.value = sum4;
  });
}

// node_modules/d3-hierarchy/src/hierarchy/sort.js
function sort_default2(compare) {
  return this.eachBefore(function(node2) {
    if (node2.children) {
      node2.children.sort(compare);
    }
  });
}

// node_modules/d3-hierarchy/src/hierarchy/path.js
function path_default2(end) {
  var start2 = this, ancestor = leastCommonAncestor(start2, end), nodes = [start2];
  while (start2 !== ancestor) {
    start2 = start2.parent;
    nodes.push(start2);
  }
  var k2 = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k2, 0, end);
    end = end.parent;
  }
  return nodes;
}
function leastCommonAncestor(a2, b) {
  if (a2 === b)
    return a2;
  var aNodes = a2.ancestors(), bNodes = b.ancestors(), c4 = null;
  a2 = aNodes.pop();
  b = bNodes.pop();
  while (a2 === b) {
    c4 = a2;
    a2 = aNodes.pop();
    b = bNodes.pop();
  }
  return c4;
}

// node_modules/d3-hierarchy/src/hierarchy/ancestors.js
function ancestors_default() {
  var node2 = this, nodes = [node2];
  while (node2 = node2.parent) {
    nodes.push(node2);
  }
  return nodes;
}

// node_modules/d3-hierarchy/src/hierarchy/descendants.js
function descendants_default() {
  return Array.from(this);
}

// node_modules/d3-hierarchy/src/hierarchy/leaves.js
function leaves_default() {
  var leaves = [];
  this.eachBefore(function(node2) {
    if (!node2.children) {
      leaves.push(node2);
    }
  });
  return leaves;
}

// node_modules/d3-hierarchy/src/hierarchy/links.js
function links_default() {
  var root3 = this, links = [];
  root3.each(function(node2) {
    if (node2 !== root3) {
      links.push({ source: node2.parent, target: node2 });
    }
  });
  return links;
}

// node_modules/d3-hierarchy/src/hierarchy/iterator.js
function* iterator_default2() {
  var node2 = this, current, next2 = [node2], children2, i, n;
  do {
    current = next2.reverse(), next2 = [];
    while (node2 = current.pop()) {
      yield node2;
      if (children2 = node2.children) {
        for (i = 0, n = children2.length; i < n; ++i) {
          next2.push(children2[i]);
        }
      }
    }
  } while (next2.length);
}

// node_modules/d3-hierarchy/src/hierarchy/index.js
function hierarchy(data2, children2) {
  if (data2 instanceof Map) {
    data2 = [void 0, data2];
    if (children2 === void 0)
      children2 = mapChildren;
  } else if (children2 === void 0) {
    children2 = objectChildren;
  }
  var root3 = new Node(data2), node2, nodes = [root3], child, childs, i, n;
  while (node2 = nodes.pop()) {
    if ((childs = children2(node2.data)) && (n = (childs = Array.from(childs)).length)) {
      node2.children = childs;
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = childs[i] = new Node(childs[i]));
        child.parent = node2;
        child.depth = node2.depth + 1;
      }
    }
  }
  return root3.eachBefore(computeHeight);
}
function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}
function objectChildren(d) {
  return d.children;
}
function mapChildren(d) {
  return Array.isArray(d) ? d[1] : null;
}
function copyData(node2) {
  if (node2.data.value !== void 0)
    node2.value = node2.data.value;
  node2.data = node2.data.data;
}
function computeHeight(node2) {
  var height = 0;
  do
    node2.height = height;
  while ((node2 = node2.parent) && node2.height < ++height);
}
function Node(data2) {
  this.data = data2;
  this.depth = this.height = 0;
  this.parent = null;
}
Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: count_default,
  each: each_default2,
  eachAfter: eachAfter_default,
  eachBefore: eachBefore_default,
  find: find_default2,
  sum: sum_default,
  sort: sort_default2,
  path: path_default2,
  ancestors: ancestors_default,
  descendants: descendants_default,
  leaves: leaves_default,
  links: links_default,
  copy: node_copy,
  [Symbol.iterator]: iterator_default2
};

// node_modules/d3-hierarchy/src/treemap/dice.js
function dice_default(parent, x02, y0, x12, y1) {
  var nodes = parent.children, node2, i = -1, n = nodes.length, k2 = parent.value && (x12 - x02) / parent.value;
  while (++i < n) {
    node2 = nodes[i], node2.y0 = y0, node2.y1 = y1;
    node2.x0 = x02, node2.x1 = x02 += node2.value * k2;
  }
}

// node_modules/d3-hierarchy/src/tree.js
function TreeNode(node2, i) {
  this._ = node2;
  this.parent = null;
  this.children = null;
  this.A = null;
  this.a = this;
  this.z = 0;
  this.m = 0;
  this.c = 0;
  this.s = 0;
  this.t = null;
  this.i = i;
}
TreeNode.prototype = Object.create(Node.prototype);

// node_modules/d3-hierarchy/src/treemap/slice.js
function slice_default(parent, x02, y0, x12, y1) {
  var nodes = parent.children, node2, i = -1, n = nodes.length, k2 = parent.value && (y1 - y0) / parent.value;
  while (++i < n) {
    node2 = nodes[i], node2.x0 = x02, node2.x1 = x12;
    node2.y0 = y0, node2.y1 = y0 += node2.value * k2;
  }
}

// node_modules/d3-hierarchy/src/treemap/squarify.js
var phi = (1 + Math.sqrt(5)) / 2;
function squarifyRatio(ratio, parent, x02, y0, x12, y1) {
  var rows = [], nodes = parent.children, row, nodeValue, i0 = 0, i1 = 0, n = nodes.length, dx, dy, value = parent.value, sumValue, minValue, maxValue, newRatio, minRatio, alpha, beta;
  while (i0 < n) {
    dx = x12 - x02, dy = y1 - y0;
    do
      sumValue = nodes[i1++].value;
    while (!sumValue && i1 < n);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);
    for (; i1 < n; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue)
        minValue = nodeValue;
      if (nodeValue > maxValue)
        maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) {
        sumValue -= nodeValue;
        break;
      }
      minRatio = newRatio;
    }
    rows.push(row = { value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1) });
    if (row.dice)
      dice_default(row, x02, y0, x12, value ? y0 += dy * sumValue / value : y1);
    else
      slice_default(row, x02, y0, value ? x02 += dx * sumValue / value : x12, y1);
    value -= sumValue, i0 = i1;
  }
  return rows;
}
var squarify_default = function custom10(ratio) {
  function squarify(parent, x02, y0, x12, y1) {
    squarifyRatio(ratio, parent, x02, y0, x12, y1);
  }
  squarify.ratio = function(x3) {
    return custom10((x3 = +x3) > 1 ? x3 : 1);
  };
  return squarify;
}(phi);

// node_modules/d3-hierarchy/src/treemap/resquarify.js
var resquarify_default = function custom11(ratio) {
  function resquarify(parent, x02, y0, x12, y1) {
    if ((rows = parent._squarify) && rows.ratio === ratio) {
      var rows, row, nodes, i, j = -1, n, m = rows.length, value = parent.value;
      while (++j < m) {
        row = rows[j], nodes = row.children;
        for (i = row.value = 0, n = nodes.length; i < n; ++i)
          row.value += nodes[i].value;
        if (row.dice)
          dice_default(row, x02, y0, x12, value ? y0 += (y1 - y0) * row.value / value : y1);
        else
          slice_default(row, x02, y0, value ? x02 += (x12 - x02) * row.value / value : x12, y1);
        value -= row.value;
      }
    } else {
      parent._squarify = rows = squarifyRatio(ratio, parent, x02, y0, x12, y1);
      rows.ratio = ratio;
    }
  }
  resquarify.ratio = function(x3) {
    return custom11((x3 = +x3) > 1 ? x3 : 1);
  };
  return resquarify;
}(phi);

// node_modules/d3-random/src/defaultSource.js
var defaultSource_default = Math.random;

// node_modules/d3-random/src/uniform.js
var uniform_default = function sourceRandomUniform(source) {
  function randomUniform(min5, max6) {
    min5 = min5 == null ? 0 : +min5;
    max6 = max6 == null ? 1 : +max6;
    if (arguments.length === 1)
      max6 = min5, min5 = 0;
    else
      max6 -= min5;
    return function() {
      return source() * max6 + min5;
    };
  }
  randomUniform.source = sourceRandomUniform;
  return randomUniform;
}(defaultSource_default);

// node_modules/d3-random/src/int.js
var int_default = function sourceRandomInt(source) {
  function randomInt(min5, max6) {
    if (arguments.length < 2)
      max6 = min5, min5 = 0;
    min5 = Math.floor(min5);
    max6 = Math.floor(max6) - min5;
    return function() {
      return Math.floor(source() * max6 + min5);
    };
  }
  randomInt.source = sourceRandomInt;
  return randomInt;
}(defaultSource_default);

// node_modules/d3-random/src/normal.js
var normal_default = function sourceRandomNormal(source) {
  function randomNormal(mu, sigma) {
    var x3, r;
    mu = mu == null ? 0 : +mu;
    sigma = sigma == null ? 1 : +sigma;
    return function() {
      var y3;
      if (x3 != null)
        y3 = x3, x3 = null;
      else
        do {
          x3 = source() * 2 - 1;
          y3 = source() * 2 - 1;
          r = x3 * x3 + y3 * y3;
        } while (!r || r > 1);
      return mu + sigma * y3 * Math.sqrt(-2 * Math.log(r) / r);
    };
  }
  randomNormal.source = sourceRandomNormal;
  return randomNormal;
}(defaultSource_default);

// node_modules/d3-random/src/logNormal.js
var logNormal_default = function sourceRandomLogNormal(source) {
  var N = normal_default.source(source);
  function randomLogNormal() {
    var randomNormal = N.apply(this, arguments);
    return function() {
      return Math.exp(randomNormal());
    };
  }
  randomLogNormal.source = sourceRandomLogNormal;
  return randomLogNormal;
}(defaultSource_default);

// node_modules/d3-random/src/irwinHall.js
var irwinHall_default = function sourceRandomIrwinHall(source) {
  function randomIrwinHall(n) {
    if ((n = +n) <= 0)
      return () => 0;
    return function() {
      for (var sum4 = 0, i = n; i > 1; --i)
        sum4 += source();
      return sum4 + i * source();
    };
  }
  randomIrwinHall.source = sourceRandomIrwinHall;
  return randomIrwinHall;
}(defaultSource_default);

// node_modules/d3-random/src/bates.js
var bates_default = function sourceRandomBates(source) {
  var I = irwinHall_default.source(source);
  function randomBates(n) {
    if ((n = +n) === 0)
      return source;
    var randomIrwinHall = I(n);
    return function() {
      return randomIrwinHall() / n;
    };
  }
  randomBates.source = sourceRandomBates;
  return randomBates;
}(defaultSource_default);

// node_modules/d3-random/src/exponential.js
var exponential_default = function sourceRandomExponential(source) {
  function randomExponential(lambda) {
    return function() {
      return -Math.log1p(-source()) / lambda;
    };
  }
  randomExponential.source = sourceRandomExponential;
  return randomExponential;
}(defaultSource_default);

// node_modules/d3-random/src/pareto.js
var pareto_default = function sourceRandomPareto(source) {
  function randomPareto(alpha) {
    if ((alpha = +alpha) < 0)
      throw new RangeError("invalid alpha");
    alpha = 1 / -alpha;
    return function() {
      return Math.pow(1 - source(), alpha);
    };
  }
  randomPareto.source = sourceRandomPareto;
  return randomPareto;
}(defaultSource_default);

// node_modules/d3-random/src/bernoulli.js
var bernoulli_default = function sourceRandomBernoulli(source) {
  function randomBernoulli(p) {
    if ((p = +p) < 0 || p > 1)
      throw new RangeError("invalid p");
    return function() {
      return Math.floor(source() + p);
    };
  }
  randomBernoulli.source = sourceRandomBernoulli;
  return randomBernoulli;
}(defaultSource_default);

// node_modules/d3-random/src/geometric.js
var geometric_default = function sourceRandomGeometric(source) {
  function randomGeometric(p) {
    if ((p = +p) < 0 || p > 1)
      throw new RangeError("invalid p");
    if (p === 0)
      return () => Infinity;
    if (p === 1)
      return () => 1;
    p = Math.log1p(-p);
    return function() {
      return 1 + Math.floor(Math.log1p(-source()) / p);
    };
  }
  randomGeometric.source = sourceRandomGeometric;
  return randomGeometric;
}(defaultSource_default);

// node_modules/d3-random/src/gamma.js
var gamma_default = function sourceRandomGamma(source) {
  var randomNormal = normal_default.source(source)();
  function randomGamma(k2, theta) {
    if ((k2 = +k2) < 0)
      throw new RangeError("invalid k");
    if (k2 === 0)
      return () => 0;
    theta = theta == null ? 1 : +theta;
    if (k2 === 1)
      return () => -Math.log1p(-source()) * theta;
    var d = (k2 < 1 ? k2 + 1 : k2) - 1 / 3, c4 = 1 / (3 * Math.sqrt(d)), multiplier = k2 < 1 ? () => Math.pow(source(), 1 / k2) : () => 1;
    return function() {
      do {
        do {
          var x3 = randomNormal(), v2 = 1 + c4 * x3;
        } while (v2 <= 0);
        v2 *= v2 * v2;
        var u4 = 1 - source();
      } while (u4 >= 1 - 0.0331 * x3 * x3 * x3 * x3 && Math.log(u4) >= 0.5 * x3 * x3 + d * (1 - v2 + Math.log(v2)));
      return d * v2 * multiplier() * theta;
    };
  }
  randomGamma.source = sourceRandomGamma;
  return randomGamma;
}(defaultSource_default);

// node_modules/d3-random/src/beta.js
var beta_default = function sourceRandomBeta(source) {
  var G = gamma_default.source(source);
  function randomBeta(alpha, beta) {
    var X2 = G(alpha), Y2 = G(beta);
    return function() {
      var x3 = X2();
      return x3 === 0 ? 0 : x3 / (x3 + Y2());
    };
  }
  randomBeta.source = sourceRandomBeta;
  return randomBeta;
}(defaultSource_default);

// node_modules/d3-random/src/binomial.js
var binomial_default = function sourceRandomBinomial(source) {
  var G = geometric_default.source(source), B3 = beta_default.source(source);
  function randomBinomial(n, p) {
    n = +n;
    if ((p = +p) >= 1)
      return () => n;
    if (p <= 0)
      return () => 0;
    return function() {
      var acc = 0, nn = n, pp = p;
      while (nn * pp > 16 && nn * (1 - pp) > 16) {
        var i = Math.floor((nn + 1) * pp), y3 = B3(i, nn - i + 1)();
        if (y3 <= pp) {
          acc += i;
          nn -= i;
          pp = (pp - y3) / (1 - y3);
        } else {
          nn = i - 1;
          pp /= y3;
        }
      }
      var sign3 = pp < 0.5, pFinal = sign3 ? pp : 1 - pp, g = G(pFinal);
      for (var s2 = g(), k2 = 0; s2 <= nn; ++k2)
        s2 += g();
      return acc + (sign3 ? k2 : nn - k2);
    };
  }
  randomBinomial.source = sourceRandomBinomial;
  return randomBinomial;
}(defaultSource_default);

// node_modules/d3-random/src/weibull.js
var weibull_default = function sourceRandomWeibull(source) {
  function randomWeibull(k2, a2, b) {
    var outerFunc;
    if ((k2 = +k2) === 0) {
      outerFunc = (x3) => -Math.log(x3);
    } else {
      k2 = 1 / k2;
      outerFunc = (x3) => Math.pow(x3, k2);
    }
    a2 = a2 == null ? 0 : +a2;
    b = b == null ? 1 : +b;
    return function() {
      return a2 + b * outerFunc(-Math.log1p(-source()));
    };
  }
  randomWeibull.source = sourceRandomWeibull;
  return randomWeibull;
}(defaultSource_default);

// node_modules/d3-random/src/cauchy.js
var cauchy_default = function sourceRandomCauchy(source) {
  function randomCauchy(a2, b) {
    a2 = a2 == null ? 0 : +a2;
    b = b == null ? 1 : +b;
    return function() {
      return a2 + b * Math.tan(Math.PI * source());
    };
  }
  randomCauchy.source = sourceRandomCauchy;
  return randomCauchy;
}(defaultSource_default);

// node_modules/d3-random/src/logistic.js
var logistic_default = function sourceRandomLogistic(source) {
  function randomLogistic(a2, b) {
    a2 = a2 == null ? 0 : +a2;
    b = b == null ? 1 : +b;
    return function() {
      var u4 = source();
      return a2 + b * Math.log(u4 / (1 - u4));
    };
  }
  randomLogistic.source = sourceRandomLogistic;
  return randomLogistic;
}(defaultSource_default);

// node_modules/d3-random/src/poisson.js
var poisson_default = function sourceRandomPoisson(source) {
  var G = gamma_default.source(source), B3 = binomial_default.source(source);
  function randomPoisson(lambda) {
    return function() {
      var acc = 0, l = lambda;
      while (l > 16) {
        var n = Math.floor(0.875 * l), t = G(n)();
        if (t > l)
          return acc + B3(n - 1, l / t)();
        acc += n;
        l -= t;
      }
      for (var s2 = -Math.log1p(-source()), k2 = 0; s2 <= l; ++k2)
        s2 -= Math.log1p(-source());
      return acc + k2;
    };
  }
  randomPoisson.source = sourceRandomPoisson;
  return randomPoisson;
}(defaultSource_default);

// node_modules/d3-random/src/lcg.js
var eps = 1 / 4294967296;

// node_modules/d3-scale/src/init.js
function initRange(domain, range3) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range3).domain(domain);
      break;
  }
  return this;
}
function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      if (typeof domain === "function")
        this.interpolator(domain);
      else
        this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function")
        this.interpolator(interpolator);
      else
        this.range(interpolator);
      break;
    }
  }
  return this;
}

// node_modules/d3-scale/src/ordinal.js
var implicit = Symbol("implicit");
function ordinal() {
  var index2 = new InternMap(), domain = [], range3 = [], unknown = implicit;
  function scale3(d) {
    let i = index2.get(d);
    if (i === void 0) {
      if (unknown !== implicit)
        return unknown;
      index2.set(d, i = domain.push(d) - 1);
    }
    return range3[i % range3.length];
  }
  scale3.domain = function(_) {
    if (!arguments.length)
      return domain.slice();
    domain = [], index2 = new InternMap();
    for (const value of _) {
      if (index2.has(value))
        continue;
      index2.set(value, domain.push(value) - 1);
    }
    return scale3;
  };
  scale3.range = function(_) {
    return arguments.length ? (range3 = Array.from(_), scale3) : range3.slice();
  };
  scale3.unknown = function(_) {
    return arguments.length ? (unknown = _, scale3) : unknown;
  };
  scale3.copy = function() {
    return ordinal(domain, range3).unknown(unknown);
  };
  initRange.apply(scale3, arguments);
  return scale3;
}

// node_modules/d3-scale/src/band.js
function band() {
  var scale3 = ordinal().unknown(void 0), domain = scale3.domain, ordinalRange2 = scale3.range, r0 = 0, r1 = 1, step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
  delete scale3.unknown;
  function rescale() {
    var n = domain().length, reverse2 = r1 < r0, start2 = reverse2 ? r1 : r0, stop = reverse2 ? r0 : r1;
    step = (stop - start2) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round)
      step = Math.floor(step);
    start2 += (stop - start2 - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round)
      start2 = Math.round(start2), bandwidth = Math.round(bandwidth);
    var values2 = range(n).map(function(i) {
      return start2 + step * i;
    });
    return ordinalRange2(reverse2 ? values2.reverse() : values2);
  }
  scale3.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale3.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };
  scale3.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };
  scale3.bandwidth = function() {
    return bandwidth;
  };
  scale3.step = function() {
    return step;
  };
  scale3.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };
  scale3.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };
  scale3.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };
  scale3.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };
  scale3.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };
  scale3.copy = function() {
    return band(domain(), [r0, r1]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };
  return initRange.apply(rescale(), arguments);
}
function pointish(scale3) {
  var copy3 = scale3.copy;
  scale3.padding = scale3.paddingOuter;
  delete scale3.paddingInner;
  delete scale3.paddingOuter;
  scale3.copy = function() {
    return pointish(copy3());
  };
  return scale3;
}
function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}

// node_modules/d3-scale/src/constant.js
function constants(x3) {
  return function() {
    return x3;
  };
}

// node_modules/d3-scale/src/number.js
function number3(x3) {
  return +x3;
}

// node_modules/d3-scale/src/continuous.js
var unit = [0, 1];
function identity3(x3) {
  return x3;
}
function normalize(a2, b) {
  return (b -= a2 = +a2) ? function(x3) {
    return (x3 - a2) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}
function clamper(a2, b) {
  var t;
  if (a2 > b)
    t = a2, a2 = b, b = t;
  return function(x3) {
    return Math.max(a2, Math.min(b, x3));
  };
}
function bimap(domain, range3, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range3[0], r1 = range3[1];
  if (d1 < d0)
    d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else
    d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x3) {
    return r0(d0(x3));
  };
}
function polymap(domain, range3, interpolate) {
  var j = Math.min(domain.length, range3.length) - 1, d = new Array(j), r = new Array(j), i = -1;
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range3 = range3.slice().reverse();
  }
  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range3[i], range3[i + 1]);
  }
  return function(x3) {
    var i2 = bisect_default(domain, x3, 1, j) - 1;
    return r[i2](d[i2](x3));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer2() {
  var domain = unit, range3 = unit, interpolate = value_default, transform2, untransform, unknown, clamp = identity3, piecewise2, output, input;
  function rescale() {
    var n = Math.min(domain.length, range3.length);
    if (clamp !== identity3)
      clamp = clamper(domain[0], domain[n - 1]);
    piecewise2 = n > 2 ? polymap : bimap;
    output = input = null;
    return scale3;
  }
  function scale3(x3) {
    return x3 == null || isNaN(x3 = +x3) ? unknown : (output || (output = piecewise2(domain.map(transform2), range3, interpolate)))(transform2(clamp(x3)));
  }
  scale3.invert = function(y3) {
    return clamp(untransform((input || (input = piecewise2(range3, domain.map(transform2), number_default)))(y3)));
  };
  scale3.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number3), rescale()) : domain.slice();
  };
  scale3.range = function(_) {
    return arguments.length ? (range3 = Array.from(_), rescale()) : range3.slice();
  };
  scale3.rangeRound = function(_) {
    return range3 = Array.from(_), interpolate = round_default, rescale();
  };
  scale3.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity3, rescale()) : clamp !== identity3;
  };
  scale3.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };
  scale3.unknown = function(_) {
    return arguments.length ? (unknown = _, scale3) : unknown;
  };
  return function(t, u4) {
    transform2 = t, untransform = u4;
    return rescale();
  };
}
function continuous() {
  return transformer2()(identity3, identity3);
}

// node_modules/d3-scale/src/tickFormat.js
function tickFormat(start2, stop, count3, specifier) {
  var step = tickStep(start2, stop, count3), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start2), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value)))
        specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start2), Math.abs(stop)))))
        specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step)))
        specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

// node_modules/d3-scale/src/linear.js
function linearish(scale3) {
  var domain = scale3.domain;
  scale3.ticks = function(count3) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count3 == null ? 10 : count3);
  };
  scale3.tickFormat = function(count3, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count3 == null ? 10 : count3, specifier);
  };
  scale3.nice = function(count3) {
    if (count3 == null)
      count3 = 10;
    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start2 = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop < start2) {
      step = start2, start2 = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start2, stop, count3);
      if (step === prestep) {
        d[i0] = start2;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start2 = Math.floor(start2 / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start2 = Math.ceil(start2 * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale3;
  };
  return scale3;
}
function linear3() {
  var scale3 = continuous();
  scale3.copy = function() {
    return copy(scale3, linear3());
  };
  initRange.apply(scale3, arguments);
  return linearish(scale3);
}

// node_modules/d3-scale/src/identity.js
function identity4(domain) {
  var unknown;
  function scale3(x3) {
    return x3 == null || isNaN(x3 = +x3) ? unknown : x3;
  }
  scale3.invert = scale3;
  scale3.domain = scale3.range = function(_) {
    return arguments.length ? (domain = Array.from(_, number3), scale3) : domain.slice();
  };
  scale3.unknown = function(_) {
    return arguments.length ? (unknown = _, scale3) : unknown;
  };
  scale3.copy = function() {
    return identity4(domain).unknown(unknown);
  };
  domain = arguments.length ? Array.from(domain, number3) : [0, 1];
  return linearish(scale3);
}

// node_modules/d3-scale/src/nice.js
function nice2(domain, interval2) {
  domain = domain.slice();
  var i0 = 0, i1 = domain.length - 1, x02 = domain[i0], x12 = domain[i1], t;
  if (x12 < x02) {
    t = i0, i0 = i1, i1 = t;
    t = x02, x02 = x12, x12 = t;
  }
  domain[i0] = interval2.floor(x02);
  domain[i1] = interval2.ceil(x12);
  return domain;
}

// node_modules/d3-scale/src/log.js
function transformLog(x3) {
  return Math.log(x3);
}
function transformExp(x3) {
  return Math.exp(x3);
}
function transformLogn(x3) {
  return -Math.log(-x3);
}
function transformExpn(x3) {
  return -Math.exp(-x3);
}
function pow10(x3) {
  return isFinite(x3) ? +("1e" + x3) : x3 < 0 ? 0 : x3;
}
function powp(base) {
  return base === 10 ? pow10 : base === Math.E ? Math.exp : (x3) => Math.pow(base, x3);
}
function logp(base) {
  return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), (x3) => Math.log(x3) / base);
}
function reflect(f) {
  return (x3, k2) => -f(-x3, k2);
}
function loggish(transform2) {
  const scale3 = transform2(transformLog, transformExp);
  const domain = scale3.domain;
  let base = 10;
  let logs;
  let pows;
  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform2(transformLogn, transformExpn);
    } else {
      transform2(transformLog, transformExp);
    }
    return scale3;
  }
  scale3.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };
  scale3.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale3.ticks = (count3) => {
    const d = domain();
    let u4 = d[0];
    let v2 = d[d.length - 1];
    const r = v2 < u4;
    if (r)
      [u4, v2] = [v2, u4];
    let i = logs(u4);
    let j = logs(v2);
    let k2;
    let t;
    const n = count3 == null ? 10 : +count3;
    let z = [];
    if (!(base % 1) && j - i < n) {
      i = Math.floor(i), j = Math.ceil(j);
      if (u4 > 0)
        for (; i <= j; ++i) {
          for (k2 = 1; k2 < base; ++k2) {
            t = i < 0 ? k2 / pows(-i) : k2 * pows(i);
            if (t < u4)
              continue;
            if (t > v2)
              break;
            z.push(t);
          }
        }
      else
        for (; i <= j; ++i) {
          for (k2 = base - 1; k2 >= 1; --k2) {
            t = i > 0 ? k2 / pows(-i) : k2 * pows(i);
            if (t < u4)
              continue;
            if (t > v2)
              break;
            z.push(t);
          }
        }
      if (z.length * 2 < n)
        z = ticks(u4, v2, n);
    } else {
      z = ticks(i, j, Math.min(j - i, n)).map(pows);
    }
    return r ? z.reverse() : z;
  };
  scale3.tickFormat = (count3, specifier) => {
    if (count3 == null)
      count3 = 10;
    if (specifier == null)
      specifier = base === 10 ? "s" : ",";
    if (typeof specifier !== "function") {
      if (!(base % 1) && (specifier = formatSpecifier(specifier)).precision == null)
        specifier.trim = true;
      specifier = format(specifier);
    }
    if (count3 === Infinity)
      return specifier;
    const k2 = Math.max(1, base * count3 / scale3.ticks().length);
    return (d) => {
      let i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5)
        i *= base;
      return i <= k2 ? specifier(d) : "";
    };
  };
  scale3.nice = () => {
    return domain(nice2(domain(), {
      floor: (x3) => pows(Math.floor(logs(x3))),
      ceil: (x3) => pows(Math.ceil(logs(x3)))
    }));
  };
  return scale3;
}
function log2() {
  const scale3 = loggish(transformer2()).domain([1, 10]);
  scale3.copy = () => copy(scale3, log2()).base(scale3.base());
  initRange.apply(scale3, arguments);
  return scale3;
}

// node_modules/d3-scale/src/symlog.js
function transformSymlog(c4) {
  return function(x3) {
    return Math.sign(x3) * Math.log1p(Math.abs(x3 / c4));
  };
}
function transformSymexp(c4) {
  return function(x3) {
    return Math.sign(x3) * Math.expm1(Math.abs(x3)) * c4;
  };
}
function symlogish(transform2) {
  var c4 = 1, scale3 = transform2(transformSymlog(c4), transformSymexp(c4));
  scale3.constant = function(_) {
    return arguments.length ? transform2(transformSymlog(c4 = +_), transformSymexp(c4)) : c4;
  };
  return linearish(scale3);
}
function symlog() {
  var scale3 = symlogish(transformer2());
  scale3.copy = function() {
    return copy(scale3, symlog()).constant(scale3.constant());
  };
  return initRange.apply(scale3, arguments);
}

// node_modules/d3-scale/src/pow.js
function transformPow(exponent2) {
  return function(x3) {
    return x3 < 0 ? -Math.pow(-x3, exponent2) : Math.pow(x3, exponent2);
  };
}
function transformSqrt(x3) {
  return x3 < 0 ? -Math.sqrt(-x3) : Math.sqrt(x3);
}
function transformSquare(x3) {
  return x3 < 0 ? -x3 * x3 : x3 * x3;
}
function powish(transform2) {
  var scale3 = transform2(identity3, identity3), exponent2 = 1;
  function rescale() {
    return exponent2 === 1 ? transform2(identity3, identity3) : exponent2 === 0.5 ? transform2(transformSqrt, transformSquare) : transform2(transformPow(exponent2), transformPow(1 / exponent2));
  }
  scale3.exponent = function(_) {
    return arguments.length ? (exponent2 = +_, rescale()) : exponent2;
  };
  return linearish(scale3);
}
function pow2() {
  var scale3 = powish(transformer2());
  scale3.copy = function() {
    return copy(scale3, pow2()).exponent(scale3.exponent());
  };
  initRange.apply(scale3, arguments);
  return scale3;
}

// node_modules/d3-scale/src/quantile.js
function quantile2() {
  var domain = [], range3 = [], thresholds = [], unknown;
  function rescale() {
    var i = 0, n = Math.max(1, range3.length);
    thresholds = new Array(n - 1);
    while (++i < n)
      thresholds[i - 1] = quantileSorted(domain, i / n);
    return scale3;
  }
  function scale3(x3) {
    return x3 == null || isNaN(x3 = +x3) ? unknown : range3[bisect_default(thresholds, x3)];
  }
  scale3.invertExtent = function(y3) {
    var i = range3.indexOf(y3);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };
  scale3.domain = function(_) {
    if (!arguments.length)
      return domain.slice();
    domain = [];
    for (let d of _)
      if (d != null && !isNaN(d = +d))
        domain.push(d);
    domain.sort(ascending2);
    return rescale();
  };
  scale3.range = function(_) {
    return arguments.length ? (range3 = Array.from(_), rescale()) : range3.slice();
  };
  scale3.unknown = function(_) {
    return arguments.length ? (unknown = _, scale3) : unknown;
  };
  scale3.quantiles = function() {
    return thresholds.slice();
  };
  scale3.copy = function() {
    return quantile2().domain(domain).range(range3).unknown(unknown);
  };
  return initRange.apply(scale3, arguments);
}

// node_modules/d3-scale/src/threshold.js
function threshold() {
  var domain = [0.5], range3 = [0, 1], unknown, n = 1;
  function scale3(x3) {
    return x3 != null && x3 <= x3 ? range3[bisect_default(domain, x3, 0, n)] : unknown;
  }
  scale3.domain = function(_) {
    return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range3.length - 1), scale3) : domain.slice();
  };
  scale3.range = function(_) {
    return arguments.length ? (range3 = Array.from(_), n = Math.min(domain.length, range3.length - 1), scale3) : range3.slice();
  };
  scale3.invertExtent = function(y3) {
    var i = range3.indexOf(y3);
    return [domain[i - 1], domain[i]];
  };
  scale3.unknown = function(_) {
    return arguments.length ? (unknown = _, scale3) : unknown;
  };
  scale3.copy = function() {
    return threshold().domain(domain).range(range3).unknown(unknown);
  };
  return initRange.apply(scale3, arguments);
}

// node_modules/d3-time/src/interval.js
var t02 = /* @__PURE__ */ new Date();
var t12 = /* @__PURE__ */ new Date();
function timeInterval(floori, offseti, count3, field) {
  function interval2(date2) {
    return floori(date2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date2)), date2;
  }
  interval2.floor = (date2) => {
    return floori(date2 = /* @__PURE__ */ new Date(+date2)), date2;
  };
  interval2.ceil = (date2) => {
    return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
  };
  interval2.round = (date2) => {
    const d0 = interval2(date2), d1 = interval2.ceil(date2);
    return date2 - d0 < d1 - date2 ? d0 : d1;
  };
  interval2.offset = (date2, step) => {
    return offseti(date2 = /* @__PURE__ */ new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
  };
  interval2.range = (start2, stop, step) => {
    const range3 = [];
    start2 = interval2.ceil(start2);
    step = step == null ? 1 : Math.floor(step);
    if (!(start2 < stop) || !(step > 0))
      return range3;
    let previous;
    do
      range3.push(previous = /* @__PURE__ */ new Date(+start2)), offseti(start2, step), floori(start2);
    while (previous < start2 && start2 < stop);
    return range3;
  };
  interval2.filter = (test2) => {
    return timeInterval((date2) => {
      if (date2 >= date2)
        while (floori(date2), !test2(date2))
          date2.setTime(date2 - 1);
    }, (date2, step) => {
      if (date2 >= date2) {
        if (step < 0)
          while (++step <= 0) {
            while (offseti(date2, -1), !test2(date2)) {
            }
          }
        else
          while (--step >= 0) {
            while (offseti(date2, 1), !test2(date2)) {
            }
          }
      }
    });
  };
  if (count3) {
    interval2.count = (start2, end) => {
      t02.setTime(+start2), t12.setTime(+end);
      floori(t02), floori(t12);
      return Math.floor(count3(t02, t12));
    };
    interval2.every = (step) => {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval2 : interval2.filter(field ? (d) => field(d) % step === 0 : (d) => interval2.count(0, d) % step === 0);
    };
  }
  return interval2;
}

// node_modules/d3-time/src/millisecond.js
var millisecond = timeInterval(() => {
}, (date2, step) => {
  date2.setTime(+date2 + step);
}, (start2, end) => {
  return end - start2;
});
millisecond.every = (k2) => {
  k2 = Math.floor(k2);
  if (!isFinite(k2) || !(k2 > 0))
    return null;
  if (!(k2 > 1))
    return millisecond;
  return timeInterval((date2) => {
    date2.setTime(Math.floor(date2 / k2) * k2);
  }, (date2, step) => {
    date2.setTime(+date2 + step * k2);
  }, (start2, end) => {
    return (end - start2) / k2;
  });
};
var milliseconds = millisecond.range;

// node_modules/d3-time/src/duration.js
var durationSecond = 1e3;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationMonth = durationDay * 30;
var durationYear = durationDay * 365;

// node_modules/d3-time/src/second.js
var second = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds());
}, (date2, step) => {
  date2.setTime(+date2 + step * durationSecond);
}, (start2, end) => {
  return (end - start2) / durationSecond;
}, (date2) => {
  return date2.getUTCSeconds();
});
var seconds = second.range;

// node_modules/d3-time/src/minute.js
var timeMinute = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationMinute);
}, (start2, end) => {
  return (end - start2) / durationMinute;
}, (date2) => {
  return date2.getMinutes();
});
var timeMinutes = timeMinute.range;
var utcMinute = timeInterval((date2) => {
  date2.setUTCSeconds(0, 0);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationMinute);
}, (start2, end) => {
  return (end - start2) / durationMinute;
}, (date2) => {
  return date2.getUTCMinutes();
});
var utcMinutes = utcMinute.range;

// node_modules/d3-time/src/hour.js
var timeHour = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond - date2.getMinutes() * durationMinute);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationHour);
}, (start2, end) => {
  return (end - start2) / durationHour;
}, (date2) => {
  return date2.getHours();
});
var timeHours = timeHour.range;
var utcHour = timeInterval((date2) => {
  date2.setUTCMinutes(0, 0, 0);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationHour);
}, (start2, end) => {
  return (end - start2) / durationHour;
}, (date2) => {
  return date2.getUTCHours();
});
var utcHours = utcHour.range;

// node_modules/d3-time/src/day.js
var timeDay = timeInterval(
  (date2) => date2.setHours(0, 0, 0, 0),
  (date2, step) => date2.setDate(date2.getDate() + step),
  (start2, end) => (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationDay,
  (date2) => date2.getDate() - 1
);
var timeDays = timeDay.range;
var utcDay = timeInterval((date2) => {
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCDate(date2.getUTCDate() + step);
}, (start2, end) => {
  return (end - start2) / durationDay;
}, (date2) => {
  return date2.getUTCDate() - 1;
});
var utcDays = utcDay.range;
var unixDay = timeInterval((date2) => {
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCDate(date2.getUTCDate() + step);
}, (start2, end) => {
  return (end - start2) / durationDay;
}, (date2) => {
  return Math.floor(date2 / durationDay);
});
var unixDays = unixDay.range;

// node_modules/d3-time/src/week.js
function timeWeekday(i) {
  return timeInterval((date2) => {
    date2.setDate(date2.getDate() - (date2.getDay() + 7 - i) % 7);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setDate(date2.getDate() + step * 7);
  }, (start2, end) => {
    return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
var timeSunday = timeWeekday(0);
var timeMonday = timeWeekday(1);
var timeTuesday = timeWeekday(2);
var timeWednesday = timeWeekday(3);
var timeThursday = timeWeekday(4);
var timeFriday = timeWeekday(5);
var timeSaturday = timeWeekday(6);
var timeSundays = timeSunday.range;
var timeMondays = timeMonday.range;
var timeTuesdays = timeTuesday.range;
var timeWednesdays = timeWednesday.range;
var timeThursdays = timeThursday.range;
var timeFridays = timeFriday.range;
var timeSaturdays = timeSaturday.range;
function utcWeekday(i) {
  return timeInterval((date2) => {
    date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i) % 7);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCDate(date2.getUTCDate() + step * 7);
  }, (start2, end) => {
    return (end - start2) / durationWeek;
  });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

// node_modules/d3-time/src/month.js
var timeMonth = timeInterval((date2) => {
  date2.setDate(1);
  date2.setHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setMonth(date2.getMonth() + step);
}, (start2, end) => {
  return end.getMonth() - start2.getMonth() + (end.getFullYear() - start2.getFullYear()) * 12;
}, (date2) => {
  return date2.getMonth();
});
var timeMonths = timeMonth.range;
var utcMonth = timeInterval((date2) => {
  date2.setUTCDate(1);
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCMonth(date2.getUTCMonth() + step);
}, (start2, end) => {
  return end.getUTCMonth() - start2.getUTCMonth() + (end.getUTCFullYear() - start2.getUTCFullYear()) * 12;
}, (date2) => {
  return date2.getUTCMonth();
});
var utcMonths = utcMonth.range;

// node_modules/d3-time/src/year.js
var timeYear = timeInterval((date2) => {
  date2.setMonth(0, 1);
  date2.setHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setFullYear(date2.getFullYear() + step);
}, (start2, end) => {
  return end.getFullYear() - start2.getFullYear();
}, (date2) => {
  return date2.getFullYear();
});
timeYear.every = (k2) => {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : timeInterval((date2) => {
    date2.setFullYear(Math.floor(date2.getFullYear() / k2) * k2);
    date2.setMonth(0, 1);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setFullYear(date2.getFullYear() + step * k2);
  });
};
var timeYears = timeYear.range;
var utcYear = timeInterval((date2) => {
  date2.setUTCMonth(0, 1);
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCFullYear(date2.getUTCFullYear() + step);
}, (start2, end) => {
  return end.getUTCFullYear() - start2.getUTCFullYear();
}, (date2) => {
  return date2.getUTCFullYear();
});
utcYear.every = (k2) => {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : timeInterval((date2) => {
    date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k2) * k2);
    date2.setUTCMonth(0, 1);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCFullYear(date2.getUTCFullYear() + step * k2);
  });
};
var utcYears = utcYear.range;

// node_modules/d3-time/src/ticks.js
function ticker(year, month, week, day, hour, minute) {
  const tickIntervals = [
    [second, 1, durationSecond],
    [second, 5, 5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute, 1, durationMinute],
    [minute, 5, 5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [hour, 1, durationHour],
    [hour, 3, 3 * durationHour],
    [hour, 6, 6 * durationHour],
    [hour, 12, 12 * durationHour],
    [day, 1, durationDay],
    [day, 2, 2 * durationDay],
    [week, 1, durationWeek],
    [month, 1, durationMonth],
    [month, 3, 3 * durationMonth],
    [year, 1, durationYear]
  ];
  function ticks2(start2, stop, count3) {
    const reverse2 = stop < start2;
    if (reverse2)
      [start2, stop] = [stop, start2];
    const interval2 = count3 && typeof count3.range === "function" ? count3 : tickInterval(start2, stop, count3);
    const ticks3 = interval2 ? interval2.range(start2, +stop + 1) : [];
    return reverse2 ? ticks3.reverse() : ticks3;
  }
  function tickInterval(start2, stop, count3) {
    const target = Math.abs(stop - start2) / count3;
    const i = bisector(([, , step2]) => step2).right(tickIntervals, target);
    if (i === tickIntervals.length)
      return year.every(tickStep(start2 / durationYear, stop / durationYear, count3));
    if (i === 0)
      return millisecond.every(Math.max(tickStep(start2, stop, count3), 1));
    const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
    return t.every(step);
  }
  return [ticks2, tickInterval];
}
var [utcTicks, utcTickInterval] = ticker(utcYear, utcMonth, utcSunday, unixDay, utcHour, utcMinute);
var [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);

// node_modules/d3-time-format/src/locale.js
function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date2.setFullYear(d.y);
    return date2;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date2.setUTCFullYear(d.y);
    return date2;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y3, m, d) {
  return { y: y3, m, d, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale(locale3) {
  var locale_dateTime = locale3.dateTime, locale_date = locale3.date, locale_time = locale3.time, locale_periods = locale3.periods, locale_weekdays = locale3.days, locale_shortWeekdays = locale3.shortDays, locale_months = locale3.months, locale_shortMonths = locale3.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear2,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date2) {
      var string = [], i = -1, j = 0, n = specifier.length, c4, pad3, format2;
      if (!(date2 instanceof Date))
        date2 = /* @__PURE__ */ new Date(+date2);
      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad3 = pads[c4 = specifier.charAt(++i)]) != null)
            c4 = specifier.charAt(++i);
          else
            pad3 = c4 === "e" ? " " : "0";
          if (format2 = formats2[c4])
            c4 = format2(date2, pad3);
          string.push(c4);
          j = i + 1;
        }
      }
      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }
  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, void 0, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day;
      if (i != string.length)
        return null;
      if ("Q" in d)
        return new Date(d.Q);
      if ("s" in d)
        return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (Z && !("Z" in d))
        d.Z = 0;
      if ("p" in d)
        d.H = d.H % 12 + d.p * 12;
      if (d.m === void 0)
        d.m = "q" in d ? d.q : 0;
      if ("V" in d) {
        if (d.V < 1 || d.V > 53)
          return null;
        if (!("w" in d))
          d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
          week = timeDay.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d))
          d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }
      return localDate(d);
    };
  }
  function parseSpecifier(d, specifier, string, j) {
    var i = 0, n = specifier.length, m = string.length, c4, parse2;
    while (i < n) {
      if (j >= m)
        return -1;
      c4 = specifier.charCodeAt(i++);
      if (c4 === 37) {
        c4 = specifier.charAt(i++);
        parse2 = parses[c4 in pads ? specifier.charAt(i++) : c4];
        if (!parse2 || (j = parse2(d, string, j)) < 0)
          return -1;
      } else if (c4 != string.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }
  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }
  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }
  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }
  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }
  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }
  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }
  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }
  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }
  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }
  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }
  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }
  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() {
        return specifier;
      };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() {
        return specifier;
      };
      return p;
    }
  };
}
var pads = { "-": "", "_": " ", "0": "0" };
var numberRe = /^\s*\d+/;
var percentRe = /^%/;
var requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad2(value, fill3, width) {
  var sign3 = value < 0 ? "-" : "", string = (sign3 ? -value : value) + "", length2 = string.length;
  return sign3 + (length2 < width ? new Array(width - length2 + 1).join(fill3) + string : string);
}
function requote(s2) {
  return s2.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}
function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
  return pad2(d.getDate(), p, 2);
}
function formatHour24(d, p) {
  return pad2(d.getHours(), p, 2);
}
function formatHour12(d, p) {
  return pad2(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
  return pad2(1 + timeDay.count(timeYear(d), d), p, 3);
}
function formatMilliseconds(d, p) {
  return pad2(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
  return pad2(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
  return pad2(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
  return pad2(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}
function formatWeekNumberSunday(d, p) {
  return pad2(timeSunday.count(timeYear(d) - 1, d), p, 2);
}
function dISO(d) {
  var day = d.getDay();
  return day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
}
function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad2(timeThursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
  return d.getDay();
}
function formatWeekNumberMonday(d, p) {
  return pad2(timeMonday.count(timeYear(d) - 1, d), p, 2);
}
function formatYear2(d, p) {
  return pad2(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
  d = dISO(d);
  return pad2(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
  return pad2(d.getFullYear() % 1e4, p, 4);
}
function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
  return pad2(d.getFullYear() % 1e4, p, 4);
}
function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad2(z / 60 | 0, "0", 2) + pad2(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
  return pad2(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
  return pad2(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
  return pad2(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
  return pad2(1 + utcDay.count(utcYear(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
  return pad2(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
  return pad2(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
  return pad2(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
  return pad2(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
  return pad2(utcSunday.count(utcYear(d) - 1, d), p, 2);
}
function UTCdISO(d) {
  var day = d.getUTCDay();
  return day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad2(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
  return pad2(utcMonday.count(utcYear(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
  return pad2(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad2(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
  return pad2(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
  return pad2(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d) {
  return +d;
}
function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1e3);
}

// node_modules/d3-time-format/src/defaultLocale.js
var locale2;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale2({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale2(definition) {
  locale2 = formatLocale(definition);
  timeFormat = locale2.format;
  timeParse = locale2.parse;
  utcFormat = locale2.utcFormat;
  utcParse = locale2.utcParse;
  return locale2;
}

// node_modules/d3-time-format/src/isoFormat.js
var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
function formatIsoNative(date2) {
  return date2.toISOString();
}
var formatIso = Date.prototype.toISOString ? formatIsoNative : utcFormat(isoSpecifier);

// node_modules/d3-time-format/src/isoParse.js
function parseIsoNative(string) {
  var date2 = new Date(string);
  return isNaN(date2) ? null : date2;
}
var parseIso = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : utcParse(isoSpecifier);

// node_modules/d3-scale/src/time.js
function date(t) {
  return new Date(t);
}
function number4(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format2) {
  var scale3 = continuous(), invert = scale3.invert, domain = scale3.domain;
  var formatMillisecond = format2(".%L"), formatSecond = format2(":%S"), formatMinute = format2("%I:%M"), formatHour = format2("%I %p"), formatDay = format2("%a %d"), formatWeek = format2("%b %d"), formatMonth = format2("%B"), formatYear3 = format2("%Y");
  function tickFormat2(date2) {
    return (second2(date2) < date2 ? formatMillisecond : minute(date2) < date2 ? formatSecond : hour(date2) < date2 ? formatMinute : day(date2) < date2 ? formatHour : month(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year(date2) < date2 ? formatMonth : formatYear3)(date2);
  }
  scale3.invert = function(y3) {
    return new Date(invert(y3));
  };
  scale3.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number4)) : domain().map(date);
  };
  scale3.ticks = function(interval2) {
    var d = domain();
    return ticks2(d[0], d[d.length - 1], interval2 == null ? 10 : interval2);
  };
  scale3.tickFormat = function(count3, specifier) {
    return specifier == null ? tickFormat2 : format2(specifier);
  };
  scale3.nice = function(interval2) {
    var d = domain();
    if (!interval2 || typeof interval2.range !== "function")
      interval2 = tickInterval(d[0], d[d.length - 1], interval2 == null ? 10 : interval2);
    return interval2 ? domain(nice2(d, interval2)) : scale3;
  };
  scale3.copy = function() {
    return copy(scale3, calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format2));
  };
  return scale3;
}
function time() {
  return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}

// node_modules/d3-scale/src/utcTime.js
function utcTime() {
  return initRange.apply(calendar(utcTicks, utcTickInterval, utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute, second, utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}

// node_modules/d3-scale/src/sequential.js
function copy2(source, target) {
  return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}

// node_modules/d3-scale/src/diverging.js
function transformer3() {
  var x02 = 0, x12 = 0.5, x22 = 1, s2 = 1, t03, t13, t22, k10, k21, interpolator = identity3, transform2, clamp = false, unknown;
  function scale3(x3) {
    return isNaN(x3 = +x3) ? unknown : (x3 = 0.5 + ((x3 = +transform2(x3)) - t13) * (s2 * x3 < s2 * t13 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x3)) : x3));
  }
  scale3.domain = function(_) {
    return arguments.length ? ([x02, x12, x22] = _, t03 = transform2(x02 = +x02), t13 = transform2(x12 = +x12), t22 = transform2(x22 = +x22), k10 = t03 === t13 ? 0 : 0.5 / (t13 - t03), k21 = t13 === t22 ? 0 : 0.5 / (t22 - t13), s2 = t13 < t03 ? -1 : 1, scale3) : [x02, x12, x22];
  };
  scale3.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale3) : clamp;
  };
  scale3.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale3) : interpolator;
  };
  function range3(interpolate) {
    return function(_) {
      var r0, r1, r2;
      return arguments.length ? ([r0, r1, r2] = _, interpolator = piecewise(interpolate, [r0, r1, r2]), scale3) : [interpolator(0), interpolator(0.5), interpolator(1)];
    };
  }
  scale3.range = range3(value_default);
  scale3.rangeRound = range3(round_default);
  scale3.unknown = function(_) {
    return arguments.length ? (unknown = _, scale3) : unknown;
  };
  return function(t) {
    transform2 = t, t03 = t(x02), t13 = t(x12), t22 = t(x22), k10 = t03 === t13 ? 0 : 0.5 / (t13 - t03), k21 = t13 === t22 ? 0 : 0.5 / (t22 - t13), s2 = t13 < t03 ? -1 : 1;
    return scale3;
  };
}
function diverging() {
  var scale3 = linearish(transformer3()(identity3));
  scale3.copy = function() {
    return copy2(scale3, diverging());
  };
  return initInterpolator.apply(scale3, arguments);
}
function divergingLog() {
  var scale3 = loggish(transformer3()).domain([0.1, 1, 10]);
  scale3.copy = function() {
    return copy2(scale3, divergingLog()).base(scale3.base());
  };
  return initInterpolator.apply(scale3, arguments);
}
function divergingSymlog() {
  var scale3 = symlogish(transformer3());
  scale3.copy = function() {
    return copy2(scale3, divergingSymlog()).constant(scale3.constant());
  };
  return initInterpolator.apply(scale3, arguments);
}
function divergingPow() {
  var scale3 = powish(transformer3());
  scale3.copy = function() {
    return copy2(scale3, divergingPow()).exponent(scale3.exponent());
  };
  return initInterpolator.apply(scale3, arguments);
}

// node_modules/d3-scale-chromatic/src/colors.js
function colors_default(specifier) {
  var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
  while (i < n)
    colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
  return colors;
}

// node_modules/d3-scale-chromatic/src/categorical/category10.js
var category10_default = colors_default("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

// node_modules/d3-scale-chromatic/src/categorical/Accent.js
var Accent_default = colors_default("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

// node_modules/d3-scale-chromatic/src/categorical/Dark2.js
var Dark2_default = colors_default("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

// node_modules/d3-scale-chromatic/src/categorical/observable10.js
var observable10_default = colors_default("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0");

// node_modules/d3-scale-chromatic/src/categorical/Paired.js
var Paired_default = colors_default("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

// node_modules/d3-scale-chromatic/src/categorical/Pastel1.js
var Pastel1_default = colors_default("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

// node_modules/d3-scale-chromatic/src/categorical/Pastel2.js
var Pastel2_default = colors_default("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

// node_modules/d3-scale-chromatic/src/categorical/Set1.js
var Set1_default = colors_default("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

// node_modules/d3-scale-chromatic/src/categorical/Set2.js
var Set2_default = colors_default("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

// node_modules/d3-scale-chromatic/src/categorical/Set3.js
var Set3_default = colors_default("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

// node_modules/d3-scale-chromatic/src/categorical/Tableau10.js
var Tableau10_default = colors_default("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");

// node_modules/d3-scale-chromatic/src/ramp.js
var ramp_default = (scheme28) => rgbBasis(scheme28[scheme28.length - 1]);

// node_modules/d3-scale-chromatic/src/diverging/BrBG.js
var scheme = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(colors_default);
var BrBG_default = ramp_default(scheme);

// node_modules/d3-scale-chromatic/src/diverging/PRGn.js
var scheme2 = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(colors_default);
var PRGn_default = ramp_default(scheme2);

// node_modules/d3-scale-chromatic/src/diverging/PiYG.js
var scheme3 = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(colors_default);
var PiYG_default = ramp_default(scheme3);

// node_modules/d3-scale-chromatic/src/diverging/PuOr.js
var scheme4 = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(colors_default);
var PuOr_default = ramp_default(scheme4);

// node_modules/d3-scale-chromatic/src/diverging/RdBu.js
var scheme5 = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(colors_default);
var RdBu_default = ramp_default(scheme5);

// node_modules/d3-scale-chromatic/src/diverging/RdGy.js
var scheme6 = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(colors_default);
var RdGy_default = ramp_default(scheme6);

// node_modules/d3-scale-chromatic/src/diverging/RdYlBu.js
var scheme7 = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(colors_default);
var RdYlBu_default = ramp_default(scheme7);

// node_modules/d3-scale-chromatic/src/diverging/RdYlGn.js
var scheme8 = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(colors_default);
var RdYlGn_default = ramp_default(scheme8);

// node_modules/d3-scale-chromatic/src/diverging/Spectral.js
var scheme9 = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(colors_default);
var Spectral_default = ramp_default(scheme9);

// node_modules/d3-scale-chromatic/src/sequential-multi/BuGn.js
var scheme10 = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(colors_default);
var BuGn_default = ramp_default(scheme10);

// node_modules/d3-scale-chromatic/src/sequential-multi/BuPu.js
var scheme11 = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(colors_default);
var BuPu_default = ramp_default(scheme11);

// node_modules/d3-scale-chromatic/src/sequential-multi/GnBu.js
var scheme12 = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(colors_default);
var GnBu_default = ramp_default(scheme12);

// node_modules/d3-scale-chromatic/src/sequential-multi/OrRd.js
var scheme13 = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(colors_default);
var OrRd_default = ramp_default(scheme13);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuBuGn.js
var scheme14 = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(colors_default);
var PuBuGn_default = ramp_default(scheme14);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuBu.js
var scheme15 = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(colors_default);
var PuBu_default = ramp_default(scheme15);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuRd.js
var scheme16 = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(colors_default);
var PuRd_default = ramp_default(scheme16);

// node_modules/d3-scale-chromatic/src/sequential-multi/RdPu.js
var scheme17 = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(colors_default);
var RdPu_default = ramp_default(scheme17);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlGnBu.js
var scheme18 = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(colors_default);
var YlGnBu_default = ramp_default(scheme18);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlGn.js
var scheme19 = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(colors_default);
var YlGn_default = ramp_default(scheme19);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js
var scheme20 = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(colors_default);
var YlOrBr_default = ramp_default(scheme20);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js
var scheme21 = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(colors_default);
var YlOrRd_default = ramp_default(scheme21);

// node_modules/d3-scale-chromatic/src/sequential-single/Blues.js
var scheme22 = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(colors_default);
var Blues_default = ramp_default(scheme22);

// node_modules/d3-scale-chromatic/src/sequential-single/Greens.js
var scheme23 = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(colors_default);
var Greens_default = ramp_default(scheme23);

// node_modules/d3-scale-chromatic/src/sequential-single/Greys.js
var scheme24 = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(colors_default);
var Greys_default = ramp_default(scheme24);

// node_modules/d3-scale-chromatic/src/sequential-single/Purples.js
var scheme25 = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(colors_default);
var Purples_default = ramp_default(scheme25);

// node_modules/d3-scale-chromatic/src/sequential-single/Reds.js
var scheme26 = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(colors_default);
var Reds_default = ramp_default(scheme26);

// node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js
var scheme27 = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(colors_default);
var Oranges_default = ramp_default(scheme27);

// node_modules/d3-scale-chromatic/src/sequential-multi/cividis.js
function cividis_default(t) {
  t = Math.max(0, Math.min(1, t));
  return "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - t * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - t * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - t * 2475.67))))))) + ")";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js
var cubehelix_default2 = cubehelixLong(cubehelix(300, 0.5, 0), cubehelix(-240, 0.5, 1));

// node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js
var warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
var cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
var c = cubehelix();
function rainbow_default(t) {
  if (t < 0 || t > 1)
    t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  c.h = 360 * t - 100;
  c.s = 1.5 - 1.5 * ts;
  c.l = 0.8 - 0.9 * ts;
  return c + "";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js
var c2 = rgb();
var pi_1_3 = Math.PI / 3;
var pi_2_3 = Math.PI * 2 / 3;
function sinebow_default(t) {
  var x3;
  t = (0.5 - t) * Math.PI;
  c2.r = 255 * (x3 = Math.sin(t)) * x3;
  c2.g = 255 * (x3 = Math.sin(t + pi_1_3)) * x3;
  c2.b = 255 * (x3 = Math.sin(t + pi_2_3)) * x3;
  return c2 + "";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/turbo.js
function turbo_default(t) {
  t = Math.max(0, Math.min(1, t));
  return "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - t * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + t * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - t * 6838.66))))))) + ")";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js
function ramp(range3) {
  var n = range3.length;
  return function(t) {
    return range3[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}
var viridis_default = ramp(colors_default("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var magma = ramp(colors_default("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var inferno = ramp(colors_default("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var plasma = ramp(colors_default("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

// node_modules/d3-shape/src/math.js
var cos3 = Math.cos;
var min3 = Math.min;
var sin3 = Math.sin;
var sqrt3 = Math.sqrt;
var epsilon6 = 1e-12;
var pi5 = Math.PI;
var halfPi4 = pi5 / 2;
var tau6 = 2 * pi5;

// node_modules/d3-shape/src/array.js
var slice4 = Array.prototype.slice;

// node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(x3, y3);
        break;
    }
  }
};
function linear_default(context) {
  return new Linear(context);
}

// node_modules/d3-shape/src/curve/radial.js
var curveRadialLinear = curveRadial(linear_default);
function Radial(curve) {
  this._curve = curve;
}
Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a2, r) {
    this._curve.point(r * Math.sin(a2), r * -Math.cos(a2));
  }
};
function curveRadial(curve) {
  function radial2(context) {
    return new Radial(curve(context));
  }
  radial2._curve = curve;
  return radial2;
}

// node_modules/d3-shape/src/symbol/asterisk.js
var sqrt32 = sqrt3(3);
var asterisk_default = {
  draw(context, size) {
    const r = sqrt3(size + min3(size / 28, 0.75)) * 0.59436;
    const t = r / 2;
    const u4 = t * sqrt32;
    context.moveTo(0, r);
    context.lineTo(0, -r);
    context.moveTo(-u4, -t);
    context.lineTo(u4, t);
    context.moveTo(-u4, t);
    context.lineTo(u4, -t);
  }
};

// node_modules/d3-shape/src/symbol/circle.js
var circle_default3 = {
  draw(context, size) {
    const r = sqrt3(size / pi5);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, tau6);
  }
};

// node_modules/d3-shape/src/symbol/cross.js
var cross_default2 = {
  draw(context, size) {
    const r = sqrt3(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/diamond.js
var tan30 = sqrt3(1 / 3);
var tan30_2 = tan30 * 2;
var diamond_default = {
  draw(context, size) {
    const y3 = sqrt3(size / tan30_2);
    const x3 = y3 * tan30;
    context.moveTo(0, -y3);
    context.lineTo(x3, 0);
    context.lineTo(0, y3);
    context.lineTo(-x3, 0);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/diamond2.js
var diamond2_default = {
  draw(context, size) {
    const r = sqrt3(size) * 0.62625;
    context.moveTo(0, -r);
    context.lineTo(r, 0);
    context.lineTo(0, r);
    context.lineTo(-r, 0);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/plus.js
var plus_default = {
  draw(context, size) {
    const r = sqrt3(size - min3(size / 7, 2)) * 0.87559;
    context.moveTo(-r, 0);
    context.lineTo(r, 0);
    context.moveTo(0, r);
    context.lineTo(0, -r);
  }
};

// node_modules/d3-shape/src/symbol/square.js
var square_default = {
  draw(context, size) {
    const w = sqrt3(size);
    const x3 = -w / 2;
    context.rect(x3, x3, w, w);
  }
};

// node_modules/d3-shape/src/symbol/square2.js
var square2_default = {
  draw(context, size) {
    const r = sqrt3(size) * 0.4431;
    context.moveTo(r, r);
    context.lineTo(r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, r);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/star.js
var ka = 0.8908130915292852;
var kr = sin3(pi5 / 10) / sin3(7 * pi5 / 10);
var kx = sin3(tau6 / 10) * kr;
var ky = -cos3(tau6 / 10) * kr;
var star_default = {
  draw(context, size) {
    const r = sqrt3(size * ka);
    const x3 = kx * r;
    const y3 = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x3, y3);
    for (let i = 1; i < 5; ++i) {
      const a2 = tau6 * i / 5;
      const c4 = cos3(a2);
      const s2 = sin3(a2);
      context.lineTo(s2 * r, -c4 * r);
      context.lineTo(c4 * x3 - s2 * y3, s2 * x3 + c4 * y3);
    }
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/triangle.js
var sqrt33 = sqrt3(3);
var triangle_default = {
  draw(context, size) {
    const y3 = -sqrt3(size / (sqrt33 * 3));
    context.moveTo(0, y3 * 2);
    context.lineTo(-sqrt33 * y3, -y3);
    context.lineTo(sqrt33 * y3, -y3);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/triangle2.js
var sqrt34 = sqrt3(3);
var triangle2_default = {
  draw(context, size) {
    const s2 = sqrt3(size) * 0.6824;
    const t = s2 / 2;
    const u4 = s2 * sqrt34 / 2;
    context.moveTo(0, -s2);
    context.lineTo(u4, t);
    context.lineTo(-u4, t);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/wye.js
var c3 = -0.5;
var s = sqrt3(3) / 2;
var k = 1 / sqrt3(12);
var a = (k / 2 + 1) * 3;
var wye_default = {
  draw(context, size) {
    const r = sqrt3(size / a);
    const x02 = r / 2, y0 = r * k;
    const x12 = x02, y1 = r * k + r;
    const x22 = -x12, y22 = y1;
    context.moveTo(x02, y0);
    context.lineTo(x12, y1);
    context.lineTo(x22, y22);
    context.lineTo(c3 * x02 - s * y0, s * x02 + c3 * y0);
    context.lineTo(c3 * x12 - s * y1, s * x12 + c3 * y1);
    context.lineTo(c3 * x22 - s * y22, s * x22 + c3 * y22);
    context.lineTo(c3 * x02 + s * y0, c3 * y0 - s * x02);
    context.lineTo(c3 * x12 + s * y1, c3 * y1 - s * x12);
    context.lineTo(c3 * x22 + s * y22, c3 * y22 - s * x22);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/times.js
var times_default = {
  draw(context, size) {
    const r = sqrt3(size - min3(size / 6, 1.7)) * 0.6189;
    context.moveTo(-r, -r);
    context.lineTo(r, r);
    context.moveTo(-r, r);
    context.lineTo(r, -r);
  }
};

// node_modules/d3-shape/src/symbol.js
var symbolsFill = [
  circle_default3,
  cross_default2,
  diamond_default,
  square_default,
  star_default,
  triangle_default,
  wye_default
];
var symbolsStroke = [
  circle_default3,
  plus_default,
  times_default,
  triangle2_default,
  asterisk_default,
  square2_default,
  diamond2_default
];

// node_modules/d3-shape/src/noop.js
function noop_default2() {
}

// node_modules/d3-shape/src/curve/basis.js
function point2(that, x3, y3) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x3) / 6,
    (that._y0 + 4 * that._y1 + y3) / 6
  );
}
function Basis(context) {
  this._context = context;
}
Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        point2(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        point2(this, x3, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = x3;
    this._y0 = this._y1, this._y1 = y3;
  }
};

// node_modules/d3-shape/src/curve/basisClosed.js
function BasisClosed(context) {
  this._context = context;
}
BasisClosed.prototype = {
  areaStart: noop_default2,
  areaEnd: noop_default2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x2 = x3, this._y2 = y3;
        break;
      case 1:
        this._point = 2;
        this._x3 = x3, this._y3 = y3;
        break;
      case 2:
        this._point = 3;
        this._x4 = x3, this._y4 = y3;
        this._context.moveTo((this._x0 + 4 * this._x1 + x3) / 6, (this._y0 + 4 * this._y1 + y3) / 6);
        break;
      default:
        point2(this, x3, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = x3;
    this._y0 = this._y1, this._y1 = y3;
  }
};

// node_modules/d3-shape/src/curve/basisOpen.js
function BasisOpen(context) {
  this._context = context;
}
BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var x02 = (this._x0 + 4 * this._x1 + x3) / 6, y0 = (this._y0 + 4 * this._y1 + y3) / 6;
        this._line ? this._context.lineTo(x02, y0) : this._context.moveTo(x02, y0);
        break;
      case 3:
        this._point = 4;
      default:
        point2(this, x3, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = x3;
    this._y0 = this._y1, this._y1 = y3;
  }
};

// node_modules/d3-shape/src/curve/bundle.js
function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}
Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x3 = this._x, y3 = this._y, j = x3.length - 1;
    if (j > 0) {
      var x02 = x3[0], y0 = y3[0], dx = x3[j] - x02, dy = y3[j] - y0, i = -1, t;
      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x3[i] + (1 - this._beta) * (x02 + t * dx),
          this._beta * y3[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }
    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x3, y3) {
    this._x.push(+x3);
    this._y.push(+y3);
  }
};
var bundle_default = function custom12(beta) {
  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }
  bundle.beta = function(beta2) {
    return custom12(+beta2);
  };
  return bundle;
}(0.85);

// node_modules/d3-shape/src/curve/cardinal.js
function point3(that, x3, y3) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x3),
    that._y2 + that._k * (that._y1 - y3),
    that._x2,
    that._y2
  );
}
function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        point3(this, this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
        break;
      case 1:
        this._point = 2;
        this._x1 = x3, this._y1 = y3;
        break;
      case 2:
        this._point = 3;
      default:
        point3(this, x3, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x3;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var cardinal_default = function custom13(tension) {
  function cardinal(context) {
    return new Cardinal(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom13(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/cardinalClosed.js
function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalClosed.prototype = {
  areaStart: noop_default2,
  areaEnd: noop_default2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x3, this._y3 = y3;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x3, this._y4 = y3);
        break;
      case 2:
        this._point = 3;
        this._x5 = x3, this._y5 = y3;
        break;
      default:
        point3(this, x3, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x3;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var cardinalClosed_default = function custom14(tension) {
  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom14(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/cardinalOpen.js
function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point3(this, x3, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x3;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var cardinalOpen_default = function custom15(tension) {
  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom15(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/catmullRom.js
function point4(that, x3, y3) {
  var x12 = that._x1, y1 = that._y1, x22 = that._x2, y22 = that._y2;
  if (that._l01_a > epsilon6) {
    var a2 = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x12 = (x12 * a2 - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a2 - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }
  if (that._l23_a > epsilon6) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x22 = (x22 * b + that._x1 * that._l23_2a - x3 * that._l12_2a) / m;
    y22 = (y22 * b + that._y1 * that._l23_2a - y3 * that._l12_2a) / m;
  }
  that._context.bezierCurveTo(x12, y1, x22, y22, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    if (this._point) {
      var x23 = this._x2 - x3, y23 = this._y2 - y3;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        point4(this, x3, y3);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x3;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var catmullRom_default = function custom16(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom16(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/catmullRomClosed.js
function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomClosed.prototype = {
  areaStart: noop_default2,
  areaEnd: noop_default2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    if (this._point) {
      var x23 = this._x2 - x3, y23 = this._y2 - y3;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x3, this._y3 = y3;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x3, this._y4 = y3);
        break;
      case 2:
        this._point = 3;
        this._x5 = x3, this._y5 = y3;
        break;
      default:
        point4(this, x3, y3);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x3;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var catmullRomClosed_default = function custom17(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom17(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/catmullRomOpen.js
function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    if (this._point) {
      var x23 = this._x2 - x3, y23 = this._y2 - y3;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point4(this, x3, y3);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x3;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var catmullRomOpen_default = function custom18(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom18(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/linearClosed.js
function LinearClosed(context) {
  this._context = context;
}
LinearClosed.prototype = {
  areaStart: noop_default2,
  areaEnd: noop_default2,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point)
      this._context.closePath();
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    if (this._point)
      this._context.lineTo(x3, y3);
    else
      this._point = 1, this._context.moveTo(x3, y3);
  }
};

// node_modules/d3-shape/src/curve/monotone.js
function sign2(x3) {
  return x3 < 0 ? -1 : 1;
}
function slope3(that, x22, y22) {
  var h0 = that._x1 - that._x0, h1 = x22 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y22 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign2(s0) + sign2(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point5(that, t03, t13) {
  var x02 = that._x0, y0 = that._y0, x12 = that._x1, y1 = that._y1, dx = (x12 - x02) / 3;
  that._context.bezierCurveTo(x02 + dx, y0 + dx * t03, x12 - dx, y1 - dx * t13, x12, y1);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point5(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    var t13 = NaN;
    x3 = +x3, y3 = +y3;
    if (x3 === this._x1 && y3 === this._y1)
      return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point5(this, slope2(this, t13 = slope3(this, x3, y3)), t13);
        break;
      default:
        point5(this, this._t0, t13 = slope3(this, x3, y3));
        break;
    }
    this._x0 = this._x1, this._x1 = x3;
    this._y0 = this._y1, this._y1 = y3;
    this._t0 = t13;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x3, y3) {
  MonotoneX.prototype.point.call(this, y3, x3);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x3, y3) {
    this._context.moveTo(y3, x3);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x3, y3) {
    this._context.lineTo(y3, x3);
  },
  bezierCurveTo: function(x12, y1, x22, y22, x3, y3) {
    this._context.bezierCurveTo(y1, x12, y22, x22, y3, x3);
  }
};

// node_modules/d3-shape/src/curve/natural.js
function Natural(context) {
  this._context = context;
}
Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x3 = this._x, y3 = this._y, n = x3.length;
    if (n) {
      this._line ? this._context.lineTo(x3[0], y3[0]) : this._context.moveTo(x3[0], y3[0]);
      if (n === 2) {
        this._context.lineTo(x3[1], y3[1]);
      } else {
        var px = controlPoints(x3), py = controlPoints(y3);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x3[i1], y3[i1]);
        }
      }
    }
    if (this._line || this._line !== 0 && n === 1)
      this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x3, y3) {
    this._x.push(+x3);
    this._y.push(+y3);
  }
};
function controlPoints(x3) {
  var i, n = x3.length - 1, m, a2 = new Array(n), b = new Array(n), r = new Array(n);
  a2[0] = 0, b[0] = 2, r[0] = x3[0] + 2 * x3[1];
  for (i = 1; i < n - 1; ++i)
    a2[i] = 1, b[i] = 4, r[i] = 4 * x3[i] + 2 * x3[i + 1];
  a2[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x3[n - 1] + x3[n];
  for (i = 1; i < n; ++i)
    m = a2[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a2[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i)
    a2[i] = (r[i] - a2[i + 1]) / b[i];
  b[n - 1] = (x3[n] + a2[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i)
    b[i] = 2 * x3[i + 1] - a2[i + 1];
  return [a2, b];
}

// node_modules/d3-shape/src/curve/step.js
function Step(context, t) {
  this._context = context;
  this._t = t;
}
Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2)
      this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    if (this._line >= 0)
      this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y3);
          this._context.lineTo(x3, y3);
        } else {
          var x12 = this._x * (1 - this._t) + x3 * this._t;
          this._context.lineTo(x12, this._y);
          this._context.lineTo(x12, y3);
        }
        break;
      }
    }
    this._x = x3, this._y = y3;
  }
};

// node_modules/d3-zoom/src/transform.js
function Transform(k2, x3, y3) {
  this.k = k2;
  this.x = x3;
  this.y = y3;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k2) {
    return k2 === 1 ? this : new Transform(this.k * k2, this.x, this.y);
  },
  translate: function(x3, y3) {
    return x3 === 0 & y3 === 0 ? this : new Transform(this.k, this.x + this.k * x3, this.y + this.k * y3);
  },
  apply: function(point6) {
    return [point6[0] * this.k + this.x, point6[1] * this.k + this.y];
  },
  applyX: function(x3) {
    return x3 * this.k + this.x;
  },
  applyY: function(y3) {
    return y3 * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x3) {
    return (x3 - this.x) / this.k;
  },
  invertY: function(y3) {
    return (y3 - this.y) / this.k;
  },
  rescaleX: function(x3) {
    return x3.copy().domain(x3.range().map(this.invertX, this).map(x3.invert, x3));
  },
  rescaleY: function(y3) {
    return y3.copy().domain(y3.range().map(this.invertY, this).map(y3.invert, y3));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity5 = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node2) {
  while (!node2.__zoom)
    if (!(node2 = node2.parentNode))
      return identity5;
  return node2.__zoom;
}

// node_modules/cal-heatmap/dist/cal-heatmap.esm.js
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function() {
    return exports2;
  };
  var exports2 = {}, Op = Object.prototype, hasOwn3 = Op.hasOwnProperty, defineProperty4 = Object.defineProperty || function(obj, key, desc) {
    obj[key] = desc.value;
  }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self2, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
    return defineProperty4(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self2, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports2.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {
  }
  function GeneratorFunction() {
  }
  function GeneratorFunctionPrototype() {
  }
  var IteratorPrototype2 = {};
  define(IteratorPrototype2, iteratorSymbol, function() {
    return this;
  });
  var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values2([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn3.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype2 = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype2);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve2, reject2) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg, value = result.value;
        return value && "object" == typeof value && hasOwn3.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
          invoke("next", value2, resolve2, reject2);
        }, function(err) {
          invoke("throw", err, resolve2, reject2);
        }) : PromiseImpl.resolve(value).then(function(unwrapped) {
          result.value = unwrapped, resolve2(result);
        }, function(error) {
          return invoke("throw", error, resolve2, reject2);
        });
      }
      reject2(record.arg);
    }
    var previousPromise;
    defineProperty4(this, "_invoke", {
      value: function(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve2, reject2) {
            invoke(method, arg, resolve2, reject2);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self2, context) {
    var state = "suspendedStart";
    return function(method, arg) {
      if ("executing" === state)
        throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method)
          throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg; ; ) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel)
              continue;
            return delegateResult;
          }
        }
        if ("next" === context.method)
          context.sent = context._sent = context.arg;
        else if ("throw" === context.method) {
          if ("suspendedStart" === state)
            throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else
          "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self2, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel)
            continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method, method = delegate.iterator[methodName];
    if (void 0 === method)
      return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = void 0, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type)
      return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = void 0), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(true);
  }
  function values2(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod)
        return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next)
        return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1, next2 = function next3() {
          for (; ++i < iterable.length; )
            if (hasOwn3.call(iterable, i))
              return next3.value = iterable[i], next3.done = false, next3;
          return next3.value = void 0, next3.done = true, next3;
        };
        return next2.next = next2;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: void 0,
      done: true
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty4(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  }), defineProperty4(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports2.isGeneratorFunction = function(genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports2.mark = function(genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports2.awrap = function(arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
    return this;
  }), exports2.AsyncIterator = AsyncIterator, exports2.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
    return exports2.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
    return this;
  }), define(Gp, "toString", function() {
    return "[object Generator]";
  }), exports2.keys = function(val) {
    var object = Object(val), keys4 = [];
    for (var key in object)
      keys4.push(key);
    return keys4.reverse(), function next2() {
      for (; keys4.length; ) {
        var key2 = keys4.pop();
        if (key2 in object)
          return next2.value = key2, next2.done = false, next2;
      }
      return next2.done = true, next2;
    };
  }, exports2.values = values2, Context.prototype = {
    constructor: Context,
    reset: function(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
        for (var name in this)
          "t" === name.charAt(0) && hasOwn3.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
    },
    stop: function() {
      this.done = true;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type)
        throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function(exception) {
      if (this.done)
        throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = void 0), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i], record = entry.completion;
        if ("root" === entry.tryLoc)
          return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn3.call(entry, "catchLoc"), hasFinally = hasOwn3.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc)
              return handle(entry.catchLoc, true);
            if (this.prev < entry.finallyLoc)
              return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc)
              return handle(entry.catchLoc, true);
          } else {
            if (!hasFinally)
              throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc)
              return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function(type2, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn3.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type2 || "continue" === type2) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type2, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function(record, afterLoc) {
      if ("throw" === record.type)
        throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc)
          return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values2(iterable),
        resultName,
        nextLoc
      }, "next" === this.method && (this.arg = void 0), ContinueSentinel;
    }
  }, exports2;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x3) {
  return x3 && x3.__esModule && Object.prototype.hasOwnProperty.call(x3, "default") ? x3["default"] : x3;
}
var check = function(it) {
  return it && it.Math === Math && it;
};
var global$n = (
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == "object" && self) || check(typeof commonjsGlobal == "object" && commonjsGlobal) || check(typeof commonjsGlobal == "object" && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
);
var shared$4 = { exports: {} };
var global$m = global$n;
var defineProperty$9 = Object.defineProperty;
var defineGlobalProperty$3 = function(key, value) {
  try {
    defineProperty$9(global$m, key, { value, configurable: true, writable: true });
  } catch (error) {
    global$m[key] = value;
  }
  return value;
};
var global$l = global$n;
var defineGlobalProperty$2 = defineGlobalProperty$3;
var SHARED = "__core-js_shared__";
var store$3 = global$l[SHARED] || defineGlobalProperty$2(SHARED, {});
var sharedStore = store$3;
var store$2 = sharedStore;
(shared$4.exports = function(key, value) {
  return store$2[key] || (store$2[key] = value !== void 0 ? value : {});
})("versions", []).push({
  version: "3.34.0",
  mode: "global",
  copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var sharedExports = shared$4.exports;
var fails$u = function(exec2) {
  try {
    return !!exec2();
  } catch (error) {
    return true;
  }
};
var fails$t = fails$u;
var functionBindNative = !fails$t(function() {
  var test2 = (function() {
  }).bind();
  return typeof test2 != "function" || test2.hasOwnProperty("prototype");
});
var NATIVE_BIND$3 = functionBindNative;
var FunctionPrototype$3 = Function.prototype;
var call$j = FunctionPrototype$3.call;
var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$3.bind.bind(call$j, call$j);
var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function(fn) {
  return function() {
    return call$j.apply(fn, arguments);
  };
};
var isNullOrUndefined$8 = function(it) {
  return it === null || it === void 0;
};
var isNullOrUndefined$7 = isNullOrUndefined$8;
var $TypeError$g = TypeError;
var requireObjectCoercible$7 = function(it) {
  if (isNullOrUndefined$7(it))
    throw new $TypeError$g("Can't call method on " + it);
  return it;
};
var requireObjectCoercible$6 = requireObjectCoercible$7;
var $Object$4 = Object;
var toObject$a = function(argument) {
  return $Object$4(requireObjectCoercible$6(argument));
};
var uncurryThis$u = functionUncurryThis;
var toObject$9 = toObject$a;
var hasOwnProperty$d = uncurryThis$u({}.hasOwnProperty);
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty$d(toObject$9(it), key);
};
var uncurryThis$t = functionUncurryThis;
var id$2 = 0;
var postfix = Math.random();
var toString$c = uncurryThis$t(1 .toString);
var uid$3 = function(key) {
  return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString$c(++id$2 + postfix, 36);
};
var engineUserAgent = typeof navigator != "undefined" && String(navigator.userAgent) || "";
var global$k = global$n;
var userAgent$5 = engineUserAgent;
var process$3 = global$k.process;
var Deno$1 = global$k.Deno;
var versions = process$3 && process$3.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match;
var version;
if (v8) {
  match = v8.split(".");
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
if (!version && userAgent$5) {
  match = userAgent$5.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$5.match(/Chrome\/(\d+)/);
    if (match)
      version = +match[1];
  }
}
var engineV8Version = version;
var V8_VERSION$3 = engineV8Version;
var fails$s = fails$u;
var global$j = global$n;
var $String$5 = global$j.String;
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$s(function() {
  var symbol2 = Symbol("symbol detection");
  return !$String$5(symbol2) || !(Object(symbol2) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
});
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == "symbol";
var global$i = global$n;
var shared$3 = sharedExports;
var hasOwn$b = hasOwnProperty_1;
var uid$2 = uid$3;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var Symbol$3 = global$i.Symbol;
var WellKnownSymbolsStore = shared$3("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$3["for"] || Symbol$3 : Symbol$3 && Symbol$3.withoutSetter || uid$2;
var wellKnownSymbol$m = function(name) {
  if (!hasOwn$b(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$b(Symbol$3, name) ? Symbol$3[name] : createWellKnownSymbol("Symbol." + name);
  }
  return WellKnownSymbolsStore[name];
};
var wellKnownSymbol$l = wellKnownSymbol$m;
var TO_STRING_TAG$2 = wellKnownSymbol$l("toStringTag");
var test$1 = {};
test$1[TO_STRING_TAG$2] = "z";
var toStringTagSupport = String(test$1) === "[object z]";
var documentAll$2 = typeof document == "object" && document.all;
var IS_HTMLDDA = typeof documentAll$2 == "undefined" && documentAll$2 !== void 0;
var documentAll_1 = {
  all: documentAll$2,
  IS_HTMLDDA
};
var $documentAll$1 = documentAll_1;
var documentAll$1 = $documentAll$1.all;
var isCallable$o = $documentAll$1.IS_HTMLDDA ? function(argument) {
  return typeof argument == "function" || argument === documentAll$1;
} : function(argument) {
  return typeof argument == "function";
};
var objectDefineProperty = {};
var fails$r = fails$u;
var descriptors = !fails$r(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
});
var isCallable$n = isCallable$o;
var $documentAll = documentAll_1;
var documentAll = $documentAll.all;
var isObject$j = $documentAll.IS_HTMLDDA ? function(it) {
  return typeof it == "object" ? it !== null : isCallable$n(it) || it === documentAll;
} : function(it) {
  return typeof it == "object" ? it !== null : isCallable$n(it);
};
var global$h = global$n;
var isObject$i = isObject$j;
var document$3 = global$h.document;
var EXISTS$1 = isObject$i(document$3) && isObject$i(document$3.createElement);
var documentCreateElement$2 = function(it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};
var DESCRIPTORS$d = descriptors;
var fails$q = fails$u;
var createElement$1 = documentCreateElement$2;
var ie8DomDefine = !DESCRIPTORS$d && !fails$q(function() {
  return Object.defineProperty(createElement$1("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
});
var DESCRIPTORS$c = descriptors;
var fails$p = fails$u;
var v8PrototypeDefineBug = DESCRIPTORS$c && fails$p(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: false
  }).prototype !== 42;
});
var isObject$h = isObject$j;
var $String$4 = String;
var $TypeError$f = TypeError;
var anObject$f = function(argument) {
  if (isObject$h(argument))
    return argument;
  throw new $TypeError$f($String$4(argument) + " is not an object");
};
var NATIVE_BIND$2 = functionBindNative;
var call$i = Function.prototype.call;
var functionCall = NATIVE_BIND$2 ? call$i.bind(call$i) : function() {
  return call$i.apply(call$i, arguments);
};
var global$g = global$n;
var isCallable$m = isCallable$o;
var aFunction = function(argument) {
  return isCallable$m(argument) ? argument : void 0;
};
var getBuiltIn$7 = function(namespace, method) {
  return arguments.length < 2 ? aFunction(global$g[namespace]) : global$g[namespace] && global$g[namespace][method];
};
var uncurryThis$s = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$s({}.isPrototypeOf);
var getBuiltIn$6 = getBuiltIn$7;
var isCallable$l = isCallable$o;
var isPrototypeOf$2 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var $Object$3 = Object;
var isSymbol$3 = USE_SYMBOL_AS_UID ? function(it) {
  return typeof it == "symbol";
} : function(it) {
  var $Symbol = getBuiltIn$6("Symbol");
  return isCallable$l($Symbol) && isPrototypeOf$2($Symbol.prototype, $Object$3(it));
};
var $String$3 = String;
var tryToString$5 = function(argument) {
  try {
    return $String$3(argument);
  } catch (error) {
    return "Object";
  }
};
var isCallable$k = isCallable$o;
var tryToString$4 = tryToString$5;
var $TypeError$e = TypeError;
var aCallable$a = function(argument) {
  if (isCallable$k(argument))
    return argument;
  throw new $TypeError$e(tryToString$4(argument) + " is not a function");
};
var aCallable$9 = aCallable$a;
var isNullOrUndefined$6 = isNullOrUndefined$8;
var getMethod$4 = function(V, P) {
  var func = V[P];
  return isNullOrUndefined$6(func) ? void 0 : aCallable$9(func);
};
var call$h = functionCall;
var isCallable$j = isCallable$o;
var isObject$g = isObject$j;
var $TypeError$d = TypeError;
var ordinaryToPrimitive$1 = function(input, pref) {
  var fn, val;
  if (pref === "string" && isCallable$j(fn = input.toString) && !isObject$g(val = call$h(fn, input)))
    return val;
  if (isCallable$j(fn = input.valueOf) && !isObject$g(val = call$h(fn, input)))
    return val;
  if (pref !== "string" && isCallable$j(fn = input.toString) && !isObject$g(val = call$h(fn, input)))
    return val;
  throw new $TypeError$d("Can't convert object to primitive value");
};
var call$g = functionCall;
var isObject$f = isObject$j;
var isSymbol$2 = isSymbol$3;
var getMethod$3 = getMethod$4;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$k = wellKnownSymbol$m;
var $TypeError$c = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$k("toPrimitive");
var toPrimitive$1 = function(input, pref) {
  if (!isObject$f(input) || isSymbol$2(input))
    return input;
  var exoticToPrim = getMethod$3(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === void 0)
      pref = "default";
    result = call$g(exoticToPrim, input, pref);
    if (!isObject$f(result) || isSymbol$2(result))
      return result;
    throw new $TypeError$c("Can't convert object to primitive value");
  }
  if (pref === void 0)
    pref = "number";
  return ordinaryToPrimitive(input, pref);
};
var toPrimitive = toPrimitive$1;
var isSymbol$1 = isSymbol$3;
var toPropertyKey$3 = function(argument) {
  var key = toPrimitive(argument, "string");
  return isSymbol$1(key) ? key : key + "";
};
var DESCRIPTORS$b = descriptors;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$e = anObject$f;
var toPropertyKey$2 = toPropertyKey$3;
var $TypeError$b = TypeError;
var $defineProperty = Object.defineProperty;
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE$1 = "configurable";
var WRITABLE = "writable";
objectDefineProperty.f = DESCRIPTORS$b ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$e(O);
  P = toPropertyKey$2(P);
  anObject$e(Attributes);
  if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }
  return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty2(O, P, Attributes) {
  anObject$e(O);
  P = toPropertyKey$2(P);
  anObject$e(Attributes);
  if (IE8_DOM_DEFINE$1)
    try {
      return $defineProperty(O, P, Attributes);
    } catch (error) {
    }
  if ("get" in Attributes || "set" in Attributes)
    throw new $TypeError$b("Accessors not supported");
  if ("value" in Attributes)
    O[P] = Attributes.value;
  return O;
};
var makeBuiltIn$3 = { exports: {} };
var DESCRIPTORS$a = descriptors;
var hasOwn$a = hasOwnProperty_1;
var FunctionPrototype$2 = Function.prototype;
var getDescriptor = DESCRIPTORS$a && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$a(FunctionPrototype$2, "name");
var PROPER = EXISTS && (function something() {
}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$a || DESCRIPTORS$a && getDescriptor(FunctionPrototype$2, "name").configurable);
var functionName = {
  EXISTS,
  PROPER,
  CONFIGURABLE
};
var uncurryThis$r = functionUncurryThis;
var isCallable$i = isCallable$o;
var store$1 = sharedStore;
var functionToString$1 = uncurryThis$r(Function.toString);
if (!isCallable$i(store$1.inspectSource)) {
  store$1.inspectSource = function(it) {
    return functionToString$1(it);
  };
}
var inspectSource$3 = store$1.inspectSource;
var global$f = global$n;
var isCallable$h = isCallable$o;
var WeakMap$3 = global$f.WeakMap;
var weakMapBasicDetection = isCallable$h(WeakMap$3) && /native code/.test(String(WeakMap$3));
var createPropertyDescriptor$4 = function(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value
  };
};
var DESCRIPTORS$9 = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$3 = createPropertyDescriptor$4;
var createNonEnumerableProperty$6 = DESCRIPTORS$9 ? function(object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$3(1, value));
} : function(object, key, value) {
  object[key] = value;
  return object;
};
var shared$2 = sharedExports;
var uid$1 = uid$3;
var keys$1 = shared$2("keys");
var sharedKey$3 = function(key) {
  return keys$1[key] || (keys$1[key] = uid$1(key));
};
var hiddenKeys$5 = {};
var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$e = global$n;
var isObject$e = isObject$j;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$6;
var hasOwn$9 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$4 = hiddenKeys$5;
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError$2 = global$e.TypeError;
var WeakMap$2 = global$e.WeakMap;
var set$2;
var get$1;
var has$1;
var enforce = function(it) {
  return has$1(it) ? get$1(it) : set$2(it, {});
};
var getterFor = function(TYPE) {
  return function(it) {
    var state;
    if (!isObject$e(it) || (state = get$1(it)).type !== TYPE) {
      throw new TypeError$2("Incompatible receiver, " + TYPE + " required");
    }
    return state;
  };
};
if (NATIVE_WEAK_MAP || shared$1.state) {
  store = shared$1.state || (shared$1.state = new WeakMap$2());
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  set$2 = function(it, metadata) {
    if (store.has(it))
      throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get$1 = function(it) {
    return store.get(it) || {};
  };
  has$1 = function(it) {
    return store.has(it);
  };
} else {
  STATE = sharedKey$2("state");
  hiddenKeys$4[STATE] = true;
  set$2 = function(it, metadata) {
    if (hasOwn$9(it, STATE))
      throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$5(it, STATE, metadata);
    return metadata;
  };
  get$1 = function(it) {
    return hasOwn$9(it, STATE) ? it[STATE] : {};
  };
  has$1 = function(it) {
    return hasOwn$9(it, STATE);
  };
}
var store;
var STATE;
var internalState = {
  set: set$2,
  get: get$1,
  has: has$1,
  enforce,
  getterFor
};
var uncurryThis$q = functionUncurryThis;
var fails$o = fails$u;
var isCallable$g = isCallable$o;
var hasOwn$8 = hasOwnProperty_1;
var DESCRIPTORS$8 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource$2 = inspectSource$3;
var InternalStateModule$5 = internalState;
var enforceInternalState = InternalStateModule$5.enforce;
var getInternalState$3 = InternalStateModule$5.get;
var $String$2 = String;
var defineProperty$8 = Object.defineProperty;
var stringSlice$6 = uncurryThis$q("".slice);
var replace$3 = uncurryThis$q("".replace);
var join = uncurryThis$q([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS$8 && !fails$o(function() {
  return defineProperty$8(function() {
  }, "length", { value: 8 }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn$2 = makeBuiltIn$3.exports = function(value, name, options) {
  if (stringSlice$6($String$2(name), 0, 7) === "Symbol(") {
    name = "[" + replace$3($String$2(name), /^Symbol\(([^)]*)\)/, "$1") + "]";
  }
  if (options && options.getter)
    name = "get " + name;
  if (options && options.setter)
    name = "set " + name;
  if (!hasOwn$8(value, "name") || CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name) {
    if (DESCRIPTORS$8)
      defineProperty$8(value, "name", { value: name, configurable: true });
    else
      value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$8(options, "arity") && value.length !== options.arity) {
    defineProperty$8(value, "length", { value: options.arity });
  }
  try {
    if (options && hasOwn$8(options, "constructor") && options.constructor) {
      if (DESCRIPTORS$8)
        defineProperty$8(value, "prototype", { writable: false });
    } else if (value.prototype)
      value.prototype = void 0;
  } catch (error) {
  }
  var state = enforceInternalState(value);
  if (!hasOwn$8(state, "source")) {
    state.source = join(TEMPLATE, typeof name == "string" ? name : "");
  }
  return value;
};
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$g(this) && getInternalState$3(this).source || inspectSource$2(this);
}, "toString");
var makeBuiltInExports = makeBuiltIn$3.exports;
var isCallable$f = isCallable$o;
var definePropertyModule$3 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltInExports;
var defineGlobalProperty$1 = defineGlobalProperty$3;
var defineBuiltIn$9 = function(O, key, value, options) {
  if (!options)
    options = {};
  var simple = options.enumerable;
  var name = options.name !== void 0 ? options.name : key;
  if (isCallable$f(value))
    makeBuiltIn$1(value, name, options);
  if (options.global) {
    if (simple)
      O[key] = value;
    else
      defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe)
        delete O[key];
      else if (O[key])
        simple = true;
    } catch (error) {
    }
    if (simple)
      O[key] = value;
    else
      definePropertyModule$3.f(O, key, {
        value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
  }
  return O;
};
var uncurryThis$p = functionUncurryThis;
var toString$b = uncurryThis$p({}.toString);
var stringSlice$5 = uncurryThis$p("".slice);
var classofRaw$2 = function(it) {
  return stringSlice$5(toString$b(it), 8, -1);
};
var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$e = isCallable$o;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$j = wellKnownSymbol$m;
var TO_STRING_TAG$1 = wellKnownSymbol$j("toStringTag");
var $Object$2 = Object;
var CORRECT_ARGUMENTS = classofRaw$1(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments";
var tryGet = function(it, key) {
  try {
    return it[key];
  } catch (error) {
  }
};
var classof$b = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function(it) {
  var O, tag, result;
  return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object$2(it), TO_STRING_TAG$1)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw$1(O) : (result = classofRaw$1(O)) === "Object" && isCallable$e(O.callee) ? "Arguments" : result;
};
var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$a = classof$b;
var objectToString$2 = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString2() {
  return "[object " + classof$a(this) + "]";
};
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var defineBuiltIn$8 = defineBuiltIn$9;
var toString$a = objectToString$2;
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn$8(Object.prototype, "toString", toString$a, { unsafe: true });
}
var objectGetOwnPropertyDescriptor = {};
var objectPropertyIsEnumerable = {};
var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;
var NASHORN_BUG = getOwnPropertyDescriptor$3 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$3(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable$1;
var uncurryThis$o = functionUncurryThis;
var fails$n = fails$u;
var classof$9 = classofRaw$2;
var $Object$1 = Object;
var split = uncurryThis$o("".split);
var indexedObject = fails$n(function() {
  return !$Object$1("z").propertyIsEnumerable(0);
}) ? function(it) {
  return classof$9(it) === "String" ? split(it, "") : $Object$1(it);
} : $Object$1;
var IndexedObject$3 = indexedObject;
var requireObjectCoercible$5 = requireObjectCoercible$7;
var toIndexedObject$9 = function(it) {
  return IndexedObject$3(requireObjectCoercible$5(it));
};
var DESCRIPTORS$7 = descriptors;
var call$f = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$4;
var toIndexedObject$8 = toIndexedObject$9;
var toPropertyKey$1 = toPropertyKey$3;
var hasOwn$7 = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine;
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$8(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE)
    try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) {
    }
  if (hasOwn$7(O, P))
    return createPropertyDescriptor$2(!call$f(propertyIsEnumerableModule$1.f, O, P), O[P]);
};
var objectGetOwnPropertyNames = {};
var ceil2 = Math.ceil;
var floor$2 = Math.floor;
var mathTrunc = Math.trunc || function trunc(x3) {
  var n = +x3;
  return (n > 0 ? floor$2 : ceil2)(n);
};
var trunc2 = mathTrunc;
var toIntegerOrInfinity$4 = function(argument) {
  var number5 = +argument;
  return number5 !== number5 || number5 === 0 ? 0 : trunc2(number5);
};
var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;
var max$3 = Math.max;
var min$3 = Math.min;
var toAbsoluteIndex$4 = function(index2, length2) {
  var integer = toIntegerOrInfinity$3(index2);
  return integer < 0 ? max$3(integer + length2, 0) : min$3(integer, length2);
};
var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;
var min$2 = Math.min;
var toLength$3 = function(argument) {
  return argument > 0 ? min$2(toIntegerOrInfinity$2(argument), 9007199254740991) : 0;
};
var toLength$2 = toLength$3;
var lengthOfArrayLike$9 = function(obj) {
  return toLength$2(obj.length);
};
var toIndexedObject$7 = toIndexedObject$9;
var toAbsoluteIndex$3 = toAbsoluteIndex$4;
var lengthOfArrayLike$8 = lengthOfArrayLike$9;
var createMethod$4 = function(IS_INCLUDES) {
  return function($this, el, fromIndex) {
    var O = toIndexedObject$7($this);
    var length2 = lengthOfArrayLike$8(O);
    var index2 = toAbsoluteIndex$3(fromIndex, length2);
    var value;
    if (IS_INCLUDES && el !== el)
      while (length2 > index2) {
        value = O[index2++];
        if (value !== value)
          return true;
      }
    else
      for (; length2 > index2; index2++) {
        if ((IS_INCLUDES || index2 in O) && O[index2] === el)
          return IS_INCLUDES || index2 || 0;
      }
    return !IS_INCLUDES && -1;
  };
};
var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$4(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$4(false)
};
var uncurryThis$n = functionUncurryThis;
var hasOwn$6 = hasOwnProperty_1;
var toIndexedObject$6 = toIndexedObject$9;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$3 = hiddenKeys$5;
var push$4 = uncurryThis$n([].push);
var objectKeysInternal = function(object, names) {
  var O = toIndexedObject$6(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O)
    !hasOwn$6(hiddenKeys$3, key) && hasOwn$6(O, key) && push$4(result, key);
  while (names.length > i)
    if (hasOwn$6(O, key = names[i++])) {
      ~indexOf$1(result, key) || push$4(result, key);
    }
  return result;
};
var enumBugKeys$3 = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
];
var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;
var hiddenKeys$2 = enumBugKeys$2.concat("length", "prototype");
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$2);
};
var objectGetOwnPropertySymbols = {};
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
var getBuiltIn$5 = getBuiltIn$7;
var uncurryThis$m = functionUncurryThis;
var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$d = anObject$f;
var concat$2 = uncurryThis$m([].concat);
var ownKeys$1 = getBuiltIn$5("Reflect", "ownKeys") || function ownKeys(it) {
  var keys4 = getOwnPropertyNamesModule$1.f(anObject$d(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys4, getOwnPropertySymbols(it)) : keys4;
};
var hasOwn$5 = hasOwnProperty_1;
var ownKeys2 = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$2 = objectDefineProperty;
var copyConstructorProperties$1 = function(target, source, exceptions) {
  var keys4 = ownKeys2(source);
  var defineProperty4 = definePropertyModule$2.f;
  var getOwnPropertyDescriptor3 = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys4.length; i++) {
    var key = keys4[i];
    if (!hasOwn$5(target, key) && !(exceptions && hasOwn$5(exceptions, key))) {
      defineProperty4(target, key, getOwnPropertyDescriptor3(source, key));
    }
  }
};
var fails$m = fails$u;
var isCallable$d = isCallable$o;
var replacement = /#|\.prototype\./;
var isForced$3 = function(feature, detection) {
  var value = data[normalize2(feature)];
  return value === POLYFILL ? true : value === NATIVE ? false : isCallable$d(detection) ? fails$m(detection) : !!detection;
};
var normalize2 = isForced$3.normalize = function(string) {
  return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced$3.data = {};
var NATIVE = isForced$3.NATIVE = "N";
var POLYFILL = isForced$3.POLYFILL = "P";
var isForced_1 = isForced$3;
var global$d = global$n;
var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$6;
var defineBuiltIn$7 = defineBuiltIn$9;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced$2 = isForced_1;
var _export = function(options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED2, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$d;
  } else if (STATIC) {
    target = global$d[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$d[TARGET] || {}).prototype;
  }
  if (target)
    for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$2(target, key);
        targetProperty = descriptor && descriptor.value;
      } else
        targetProperty = target[key];
      FORCED2 = isForced$2(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
      if (!FORCED2 && targetProperty !== void 0) {
        if (typeof sourceProperty == typeof targetProperty)
          continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty$4(sourceProperty, "sham", true);
      }
      defineBuiltIn$7(target, key, sourceProperty, options);
    }
};
var global$c = global$n;
var classof$8 = classofRaw$2;
var engineIsNode = classof$8(global$c.process) === "process";
var uncurryThis$l = functionUncurryThis;
var aCallable$8 = aCallable$a;
var functionUncurryThisAccessor = function(object, key, method) {
  try {
    return uncurryThis$l(aCallable$8(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) {
  }
};
var isCallable$c = isCallable$o;
var $String$1 = String;
var $TypeError$a = TypeError;
var aPossiblePrototype$1 = function(argument) {
  if (typeof argument == "object" || isCallable$c(argument))
    return argument;
  throw new $TypeError$a("Can't set " + $String$1(argument) + " as a prototype");
};
var uncurryThisAccessor = functionUncurryThisAccessor;
var anObject$c = anObject$f;
var aPossiblePrototype = aPossiblePrototype$1;
var objectSetPrototypeOf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var CORRECT_SETTER = false;
  var test2 = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
    setter(test2, []);
    CORRECT_SETTER = test2 instanceof Array;
  } catch (error) {
  }
  return function setPrototypeOf2(O, proto) {
    anObject$c(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER)
      setter(O, proto);
    else
      O.__proto__ = proto;
    return O;
  };
}() : void 0);
var defineProperty$7 = objectDefineProperty.f;
var hasOwn$4 = hasOwnProperty_1;
var wellKnownSymbol$i = wellKnownSymbol$m;
var TO_STRING_TAG = wellKnownSymbol$i("toStringTag");
var setToStringTag$5 = function(target, TAG, STATIC) {
  if (target && !STATIC)
    target = target.prototype;
  if (target && !hasOwn$4(target, TO_STRING_TAG)) {
    defineProperty$7(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};
var makeBuiltIn = makeBuiltInExports;
var defineProperty$6 = objectDefineProperty;
var defineBuiltInAccessor$3 = function(target, name, descriptor) {
  if (descriptor.get)
    makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set)
    makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty$6.f(target, name, descriptor);
};
var getBuiltIn$4 = getBuiltIn$7;
var defineBuiltInAccessor$2 = defineBuiltInAccessor$3;
var wellKnownSymbol$h = wellKnownSymbol$m;
var DESCRIPTORS$6 = descriptors;
var SPECIES$6 = wellKnownSymbol$h("species");
var setSpecies$2 = function(CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$4(CONSTRUCTOR_NAME);
  if (DESCRIPTORS$6 && Constructor && !Constructor[SPECIES$6]) {
    defineBuiltInAccessor$2(Constructor, SPECIES$6, {
      configurable: true,
      get: function() {
        return this;
      }
    });
  }
};
var isPrototypeOf$1 = objectIsPrototypeOf;
var $TypeError$9 = TypeError;
var anInstance$4 = function(it, Prototype) {
  if (isPrototypeOf$1(Prototype, it))
    return it;
  throw new $TypeError$9("Incorrect invocation");
};
var uncurryThis$k = functionUncurryThis;
var fails$l = fails$u;
var isCallable$b = isCallable$o;
var classof$7 = classof$b;
var getBuiltIn$3 = getBuiltIn$7;
var inspectSource$1 = inspectSource$3;
var noop3 = function() {
};
var empty2 = [];
var construct = getBuiltIn$3("Reflect", "construct");
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$1 = uncurryThis$k(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop3);
var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$b(argument))
    return false;
  try {
    construct(noop3, empty2, argument);
    return true;
  } catch (error) {
    return false;
  }
};
var isConstructorLegacy = function isConstructor2(argument) {
  if (!isCallable$b(argument))
    return false;
  switch (classof$7(argument)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};
isConstructorLegacy.sham = true;
var isConstructor$4 = !construct || fails$l(function() {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;
var isConstructor$3 = isConstructor$4;
var tryToString$3 = tryToString$5;
var $TypeError$8 = TypeError;
var aConstructor$1 = function(argument) {
  if (isConstructor$3(argument))
    return argument;
  throw new $TypeError$8(tryToString$3(argument) + " is not a constructor");
};
var anObject$b = anObject$f;
var aConstructor = aConstructor$1;
var isNullOrUndefined$5 = isNullOrUndefined$8;
var wellKnownSymbol$g = wellKnownSymbol$m;
var SPECIES$5 = wellKnownSymbol$g("species");
var speciesConstructor$1 = function(O, defaultConstructor) {
  var C3 = anObject$b(O).constructor;
  var S;
  return C3 === void 0 || isNullOrUndefined$5(S = anObject$b(C3)[SPECIES$5]) ? defaultConstructor : aConstructor(S);
};
var NATIVE_BIND$1 = functionBindNative;
var FunctionPrototype$1 = Function.prototype;
var apply$3 = FunctionPrototype$1.apply;
var call$e = FunctionPrototype$1.call;
var functionApply = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND$1 ? call$e.bind(apply$3) : function() {
  return call$e.apply(apply$3, arguments);
});
var classofRaw = classofRaw$2;
var uncurryThis$j = functionUncurryThis;
var functionUncurryThisClause = function(fn) {
  if (classofRaw(fn) === "Function")
    return uncurryThis$j(fn);
};
var uncurryThis$i = functionUncurryThisClause;
var aCallable$7 = aCallable$a;
var NATIVE_BIND = functionBindNative;
var bind$7 = uncurryThis$i(uncurryThis$i.bind);
var functionBindContext = function(fn, that) {
  aCallable$7(fn);
  return that === void 0 ? fn : NATIVE_BIND ? bind$7(fn, that) : function() {
    return fn.apply(that, arguments);
  };
};
var getBuiltIn$2 = getBuiltIn$7;
var html$2 = getBuiltIn$2("document", "documentElement");
var uncurryThis$h = functionUncurryThis;
var arraySlice$3 = uncurryThis$h([].slice);
var $TypeError$7 = TypeError;
var validateArgumentsLength$1 = function(passed, required2) {
  if (passed < required2)
    throw new $TypeError$7("Not enough arguments");
  return passed;
};
var userAgent$4 = engineUserAgent;
var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$4);
var global$b = global$n;
var apply$2 = functionApply;
var bind$6 = functionBindContext;
var isCallable$a = isCallable$o;
var hasOwn$3 = hasOwnProperty_1;
var fails$k = fails$u;
var html$1 = html$2;
var arraySlice$2 = arraySlice$3;
var createElement = documentCreateElement$2;
var validateArgumentsLength = validateArgumentsLength$1;
var IS_IOS$1 = engineIsIos;
var IS_NODE$3 = engineIsNode;
var set$1 = global$b.setImmediate;
var clear = global$b.clearImmediate;
var process$2 = global$b.process;
var Dispatch2 = global$b.Dispatch;
var Function$1 = global$b.Function;
var MessageChannel = global$b.MessageChannel;
var String$1 = global$b.String;
var counter = 0;
var queue$2 = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location;
var defer;
var channel;
var port;
fails$k(function() {
  $location = global$b.location;
});
var run = function(id3) {
  if (hasOwn$3(queue$2, id3)) {
    var fn = queue$2[id3];
    delete queue$2[id3];
    fn();
  }
};
var runner = function(id3) {
  return function() {
    run(id3);
  };
};
var eventListener = function(event) {
  run(event.data);
};
var globalPostMessageDefer = function(id3) {
  global$b.postMessage(String$1(id3), $location.protocol + "//" + $location.host);
};
if (!set$1 || !clear) {
  set$1 = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable$a(handler) ? handler : Function$1(handler);
    var args = arraySlice$2(arguments, 1);
    queue$2[++counter] = function() {
      apply$2(fn, void 0, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id3) {
    delete queue$2[id3];
  };
  if (IS_NODE$3) {
    defer = function(id3) {
      process$2.nextTick(runner(id3));
    };
  } else if (Dispatch2 && Dispatch2.now) {
    defer = function(id3) {
      Dispatch2.now(runner(id3));
    };
  } else if (MessageChannel && !IS_IOS$1) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind$6(port.postMessage, port);
  } else if (global$b.addEventListener && isCallable$a(global$b.postMessage) && !global$b.importScripts && $location && $location.protocol !== "file:" && !fails$k(globalPostMessageDefer)) {
    defer = globalPostMessageDefer;
    global$b.addEventListener("message", eventListener, false);
  } else if (ONREADYSTATECHANGE in createElement("script")) {
    defer = function(id3) {
      html$1.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
        html$1.removeChild(this);
        run(id3);
      };
    };
  } else {
    defer = function(id3) {
      setTimeout(runner(id3), 0);
    };
  }
}
var task$1 = {
  set: set$1,
  clear
};
var Queue$2 = function() {
  this.head = null;
  this.tail = null;
};
Queue$2.prototype = {
  add: function(item) {
    var entry = { item, next: null };
    var tail = this.tail;
    if (tail)
      tail.next = entry;
    else
      this.head = entry;
    this.tail = entry;
  },
  get: function() {
    var entry = this.head;
    if (entry) {
      var next2 = this.head = entry.next;
      if (next2 === null)
        this.tail = null;
      return entry.item;
    }
  }
};
var queue$1 = Queue$2;
var userAgent$3 = engineUserAgent;
var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$3) && typeof Pebble != "undefined";
var userAgent$2 = engineUserAgent;
var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$2);
var global$a = global$n;
var bind$5 = functionBindContext;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;
var Queue$1 = queue$1;
var IS_IOS = engineIsIos;
var IS_IOS_PEBBLE = engineIsIosPebble;
var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
var IS_NODE$2 = engineIsNode;
var MutationObserver = global$a.MutationObserver || global$a.WebKitMutationObserver;
var document$2 = global$a.document;
var process$1 = global$a.process;
var Promise$3 = global$a.Promise;
var queueMicrotaskDescriptor = getOwnPropertyDescriptor$1(global$a, "queueMicrotask");
var microtask$1 = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var notify$1;
var toggle;
var node;
var promise;
var then;
if (!microtask$1) {
  queue = new Queue$1();
  flush = function() {
    var parent, fn;
    if (IS_NODE$2 && (parent = process$1.domain))
      parent.exit();
    while (fn = queue.get())
      try {
        fn();
      } catch (error) {
        if (queue.head)
          notify$1();
        throw error;
      }
    if (parent)
      parent.enter();
  };
  if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode("");
    new MutationObserver(flush).observe(node, { characterData: true });
    notify$1 = function() {
      node.data = toggle = !toggle;
    };
  } else if (!IS_IOS_PEBBLE && Promise$3 && Promise$3.resolve) {
    promise = Promise$3.resolve(void 0);
    promise.constructor = Promise$3;
    then = bind$5(promise.then, promise);
    notify$1 = function() {
      then(flush);
    };
  } else if (IS_NODE$2) {
    notify$1 = function() {
      process$1.nextTick(flush);
    };
  } else {
    macrotask = bind$5(macrotask, global$a);
    notify$1 = function() {
      macrotask(flush);
    };
  }
  microtask$1 = function(fn) {
    if (!queue.head)
      notify$1();
    queue.add(fn);
  };
}
var queue;
var flush;
var microtask_1 = microtask$1;
var hostReportErrors$1 = function(a2, b) {
  try {
    arguments.length === 1 ? console.error(a2) : console.error(a2, b);
  } catch (error) {
  }
};
var perform$4 = function(exec2) {
  try {
    return { error: false, value: exec2() };
  } catch (error) {
    return { error: true, value: error };
  }
};
var global$9 = global$n;
var promiseNativeConstructor = global$9.Promise;
var engineIsDeno = typeof Deno == "object" && Deno && typeof Deno.version == "object";
var IS_DENO$1 = engineIsDeno;
var IS_NODE$1 = engineIsNode;
var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1 && typeof window == "object" && typeof document == "object";
var global$8 = global$n;
var NativePromiseConstructor$3 = promiseNativeConstructor;
var isCallable$9 = isCallable$o;
var isForced$1 = isForced_1;
var inspectSource = inspectSource$3;
var wellKnownSymbol$f = wellKnownSymbol$m;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var V8_VERSION$2 = engineV8Version;
NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var SPECIES$4 = wellKnownSymbol$f("species");
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$9(global$8.PromiseRejectionEvent);
var FORCED_PROMISE_CONSTRUCTOR$5 = isForced$1("Promise", function() {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$3);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$3);
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION$2 === 66)
    return true;
  if (!V8_VERSION$2 || V8_VERSION$2 < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    var promise2 = new NativePromiseConstructor$3(function(resolve2) {
      resolve2(1);
    });
    var FakePromise = function(exec2) {
      exec2(function() {
      }, function() {
      });
    };
    var constructor = promise2.constructor = {};
    constructor[SPECIES$4] = FakePromise;
    SUBCLASSING = promise2.then(function() {
    }) instanceof FakePromise;
    if (!SUBCLASSING)
      return true;
  }
  return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
});
var promiseConstructorDetection = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
  SUBCLASSING
};
var newPromiseCapability$2 = {};
var aCallable$6 = aCallable$a;
var $TypeError$6 = TypeError;
var PromiseCapability = function(C3) {
  var resolve2, reject2;
  this.promise = new C3(function($$resolve, $$reject) {
    if (resolve2 !== void 0 || reject2 !== void 0)
      throw new $TypeError$6("Bad Promise constructor");
    resolve2 = $$resolve;
    reject2 = $$reject;
  });
  this.resolve = aCallable$6(resolve2);
  this.reject = aCallable$6(reject2);
};
newPromiseCapability$2.f = function(C3) {
  return new PromiseCapability(C3);
};
var $$p = _export;
var IS_NODE = engineIsNode;
var global$7 = global$n;
var call$d = functionCall;
var defineBuiltIn$6 = defineBuiltIn$9;
var setPrototypeOf$2 = objectSetPrototypeOf;
var setToStringTag$4 = setToStringTag$5;
var setSpecies$1 = setSpecies$2;
var aCallable$5 = aCallable$a;
var isCallable$8 = isCallable$o;
var isObject$d = isObject$j;
var anInstance$3 = anInstance$4;
var speciesConstructor = speciesConstructor$1;
var task = task$1.set;
var microtask = microtask_1;
var hostReportErrors = hostReportErrors$1;
var perform$3 = perform$4;
var Queue = queue$1;
var InternalStateModule$4 = internalState;
var NativePromiseConstructor$2 = promiseNativeConstructor;
var PromiseConstructorDetection = promiseConstructorDetection;
var newPromiseCapabilityModule$4 = newPromiseCapability$2;
var PROMISE = "Promise";
var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule$4.getterFor(PROMISE);
var setInternalState$4 = InternalStateModule$4.set;
var NativePromisePrototype$1 = NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
var PromiseConstructor = NativePromiseConstructor$2;
var PromisePrototype = NativePromisePrototype$1;
var TypeError$1 = global$7.TypeError;
var document$1 = global$7.document;
var process = global$7.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$4.f;
var newGenericPromiseCapability = newPromiseCapability$1;
var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$7.dispatchEvent);
var UNHANDLED_REJECTION = "unhandledrejection";
var REJECTION_HANDLED = "rejectionhandled";
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal;
var OwnPromiseCapability;
var PromiseWrapper;
var nativeThen;
var isThenable = function(it) {
  var then2;
  return isObject$d(it) && isCallable$8(then2 = it.then) ? then2 : false;
};
var callReaction = function(reaction, state) {
  var value = state.value;
  var ok = state.state === FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve2 = reaction.resolve;
  var reject2 = reaction.reject;
  var domain = reaction.domain;
  var result, then2, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED)
          onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true)
        result = value;
      else {
        if (domain)
          domain.enter();
        result = handler(value);
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject2(new TypeError$1("Promise-chain cycle"));
      } else if (then2 = isThenable(result)) {
        call$d(then2, result, resolve2, reject2);
      } else
        resolve2(result);
    } else
      reject2(value);
  } catch (error) {
    if (domain && !exited)
      domain.exit();
    reject2(error);
  }
};
var notify = function(state, isReject) {
  if (state.notified)
    return;
  state.notified = true;
  microtask(function() {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection)
      onUnhandled(state);
  });
};
var dispatchEvent2 = function(name, promise2, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$1.createEvent("Event");
    event.promise = promise2;
    event.reason = reason;
    event.initEvent(name, false, true);
    global$7.dispatchEvent(event);
  } else
    event = { promise: promise2, reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$7["on" + name]))
    handler(event);
  else if (name === UNHANDLED_REJECTION)
    hostReportErrors("Unhandled promise rejection", reason);
};
var onUnhandled = function(state) {
  call$d(task, global$7, function() {
    var promise2 = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$3(function() {
        if (IS_NODE) {
          process.emit("unhandledRejection", value, promise2);
        } else
          dispatchEvent2(UNHANDLED_REJECTION, promise2, value);
      });
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error)
        throw result.value;
    }
  });
};
var isUnhandled = function(state) {
  return state.rejection !== HANDLED && !state.parent;
};
var onHandleUnhandled = function(state) {
  call$d(task, global$7, function() {
    var promise2 = state.facade;
    if (IS_NODE) {
      process.emit("rejectionHandled", promise2);
    } else
      dispatchEvent2(REJECTION_HANDLED, promise2, state.value);
  });
};
var bind$4 = function(fn, state, unwrap) {
  return function(value) {
    fn(state, value, unwrap);
  };
};
var internalReject = function(state, value, unwrap) {
  if (state.done)
    return;
  state.done = true;
  if (unwrap)
    state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};
var internalResolve = function(state, value, unwrap) {
  if (state.done)
    return;
  state.done = true;
  if (unwrap)
    state = unwrap;
  try {
    if (state.facade === value)
      throw new TypeError$1("Promise can't be resolved itself");
    var then2 = isThenable(value);
    if (then2) {
      microtask(function() {
        var wrapper = { done: false };
        try {
          call$d(
            then2,
            value,
            bind$4(internalResolve, wrapper, state),
            bind$4(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};
if (FORCED_PROMISE_CONSTRUCTOR$4) {
  PromiseConstructor = function Promise2(executor) {
    anInstance$3(this, PromisePrototype);
    aCallable$5(executor);
    call$d(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind$4(internalResolve, state), bind$4(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromisePrototype = PromiseConstructor.prototype;
  Internal = function Promise2(executor) {
    setInternalState$4(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: void 0
    });
  };
  Internal.prototype = defineBuiltIn$6(PromisePrototype, "then", function then2(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$8(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$8(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : void 0;
    if (state.state === PENDING)
      state.reactions.add(reaction);
    else
      microtask(function() {
        callReaction(reaction, state);
      });
    return reaction.promise;
  });
  OwnPromiseCapability = function() {
    var promise2 = new Internal();
    var state = getInternalPromiseState(promise2);
    this.promise = promise2;
    this.resolve = bind$4(internalResolve, state);
    this.reject = bind$4(internalReject, state);
  };
  newPromiseCapabilityModule$4.f = newPromiseCapability$1 = function(C3) {
    return C3 === PromiseConstructor || C3 === PromiseWrapper ? new OwnPromiseCapability(C3) : newGenericPromiseCapability(C3);
  };
  if (isCallable$8(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
    nativeThen = NativePromisePrototype$1.then;
    if (!NATIVE_PROMISE_SUBCLASSING) {
      defineBuiltIn$6(NativePromisePrototype$1, "then", function then2(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function(resolve2, reject2) {
          call$d(nativeThen, that, resolve2, reject2);
        }).then(onFulfilled, onRejected);
      }, { unsafe: true });
    }
    try {
      delete NativePromisePrototype$1.constructor;
    } catch (error) {
    }
    if (setPrototypeOf$2) {
      setPrototypeOf$2(NativePromisePrototype$1, PromisePrototype);
    }
  }
}
$$p({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});
setToStringTag$4(PromiseConstructor, PROMISE, false);
setSpecies$1(PROMISE);
var iterators = {};
var wellKnownSymbol$e = wellKnownSymbol$m;
var Iterators$4 = iterators;
var ITERATOR$5 = wellKnownSymbol$e("iterator");
var ArrayPrototype$1 = Array.prototype;
var isArrayIteratorMethod$2 = function(it) {
  return it !== void 0 && (Iterators$4.Array === it || ArrayPrototype$1[ITERATOR$5] === it);
};
var classof$6 = classof$b;
var getMethod$2 = getMethod$4;
var isNullOrUndefined$4 = isNullOrUndefined$8;
var Iterators$3 = iterators;
var wellKnownSymbol$d = wellKnownSymbol$m;
var ITERATOR$4 = wellKnownSymbol$d("iterator");
var getIteratorMethod$3 = function(it) {
  if (!isNullOrUndefined$4(it))
    return getMethod$2(it, ITERATOR$4) || getMethod$2(it, "@@iterator") || Iterators$3[classof$6(it)];
};
var call$c = functionCall;
var aCallable$4 = aCallable$a;
var anObject$a = anObject$f;
var tryToString$2 = tryToString$5;
var getIteratorMethod$2 = getIteratorMethod$3;
var $TypeError$5 = TypeError;
var getIterator$2 = function(argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$2(argument) : usingIterator;
  if (aCallable$4(iteratorMethod))
    return anObject$a(call$c(iteratorMethod, argument));
  throw new $TypeError$5(tryToString$2(argument) + " is not iterable");
};
var call$b = functionCall;
var anObject$9 = anObject$f;
var getMethod$1 = getMethod$4;
var iteratorClose$2 = function(iterator, kind, value) {
  var innerResult, innerError;
  anObject$9(iterator);
  try {
    innerResult = getMethod$1(iterator, "return");
    if (!innerResult) {
      if (kind === "throw")
        throw value;
      return value;
    }
    innerResult = call$b(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === "throw")
    throw value;
  if (innerError)
    throw innerResult;
  anObject$9(innerResult);
  return value;
};
var bind$3 = functionBindContext;
var call$a = functionCall;
var anObject$8 = anObject$f;
var tryToString$1 = tryToString$5;
var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
var lengthOfArrayLike$7 = lengthOfArrayLike$9;
var isPrototypeOf = objectIsPrototypeOf;
var getIterator$1 = getIterator$2;
var getIteratorMethod$1 = getIteratorMethod$3;
var iteratorClose$1 = iteratorClose$2;
var $TypeError$4 = TypeError;
var Result = function(stopped, result) {
  this.stopped = stopped;
  this.result = result;
};
var ResultPrototype = Result.prototype;
var iterate$6 = function(iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$3(unboundFunction, that);
  var iterator, iterFn, index2, length2, result, next2, step;
  var stop = function(condition) {
    if (iterator)
      iteratorClose$1(iterator, "normal", condition);
    return new Result(true, condition);
  };
  var callFn = function(value) {
    if (AS_ENTRIES) {
      anObject$8(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }
    return INTERRUPTED ? fn(value, stop) : fn(value);
  };
  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod$1(iterable);
    if (!iterFn)
      throw new $TypeError$4(tryToString$1(iterable) + " is not iterable");
    if (isArrayIteratorMethod$1(iterFn)) {
      for (index2 = 0, length2 = lengthOfArrayLike$7(iterable); length2 > index2; index2++) {
        result = callFn(iterable[index2]);
        if (result && isPrototypeOf(ResultPrototype, result))
          return result;
      }
      return new Result(false);
    }
    iterator = getIterator$1(iterable, iterFn);
  }
  next2 = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$a(next2, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose$1(iterator, "throw", error);
    }
    if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result))
      return result;
  }
  return new Result(false);
};
var wellKnownSymbol$c = wellKnownSymbol$m;
var ITERATOR$3 = wellKnownSymbol$c("iterator");
var SAFE_CLOSING = false;
try {
  called = 0;
  iteratorWithReturn = {
    next: function() {
      return { done: !!called++ };
    },
    "return": function() {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR$3] = function() {
    return this;
  };
  Array.from(iteratorWithReturn, function() {
    throw 2;
  });
} catch (error) {
}
var called;
var iteratorWithReturn;
var checkCorrectnessOfIteration$3 = function(exec2, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING)
      return false;
  } catch (error) {
    return false;
  }
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$3] = function() {
      return {
        next: function() {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec2(object);
  } catch (error) {
  }
  return ITERATION_SUPPORT;
};
var NativePromiseConstructor$1 = promiseNativeConstructor;
var checkCorrectnessOfIteration$2 = checkCorrectnessOfIteration$3;
var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;
var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration$2(function(iterable) {
  NativePromiseConstructor$1.all(iterable).then(void 0, function() {
  });
});
var $$o = _export;
var call$9 = functionCall;
var aCallable$3 = aCallable$a;
var newPromiseCapabilityModule$3 = newPromiseCapability$2;
var perform$2 = perform$4;
var iterate$5 = iterate$6;
var PROMISE_STATICS_INCORRECT_ITERATION$2 = promiseStaticsIncorrectIteration;
$$o({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$2 }, {
  all: function all(iterable) {
    var C3 = this;
    var capability = newPromiseCapabilityModule$3.f(C3);
    var resolve2 = capability.resolve;
    var reject2 = capability.reject;
    var result = perform$2(function() {
      var $promiseResolve = aCallable$3(C3.resolve);
      var values2 = [];
      var counter2 = 0;
      var remaining = 1;
      iterate$5(iterable, function(promise2) {
        var index2 = counter2++;
        var alreadyCalled = false;
        remaining++;
        call$9($promiseResolve, C3, promise2).then(function(value) {
          if (alreadyCalled)
            return;
          alreadyCalled = true;
          values2[index2] = value;
          --remaining || resolve2(values2);
        }, reject2);
      });
      --remaining || resolve2(values2);
    });
    if (result.error)
      reject2(result.value);
    return capability.promise;
  }
});
var $$n = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor = promiseNativeConstructor;
var getBuiltIn$1 = getBuiltIn$7;
var isCallable$7 = isCallable$o;
var defineBuiltIn$5 = defineBuiltIn$9;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
$$n({ target: "Promise", proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  "catch": function(onRejected) {
    return this.then(void 0, onRejected);
  }
});
if (isCallable$7(NativePromiseConstructor)) {
  method = getBuiltIn$1("Promise").prototype["catch"];
  if (NativePromisePrototype["catch"] !== method) {
    defineBuiltIn$5(NativePromisePrototype, "catch", method, { unsafe: true });
  }
}
var method;
var $$m = _export;
var call$8 = functionCall;
var aCallable$2 = aCallable$a;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$4;
var iterate$4 = iterate$6;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;
$$m({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
  race: function race(iterable) {
    var C3 = this;
    var capability = newPromiseCapabilityModule$2.f(C3);
    var reject2 = capability.reject;
    var result = perform$1(function() {
      var $promiseResolve = aCallable$2(C3.resolve);
      iterate$4(iterable, function(promise2) {
        call$8($promiseResolve, C3, promise2).then(capability.resolve, reject2);
      });
    });
    if (result.error)
      reject2(result.value);
    return capability.promise;
  }
});
var $$l = _export;
var call$7 = functionCall;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;
$$l({ target: "Promise", stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule$1.f(this);
    call$7(capability.reject, void 0, r);
    return capability.promise;
  }
});
var anObject$7 = anObject$f;
var isObject$c = isObject$j;
var newPromiseCapability = newPromiseCapability$2;
var promiseResolve$1 = function(C3, x3) {
  anObject$7(C3);
  if (isObject$c(x3) && x3.constructor === C3)
    return x3;
  var promiseCapability = newPromiseCapability.f(C3);
  var resolve2 = promiseCapability.resolve;
  resolve2(x3);
  return promiseCapability.promise;
};
var $$k = _export;
var getBuiltIn = getBuiltIn$7;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve = promiseResolve$1;
getBuiltIn("Promise");
$$k({ target: "Promise", stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x3) {
    return promiseResolve(this, x3);
  }
});
var objectDefineProperties = {};
var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;
var objectKeys$3 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};
var DESCRIPTORS$5 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$1 = objectDefineProperty;
var anObject$6 = anObject$f;
var toIndexedObject$5 = toIndexedObject$9;
var objectKeys$2 = objectKeys$3;
objectDefineProperties.f = DESCRIPTORS$5 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$6(O);
  var props = toIndexedObject$5(Properties);
  var keys4 = objectKeys$2(Properties);
  var length2 = keys4.length;
  var index2 = 0;
  var key;
  while (length2 > index2)
    definePropertyModule$1.f(O, key = keys4[index2++], props[key]);
  return O;
};
var anObject$5 = anObject$f;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys$1 = hiddenKeys$5;
var html2 = html$2;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$1 = sharedKey$3;
var GT = ">";
var LT = "<";
var PROTOTYPE = "prototype";
var SCRIPT = "script";
var IE_PROTO$1 = sharedKey$1("IE_PROTO");
var EmptyConstructor = function() {
};
var scriptTag = function(content) {
  return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
};
var NullProtoObjectViaActiveX = function(activeXDocument2) {
  activeXDocument2.write(scriptTag(""));
  activeXDocument2.close();
  var temp = activeXDocument2.parentWindow.Object;
  activeXDocument2 = null;
  return temp;
};
var NullProtoObjectViaIFrame = function() {
  var iframe = documentCreateElement$1("iframe");
  var JS = "java" + SCRIPT + ":";
  var iframeDocument;
  iframe.style.display = "none";
  html2.appendChild(iframe);
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag("document.F=Object"));
  iframeDocument.close();
  return iframeDocument.F;
};
var activeXDocument;
var NullProtoObject = function() {
  try {
    activeXDocument = new ActiveXObject("htmlfile");
  } catch (error) {
  }
  NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
  var length2 = enumBugKeys.length;
  while (length2--)
    delete NullProtoObject[PROTOTYPE][enumBugKeys[length2]];
  return NullProtoObject();
};
hiddenKeys$1[IE_PROTO$1] = true;
var objectCreate$1 = Object.create || function create2(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$5(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    result[IE_PROTO$1] = O;
  } else
    result = NullProtoObject();
  return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
};
var wellKnownSymbol$b = wellKnownSymbol$m;
var create$3 = objectCreate$1;
var defineProperty$5 = objectDefineProperty.f;
var UNSCOPABLES = wellKnownSymbol$b("unscopables");
var ArrayPrototype = Array.prototype;
if (ArrayPrototype[UNSCOPABLES] === void 0) {
  defineProperty$5(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create$3(null)
  });
}
var addToUnscopables$3 = function(key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};
var fails$j = fails$u;
var correctPrototypeGetter = !fails$j(function() {
  function F() {
  }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});
var hasOwn$2 = hasOwnProperty_1;
var isCallable$6 = isCallable$o;
var toObject$8 = toObject$a;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
var IE_PROTO = sharedKey("IE_PROTO");
var $Object = Object;
var ObjectPrototype = $Object.prototype;
var objectGetPrototypeOf$1 = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
  var object = toObject$8(O);
  if (hasOwn$2(object, IE_PROTO))
    return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$6(constructor) && object instanceof constructor) {
    return constructor.prototype;
  }
  return object instanceof $Object ? ObjectPrototype : null;
};
var fails$i = fails$u;
var isCallable$5 = isCallable$o;
var isObject$b = isObject$j;
var getPrototypeOf$1 = objectGetPrototypeOf$1;
var defineBuiltIn$4 = defineBuiltIn$9;
var wellKnownSymbol$a = wellKnownSymbol$m;
var ITERATOR$2 = wellKnownSymbol$a("iterator");
var BUGGY_SAFARI_ITERATORS$1 = false;
var IteratorPrototype$2;
var PrototypeOfArrayIteratorPrototype;
var arrayIterator;
if ([].keys) {
  arrayIterator = [].keys();
  if (!("next" in arrayIterator))
    BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
      IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}
var NEW_ITERATOR_PROTOTYPE = !isObject$b(IteratorPrototype$2) || fails$i(function() {
  var test2 = {};
  return IteratorPrototype$2[ITERATOR$2].call(test2) !== test2;
});
if (NEW_ITERATOR_PROTOTYPE)
  IteratorPrototype$2 = {};
if (!isCallable$5(IteratorPrototype$2[ITERATOR$2])) {
  defineBuiltIn$4(IteratorPrototype$2, ITERATOR$2, function() {
    return this;
  });
}
var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};
var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$2 = objectCreate$1;
var createPropertyDescriptor$1 = createPropertyDescriptor$4;
var setToStringTag$3 = setToStringTag$5;
var Iterators$2 = iterators;
var returnThis$1 = function() {
  return this;
};
var iteratorCreateConstructor = function(IteratorConstructor, NAME2, next2, ENUMERABLE_NEXT) {
  var TO_STRING_TAG2 = NAME2 + " Iterator";
  IteratorConstructor.prototype = create$2(IteratorPrototype$1, { next: createPropertyDescriptor$1(+!ENUMERABLE_NEXT, next2) });
  setToStringTag$3(IteratorConstructor, TO_STRING_TAG2, false);
  Iterators$2[TO_STRING_TAG2] = returnThis$1;
  return IteratorConstructor;
};
var $$j = _export;
var call$6 = functionCall;
var FunctionName = functionName;
var isCallable$4 = isCallable$o;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf$1;
var setPrototypeOf$1 = objectSetPrototypeOf;
var setToStringTag$2 = setToStringTag$5;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$6;
var defineBuiltIn$3 = defineBuiltIn$9;
var wellKnownSymbol$9 = wellKnownSymbol$m;
var Iterators$1 = iterators;
var IteratorsCore = iteratorsCore;
var PROPER_FUNCTION_NAME$1 = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$1 = wellKnownSymbol$9("iterator");
var KEYS = "keys";
var VALUES = "values";
var ENTRIES = "entries";
var returnThis = function() {
  return this;
};
var iteratorDefine = function(Iterable, NAME2, IteratorConstructor, next2, DEFAULT, IS_SET, FORCED2) {
  createIteratorConstructor(IteratorConstructor, NAME2, next2);
  var getIterationMethod = function(KIND) {
    if (KIND === DEFAULT && defaultIterator)
      return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype)
      return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS:
        return function keys4() {
          return new IteratorConstructor(this, KIND);
        };
      case VALUES:
        return function values2() {
          return new IteratorConstructor(this, KIND);
        };
      case ENTRIES:
        return function entries2() {
          return new IteratorConstructor(this, KIND);
        };
    }
    return function() {
      return new IteratorConstructor(this);
    };
  };
  var TO_STRING_TAG2 = NAME2 + " Iterator";
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$1] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME2 === "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf$1) {
          setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$4(CurrentIteratorPrototype[ITERATOR$1])) {
          defineBuiltIn$3(CurrentIteratorPrototype, ITERATOR$1, returnThis);
        }
      }
      setToStringTag$2(CurrentIteratorPrototype, TO_STRING_TAG2, true);
    }
  }
  if (PROPER_FUNCTION_NAME$1 && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$3(IterablePrototype, "name", VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values2() {
        return call$6(nativeIterator, this);
      };
    }
  }
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED2)
      for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          defineBuiltIn$3(IterablePrototype, KEY, methods[KEY]);
        }
      }
    else
      $$j({ target: NAME2, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }
  if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
    defineBuiltIn$3(IterablePrototype, ITERATOR$1, defaultIterator, { name: DEFAULT });
  }
  Iterators$1[NAME2] = defaultIterator;
  return methods;
};
var createIterResultObject$3 = function(value, done) {
  return { value, done };
};
var toIndexedObject$4 = toIndexedObject$9;
var addToUnscopables$2 = addToUnscopables$3;
var Iterators = iterators;
var InternalStateModule$3 = internalState;
var defineProperty$4 = objectDefineProperty.f;
var defineIterator$2 = iteratorDefine;
var createIterResultObject$2 = createIterResultObject$3;
var DESCRIPTORS$4 = descriptors;
var ARRAY_ITERATOR = "Array Iterator";
var setInternalState$3 = InternalStateModule$3.set;
var getInternalState$2 = InternalStateModule$3.getterFor(ARRAY_ITERATOR);
var es_array_iterator = defineIterator$2(Array, "Array", function(iterated, kind) {
  setInternalState$3(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject$4(iterated),
    // target
    index: 0,
    // next index
    kind
    // kind
  });
}, function() {
  var state = getInternalState$2(this);
  var target = state.target;
  var index2 = state.index++;
  if (!target || index2 >= target.length) {
    state.target = void 0;
    return createIterResultObject$2(void 0, true);
  }
  switch (state.kind) {
    case "keys":
      return createIterResultObject$2(index2, false);
    case "values":
      return createIterResultObject$2(target[index2], false);
  }
  return createIterResultObject$2([index2, target[index2]], false);
}, "values");
var values = Iterators.Arguments = Iterators.Array;
addToUnscopables$2("keys");
addToUnscopables$2("values");
addToUnscopables$2("entries");
if (DESCRIPTORS$4 && values.name !== "values")
  try {
    defineProperty$4(values, "name", { value: "values" });
  } catch (error) {
  }
var $$i = _export;
var call$5 = functionCall;
var aCallable$1 = aCallable$a;
var newPromiseCapabilityModule = newPromiseCapability$2;
var perform = perform$4;
var iterate$3 = iterate$6;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;
$$i({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  allSettled: function allSettled(iterable) {
    var C3 = this;
    var capability = newPromiseCapabilityModule.f(C3);
    var resolve2 = capability.resolve;
    var reject2 = capability.reject;
    var result = perform(function() {
      var promiseResolve2 = aCallable$1(C3.resolve);
      var values2 = [];
      var counter2 = 0;
      var remaining = 1;
      iterate$3(iterable, function(promise2) {
        var index2 = counter2++;
        var alreadyCalled = false;
        remaining++;
        call$5(promiseResolve2, C3, promise2).then(function(value) {
          if (alreadyCalled)
            return;
          alreadyCalled = true;
          values2[index2] = { status: "fulfilled", value };
          --remaining || resolve2(values2);
        }, function(error) {
          if (alreadyCalled)
            return;
          alreadyCalled = true;
          values2[index2] = { status: "rejected", reason: error };
          --remaining || resolve2(values2);
        });
      });
      --remaining || resolve2(values2);
    });
    if (result.error)
      reject2(result.value);
    return capability.promise;
  }
});
var classof$5 = classof$b;
var $String = String;
var toString$9 = function(argument) {
  if (classof$5(argument) === "Symbol")
    throw new TypeError("Cannot convert a Symbol value to a string");
  return $String(argument);
};
var uncurryThis$g = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString$8 = toString$9;
var requireObjectCoercible$4 = requireObjectCoercible$7;
var charAt$4 = uncurryThis$g("".charAt);
var charCodeAt = uncurryThis$g("".charCodeAt);
var stringSlice$4 = uncurryThis$g("".slice);
var createMethod$3 = function(CONVERT_TO_STRING) {
  return function($this, pos) {
    var S = toString$8(requireObjectCoercible$4($this));
    var position2 = toIntegerOrInfinity$1(pos);
    var size = S.length;
    var first, second2;
    if (position2 < 0 || position2 >= size)
      return CONVERT_TO_STRING ? "" : void 0;
    first = charCodeAt(S, position2);
    return first < 55296 || first > 56319 || position2 + 1 === size || (second2 = charCodeAt(S, position2 + 1)) < 56320 || second2 > 57343 ? CONVERT_TO_STRING ? charAt$4(S, position2) : first : CONVERT_TO_STRING ? stringSlice$4(S, position2, position2 + 2) : (first - 55296 << 10) + (second2 - 56320) + 65536;
  };
};
var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$3(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$3(true)
};
var charAt$3 = stringMultibyte.charAt;
var toString$7 = toString$9;
var InternalStateModule$2 = internalState;
var defineIterator$1 = iteratorDefine;
var createIterResultObject$1 = createIterResultObject$3;
var STRING_ITERATOR = "String Iterator";
var setInternalState$2 = InternalStateModule$2.set;
var getInternalState$1 = InternalStateModule$2.getterFor(STRING_ITERATOR);
defineIterator$1(String, "String", function(iterated) {
  setInternalState$2(this, {
    type: STRING_ITERATOR,
    string: toString$7(iterated),
    index: 0
  });
}, function next() {
  var state = getInternalState$1(this);
  var string = state.string;
  var index2 = state.index;
  var point6;
  if (index2 >= string.length)
    return createIterResultObject$1(void 0, true);
  point6 = charAt$3(string, index2);
  state.index += point6.length;
  return createIterResultObject$1(point6, false);
});
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};
var documentCreateElement = documentCreateElement$2;
var classList2 = documentCreateElement("span").classList;
var DOMTokenListPrototype$2 = classList2 && classList2.constructor && classList2.constructor.prototype;
var domTokenListPrototype = DOMTokenListPrototype$2 === Object.prototype ? void 0 : DOMTokenListPrototype$2;
var global$6 = global$n;
var DOMIterables$1 = domIterables;
var DOMTokenListPrototype$1 = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$6;
var setToStringTag$1 = setToStringTag$5;
var wellKnownSymbol$8 = wellKnownSymbol$m;
var ITERATOR = wellKnownSymbol$8("iterator");
var ArrayValues = ArrayIteratorMethods.values;
var handlePrototype$1 = function(CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    if (CollectionPrototype[ITERATOR] !== ArrayValues)
      try {
        createNonEnumerableProperty$2(CollectionPrototype, ITERATOR, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR] = ArrayValues;
      }
    setToStringTag$1(CollectionPrototype, COLLECTION_NAME, true);
    if (DOMIterables$1[COLLECTION_NAME])
      for (var METHOD_NAME in ArrayIteratorMethods) {
        if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME])
          try {
            createNonEnumerableProperty$2(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
          } catch (error) {
            CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
          }
      }
  }
};
for (COLLECTION_NAME$1 in DOMIterables$1) {
  handlePrototype$1(global$6[COLLECTION_NAME$1] && global$6[COLLECTION_NAME$1].prototype, COLLECTION_NAME$1);
}
var COLLECTION_NAME$1;
handlePrototype$1(DOMTokenListPrototype$1, "DOMTokenList");
var toObject$7 = toObject$a;
var toAbsoluteIndex$2 = toAbsoluteIndex$4;
var lengthOfArrayLike$6 = lengthOfArrayLike$9;
var arrayFill = function fill(value) {
  var O = toObject$7(this);
  var length2 = lengthOfArrayLike$6(O);
  var argumentsLength = arguments.length;
  var index2 = toAbsoluteIndex$2(argumentsLength > 1 ? arguments[1] : void 0, length2);
  var end = argumentsLength > 2 ? arguments[2] : void 0;
  var endPos = end === void 0 ? length2 : toAbsoluteIndex$2(end, length2);
  while (endPos > index2)
    O[index2++] = value;
  return O;
};
var $$h = _export;
var fill2 = arrayFill;
var addToUnscopables$1 = addToUnscopables$3;
$$h({ target: "Array", proto: true }, {
  fill: fill2
});
addToUnscopables$1("fill");
var classof$4 = classofRaw$2;
var isArray$5 = Array.isArray || function isArray(argument) {
  return classof$4(argument) === "Array";
};
var toPropertyKey = toPropertyKey$3;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$4;
var createProperty$4 = function(object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object)
    definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else
    object[propertyKey] = value;
};
var fails$h = fails$u;
var wellKnownSymbol$7 = wellKnownSymbol$m;
var V8_VERSION$1 = engineV8Version;
var SPECIES$3 = wellKnownSymbol$7("species");
var arrayMethodHasSpeciesSupport$4 = function(METHOD_NAME) {
  return V8_VERSION$1 >= 51 || !fails$h(function() {
    var array4 = [];
    var constructor = array4.constructor = {};
    constructor[SPECIES$3] = function() {
      return { foo: 1 };
    };
    return array4[METHOD_NAME](Boolean).foo !== 1;
  });
};
var $$g = _export;
var isArray$4 = isArray$5;
var isConstructor$2 = isConstructor$4;
var isObject$a = isObject$j;
var toAbsoluteIndex$1 = toAbsoluteIndex$4;
var lengthOfArrayLike$5 = lengthOfArrayLike$9;
var toIndexedObject$3 = toIndexedObject$9;
var createProperty$3 = createProperty$4;
var wellKnownSymbol$6 = wellKnownSymbol$m;
var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$4;
var nativeSlice = arraySlice$3;
var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$3("slice");
var SPECIES$2 = wellKnownSymbol$6("species");
var $Array$3 = Array;
var max$2 = Math.max;
$$g({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
  slice: function slice5(start2, end) {
    var O = toIndexedObject$3(this);
    var length2 = lengthOfArrayLike$5(O);
    var k2 = toAbsoluteIndex$1(start2, length2);
    var fin5 = toAbsoluteIndex$1(end === void 0 ? length2 : end, length2);
    var Constructor, result, n;
    if (isArray$4(O)) {
      Constructor = O.constructor;
      if (isConstructor$2(Constructor) && (Constructor === $Array$3 || isArray$4(Constructor.prototype))) {
        Constructor = void 0;
      } else if (isObject$a(Constructor)) {
        Constructor = Constructor[SPECIES$2];
        if (Constructor === null)
          Constructor = void 0;
      }
      if (Constructor === $Array$3 || Constructor === void 0) {
        return nativeSlice(O, k2, fin5);
      }
    }
    result = new (Constructor === void 0 ? $Array$3 : Constructor)(max$2(fin5 - k2, 0));
    for (n = 0; k2 < fin5; k2++, n++)
      if (k2 in O)
        createProperty$3(result, n, O[k2]);
    result.length = n;
    return result;
  }
});
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject2) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject2(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject2(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
var eventemitter3 = { exports: {} };
(function(module2) {
  var has2 = Object.prototype.hasOwnProperty, prefix = "~";
  function Events() {
  }
  if (Object.create) {
    Events.prototype = /* @__PURE__ */ Object.create(null);
    if (!new Events().__proto__)
      prefix = false;
  }
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }
  function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== "function") {
      throw new TypeError("The listener must be a function");
    }
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt])
      emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn)
      emitter._events[evt].push(listener);
    else
      emitter._events[evt] = [emitter._events[evt], listener];
    return emitter;
  }
  function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0)
      emitter._events = new Events();
    else
      delete emitter._events[evt];
  }
  function EventEmitter2() {
    this._events = new Events();
    this._eventsCount = 0;
  }
  EventEmitter2.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0)
      return names;
    for (name in events = this._events) {
      if (has2.call(events, name))
        names.push(prefix ? name.slice(1) : name);
    }
    if (Object.getOwnPropertySymbols) {
      return names.concat(Object.getOwnPropertySymbols(events));
    }
    return names;
  };
  EventEmitter2.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers)
      return [];
    if (handlers.fn)
      return [handlers.fn];
    for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
      ee[i] = handlers[i].fn;
    }
    return ee;
  };
  EventEmitter2.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners)
      return 0;
    if (listeners.fn)
      return 1;
    return listeners.length;
  };
  EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt])
      return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
      if (listeners.once)
        this.removeListener(event, listeners.fn, void 0, true);
      switch (len) {
        case 1:
          return listeners.fn.call(listeners.context), true;
        case 2:
          return listeners.fn.call(listeners.context, a1), true;
        case 3:
          return listeners.fn.call(listeners.context, a1, a2), true;
        case 4:
          return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }
      for (i = 1, args = new Array(len - 1); i < len; i++) {
        args[i - 1] = arguments[i];
      }
      listeners.fn.apply(listeners.context, args);
    } else {
      var length2 = listeners.length, j;
      for (i = 0; i < length2; i++) {
        if (listeners[i].once)
          this.removeListener(event, listeners[i].fn, void 0, true);
        switch (len) {
          case 1:
            listeners[i].fn.call(listeners[i].context);
            break;
          case 2:
            listeners[i].fn.call(listeners[i].context, a1);
            break;
          case 3:
            listeners[i].fn.call(listeners[i].context, a1, a2);
            break;
          case 4:
            listeners[i].fn.call(listeners[i].context, a1, a2, a3);
            break;
          default:
            if (!args)
              for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }
    return true;
  };
  EventEmitter2.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
  };
  EventEmitter2.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
  };
  EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt])
      return this;
    if (!fn) {
      clearEvent(this, evt);
      return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
      if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
        clearEvent(this, evt);
      }
    } else {
      for (var i = 0, events = [], length2 = listeners.length; i < length2; i++) {
        if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
          events.push(listeners[i]);
        }
      }
      if (events.length)
        this._events[evt] = events.length === 1 ? events[0] : events;
      else
        clearEvent(this, evt);
    }
    return this;
  };
  EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
      evt = prefix ? prefix + event : event;
      if (this._events[evt])
        clearEvent(this, evt);
    } else {
      this._events = new Events();
      this._eventsCount = 0;
    }
    return this;
  };
  EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
  EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
  EventEmitter2.prefixed = prefix;
  EventEmitter2.EventEmitter = EventEmitter2;
  {
    module2.exports = EventEmitter2;
  }
})(eventemitter3);
var eventemitter3Exports = eventemitter3.exports;
var EventEmitter = getDefaultExportFromCjs(eventemitter3Exports);
var isArray$2 = Array.isArray;
var isArray$3 = isArray$2;
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray$3(value) ? value : [value];
}
var isArray$1 = isArray$5;
var isConstructor$1 = isConstructor$4;
var isObject$9 = isObject$j;
var wellKnownSymbol$5 = wellKnownSymbol$m;
var SPECIES$1 = wellKnownSymbol$5("species");
var $Array$2 = Array;
var arraySpeciesConstructor$1 = function(originalArray) {
  var C3;
  if (isArray$1(originalArray)) {
    C3 = originalArray.constructor;
    if (isConstructor$1(C3) && (C3 === $Array$2 || isArray$1(C3.prototype)))
      C3 = void 0;
    else if (isObject$9(C3)) {
      C3 = C3[SPECIES$1];
      if (C3 === null)
        C3 = void 0;
    }
  }
  return C3 === void 0 ? $Array$2 : C3;
};
var arraySpeciesConstructor = arraySpeciesConstructor$1;
var arraySpeciesCreate$2 = function(originalArray, length2) {
  return new (arraySpeciesConstructor(originalArray))(length2 === 0 ? 0 : length2);
};
var bind$2 = functionBindContext;
var uncurryThis$f = functionUncurryThis;
var IndexedObject$2 = indexedObject;
var toObject$6 = toObject$a;
var lengthOfArrayLike$4 = lengthOfArrayLike$9;
var arraySpeciesCreate$1 = arraySpeciesCreate$2;
var push$3 = uncurryThis$f([].push);
var createMethod$2 = function(TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function($this, callbackfn, that, specificCreate) {
    var O = toObject$6($this);
    var self2 = IndexedObject$2(O);
    var length2 = lengthOfArrayLike$4(self2);
    var boundFunction = bind$2(callbackfn, that);
    var index2 = 0;
    var create4 = specificCreate || arraySpeciesCreate$1;
    var target = IS_MAP ? create4($this, length2) : IS_FILTER || IS_FILTER_REJECT ? create4($this, 0) : void 0;
    var value, result;
    for (; length2 > index2; index2++)
      if (NO_HOLES || index2 in self2) {
        value = self2[index2];
        result = boundFunction(value, index2, O);
        if (TYPE) {
          if (IS_MAP)
            target[index2] = result;
          else if (result)
            switch (TYPE) {
              case 3:
                return true;
              case 5:
                return value;
              case 6:
                return index2;
              case 2:
                push$3(target, value);
            }
          else
            switch (TYPE) {
              case 4:
                return false;
              case 7:
                push$3(target, value);
            }
        }
      }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};
var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$2(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$2(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$2(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$2(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$2(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$2(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$2(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod$2(7)
};
var $$f = _export;
var $map = arrayIteration.map;
var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$4;
var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$2("map");
$$f({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
  map: function map4(callbackfn) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var DESCRIPTORS$3 = descriptors;
var uncurryThis$e = functionUncurryThis;
var call$4 = functionCall;
var fails$g = fails$u;
var objectKeys$1 = objectKeys$3;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$5 = toObject$a;
var IndexedObject$1 = indexedObject;
var $assign = Object.assign;
var defineProperty$3 = Object.defineProperty;
var concat$1 = uncurryThis$e([].concat);
var objectAssign = !$assign || fails$g(function() {
  if (DESCRIPTORS$3 && $assign({ b: 1 }, $assign(defineProperty$3({}, "a", {
    enumerable: true,
    get: function() {
      defineProperty$3(this, "b", {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1)
    return true;
  var A5 = {};
  var B3 = {};
  var symbol2 = Symbol("assign detection");
  var alphabet = "abcdefghijklmnopqrst";
  A5[symbol2] = 7;
  alphabet.split("").forEach(function(chr) {
    B3[chr] = chr;
  });
  return $assign({}, A5)[symbol2] !== 7 || objectKeys$1($assign({}, B3)).join("") !== alphabet;
}) ? function assign(target, source) {
  var T = toObject$5(target);
  var argumentsLength = arguments.length;
  var index2 = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable3 = propertyIsEnumerableModule.f;
  while (argumentsLength > index2) {
    var S = IndexedObject$1(arguments[index2++]);
    var keys4 = getOwnPropertySymbols ? concat$1(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
    var length2 = keys4.length;
    var j = 0;
    var key;
    while (length2 > j) {
      key = keys4[j++];
      if (!DESCRIPTORS$3 || call$4(propertyIsEnumerable3, S, key))
        T[key] = S[key];
    }
  }
  return T;
} : $assign;
var $$e = _export;
var assign2 = objectAssign;
$$e({ target: "Object", stat: true, arity: 2, forced: Object.assign !== assign2 }, {
  assign: assign2
});
var internalMetadata = { exports: {} };
var objectGetOwnPropertyNamesExternal = {};
var toAbsoluteIndex = toAbsoluteIndex$4;
var lengthOfArrayLike$3 = lengthOfArrayLike$9;
var createProperty$2 = createProperty$4;
var $Array$1 = Array;
var max$1 = Math.max;
var arraySliceSimple = function(O, start2, end) {
  var length2 = lengthOfArrayLike$3(O);
  var k2 = toAbsoluteIndex(start2, length2);
  var fin5 = toAbsoluteIndex(end === void 0 ? length2 : end, length2);
  var result = $Array$1(max$1(fin5 - k2, 0));
  var n = 0;
  for (; k2 < fin5; k2++, n++)
    createProperty$2(result, n, O[k2]);
  result.length = n;
  return result;
};
var classof$3 = classofRaw$2;
var toIndexedObject$2 = toIndexedObject$9;
var $getOwnPropertyNames = objectGetOwnPropertyNames.f;
var arraySlice$1 = arraySliceSimple;
var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function(it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice$1(windowNames);
  }
};
objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames2(it) {
  return windowNames && classof$3(it) === "Window" ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject$2(it));
};
var fails$f = fails$u;
var arrayBufferNonExtensible = fails$f(function() {
  if (typeof ArrayBuffer == "function") {
    var buffer = new ArrayBuffer(8);
    if (Object.isExtensible(buffer))
      Object.defineProperty(buffer, "a", { value: 8 });
  }
});
var fails$e = fails$u;
var isObject$8 = isObject$j;
var classof$2 = classofRaw$2;
var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES$1 = fails$e(function() {
  $isExtensible(1);
});
var objectIsExtensible = FAILS_ON_PRIMITIVES$1 || ARRAY_BUFFER_NON_EXTENSIBLE ? function isExtensible(it) {
  if (!isObject$8(it))
    return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$2(it) === "ArrayBuffer")
    return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;
var fails$d = fails$u;
var freezing = !fails$d(function() {
  return Object.isExtensible(Object.preventExtensions({}));
});
var $$d = _export;
var uncurryThis$d = functionUncurryThis;
var hiddenKeys = hiddenKeys$5;
var isObject$7 = isObject$j;
var hasOwn$1 = hasOwnProperty_1;
var defineProperty$2 = objectDefineProperty.f;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
var isExtensible2 = objectIsExtensible;
var uid = uid$3;
var FREEZING = freezing;
var REQUIRED = false;
var METADATA = uid("meta");
var id$1 = 0;
var setMetadata = function(it) {
  defineProperty$2(it, METADATA, { value: {
    objectID: "O" + id$1++,
    // object ID
    weakData: {}
    // weak collections IDs
  } });
};
var fastKey$1 = function(it, create4) {
  if (!isObject$7(it))
    return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
  if (!hasOwn$1(it, METADATA)) {
    if (!isExtensible2(it))
      return "F";
    if (!create4)
      return "E";
    setMetadata(it);
  }
  return it[METADATA].objectID;
};
var getWeakData$1 = function(it, create4) {
  if (!hasOwn$1(it, METADATA)) {
    if (!isExtensible2(it))
      return true;
    if (!create4)
      return false;
    setMetadata(it);
  }
  return it[METADATA].weakData;
};
var onFreeze = function(it) {
  if (FREEZING && REQUIRED && isExtensible2(it) && !hasOwn$1(it, METADATA))
    setMetadata(it);
  return it;
};
var enable = function() {
  meta.enable = function() {
  };
  REQUIRED = true;
  var getOwnPropertyNames3 = getOwnPropertyNamesModule.f;
  var splice2 = uncurryThis$d([].splice);
  var test2 = {};
  test2[METADATA] = 1;
  if (getOwnPropertyNames3(test2).length) {
    getOwnPropertyNamesModule.f = function(it) {
      var result = getOwnPropertyNames3(it);
      for (var i = 0, length2 = result.length; i < length2; i++) {
        if (result[i] === METADATA) {
          splice2(result, i, 1);
          break;
        }
      }
      return result;
    };
    $$d({ target: "Object", stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};
var meta = internalMetadata.exports = {
  enable,
  fastKey: fastKey$1,
  getWeakData: getWeakData$1,
  onFreeze
};
hiddenKeys[METADATA] = true;
var internalMetadataExports = internalMetadata.exports;
var isCallable$3 = isCallable$o;
var isObject$6 = isObject$j;
var setPrototypeOf = objectSetPrototypeOf;
var inheritIfRequired$1 = function($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$3(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject$6(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype
  )
    setPrototypeOf($this, NewTargetPrototype);
  return $this;
};
var $$c = _export;
var global$5 = global$n;
var uncurryThis$c = functionUncurryThis;
var isForced = isForced_1;
var defineBuiltIn$2 = defineBuiltIn$9;
var InternalMetadataModule = internalMetadataExports;
var iterate$2 = iterate$6;
var anInstance$2 = anInstance$4;
var isCallable$2 = isCallable$o;
var isNullOrUndefined$3 = isNullOrUndefined$8;
var isObject$5 = isObject$j;
var fails$c = fails$u;
var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$3;
var setToStringTag = setToStringTag$5;
var inheritIfRequired = inheritIfRequired$1;
var collection$3 = function(CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
  var ADDER = IS_MAP ? "set" : "add";
  var NativeConstructor = global$5[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};
  var fixMethod = function(KEY) {
    var uncurriedNativeMethod = uncurryThis$c(NativePrototype[KEY]);
    defineBuiltIn$2(
      NativePrototype,
      KEY,
      KEY === "add" ? function add2(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY === "delete" ? function(key) {
        return IS_WEAK && !isObject$5(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === "get" ? function get4(key) {
        return IS_WEAK && !isObject$5(key) ? void 0 : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === "has" ? function has2(key) {
        return IS_WEAK && !isObject$5(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set4(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };
  var REPLACE2 = isForced(
    CONSTRUCTOR_NAME,
    !isCallable$2(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$c(function() {
      new NativeConstructor().entries().next();
    }))
  );
  if (REPLACE2) {
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
    var THROWS_ON_PRIMITIVES = fails$c(function() {
      instance.has(1);
    });
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration$1(function(iterable) {
      new NativeConstructor(iterable);
    });
    var BUGGY_ZERO = !IS_WEAK && fails$c(function() {
      var $instance = new NativeConstructor();
      var index2 = 5;
      while (index2--)
        $instance[ADDER](index2, index2);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function(dummy, iterable) {
        anInstance$2(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (!isNullOrUndefined$3(iterable))
          iterate$2(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod("delete");
      fixMethod("has");
      IS_MAP && fixMethod("get");
    }
    if (BUGGY_ZERO || HASNT_CHAINING)
      fixMethod(ADDER);
    if (IS_WEAK && NativePrototype.clear)
      delete NativePrototype.clear;
  }
  exported[CONSTRUCTOR_NAME] = Constructor;
  $$c({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported);
  setToStringTag(Constructor, CONSTRUCTOR_NAME);
  if (!IS_WEAK)
    common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
  return Constructor;
};
var defineBuiltIn$1 = defineBuiltIn$9;
var defineBuiltIns$2 = function(target, src, options) {
  for (var key in src)
    defineBuiltIn$1(target, key, src[key], options);
  return target;
};
var uncurryThis$b = functionUncurryThis;
var defineBuiltIns$1 = defineBuiltIns$2;
var getWeakData = internalMetadataExports.getWeakData;
var anInstance$1 = anInstance$4;
var anObject$4 = anObject$f;
var isNullOrUndefined$2 = isNullOrUndefined$8;
var isObject$4 = isObject$j;
var iterate$1 = iterate$6;
var ArrayIterationModule = arrayIteration;
var hasOwn2 = hasOwnProperty_1;
var InternalStateModule$1 = internalState;
var setInternalState$1 = InternalStateModule$1.set;
var internalStateGetterFor$1 = InternalStateModule$1.getterFor;
var find2 = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var splice$1 = uncurryThis$b([].splice);
var id2 = 0;
var uncaughtFrozenStore = function(state) {
  return state.frozen || (state.frozen = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function() {
  this.entries = [];
};
var findUncaughtFrozen = function(store, key) {
  return find2(store.entries, function(it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function(key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry)
      return entry[1];
  },
  has: function(key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function(key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry)
      entry[1] = value;
    else
      this.entries.push([key, value]);
  },
  "delete": function(key) {
    var index2 = findIndex(this.entries, function(it) {
      return it[0] === key;
    });
    if (~index2)
      splice$1(this.entries, index2, 1);
    return !!~index2;
  }
};
var collectionWeak$1 = {
  getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function(that, iterable) {
      anInstance$1(that, Prototype);
      setInternalState$1(that, {
        type: CONSTRUCTOR_NAME,
        id: id2++,
        frozen: void 0
      });
      if (!isNullOrUndefined$2(iterable))
        iterate$1(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
    });
    var Prototype = Constructor.prototype;
    var getInternalState2 = internalStateGetterFor$1(CONSTRUCTOR_NAME);
    var define = function(that, key, value) {
      var state = getInternalState2(that);
      var data2 = getWeakData(anObject$4(key), true);
      if (data2 === true)
        uncaughtFrozenStore(state).set(key, value);
      else
        data2[state.id] = value;
      return that;
    };
    defineBuiltIns$1(Prototype, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      "delete": function(key) {
        var state = getInternalState2(this);
        if (!isObject$4(key))
          return false;
        var data2 = getWeakData(key);
        if (data2 === true)
          return uncaughtFrozenStore(state)["delete"](key);
        return data2 && hasOwn2(data2, state.id) && delete data2[state.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function has2(key) {
        var state = getInternalState2(this);
        if (!isObject$4(key))
          return false;
        var data2 = getWeakData(key);
        if (data2 === true)
          return uncaughtFrozenStore(state).has(key);
        return data2 && hasOwn2(data2, state.id);
      }
    });
    defineBuiltIns$1(Prototype, IS_MAP ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function get4(key) {
        var state = getInternalState2(this);
        if (isObject$4(key)) {
          var data2 = getWeakData(key);
          if (data2 === true)
            return uncaughtFrozenStore(state).get(key);
          return data2 ? data2[state.id] : void 0;
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function set4(key, value) {
        return define(this, key, value);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function add2(value) {
        return define(this, value, true);
      }
    });
    return Constructor;
  }
};
var collection$2 = collection$3;
var collectionWeak = collectionWeak$1;
collection$2("WeakSet", function(init2) {
  return function WeakSet2() {
    return init2(this, arguments.length ? arguments[0] : void 0);
  };
}, collectionWeak);
var ScrollDirection;
(function(ScrollDirection2) {
  ScrollDirection2[ScrollDirection2["SCROLL_NONE"] = 0] = "SCROLL_NONE";
  ScrollDirection2[ScrollDirection2["SCROLL_BACKWARD"] = 1] = "SCROLL_BACKWARD";
  ScrollDirection2[ScrollDirection2["SCROLL_FORWARD"] = 2] = "SCROLL_FORWARD";
})(ScrollDirection || (ScrollDirection = {}));
var Position;
(function(Position2) {
  Position2[Position2["TOP"] = 0] = "TOP";
  Position2[Position2["RIGHT"] = 1] = "RIGHT";
  Position2[Position2["BOTTOM"] = 2] = "BOTTOM";
  Position2[Position2["LEFT"] = 3] = "LEFT";
})(Position || (Position = {}));
var OPTIONS_DEFAULT_DOMAIN_TYPE = "hour";
var OPTIONS_DEFAULT_SUBDOMAIN_TYPE = "minute";
var OPTIONS_DEFAULT_SUBDOMAIN_WIDTH = 10;
var OPTIONS_DEFAULT_SUBDOMAIN_HEIGHT = 10;
var OPTIONS_DEFAULT_SUBDOMAIN_GUTTER = 2;
var OPTIONS_DEFAULT_SUBDOMAIN_RADIUS = 0;
var OPTIONS_DEFAULT_ANIMATION_DURATION = 200;
var OPTIONS_DEFAULT_RANGE = 12;
var OPTIONS_DEFAULT_ITEM_SELECTOR = "#cal-heatmap";
var OPTIONS_DEFAULT_THEME = "light";
var OPTIONS_DEFAULT_LOCALE = "en";
var SCALE_BASE_OPACITY_COLOR = "red";
var SCALE_BASE_COLOR_SCHEME = "YlOrBr";
var SCALE_BASE_COLOR_TYPE = "quantize";
var SCALE_BASE_COLOR_DOMAIN = [0, 100];
var _Navigator_instances;
var _Navigator_isDomainBoundaryReached;
var _Navigator_setDomainsBoundaryReached;
var Navigator = function() {
  function Navigator2(calendar2) {
    _classCallCheck(this, Navigator2);
    _Navigator_instances.add(this);
    this.calendar = calendar2;
    this.maxDomainReached = false;
    this.minDomainReached = false;
  }
  _createClass(Navigator2, [{
    key: "loadNewDomains",
    value: function loadNewDomains(newDomainCollection) {
      var _this = this;
      var direction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ScrollDirection.SCROLL_NONE;
      var options = this.calendar.options.options;
      var templatesClt = this.calendar.templateCollection;
      var minDate = options.date.min ? templatesClt.get(options.domain.type).extractUnit(+options.date.min) : void 0;
      var maxDate = options.date.max ? templatesClt.get(options.domain.type).extractUnit(+options.date.max) : void 0;
      var domainCollection = this.calendar.domainCollection;
      if (__classPrivateFieldGet(this, _Navigator_instances, "m", _Navigator_isDomainBoundaryReached).call(this, newDomainCollection, minDate, maxDate, direction)) {
        return ScrollDirection.SCROLL_NONE;
      }
      if (direction !== ScrollDirection.SCROLL_NONE) {
        newDomainCollection.clamp(minDate, maxDate).slice(options.range, direction === ScrollDirection.SCROLL_FORWARD);
      }
      domainCollection.merge(newDomainCollection, options.range, function(domainKey, index2) {
        var subDomainEndDate = null;
        if (newDomainCollection.at(index2 + 1)) {
          subDomainEndDate = newDomainCollection.at(index2 + 1);
        } else {
          subDomainEndDate = _this.calendar.dateHelper.intervals(options.domain.type, domainKey, 2).pop();
        }
        return templatesClt.get(options.subDomain.type).mapping(domainKey, subDomainEndDate).map(function(d) {
          return Object.assign(Object.assign({}, d), {
            v: options.data.defaultValue
          });
        });
      });
      __classPrivateFieldGet(this, _Navigator_instances, "m", _Navigator_setDomainsBoundaryReached).call(this, domainCollection.min, domainCollection.max, minDate, maxDate);
      if (direction === ScrollDirection.SCROLL_BACKWARD) {
        this.calendar.eventEmitter.emit("domainsLoaded", [domainCollection.min]);
      } else if (direction === ScrollDirection.SCROLL_FORWARD) {
        this.calendar.eventEmitter.emit("domainsLoaded", [domainCollection.max]);
      }
      return direction;
    }
  }, {
    key: "jumpTo",
    value: function jumpTo(date2, reset) {
      var _this$calendar = this.calendar, domainCollection = _this$calendar.domainCollection, options = _this$calendar.options;
      var minDate = new Date(domainCollection.min);
      var maxDate = new Date(domainCollection.max);
      if (date2 < minDate) {
        return this.loadNewDomains(this.calendar.createDomainCollection(date2, minDate, false), ScrollDirection.SCROLL_BACKWARD);
      }
      if (reset) {
        return this.loadNewDomains(this.calendar.createDomainCollection(date2, options.options.range), minDate < date2 ? ScrollDirection.SCROLL_FORWARD : ScrollDirection.SCROLL_BACKWARD);
      }
      if (date2 > maxDate) {
        return this.loadNewDomains(this.calendar.createDomainCollection(maxDate, date2, false), ScrollDirection.SCROLL_FORWARD);
      }
      return ScrollDirection.SCROLL_NONE;
    }
  }]);
  return Navigator2;
}();
_Navigator_instances = /* @__PURE__ */ new WeakSet(), _Navigator_isDomainBoundaryReached = function _Navigator_isDomainBoundaryReached2(newDomainCollection, minDate, maxDate, direction) {
  if (maxDate && newDomainCollection.max >= maxDate && this.maxDomainReached && direction === ScrollDirection.SCROLL_FORWARD) {
    return true;
  }
  if (minDate && newDomainCollection.min <= minDate && this.minDomainReached && direction === ScrollDirection.SCROLL_BACKWARD) {
    return true;
  }
  return false;
}, _Navigator_setDomainsBoundaryReached = function _Navigator_setDomainsBoundaryReached2(lowerBound, upperBound, min5, max6) {
  if (min5) {
    var reached = lowerBound <= min5;
    this.calendar.eventEmitter.emit(reached ? "minDateReached" : "minDateNotReached");
    this.minDomainReached = reached;
  }
  if (max6) {
    var _reached = upperBound >= max6;
    this.calendar.eventEmitter.emit(_reached ? "maxDateReached" : "maxDateNotReached");
    this.maxDomainReached = _reached;
  }
};
var $TypeError$3 = TypeError;
var MAX_SAFE_INTEGER$2 = 9007199254740991;
var doesNotExceedSafeInteger$1 = function(it) {
  if (it > MAX_SAFE_INTEGER$2)
    throw $TypeError$3("Maximum allowed index exceeded");
  return it;
};
var $$b = _export;
var fails$b = fails$u;
var isArray2 = isArray$5;
var isObject$3 = isObject$j;
var toObject$4 = toObject$a;
var lengthOfArrayLike$2 = lengthOfArrayLike$9;
var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
var createProperty$1 = createProperty$4;
var arraySpeciesCreate = arraySpeciesCreate$2;
var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$4;
var wellKnownSymbol$4 = wellKnownSymbol$m;
var V8_VERSION = engineV8Version;
var IS_CONCAT_SPREADABLE = wellKnownSymbol$4("isConcatSpreadable");
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$b(function() {
  var array4 = [];
  array4[IS_CONCAT_SPREADABLE] = false;
  return array4.concat()[0] !== array4;
});
var isConcatSpreadable = function(O) {
  if (!isObject$3(O))
    return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== void 0 ? !!spreadable : isArray2(O);
};
var FORCED$2 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$1("concat");
$$b({ target: "Array", proto: true, arity: 1, forced: FORCED$2 }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject$4(this);
    var A5 = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k2, length2, len, E2;
    for (i = -1, length2 = arguments.length; i < length2; i++) {
      E2 = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E2)) {
        len = lengthOfArrayLike$2(E2);
        doesNotExceedSafeInteger(n + len);
        for (k2 = 0; k2 < len; k2++, n++)
          if (k2 in E2)
            createProperty$1(A5, n, E2[k2]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty$1(A5, n++, E2);
      }
    }
    A5.length = n;
    return A5;
  }
});
var fails$a = fails$u;
var arrayMethodIsStrict$3 = function(METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$a(function() {
    method.call(null, argument || function() {
      return 1;
    }, 1);
  });
};
var $$a = _export;
var uncurryThis$a = functionUncurryThis;
var IndexedObject = indexedObject;
var toIndexedObject$1 = toIndexedObject$9;
var arrayMethodIsStrict$2 = arrayMethodIsStrict$3;
var nativeJoin = uncurryThis$a([].join);
var ES3_STRINGS = IndexedObject !== Object;
var FORCED$1 = ES3_STRINGS || !arrayMethodIsStrict$2("join", ",");
$$a({ target: "Array", proto: true, forced: FORCED$1 }, {
  join: function join2(separator) {
    return nativeJoin(toIndexedObject$1(this), separator === void 0 ? "," : separator);
  }
});
var create$1 = objectCreate$1;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$3;
var defineBuiltIns = defineBuiltIns$2;
var bind$1 = functionBindContext;
var anInstance = anInstance$4;
var isNullOrUndefined$1 = isNullOrUndefined$8;
var iterate = iterate$6;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$3;
var setSpecies = setSpecies$2;
var DESCRIPTORS$2 = descriptors;
var fastKey = internalMetadataExports.fastKey;
var InternalStateModule = internalState;
var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var collectionStrong$2 = {
  getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function(that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create$1(null),
        first: void 0,
        last: void 0,
        size: 0
      });
      if (!DESCRIPTORS$2)
        that.size = 0;
      if (!isNullOrUndefined$1(iterable))
        iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
    });
    var Prototype = Constructor.prototype;
    var getInternalState2 = internalStateGetterFor(CONSTRUCTOR_NAME);
    var define = function(that, key, value) {
      var state = getInternalState2(that);
      var entry = getEntry(that, key);
      var previous, index2;
      if (entry) {
        entry.value = value;
      } else {
        state.last = entry = {
          index: index2 = fastKey(key, true),
          key,
          value,
          previous: previous = state.last,
          next: void 0,
          removed: false
        };
        if (!state.first)
          state.first = entry;
        if (previous)
          previous.next = entry;
        if (DESCRIPTORS$2)
          state.size++;
        else
          that.size++;
        if (index2 !== "F")
          state.index[index2] = entry;
      }
      return that;
    };
    var getEntry = function(that, key) {
      var state = getInternalState2(that);
      var index2 = fastKey(key);
      var entry;
      if (index2 !== "F")
        return state.index[index2];
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key === key)
          return entry;
      }
    };
    defineBuiltIns(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear2() {
        var that = this;
        var state = getInternalState2(that);
        var data2 = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous)
            entry.previous = entry.previous.next = void 0;
          delete data2[entry.index];
          entry = entry.next;
        }
        state.first = state.last = void 0;
        if (DESCRIPTORS$2)
          state.size = 0;
        else
          that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      "delete": function(key) {
        var that = this;
        var state = getInternalState2(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next2 = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev)
            prev.next = next2;
          if (next2)
            next2.previous = prev;
          if (state.first === entry)
            state.first = next2;
          if (state.last === entry)
            state.last = prev;
          if (DESCRIPTORS$2)
            state.size--;
          else
            that.size--;
        }
        return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach3(callbackfn) {
        var state = getInternalState2(this);
        var boundFunction = bind$1(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          while (entry && entry.removed)
            entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has2(key) {
        return !!getEntry(this, key);
      }
    });
    defineBuiltIns(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get4(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set4(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add2(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS$2)
      defineBuiltInAccessor$1(Prototype, "size", {
        configurable: true,
        get: function() {
          return getInternalState2(this).size;
        }
      });
    return Constructor;
  },
  setStrong: function(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    defineIterator(Constructor, CONSTRUCTOR_NAME, function(iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind,
        last: void 0
      });
    }, function() {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      while (entry && entry.removed)
        entry = entry.previous;
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        state.target = void 0;
        return createIterResultObject(void 0, true);
      }
      if (kind === "keys")
        return createIterResultObject(entry.key, false);
      if (kind === "values")
        return createIterResultObject(entry.value, false);
      return createIterResultObject([entry.key, entry.value], false);
    }, IS_MAP ? "entries" : "values", !IS_MAP, true);
    setSpecies(CONSTRUCTOR_NAME);
  }
};
var collection$1 = collection$3;
var collectionStrong$1 = collectionStrong$2;
collection$1("Map", function(init2) {
  return function Map2() {
    return init2(this, arguments.length ? arguments[0] : void 0);
  };
}, collectionStrong$1);
var tryToString = tryToString$5;
var $TypeError$2 = TypeError;
var deletePropertyOrThrow$1 = function(O, P) {
  if (!delete O[P])
    throw new $TypeError$2("Cannot delete property " + tryToString(P) + " of " + tryToString(O));
};
var arraySlice = arraySliceSimple;
var floor$1 = Math.floor;
var mergeSort = function(array4, comparefn) {
  var length2 = array4.length;
  var middle = floor$1(length2 / 2);
  return length2 < 8 ? insertionSort(array4, comparefn) : merge2(
    array4,
    mergeSort(arraySlice(array4, 0, middle), comparefn),
    mergeSort(arraySlice(array4, middle), comparefn),
    comparefn
  );
};
var insertionSort = function(array4, comparefn) {
  var length2 = array4.length;
  var i = 1;
  var element, j;
  while (i < length2) {
    j = i;
    element = array4[i];
    while (j && comparefn(array4[j - 1], element) > 0) {
      array4[j] = array4[--j];
    }
    if (j !== i++)
      array4[j] = element;
  }
  return array4;
};
var merge2 = function(array4, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;
  while (lindex < llength || rindex < rlength) {
    array4[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
  }
  return array4;
};
var arraySort = mergeSort;
var userAgent$1 = engineUserAgent;
var firefox = userAgent$1.match(/firefox\/(\d+)/i);
var engineFfVersion = !!firefox && +firefox[1];
var UA = engineUserAgent;
var engineIsIeOrEdge = /MSIE|Trident/.test(UA);
var userAgent = engineUserAgent;
var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
var engineWebkitVersion = !!webkit && +webkit[1];
var $$9 = _export;
var uncurryThis$9 = functionUncurryThis;
var aCallable = aCallable$a;
var toObject$3 = toObject$a;
var lengthOfArrayLike$1 = lengthOfArrayLike$9;
var deletePropertyOrThrow = deletePropertyOrThrow$1;
var toString$6 = toString$9;
var fails$9 = fails$u;
var internalSort = arraySort;
var arrayMethodIsStrict$1 = arrayMethodIsStrict$3;
var FF = engineFfVersion;
var IE_OR_EDGE = engineIsIeOrEdge;
var V8 = engineV8Version;
var WEBKIT = engineWebkitVersion;
var test = [];
var nativeSort = uncurryThis$9(test.sort);
var push$2 = uncurryThis$9(test.push);
var FAILS_ON_UNDEFINED = fails$9(function() {
  test.sort(void 0);
});
var FAILS_ON_NULL = fails$9(function() {
  test.sort(null);
});
var STRICT_METHOD$1 = arrayMethodIsStrict$1("sort");
var STABLE_SORT = !fails$9(function() {
  if (V8)
    return V8 < 70;
  if (FF && FF > 3)
    return;
  if (IE_OR_EDGE)
    return true;
  if (WEBKIT)
    return WEBKIT < 603;
  var result = "";
  var code, chr, value, index2;
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);
    switch (code) {
      case 66:
      case 69:
      case 70:
      case 72:
        value = 3;
        break;
      case 68:
      case 71:
        value = 4;
        break;
      default:
        value = 2;
    }
    for (index2 = 0; index2 < 47; index2++) {
      test.push({ k: chr + index2, v: value });
    }
  }
  test.sort(function(a2, b) {
    return b.v - a2.v;
  });
  for (index2 = 0; index2 < test.length; index2++) {
    chr = test[index2].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr)
      result += chr;
  }
  return result !== "DGBEFHACIJK";
});
var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$1 || !STABLE_SORT;
var getSortCompare = function(comparefn) {
  return function(x3, y3) {
    if (y3 === void 0)
      return -1;
    if (x3 === void 0)
      return 1;
    if (comparefn !== void 0)
      return +comparefn(x3, y3) || 0;
    return toString$6(x3) > toString$6(y3) ? 1 : -1;
  };
};
$$9({ target: "Array", proto: true, forced: FORCED }, {
  sort: function sort2(comparefn) {
    if (comparefn !== void 0)
      aCallable(comparefn);
    var array4 = toObject$3(this);
    if (STABLE_SORT)
      return comparefn === void 0 ? nativeSort(array4) : nativeSort(array4, comparefn);
    var items = [];
    var arrayLength = lengthOfArrayLike$1(array4);
    var itemsLength, index2;
    for (index2 = 0; index2 < arrayLength; index2++) {
      if (index2 in array4)
        push$2(items, array4[index2]);
    }
    internalSort(items, getSortCompare(comparefn));
    itemsLength = lengthOfArrayLike$1(items);
    index2 = 0;
    while (index2 < itemsLength)
      array4[index2] = items[index2++];
    while (index2 < arrayLength)
      deletePropertyOrThrow(array4, index2++);
    return array4;
  }
});
var $forEach = arrayIteration.forEach;
var arrayMethodIsStrict = arrayMethodIsStrict$3;
var STRICT_METHOD = arrayMethodIsStrict("forEach");
var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
} : [].forEach;
var global$4 = global$n;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var forEach2 = arrayForEach;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$6;
var handlePrototype = function(CollectionPrototype) {
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach2)
    try {
      createNonEnumerableProperty$1(CollectionPrototype, "forEach", forEach2);
    } catch (error) {
      CollectionPrototype.forEach = forEach2;
    }
};
for (COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global$4[COLLECTION_NAME] && global$4[COLLECTION_NAME].prototype);
  }
}
var COLLECTION_NAME;
handlePrototype(DOMTokenListPrototype);
function isVertical(position2) {
  return position2 === "top" || position2 === "bottom";
}
function horizontalPadding(padding) {
  return padding[Position.LEFT] + padding[Position.RIGHT];
}
function verticalPadding(padding) {
  return padding[Position.TOP] + padding[Position.BOTTOM];
}
var _DomainCoordinates_instances;
var _DomainCoordinates_getWidth;
var _DomainCoordinates_getHeight;
var DomainCoordinates = function() {
  function DomainCoordinates2(calendar2, domainPainter) {
    _classCallCheck(this, DomainCoordinates2);
    _DomainCoordinates_instances.add(this);
    this.calendar = calendar2;
    this.domainPainter = domainPainter;
    this.collection = /* @__PURE__ */ new Map();
    this.scrollDirection = ScrollDirection.SCROLL_FORWARD;
  }
  _createClass(DomainCoordinates2, [{
    key: "get",
    value: function get4(domainKey) {
      return this.collection.get(domainKey);
    }
  }, {
    key: "update",
    value: function update(collection2, scrollDirection) {
      var _this = this;
      var _this$calendar$option = this.calendar.options.options, verticalOrientation = _this$calendar$option.verticalOrientation, domain = _this$calendar$option.domain;
      this.scrollDirection = scrollDirection;
      var dimensions = {
        width: 0,
        height: 0
      };
      var exitingTotal = 0;
      var scrollFactor = scrollDirection === ScrollDirection.SCROLL_FORWARD ? -1 : 1;
      var keys4 = collection2.keys;
      if (this.calendar.options.options.domain.sort === "desc") {
        keys4.reverse();
        scrollFactor *= -1;
      }
      collection2.yankedDomains.forEach(function(domainKey) {
        exitingTotal += _this.collection.get(domainKey)[verticalOrientation ? "height" : "width"];
      });
      collection2.yankedDomains.forEach(function(domainKey) {
        var coor = _this.collection.get(domainKey);
        _this.collection.set(domainKey, Object.assign(Object.assign({}, coor), {
          x: verticalOrientation ? coor.x : coor.x + exitingTotal * scrollFactor,
          y: verticalOrientation ? coor.y + exitingTotal * scrollFactor : coor.y
        }));
      });
      keys4.forEach(function(domainKey) {
        var w = __classPrivateFieldGet(_this, _DomainCoordinates_instances, "m", _DomainCoordinates_getWidth).call(_this, domainKey);
        var h = __classPrivateFieldGet(_this, _DomainCoordinates_instances, "m", _DomainCoordinates_getHeight).call(_this, domainKey);
        if (verticalOrientation) {
          dimensions.height += h;
          dimensions.width = Math.max(w, dimensions.width);
        } else {
          dimensions.width += w;
          dimensions.height = Math.max(h, dimensions.height);
        }
        var x3 = dimensions.width - w;
        var y3 = dimensions.height - h;
        _this.collection.set(domainKey, Object.assign(Object.assign({}, _this.collection.get(domainKey)), {
          x: verticalOrientation ? 0 : x3,
          y: verticalOrientation ? y3 : 0,
          pre_x: verticalOrientation ? x3 : x3 - exitingTotal * scrollFactor,
          pre_y: verticalOrientation ? y3 - exitingTotal * scrollFactor : y3,
          width: w,
          height: h,
          inner_width: w - (verticalOrientation ? 0 : domain.gutter),
          inner_height: h - (!verticalOrientation ? 0 : domain.gutter)
        }));
      });
      return dimensions;
    }
  }]);
  return DomainCoordinates2;
}();
_DomainCoordinates_instances = /* @__PURE__ */ new WeakSet(), _DomainCoordinates_getWidth = function _DomainCoordinates_getWidth2(d) {
  var _this$calendar$option2 = this.calendar.options.options, domain = _this$calendar$option2.domain, subDomain = _this$calendar$option2.subDomain, x3 = _this$calendar$option2.x, verticalOrientation = _this$calendar$option2.verticalOrientation;
  var columnsCount = this.calendar.templateCollection.get(subDomain.type).columnsCount(d);
  var subDomainWidth = (subDomain.width + subDomain.gutter) * columnsCount - subDomain.gutter;
  return horizontalPadding(domain.padding) + x3.domainHorizontalLabelWidth + (verticalOrientation ? 0 : domain.gutter) + subDomainWidth;
}, _DomainCoordinates_getHeight = function _DomainCoordinates_getHeight2(d) {
  var _this$calendar$option3 = this.calendar.options.options, domain = _this$calendar$option3.domain, subDomain = _this$calendar$option3.subDomain, x3 = _this$calendar$option3.x, verticalOrientation = _this$calendar$option3.verticalOrientation;
  var rowsCount = this.calendar.templateCollection.get(subDomain.type).rowsCount(d);
  var subDomainHeight = (subDomain.height + subDomain.gutter) * rowsCount - subDomain.gutter;
  return verticalPadding(domain.padding) + subDomainHeight + (verticalOrientation ? domain.gutter : 0) + x3.domainVerticalLabelHeight;
};
var _DomainPainter_instances;
var _DomainPainter_getClassName;
var DEFAULT_SELECTOR$3 = ".ch-domain";
var DomainPainter = function() {
  function DomainPainter2(calendar2) {
    _classCallCheck(this, DomainPainter2);
    _DomainPainter_instances.add(this);
    this.calendar = calendar2;
    this.coordinates = new DomainCoordinates(calendar2, this);
    this.root = null;
    this.dimensions = {
      width: 0,
      height: 0
    };
  }
  _createClass(DomainPainter2, [{
    key: "paint",
    value: function paint(scrollDirection, rootNode) {
      var _this = this;
      var animationDuration = this.calendar.options.options.animationDuration;
      var t = rootNode.transition().duration(animationDuration);
      var coor = this.coordinates;
      this.dimensions = coor.update(this.calendar.domainCollection, scrollDirection);
      var promises = [];
      this.root = rootNode.selectAll(DEFAULT_SELECTOR$3).data(this.calendar.domainCollection.keys, function(d) {
        return d;
      }).join(function(enter) {
        return enter.append("svg").attr("x", function(d) {
          return coor.get(d).pre_x;
        }).attr("y", function(d) {
          return coor.get(d).pre_y;
        }).attr("width", function(d) {
          return coor.get(d).inner_width;
        }).attr("height", function(d) {
          return coor.get(d).inner_height;
        }).attr("class", function(d) {
          return __classPrivateFieldGet(_this, _DomainPainter_instances, "m", _DomainPainter_getClassName).call(_this, d);
        }).call(function(enterSelection) {
          return enterSelection.append("rect").attr("width", function(d) {
            return coor.get(d).inner_width;
          }).attr("height", function(d) {
            return coor.get(d).inner_height;
          }).attr("class", "".concat(DEFAULT_SELECTOR$3.slice(1), "-bg"));
        }).call(function(enterSelection) {
          return promises.push(enterSelection.transition(t).attr("x", function(d) {
            return coor.get(d).x;
          }).attr("y", function(d) {
            return coor.get(d).y;
          }).end());
        });
      }, function(update) {
        return update.call(function(updateSelection) {
          return promises.push(updateSelection.transition(t).attr("x", function(d) {
            return coor.get(d).x;
          }).attr("y", function(d) {
            return coor.get(d).y;
          }).attr("width", function(d) {
            return coor.get(d).inner_width;
          }).attr("height", function(d) {
            return coor.get(d).inner_height;
          }).end());
        }).call(function(updateSelection) {
          return promises.push(updateSelection.selectAll("".concat(DEFAULT_SELECTOR$3, "-bg")).transition(t).attr("width", function(d) {
            return coor.get(d).inner_width;
          }).attr("height", function(d) {
            return coor.get(d).inner_height;
          }).end());
        });
      }, function(exit) {
        return exit.call(function(exitSelection) {
          return promises.push(exitSelection.transition(t).attr("x", function(d) {
            return coor.get(d).x;
          }).attr("y", function(d) {
            return coor.get(d).y;
          }).remove().end());
        });
      });
      return promises;
    }
  }]);
  return DomainPainter2;
}();
_DomainPainter_instances = /* @__PURE__ */ new WeakSet(), _DomainPainter_getClassName = function _DomainPainter_getClassName2(d) {
  var classname = DEFAULT_SELECTOR$3.slice(1);
  var helper = this.calendar.dateHelper.date(d);
  switch (this.calendar.options.options.domain.type) {
    case "hour":
      classname += " h_".concat(helper.hour());
      break;
    case "day":
      classname += " d_".concat(helper.date(), " dy_").concat(helper.format("d") + 1);
      break;
    case "week":
      classname += " w_".concat(helper.week());
      break;
    case "month":
      classname += " m_".concat(helper.month() + 1);
      break;
    case "year":
      classname += " y_".concat(helper.year());
      break;
  }
  return classname;
};
var $$8 = _export;
var $includes = arrayIncludes.includes;
var fails$8 = fails$u;
var addToUnscopables = addToUnscopables$3;
var BROKEN_ON_SPARSE = fails$8(function() {
  return !Array(1).includes();
});
$$8({ target: "Array", proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
  }
});
addToUnscopables("includes");
var $$7 = _export;
var $filter = arrayIteration.filter;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$4;
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("filter");
$$7({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter3(callbackfn) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var anObject$3 = anObject$f;
var iteratorClose = iteratorClose$2;
var callWithSafeIterationClosing$1 = function(iterator, fn, value, ENTRIES2) {
  try {
    return ENTRIES2 ? fn(anObject$3(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, "throw", error);
  }
};
var bind = functionBindContext;
var call$3 = functionCall;
var toObject$2 = toObject$a;
var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
var isArrayIteratorMethod = isArrayIteratorMethod$2;
var isConstructor3 = isConstructor$4;
var lengthOfArrayLike = lengthOfArrayLike$9;
var createProperty = createProperty$4;
var getIterator = getIterator$2;
var getIteratorMethod = getIteratorMethod$3;
var $Array = Array;
var arrayFrom = function from(arrayLike) {
  var O = toObject$2(arrayLike);
  var IS_CONSTRUCTOR = isConstructor3(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
  var mapping = mapfn !== void 0;
  if (mapping)
    mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
  var iteratorMethod = getIteratorMethod(O);
  var index2 = 0;
  var length2, result, step, iterator, next2, value;
  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next2 = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (; !(step = call$3(next2, iterator)).done; index2++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index2], true) : step.value;
      createProperty(result, index2, value);
    }
  } else {
    length2 = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length2) : $Array(length2);
    for (; length2 > index2; index2++) {
      value = mapping ? mapfn(O[index2], index2) : O[index2];
      createProperty(result, index2, value);
    }
  }
  result.length = index2;
  return result;
};
var $$6 = _export;
var from2 = arrayFrom;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$3;
var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
  Array.from(iterable);
});
$$6({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
  from: from2
});
var _DomainCollection_instances;
var _DomainCollection_setSubDomainValues;
var _DomainCollection_extractValues;
var _DomainCollection_refreshKeys;
var DOMAIN_FORMAT = {
  year: "YYYY",
  month: "MMMM",
  week: "wo [week] YYYY",
  xDay: "Do MMM",
  ghDay: "Do MMM",
  day: "Do MMM",
  hour: "HH:00",
  minute: "HH:mm"
};
var DomainCollection = function() {
  function DomainCollection2(dateHelper, interval2, start2, range3) {
    var excludeEnd = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    _classCallCheck(this, DomainCollection2);
    _DomainCollection_instances.add(this);
    this.collection = /* @__PURE__ */ new Map();
    this.dateHelper = dateHelper;
    if (interval2 && start2 && range3) {
      var ts = this.dateHelper.intervals(interval2, start2, range3, excludeEnd).map(function(d) {
        return castArray(d);
      });
      this.collection = new Map(ts);
    }
    this.min = 0;
    this.max = 0;
    this.keys = [];
    this.yankedDomains = [];
    if (this.collection.size > 0) {
      __classPrivateFieldGet(this, _DomainCollection_instances, "m", _DomainCollection_refreshKeys).call(this);
    }
  }
  _createClass(DomainCollection2, [{
    key: "has",
    value: function has2(key) {
      return this.collection.has(key);
    }
  }, {
    key: "get",
    value: function get4(key) {
      return this.collection.get(key);
    }
  }, {
    key: "forEach",
    value: function forEach3(callback) {
      return this.collection.forEach(callback);
    }
  }, {
    key: "at",
    value: function at(index2) {
      return this.keys[index2];
    }
  }, {
    key: "clamp",
    value: function clamp(minDate, maxDate) {
      var _this = this;
      if (minDate && this.min < minDate) {
        this.keys.filter(function(key) {
          return key < minDate;
        }).forEach(function(d) {
          return _this.collection.delete(d);
        });
      }
      if (maxDate && this.max > maxDate) {
        this.keys.filter(function(key) {
          return key > maxDate;
        }).forEach(function(d) {
          return _this.collection.delete(d);
        });
      }
      __classPrivateFieldGet(this, _DomainCollection_instances, "m", _DomainCollection_refreshKeys).call(this);
      return this;
    }
  }, {
    key: "merge",
    value: function merge3(newCollection, limit, createValueCallback) {
      var _this2 = this;
      this.yankedDomains = [];
      newCollection.keys.forEach(function(domainKey, index2) {
        if (_this2.has(domainKey)) {
          return;
        }
        if (_this2.collection.size >= limit) {
          var keyToRemove = _this2.max;
          if (domainKey > _this2.max) {
            keyToRemove = _this2.min;
          }
          if (keyToRemove && _this2.collection.delete(keyToRemove)) {
            _this2.yankedDomains.push(keyToRemove);
          }
        }
        _this2.collection.set(domainKey, createValueCallback(domainKey, index2));
        __classPrivateFieldGet(_this2, _DomainCollection_instances, "m", _DomainCollection_refreshKeys).call(_this2);
      });
      this.yankedDomains = this.yankedDomains.sort(function(a2, b) {
        return a2 - b;
      });
    }
  }, {
    key: "slice",
    value: function slice7() {
      var _this3 = this;
      var limit = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var fromBeginning = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      if (this.keys.length > limit) {
        var keysToDelete = fromBeginning ? this.keys.slice(0, -limit) : this.keys.slice(limit);
        keysToDelete.forEach(function(key) {
          _this3.collection.delete(key);
        });
        __classPrivateFieldGet(this, _DomainCollection_instances, "m", _DomainCollection_refreshKeys).call(this);
      }
      return this;
    }
  }, {
    key: "fill",
    value: function fill3(data2, _ref, subDomainKeyExtractor) {
      var _this4 = this;
      var x3 = _ref.x, y3 = _ref.y, groupY = _ref.groupY, defaultValue = _ref.defaultValue;
      var groupedRecords = this.groupRecords(data2, x3, subDomainKeyExtractor);
      this.keys.forEach(function(domainKey) {
        var records = groupedRecords.get(domainKey) || {};
        __classPrivateFieldGet(_this4, _DomainCollection_instances, "m", _DomainCollection_setSubDomainValues).call(_this4, domainKey, records, y3, groupY, defaultValue);
      });
    }
  }, {
    key: "groupRecords",
    value: function groupRecords(data2, x3, subDomainKeyExtractor) {
      var _this5 = this;
      var results = /* @__PURE__ */ new Map();
      var validSubDomainTimestamp = /* @__PURE__ */ new Map();
      this.keys.forEach(function(domainKey) {
        _this5.get(domainKey).forEach(function(subDomain) {
          validSubDomainTimestamp.set(subDomain.t, domainKey);
        });
      });
      data2.forEach(function(d) {
        var timestamp = _this5.extractTimestamp(d, x3, subDomainKeyExtractor);
        if (validSubDomainTimestamp.has(timestamp)) {
          var domainKey = validSubDomainTimestamp.get(timestamp);
          var records = results.get(domainKey) || {};
          records[timestamp] || (records[timestamp] = []);
          records[timestamp].push(d);
          results.set(domainKey, records);
        }
      });
      return results;
    }
    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "groupValues",
    value: function groupValues(values2, groupFn) {
      var cleanedValues = values2.filter(function(n) {
        return n !== null;
      });
      if (typeof groupFn === "string") {
        if (cleanedValues.every(function(n) {
          return typeof n === "number";
        })) {
          switch (groupFn) {
            case "sum":
              return cleanedValues.reduce(function(a2, b) {
                return a2 + b;
              }, 0);
            case "count":
              return cleanedValues.length;
            case "min":
              return Math.min.apply(Math, _toConsumableArray(cleanedValues)) || null;
            case "max":
              return Math.max.apply(Math, _toConsumableArray(cleanedValues)) || null;
            case "average":
              return cleanedValues.length > 0 ? cleanedValues.reduce(function(a2, b) {
                return a2 + b;
              }, 0) / cleanedValues.length : null;
            default:
              return null;
          }
        }
        switch (groupFn) {
          case "count":
            return cleanedValues.length;
          default:
            return null;
        }
      } else if (typeof groupFn === "function") {
        return groupFn(cleanedValues);
      }
      return null;
    }
    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "extractTimestamp",
    value: function extractTimestamp(datum2, x3, extractorFn) {
      var timestamp = typeof x3 === "function" ? x3(datum2) : datum2[x3];
      if (typeof timestamp === "string") {
        timestamp = +new Date(timestamp);
      }
      return extractorFn(timestamp);
    }
  }]);
  return DomainCollection2;
}();
_DomainCollection_instances = /* @__PURE__ */ new WeakSet(), _DomainCollection_setSubDomainValues = function _DomainCollection_setSubDomainValues2(domainKey, records, y3, groupY, defaultValue) {
  var _this6 = this;
  this.get(domainKey).forEach(function(subDomain, index2) {
    var value = defaultValue;
    if (records.hasOwnProperty(subDomain.t)) {
      value = _this6.groupValues(__classPrivateFieldGet(_this6, _DomainCollection_instances, "m", _DomainCollection_extractValues).call(_this6, records[subDomain.t], y3), groupY);
    }
    _this6.get(domainKey)[index2].v = value;
  });
}, _DomainCollection_extractValues = function _DomainCollection_extractValues2(data2, y3) {
  return data2.map(function(d) {
    return typeof y3 === "function" ? y3(d) : d[y3];
  });
}, _DomainCollection_refreshKeys = function _DomainCollection_refreshKeys2() {
  this.keys = Array.from(this.collection.keys()).map(function(d) {
    return parseInt(d, 10);
  }).sort(function(a2, b) {
    return a2 - b;
  });
  var keys4 = this.keys;
  this.min = keys4[0];
  this.max = keys4[keys4.length - 1];
  return this.keys;
};
var _DomainLabelPainter_instances;
var _DomainLabelPainter_textVerticalAlign;
var _DomainLabelPainter_getX;
var _DomainLabelPainter_getY;
var _DomainLabelPainter_getDomainInsideWidth;
var _DomainLabelPainter_getDomainInsideHeight;
var _DomainLabelPainter_domainRotate;
var DEFAULT_SELECTOR$2 = ".ch-domain-text";
var DomainLabelPainter = function() {
  function DomainLabelPainter2(calendar2) {
    _classCallCheck(this, DomainLabelPainter2);
    _DomainLabelPainter_instances.add(this);
    this.calendar = calendar2;
  }
  _createClass(DomainLabelPainter2, [{
    key: "paint",
    value: function paint(root3) {
      var _this = this;
      var _this$calendar$option = this.calendar.options.options.domain, label = _this$calendar$option.label, type2 = _this$calendar$option.type;
      var dateHelper = this.calendar.dateHelper;
      var format2 = label.text;
      if (format2 === null || format2 === "") {
        return;
      }
      if (typeof format2 === "undefined") {
        format2 = DOMAIN_FORMAT[type2];
      }
      root3.selectAll(DEFAULT_SELECTOR$2).data(function(d) {
        return [d];
      }, function(d) {
        return d;
      }).join(function(enter) {
        return enter.append("text").attr("class", DEFAULT_SELECTOR$2.slice(1)).attr("x", function(d) {
          return __classPrivateFieldGet(_this, _DomainLabelPainter_instances, "m", _DomainLabelPainter_getX).call(_this, d);
        }).attr("y", function(d) {
          return __classPrivateFieldGet(_this, _DomainLabelPainter_instances, "m", _DomainLabelPainter_getY).call(_this, d);
        }).attr("text-anchor", label.textAlign).attr("dominant-baseline", function() {
          return __classPrivateFieldGet(_this, _DomainLabelPainter_instances, "m", _DomainLabelPainter_textVerticalAlign).call(_this);
        }).text(function(d, i, nodes) {
          return (
            // eslint-disable-next-line implicit-arrow-linebreak
            dateHelper.format(d, format2, nodes[i])
          );
        }).call(function(selection2) {
          return __classPrivateFieldGet(_this, _DomainLabelPainter_instances, "m", _DomainLabelPainter_domainRotate).call(_this, selection2);
        });
      }, function(update) {
        update.attr("x", function(d) {
          return __classPrivateFieldGet(_this, _DomainLabelPainter_instances, "m", _DomainLabelPainter_getX).call(_this, d);
        }).attr("y", function(d) {
          return __classPrivateFieldGet(_this, _DomainLabelPainter_instances, "m", _DomainLabelPainter_getY).call(_this, d);
        }).attr("text-anchor", label.textAlign).attr("dominant-baseline", function() {
          return __classPrivateFieldGet(_this, _DomainLabelPainter_instances, "m", _DomainLabelPainter_textVerticalAlign).call(_this);
        }).text(function(d, i, nodes) {
          return (
            // eslint-disable-next-line implicit-arrow-linebreak
            dateHelper.format(d, format2, nodes[i])
          );
        }).call(function(selection2) {
          return __classPrivateFieldGet(_this, _DomainLabelPainter_instances, "m", _DomainLabelPainter_domainRotate).call(_this, selection2);
        });
      });
    }
  }]);
  return DomainLabelPainter2;
}();
_DomainLabelPainter_instances = /* @__PURE__ */ new WeakSet(), _DomainLabelPainter_textVerticalAlign = function _DomainLabelPainter_textVerticalAlign2() {
  var _this$calendar$option2 = this.calendar.options.options.domain.label, position2 = _this$calendar$option2.position, rotate = _this$calendar$option2.rotate;
  if (isVertical(position2)) {
    return "middle";
  }
  if (rotate === "left" && position2 === "left" || rotate === "right" && position2 === "right") {
    return "bottom";
  }
  return "hanging";
}, _DomainLabelPainter_getX = function _DomainLabelPainter_getX2(d) {
  var _this$calendar$option3 = this.calendar.options.options.domain, padding = _this$calendar$option3.padding, _this$calendar$option4 = _this$calendar$option3.label, position2 = _this$calendar$option4.position, textAlign = _this$calendar$option4.textAlign, offset = _this$calendar$option4.offset;
  var domainHorizontalLabelWidth = this.calendar.options.options.x.domainHorizontalLabelWidth;
  var x3 = padding[Position.LEFT];
  if (position2 === "right") {
    x3 += __classPrivateFieldGet(this, _DomainLabelPainter_instances, "m", _DomainLabelPainter_getDomainInsideWidth).call(this, d);
  }
  if (textAlign === "middle") {
    if (["top", "bottom"].includes(position2)) {
      x3 += __classPrivateFieldGet(this, _DomainLabelPainter_instances, "m", _DomainLabelPainter_getDomainInsideWidth).call(this, d) / 2;
    } else {
      x3 += domainHorizontalLabelWidth / 2;
    }
  }
  if (textAlign === "end") {
    if (isVertical(position2)) {
      x3 += __classPrivateFieldGet(this, _DomainLabelPainter_instances, "m", _DomainLabelPainter_getDomainInsideWidth).call(this, d);
    } else {
      x3 += domainHorizontalLabelWidth;
    }
  }
  return x3 + offset.x;
}, _DomainLabelPainter_getY = function _DomainLabelPainter_getY2(d) {
  var _this$calendar$option5 = this.calendar.options.options, _this$calendar$option6 = _this$calendar$option5.domain, _this$calendar$option7 = _this$calendar$option6.label, position2 = _this$calendar$option7.position, offset = _this$calendar$option7.offset, padding = _this$calendar$option6.padding, x3 = _this$calendar$option5.x;
  var y3 = padding[Position.TOP] + x3.domainVerticalLabelHeight / 2;
  if (position2 === "bottom") {
    y3 += __classPrivateFieldGet(this, _DomainLabelPainter_instances, "m", _DomainLabelPainter_getDomainInsideHeight).call(this, d);
  }
  return y3 + offset.y;
}, _DomainLabelPainter_getDomainInsideWidth = function _DomainLabelPainter_getDomainInsideWidth2(d) {
  var _this$calendar$option8 = this.calendar.options.options, padding = _this$calendar$option8.domain.padding, domainHorizontalLabelWidth = _this$calendar$option8.x.domainHorizontalLabelWidth;
  var coordinates = this.calendar.calendarPainter.domainsContainerPainter.domainPainter.coordinates;
  return coordinates.get(d).inner_width - domainHorizontalLabelWidth - horizontalPadding(padding);
}, _DomainLabelPainter_getDomainInsideHeight = function _DomainLabelPainter_getDomainInsideHeight2(d) {
  var _this$calendar$option9 = this.calendar.options.options, domainVerticalLabelHeight = _this$calendar$option9.x.domainVerticalLabelHeight, padding = _this$calendar$option9.domain.padding;
  var coordinates = this.calendar.calendarPainter.domainsContainerPainter.domainPainter.coordinates;
  return coordinates.get(d).inner_height - domainVerticalLabelHeight - verticalPadding(padding);
}, _DomainLabelPainter_domainRotate = function _DomainLabelPainter_domainRotate2(selection2) {
  var _this2 = this;
  var _this$calendar$option10 = this.calendar.options.options, _this$calendar$option11 = _this$calendar$option10.domain.label, rotate = _this$calendar$option11.rotate, textAlign = _this$calendar$option11.textAlign, position2 = _this$calendar$option11.position, x3 = _this$calendar$option10.x;
  var labelWidth = x3.domainHorizontalLabelWidth;
  switch (rotate) {
    case "right":
      selection2.attr("transform", function(d) {
        var domainWidth = __classPrivateFieldGet(_this2, _DomainLabelPainter_instances, "m", _DomainLabelPainter_getDomainInsideWidth).call(_this2, d);
        var domainHeight = __classPrivateFieldGet(_this2, _DomainLabelPainter_instances, "m", _DomainLabelPainter_getDomainInsideHeight).call(_this2, d);
        var s2 = ["rotate(90, ".concat(position2 === "right" ? domainWidth : labelWidth, ", 0)")];
        switch (position2) {
          case "right":
            if (textAlign === "middle") {
              s2.push("translate(".concat(domainHeight / 2 - labelWidth / 2, ")"));
            } else if (textAlign === "end") {
              s2.push("translate(".concat(domainHeight - labelWidth, ")"));
            }
            break;
          case "left":
            if (textAlign === "start") {
              s2.push("translate(".concat(labelWidth, ")"));
            } else if (textAlign === "middle") {
              s2.push("translate(".concat(labelWidth / 2 + domainHeight / 2, ")"));
            } else if (textAlign === "end") {
              s2.push("translate(".concat(domainHeight, ")"));
            }
            break;
        }
        return s2.join(",");
      });
      break;
    case "left":
      selection2.attr("transform", function(d) {
        var domainWidth = __classPrivateFieldGet(_this2, _DomainLabelPainter_instances, "m", _DomainLabelPainter_getDomainInsideWidth).call(_this2, d);
        var domainHeight = __classPrivateFieldGet(_this2, _DomainLabelPainter_instances, "m", _DomainLabelPainter_getDomainInsideHeight).call(_this2, d);
        var s2 = ["rotate(270, ".concat(position2 === "right" ? domainWidth : labelWidth, ", 0)")];
        switch (position2) {
          case "right":
            if (textAlign === "start") {
              s2.push("translate(-".concat(domainHeight, ")"));
            } else if (textAlign === "middle") {
              s2.push("translate(-".concat(domainHeight / 2 + labelWidth / 2, ")"));
            } else if (textAlign === "end") {
              s2.push("translate(-".concat(labelWidth, ")"));
            }
            break;
          case "left":
            if (textAlign === "start") {
              s2.push("translate(".concat(labelWidth - domainHeight, ")"));
            } else if (textAlign === "middle") {
              s2.push("translate(".concat(labelWidth / 2 - domainHeight / 2, ")"));
            }
            break;
        }
        return s2.join(",");
      });
      break;
  }
};
var whitespaces$2 = "	\n\v\f\r                　\u2028\u2029\uFEFF";
var uncurryThis$8 = functionUncurryThis;
var requireObjectCoercible$3 = requireObjectCoercible$7;
var toString$5 = toString$9;
var whitespaces$1 = whitespaces$2;
var replace$2 = uncurryThis$8("".replace);
var ltrim = RegExp("^[" + whitespaces$1 + "]+");
var rtrim = RegExp("(^|[^" + whitespaces$1 + "])[" + whitespaces$1 + "]+$");
var createMethod$1 = function(TYPE) {
  return function($this) {
    var string = toString$5(requireObjectCoercible$3($this));
    if (TYPE & 1)
      string = replace$2(string, ltrim, "");
    if (TYPE & 2)
      string = replace$2(string, rtrim, "$1");
    return string;
  };
};
var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod$1(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod$1(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod$1(3)
};
var PROPER_FUNCTION_NAME = functionName.PROPER;
var fails$7 = fails$u;
var whitespaces = whitespaces$2;
var non = "​᠎";
var stringTrimForced = function(METHOD_NAME) {
  return fails$7(function() {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};
var $$5 = _export;
var $trim = stringTrim.trim;
var forcedStringTrimMethod = stringTrimForced;
$$5({ target: "String", proto: true, forced: forcedStringTrimMethod("trim") }, {
  trim: function trim() {
    return $trim(this);
  }
});
var _SubDomainPainter_instances;
var _SubDomainPainter_setPositions;
var _SubDomainPainter_classname;
var _SubDomainPainter_appendText;
var _SubDomainPainter_getCoordinates;
var _SubDomainPainter_getX;
var _SubDomainPainter_getY;
var DEFAULT_SELECTOR$1 = ".ch-subdomain";
var HIGHLIGHT_CLASSNAME = "highlight";
var SubDomainPainter = function() {
  function SubDomainPainter2(calendar2) {
    _classCallCheck(this, SubDomainPainter2);
    _SubDomainPainter_instances.add(this);
    this.calendar = calendar2;
    this.root = null;
  }
  _createClass(SubDomainPainter2, [{
    key: "paint",
    value: function paint(root3) {
      var _this = this;
      this.root = root3 || this.root;
      var containerClassname = "".concat(DEFAULT_SELECTOR$1, "-container");
      var subDomainSvgGroup = this.root.selectAll(containerClassname).data(function(d) {
        return [d];
      }, function(d) {
        return d;
      }).join(function(enter) {
        return enter.append("svg").call(function(selection2) {
          return __classPrivateFieldGet(_this, _SubDomainPainter_instances, "m", _SubDomainPainter_setPositions).call(_this, selection2);
        }).attr("class", containerClassname.slice(1));
      }, function(update) {
        return (
          // eslint-disable-next-line implicit-arrow-linebreak
          update.call(function(selection2) {
            return __classPrivateFieldGet(_this, _SubDomainPainter_instances, "m", _SubDomainPainter_setPositions).call(_this, selection2);
          })
        );
      });
      var _this$calendar$option = this.calendar.options.options.subDomain, radius2 = _this$calendar$option.radius, width = _this$calendar$option.width, height = _this$calendar$option.height, sort3 = _this$calendar$option.sort;
      var evt = this.calendar.eventEmitter;
      subDomainSvgGroup.selectAll("g").data(function(d) {
        var subDomainsCollection = _this.calendar.domainCollection.get(d);
        if (sort3 === "desc") {
          var max6 = Math.max.apply(Math, _toConsumableArray(subDomainsCollection.map(function(s2) {
            return s2.x;
          })));
          subDomainsCollection.forEach(function(s2, i) {
            subDomainsCollection[i].x = Math.abs(s2.x - max6);
          });
        }
        return subDomainsCollection;
      }).join(function(enter) {
        return enter.append("g").call(function(selection2) {
          return selection2.insert("rect").attr("class", function(d) {
            return (
              // eslint-disable-next-line implicit-arrow-linebreak
              __classPrivateFieldGet(_this, _SubDomainPainter_instances, "m", _SubDomainPainter_classname).call(_this, d.t, "".concat(DEFAULT_SELECTOR$1.slice(1), "-bg"))
            );
          }).attr("width", width).attr("height", height).attr("x", function(d) {
            return __classPrivateFieldGet(_this, _SubDomainPainter_instances, "m", _SubDomainPainter_getX).call(_this, d);
          }).attr("y", function(d) {
            return __classPrivateFieldGet(_this, _SubDomainPainter_instances, "m", _SubDomainPainter_getY).call(_this, d);
          }).on("click", function(ev, d) {
            return (
              // eslint-disable-next-line implicit-arrow-linebreak
              evt.emit("click", ev, d.t, d.v)
            );
          }).on("mouseover", function(ev, d) {
            return (
              // eslint-disable-next-line implicit-arrow-linebreak
              evt.emit("mouseover", ev, d.t, d.v)
            );
          }).on("mouseout", function(ev, d) {
            return (
              // eslint-disable-next-line implicit-arrow-linebreak
              evt.emit("mouseout", ev, d.t, d.v)
            );
          }).attr("rx", radius2 > 0 ? radius2 : null).attr("ry", radius2 > 0 ? radius2 : null);
        }).call(function(selection2) {
          return __classPrivateFieldGet(_this, _SubDomainPainter_instances, "m", _SubDomainPainter_appendText).call(_this, selection2);
        });
      }, function(update) {
        return update.selectAll("rect").attr("class", function(d) {
          return (
            // eslint-disable-next-line implicit-arrow-linebreak
            __classPrivateFieldGet(_this, _SubDomainPainter_instances, "m", _SubDomainPainter_classname).call(_this, d.t, "".concat(DEFAULT_SELECTOR$1.slice(1), "-bg"))
          );
        }).attr("width", width).attr("height", height).attr("x", function(d) {
          return __classPrivateFieldGet(_this, _SubDomainPainter_instances, "m", _SubDomainPainter_getX).call(_this, d);
        }).attr("y", function(d) {
          return __classPrivateFieldGet(_this, _SubDomainPainter_instances, "m", _SubDomainPainter_getY).call(_this, d);
        }).attr("rx", radius2).attr("ry", radius2);
      });
    }
  }]);
  return SubDomainPainter2;
}();
_SubDomainPainter_instances = /* @__PURE__ */ new WeakSet(), _SubDomainPainter_setPositions = function _SubDomainPainter_setPositions2(selection2) {
  var options = this.calendar.options.options;
  var _options$domain = options.domain, padding = _options$domain.padding, position2 = _options$domain.label.position;
  selection2.attr("x", function() {
    var pos = padding[Position.LEFT];
    if (position2 === "left") {
      pos += options.x.domainHorizontalLabelWidth;
    }
    return pos;
  }).attr("y", function() {
    var pos = padding[Position.TOP];
    if (position2 === "top") {
      pos += options.x.domainVerticalLabelHeight;
    }
    return pos;
  });
}, _SubDomainPainter_classname = function _SubDomainPainter_classname2(timestamp) {
  var _this2 = this;
  var _this$calendar$option2 = this.calendar.options.options, highlight = _this$calendar$option2.date.highlight, type2 = _this$calendar$option2.subDomain.type;
  var classname = "";
  if (highlight.length > 0) {
    highlight.forEach(function(d) {
      var unitFn = _this2.calendar.templateCollection.get(type2).extractUnit;
      if (unitFn(+d) === unitFn(timestamp)) {
        classname = HIGHLIGHT_CLASSNAME;
      }
    });
  }
  for (var _len = arguments.length, otherClasses = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    otherClasses[_key - 1] = arguments[_key];
  }
  return [classname].concat(otherClasses).join(" ").trim();
}, _SubDomainPainter_appendText = function _SubDomainPainter_appendText2(elem) {
  var _this3 = this;
  var _this$calendar$option3 = this.calendar.options.options.subDomain, width = _this$calendar$option3.width, height = _this$calendar$option3.height, label = _this$calendar$option3.label;
  if (!label) {
    return null;
  }
  return elem.append("text").attr("class", function(d) {
    return (
      // eslint-disable-next-line implicit-arrow-linebreak
      __classPrivateFieldGet(_this3, _SubDomainPainter_instances, "m", _SubDomainPainter_classname).call(_this3, d.t, "".concat(DEFAULT_SELECTOR$1.slice(1), "-text"))
    );
  }).attr("x", function(d) {
    return __classPrivateFieldGet(_this3, _SubDomainPainter_instances, "m", _SubDomainPainter_getX).call(_this3, d) + width / 2;
  }).attr("y", function(d) {
    return __classPrivateFieldGet(_this3, _SubDomainPainter_instances, "m", _SubDomainPainter_getY).call(_this3, d) + height / 2;
  }).attr("text-anchor", "middle").attr("dominant-baseline", "central").text(function(d, i, nodes) {
    return (
      // eslint-disable-next-line implicit-arrow-linebreak
      _this3.calendar.dateHelper.format(d.t, label, d.v, nodes[i])
    );
  });
}, _SubDomainPainter_getCoordinates = function _SubDomainPainter_getCoordinates2(axis, d) {
  var subDomain = this.calendar.options.options.subDomain;
  return d[axis] * (subDomain[axis === "x" ? "width" : "height"] + subDomain.gutter);
}, _SubDomainPainter_getX = function _SubDomainPainter_getX2(d) {
  return __classPrivateFieldGet(this, _SubDomainPainter_instances, "m", _SubDomainPainter_getCoordinates).call(this, "x", d);
}, _SubDomainPainter_getY = function _SubDomainPainter_getY2(d) {
  return __classPrivateFieldGet(this, _SubDomainPainter_instances, "m", _SubDomainPainter_getCoordinates).call(this, "y", d);
};
var _DomainsContainerPainter_instances;
var _DomainsContainerPainter_startAnimation;
var _DomainsContainerPainter_endAnimation;
var _DomainsContainerPainter_recomputeDimensions;
var BASE_SELECTOR = ".ch-domain-container";
var TRANSITION_CLASSNAME = "in-transition";
var DomainsContainerPainter = function() {
  function DomainsContainerPainter2(calendar2) {
    _classCallCheck(this, DomainsContainerPainter2);
    _DomainsContainerPainter_instances.add(this);
    this.calendar = calendar2;
    this.domainPainter = new DomainPainter(calendar2);
    this.subDomainPainter = new SubDomainPainter(calendar2);
    this.domainLabelPainter = new DomainLabelPainter(calendar2);
    this.dimensions = {
      width: 0,
      height: 0
    };
    this.transitionsQueueCount = 0;
  }
  _createClass(DomainsContainerPainter2, [{
    key: "setup",
    value: function setup() {
      this.root = this.calendar.calendarPainter.root.attr("x", 0).attr("y", 0).append("svg").attr("class", BASE_SELECTOR.slice(1)).append("svg").attr("class", "".concat(BASE_SELECTOR.slice(1), "-animation-wrapper"));
    }
  }, {
    key: "paint",
    value: function paint(scrollDirection) {
      var _this = this;
      __classPrivateFieldGet(this, _DomainsContainerPainter_instances, "m", _DomainsContainerPainter_startAnimation).call(this);
      var result = this.domainPainter.paint(scrollDirection, this.root);
      this.subDomainPainter.paint(this.domainPainter.root);
      this.domainLabelPainter.paint(this.domainPainter.root);
      __classPrivateFieldGet(this, _DomainsContainerPainter_instances, "m", _DomainsContainerPainter_recomputeDimensions).call(this);
      Promise.allSettled(result).then(function() {
        __classPrivateFieldGet(_this, _DomainsContainerPainter_instances, "m", _DomainsContainerPainter_endAnimation).call(_this);
      });
      return result;
    }
  }, {
    key: "updatePosition",
    value: function updatePosition() {
      var _a;
      if (!((_a = this.root) === null || _a === void 0 ? void 0 : _a.node())) {
        return Promise.resolve();
      }
      var animationDuration = this.calendar.options.options.animationDuration;
      var topHeight = this.calendar.pluginManager.getHeightFromPosition("top");
      var leftWidth = this.calendar.pluginManager.getWidthFromPosition("left");
      return [select_default2(this.root.node().parentNode).transition().duration(animationDuration).call(function(selection2) {
        selection2.attr("x", leftWidth).attr("y", topHeight);
      }).end()];
    }
  }, {
    key: "width",
    value: function width() {
      return this.dimensions.width;
    }
  }, {
    key: "height",
    value: function height() {
      return this.dimensions.height;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      __classPrivateFieldGet(this, _DomainsContainerPainter_instances, "m", _DomainsContainerPainter_startAnimation).call(this);
      return Promise.resolve();
    }
  }]);
  return DomainsContainerPainter2;
}();
_DomainsContainerPainter_instances = /* @__PURE__ */ new WeakSet(), _DomainsContainerPainter_startAnimation = function _DomainsContainerPainter_startAnimation2() {
  var _a;
  if ((_a = this.root) === null || _a === void 0 ? void 0 : _a.node()) {
    this.transitionsQueueCount += 1;
    select_default2(this.root.node().parentNode).classed(TRANSITION_CLASSNAME, true);
  }
}, _DomainsContainerPainter_endAnimation = function _DomainsContainerPainter_endAnimation2() {
  var _a;
  if ((_a = this.root) === null || _a === void 0 ? void 0 : _a.node()) {
    this.transitionsQueueCount -= 1;
    if (this.transitionsQueueCount === 0) {
      select_default2(this.root.node().parentNode).classed(TRANSITION_CLASSNAME, false);
    }
  }
}, _DomainsContainerPainter_recomputeDimensions = function _DomainsContainerPainter_recomputeDimensions2() {
  var _this$calendar$option = this.calendar.options.options, animationDuration = _this$calendar$option.animationDuration, verticalOrientation = _this$calendar$option.verticalOrientation, gutter = _this$calendar$option.domain.gutter;
  var domainsDimensions = this.domainPainter.dimensions;
  this.dimensions = {
    width: domainsDimensions.width - (verticalOrientation ? 0 : gutter),
    height: domainsDimensions.height - (!verticalOrientation ? 0 : gutter)
  };
  this.root.transition().duration(animationDuration).attr("width", this.dimensions.width).attr("height", this.dimensions.height);
};
var PluginPainter = function() {
  function PluginPainter2(calendar2) {
    _classCallCheck(this, PluginPainter2);
    this.calendar = calendar2;
  }
  _createClass(PluginPainter2, [{
    key: "paint",
    value: function paint() {
      var promises = [];
      promises = promises.concat(this.calendar.pluginManager.paintAll());
      promises = promises.concat(this.setPluginsPosition());
      return promises;
    }
  }, {
    key: "setPluginsPosition",
    value: function setPluginsPosition() {
      var pluginManager = this.calendar.pluginManager;
      var animationDuration = this.calendar.options.options.animationDuration;
      var domainsContainerPainter = this.calendar.calendarPainter.domainsContainerPainter;
      var top = pluginManager.getFromPosition("top");
      var right = pluginManager.getFromPosition("right");
      var bottom = pluginManager.getFromPosition("bottom");
      var left = pluginManager.getFromPosition("left");
      var topHeight = pluginManager.getHeightFromPosition("top");
      var leftWidth = pluginManager.getWidthFromPosition("left");
      var promises = [];
      var topOffset = 0;
      top.forEach(function(plugin) {
        promises.push(plugin.root.transition().duration(animationDuration).attr("y", topOffset).attr("x", leftWidth).end());
        topOffset += plugin.options.dimensions.height;
      });
      var leftOffset = 0;
      left.forEach(function(plugin) {
        promises.push(plugin.root.transition().duration(animationDuration).attr("x", leftOffset).attr("y", topHeight).end());
        leftOffset += plugin.options.dimensions.width;
      });
      bottom.forEach(function(plugin) {
        promises.push(plugin.root.transition().duration(animationDuration).attr("x", leftWidth).attr("y", topHeight + domainsContainerPainter.height()).end());
      });
      leftOffset += domainsContainerPainter.width();
      right.forEach(function(plugin) {
        promises.push(plugin.root.transition().duration(animationDuration).attr("x", leftOffset).attr("y", topHeight).end());
        leftOffset += plugin.options.dimensions.width;
      });
      return promises;
    }
  }, {
    key: "insideWidth",
    value: function insideWidth() {
      return this.calendar.pluginManager.getWidthFromPosition("left") + this.calendar.pluginManager.getWidthFromPosition("right");
    }
  }, {
    key: "insideHeight",
    value: function insideHeight() {
      return this.calendar.pluginManager.getHeightFromPosition("top") + this.calendar.pluginManager.getHeightFromPosition("bottom");
    }
  }]);
  return PluginPainter2;
}();
var _CalendarPainter_instances;
var _CalendarPainter_getHeight;
var _CalendarPainter_getWidth;
var _CalendarPainter_resize;
var DEFAULT_SELECTOR = ".ch-container";
var CalendarPainter = function() {
  function CalendarPainter2(calendar2) {
    _classCallCheck(this, CalendarPainter2);
    _CalendarPainter_instances.add(this);
    this.calendar = calendar2;
    this.dimensions = {
      width: 0,
      height: 0
    };
    this.root = null;
    this.domainsContainerPainter = new DomainsContainerPainter(calendar2);
    this.pluginPainter = new PluginPainter(calendar2);
  }
  _createClass(CalendarPainter2, [{
    key: "setup",
    value: function setup() {
      var _this$calendar$option = this.calendar.options.options, itemSelector = _this$calendar$option.itemSelector, theme = _this$calendar$option.theme;
      if (!this.root) {
        this.root = select_default2(itemSelector).append("svg").attr("data-theme", theme).attr("class", DEFAULT_SELECTOR.slice(1));
        this.domainsContainerPainter.setup();
      }
      this.calendar.pluginManager.setupAll();
      return true;
    }
  }, {
    key: "paint",
    value: function paint() {
      var navigationDir = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ScrollDirection.SCROLL_NONE;
      var transitions = this.domainsContainerPainter.paint(navigationDir).concat(this.pluginPainter.paint()).concat(this.domainsContainerPainter.updatePosition());
      __classPrivateFieldGet(this, _CalendarPainter_instances, "m", _CalendarPainter_resize).call(this);
      return Promise.allSettled(transitions);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var result = this.calendar.pluginManager.destroyAll().concat(this.domainsContainerPainter.destroy());
      if (!this.root) {
        return Promise.allSettled(result);
      }
      result.push(this.root.transition().duration(this.calendar.options.options.animationDuration).attr("width", 0).attr("height", 0).remove().end());
      return Promise.allSettled(result);
    }
  }]);
  return CalendarPainter2;
}();
_CalendarPainter_instances = /* @__PURE__ */ new WeakSet(), _CalendarPainter_getHeight = function _CalendarPainter_getHeight2() {
  return this.domainsContainerPainter.height() + this.pluginPainter.insideHeight();
}, _CalendarPainter_getWidth = function _CalendarPainter_getWidth2() {
  return this.domainsContainerPainter.width() + this.pluginPainter.insideWidth();
}, _CalendarPainter_resize = function _CalendarPainter_resize2() {
  var options = this.calendar.options.options;
  var newWidth = __classPrivateFieldGet(this, _CalendarPainter_instances, "m", _CalendarPainter_getWidth).call(this);
  var newHeight = __classPrivateFieldGet(this, _CalendarPainter_instances, "m", _CalendarPainter_getHeight).call(this);
  this.root.transition().duration(options.animationDuration).attr("width", newWidth).attr("height", newHeight);
  if (newWidth !== this.dimensions.width || newHeight !== this.dimensions.height) {
    this.calendar.eventEmitter.emit("resize", newWidth, newHeight, this.dimensions.width, this.dimensions.height);
  }
  this.dimensions = {
    width: newWidth,
    height: newHeight
  };
};
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root2 = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root2;
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$f = Object.prototype;
var hasOwnProperty$c = objectProto$f.hasOwnProperty;
var nativeObjectToString$1 = objectProto$f.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$c.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$e = Object.prototype;
var nativeObjectToString = objectProto$e.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString$1(value);
}
function isObject$2(value) {
  var type2 = typeof value;
  return value != null && (type2 == "object" || type2 == "function");
}
var asyncTag = "[object AsyncFunction]";
var funcTag$1 = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject$2(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var $$4 = _export;
var toObject$1 = toObject$a;
var nativeKeys$2 = objectKeys$3;
var fails$6 = fails$u;
var FAILS_ON_PRIMITIVES = fails$6(function() {
  nativeKeys$2(1);
});
$$4({ target: "Object", stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys2(it) {
    return nativeKeys$2(toObject$1(it));
  }
});
var isObject$1 = isObject$j;
var classof$1 = classofRaw$2;
var wellKnownSymbol$3 = wellKnownSymbol$m;
var MATCH$1 = wellKnownSymbol$3("match");
var isRegexp = function(it) {
  var isRegExp2;
  return isObject$1(it) && ((isRegExp2 = it[MATCH$1]) !== void 0 ? !!isRegExp2 : classof$1(it) === "RegExp");
};
var isRegExp = isRegexp;
var $TypeError$1 = TypeError;
var notARegexp = function(it) {
  if (isRegExp(it)) {
    throw new $TypeError$1("The method doesn't accept regular expressions");
  }
  return it;
};
var wellKnownSymbol$2 = wellKnownSymbol$m;
var MATCH = wellKnownSymbol$2("match");
var correctIsRegexpLogic = function(METHOD_NAME) {
  var regexp = /./;
  try {
    "/./"[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return "/./"[METHOD_NAME](regexp);
    } catch (error2) {
    }
  }
  return false;
};
var $$3 = _export;
var uncurryThis$7 = functionUncurryThisClause;
var getOwnPropertyDescriptor2 = objectGetOwnPropertyDescriptor.f;
var toLength$1 = toLength$3;
var toString$4 = toString$9;
var notARegExp$1 = notARegexp;
var requireObjectCoercible$2 = requireObjectCoercible$7;
var correctIsRegExpLogic$1 = correctIsRegexpLogic;
var nativeStartsWith = uncurryThis$7("".startsWith);
var stringSlice$3 = uncurryThis$7("".slice);
var min$1 = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic$1("startsWith");
var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function() {
  var descriptor = getOwnPropertyDescriptor2(String.prototype, "startsWith");
  return descriptor && !descriptor.writable;
}();
$$3({ target: "String", proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString) {
    var that = toString$4(requireObjectCoercible$2(this));
    notARegExp$1(searchString);
    var index2 = toLength$1(min$1(arguments.length > 1 ? arguments[1] : void 0, that.length));
    var search = toString$4(searchString);
    return nativeStartsWith ? nativeStartsWith(that, search, index2) : stringSlice$3(that, index2, index2 + search.length) === search;
  }
});
var DESCRIPTORS$1 = descriptors;
var fails$5 = fails$u;
var uncurryThis$6 = functionUncurryThis;
var objectGetPrototypeOf = objectGetPrototypeOf$1;
var objectKeys = objectKeys$3;
var toIndexedObject = toIndexedObject$9;
var $propertyIsEnumerable = objectPropertyIsEnumerable.f;
var propertyIsEnumerable$2 = uncurryThis$6($propertyIsEnumerable);
var push$1 = uncurryThis$6([].push);
var IE_BUG = DESCRIPTORS$1 && fails$5(function() {
  var O = /* @__PURE__ */ Object.create(null);
  O[2] = 2;
  return !propertyIsEnumerable$2(O, 2);
});
var createMethod = function(TO_ENTRIES) {
  return function(it) {
    var O = toIndexedObject(it);
    var keys4 = objectKeys(O);
    var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf(O) === null;
    var length2 = keys4.length;
    var i = 0;
    var result = [];
    var key;
    while (length2 > i) {
      key = keys4[i++];
      if (!DESCRIPTORS$1 || (IE_WORKAROUND ? key in O : propertyIsEnumerable$2(O, key))) {
        push$1(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};
var objectToArray = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};
var $$2 = _export;
var $entries = objectToArray.entries;
$$2({ target: "Object", stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});
function defined(x3) {
  return x3 != null && !Number.isNaN(x3);
}
function ascendingDefined2(a2, b) {
  return +defined(b) - +defined(a2) || ascending2(a2, b);
}
function finite(x3) {
  return isFinite(x3) ? x3 : NaN;
}
function positive(x3) {
  return x3 > 0 && isFinite(x3) ? x3 : NaN;
}
function negative(x3) {
  return x3 < 0 && isFinite(x3) ? x3 : NaN;
}
var re2 = /^(?:[-+]\d{2})?\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?(?:Z|[-+]\d{2}:?\d{2})?)?$/;
function parse(string, fallback) {
  if (!re2.test(string += ""))
    return typeof fallback === "function" ? fallback(string) : fallback;
  return new Date(string);
}
var timeIntervals = /* @__PURE__ */ new Map([
  ["second", second],
  ["minute", timeMinute],
  ["hour", timeHour],
  ["day", timeDay],
  ["week", timeSunday],
  ["month", timeMonth],
  ["quarter", timeMonth.every(3)],
  ["half", timeMonth.every(6)],
  ["year", timeYear],
  ["monday", timeMonday],
  ["tuesday", timeTuesday],
  ["wednesday", timeWednesday],
  ["thursday", timeThursday],
  ["friday", timeFriday],
  ["saturday", timeSaturday],
  ["sunday", timeSunday]
]);
var utcIntervals = /* @__PURE__ */ new Map([
  ["second", second],
  ["minute", utcMinute],
  ["hour", utcHour],
  ["day", utcDay],
  ["week", utcSunday],
  ["month", utcMonth],
  ["quarter", utcMonth.every(3)],
  ["half", utcMonth.every(6)],
  ["year", utcYear],
  ["monday", utcMonday],
  ["tuesday", utcTuesday],
  ["wednesday", utcWednesday],
  ["thursday", utcThursday],
  ["friday", utcFriday],
  ["saturday", utcSaturday],
  ["sunday", utcSunday]
]);
function maybeTimeInterval(interval2) {
  const i = timeIntervals.get(`${interval2}`.toLowerCase());
  if (!i)
    throw new Error(`unknown interval: ${interval2}`);
  return i;
}
function maybeUtcInterval(interval2) {
  const i = utcIntervals.get(`${interval2}`.toLowerCase());
  if (!i)
    throw new Error(`unknown interval: ${interval2}`);
  return i;
}
var TypedArray = Object.getPrototypeOf(Uint8Array);
var objectToString = Object.prototype.toString;
var constant$1 = (x3) => () => x3;
function coerceNumbers(values2) {
  return values2 instanceof TypedArray ? values2 : map5(values2, coerceNumber, Float64Array);
}
function coerceNumber(x3) {
  return x3 == null ? NaN : Number(x3);
}
function coerceDates(values2) {
  return map5(values2, coerceDate);
}
function coerceDate(x3) {
  return x3 instanceof Date && !isNaN(x3) ? x3 : typeof x3 === "string" ? parse(x3) : x3 == null || isNaN(x3 = +x3) ? void 0 : new Date(x3);
}
function arrayify(data2) {
  return data2 == null || data2 instanceof Array || data2 instanceof TypedArray ? data2 : Array.from(data2);
}
function map5(values2, f, type2 = Array) {
  return values2 == null ? values2 : values2 instanceof type2 ? values2.map(f) : type2.from(values2, f);
}
function slice6(values2, type2 = Array) {
  return values2 instanceof type2 ? values2.slice() : type2.from(values2);
}
function isObject(option) {
  return option?.toString === objectToString;
}
function isScaleOptions(option) {
  return isObject(option) && (option.type !== void 0 || option.domain !== void 0);
}
function maybeInterval(interval2, type2) {
  if (interval2 == null)
    return;
  if (typeof interval2 === "number") {
    if (0 < interval2 && interval2 < 1 && Number.isInteger(1 / interval2))
      interval2 = -1 / interval2;
    const n = Math.abs(interval2);
    return interval2 < 0 ? {
      floor: (d) => Math.floor(d * n) / n,
      offset: (d) => (d * n + 1) / n,
      // note: no optional step for simplicity
      range: (lo, hi) => range(Math.ceil(lo * n), hi * n).map((x3) => x3 / n)
    } : {
      floor: (d) => Math.floor(d / n) * n,
      offset: (d) => d + n,
      // note: no optional step for simplicity
      range: (lo, hi) => range(Math.ceil(lo / n), hi / n).map((x3) => x3 * n)
    };
  }
  if (typeof interval2 === "string")
    return (type2 === "time" ? maybeTimeInterval : maybeUtcInterval)(interval2);
  if (typeof interval2.floor !== "function")
    throw new Error("invalid interval; missing floor method");
  if (typeof interval2.offset !== "function")
    throw new Error("invalid interval; missing offset method");
  return interval2;
}
function maybeRangeInterval(interval2, type2) {
  interval2 = maybeInterval(interval2, type2);
  if (interval2 && typeof interval2.range !== "function")
    throw new Error("invalid interval: missing range method");
  return interval2;
}
function maybeNiceInterval(interval2, type2) {
  interval2 = maybeRangeInterval(interval2, type2);
  if (interval2 && typeof interval2.ceil !== "function")
    throw new Error("invalid interval: missing ceil method");
  return interval2;
}
function isOrdinal(values2) {
  for (const value of values2) {
    if (value == null)
      continue;
    const type2 = typeof value;
    return type2 === "string" || type2 === "boolean";
  }
}
function isTemporal(values2) {
  for (const value of values2) {
    if (value == null)
      continue;
    return value instanceof Date;
  }
}
function isTemporalString(values2) {
  for (const value of values2) {
    if (value == null)
      continue;
    return typeof value === "string" && isNaN(value) && parse(value);
  }
}
function isNumericString(values2) {
  for (const value of values2) {
    if (value == null)
      continue;
    if (typeof value !== "string")
      return false;
    if (!value.trim())
      continue;
    return !isNaN(value);
  }
}
function isNoneish(value) {
  return value == null || isNone(value);
}
function isNone(value) {
  return /^\s*none\s*$/i.test(value);
}
function orderof(values2) {
  if (values2 == null)
    return;
  const first = values2[0];
  const last = values2[values2.length - 1];
  return descending(first, last);
}
var position = Symbol("position");
var color2 = Symbol("color");
var radius = Symbol("radius");
var length = Symbol("length");
var opacity = Symbol("opacity");
var symbol = Symbol("symbol");
var registry = /* @__PURE__ */ new Map([
  ["x", position],
  ["y", position],
  ["fx", position],
  ["fy", position],
  ["r", radius],
  ["color", color2],
  ["opacity", opacity],
  ["symbol", symbol],
  ["length", length]
]);
var sqrt35 = Math.sqrt(3);
var sqrt4_3 = 2 / sqrt35;
var symbolHexagon = {
  draw(context, size) {
    const rx = Math.sqrt(size / Math.PI), ry = rx * sqrt4_3, hy = ry / 2;
    context.moveTo(0, ry);
    context.lineTo(rx, hy);
    context.lineTo(rx, -hy);
    context.lineTo(0, -ry);
    context.lineTo(-rx, -hy);
    context.lineTo(-rx, hy);
    context.closePath();
  }
};
var symbols = /* @__PURE__ */ new Map([
  ["asterisk", asterisk_default],
  ["circle", circle_default3],
  ["cross", cross_default2],
  ["diamond", diamond_default],
  ["diamond2", diamond2_default],
  ["hexagon", symbolHexagon],
  ["plus", plus_default],
  ["square", square_default],
  ["square2", square2_default],
  ["star", star_default],
  ["times", times_default],
  ["triangle", triangle_default],
  ["triangle2", triangle2_default],
  ["wye", wye_default]
]);
function isSymbolObject(value) {
  return value && typeof value.draw === "function";
}
function maybeSymbol(symbol2) {
  if (symbol2 == null || isSymbolObject(symbol2))
    return symbol2;
  const value = symbols.get(`${symbol2}`.toLowerCase());
  if (value)
    return value;
  throw new Error(`invalid symbol: ${symbol2}`);
}
function warn(message) {
  console.warn(message);
}
var ordinalSchemes = /* @__PURE__ */ new Map([
  // categorical
  ["accent", Accent_default],
  ["category10", category10_default],
  ["dark2", Dark2_default],
  ["paired", Paired_default],
  ["pastel1", Pastel1_default],
  ["pastel2", Pastel2_default],
  ["set1", Set1_default],
  ["set2", Set2_default],
  ["set3", Set3_default],
  ["tableau10", Tableau10_default],
  // diverging
  ["brbg", scheme112(scheme, BrBG_default)],
  ["prgn", scheme112(scheme2, PRGn_default)],
  ["piyg", scheme112(scheme3, PiYG_default)],
  ["puor", scheme112(scheme4, PuOr_default)],
  ["rdbu", scheme112(scheme5, RdBu_default)],
  ["rdgy", scheme112(scheme6, RdGy_default)],
  ["rdylbu", scheme112(scheme7, RdYlBu_default)],
  ["rdylgn", scheme112(scheme8, RdYlGn_default)],
  ["spectral", scheme112(scheme9, Spectral_default)],
  // reversed diverging (for temperature data)
  ["burd", scheme11r(scheme5, RdBu_default)],
  ["buylrd", scheme11r(scheme7, RdYlBu_default)],
  // sequential (single-hue)
  ["blues", scheme92(scheme22, Blues_default)],
  ["greens", scheme92(scheme23, Greens_default)],
  ["greys", scheme92(scheme24, Greys_default)],
  ["oranges", scheme92(scheme27, Oranges_default)],
  ["purples", scheme92(scheme25, Purples_default)],
  ["reds", scheme92(scheme26, Reds_default)],
  // sequential (multi-hue)
  ["turbo", schemei(turbo_default)],
  ["viridis", schemei(viridis_default)],
  ["magma", schemei(magma)],
  ["inferno", schemei(inferno)],
  ["plasma", schemei(plasma)],
  ["cividis", schemei(cividis_default)],
  ["cubehelix", schemei(cubehelix_default2)],
  ["warm", schemei(warm)],
  ["cool", schemei(cool)],
  ["bugn", scheme92(scheme10, BuGn_default)],
  ["bupu", scheme92(scheme11, BuPu_default)],
  ["gnbu", scheme92(scheme12, GnBu_default)],
  ["orrd", scheme92(scheme13, OrRd_default)],
  ["pubu", scheme92(scheme15, PuBu_default)],
  ["pubugn", scheme92(scheme14, PuBuGn_default)],
  ["purd", scheme92(scheme16, PuRd_default)],
  ["rdpu", scheme92(scheme17, RdPu_default)],
  ["ylgn", scheme92(scheme19, YlGn_default)],
  ["ylgnbu", scheme92(scheme18, YlGnBu_default)],
  ["ylorbr", scheme92(scheme20, YlOrBr_default)],
  ["ylorrd", scheme92(scheme21, YlOrRd_default)],
  // cyclical
  ["rainbow", schemeicyclical(rainbow_default)],
  ["sinebow", schemeicyclical(sinebow_default)]
]);
function scheme92(scheme28, interpolate) {
  return ({ length: n }) => {
    if (n === 1)
      return [scheme28[3][1]];
    if (n === 2)
      return [scheme28[3][1], scheme28[3][2]];
    n = Math.max(3, Math.floor(n));
    return n > 9 ? quantize_default(interpolate, n) : scheme28[n];
  };
}
function scheme112(scheme28, interpolate) {
  return ({ length: n }) => {
    if (n === 2)
      return [scheme28[3][0], scheme28[3][2]];
    n = Math.max(3, Math.floor(n));
    return n > 11 ? quantize_default(interpolate, n) : scheme28[n];
  };
}
function scheme11r(scheme28, interpolate) {
  return ({ length: n }) => {
    if (n === 2)
      return [scheme28[3][2], scheme28[3][0]];
    n = Math.max(3, Math.floor(n));
    return n > 11 ? quantize_default((t) => interpolate(1 - t), n) : scheme28[n].slice().reverse();
  };
}
function schemei(interpolate) {
  return ({ length: n }) => quantize_default(interpolate, Math.max(2, Math.floor(n)));
}
function schemeicyclical(interpolate) {
  return ({ length: n }) => quantize_default(interpolate, Math.floor(n) + 1).slice(0, -1);
}
function ordinalScheme(scheme28) {
  const s2 = `${scheme28}`.toLowerCase();
  if (!ordinalSchemes.has(s2))
    throw new Error(`unknown ordinal scheme: ${s2}`);
  return ordinalSchemes.get(s2);
}
function ordinalRange(scheme28, length2) {
  const s2 = ordinalScheme(scheme28);
  const r = typeof s2 === "function" ? s2({ length: length2 }) : s2;
  return r.length !== length2 ? r.slice(0, length2) : r;
}
function maybeBooleanRange(domain, scheme28 = "greys") {
  const range3 = /* @__PURE__ */ new Set();
  const [f, t] = ordinalRange(scheme28, 2);
  for (const value of domain) {
    if (value == null)
      continue;
    if (value === true)
      range3.add(t);
    else if (value === false)
      range3.add(f);
    else
      return;
  }
  return [...range3];
}
var quantitativeSchemes = /* @__PURE__ */ new Map([
  // diverging
  ["brbg", BrBG_default],
  ["prgn", PRGn_default],
  ["piyg", PiYG_default],
  ["puor", PuOr_default],
  ["rdbu", RdBu_default],
  ["rdgy", RdGy_default],
  ["rdylbu", RdYlBu_default],
  ["rdylgn", RdYlGn_default],
  ["spectral", Spectral_default],
  // reversed diverging (for temperature data)
  ["burd", (t) => RdBu_default(1 - t)],
  ["buylrd", (t) => RdYlBu_default(1 - t)],
  // sequential (single-hue)
  ["blues", Blues_default],
  ["greens", Greens_default],
  ["greys", Greys_default],
  ["purples", Purples_default],
  ["reds", Reds_default],
  ["oranges", Oranges_default],
  // sequential (multi-hue)
  ["turbo", turbo_default],
  ["viridis", viridis_default],
  ["magma", magma],
  ["inferno", inferno],
  ["plasma", plasma],
  ["cividis", cividis_default],
  ["cubehelix", cubehelix_default2],
  ["warm", warm],
  ["cool", cool],
  ["bugn", BuGn_default],
  ["bupu", BuPu_default],
  ["gnbu", GnBu_default],
  ["orrd", OrRd_default],
  ["pubugn", PuBuGn_default],
  ["pubu", PuBu_default],
  ["purd", PuRd_default],
  ["rdpu", RdPu_default],
  ["ylgnbu", YlGnBu_default],
  ["ylgn", YlGn_default],
  ["ylorbr", YlOrBr_default],
  ["ylorrd", YlOrRd_default],
  // cyclical
  ["rainbow", rainbow_default],
  ["sinebow", sinebow_default]
]);
function quantitativeScheme(scheme28) {
  const s2 = `${scheme28}`.toLowerCase();
  if (!quantitativeSchemes.has(s2))
    throw new Error(`unknown quantitative scheme: ${s2}`);
  return quantitativeSchemes.get(s2);
}
var divergingSchemes = /* @__PURE__ */ new Set([
  "brbg",
  "prgn",
  "piyg",
  "puor",
  "rdbu",
  "rdgy",
  "rdylbu",
  "rdylgn",
  "spectral",
  "burd",
  "buylrd"
]);
function isDivergingScheme(scheme28) {
  return scheme28 != null && divergingSchemes.has(`${scheme28}`.toLowerCase());
}
var flip = (i) => (t) => i(1 - t);
var unit2 = [0, 1];
var interpolators = /* @__PURE__ */ new Map([
  // numbers
  ["number", number_default],
  // color spaces
  ["rgb", rgb_default],
  ["hsl", hsl_default],
  ["hcl", hcl_default],
  ["lab", lab2]
]);
function maybeInterpolator(interpolate) {
  const i = `${interpolate}`.toLowerCase();
  if (!interpolators.has(i))
    throw new Error(`unknown interpolator: ${i}`);
  return interpolators.get(i);
}
function createScaleQ(key, scale3, channels, {
  type: type2,
  nice: nice3,
  clamp,
  zero: zero3,
  domain = inferAutoDomain(key, channels),
  unknown,
  round,
  scheme: scheme28,
  interval: interval2,
  range: range3 = registry.get(key) === radius ? inferRadialRange(channels, domain) : registry.get(key) === length ? inferLengthRange(channels, domain) : registry.get(key) === opacity ? unit2 : void 0,
  interpolate = registry.get(key) === color2 ? scheme28 == null && range3 !== void 0 ? rgb_default : quantitativeScheme(scheme28 !== void 0 ? scheme28 : type2 === "cyclical" ? "rainbow" : "turbo") : round ? round_default : number_default,
  reverse: reverse$1
}) {
  interval2 = maybeRangeInterval(interval2, type2);
  if (type2 === "cyclical" || type2 === "sequential")
    type2 = "linear";
  reverse$1 = !!reverse$1;
  if (typeof interpolate !== "function") {
    interpolate = maybeInterpolator(interpolate);
  }
  if (interpolate.length === 1) {
    if (reverse$1) {
      interpolate = flip(interpolate);
      reverse$1 = false;
    }
    if (range3 === void 0) {
      range3 = Float64Array.from(domain, (_, i) => i / (domain.length - 1));
      if (range3.length === 2)
        range3 = unit2;
    }
    scale3.interpolate((range3 === unit2 ? constant$1 : interpolatePiecewise)(interpolate));
  } else {
    scale3.interpolate(interpolate);
  }
  if (zero3) {
    const [min5, max6] = extent(domain);
    if (min5 > 0 || max6 < 0) {
      domain = slice6(domain);
      if (orderof(domain) !== Math.sign(min5))
        domain[domain.length - 1] = 0;
      else
        domain[0] = 0;
    }
  }
  if (reverse$1)
    domain = reverse(domain);
  scale3.domain(domain).unknown(unknown);
  if (nice3)
    scale3.nice(maybeNice(nice3, type2)), domain = scale3.domain();
  if (range3 !== void 0)
    scale3.range(range3);
  if (clamp)
    scale3.clamp(clamp);
  return { type: type2, domain, range: range3, scale: scale3, interpolate, interval: interval2 };
}
function maybeNice(nice3, type2) {
  return nice3 === true ? void 0 : typeof nice3 === "number" ? nice3 : maybeNiceInterval(nice3, type2);
}
function createScaleLinear(key, channels, options) {
  return createScaleQ(key, linear3(), channels, options);
}
function createScaleSqrt(key, channels, options) {
  return createScalePow(key, channels, __spreadProps(__spreadValues({}, options), { exponent: 0.5 }));
}
function createScalePow(key, channels, _a) {
  var _b = _a, { exponent: exponent2 = 1 } = _b, options = __objRest(_b, ["exponent"]);
  return createScaleQ(key, pow2().exponent(exponent2), channels, __spreadProps(__spreadValues({}, options), { type: "pow" }));
}
function createScaleLog(key, channels, _a) {
  var _b = _a, { base = 10, domain = inferLogDomain(channels) } = _b, options = __objRest(_b, ["base", "domain"]);
  return createScaleQ(key, log2().base(base), channels, __spreadProps(__spreadValues({}, options), { domain }));
}
function createScaleSymlog(key, channels, _a) {
  var _b = _a, { constant: constant3 = 1 } = _b, options = __objRest(_b, ["constant"]);
  return createScaleQ(key, symlog().constant(constant3), channels, options);
}
function createScaleQuantile(key, channels, {
  range: range3,
  quantiles = range3 === void 0 ? 5 : (range3 = [...range3]).length,
  // deprecated; use n instead
  n = quantiles,
  scheme: scheme28 = "rdylbu",
  domain = inferQuantileDomain(channels),
  unknown,
  interpolate,
  reverse: reverse2
}) {
  if (range3 === void 0) {
    range3 = interpolate !== void 0 ? quantize_default(interpolate, n) : registry.get(key) === color2 ? ordinalRange(scheme28, n) : void 0;
  }
  if (domain.length > 0) {
    domain = quantile2(domain, range3 === void 0 ? { length: n } : range3).quantiles();
  }
  return createScaleThreshold(key, channels, { domain, range: range3, reverse: reverse2, unknown });
}
function createScaleQuantize(key, channels, {
  range: range3,
  n = range3 === void 0 ? 5 : (range3 = [...range3]).length,
  scheme: scheme28 = "rdylbu",
  domain = inferAutoDomain(key, channels),
  unknown,
  interpolate,
  reverse: reverse2
}) {
  const [min5, max6] = extent(domain);
  let thresholds;
  if (range3 === void 0) {
    thresholds = ticks(min5, max6, n);
    if (thresholds[0] <= min5)
      thresholds.splice(0, 1);
    if (thresholds[thresholds.length - 1] >= max6)
      thresholds.pop();
    n = thresholds.length + 1;
    range3 = interpolate !== void 0 ? quantize_default(interpolate, n) : registry.get(key) === color2 ? ordinalRange(scheme28, n) : void 0;
  } else {
    thresholds = quantize_default(number_default(min5, max6), n + 1).slice(1, -1);
    if (min5 instanceof Date)
      thresholds = thresholds.map((x3) => new Date(x3));
  }
  if (orderof(arrayify(domain)) < 0)
    thresholds.reverse();
  return createScaleThreshold(key, channels, { domain: thresholds, range: range3, reverse: reverse2, unknown });
}
function createScaleThreshold(key, channels, {
  domain = [0],
  // explicit thresholds in ascending order
  unknown,
  scheme: scheme28 = "rdylbu",
  interpolate,
  range: range3 = interpolate !== void 0 ? quantize_default(interpolate, domain.length + 1) : registry.get(key) === color2 ? ordinalRange(scheme28, domain.length + 1) : void 0,
  reverse: reverse$1
}) {
  domain = arrayify(domain);
  const sign3 = orderof(domain);
  if (!isNaN(sign3) && !isOrdered(domain, sign3))
    throw new Error(`the ${key} scale has a non-monotonic domain`);
  if (reverse$1)
    range3 = reverse(range3);
  return {
    type: "threshold",
    scale: threshold(sign3 < 0 ? reverse(domain) : domain, range3 === void 0 ? [] : range3).unknown(unknown),
    domain,
    range: range3
  };
}
function isOrdered(domain, sign3) {
  for (let i = 1, n = domain.length, d = domain[0]; i < n; ++i) {
    const s2 = descending(d, d = domain[i]);
    if (s2 !== 0 && s2 !== sign3)
      return false;
  }
  return true;
}
function createScaleIdentity() {
  return { type: "identity", scale: identity4() };
}
function inferDomain$1(channels, f = finite) {
  return channels.length ? [
    min(channels, ({ value }) => value === void 0 ? value : min(value, f)),
    max(channels, ({ value }) => value === void 0 ? value : max(value, f))
  ] : [0, 1];
}
function inferAutoDomain(key, channels) {
  const type2 = registry.get(key);
  return (type2 === radius || type2 === opacity || type2 === length ? inferZeroDomain : inferDomain$1)(channels);
}
function inferZeroDomain(channels) {
  return [0, channels.length ? max(channels, ({ value }) => value === void 0 ? value : max(value, finite)) : 1];
}
function inferRadialRange(channels, domain) {
  const hint = channels.find(({ radius: radius2 }) => radius2 !== void 0);
  if (hint !== void 0)
    return [0, hint.radius];
  const h25 = quantile(channels, 0.5, ({ value }) => value === void 0 ? NaN : quantile(value, 0.25, positive));
  const range3 = domain.map((d) => 3 * Math.sqrt(d / h25));
  const k2 = 30 / max(range3);
  return k2 < 1 ? range3.map((r) => r * k2) : range3;
}
function inferLengthRange(channels, domain) {
  const h50 = median(channels, ({ value }) => value === void 0 ? NaN : median(value, Math.abs));
  const range3 = domain.map((d) => 12 * d / h50);
  const k2 = 60 / max(range3);
  return k2 < 1 ? range3.map((r) => r * k2) : range3;
}
function inferLogDomain(channels) {
  for (const { value } of channels) {
    if (value !== void 0) {
      for (let v2 of value) {
        if (v2 > 0)
          return inferDomain$1(channels, positive);
        if (v2 < 0)
          return inferDomain$1(channels, negative);
      }
    }
  }
  return [1, 10];
}
function inferQuantileDomain(channels) {
  const domain = [];
  for (const { value } of channels) {
    if (value === void 0)
      continue;
    for (const v2 of value)
      domain.push(v2);
  }
  return domain;
}
function interpolatePiecewise(interpolate) {
  return (i, j) => (t) => interpolate(i + t * (j - i));
}
function createScaleD(key, scale3, transform2, channels, {
  type: type2,
  nice: nice3,
  clamp,
  domain = inferDomain$1(channels),
  unknown,
  pivot = 0,
  scheme: scheme28,
  range: range3,
  symmetric = true,
  interpolate = registry.get(key) === color2 ? scheme28 == null && range3 !== void 0 ? rgb_default : quantitativeScheme(scheme28 !== void 0 ? scheme28 : "rdbu") : number_default,
  reverse: reverse2
}) {
  pivot = +pivot;
  let [min5, max6] = domain;
  if (descending(min5, max6) < 0)
    [min5, max6] = [max6, min5], reverse2 = !reverse2;
  min5 = Math.min(min5, pivot);
  max6 = Math.max(max6, pivot);
  if (typeof interpolate !== "function") {
    interpolate = maybeInterpolator(interpolate);
  }
  if (range3 !== void 0) {
    interpolate = interpolate.length === 1 ? interpolatePiecewise(interpolate)(...range3) : piecewise(interpolate, range3);
  }
  if (reverse2)
    interpolate = flip(interpolate);
  if (symmetric) {
    const mid = transform2.apply(pivot);
    const mindelta = mid - transform2.apply(min5);
    const maxdelta = transform2.apply(max6) - mid;
    if (mindelta < maxdelta)
      min5 = transform2.invert(mid - maxdelta);
    else if (mindelta > maxdelta)
      max6 = transform2.invert(mid + mindelta);
  }
  scale3.domain([min5, pivot, max6]).unknown(unknown).interpolator(interpolate);
  if (clamp)
    scale3.clamp(clamp);
  if (nice3)
    scale3.nice(nice3);
  return { type: type2, domain: [min5, max6], pivot, interpolate, scale: scale3 };
}
function createScaleDiverging(key, channels, options) {
  return createScaleD(key, diverging(), transformIdentity, channels, options);
}
function createScaleDivergingSqrt(key, channels, options) {
  return createScaleDivergingPow(key, channels, __spreadProps(__spreadValues({}, options), { exponent: 0.5 }));
}
function createScaleDivergingPow(key, channels, _a) {
  var _b = _a, { exponent: exponent2 = 1 } = _b, options = __objRest(_b, ["exponent"]);
  return createScaleD(key, divergingPow().exponent(exponent2 = +exponent2), transformPow2(exponent2), channels, __spreadProps(__spreadValues({}, options), {
    type: "diverging-pow"
  }));
}
function createScaleDivergingLog(key, channels, _a) {
  var _b = _a, { base = 10, pivot = 1, domain = inferDomain$1(channels, pivot < 0 ? negative : positive) } = _b, options = __objRest(_b, ["base", "pivot", "domain"]);
  return createScaleD(key, divergingLog().base(base = +base), transformLog2, channels, __spreadValues({
    domain,
    pivot
  }, options));
}
function createScaleDivergingSymlog(key, channels, _a) {
  var _b = _a, { constant: constant3 = 1 } = _b, options = __objRest(_b, ["constant"]);
  return createScaleD(
    key,
    divergingSymlog().constant(constant3 = +constant3),
    transformSymlog2(constant3),
    channels,
    options
  );
}
var transformIdentity = {
  apply(x3) {
    return x3;
  },
  invert(x3) {
    return x3;
  }
};
var transformLog2 = {
  apply: Math.log,
  invert: Math.exp
};
var transformSqrt2 = {
  apply(x3) {
    return Math.sign(x3) * Math.sqrt(Math.abs(x3));
  },
  invert(x3) {
    return Math.sign(x3) * (x3 * x3);
  }
};
function transformPow2(exponent2) {
  return exponent2 === 0.5 ? transformSqrt2 : {
    apply(x3) {
      return Math.sign(x3) * Math.pow(Math.abs(x3), exponent2);
    },
    invert(x3) {
      return Math.sign(x3) * Math.pow(Math.abs(x3), 1 / exponent2);
    }
  };
}
function transformSymlog2(constant3) {
  return {
    apply(x3) {
      return Math.sign(x3) * Math.log1p(Math.abs(x3 / constant3));
    },
    invert(x3) {
      return Math.sign(x3) * Math.expm1(Math.abs(x3)) * constant3;
    }
  };
}
function createScaleT(key, scale3, channels, options) {
  return createScaleQ(key, scale3, channels, options);
}
function createScaleTime(key, channels, options) {
  return createScaleT(key, time(), channels, options);
}
function createScaleUtc(key, channels, options) {
  return createScaleT(key, utcTime(), channels, options);
}
var ordinalImplicit = Symbol("ordinal");
function createScaleO(key, scale3, channels, { type: type2, interval: interval2, domain, range: range3, reverse: reverse$1, hint }) {
  interval2 = maybeRangeInterval(interval2, type2);
  if (domain === void 0)
    domain = inferDomain(channels, interval2, key);
  if (type2 === "categorical" || type2 === ordinalImplicit)
    type2 = "ordinal";
  if (reverse$1)
    domain = reverse(domain);
  scale3.domain(domain);
  if (range3 !== void 0) {
    if (typeof range3 === "function")
      range3 = range3(domain);
    scale3.range(range3);
  }
  return { type: type2, domain, range: range3, scale: scale3, hint, interval: interval2 };
}
function createScaleOrdinal(key, channels, _a) {
  var _b = _a, { type: type2, interval: interval2, domain, range: range3, scheme: scheme28, unknown } = _b, options = __objRest(_b, ["type", "interval", "domain", "range", "scheme", "unknown"]);
  interval2 = maybeRangeInterval(interval2, type2);
  if (domain === void 0)
    domain = inferDomain(channels, interval2, key);
  let hint;
  if (registry.get(key) === symbol) {
    hint = inferSymbolHint(channels);
    range3 = range3 === void 0 ? inferSymbolRange(hint) : map5(range3, maybeSymbol);
  } else if (registry.get(key) === color2) {
    if (range3 === void 0 && (type2 === "ordinal" || type2 === ordinalImplicit)) {
      range3 = maybeBooleanRange(domain, scheme28);
      if (range3 !== void 0)
        scheme28 = void 0;
    }
    if (scheme28 === void 0 && range3 === void 0) {
      scheme28 = type2 === "ordinal" ? "turbo" : "tableau10";
    }
    if (scheme28 !== void 0) {
      if (range3 !== void 0) {
        const interpolate = quantitativeScheme(scheme28);
        const t03 = range3[0], d = range3[1] - range3[0];
        range3 = ({ length: n }) => quantize_default((t) => interpolate(t03 + d * t), n);
      } else {
        range3 = ordinalScheme(scheme28);
      }
    }
  }
  if (unknown === implicit) {
    throw new Error(`implicit unknown on ${key} scale is not supported`);
  }
  return createScaleO(key, ordinal().unknown(unknown), channels, __spreadProps(__spreadValues({}, options), { type: type2, domain, range: range3, hint }));
}
function createScalePoint(key, channels, _a) {
  var _b = _a, { align = 0.5, padding = 0.5 } = _b, options = __objRest(_b, ["align", "padding"]);
  return maybeRound(point().align(align).padding(padding), channels, options, key);
}
function createScaleBand(key, channels, _a) {
  var _b = _a, {
    align = 0.5,
    padding = 0.1,
    paddingInner = padding,
    paddingOuter = key === "fx" || key === "fy" ? 0 : padding
  } = _b, options = __objRest(_b, [
    "align",
    "padding",
    "paddingInner",
    "paddingOuter"
  ]);
  return maybeRound(
    band().align(align).paddingInner(paddingInner).paddingOuter(paddingOuter),
    channels,
    options,
    key
  );
}
function maybeRound(scale3, channels, options, key) {
  let { round } = options;
  if (round !== void 0)
    scale3.round(round = !!round);
  scale3 = createScaleO(key, scale3, channels, options);
  scale3.round = round;
  return scale3;
}
function inferDomain(channels, interval2, key) {
  const values2 = new InternSet();
  for (const { value, domain } of channels) {
    if (domain !== void 0)
      return domain();
    if (value === void 0)
      continue;
    for (const v2 of value)
      values2.add(v2);
  }
  if (interval2 !== void 0) {
    const [min5, max6] = extent(values2).map(interval2.floor, interval2);
    return interval2.range(min5, interval2.offset(max6));
  }
  if (values2.size > 1e4 && registry.get(key) === position) {
    throw new Error(`implicit ordinal domain of ${key} scale has more than 10,000 values`);
  }
  return sort(values2, ascendingDefined2);
}
function inferHint(channels, key) {
  let value;
  for (const { hint } of channels) {
    const candidate = hint?.[key];
    if (candidate === void 0)
      continue;
    if (value === void 0)
      value = candidate;
    else if (value !== candidate)
      return;
  }
  return value;
}
function inferSymbolHint(channels) {
  return {
    fill: inferHint(channels, "fill"),
    stroke: inferHint(channels, "stroke")
  };
}
function inferSymbolRange(hint) {
  return isNoneish(hint.fill) ? symbolsStroke : symbolsFill;
}
function normalizeScale(key, scale3, hint) {
  return createScale(key, hint === void 0 ? void 0 : [{ hint }], __spreadValues({}, scale3));
}
function createScale(key, channels = [], options = {}) {
  const type2 = inferScaleType(key, channels, options);
  if (options.type === void 0 && options.domain === void 0 && options.range === void 0 && options.interval == null && key !== "fx" && key !== "fy" && isOrdinalScale({ type: type2 })) {
    const values2 = channels.map(({ value }) => value).filter((value) => value !== void 0);
    if (values2.some(isTemporal))
      warn(
        `Warning: some data associated with the ${key} scale are dates. Dates are typically associated with a "utc" or "time" scale rather than a "${formatScaleType(
          type2
        )}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can specify the interval of the ${key} scale (e.g., d3.utcDay), or you can suppress this warning by setting the type of the ${key} scale to "${formatScaleType(
          type2
        )}".`
      );
    else if (values2.some(isTemporalString))
      warn(
        `Warning: some data associated with the ${key} scale are strings that appear to be dates (e.g., YYYY-MM-DD). If these strings represent dates, you should parse them to Date objects. Dates are typically associated with a "utc" or "time" scale rather than a "${formatScaleType(
          type2
        )}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can suppress this warning by setting the type of the ${key} scale to "${formatScaleType(
          type2
        )}".`
      );
    else if (values2.some(isNumericString))
      warn(
        `Warning: some data associated with the ${key} scale are strings that appear to be numbers. If these strings represent numbers, you should parse or coerce them to numbers. Numbers are typically associated with a "linear" scale rather than a "${formatScaleType(
          type2
        )}" scale. If you want to treat this data as ordinal, you can specify the interval of the ${key} scale (e.g., 1 for integers), or you can suppress this warning by setting the type of the ${key} scale to "${formatScaleType(
          type2
        )}".`
      );
  }
  options.type = type2;
  switch (type2) {
    case "diverging":
    case "diverging-sqrt":
    case "diverging-pow":
    case "diverging-log":
    case "diverging-symlog":
    case "cyclical":
    case "sequential":
    case "linear":
    case "sqrt":
    case "threshold":
    case "quantile":
    case "pow":
    case "log":
    case "symlog":
      options = coerceType(channels, options, coerceNumbers);
      break;
    case "identity":
      switch (registry.get(key)) {
        case position:
          options = coerceType(channels, options, coerceNumbers);
          break;
        case symbol:
          options = coerceType(channels, options, coerceSymbols);
          break;
      }
      break;
    case "utc":
    case "time":
      options = coerceType(channels, options, coerceDates);
      break;
  }
  switch (type2) {
    case "diverging":
      return createScaleDiverging(key, channels, options);
    case "diverging-sqrt":
      return createScaleDivergingSqrt(key, channels, options);
    case "diverging-pow":
      return createScaleDivergingPow(key, channels, options);
    case "diverging-log":
      return createScaleDivergingLog(key, channels, options);
    case "diverging-symlog":
      return createScaleDivergingSymlog(key, channels, options);
    case "categorical":
    case "ordinal":
    case ordinalImplicit:
      return createScaleOrdinal(key, channels, options);
    case "cyclical":
    case "sequential":
    case "linear":
      return createScaleLinear(key, channels, options);
    case "sqrt":
      return createScaleSqrt(key, channels, options);
    case "threshold":
      return createScaleThreshold(key, channels, options);
    case "quantile":
      return createScaleQuantile(key, channels, options);
    case "quantize":
      return createScaleQuantize(key, channels, options);
    case "pow":
      return createScalePow(key, channels, options);
    case "log":
      return createScaleLog(key, channels, options);
    case "symlog":
      return createScaleSymlog(key, channels, options);
    case "utc":
      return createScaleUtc(key, channels, options);
    case "time":
      return createScaleTime(key, channels, options);
    case "point":
      return createScalePoint(key, channels, options);
    case "band":
      return createScaleBand(key, channels, options);
    case "identity":
      return registry.get(key) === position ? createScaleIdentity() : { type: "identity" };
    case void 0:
      return;
    default:
      throw new Error(`unknown scale type: ${type2}`);
  }
}
function formatScaleType(type2) {
  return typeof type2 === "symbol" ? type2.description : type2;
}
var typeProjection = { toString: () => "projection" };
function inferScaleType(key, channels, { type: type2, domain, range: range3, scheme: scheme28, pivot, projection: projection2 }) {
  if (key === "fx" || key === "fy")
    return "band";
  if ((key === "x" || key === "y") && projection2 != null)
    type2 = typeProjection;
  for (const { type: t } of channels) {
    if (t === void 0)
      continue;
    else if (type2 === void 0)
      type2 = t;
    else if (type2 !== t)
      throw new Error(`scale incompatible with channel: ${type2} !== ${t}`);
  }
  if (type2 === typeProjection)
    return;
  if (type2 !== void 0)
    return type2;
  if (domain === void 0 && !channels.some(({ value }) => value !== void 0))
    return;
  const kind = registry.get(key);
  if (kind === radius)
    return "sqrt";
  if (kind === opacity || kind === length)
    return "linear";
  if (kind === symbol)
    return "ordinal";
  if ((domain || range3 || []).length > 2)
    return asOrdinalType(kind);
  if (domain !== void 0) {
    if (isOrdinal(domain))
      return asOrdinalType(kind);
    if (isTemporal(domain))
      return "utc";
    if (kind === color2 && (pivot != null || isDivergingScheme(scheme28)))
      return "diverging";
    return "linear";
  }
  const values2 = channels.map(({ value }) => value).filter((value) => value !== void 0);
  if (values2.some(isOrdinal))
    return asOrdinalType(kind);
  if (values2.some(isTemporal))
    return "utc";
  if (kind === color2 && (pivot != null || isDivergingScheme(scheme28)))
    return "diverging";
  return "linear";
}
function asOrdinalType(kind) {
  switch (kind) {
    case position:
      return "point";
    case color2:
      return ordinalImplicit;
    default:
      return "ordinal";
  }
}
function isOrdinalScale({ type: type2 }) {
  return type2 === "ordinal" || type2 === "point" || type2 === "band" || type2 === ordinalImplicit;
}
function coerceType(channels, _a, coerceValues) {
  var _b = _a, { domain } = _b, options = __objRest(_b, ["domain"]);
  for (const c4 of channels) {
    if (c4.value !== void 0) {
      c4.value = coerceValues(c4.value);
    }
  }
  return __spreadValues({
    domain: domain === void 0 ? domain : coerceValues(domain)
  }, options);
}
function coerceSymbols(values2) {
  return map5(values2, maybeSymbol);
}
function scale2(options = {}) {
  let scale3;
  for (const key in options) {
    if (!registry.has(key))
      continue;
    if (!isScaleOptions(options[key]))
      continue;
    if (scale3 !== void 0)
      throw new Error("ambiguous scale definition; multiple scales found");
    scale3 = exposeScale(normalizeScale(key, options[key]));
  }
  if (scale3 === void 0)
    throw new Error("invalid scale definition; no scale found");
  return scale3;
}
function exposeScale({ scale: scale3, type: type2, domain, range: range3, interpolate, interval: interval2, transform: transform2, percent, pivot }) {
  if (type2 === "identity")
    return { type: "identity", apply: (d) => d, invert: (d) => d };
  const unknown = scale3.unknown ? scale3.unknown() : void 0;
  return __spreadValues(__spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({
    type: type2,
    domain: slice6(domain)
  }, range3 !== void 0 && { range: slice6(range3) }), transform2 !== void 0 && { transform: transform2 }), percent && { percent }), unknown !== void 0 && { unknown }), interval2 !== void 0 && { interval: interval2 }), interpolate !== void 0 && { interpolate }), scale3.clamp && { clamp: scale3.clamp() }), pivot !== void 0 && { pivot, symmetric: false }), scale3.base && { base: scale3.base() }), scale3.exponent && { exponent: scale3.exponent() }), scale3.constant && { constant: scale3.constant() }), scale3.align && { align: scale3.align(), round: scale3.round() }), scale3.padding && (scale3.paddingInner ? { paddingInner: scale3.paddingInner(), paddingOuter: scale3.paddingOuter() } : { padding: scale3.padding() })), scale3.bandwidth && { bandwidth: scale3.bandwidth(), step: scale3.step() }), {
    // utilities
    apply: (t) => scale3(t)
  }), scale3.invert && { invert: (t) => scale3.invert(t) });
}
function normalizedScale(scaleOptions) {
  try {
    var scaleType = Object.keys(scaleOptions)[0];
    return scale2(_defineProperty({}, scaleType, Object.assign(Object.assign({}, scaleOptions[scaleType]), {
      clamp: true
    })));
  } catch (error) {
    return null;
  }
}
function scaleStyle(_scale, scaleOptions) {
  var styles = {};
  if (scaleOptions.hasOwnProperty("opacity")) {
    styles.fill = function() {
      return (
        // eslint-disable-next-line implicit-arrow-linebreak
        scaleOptions.opacity.baseColor || SCALE_BASE_OPACITY_COLOR
      );
    };
    styles["fill-opacity"] = function(d) {
      return _scale === null || _scale === void 0 ? void 0 : _scale.apply(d);
    };
  } else {
    styles.fill = function(d) {
      return (
        // eslint-disable-next-line implicit-arrow-linebreak
        typeof d === "string" && (d === null || d === void 0 ? void 0 : d.startsWith("#")) ? d : _scale === null || _scale === void 0 ? void 0 : _scale.apply(d)
      );
    };
  }
  return styles;
}
function applyScaleStyle(elem, _scale, scaleOptions, keyname) {
  Object.entries(scaleStyle(_scale, scaleOptions)).forEach(function(_ref) {
    var _ref2 = _slicedToArray(_ref, 2), prop = _ref2[0], val = _ref2[1];
    return (
      // eslint-disable-next-line implicit-arrow-linebreak
      elem.style(prop, function(d) {
        return (
          // eslint-disable-next-line implicit-arrow-linebreak
          val(keyname ? d[keyname] : d)
        );
      })
    );
  });
}
var Populator = function() {
  function Populator2(calendar2) {
    _classCallCheck(this, Populator2);
    this.calendar = calendar2;
  }
  _createClass(Populator2, [{
    key: "populate",
    value: function populate() {
      var calendar2 = this.calendar;
      var _calendar$options$opt = calendar2.options.options, scale3 = _calendar$options$opt.scale, subDomain = _calendar$options$opt.subDomain;
      var colorScale = normalizedScale(scale3);
      calendar2.calendarPainter.root.selectAll(".ch-domain").selectAll("svg").selectAll("g").data(function(d) {
        return calendar2.domainCollection.get(d) || [];
      }).call(function(element) {
        applyScaleStyle(element.select("rect"), colorScale, scale3, "v");
      }).call(function(element) {
        element.select("text").attr("style", function(d) {
          var defaultColor = hcl(colorScale === null || colorScale === void 0 ? void 0 : colorScale.apply(d.v)).l > 60 ? "#000" : "#fff";
          var color3 = subDomain.color || (d.v ? defaultColor : null);
          if (isFunction(color3)) {
            color3 = color3(d.t, d.v, colorScale === null || colorScale === void 0 ? void 0 : colorScale.apply(d.v));
          }
          if (!color3) {
            return null;
          }
          return "fill: ".concat(color3, ";");
        }).text(function(d, i, nodes) {
          return (
            // eslint-disable-next-line implicit-arrow-linebreak
            calendar2.dateHelper.format(d.t, subDomain.label, d.v, nodes[i])
          );
        });
      }).call(function() {
        calendar2.eventEmitter.emit("fill");
      });
    }
  }]);
  return Populator2;
}();
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
function assocIndexOf(array4, key) {
  var length2 = array4.length;
  while (length2--) {
    if (eq(array4[length2][0], key)) {
      return length2;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data2 = this.__data__, index2 = assocIndexOf(data2, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data2.length - 1;
  if (index2 == lastIndex) {
    data2.pop();
  } else {
    splice.call(data2, index2, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data2 = this.__data__, index2 = assocIndexOf(data2, key);
  return index2 < 0 ? void 0 : data2[index2][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data2 = this.__data__, index2 = assocIndexOf(data2, key);
  if (index2 < 0) {
    ++this.size;
    data2.push([key, value]);
  } else {
    data2[index2][1] = value;
  }
  return this;
}
function ListCache(entries2) {
  var index2 = -1, length2 = entries2 == null ? 0 : entries2.length;
  this.clear();
  while (++index2 < length2) {
    var entry = entries2[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data2 = this.__data__, result = data2["delete"](key);
  this.size = data2.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var coreJsData = root$1["__core-js_shared__"];
var coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid2 = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid2 ? "Symbol(src)_1." + uid2 : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype;
var objectProto$d = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$b = objectProto$d.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString$1.call(hasOwnProperty$b).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject$2(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var Map$1 = getNative(root$1, "Map");
var Map$2 = Map$1;
var nativeCreate = getNative(Object, "create");
var nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$c = Object.prototype;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
function hashGet(key) {
  var data2 = this.__data__;
  if (nativeCreate$1) {
    var result = data2[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$a.call(data2, key) ? data2[key] : void 0;
}
var objectProto$b = Object.prototype;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
function hashHas(key) {
  var data2 = this.__data__;
  return nativeCreate$1 ? data2[key] !== void 0 : hasOwnProperty$9.call(data2, key);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data2 = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data2[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
function Hash(entries2) {
  var index2 = -1, length2 = entries2 == null ? 0 : entries2.length;
  this.clear();
  while (++index2 < length2) {
    var entry = entries2[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type2 = typeof value;
  return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map6, key) {
  var data2 = map6.__data__;
  return isKeyable(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data2 = getMapData(this, key), size = data2.size;
  data2.set(key, value);
  this.size += data2.size == size ? 0 : 1;
  return this;
}
function MapCache(entries2) {
  var index2 = -1, length2 = entries2 == null ? 0 : entries2.length;
  this.clear();
  while (++index2 < length2) {
    var entry = entries2[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data2 = this.__data__;
  if (data2 instanceof ListCache) {
    var pairs2 = data2.__data__;
    if (!Map$2 || pairs2.length < LARGE_ARRAY_SIZE - 1) {
      pairs2.push([key, value]);
      this.size = ++data2.size;
      return this;
    }
    data2 = this.__data__ = new MapCache(pairs2);
  }
  data2.set(key, value);
  this.size = data2.size;
  return this;
}
function Stack(entries2) {
  var data2 = this.__data__ = new ListCache(entries2);
  this.size = data2.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
var defineProperty3 = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty$1 = defineProperty3;
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
function assignMergeValue(object, key, value) {
  if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index2 = -1, iterable = Object(object), props = keysFunc(object), length2 = props.length;
    while (length2--) {
      var key = props[fromRight ? length2 : ++index2];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var baseFor = createBaseFor();
var baseFor$1 = baseFor;
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root$1.Buffer : void 0;
var allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length2 = buffer.length, result = allocUnsafe ? allocUnsafe(length2) : new buffer.constructor(length2);
  buffer.copy(result);
  return result;
}
var Uint8Array$1 = root$1.Uint8Array;
var Uint8Array$2 = Uint8Array$1;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$2(result).set(new Uint8Array$2(arrayBuffer));
  return result;
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
function copyArray(source, array4) {
  var index2 = -1, length2 = source.length;
  array4 || (array4 = Array(length2));
  while (++index2 < length2) {
    array4[index2] = source[index2];
  }
  return array4;
}
var objectCreate = Object.create;
var baseCreate = /* @__PURE__ */ function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$2(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var baseCreate$1 = baseCreate;
function overArg(func, transform2) {
  return function(arg) {
    return func(transform2(arg));
  };
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
var getPrototype$1 = getPrototype;
var objectProto$a = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$a;
  return value === proto;
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate$1(getPrototype$1(object)) : {};
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var argsTag$2 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}
var objectProto$9 = Object.prototype;
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;
var isArguments = baseIsArguments(/* @__PURE__ */ function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$8.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments$1 = isArguments;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function stubFalse() {
  return false;
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var Buffer = moduleExports$1 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var isBuffer$1 = isBuffer;
var objectTag$3 = "[object Object]";
var funcProto = Function.prototype;
var objectProto$8 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto = getPrototype$1(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$7.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var argsTag$1 = "[object Arguments]";
var arrayTag$1 = "[object Array]";
var boolTag$1 = "[object Boolean]";
var dateTag$1 = "[object Date]";
var errorTag$1 = "[object Error]";
var funcTag = "[object Function]";
var mapTag$2 = "[object Map]";
var numberTag$1 = "[object Number]";
var objectTag$2 = "[object Object]";
var regexpTag$1 = "[object RegExp]";
var setTag$2 = "[object Set]";
var stringTag$2 = "[object String]";
var weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]";
var dataViewTag$2 = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$2] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var freeProcess = moduleExports && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types = freeModule && freeModule.require && freeModule.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray$1 = isTypedArray;
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$6.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length2 = props.length;
  while (++index2 < length2) {
    var key = props[index2];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
function baseTimes(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length2) {
  var type2 = typeof value;
  length2 = length2 == null ? MAX_SAFE_INTEGER : length2;
  return !!length2 && (type2 == "number" || type2 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length2);
}
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$3(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length2 = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$5.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length2)))) {
      result.push(key);
    }
  }
  return result;
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject$2(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$4.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray$3(srcValue), isBuff = !isArr && isBuffer$1(srcValue), isTyped = !isArr && !isBuff && isTypedArray$1(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray$3(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments$1(srcValue)) {
      newValue = objValue;
      if (isArguments$1(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject$2(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue(object, key, newValue);
}
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor$1(source, function(srcValue, key) {
    stack || (stack = new Stack());
    if (isObject$2(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
function identity6(value) {
  return value;
}
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var nativeMax = Math.max;
function overRest(func, start2, transform2) {
  start2 = nativeMax(start2 === void 0 ? func.length - 1 : start2, 0);
  return function() {
    var args = arguments, index2 = -1, length2 = nativeMax(args.length - start2, 0), array4 = Array(length2);
    while (++index2 < length2) {
      array4[index2] = args[start2 + index2];
    }
    index2 = -1;
    var otherArgs = Array(start2 + 1);
    while (++index2 < start2) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start2] = transform2(array4);
    return apply$1(func, this, otherArgs);
  };
}
function constant2(value) {
  return function() {
    return value;
  };
}
var baseSetToString = !defineProperty$1 ? identity6 : function(func, string) {
  return defineProperty$1(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant2(string),
    "writable": true
  });
};
var baseSetToString$1 = baseSetToString;
var HOT_COUNT = 800;
var HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count3 = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count3 >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count3 = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var setToString = shortOut(baseSetToString$1);
var setToString$1 = setToString;
function baseRest(func, start2) {
  return setToString$1(overRest(func, start2, identity6), func + "");
}
function isIterateeCall(value, index2, object) {
  if (!isObject$2(object)) {
    return false;
  }
  var type2 = typeof index2;
  if (type2 == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type2 == "string" && index2 in object) {
    return eq(object[index2], value);
  }
  return false;
}
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index2 = -1, length2 = sources.length, customizer = length2 > 1 ? sources[length2 - 1] : void 0, guard = length2 > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length2--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length2 < 3 ? void 0 : customizer;
      length2 = 1;
    }
    object = Object(object);
    while (++index2 < length2) {
      var source = sources[index2];
      if (source) {
        assigner(object, source, index2, customizer);
      }
    }
    return object;
  });
}
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});
var mergeWith$1 = mergeWith;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values2) {
  var index2 = -1, length2 = values2 == null ? 0 : values2.length;
  this.__data__ = new MapCache();
  while (++index2 < length2) {
    this.add(values2[index2]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array4, predicate) {
  var index2 = -1, length2 = array4 == null ? 0 : array4.length;
  while (++index2 < length2) {
    if (predicate(array4[index2], index2, array4)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$3 = 1;
var COMPARE_UNORDERED_FLAG$1 = 2;
function equalArrays(array4, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array4.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array4);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array4;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
  stack.set(array4, other);
  stack.set(other, array4);
  while (++index2 < arrLength) {
    var arrValue = array4[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array4, stack) : customizer(arrValue, othValue, index2, array4, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array4);
  stack["delete"](other);
  return result;
}
function mapToArray(map6) {
  var index2 = -1, result = Array(map6.size);
  map6.forEach(function(value, key) {
    result[++index2] = [key, value];
  });
  return result;
}
function setToArray(set4) {
  var index2 = -1, result = Array(set4.size);
  set4.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1;
var COMPARE_UNORDERED_FLAG = 2;
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var mapTag$1 = "[object Map]";
var numberTag = "[object Number]";
var regexpTag = "[object RegExp]";
var setTag$1 = "[object Set]";
var stringTag$1 = "[object String]";
var symbolTag$1 = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag$1 = "[object DataView]";
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0;
var symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$2(object), new Uint8Array$2(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag$1:
      return object == other + "";
    case mapTag$1:
      var convert = mapToArray;
    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
function arrayPush(array4, values2) {
  var index2 = -1, length2 = values2.length, offset = array4.length;
  while (++index2 < length2) {
    array4[offset + index2] = values2[index2];
  }
  return array4;
}
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$3(object) ? result : arrayPush(result, symbolsFunc(object));
}
function arrayFilter(array4, predicate) {
  var index2 = -1, length2 = array4 == null ? 0 : array4.length, resIndex = 0, result = [];
  while (++index2 < length2) {
    var value = array4[index2];
    if (predicate(value, index2, array4)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$4 = Object.prototype;
var propertyIsEnumerable2 = objectProto$4.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol2) {
    return propertyIsEnumerable2.call(object, symbol2);
  });
};
var getSymbols$1 = getSymbols;
var nativeKeys = overArg(Object.keys, Object);
var nativeKeys$1 = nativeKeys;
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys3(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys3, getSymbols$1);
}
var COMPARE_PARTIAL_FLAG$1 = 1;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key = objProps[index2];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var DataView2 = getNative(root$1, "DataView");
var DataView$1 = DataView2;
var Promise$1 = getNative(root$1, "Promise");
var Promise$2 = Promise$1;
var Set$1 = getNative(root$1, "Set");
var Set$2 = Set$1;
var WeakMap = getNative(root$1, "WeakMap");
var WeakMap$1 = WeakMap;
var mapTag = "[object Map]";
var objectTag$1 = "[object Object]";
var promiseTag = "[object Promise]";
var setTag = "[object Set]";
var weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = toSource(DataView$1);
var mapCtorString = toSource(Map$2);
var promiseCtorString = toSource(Promise$2);
var setCtorString = toSource(Set$2);
var weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag || Map$2 && getTag(new Map$2()) != mapTag || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var getTag$1 = getTag;
var COMPARE_PARTIAL_FLAG = 1;
var argsTag = "[object Arguments]";
var arrayTag = "[object Array]";
var objectTag = "[object Object]";
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$3(object), othIsArr = isArray$3(other), objTag = objIsArr ? arrayTag : getTag$1(object), othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$1.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray$3(value)) {
    return false;
  }
  var type2 = typeof value;
  if (type2 == "number" || type2 == "symbol" || type2 == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match2, number5, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number5 || match2);
  });
  return result;
});
var stringToPath$1 = stringToPath;
function arrayMap(array4, iteratee) {
  var index2 = -1, length2 = array4 == null ? 0 : array4.length, result = Array(length2);
  while (++index2 < length2) {
    result[index2] = iteratee(array4[index2], index2, array4);
  }
  return result;
}
var INFINITY$1 = 1 / 0;
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0;
var symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$3(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
function toString$3(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object) {
  if (isArray$3(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath$1(toString$3(value));
}
var INFINITY = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function hasPath(object, path2, hasFunc) {
  path2 = castPath(path2, object);
  var index2 = -1, length2 = path2.length, result = false;
  while (++index2 < length2) {
    var key = toKey(path2[index2]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index2 != length2) {
    return result;
  }
  length2 = object == null ? 0 : object.length;
  return !!length2 && isLength(length2) && isIndex(key, length2) && (isArray$3(object) || isArguments$1(object));
}
function has(object, path2) {
  return object != null && hasPath(object, path2, baseHas);
}
function baseGet(object, path2) {
  path2 = castPath(path2, object);
  var index2 = 0, length2 = path2.length;
  while (object != null && index2 < length2) {
    object = object[toKey(path2[index2++])];
  }
  return index2 && index2 == length2 ? object : void 0;
}
function get3(object, path2, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path2);
  return result === void 0 ? defaultValue : result;
}
function baseSet(object, path2, value, customizer) {
  if (!isObject$2(object)) {
    return object;
  }
  path2 = castPath(path2, object);
  var index2 = -1, length2 = path2.length, lastIndex = length2 - 1, nested = object;
  while (nested != null && ++index2 < length2) {
    var key = toKey(path2[index2]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index2 != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject$2(objValue) ? objValue : isIndex(path2[index2 + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
function set3(object, path2, value) {
  return object == null ? object : baseSet(object, path2, value);
}
var stringTag = "[object String]";
function isString(value) {
  return typeof value == "string" || !isArray$3(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
}
var OptionsPreProcessors = {
  range: function range2(value) {
    return Math.max(+value, 1);
  },
  "date.highlight": function dateHighlight(args) {
    return castArray(args);
  },
  "subDomain.label": function subDomainLabel(value) {
    return (
      // eslint-disable-next-line
      isString(value) && value !== "" || isFunction(value) ? value : null
    );
  }
};
var Options = function() {
  function Options2() {
    var processors = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : OptionsPreProcessors;
    _classCallCheck(this, Options2);
    this.preProcessors = processors;
    this.options = {
      // selector string of the container to append the graph to
      // Accept any string value accepted by document.querySelector or CSS3
      // or an Element object
      itemSelector: OPTIONS_DEFAULT_ITEM_SELECTOR,
      // Number of domain to display on the graph
      range: OPTIONS_DEFAULT_RANGE,
      domain: {
        type: OPTIONS_DEFAULT_DOMAIN_TYPE,
        // Space between each domain, in pixel
        gutter: 4,
        padding: [0, 0, 0, 0],
        // Whether to enable dynamic domain size
        // The width/height on a domain depends on the number of
        // subDomains items count
        dynamicDimension: true,
        // Whether to show most recent date first
        sort: "asc",
        label: {
          // Formatting of the domain label
          // @default: undefined, will use the formatting
          // according to domain type
          // Accept any string accepted by dayjs.format()
          // or a function
          //
          // Refer to https://day.js.org/docs/en/display/format
          // for list of accepted string tokens used by dayjs.format()
          text: void 0,
          // valid: top, right, bottom, left
          position: "bottom",
          // Valid are the direct svg values: start, middle, end
          textAlign: "middle",
          // By default, there is no margin/padding around the label
          offset: {
            x: 0,
            y: 0
          },
          rotate: null,
          // Used only on vertical orientation
          width: 100,
          // Used only on horizontal orientation
          height: 25
        }
      },
      subDomain: {
        type: OPTIONS_DEFAULT_SUBDOMAIN_TYPE,
        // Width of each subDomain cell, in pixel
        width: OPTIONS_DEFAULT_SUBDOMAIN_WIDTH,
        // Height of each subDomain cell, in pixel
        height: OPTIONS_DEFAULT_SUBDOMAIN_HEIGHT,
        // Space between each subDomain cell, in pixel
        gutter: OPTIONS_DEFAULT_SUBDOMAIN_GUTTER,
        // Radius of each subDomain cell, in pixel
        radius: OPTIONS_DEFAULT_SUBDOMAIN_RADIUS,
        // Formatting of the text inside each subDomain cell
        // @default: null, no text
        // Accept any string accepted by dayjs.format()
        // or a function
        //
        // Refer to https://day.js.org/docs/en/display/format
        // for list of accepted string tokens used by dayjs.format()
        label: null,
        color: void 0,
        sort: "asc"
      },
      date: {
        // Start date of the graph
        // @default now
        start: /* @__PURE__ */ new Date(),
        min: void 0,
        max: void 0,
        // List of dates to highlight
        // Valid values:
        // - []: don't highlight anything
        // - an array of Date objects: highlight the specified dates
        highlight: [],
        locale: OPTIONS_DEFAULT_LOCALE,
        timezone: void 0
      },
      // Calendar orientation
      // false: display domains side by side
      // true : display domains one under the other
      verticalOrientation: false,
      data: {
        // Data source
        // URL, where to fetch the original datas
        source: "",
        // Data type
        // Default: json
        type: "json",
        requestInit: {},
        // keyname of the time property
        x: "",
        // keyname of the value property
        y: "",
        // Grouping function of the values
        groupY: "sum",
        defaultValue: null
      },
      scale: void 0,
      // Animation duration, in ms
      animationDuration: OPTIONS_DEFAULT_ANIMATION_DURATION,
      // Theme mode: dark/light
      theme: OPTIONS_DEFAULT_THEME,
      // Internally used options, do not edit not set
      x: {
        domainHorizontalLabelWidth: 0,
        domainVerticalLabelHeight: 0
      }
    };
  }
  _createClass(Options2, [{
    key: "set",
    value: function set$12(key, value) {
      if (!has(this.options, key) || isEqual(get3(this.options, key), value)) {
        return false;
      }
      set3(this.options, key, has(this.preProcessors, key) ? get3(this.preProcessors, key)(value) : value);
      return true;
    }
  }, {
    key: "init",
    value: function init2(opts) {
      var _this = this;
      this.options = Object.assign({}, mergeWith$1(this.options, opts, function(_, srcValue) {
        return Array.isArray(srcValue) ? srcValue : void 0;
      }));
      var options = this.options;
      Object.keys(this.preProcessors).forEach(function(key) {
        set3(options, key, get3(_this.preProcessors, key)(get3(options, key)));
      });
      if (typeof options.scale === "undefined") {
        this.initScale();
      }
      options.x.domainVerticalLabelHeight = options.domain.label.height;
      if (options.domain.label.position === "top" || options.domain.label.position === "bottom") {
        options.x.domainHorizontalLabelWidth = 0;
      } else {
        options.x.domainVerticalLabelHeight = 0;
        options.x.domainHorizontalLabelWidth = options.domain.label.width;
      }
      if (options.domain.label.text === null || options.domain.label.text === "") {
        options.x.domainVerticalLabelHeight = 0;
        options.x.domainHorizontalLabelWidth = 0;
      }
    }
  }, {
    key: "initScale",
    value: function initScale() {
      this.options.scale = {
        color: {
          scheme: SCALE_BASE_COLOR_SCHEME,
          type: SCALE_BASE_COLOR_TYPE,
          domain: SCALE_BASE_COLOR_DOMAIN
        }
      };
    }
  }]);
  return Options2;
}();
var anObject$2 = anObject$f;
var regexpFlags$1 = function() {
  var that = anObject$2(this);
  var result = "";
  if (that.hasIndices)
    result += "d";
  if (that.global)
    result += "g";
  if (that.ignoreCase)
    result += "i";
  if (that.multiline)
    result += "m";
  if (that.dotAll)
    result += "s";
  if (that.unicode)
    result += "u";
  if (that.unicodeSets)
    result += "v";
  if (that.sticky)
    result += "y";
  return result;
};
var fails$4 = fails$u;
var global$3 = global$n;
var $RegExp$2 = global$3.RegExp;
var UNSUPPORTED_Y$1 = fails$4(function() {
  var re3 = $RegExp$2("a", "y");
  re3.lastIndex = 2;
  return re3.exec("abcd") !== null;
});
var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$4(function() {
  return !$RegExp$2("a", "y").sticky;
});
var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$4(function() {
  var re3 = $RegExp$2("^r", "gy");
  re3.lastIndex = 2;
  return re3.exec("str") !== null;
});
var regexpStickyHelpers = {
  BROKEN_CARET,
  MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y$1
};
var fails$3 = fails$u;
var global$2 = global$n;
var $RegExp$1 = global$2.RegExp;
var regexpUnsupportedDotAll = fails$3(function() {
  var re3 = $RegExp$1(".", "s");
  return !(re3.dotAll && re3.test("\n") && re3.flags === "s");
});
var fails$2 = fails$u;
var global$1 = global$n;
var $RegExp = global$1.RegExp;
var regexpUnsupportedNcg = fails$2(function() {
  var re3 = $RegExp("(?<a>b)", "g");
  return re3.exec("b").groups.a !== "b" || "b".replace(re3, "$<a>c") !== "bc";
});
var call$2 = functionCall;
var uncurryThis$5 = functionUncurryThis;
var toString$2 = toString$9;
var regexpFlags = regexpFlags$1;
var stickyHelpers = regexpStickyHelpers;
var shared = sharedExports;
var create3 = objectCreate$1;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;
var nativeReplace = shared("native-string-replace", String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$2 = uncurryThis$5("".charAt);
var indexOf = uncurryThis$5("".indexOf);
var replace$1 = uncurryThis$5("".replace);
var stringSlice$2 = uncurryThis$5("".slice);
var UPDATES_LAST_INDEX_WRONG = function() {
  var re1 = /a/;
  var re22 = /b*/g;
  call$2(nativeExec, re1, "a");
  call$2(nativeExec, re22, "a");
  return re1.lastIndex !== 0 || re22.lastIndex !== 0;
}();
var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;
var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;
if (PATCH) {
  patchedExec = function exec2(string) {
    var re3 = this;
    var state = getInternalState(re3);
    var str = toString$2(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match2, i, object, group2;
    if (raw) {
      raw.lastIndex = re3.lastIndex;
      result = call$2(patchedExec, raw, str);
      re3.lastIndex = raw.lastIndex;
      return result;
    }
    var groups2 = state.groups;
    var sticky = UNSUPPORTED_Y && re3.sticky;
    var flags = call$2(regexpFlags, re3);
    var source = re3.source;
    var charsAdded = 0;
    var strCopy = str;
    if (sticky) {
      flags = replace$1(flags, "y", "");
      if (indexOf(flags, "g") === -1) {
        flags += "g";
      }
      strCopy = stringSlice$2(str, re3.lastIndex);
      if (re3.lastIndex > 0 && (!re3.multiline || re3.multiline && charAt$2(str, re3.lastIndex - 1) !== "\n")) {
        source = "(?: " + source + ")";
        strCopy = " " + strCopy;
        charsAdded++;
      }
      reCopy = new RegExp("^(?:" + source + ")", flags);
    }
    if (NPCG_INCLUDED) {
      reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
    }
    if (UPDATES_LAST_INDEX_WRONG)
      lastIndex = re3.lastIndex;
    match2 = call$2(nativeExec, sticky ? reCopy : re3, strCopy);
    if (sticky) {
      if (match2) {
        match2.input = stringSlice$2(match2.input, charsAdded);
        match2[0] = stringSlice$2(match2[0], charsAdded);
        match2.index = re3.lastIndex;
        re3.lastIndex += match2[0].length;
      } else
        re3.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match2) {
      re3.lastIndex = re3.global ? match2.index + match2[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match2 && match2.length > 1) {
      call$2(nativeReplace, match2[0], reCopy, function() {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === void 0)
            match2[i] = void 0;
        }
      });
    }
    if (match2 && groups2) {
      match2.groups = object = create3(null);
      for (i = 0; i < groups2.length; i++) {
        group2 = groups2[i];
        object[group2[0]] = match2[group2[1]];
      }
    }
    return match2;
  };
}
var regexpExec$2 = patchedExec;
var $$1 = _export;
var exec = regexpExec$2;
$$1({ target: "RegExp", proto: true, forced: /./.exec !== exec }, {
  exec
});
var uncurryThis$4 = functionUncurryThisClause;
var defineBuiltIn = defineBuiltIn$9;
var regexpExec$1 = regexpExec$2;
var fails$1 = fails$u;
var wellKnownSymbol$1 = wellKnownSymbol$m;
var createNonEnumerableProperty = createNonEnumerableProperty$6;
var SPECIES = wellKnownSymbol$1("species");
var RegExpPrototype = RegExp.prototype;
var fixRegexpWellKnownSymbolLogic = function(KEY, exec2, FORCED2, SHAM) {
  var SYMBOL = wellKnownSymbol$1(KEY);
  var DELEGATES_TO_SYMBOL = !fails$1(function() {
    var O = {};
    O[SYMBOL] = function() {
      return 7;
    };
    return ""[KEY](O) !== 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$1(function() {
    var execCalled = false;
    var re3 = /a/;
    if (KEY === "split") {
      re3 = {};
      re3.constructor = {};
      re3.constructor[SPECIES] = function() {
        return re3;
      };
      re3.flags = "";
      re3[SYMBOL] = /./[SYMBOL];
    }
    re3.exec = function() {
      execCalled = true;
      return null;
    };
    re3[SYMBOL]("");
    return !execCalled;
  });
  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED2) {
    var uncurriedNativeRegExpMethod = uncurryThis$4(/./[SYMBOL]);
    var methods = exec2(SYMBOL, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$4(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec$1 || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });
    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }
  if (SHAM)
    createNonEnumerableProperty(RegExpPrototype[SYMBOL], "sham", true);
};
var charAt$1 = stringMultibyte.charAt;
var advanceStringIndex$1 = function(S, index2, unicode) {
  return index2 + (unicode ? charAt$1(S, index2).length : 1);
};
var uncurryThis$3 = functionUncurryThis;
var toObject = toObject$a;
var floor = Math.floor;
var charAt = uncurryThis$3("".charAt);
var replace = uncurryThis$3("".replace);
var stringSlice$1 = uncurryThis$3("".slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;
var getSubstitution$1 = function(matched, str, position2, captures, namedCaptures, replacement2) {
  var tailPos = position2 + matched.length;
  var m = captures.length;
  var symbols2 = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== void 0) {
    namedCaptures = toObject(namedCaptures);
    symbols2 = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement2, symbols2, function(match2, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case "$":
        return "$";
      case "&":
        return matched;
      case "`":
        return stringSlice$1(str, 0, position2);
      case "'":
        return stringSlice$1(str, tailPos);
      case "<":
        capture = namedCaptures[stringSlice$1(ch, 1, -1)];
        break;
      default:
        var n = +ch;
        if (n === 0)
          return match2;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0)
            return match2;
          if (f <= m)
            return captures[f - 1] === void 0 ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match2;
        }
        capture = captures[n - 1];
    }
    return capture === void 0 ? "" : capture;
  });
};
var call$1 = functionCall;
var anObject$1 = anObject$f;
var isCallable$1 = isCallable$o;
var classof = classofRaw$2;
var regexpExec = regexpExec$2;
var $TypeError = TypeError;
var regexpExecAbstract = function(R, S) {
  var exec2 = R.exec;
  if (isCallable$1(exec2)) {
    var result = call$1(exec2, R, S);
    if (result !== null)
      anObject$1(result);
    return result;
  }
  if (classof(R) === "RegExp")
    return call$1(regexpExec, R, S);
  throw new $TypeError("RegExp#exec called on incompatible receiver");
};
var apply = functionApply;
var call = functionCall;
var uncurryThis$2 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var fails = fails$u;
var anObject = anObject$f;
var isCallable = isCallable$o;
var isNullOrUndefined = isNullOrUndefined$8;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var toLength = toLength$3;
var toString$1 = toString$9;
var requireObjectCoercible$1 = requireObjectCoercible$7;
var advanceStringIndex = advanceStringIndex$1;
var getMethod = getMethod$4;
var getSubstitution = getSubstitution$1;
var regExpExec$1 = regexpExecAbstract;
var wellKnownSymbol = wellKnownSymbol$m;
var REPLACE = wellKnownSymbol("replace");
var max5 = Math.max;
var min4 = Math.min;
var concat2 = uncurryThis$2([].concat);
var push = uncurryThis$2([].push);
var stringIndexOf$1 = uncurryThis$2("".indexOf);
var stringSlice = uncurryThis$2("".slice);
var maybeToString = function(it) {
  return it === void 0 ? it : String(it);
};
var REPLACE_KEEPS_$0 = function() {
  return "a".replace(/./, "$0") === "$0";
}();
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
  if (/./[REPLACE]) {
    return /./[REPLACE]("a", "$0") === "";
  }
  return false;
}();
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
  var re3 = /./;
  re3.exec = function() {
    var result = [];
    result.groups = { a: "7" };
    return result;
  };
  return "".replace(re3, "$<a>") !== "7";
});
fixRegExpWellKnownSymbolLogic("replace", function(_, nativeReplace2, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace2(searchValue, replaceValue) {
      var O = requireObjectCoercible$1(this);
      var replacer = isNullOrUndefined(searchValue) ? void 0 : getMethod(searchValue, REPLACE);
      return replacer ? call(replacer, searchValue, O, replaceValue) : call(nativeReplace2, toString$1(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function(string, replaceValue) {
      var rx = anObject(this);
      var S = toString$1(string);
      if (typeof replaceValue == "string" && stringIndexOf$1(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf$1(replaceValue, "$<") === -1) {
        var res = maybeCallNative(nativeReplace2, rx, S, replaceValue);
        if (res.done)
          return res.value;
      }
      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace)
        replaceValue = toString$1(replaceValue);
      var global2 = rx.global;
      var fullUnicode;
      if (global2) {
        fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      var result;
      while (true) {
        result = regExpExec$1(rx, S);
        if (result === null)
          break;
        push(results, result);
        if (!global2)
          break;
        var matchStr = toString$1(result[0]);
        if (matchStr === "")
          rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = "";
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = toString$1(result[0]);
        var position2 = max5(min4(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        var replacement2;
        for (var j = 1; j < result.length; j++)
          push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat2([matched], captures, position2, S);
          if (namedCaptures !== void 0)
            push(replacerArgs, namedCaptures);
          replacement2 = toString$1(apply(replaceValue, void 0, replacerArgs));
        } else {
          replacement2 = getSubstitution(matched, S, position2, captures, namedCaptures, replaceValue);
        }
        if (position2 >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position2) + replacement2;
          nextSourcePosition = position2 + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);
var _DataFetcher_instances;
var _DataFetcher_fetch;
var DataFetcher = function() {
  function DataFetcher2(calendar2) {
    _classCallCheck(this, DataFetcher2);
    _DataFetcher_instances.add(this);
    this.calendar = calendar2;
  }
  _createClass(DataFetcher2, [{
    key: "getDatas",
    value: function getDatas(source, startTimestamp, endTimestamp) {
      return __awaiter(this, void 0, void 0, _regeneratorRuntime().mark(function _callee() {
        var d;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1)
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof source === "string" && source.length > 0)) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return", __classPrivateFieldGet(this, _DataFetcher_instances, "m", _DataFetcher_fetch).call(this, source, startTimestamp, endTimestamp));
              case 2:
                d = [];
                if (Array.isArray(source)) {
                  d = source;
                }
                return _context.abrupt("return", new Promise(function(resolve2) {
                  resolve2(d);
                }));
              case 5:
              case "end":
                return _context.stop();
            }
        }, _callee, this);
      }));
    }
  }, {
    key: "parseURI",
    value: function parseURI(str, startTimestamp, endTimestamp) {
      var _this = this;
      var newUri = str.replace(/\{\{start=(.*?)\}\}/g, function(_, format2) {
        return (
          // eslint-disable-next-line implicit-arrow-linebreak
          _this.calendar.dateHelper.date(startTimestamp).format(format2)
        );
      });
      newUri = newUri.replace(/\{\{end=(.*?)\}\}/g, function(_, format2) {
        return (
          // eslint-disable-next-line implicit-arrow-linebreak
          _this.calendar.dateHelper.date(endTimestamp).format(format2)
        );
      });
      return newUri;
    }
  }]);
  return DataFetcher2;
}();
_DataFetcher_instances = /* @__PURE__ */ new WeakSet(), _DataFetcher_fetch = function _DataFetcher_fetch2(source, startTimestamp, endTimestamp) {
  var _this$calendar$option = this.calendar.options.options.data, type2 = _this$calendar$option.type, requestInit = _this$calendar$option.requestInit;
  var url = this.parseURI(source, startTimestamp, endTimestamp);
  switch (type2) {
    case "json":
      return json_default(url, requestInit);
    case "csv":
      return csv2(url, requestInit);
    case "tsv":
      return dsv("	", url, requestInit);
    case "txt":
      return text_default3(url, requestInit);
    default:
      return new Promise(function(resolve2) {
        resolve2([]);
      });
  }
};
var DESCRIPTORS = descriptors;
var FUNCTION_NAME_EXISTS = functionName.EXISTS;
var uncurryThis$1 = functionUncurryThis;
var defineBuiltInAccessor = defineBuiltInAccessor$3;
var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis$1(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis$1(nameRE.exec);
var NAME = "name";
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineBuiltInAccessor(FunctionPrototype, NAME, {
    configurable: true,
    get: function() {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return "";
      }
    }
  });
}
var dayjs_min = { exports: {} };
(function(module2, exports2) {
  !function(t, e) {
    module2.exports = e();
  }(commonjsGlobal, function() {
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s2 = "minute", u4 = "hour", a2 = "day", o = "week", c4 = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y3 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t4) {
      var e3 = ["th", "st", "nd", "rd"], n2 = t4 % 100;
      return "[" + t4 + (e3[(n2 - 20) % 10] || e3[n2] || e3[0]) + "]";
    } }, m = function(t4, e3, n2) {
      var r2 = String(t4);
      return !r2 || r2.length >= e3 ? t4 : "" + Array(e3 + 1 - r2.length).join(n2) + t4;
    }, v2 = { s: m, z: function(t4) {
      var e3 = -t4.utcOffset(), n2 = Math.abs(e3), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
      return (e3 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
    }, m: function t4(e3, n2) {
      if (e3.date() < n2.date())
        return -t4(n2, e3);
      var r2 = 12 * (n2.year() - e3.year()) + (n2.month() - e3.month()), i2 = e3.clone().add(r2, c4), s3 = n2 - i2 < 0, u5 = e3.clone().add(r2 + (s3 ? -1 : 1), c4);
      return +(-(r2 + (n2 - i2) / (s3 ? i2 - u5 : u5 - i2)) || 0);
    }, a: function(t4) {
      return t4 < 0 ? Math.ceil(t4) || 0 : Math.floor(t4);
    }, p: function(t4) {
      return { M: c4, y: h, w: o, d: a2, D: d, h: u4, m: s2, s: i, ms: r, Q: f }[t4] || String(t4 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t4) {
      return void 0 === t4;
    } }, g = "en", D3 = {};
    D3[g] = M2;
    var p = "$isDayjsObject", S = function(t4) {
      return t4 instanceof _ || !(!t4 || !t4[p]);
    }, w = function t4(e3, n2, r2) {
      var i2;
      if (!e3)
        return g;
      if ("string" == typeof e3) {
        var s3 = e3.toLowerCase();
        D3[s3] && (i2 = s3), n2 && (D3[s3] = n2, i2 = s3);
        var u5 = e3.split("-");
        if (!i2 && u5.length > 1)
          return t4(u5[0]);
      } else {
        var a3 = e3.name;
        D3[a3] = e3, i2 = a3;
      }
      return !r2 && i2 && (g = i2), i2 || !r2 && g;
    }, O = function(t4, e3) {
      if (S(t4))
        return t4.clone();
      var n2 = "object" == typeof e3 ? e3 : {};
      return n2.date = t4, n2.args = arguments, new _(n2);
    }, b = v2;
    b.l = w, b.i = S, b.w = function(t4, e3) {
      return O(t4, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
    };
    var _ = function() {
      function M3(t4) {
        this.$L = w(t4.locale, null, true), this.parse(t4), this.$x = this.$x || t4.x || {}, this[p] = true;
      }
      var m2 = M3.prototype;
      return m2.parse = function(t4) {
        this.$d = function(t5) {
          var e3 = t5.date, n2 = t5.utc;
          if (null === e3)
            return /* @__PURE__ */ new Date(NaN);
          if (b.u(e3))
            return /* @__PURE__ */ new Date();
          if (e3 instanceof Date)
            return new Date(e3);
          if ("string" == typeof e3 && !/Z$/i.test(e3)) {
            var r2 = e3.match($2);
            if (r2) {
              var i2 = r2[2] - 1 || 0, s3 = (r2[7] || "0").substring(0, 3);
              return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s3)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s3);
            }
          }
          return new Date(e3);
        }(t4), this.init();
      }, m2.init = function() {
        var t4 = this.$d;
        this.$y = t4.getFullYear(), this.$M = t4.getMonth(), this.$D = t4.getDate(), this.$W = t4.getDay(), this.$H = t4.getHours(), this.$m = t4.getMinutes(), this.$s = t4.getSeconds(), this.$ms = t4.getMilliseconds();
      }, m2.$utils = function() {
        return b;
      }, m2.isValid = function() {
        return !(this.$d.toString() === l);
      }, m2.isSame = function(t4, e3) {
        var n2 = O(t4);
        return this.startOf(e3) <= n2 && n2 <= this.endOf(e3);
      }, m2.isAfter = function(t4, e3) {
        return O(t4) < this.startOf(e3);
      }, m2.isBefore = function(t4, e3) {
        return this.endOf(e3) < O(t4);
      }, m2.$g = function(t4, e3, n2) {
        return b.u(t4) ? this[e3] : this.set(n2, t4);
      }, m2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m2.valueOf = function() {
        return this.$d.getTime();
      }, m2.startOf = function(t4, e3) {
        var n2 = this, r2 = !!b.u(e3) || e3, f2 = b.p(t4), l2 = function(t5, e4) {
          var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e4, t5) : new Date(n2.$y, e4, t5), n2);
          return r2 ? i2 : i2.endOf(a2);
        }, $3 = function(t5, e4) {
          return b.w(n2.toDate()[t5].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n2);
        }, y4 = this.$W, M4 = this.$M, m3 = this.$D, v3 = "set" + (this.$u ? "UTC" : "");
        switch (f2) {
          case h:
            return r2 ? l2(1, 0) : l2(31, 11);
          case c4:
            return r2 ? l2(1, M4) : l2(0, M4 + 1);
          case o:
            var g2 = this.$locale().weekStart || 0, D4 = (y4 < g2 ? y4 + 7 : y4) - g2;
            return l2(r2 ? m3 - D4 : m3 + (6 - D4), M4);
          case a2:
          case d:
            return $3(v3 + "Hours", 0);
          case u4:
            return $3(v3 + "Minutes", 1);
          case s2:
            return $3(v3 + "Seconds", 2);
          case i:
            return $3(v3 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m2.endOf = function(t4) {
        return this.startOf(t4, false);
      }, m2.$set = function(t4, e3) {
        var n2, o2 = b.p(t4), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a2] = f2 + "Date", n2[d] = f2 + "Date", n2[c4] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u4] = f2 + "Hours", n2[s2] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $3 = o2 === a2 ? this.$D + (e3 - this.$W) : e3;
        if (o2 === c4 || o2 === h) {
          var y4 = this.clone().set(d, 1);
          y4.$d[l2]($3), y4.init(), this.$d = y4.set(d, Math.min(this.$D, y4.daysInMonth())).$d;
        } else
          l2 && this.$d[l2]($3);
        return this.init(), this;
      }, m2.set = function(t4, e3) {
        return this.clone().$set(t4, e3);
      }, m2.get = function(t4) {
        return this[b.p(t4)]();
      }, m2.add = function(r2, f2) {
        var d2, l2 = this;
        r2 = Number(r2);
        var $3 = b.p(f2), y4 = function(t4) {
          var e3 = O(l2);
          return b.w(e3.date(e3.date() + Math.round(t4 * r2)), l2);
        };
        if ($3 === c4)
          return this.set(c4, this.$M + r2);
        if ($3 === h)
          return this.set(h, this.$y + r2);
        if ($3 === a2)
          return y4(1);
        if ($3 === o)
          return y4(7);
        var M4 = (d2 = {}, d2[s2] = e, d2[u4] = n, d2[i] = t, d2)[$3] || 1, m3 = this.$d.getTime() + r2 * M4;
        return b.w(m3, this);
      }, m2.subtract = function(t4, e3) {
        return this.add(-1 * t4, e3);
      }, m2.format = function(t4) {
        var e3 = this, n2 = this.$locale();
        if (!this.isValid())
          return n2.invalidDate || l;
        var r2 = t4 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s3 = this.$H, u5 = this.$m, a3 = this.$M, o2 = n2.weekdays, c5 = n2.months, f2 = n2.meridiem, h2 = function(t5, n3, i3, s4) {
          return t5 && (t5[n3] || t5(e3, r2)) || i3[n3].slice(0, s4);
        }, d2 = function(t5) {
          return b.s(s3 % 12 || 12, t5, "0");
        }, $3 = f2 || function(t5, e4, n3) {
          var r3 = t5 < 12 ? "AM" : "PM";
          return n3 ? r3.toLowerCase() : r3;
        };
        return r2.replace(y3, function(t5, r3) {
          return r3 || function(t6) {
            switch (t6) {
              case "YY":
                return String(e3.$y).slice(-2);
              case "YYYY":
                return b.s(e3.$y, 4, "0");
              case "M":
                return a3 + 1;
              case "MM":
                return b.s(a3 + 1, 2, "0");
              case "MMM":
                return h2(n2.monthsShort, a3, c5, 3);
              case "MMMM":
                return h2(c5, a3);
              case "D":
                return e3.$D;
              case "DD":
                return b.s(e3.$D, 2, "0");
              case "d":
                return String(e3.$W);
              case "dd":
                return h2(n2.weekdaysMin, e3.$W, o2, 2);
              case "ddd":
                return h2(n2.weekdaysShort, e3.$W, o2, 3);
              case "dddd":
                return o2[e3.$W];
              case "H":
                return String(s3);
              case "HH":
                return b.s(s3, 2, "0");
              case "h":
                return d2(1);
              case "hh":
                return d2(2);
              case "a":
                return $3(s3, u5, true);
              case "A":
                return $3(s3, u5, false);
              case "m":
                return String(u5);
              case "mm":
                return b.s(u5, 2, "0");
              case "s":
                return String(e3.$s);
              case "ss":
                return b.s(e3.$s, 2, "0");
              case "SSS":
                return b.s(e3.$ms, 3, "0");
              case "Z":
                return i2;
            }
            return null;
          }(t5) || i2.replace(":", "");
        });
      }, m2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m2.diff = function(r2, d2, l2) {
        var $3, y4 = this, M4 = b.p(d2), m3 = O(r2), v3 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D4 = function() {
          return b.m(y4, m3);
        };
        switch (M4) {
          case h:
            $3 = D4() / 12;
            break;
          case c4:
            $3 = D4();
            break;
          case f:
            $3 = D4() / 3;
            break;
          case o:
            $3 = (g2 - v3) / 6048e5;
            break;
          case a2:
            $3 = (g2 - v3) / 864e5;
            break;
          case u4:
            $3 = g2 / n;
            break;
          case s2:
            $3 = g2 / e;
            break;
          case i:
            $3 = g2 / t;
            break;
          default:
            $3 = g2;
        }
        return l2 ? $3 : b.a($3);
      }, m2.daysInMonth = function() {
        return this.endOf(c4).$D;
      }, m2.$locale = function() {
        return D3[this.$L];
      }, m2.locale = function(t4, e3) {
        if (!t4)
          return this.$L;
        var n2 = this.clone(), r2 = w(t4, e3, true);
        return r2 && (n2.$L = r2), n2;
      }, m2.clone = function() {
        return b.w(this.$d, this);
      }, m2.toDate = function() {
        return new Date(this.valueOf());
      }, m2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m2.toISOString = function() {
        return this.$d.toISOString();
      }, m2.toString = function() {
        return this.$d.toUTCString();
      }, M3;
    }(), k2 = _.prototype;
    return O.prototype = k2, [["$ms", r], ["$s", i], ["$m", s2], ["$H", u4], ["$W", a2], ["$M", c4], ["$y", h], ["$D", d]].forEach(function(t4) {
      k2[t4[1]] = function(e3) {
        return this.$g(e3, t4[0], t4[1]);
      };
    }), O.extend = function(t4, e3) {
      return t4.$i || (t4(e3, _, O), t4.$i = true), O;
    }, O.locale = w, O.isDayjs = S, O.unix = function(t4) {
      return O(1e3 * t4);
    }, O.en = D3[g], O.Ls = D3, O.p = {}, O;
  });
})(dayjs_min);
var dayjs_minExports = dayjs_min.exports;
var dayjs = getDefaultExportFromCjs(dayjs_minExports);
var weekOfYear$1 = { exports: {} };
(function(module2, exports2) {
  !function(e, t) {
    module2.exports = t();
  }(commonjsGlobal, function() {
    var e = "week", t = "year";
    return function(i, n, r) {
      var f = n.prototype;
      f.week = function(i2) {
        if (void 0 === i2 && (i2 = null), null !== i2)
          return this.add(7 * (i2 - this.week()), "day");
        var n2 = this.$locale().yearStart || 1;
        if (11 === this.month() && this.date() > 25) {
          var f2 = r(this).startOf(t).add(1, t).date(n2), s2 = r(this).endOf(e);
          if (f2.isBefore(s2))
            return 1;
        }
        var a2 = r(this).startOf(t).date(n2).startOf(e).subtract(1, "millisecond"), o = this.diff(a2, e, true);
        return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
      }, f.weeks = function(e3) {
        return void 0 === e3 && (e3 = null), this.week(e3);
      };
    };
  });
})(weekOfYear$1);
var weekOfYearExports = weekOfYear$1.exports;
var weekOfYear = getDefaultExportFromCjs(weekOfYearExports);
var dayOfYear$1 = { exports: {} };
(function(module2, exports2) {
  !function(e, t) {
    module2.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t, n) {
      t.prototype.dayOfYear = function(e3) {
        var t4 = Math.round((n(this).startOf("day") - n(this).startOf("year")) / 864e5) + 1;
        return null == e3 ? t4 : this.add(e3 - t4, "day");
      };
    };
  });
})(dayOfYear$1);
var dayOfYearExports = dayOfYear$1.exports;
var dayOfYear = getDefaultExportFromCjs(dayOfYearExports);
var weekday$1 = { exports: {} };
(function(module2, exports2) {
  !function(e, t) {
    module2.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t) {
      t.prototype.weekday = function(e3) {
        var t4 = this.$locale().weekStart || 0, i = this.$W, n = (i < t4 ? i + 7 : i) - t4;
        return this.$utils().u(e3) ? n : this.subtract(n, "day").add(e3, "day");
      };
    };
  });
})(weekday$1);
var weekdayExports = weekday$1.exports;
var weekday = getDefaultExportFromCjs(weekdayExports);
var minMax$1 = { exports: {} };
(function(module2, exports2) {
  !function(e, n) {
    module2.exports = n();
  }(commonjsGlobal, function() {
    return function(e, n, t) {
      var i = function(e3, n2) {
        if (!n2 || !n2.length || 1 === n2.length && !n2[0] || 1 === n2.length && Array.isArray(n2[0]) && !n2[0].length)
          return null;
        var t4;
        1 === n2.length && n2[0].length > 0 && (n2 = n2[0]);
        t4 = (n2 = n2.filter(function(e4) {
          return e4;
        }))[0];
        for (var i2 = 1; i2 < n2.length; i2 += 1)
          n2[i2].isValid() && !n2[i2][e3](t4) || (t4 = n2[i2]);
        return t4;
      };
      t.max = function() {
        var e3 = [].slice.call(arguments, 0);
        return i("isAfter", e3);
      }, t.min = function() {
        var e3 = [].slice.call(arguments, 0);
        return i("isBefore", e3);
      };
    };
  });
})(minMax$1);
var minMaxExports = minMax$1.exports;
var minMax = getDefaultExportFromCjs(minMaxExports);
var isoWeeksInYear$1 = { exports: {} };
(function(module2, exports2) {
  !function(e, n) {
    module2.exports = n();
  }(commonjsGlobal, function() {
    return function(e, n) {
      n.prototype.isoWeeksInYear = function() {
        var e3 = this.isLeapYear(), n2 = this.endOf("y").day();
        return 4 === n2 || e3 && 5 === n2 ? 53 : 52;
      };
    };
  });
})(isoWeeksInYear$1);
var isoWeeksInYearExports = isoWeeksInYear$1.exports;
var isoWeeksInYear = getDefaultExportFromCjs(isoWeeksInYearExports);
var isoWeek$1 = { exports: {} };
(function(module2, exports2) {
  !function(e, t) {
    module2.exports = t();
  }(commonjsGlobal, function() {
    var e = "day";
    return function(t, i, s2) {
      var a2 = function(t4) {
        return t4.add(4 - t4.isoWeekday(), e);
      }, d = i.prototype;
      d.isoWeekYear = function() {
        return a2(this).year();
      }, d.isoWeek = function(t4) {
        if (!this.$utils().u(t4))
          return this.add(7 * (t4 - this.isoWeek()), e);
        var i2, d2, n2, o, r = a2(this), u4 = (i2 = this.isoWeekYear(), d2 = this.$u, n2 = (d2 ? s2.utc : s2)().year(i2).startOf("year"), o = 4 - n2.isoWeekday(), n2.isoWeekday() > 4 && (o += 7), n2.add(o, e));
        return r.diff(u4, "week") + 1;
      }, d.isoWeekday = function(e3) {
        return this.$utils().u(e3) ? this.day() || 7 : this.day(this.day() % 7 ? e3 : e3 - 7);
      };
      var n = d.startOf;
      d.startOf = function(e3, t4) {
        var i2 = this.$utils(), s3 = !!i2.u(t4) || t4;
        return "isoweek" === i2.p(e3) ? s3 ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : n.bind(this)(e3, t4);
      };
    };
  });
})(isoWeek$1);
var isoWeekExports = isoWeek$1.exports;
var isoWeek = getDefaultExportFromCjs(isoWeekExports);
var isLeapYear$1 = { exports: {} };
(function(module2, exports2) {
  !function(e, t) {
    module2.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t) {
      t.prototype.isLeapYear = function() {
        return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
      };
    };
  });
})(isLeapYear$1);
var isLeapYearExports = isLeapYear$1.exports;
var isLeapYear = getDefaultExportFromCjs(isLeapYearExports);
var advancedFormat$1 = { exports: {} };
(function(module2, exports2) {
  !function(e, t) {
    module2.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t) {
      var r = t.prototype, n = r.format;
      r.format = function(e3) {
        var t4 = this, r2 = this.$locale();
        if (!this.isValid())
          return n.bind(this)(e3);
        var s2 = this.$utils(), a2 = (e3 || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(e4) {
          switch (e4) {
            case "Q":
              return Math.ceil((t4.$M + 1) / 3);
            case "Do":
              return r2.ordinal(t4.$D);
            case "gggg":
              return t4.weekYear();
            case "GGGG":
              return t4.isoWeekYear();
            case "wo":
              return r2.ordinal(t4.week(), "W");
            case "w":
            case "ww":
              return s2.s(t4.week(), "w" === e4 ? 1 : 2, "0");
            case "W":
            case "WW":
              return s2.s(t4.isoWeek(), "W" === e4 ? 1 : 2, "0");
            case "k":
            case "kk":
              return s2.s(String(0 === t4.$H ? 24 : t4.$H), "k" === e4 ? 1 : 2, "0");
            case "X":
              return Math.floor(t4.$d.getTime() / 1e3);
            case "x":
              return t4.$d.getTime();
            case "z":
              return "[" + t4.offsetName() + "]";
            case "zzz":
              return "[" + t4.offsetName("long") + "]";
            default:
              return e4;
          }
        });
        return n.bind(this)(a2);
      };
    };
  });
})(advancedFormat$1);
var advancedFormatExports = advancedFormat$1.exports;
var advancedFormat = getDefaultExportFromCjs(advancedFormatExports);
var utc$1 = { exports: {} };
(function(module2, exports2) {
  !function(t, i) {
    module2.exports = i();
  }(commonjsGlobal, function() {
    var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
    return function(s2, f, n) {
      var u4 = f.prototype;
      n.utc = function(t4) {
        var i2 = { date: t4, utc: true, args: arguments };
        return new f(i2);
      }, u4.utc = function(i2) {
        var e3 = n(this.toDate(), { locale: this.$L, utc: true });
        return i2 ? e3.add(this.utcOffset(), t) : e3;
      }, u4.local = function() {
        return n(this.toDate(), { locale: this.$L, utc: false });
      };
      var o = u4.parse;
      u4.parse = function(t4) {
        t4.utc && (this.$u = true), this.$utils().u(t4.$offset) || (this.$offset = t4.$offset), o.call(this, t4);
      };
      var r = u4.init;
      u4.init = function() {
        if (this.$u) {
          var t4 = this.$d;
          this.$y = t4.getUTCFullYear(), this.$M = t4.getUTCMonth(), this.$D = t4.getUTCDate(), this.$W = t4.getUTCDay(), this.$H = t4.getUTCHours(), this.$m = t4.getUTCMinutes(), this.$s = t4.getUTCSeconds(), this.$ms = t4.getUTCMilliseconds();
        } else
          r.call(this);
      };
      var a2 = u4.utcOffset;
      u4.utcOffset = function(s3, f2) {
        var n2 = this.$utils().u;
        if (n2(s3))
          return this.$u ? 0 : n2(this.$offset) ? a2.call(this) : this.$offset;
        if ("string" == typeof s3 && (s3 = function(t4) {
          void 0 === t4 && (t4 = "");
          var s4 = t4.match(i);
          if (!s4)
            return null;
          var f3 = ("" + s4[0]).match(e) || ["-", 0, 0], n3 = f3[0], u6 = 60 * +f3[1] + +f3[2];
          return 0 === u6 ? 0 : "+" === n3 ? u6 : -u6;
        }(s3), null === s3))
          return this;
        var u5 = Math.abs(s3) <= 16 ? 60 * s3 : s3, o2 = this;
        if (f2)
          return o2.$offset = u5, o2.$u = 0 === s3, o2;
        if (0 !== s3) {
          var r2 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (o2 = this.local().add(u5 + r2, t)).$offset = u5, o2.$x.$localOffset = r2;
        } else
          o2 = this.utc();
        return o2;
      };
      var h = u4.format;
      u4.format = function(t4) {
        var i2 = t4 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return h.call(this, i2);
      }, u4.valueOf = function() {
        var t4 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * t4;
      }, u4.isUTC = function() {
        return !!this.$u;
      }, u4.toISOString = function() {
        return this.toDate().toISOString();
      }, u4.toString = function() {
        return this.toDate().toUTCString();
      };
      var l = u4.toDate;
      u4.toDate = function(t4) {
        return "s" === t4 && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
      };
      var c4 = u4.diff;
      u4.diff = function(t4, i2, e3) {
        if (t4 && this.$u === t4.$u)
          return c4.call(this, t4, i2, e3);
        var s3 = this.local(), f2 = n(t4).local();
        return c4.call(s3, f2, i2, e3);
      };
    };
  });
})(utc$1);
var utcExports = utc$1.exports;
var utc = getDefaultExportFromCjs(utcExports);
var timezone$1 = { exports: {} };
(function(module2, exports2) {
  !function(t, e) {
    module2.exports = e();
  }(commonjsGlobal, function() {
    var t = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, e = {};
    return function(n, i, o) {
      var r, a2 = function(t4, n2, i2) {
        void 0 === i2 && (i2 = {});
        var o2 = new Date(t4), r2 = function(t5, n3) {
          void 0 === n3 && (n3 = {});
          var i3 = n3.timeZoneName || "short", o3 = t5 + "|" + i3, r3 = e[o3];
          return r3 || (r3 = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: t5, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: i3 }), e[o3] = r3), r3;
        }(n2, i2);
        return r2.formatToParts(o2);
      }, u4 = function(e3, n2) {
        for (var i2 = a2(e3, n2), r2 = [], u5 = 0; u5 < i2.length; u5 += 1) {
          var f2 = i2[u5], s3 = f2.type, m = f2.value, c4 = t[s3];
          c4 >= 0 && (r2[c4] = parseInt(m, 10));
        }
        var d = r2[3], l = 24 === d ? 0 : d, h = r2[0] + "-" + r2[1] + "-" + r2[2] + " " + l + ":" + r2[4] + ":" + r2[5] + ":000", v2 = +e3;
        return (o.utc(h).valueOf() - (v2 -= v2 % 1e3)) / 6e4;
      }, f = i.prototype;
      f.tz = function(t4, e3) {
        void 0 === t4 && (t4 = r);
        var n2 = this.utcOffset(), i2 = this.toDate(), a3 = i2.toLocaleString("en-US", { timeZone: t4 }), u5 = Math.round((i2 - new Date(a3)) / 1e3 / 60), f2 = o(a3, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(i2.getTimezoneOffset() / 15) - u5, true);
        if (e3) {
          var s3 = f2.utcOffset();
          f2 = f2.add(n2 - s3, "minute");
        }
        return f2.$x.$timezone = t4, f2;
      }, f.offsetName = function(t4) {
        var e3 = this.$x.$timezone || o.tz.guess(), n2 = a2(this.valueOf(), e3, { timeZoneName: t4 }).find(function(t5) {
          return "timezonename" === t5.type.toLowerCase();
        });
        return n2 && n2.value;
      };
      var s2 = f.startOf;
      f.startOf = function(t4, e3) {
        if (!this.$x || !this.$x.$timezone)
          return s2.call(this, t4, e3);
        var n2 = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
        return s2.call(n2, t4, e3).tz(this.$x.$timezone, true);
      }, o.tz = function(t4, e3, n2) {
        var i2 = n2 && e3, a3 = n2 || e3 || r, f2 = u4(+o(), a3);
        if ("string" != typeof t4)
          return o(t4).tz(a3);
        var s3 = function(t5, e4, n3) {
          var i3 = t5 - 60 * e4 * 1e3, o2 = u4(i3, n3);
          if (e4 === o2)
            return [i3, e4];
          var r2 = u4(i3 -= 60 * (o2 - e4) * 1e3, n3);
          return o2 === r2 ? [i3, o2] : [t5 - 60 * Math.min(o2, r2) * 1e3, Math.max(o2, r2)];
        }(o.utc(t4, i2).valueOf(), f2, a3), m = s3[0], c4 = s3[1], d = o(m).utcOffset(c4);
        return d.$x.$timezone = a3, d;
      }, o.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, o.tz.setDefault = function(t4) {
        r = t4;
      };
    };
  });
})(timezone$1);
var timezoneExports = timezone$1.exports;
var timezone = getDefaultExportFromCjs(timezoneExports);
var localeData$1 = { exports: {} };
(function(module2, exports2) {
  !function(n, e) {
    module2.exports = e();
  }(commonjsGlobal, function() {
    return function(n, e, t) {
      var r = e.prototype, o = function(n2) {
        return n2 && (n2.indexOf ? n2 : n2.s);
      }, u4 = function(n2, e3, t4, r2, u5) {
        var i2 = n2.name ? n2 : n2.$locale(), a3 = o(i2[e3]), s3 = o(i2[t4]), f = a3 || s3.map(function(n3) {
          return n3.slice(0, r2);
        });
        if (!u5)
          return f;
        var d = i2.weekStart;
        return f.map(function(n3, e4) {
          return f[(e4 + (d || 0)) % 7];
        });
      }, i = function() {
        return t.Ls[t.locale()];
      }, a2 = function(n2, e3) {
        return n2.formats[e3] || function(n3) {
          return n3.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(n4, e4, t4) {
            return e4 || t4.slice(1);
          });
        }(n2.formats[e3.toUpperCase()]);
      }, s2 = function() {
        var n2 = this;
        return { months: function(e3) {
          return e3 ? e3.format("MMMM") : u4(n2, "months");
        }, monthsShort: function(e3) {
          return e3 ? e3.format("MMM") : u4(n2, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return n2.$locale().weekStart || 0;
        }, weekdays: function(e3) {
          return e3 ? e3.format("dddd") : u4(n2, "weekdays");
        }, weekdaysMin: function(e3) {
          return e3 ? e3.format("dd") : u4(n2, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(e3) {
          return e3 ? e3.format("ddd") : u4(n2, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(e3) {
          return a2(n2.$locale(), e3);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      r.localeData = function() {
        return s2.bind(this)();
      }, t.localeData = function() {
        var n2 = i();
        return { firstDayOfWeek: function() {
          return n2.weekStart || 0;
        }, weekdays: function() {
          return t.weekdays();
        }, weekdaysShort: function() {
          return t.weekdaysShort();
        }, weekdaysMin: function() {
          return t.weekdaysMin();
        }, months: function() {
          return t.months();
        }, monthsShort: function() {
          return t.monthsShort();
        }, longDateFormat: function(e3) {
          return a2(n2, e3);
        }, meridiem: n2.meridiem, ordinal: n2.ordinal };
      }, t.months = function() {
        return u4(i(), "months");
      }, t.monthsShort = function() {
        return u4(i(), "monthsShort", "months", 3);
      }, t.weekdays = function(n2) {
        return u4(i(), "weekdays", null, null, n2);
      }, t.weekdaysShort = function(n2) {
        return u4(i(), "weekdaysShort", "weekdays", 3, n2);
      }, t.weekdaysMin = function(n2) {
        return u4(i(), "weekdaysMin", "weekdays", 2, n2);
      };
    };
  });
})(localeData$1);
var localeDataExports = localeData$1.exports;
var localeData = getDefaultExportFromCjs(localeDataExports);
var localizedFormat$1 = { exports: {} };
(function(module2, exports2) {
  !function(e, t) {
    module2.exports = t();
  }(commonjsGlobal, function() {
    var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(t, o, n) {
      var r = o.prototype, i = r.format;
      n.en.formats = e, r.format = function(t4) {
        void 0 === t4 && (t4 = "YYYY-MM-DDTHH:mm:ssZ");
        var o2 = this.$locale().formats, n2 = function(t5, o3) {
          return t5.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t6, n3, r2) {
            var i2 = r2 && r2.toUpperCase();
            return n3 || o3[r2] || e[r2] || o3[i2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e3, t7, o4) {
              return t7 || o4.slice(1);
            });
          });
        }(t4, void 0 === o2 ? {} : o2);
        return i.call(this, n2);
      };
    };
  });
})(localizedFormat$1);
var localizedFormatExports = localizedFormat$1.exports;
var localizedFormat = getDefaultExportFromCjs(localizedFormatExports);
var updateLocale$1 = { exports: {} };
(function(module2, exports2) {
  !function(e, n) {
    module2.exports = n();
  }(commonjsGlobal, function() {
    return function(e, n, t) {
      t.updateLocale = function(e3, n2) {
        var o = t.Ls[e3];
        if (o)
          return (n2 ? Object.keys(n2) : []).forEach(function(e4) {
            o[e4] = n2[e4];
          }), o;
      };
    };
  });
})(updateLocale$1);
var updateLocaleExports = updateLocale$1.exports;
var updateLocale = getDefaultExportFromCjs(updateLocaleExports);
dayjs.extend(weekOfYear);
dayjs.extend(isoWeeksInYear);
dayjs.extend(isoWeek);
dayjs.extend(isLeapYear);
dayjs.extend(dayOfYear);
dayjs.extend(weekday);
dayjs.extend(minMax);
dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localeData);
dayjs.extend(localizedFormat);
dayjs.extend(updateLocale);
var DEFAULT_LOCALE = "en";
var DateHelper = function() {
  function DateHelper2() {
    _classCallCheck(this, DateHelper2);
    var _a;
    this.locale = DEFAULT_LOCALE;
    this.timezone = dayjs.tz.guess();
    if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") {
      (_a = window).dayjs || (_a.dayjs = dayjs);
    }
  }
  _createClass(DateHelper2, [{
    key: "setup",
    value: function setup(_ref) {
      var options = _ref.options;
      return __awaiter(this, void 0, void 0, _regeneratorRuntime().mark(function _callee() {
        var userLocale, locale3;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1)
            switch (_context.prev = _context.next) {
              case 0:
                this.timezone = options.date.timezone || dayjs.tz.guess();
                userLocale = options.date.locale;
                if (!(typeof userLocale === "string" && userLocale !== DEFAULT_LOCALE)) {
                  _context.next = 17;
                  break;
                }
                if (!((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object")) {
                  _context.next = 12;
                  break;
                }
                _context.t0 = window["dayjs_locale_".concat(userLocale)];
                if (_context.t0) {
                  _context.next = 9;
                  break;
                }
                _context.next = 8;
                return this.loadBrowserLocale(userLocale);
              case 8:
                _context.t0 = _context.sent;
              case 9:
                locale3 = _context.t0;
                _context.next = 15;
                break;
              case 12:
                _context.next = 14;
                return this.loadNodeLocale(userLocale);
              case 14:
                locale3 = _context.sent;
              case 15:
                dayjs.locale(userLocale);
                this.locale = locale3;
              case 17:
                if (_typeof(userLocale) === "object") {
                  if (userLocale.hasOwnProperty("name")) {
                    dayjs.locale(userLocale.name, userLocale);
                    this.locale = userLocale;
                  } else {
                    this.locale = dayjs.updateLocale(DEFAULT_LOCALE, userLocale);
                  }
                }
              case 18:
              case "end":
                return _context.stop();
            }
        }, _callee, this);
      }));
    }
    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "extend",
    value: function extend2(dayjsPlugin) {
      return dayjs.extend(dayjsPlugin);
    }
    /**
     * Return the week number, relative to its month
     *
     * @param  {number|Date} d Date or timestamp in milliseconds
     * @returns {number} The week number, relative to the month [0-5]
     */
  }, {
    key: "getMonthWeekNumber",
    value: function getMonthWeekNumber(d) {
      var dayjsDate = this.date(d);
      var date2 = dayjsDate.startOf("day");
      var endOfWeek = dayjsDate.startOf("month").endOf("week");
      if (date2 <= endOfWeek) {
        return 1;
      }
      return Math.ceil(date2.diff(endOfWeek, "weeks", true)) + 1;
    }
    /**
     * Return the number of weeks in the given month
     *
     * As there is no fixed standard to specify which month a partial week should
     * belongs to, the ISO week date standard is used, where:
     * - the first week of the month should have at least 4 days
     *
     *  @see https://en.wikipedia.org/wiki/ISO_week_date
     *
     * @param  {Timestamp | dayjs.Dayjs} d Datejs object or timestamp
     * @return {number}         The number of weeks
     */
  }, {
    key: "getWeeksCountInMonth",
    value: function getWeeksCountInMonth(d) {
      var pivotDate = this.date(d);
      return this.getLastWeekOfMonth(pivotDate).diff(this.getFirstWeekOfMonth(pivotDate), "week") + 1;
    }
    /**
     * Return the start of the first week of the month
     *
     * @see getWeeksCountInMonth() about standard warning
     * @return {dayjs.Dayjs} A dayjs object representing the start of the
     * first week
     */
  }, {
    key: "getFirstWeekOfMonth",
    value: function getFirstWeekOfMonth(d) {
      var startOfMonth = this.date(d).startOf("month");
      var startOfFirstWeek = startOfMonth.startOf("week");
      if (startOfMonth.weekday() > 4) {
        startOfFirstWeek = startOfFirstWeek.add(1, "week");
      }
      return startOfFirstWeek;
    }
    /**
     * Return the end of the last week of the month
     *
     * @see getWeeksCountInMonth() about standard warning
     * @return {dayjs.Dayjs} A dayjs object representing the end of the last week
     */
  }, {
    key: "getLastWeekOfMonth",
    value: function getLastWeekOfMonth(d) {
      var endOfMonth = this.date(d).endOf("month");
      var endOfLastWeek = endOfMonth.endOf("week");
      if (endOfMonth.weekday() < 4) {
        endOfLastWeek = endOfLastWeek.subtract(1, "week");
      }
      return endOfLastWeek;
    }
  }, {
    key: "date",
    value: function date2() {
      var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Date();
      if (dayjs.isDayjs(d)) {
        return d;
      }
      return dayjs(d).tz(this.timezone).utcOffset(0).locale(this.locale);
    }
  }, {
    key: "format",
    value: function format2(timestamp, formatter) {
      if (typeof formatter === "function") {
        for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }
        return formatter.apply(void 0, [timestamp].concat(args));
      }
      if (typeof formatter === "string") {
        return this.date(timestamp).format(formatter);
      }
      return null;
    }
    /**
     * Return an array of time interval
     *
     * @param  {number|Date} date A random date included in the wanted interval
     * @param  {number|Date} range Length of the wanted interval, or a stop date.
     * @param  {boolean} range Whether the end date should be excluded
     *                         from the result
     * @returns {Array<number>} Array of unix timestamp, in milliseconds
     */
  }, {
    key: "intervals",
    value: function intervals(interval2, date2, range3) {
      var excludeEnd = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
      var start2 = this.date(date2);
      var end;
      if (typeof range3 === "number") {
        end = start2.add(range3, interval2);
      } else if (dayjs.isDayjs(range3)) {
        end = range3;
      } else {
        end = this.date(range3);
      }
      start2 = start2.startOf(interval2);
      end = end.startOf(interval2);
      var pivot = dayjs.min(start2, end);
      end = dayjs.max(start2, end);
      var result = [];
      if (!excludeEnd) {
        end = end.add(1, "second");
      }
      do {
        result.push(+pivot);
        pivot = pivot.add(1, interval2);
      } while (pivot < end);
      return result;
    }
    // this function will work cross-browser for loading scripts asynchronously
    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "loadBrowserLocale",
    value: function loadBrowserLocale(userLocale) {
      return new Promise(function(resolve2, reject2) {
        var s2 = document.createElement("script");
        s2.type = "text/javascript";
        s2.async = true;
        s2.src = "https://cdn.jsdelivr.net/npm/dayjs@1/locale/".concat(userLocale, ".js");
        s2.onerror = function(err) {
          reject2(err);
        };
        s2.onload = function() {
          resolve2(window["dayjs_locale_".concat(userLocale)]);
        };
        document.head.appendChild(s2);
      });
    }
    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "loadNodeLocale",
    value: function loadNodeLocale(userLocale) {
      return import("dayjs/locale/".concat(userLocale, ".js"));
    }
  }]);
  return DateHelper2;
}();
var $ = _export;
var uncurryThis = functionUncurryThis;
var notARegExp = notARegexp;
var requireObjectCoercible = requireObjectCoercible$7;
var toString3 = toString$9;
var correctIsRegExpLogic = correctIsRegexpLogic;
var stringIndexOf = uncurryThis("".indexOf);
$({ target: "String", proto: true, forced: !correctIsRegExpLogic("includes") }, {
  includes: function includes2(searchString) {
    return !!~stringIndexOf(
      toString3(requireObjectCoercible(this)),
      toString3(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : void 0
    );
  }
});
var ALLOWED_DATA_TYPES = ["json", "csv", "tsv", "txt"];
function validate(templateCollection, _ref) {
  var domain = _ref.domain, subDomain = _ref.subDomain, data2 = _ref.data;
  var domainType = domain.type;
  var subDomainType = subDomain.type;
  if (!templateCollection.has(domainType)) {
    throw new Error("'".concat(domainType, "' is not a valid domain type'"));
  }
  if (!templateCollection.has(subDomainType)) {
    throw new Error("'".concat(subDomainType, "' is not a valid subDomain type'"));
  }
  if (data2.type && !ALLOWED_DATA_TYPES.includes(data2.type)) {
    throw new Error("The data type '".concat(data2.type, "' is not valid data type"));
  }
  if (!(templateCollection.get(subDomainType).allowedDomainType || []).includes(domainType)) {
    throw new Error("The subDomain.type '".concat(subDomainType, "' can not be used together ") + "with the domain type ".concat(domainType));
  }
  return true;
}
var collection = collection$3;
var collectionStrong = collectionStrong$2;
collection("Set", function(init2) {
  return function Set2() {
    return init2(this, arguments.length ? arguments[0] : void 0);
  };
}, collectionStrong);
function createPlugin(Creator, calendar2) {
  return new Creator(calendar2);
}
function extractPluginName(PluginClass, options) {
  return "".concat(new PluginClass().name).concat((options === null || options === void 0 ? void 0 : options.key) || "");
}
var PluginManager = function() {
  function PluginManager2(calendar2) {
    _classCallCheck(this, PluginManager2);
    this.calendar = calendar2;
    this.settings = /* @__PURE__ */ new Map();
    this.plugins = /* @__PURE__ */ new Map();
    this.pendingPaint = /* @__PURE__ */ new Set();
  }
  _createClass(PluginManager2, [{
    key: "add",
    value: function add2(plugins) {
      var _this = this;
      plugins.forEach(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), PluginClass = _ref2[0], pluginOptions = _ref2[1];
        var name = extractPluginName(PluginClass, pluginOptions);
        var existingPlugin = _this.plugins.get(name);
        if (existingPlugin && _this.settings.get(name) && isEqual(_this.settings.get(name).options, pluginOptions)) {
          return;
        }
        _this.settings.set(name, {
          options: pluginOptions,
          dirty: true
        });
        if (!_this.plugins.has(name)) {
          _this.plugins.set(name, createPlugin(PluginClass, _this.calendar));
        }
        _this.pendingPaint.add(_this.plugins.get(name));
      });
    }
  }, {
    key: "setupAll",
    value: function setupAll() {
      var _this2 = this;
      this.plugins.forEach(function(pluginInstance, name) {
        var settings = _this2.settings.get(name);
        if (typeof settings !== "undefined") {
          if (settings.dirty) {
            pluginInstance.setup(settings.options);
            settings.dirty = false;
            _this2.settings.set(name, settings);
          }
        }
      });
    }
  }, {
    key: "paintAll",
    value: function paintAll() {
      return Array.from(this.pendingPaint.values()).map(function(p) {
        return p.paint();
      });
    }
  }, {
    key: "destroyAll",
    value: function destroyAll() {
      return this.allPlugins().map(function(p) {
        return p.destroy();
      });
    }
  }, {
    key: "getFromPosition",
    value: function getFromPosition(position2) {
      return this.allPlugins().filter(function(plugin) {
        var _a;
        return ((_a = plugin.options) === null || _a === void 0 ? void 0 : _a.position) === position2;
      });
    }
  }, {
    key: "getHeightFromPosition",
    value: function getHeightFromPosition(position2) {
      return this.getFromPosition(position2).map(function(d) {
        return d.options.dimensions.height;
      }).reduce(function(a2, b) {
        return a2 + b;
      }, 0);
    }
  }, {
    key: "getWidthFromPosition",
    value: function getWidthFromPosition(position2) {
      return this.getFromPosition(position2).map(function(d) {
        return d.options.dimensions.width;
      }).reduce(function(a2, b) {
        return a2 + b;
      }, 0);
    }
  }, {
    key: "allPlugins",
    value: function allPlugins() {
      return Array.from(this.plugins.values());
    }
  }]);
  return PluginManager2;
}();
var VERSION = "4.2.4";
var minuteTemplate = function minuteTemplate2(DateHelper2) {
  var COLUMNS_COUNT = 10;
  var ROWS_COUNT = 6;
  var ALLOWED_DOMAIN_TYPE = ["day", "hour"];
  return {
    name: "minute",
    allowedDomainType: ALLOWED_DOMAIN_TYPE,
    rowsCount: function rowsCount() {
      return COLUMNS_COUNT;
    },
    columnsCount: function columnsCount() {
      return ROWS_COUNT;
    },
    mapping: function mapping(startTimestamp, endTimestamp) {
      return (
        // eslint-disable-next-line implicit-arrow-linebreak
        DateHelper2.intervals("minute", startTimestamp, DateHelper2.date(endTimestamp)).map(function(ts, index2) {
          return {
            t: ts,
            x: Math.floor(index2 / COLUMNS_COUNT),
            y: index2 % COLUMNS_COUNT
          };
        })
      );
    },
    extractUnit: function extractUnit(ts) {
      return DateHelper2.date(ts).startOf("minute").valueOf();
    }
  };
};
var hourTemplate = function hourTemplate2(DateHelper2, _ref) {
  var domain = _ref.domain;
  var TOTAL_ITEMS = 24;
  var ROWS_COUNT = 6;
  var ALLOWED_DOMAIN_TYPE = ["month", "week", "day"];
  return {
    name: "hour",
    allowedDomainType: ALLOWED_DOMAIN_TYPE,
    rowsCount: function rowsCount() {
      return ROWS_COUNT;
    },
    columnsCount: function columnsCount(ts) {
      switch (domain.type) {
        case "week":
          return TOTAL_ITEMS / ROWS_COUNT * 7;
        case "month":
          return TOTAL_ITEMS / ROWS_COUNT * (domain.dynamicDimension ? DateHelper2.date(ts).daysInMonth() : 31);
        case "day":
        default:
          return TOTAL_ITEMS / ROWS_COUNT;
      }
    },
    mapping: function mapping(startTimestamp, endTimestamp) {
      return (
        // eslint-disable-next-line implicit-arrow-linebreak
        DateHelper2.intervals("hour", startTimestamp, DateHelper2.date(endTimestamp)).map(function(ts) {
          var date2 = DateHelper2.date(ts);
          var hour = date2.hour();
          var monthDate = date2.date();
          var baseX = Math.floor(hour / ROWS_COUNT);
          var columnOffset = TOTAL_ITEMS / ROWS_COUNT;
          if (domain.type === "month") {
            baseX += (monthDate - 1) * columnOffset;
          }
          if (domain.type === "week") {
            baseX += +date2.format("d") * columnOffset;
          }
          return {
            t: ts,
            x: baseX,
            y: Math.floor(hour % ROWS_COUNT)
          };
        })
      );
    },
    extractUnit: function extractUnit(ts) {
      return DateHelper2.date(ts).startOf("hour").valueOf();
    }
  };
};
var dayTemplate$2 = function dayTemplate(DateHelper2, _ref) {
  var domain = _ref.domain, verticalOrientation = _ref.verticalOrientation;
  var ROWS_COUNT = 7;
  var ALLOWED_DOMAIN_TYPE = ["year", "month", "week"];
  return {
    name: "day",
    allowedDomainType: ALLOWED_DOMAIN_TYPE,
    rowsCount: function rowsCount() {
      return domain.type === "week" ? 1 : ROWS_COUNT;
    },
    columnsCount: function columnsCount(ts) {
      switch (domain.type) {
        case "month":
          return Math.ceil(domain.dynamicDimension && !verticalOrientation ? DateHelper2.getMonthWeekNumber(DateHelper2.date(ts).endOf("month")) : 6);
        case "year":
          return Math.ceil(domain.dynamicDimension ? DateHelper2.date(ts).endOf("year").dayOfYear() / ROWS_COUNT : 54);
        case "week":
        default:
          return ROWS_COUNT;
      }
    },
    mapping: function mapping(startTimestamp, endTimestamp) {
      var weekNumber = 0;
      var x3 = -1;
      return DateHelper2.intervals("day", startTimestamp, DateHelper2.date(endTimestamp)).map(function(ts) {
        var date2 = DateHelper2.date(ts);
        switch (domain.type) {
          case "month":
            x3 = DateHelper2.getMonthWeekNumber(ts) - 1;
            break;
          case "year":
            if (weekNumber !== date2.week()) {
              weekNumber = date2.week();
              x3 += 1;
            }
            break;
          case "week":
            x3 = date2.weekday();
            break;
        }
        return {
          t: ts,
          x: x3,
          y: domain.type === "week" ? 0 : date2.weekday()
        };
      });
    },
    extractUnit: function extractUnit(ts) {
      return DateHelper2.date(ts).startOf("day").valueOf();
    }
  };
};
var dayTemplate$1 = function dayTemplate2(DateHelper2, _ref) {
  var domain = _ref.domain, verticalOrientation = _ref.verticalOrientation;
  var COLUMNS_COUNT = 7;
  var ALLOWED_DOMAIN_TYPE = ["year", "month", "week"];
  return {
    name: "xDay",
    allowedDomainType: ALLOWED_DOMAIN_TYPE,
    rowsCount: function rowsCount(ts) {
      switch (domain.type) {
        case "month":
          return Math.ceil(domain.dynamicDimension && !verticalOrientation ? DateHelper2.getMonthWeekNumber(DateHelper2.date(ts).endOf("month")) : 6);
        case "year":
          return Math.ceil(domain.dynamicDimension ? DateHelper2.date(ts).endOf("year").dayOfYear() / COLUMNS_COUNT : 54);
        case "week":
        default:
          return COLUMNS_COUNT;
      }
    },
    columnsCount: function columnsCount() {
      if (domain.type === "week") {
        return 1;
      }
      return COLUMNS_COUNT;
    },
    mapping: function mapping(startTimestamp, endTimestamp) {
      return (
        // eslint-disable-next-line implicit-arrow-linebreak
        DateHelper2.intervals("day", startTimestamp, DateHelper2.date(endTimestamp)).map(function(ts) {
          var date2 = DateHelper2.date(ts);
          var endWeekNumber = date2.endOf("year").week();
          var x3 = 0;
          switch (domain.type) {
            case "month":
              x3 = DateHelper2.getMonthWeekNumber(ts) - 1;
              break;
            case "year":
              if (endWeekNumber === 1 && date2.week() === endWeekNumber) {
                x3 = date2.subtract(1, "week").week() + 1;
              }
              x3 = date2.week() - 1;
              break;
            case "week":
              x3 = date2.weekday();
              break;
          }
          return {
            t: ts,
            y: x3,
            x: domain.type === "week" ? 0 : date2.weekday()
          };
        })
      );
    },
    extractUnit: function extractUnit(ts) {
      return DateHelper2.date(ts).startOf("day").valueOf();
    }
  };
};
var dayTemplate3 = function dayTemplate4(DateHelper2) {
  var ROWS_COUNT = 7;
  var ALLOWED_DOMAIN_TYPE = ["month"];
  return {
    name: "ghDay",
    allowedDomainType: ALLOWED_DOMAIN_TYPE,
    rowsCount: function rowsCount() {
      return ROWS_COUNT;
    },
    columnsCount: function columnsCount(ts) {
      return DateHelper2.getWeeksCountInMonth(ts);
    },
    mapping: function mapping(startTimestamp, endTimestamp) {
      var clampStart = DateHelper2.getFirstWeekOfMonth(startTimestamp);
      var clampEnd = DateHelper2.getFirstWeekOfMonth(endTimestamp);
      var x3 = -1;
      var pivotDay = clampStart.weekday();
      return DateHelper2.intervals("day", clampStart, clampEnd).map(function(ts) {
        var weekday2 = DateHelper2.date(ts).weekday();
        if (weekday2 === pivotDay) {
          x3 += 1;
        }
        return {
          t: ts,
          x: x3,
          y: weekday2
        };
      });
    },
    extractUnit: function extractUnit(ts) {
      return DateHelper2.date(ts).startOf("day").valueOf();
    }
  };
};
var weekTemplate = function weekTemplate2(DateHelper2, _ref) {
  var domain = _ref.domain;
  var ALLOWED_DOMAIN_TYPE = ["year", "month"];
  return {
    name: "week",
    allowedDomainType: ALLOWED_DOMAIN_TYPE,
    rowsCount: function rowsCount() {
      return 1;
    },
    columnsCount: function columnsCount(ts) {
      switch (domain.type) {
        case "year":
          return domain.dynamicDimension ? DateHelper2.date(ts).endOf("year").isoWeeksInYear() : 53;
        case "month":
          return domain.dynamicDimension ? DateHelper2.getWeeksCountInMonth(ts) : 5;
        default:
          return 1;
      }
    },
    mapping: function mapping(startTimestamp, endTimestamp) {
      var clampStart = DateHelper2.getFirstWeekOfMonth(startTimestamp);
      var clampEnd = DateHelper2.getFirstWeekOfMonth(endTimestamp);
      return DateHelper2.intervals("week", clampStart, clampEnd).map(function(ts, i) {
        return {
          t: ts,
          x: i,
          y: 0
        };
      });
    },
    extractUnit: function extractUnit(ts) {
      return DateHelper2.date(ts).startOf("week").valueOf();
    }
  };
};
var monthTemplate = function monthTemplate2(DateHelper2) {
  var ALLOWED_DOMAIN_TYPE = ["year"];
  return {
    name: "month",
    allowedDomainType: ALLOWED_DOMAIN_TYPE,
    rowsCount: function rowsCount() {
      return 1;
    },
    columnsCount: function columnsCount() {
      return 12;
    },
    mapping: function mapping(startTimestamp, endTimestamp) {
      return (
        // eslint-disable-next-line implicit-arrow-linebreak
        DateHelper2.intervals("month", startTimestamp, DateHelper2.date(endTimestamp)).map(function(ts) {
          return {
            t: ts,
            x: DateHelper2.date(ts).month(),
            y: 0
          };
        })
      );
    },
    extractUnit: function extractUnit(ts) {
      return DateHelper2.date(ts).startOf("month").valueOf();
    }
  };
};
var yearTemplate = function yearTemplate2(DateHelper2) {
  var ALLOWED_DOMAIN_TYPE = [];
  return {
    name: "year",
    allowedDomainType: ALLOWED_DOMAIN_TYPE,
    rowsCount: function rowsCount() {
      return 1;
    },
    columnsCount: function columnsCount() {
      return 1;
    },
    mapping: function mapping(startTimestamp, endTimestamp) {
      return (
        // eslint-disable-next-line implicit-arrow-linebreak
        DateHelper2.intervals("year", startTimestamp, DateHelper2.date(endTimestamp)).map(function(ts, index2) {
          return {
            t: ts,
            x: index2,
            y: 0
          };
        })
      );
    },
    extractUnit: function extractUnit(ts) {
      return DateHelper2.date(ts).startOf("year").valueOf();
    }
  };
};
var DefaultTemplates = [minuteTemplate, hourTemplate, dayTemplate$2, dayTemplate$1, dayTemplate3, weekTemplate, monthTemplate, yearTemplate];
var TemplateCollection = function() {
  function TemplateCollection2(dateHelper, options) {
    _classCallCheck(this, TemplateCollection2);
    this.settings = /* @__PURE__ */ new Map();
    this.dateHelper = dateHelper;
    this.options = options;
    this.initiated = false;
  }
  _createClass(TemplateCollection2, [{
    key: "get",
    value: function get4(subDomainType) {
      return this.settings.get(subDomainType);
    }
  }, {
    key: "has",
    value: function has2(subDomainType) {
      return this.settings.has(subDomainType);
    }
  }, {
    key: "init",
    value: function init2() {
      if (!this.initiated) {
        this.initiated = true;
        this.add(DefaultTemplates);
      }
    }
  }, {
    key: "add",
    value: function add2(templates) {
      var _this = this;
      this.init();
      var tplWithParent = [];
      castArray(templates).forEach(function(f) {
        var template = f(_this.dateHelper, _this.options.options);
        _this.settings.set(template.name, template);
        if (template.hasOwnProperty("parent")) {
          tplWithParent.push(template.name);
        }
      });
      tplWithParent.forEach(function(name) {
        var parentTemplate = _this.settings.get(_this.settings.get(name).parent);
        if (!parentTemplate) {
          return;
        }
        _this.settings.set(name, Object.assign(Object.assign({}, parentTemplate), _this.settings.get(name)));
      });
    }
  }]);
  return TemplateCollection2;
}();
var CalHeatmap = function() {
  function CalHeatmap2() {
    _classCallCheck(this, CalHeatmap2);
    this.options = new Options();
    this.dateHelper = new DateHelper();
    this.templateCollection = new TemplateCollection(this.dateHelper, this.options);
    this.dataFetcher = new DataFetcher(this);
    this.navigator = new Navigator(this);
    this.populator = new Populator(this);
    this.calendarPainter = new CalendarPainter(this);
    this.eventEmitter = new EventEmitter();
    this.pluginManager = new PluginManager(this);
  }
  _createClass(CalHeatmap2, [{
    key: "createDomainCollection",
    value: function createDomainCollection(startDate, range3) {
      var excludeEnd = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
      return new DomainCollection(this.dateHelper, this.options.options.domain.type, startDate, range3, excludeEnd);
    }
    // =========================================================================
    // PUBLIC API
    // =========================================================================
    /**
     * Setup and paint the calendar with the given options
     *
     * @param  {Object} options The Options object
     * @return A Promise, which will fulfill once all the underlying asynchronous
     * tasks settle, whether resolved or rejected.
     */
  }, {
    key: "paint",
    value: function paint(options, plugins) {
      return __awaiter(this, void 0, void 0, _regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1)
            switch (_context.prev = _context.next) {
              case 0:
                this.options.init(options);
                _context.next = 3;
                return this.dateHelper.setup(this.options);
              case 3:
                this.templateCollection.init();
                _context.prev = 4;
                validate(this.templateCollection, this.options.options);
                _context.next = 11;
                break;
              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](4);
                return _context.abrupt("return", Promise.reject(_context.t0));
              case 11:
                if (plugins) {
                  this.pluginManager.add(castArray(plugins));
                }
                this.calendarPainter.setup();
                this.domainCollection = new DomainCollection(this.dateHelper);
                this.navigator.loadNewDomains(this.createDomainCollection(this.options.options.date.start, this.options.options.range));
                return _context.abrupt("return", Promise.allSettled([this.calendarPainter.paint(), this.fill()]));
              case 16:
              case "end":
                return _context.stop();
            }
        }, _callee, this, [[4, 8]]);
      }));
    }
    /**
     * Add a new subDomainTemplate
     *
     * @since 4.0.0
     * @param  {SubDomainTemplate[] | SubDomainTemplate} templates
     * A single, or an array of SubDomainTemplate object
     * @return void
     */
  }, {
    key: "addTemplates",
    value: function addTemplates(templates) {
      this.templateCollection.add(templates);
    }
    /**
     * Shift the calendar by n domains forward
     *
     * @param {number} n Number of domain intervals to shift forward
     * @return A Promise, which will fulfill once all the underlying asynchronous
     * tasks settle, whether resolved or rejected.
     */
  }, {
    key: "next",
    value: function next2() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      var loadDirection = this.navigator.loadNewDomains(this.createDomainCollection(this.domainCollection.max, n + 1).slice(n), ScrollDirection.SCROLL_FORWARD);
      return Promise.allSettled([this.calendarPainter.paint(loadDirection), this.fill()]);
    }
    /**
     * Shift the calendar by n domains backward
     *
     * @param {number} n Number of domain intervals to shift backward
     * @return A Promise, which will fulfill once all the underlying asynchronous
     * tasks settle, whether resolved or rejected.
     */
  }, {
    key: "previous",
    value: function previous() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      var loadDirection = this.navigator.loadNewDomains(this.createDomainCollection(this.domainCollection.min, -n), ScrollDirection.SCROLL_BACKWARD);
      return Promise.allSettled([this.calendarPainter.paint(loadDirection), this.fill()]);
    }
    /**
     * Jump directly to a specific date
     *
     * JumpTo will scroll the calendar until the wanted domain with the specified
     * date is visible. Unless you set reset to true, the wanted domain
     * will not necessarily be the first domain of the calendar.
     *
     * @param {Date} date Jump to the domain containing that date
     * @param {boolean} reset Whether the wanted domain
     * should be the first domain of the calendar
     * @return A Promise, which will fulfill once all the underlying asynchronous
     * tasks settle, whether resolved or rejected.
     */
  }, {
    key: "jumpTo",
    value: function jumpTo(date2) {
      var reset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      return Promise.allSettled([this.calendarPainter.paint(this.navigator.jumpTo(date2, reset)), this.fill()]);
    }
    /**
     * Fill the calendar with the given data
     *
     * @param  {Object|string}    dataSource    The calendar's datasource,
     * same type as `options.data.source`
     * @return A Promise, which will fulfill once all the underlying asynchronous
     * tasks settle, whether resolved or rejected.
     */
  }, {
    key: "fill",
    value: function fill3() {
      var _this = this;
      var dataSource = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.options.data.source;
      var options = this.options.options;
      var template = this.templateCollection;
      var endDate = this.dateHelper.intervals(options.domain.type, this.domainCollection.max, 2)[1];
      var dataPromise = this.dataFetcher.getDatas(dataSource, this.domainCollection.min, endDate);
      return new Promise(function(resolve2, reject2) {
        dataPromise.then(function(data2) {
          _this.domainCollection.fill(data2, options.data, template.get(options.subDomain.type).extractUnit);
          _this.populator.populate();
          resolve2(null);
        }, function(error) {
          reject2(error);
        });
      });
    }
    /**
     * Listener for all events
     *
     * @since 4.0.0
     * @param  {string}  eventName  Name of the event to listen to
     * @param  {function} Callback function to execute on event trigger
     * @return void
     */
  }, {
    key: "on",
    value: function on(name, fn) {
      this.eventEmitter.on(name, fn);
    }
  }, {
    key: "dimensions",
    value: function dimensions() {
      return this.calendarPainter.dimensions;
    }
    /**
     * Destroy the calendar
     *
     * @since  3.3.6
     * @return A Promise, which will fulfill once all the underlying asynchronous
     * tasks settle, whether resolved or rejected.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      return this.calendarPainter.destroy();
    }
  }, {
    key: "extendDayjs",
    value: function extendDayjs(plugin) {
      return this.dateHelper.extend(plugin);
    }
  }]);
  return CalHeatmap2;
}();
CalHeatmap.VERSION = VERSION;
export {
  CalHeatmap as default
};
//# sourceMappingURL=cal-heatmap.js.map
