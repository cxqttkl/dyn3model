var models = [];
var treedata=[];
// page load
$(document).ready(function () {

    //
    loadmeta();
    //

});

// load symbol metadata and fill the models array
function loadmeta() {
    //解析得到模型的元文件
    //1)利用XML的符号级别来构建符号的分类树
    //2)符号分类树的一些操作？
    //3)核心问题，分类是不平均的
    $.get("meta.xml", function (xmldata) {

        $(xmldata)
            .find("ALL")
            .find("C1").find("S")
            .each(function () {
                var model3 = {};
                //每个模型自身属性的实例化  
                model3.name = $(this).attr("name");
                model3.code = $(this).attr("code");
                model3.desc = $(this).attr("descrption");
                
                model3.file = $(this).attr("file");
                
                
                if(model3.file==undefined){
                    model3.file=model3.name+".gltf";
                }         
            
                 //如果指定了格式，就严格按照格式来，如果没指定格式，就按照GIF格式
                model3.thumb = model3.name+"."+ $(this).attr("thumbnail");
                if($(this).attr("thumbnail")==undefined){
                    model3.thumb=model3.name+".gif";
                }  

                //模型文件夹的名称
                model3.baseurl = "models/";
                //每个模型分类的实例化
                model3.class1 = $(this).parents("C1").attr("name");
                if (model3.class1) {
                    model3.baseurl += model3.class1 + "/";
                }

                model3.class2 = $(this).parents("C2").attr("name");
                if (model3.class2) {
                    model3.baseurl += model3.class2 + "/";
                }
                model3.class3 = $(this).parents("C3").attr("name");
                if (model3.class3) {
                    model3.baseurl += model3.class3 + "/";
                }

                model3.class4 = $(this).parents("C4").attr("name");
                if (model3.class4) {
                    model3.baseurl += model3.class4 + "/";
                }

                model3.class5 = $(this).parents("C5").attr("name");
                if (model3.class5) {
                    model3.baseurl += model3.class5 + "/";
                }

                model3.class6 = $(this).parents("C6").attr("name");
                if (model3.class6) {
                    model3.baseurl += model3.class6 + "/";
                }
                //baseurl is the directory of model files

                model3.baseurl += model3.name + "/";
                model3.fullfile = model3.baseurl + model3.file;
                model3.fullthumb = model3.baseurl + model3.thumb;
                model3.fullreadme = model3.baseurl + "readme.xml";
            
                

                models.push(model3);

            });

        //getModelInfo();
        modelFromClass1(models);
        
        //$('#modelTree').treeview({data: treedata});
    });
}
          
          
          
//获得
function getModelInfo() {
    if (models) {
        if (models.length > 0) {
            models.forEach(function (el, i) {

            });

        }

    }
}

function createTree(){
    
    $('#modelTree').treeview({data: getTree()});
}

function modelFromClass1(modelArray){
    $("#thumbcontainer").empty();
    var allClass1=[];
    if(modelArray){
        if(modelArray.length>0){
            modelArray.forEach(function(el, i){
               if(el.class1){
                   if(!allClass1.includes(el.class1)){
                       allClass1.push(el.class1);
                   }
               } 
            });
            
        }
    }
    if(allClass1.length>0){
        allClass1.forEach(function(el,i){
            var newArray=[];
            for(var i=0;i<modelArray.length;i++){
                if(modelArray[i].class1==el){
                    newArray.push(modelArray[i]);
                }
            }
            createThumbList(el,newArray);
        });
    }
    
}

function createThumbList(caption, modelArray) {
   
    if (modelArray) {
        if (modelArray.length > 0) {
            
            var rowCaption = $("<div class='well'></div>");
            var h5Cpation = $("<h4</h4>").text(caption+"动态符号，共计"+modelArray.length.toString() +"个");
            rowCaption.append(h5Cpation);
            $("#thumbcontainer").append(rowCaption);
            
            var rowNum = Math.ceil(modelArray.length / 4);

            for (var i = 0; i < rowNum; i++) {
                var row = $("<div class='row'></div>");

                for (var j = i * 4; j < Math.min((i + 1) * 4, modelArray.length); j++) {
                    var model = modelArray[j];
                    if (model) {
                        var thumb = $("<div class='thumbnail'></div>");
                        var image = $("<img></img>").attr("src", model.fullthumb)
                        .attr("alt",model.name).css("height","200px");
                        //image.mousemove(funcion(){});
                        image.click(function () {

                            
                            $("#modelviewer").modal();
                           
                            var canvas = document.getElementById("renderCanvas");
                            var engine = new BABYLON.Engine(canvas, true, {
                                preserveDrawingBuffer: true,
                                stencil: true
                            });
                            var clickModel = null;
                            for(var ii=0;ii<models.length;ii++){
                                if(models[ii].name==$(this).attr("alt")){
                                    clickModel=models[ii];
                                }
                            }
                            if (clickModel) {
                                $("#titleLabel").text("名称："+ clickModel.name+ " 符号地址："+ clickModel.fullfile );
                                var scene = createScene(canvas, clickModel.baseurl, clickModel.file, engine);
                                engine.runRenderLoop(function () {
                                    if (scene) {
                                        scene.render();
                                    }
                                });
                                canvas.width = 800;
                                canvas.height =600;
                            }
                             
                        });
                        
                        
                        
                        var caption = $("<div class='caption'></div>").append("<h3></h3>").html(model.name);
                        thumb.append(image);
                        thumb.append(caption);
                        var column = $("<div class='col-md-3'></div>").append(thumb);
                        
                        
                        row.append(column);
                        
                    }

                }
                
                $("#thumbcontainer").append(row);
            }
            

        }

    }
}

 function createScene(canvas, baseurl,gltf,engine) {
     var scene = new BABYLON.Scene(engine);

     //Adding a light
     var light = new BABYLON.HemisphericLight();

     //Adding an Arc Rotate Camera
     var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 10, BABYLON.Vector3.Zero(), scene);
     camera.attachControl(canvas, false);
    
     // The first parameter can be used to specify which mesh to import. Here we import all meshes
     var loader =  BABYLON.SceneLoader.Append(baseurl, gltf, scene, function (newMeshes) {
         scene.activeCamera = null;
         scene.createDefaultCameraOrLight(true);
         scene.activeCamera.attachControl(canvas, false);
     });
     
     loader.animationStartMode = BABYLON.GLTFLoaderAnimationStartMode.ALL;

     return scene;
 }



