(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/2d/layers/features/tileRenderers/support/visualVariablesUtils":1714,"esri/views/2d/engine/FeatureContainer":1794,"esri/views/2d/layers/features/tileRenderers/BaseTileRenderer":1846,"esri/views/2d/layers/features/tileRenderers/SymbolTileRenderer":2581,"esri/views/2d/layers/features/tileRenderers/support/WGLFeatureView":2582})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1714:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(17),i(184),i(235)],void 0===(n=function(e,t,i,r,n){function a(e){return{value:e.value,size:i.toPt(e.size)}}function s(e){return e.map(function(e){return a(e)})}function o(e){if("string"==typeof e||"number"==typeof e)return i.toPt(e);var t=e;return{type:"size",expression:t.expression,stops:s(t.stops)}}function l(e){var t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(r.Utils.isString(e.field)){if(!e.stops)return null;if(e.stops.length>8)return null;for(var i=e.stops,n=0;n<8;++n){var a=i[Math.min(n,i.length-1)];t.values[n]=a.value,t.opacities[n]=a.opacity}}else{if(!(e.stops&&e.stops.length>=0))return null;var s=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(n=0;n<8;n++)t.values[n]=1/0,t.opacities[n]=s}return t}Object.defineProperty(t,"__esModule",{value:!0});var u=r.enums.WGLVVFlag;t.getVisualVariableSizeValueRepresentationRatio=function(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e},t.stopToSizeStop=a,t.normalizeSizeStops=s,t.normalizeSizeElement=o,t.getVisualVariablesFields=function(e){var t=e&&e.length>0?{}:null;return t&&e.forEach(function(e){var i=e.type;e.field&&(t[i]=e.field)}),t},t.convertVisualVariables=function(e){var t=e&&e.length>0?{}:null,a=t?{}:null;if(!t)return{vvFields:t,vvRanges:a};for(var p=0,c=e;p<c.length;p++){var d=c[p],f=d.type;if(d.field&&(t[f]=d.field),"size"===f){a.size||(a.size={});var h=d;switch(r.getTypeOfSizeVisualVariable(h)){case u.SIZE_MINMAX_VALUE:a.size.minMaxValue={minDataValue:h.minDataValue,maxDataValue:h.maxDataValue,minSize:o(h.minSize),maxSize:o(h.maxSize)};break;case u.SIZE_SCALE_STOPS:a.size.scaleStops={stops:s(h.stops)};break;case u.SIZE_FIELD_STOPS:for(var y=[],v=[],b=s(h.stops),w=b.length,V=0;V<6;V++){var g=b[Math.min(V,w-1)];y.push(g.value),v.push(i.pt2px(g.size))}a.size.fieldStops={values:y,sizes:v};break;case u.SIZE_UNIT_VALUE:a.size.unitValue={unit:h.valueUnit,valueRepresentation:h.valueRepresentation}}}else if("color"===f){var m=n.convertVisualVariables([d],{modelSize:null,symbolSize:null,unitInMeters:1,transformation:null});for(a.color=m.color,V=0;V<32;V+=4)r.color.premultiplyAlpha(a.color.colors,V,!0)}else if("opacity"===f)a.opacity=l(d);else if("rotation"===f){var T=d;a.rotation={type:T.rotationType}}}return{vvFields:t,vvRanges:a}}}.apply(null,r))||(e.exports=n)},1794:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(10),i(11),i(3),i(4),i(7),i(7),i(33),i(184)],void 0===(n=function(e,t,i,r,n,a,s,o,l,u){Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(t,i){var r=e.call(this,t,i)||this;return r._rendererInfo=new u.WGLRendererInfo,r.attributeView=new u.AttributeStoreView,r}return n(t,e),t.prototype.destroy=function(){this.removeAllChildren(),this.children.forEach(function(e){return e.destroy()}),this.attributeView.destroy()},t.prototype.whenAttached=function(){var e=this;return this.attached?s.resolve():s.create(function(t){return e.once("attached",function(){return t()})})},t.prototype.setRendererInfo=function(e,t,i){this._rendererInfo.setInfo(e,t,i),this.requestRender()},t.prototype.getMaterialItems=function(e,t){return r(this,void 0,void 0,function(){var r,n,a;return i(this,function(i){switch(i.label){case 0:return e&&0!==e.length?[4,this.whenAttached()]:[2,null];case 1:return i.sent(),r=this.stage.painter.textureManager,n=e.map(function(e){return r.rasterizeItem(e.symbol,e.glyphIds,t)}),[4,o.all(n)];case 2:return a=i.sent(),[2,a.map(function(t,i){return{id:e[i].id,mosaicItem:t}})]}})})},t.prototype.onTileData=function(e,t){if(t.addOrUpdate&&"tileDisplayData"in t.addOrUpdate)e.setData(t,this.hasLabels,this.labelsVisible);else{var i=t.addOrUpdate&&u.TileData.decode(t.addOrUpdate),r=a({},t,{addOrUpdate:i});e.setData(r,this.hasLabels,this.labelsVisible)}this.contains(e)||this.addChild(e),this.requestRender()},t.prototype.onTileError=function(e){e.clear(),this.contains(e)||this.addChild(e)},t.prototype.renderChildren=function(t){this._rendererInfo.update(t.state),this.attributeView.bindTextures(this.stage.context),e.prototype.renderChildren.call(this,t)},t.prototype.createTile=function(e){var t=this._tileInfoView.getTileBounds(l.create(),e);return new u.WGLTile(e,t)},t.prototype.destroyTile=function(e){this.removeChild(e),e.destroy()},t.prototype.attach=function(){return this._initializeExtensions(),e.prototype.attach.call(this)},t.prototype.createRenderParams=function(t){return a({},e.prototype.createRenderParams.call(this,t),{rendererInfo:this._rendererInfo,attributeView:this.attributeView})},t.prototype._initializeExtensions=function(){var e=this.stage.context.capabilities;e.textureFloat,e.vao},t}(u.TileContainer);t.FeatureContainer=p}.apply(null,r))||(e.exports=n)},1846:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(282),i(0)],void 0===(n=function(e,t,i,r,n,a){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t){var i=e.call(this,t)||this;return i.tiles=new Map,i}return i(t,e),t.prototype.destroy=function(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null},Object.defineProperty(t.prototype,"updating",{get:function(){return this.isUpdating()},enumerable:!0,configurable:!0}),t.prototype.acquireTile=function(e){var t=this,i=this.createTile(e);return i.once("isReady",function(){return t.notifyChange("updating")}),this.tiles.set(e.id,i),i},t.prototype.lockAttributeTextureUpload=function(){},t.prototype.unlockAttributeTextureUpload=function(){},t.prototype.forceAttributeTextureUpload=function(){},t.prototype.forEachTile=function(e){this.tiles.forEach(e)},t.prototype.releaseTile=function(e){this.tiles.delete(e.key.id),this.disposeTile(e)},t.prototype.isUpdating=function(){var e=!0;return this.tiles.forEach(function(t){e=e&&t.isReady}),!e},t.prototype.setHighlight=function(e,t){},t.prototype.invalidateLabels=function(){},t.prototype.requestUpdate=function(){this.layerView.requestUpdate()},r([a.property()],t.prototype,"layer",void 0),r([a.property()],t.prototype,"layerView",void 0),r([a.property()],t.prototype,"tileInfoView",void 0),r([a.property()],t.prototype,"updating",null),r([a.subclass("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],t)}(a.declared(n.HandleOwner));t.default=s}.apply(null,r))||(e.exports=n)},2581:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(1),i(4),i(10),i(11),i(0),i(33),i(184),i(2072),i(1846),i(1714),i(2582)],void 0===(n=function(e,t,i,r,n,a,s,o,l,u,p,c,d,f){Object.defineProperty(t,"__esModule",{value:!0});var h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.install=function(e){var t=new f.WGLFeatureView(this.tileInfoView,this.layerView,this.layer);this.featuresView=t,e.addChild(t)},t.prototype.uninstall=function(e){e.removeChild(this.featuresView),this.featuresView.destroy()},t.prototype.hitTest=function(e,t){return this.featuresView.hitTest(e,t)},t.prototype.supportsRenderer=function(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)},t.prototype.onConfigUpdate=function(){var e=null;if("visualVariables"in this.layer.renderer){var t=(p.simplifyVVRenderer(this.layer.renderer).visualVariables||[]).map(function(e){var t=e.clone();return"normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t});e=d.convertVisualVariables(t)}this.featuresView.setRendererInfo(this.layer.renderer,e,this.layerView.effects),this.featuresView.setClips(this.layerView.clips)},t.prototype.onTileData=function(e){var t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate()},t.prototype.onTileError=function(e){var t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t)},t.prototype.forceAttributeTextureUpload=function(){this.featuresView.attributeView.forceTextureUpload()},t.prototype.lockAttributeTextureUpload=function(){this.featuresView.attributeView.lockTextureUpload()},t.prototype.unlockAttributeTextureUpload=function(){this.featuresView.attributeView.unlockTextureUpload()},t.prototype.getMaterialItems=function(e){return s(this,void 0,void 0,function(){return a(this,function(t){return[2,this.featuresView.getMaterialItems(e)]})})},t.prototype.invalidateLabels=function(){this.layer.labelingInfo&&this.layer.labelsVisible&&(this.tiles.forEach(function(e){return e.isDirty=!0}),this.layerView.view.labelManager.requestUpdate())},t.prototype.createTile=function(e){var t=this.tileInfoView.getTileBounds(l.create(),e),i=new u.WGLTile(e,t);return this.layer.labelingInfo&&this.layerView.view.labelManager.addTile(this.layerView,i),i},t.prototype.disposeTile=function(e){this.featuresView.removeChild(e),this.layer.labelingInfo&&this.layerView.view.labelManager.removeTile(this.layerView,e.key.id),e.destroy(),this.layerView.view.labelManager.requestUpdate()},r([o.subclass("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],t)}(o.declared(c.default));t.default=h}.apply(null,r))||(e.exports=n)},2582:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(4),i(3),i(10),i(11),i(7),i(184),i(1794),i(47)],void 0===(n=function(e,t,i,r,n,a,s,o,l,u){Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(t,i,r){var n=e.call(this,t,i.clips)||this;return n._pointToCallbacks=new Map,n._layer=r,n._layerView=i,n}return r(t,e),t.prototype.renderChildren=function(t){this.hasAnimation&&t.painter.effects.integrate.draw(t,t.attributeView),e.prototype.renderChildren.call(this,t)},t.prototype.hitTest=function(e,t){var i=[e,t],r=s.createResolver();return this._pointToCallbacks.set(i,r),this.requestRender(),r.promise},t.prototype.doRender=function(t){var i=this._layer,r=i.minScale,n=i.maxScale,a=t.state.scale;a<=(r||1/0)&&a>=n&&e.prototype.doRender.call(this,t)},Object.defineProperty(t.prototype,"hasAnimation",{get:function(){return this.hasLabels},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasLabels",{get:function(){return!(!this._layer.labelingInfo||!this._layer.labelingInfo.length)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labelsVisible",{get:function(){return this._layer.labelsVisible},enumerable:!0,configurable:!0}),t.prototype.prepareRenderPasses=function(t){var i=this,r=t.registerRenderPass({name:"label",brushes:[o.brushes.Label],target:function(){return i.children},drawPhase:u.WGLDrawPhase.LABEL|u.WGLDrawPhase.LABEL_ALPHA}),n=t.registerRenderPass({name:"geometry",brushes:[o.brushes.Fill,o.brushes.Line,o.brushes.Marker,o.brushes.Text],target:function(){return i.children},effects:[{apply:t.effects.highlight,enable:function(){return!!i._layerView.hasHighlight()}},{apply:t.effects.hittest,enable:function(){return!!i._pointToCallbacks.size},args:function(){return i._pointToCallbacks}}]});return e.prototype.prepareRenderPasses.call(this,t).concat([n,r])},t}(l.FeatureContainer);t.WGLFeatureView=p}.apply(null,r))||(e.exports=n)}}]);