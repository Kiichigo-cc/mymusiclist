(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['albumCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"album\" data-name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"albumName") || (depth0 != null ? lookupProperty(depth0,"albumName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"albumName","hash":{},"data":data,"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":43}}}) : helper)))
    + "\" data-artist=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"artistName") || (depth0 != null ? lookupProperty(depth0,"artistName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artistName","hash":{},"data":data,"loc":{"start":{"line":1,"column":58},"end":{"line":1,"column":72}}}) : helper)))
    + "\" data-rating=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"albumRating") || (depth0 != null ? lookupProperty(depth0,"albumRating") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"albumRating","hash":{},"data":data,"loc":{"start":{"line":1,"column":87},"end":{"line":1,"column":102}}}) : helper)))
    + "\">\r\n    <div class=\"album-contents\">\r\n        <div class=\"album-image-container\">\r\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"photoURL") || (depth0 != null ? lookupProperty(depth0,"photoURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":22},"end":{"line":4,"column":34}}}) : helper)))
    + "\" alt=\"coverart\">\r\n        </div>\r\n        <div class=\"album-info-container\">\r\n            <a href=\"#\" class=\"album-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"albumName") || (depth0 != null ? lookupProperty(depth0,"albumName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"albumName","hash":{},"data":data,"loc":{"start":{"line":7,"column":44},"end":{"line":7,"column":57}}}) : helper)))
    + "</a>\r\n            <span class=\"album-rating\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"albumRating") || (depth0 != null ? lookupProperty(depth0,"albumRating") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"albumRating","hash":{},"data":data,"loc":{"start":{"line":8,"column":39},"end":{"line":8,"column":54}}}) : helper)))
    + "/5</span>\r\n            <span class=\"album-artist\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"artistName") || (depth0 != null ? lookupProperty(depth0,"artistName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artistName","hash":{},"data":data,"loc":{"start":{"line":9,"column":39},"end":{"line":9,"column":53}}}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
})();