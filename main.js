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
                model3.thumb = $(this).attr("thumb");
                
                if(model3.file==undefined){
                    model3.file=model3.name+".gltf";
                }         
            
                if(model3.thumb==undefined){
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
        createThumbList(models);
        
        models.forEach(function(model3,idx){
            
            
        }); 

        
        $('#modelTree').treeview({data: treedata});
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
    
    
    
}

function createThumbList(modelArray) {
    $("#thumbcontainer").empty();

    if (modelArray) {
        if (modelArray.length > 0) {
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
                                $("#titleLabel").text(clickModel.name);
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



