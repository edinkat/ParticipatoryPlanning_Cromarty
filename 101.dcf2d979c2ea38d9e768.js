(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/3d/layers/support/TerrainTileTree3DDebugger":1621,"esri/views/3d/layers/support/TileTree3DDebugger":1722})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1621:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(1),t(2),t(0),t(33),t(1722)],void 0===(n=function(e,r,t,i,n,o,s){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){function r(r){var t=e.call(this,r)||this;return t.enablePolygons=!1,t}return i(r,e),r.prototype.update=function(){var e=this;if(this.clear(),this.enabled){var r=this.view.basemapTerrain.getRenderedTiles();this._update(r,function(r){return o.toExtent(r.extent,e.view.basemapTerrain.spatialReference)},{})}},t([n.subclass("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],r)}(n.declared(s.TileTree3DDebugger));r.TerrainTileTree3DDebugger=a}.apply(null,i))||(e.exports=n)},1722:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(1),t(2),t(97),t(16),t(13),t(9),t(0),t(231),t(294),t(295),t(190)],void 0===(n=function(e,r,t,i,n,o,s,a,l,p,c,u,d){Object.defineProperty(r,"__esModule",{value:!0});var h=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]],b=function(e){function r(r){var t=e.call(this)||this;return t.updating=!1,t.enablePolygons=!0,t._graphics=[],t._enabled=!0,t}return i(r,e),r.prototype.initialize=function(){this._symbols=h.map(function(e){return new u(new p({material:{color:[e[0],e[1],e[2],.6]},outline:{color:"black",size:1}}))})},Object.defineProperty(r.prototype,"enabled",{get:function(){return this._enabled},set:function(e){this._enabled!==e&&(this._enabled=e,this.update())},enumerable:!0,configurable:!0}),r.prototype.destroy=function(){this.view&&(this.clear(),this._set("view",null))},r.prototype._update=function(e,r,t){var i=this;if(this.clear(),this._enabled){var o,l=t.getLabel||function(e){var r=e.lij[0]+"/"+e.lij[1]+"/"+e.lij[2];return a.isSome(o)&&(r+=" ("+o+")"),r};e.forEach(function(p,u){var h=p.lij[0],b=r(p);i.enablePolygons&&i._graphics.push(new n({geometry:b,symbol:i._symbols[h%i._symbols.length]}));var g=u/(e.length-1),y=s.lerp(0,200,g),v=s.lerp(20,6,g);o=t.getLoadPriority&&t.getLoadPriority(p);var f=a.isSome(o)&&o>=e.length,w=l(p),_=new n({geometry:b.extent.center,symbol:new c({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new d({text:w,halo:{color:"white",size:1/.75},material:{color:[y,f?0:y,f?0:y]},size:v/.75})]})});i._graphics.push(_)}),this.view.graphics.addMany(this._graphics)}},r.prototype.clear=function(){this.view.graphics.removeMany(this._graphics),this._graphics=[]},t([l.property({constructOnly:!0})],r.prototype,"view",void 0),t([l.property({readOnly:!0})],r.prototype,"updating",void 0),t([l.subclass("esri.views.3d.layers.support.TileTree3DDebugger")],r)}(l.declared(o));r.TileTree3DDebugger=b}.apply(null,i))||(e.exports=n)}}]);