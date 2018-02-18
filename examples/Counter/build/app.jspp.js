// Compiled with JS++ v.0.8.0

!function(){var e=(Object.hasOwnProperty('create'))?Object.create:function(p){function f(){}f.prototype=p;return new f();};var f=(Function.prototype.hasOwnProperty('bind'))?function(f,o){return f.bind(o);}:function(f,o){return function(){return f.apply(o,arguments);};};var CounterExample;CounterExample={};var Altitude;Altitude={};Altitude.Frontend={};Altitude.Frontend.View=function(template){this.html="";this.template;template=template+"";this.template=Handlebars.compile(template);};Altitude.Frontend.View.prototype.g="Altitude.Frontend.View";function h(model){j.call(this,model);m.call(this);}function j(model){var context=model.toExternal();var p=context;var q=this.template(p);var u=q!=null?q+'':'';this.html=u;}function m(){this.renderTemplate(this.html);}CounterExample.CounterView=function(){Altitude.Frontend.View.call(this,"<span class=\"counter-value\">{{value}}</span>");};CounterExample.CounterView.prototype=e(Altitude.Frontend.View.prototype);CounterExample.CounterView.prototype.g="CounterExample.CounterView";CounterExample.CounterView.prototype.renderTemplate=w;function w(html){html=html+"";$("#counter-container").html(html);}Altitude.Frontend.Model=function(){this.views=[];};Altitude.Frontend.Model.prototype.g="Altitude.Frontend.Model";function z(view){this.views.push(view)|0;}function B(){var C=this.views;for(var D=0;D<C.length;++D){var view=C[D];j.call(view,this);m.call(view);}}CounterExample.CounterModel=function(){Altitude.Frontend.Model.call(this);this.value=0>>>0;};CounterExample.CounterModel.prototype=e(Altitude.Frontend.Model.prototype);CounterExample.CounterModel.prototype.g="CounterExample.CounterModel";function F(){this.value=this.value+1>>>0;B.call(this);}CounterExample.CounterModel.prototype.toExternal=G;function G(){return(({value:this.value}));}CounterExample.CounterController=function(){this.view=new CounterExample.CounterView();this.model=new CounterExample.CounterModel();};CounterExample.CounterController.prototype.g="CounterExample.CounterController";CounterExample.CounterController.prototype.attachViews=H;function H(){z.call(this.model,this.view);h.call(this.view,this.model);}CounterExample.CounterController.prototype.listenEvents=I;function I(){$("#start").click(f(J,this));}function J(){var _this=this;setInterval(function(){F.call(_this.model);},200);}!function(){var counterController=new CounterExample.CounterController();H.call(counterController);I.call(counterController);}();}();