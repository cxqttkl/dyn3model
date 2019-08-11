var models = [];
var treedata=[];
var modelsQueryResult=[];
var modelsQueryTree=[];
var data = [{
    "id": "C1",
    "text": "地质地貌现象",
    "sequence": "sequence-0",
    "state": null,
    "icon": "glyphicon glyphicon-leaf",
    "nodes": [{
        "id": "C11",
        "text": "外动力地貌",
        "sequence": "sequence-0-1",
        "state": null,
        "icon": "glyphicon glyphicon-leaf",
        "nodes": [{
            "id": "C111",
            "text": "坡地重力地貌",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{
            "id": "C1111",
            "text": "崩塌",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{
            "id": "C11111",
            "text": "崩积物崩塌",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
        },
                  {
            "id": "C11112",
            "text": "表层风化物崩塌",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
        }, 
                    {
            "id": "C11113",
            "text": "沉积物崩塌",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
        }, 
                       {
            "id": "C11114",
            "text": "基岩崩塌",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
        }
                     ]
        },
                      {
            "id": "C1112",
            "text": "滑坡",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{
            "id": "C11121",
            "text": "覆盖层滑坡",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"    
                      },
                      {
            "id": "C11122",
            "text": "基岩滑坡",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"    
                      }
                     ]       
        
        },{
            "id": "C1113",
            "text": "蠕动",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{
            "id": "C11131",
            "text": "松散层蠕动",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"    
            },
                      {
            "id": "C11132",
            "text": "岩层蠕动",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"
            }
                     ]
        }
                     ]
        },
                {
            "id": "C112",
            "text": "流水地貌",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C1121",
            "text": "沟谷流水地貌",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C11211",
            "text": "沟谷",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C112111",
            "text": "切沟",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"
                },
                {   
            "id": "C112112",
            "text": "冲沟",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"
                
                },
                      {   
            "id": "C112113",
            "text": "坳沟",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"
                
                }
                     ]      
                },
                    {   
            "id": "C11212",
            "text": "扇形地地貌",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C112121",
            "text": "洪积扇",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",   
                },
                      {   
            "id": "C112122",
            "text": "冲积扇",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"
                
                }
                     ]              
                } ,
                      {   
            "id": "C11213",
            "text": "泥石流",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C112131",
            "text": "标准型泥石流",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
                
                },
                     {   
            "id": "C112132",
            "text": "河谷型泥石流",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"
                
                },
                      {   
            "id": "C112133",
            "text": "山坡型泥石流",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"
                
                }
                     ]                
                
                }
                     ]   
                },
                      {   
            "id": "C1122",
            "text": "河谷流水地貌",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C11221",
            "text": "河床地貌",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C112211",
            "text": "顺直微弯型河床",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"    
                },
                      {   
            "id": "C112212",
            "text": "弯曲型河床",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"    
                },
                      {   
            "id": "C112213",
            "text": "分汊型河床",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"    
                },
                      {   
            "id": "C112214",
            "text": "散乱型河床",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"    
                }
                     ]      
                },
                      {   
            "id": "C11222",
            "text": "河漫滩地貌",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C112221",
            "text": "河曲型河漫滩",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf" 
                },
                      {   
            "id": "C112222",
            "text": "汊道型河漫滩",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"           
                },
                       {   
            "id": "C112223",
            "text": "堰堤型河漫滩",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"    
                }
                     ]      
                },
                      {   
            "id": "C11223",
            "text": "河流阶地",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C112231",
            "text": "侵蚀阶地",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"      
                },
                     {   
            "id": "C112232",
            "text": "堆积上叠阶地",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"      
                },
                       {   
            "id": "C112233",
            "text": "堆积内叠阶地",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"      
                },
                       {   
            "id": "C112234",
            "text": "堆积基座阶地",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"      
                },
                      {   
            "id": "C112235",
            "text": "堆积埋藏阶地",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"      
                }
                     ]                
                
                },
                     
                {   
            "id": "C11224",
            "text": "河谷",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C112241",
            "text": "V字形河谷",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"    
                },
                      {   
            "id": "C112242",
            "text": "河漫滩河谷",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"    
                },
                      {   
            "id": "C112243",
            "text": "成熟河谷",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"    
                }
                     ]       
                } 
                     ]                     
                },
                      {   
            "id": "C1123",
            "text": "河口地区地貌",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C11231",
            "text": "鸟爪形三角洲",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"
                },
                      {   
            "id": "C11232",
            "text": "扇形三角洲",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"
                },
                      {   
            "id": "C11233",
            "text": "尖头形三角洲",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"
                },
                  {   
            "id": "C11234",
            "text": "指形三角洲",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"
                }    
                     ]       
                }
                     ]
        },  
                {
            "id": "C113",
            "text": "冰川地貌",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C1131",
            "text": "冰蚀地貌",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C11311",
            "text": "冰斗",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C11312",
            "text": "角峰",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C11313",
            "text": "刃脊",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C11314",
            "text": "冰川谷",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                       {   
            "id": "C11315",
            "text": "悬谷",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]      
                },
                      {   
            "id": "C1132",
            "text": "冰碛地貌",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C11321",
            "text": "尾碛堤",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C11322",
            "text": "侧碛堤",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C11323",
            "text": "冰碛丘陵",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C11324",
            "text": "鼓丘",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]                
                }
                     ]   
        },  
                  {   
            "id": "C114",
            "text": "风沙地貌",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C1141",
            "text": "风蚀地貌",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C11411",
            "text": "风蚀洼地",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C11412",
            "text": "风蚀蘑菇",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C11413",
            "text": "风蚀城堡",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                       {   
            "id": "C11414",
            "text": "风蚀谷（丘）",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                       {   
            "id": "C11415",
            "text": "风蚀雅丹",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]      
                },
                      {   
            "id": "C1142",
            "text": "风积地貌",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",             
            "nodes": [{   
            "id": "C11421",
            "text": "新月形沙丘",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C11422",
            "text": "季风型沙丘",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C11423",
            "text": "对流型沙丘",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C11424",
            "text": "干扰型沙丘",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]     
                },
                      {   
            "id": "C1143",
            "text": "荒漠",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C11431",
            "text": "岩漠",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C11432",
            "text": "砾漠",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C11433",
            "text": "沙漠",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                       {   
            "id": "C11434",
            "text": "泥漠",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]
                }
                      
                     ]      
                }
                 ]
    }]
},
            {   
            "id": "C2",
            "text": "天气",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C21",
            "text": "独立天气",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C211",
            "text": "晴",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C2111",
            "text": "晴-白天",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2112",
            "text": "晴-夜间",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]   
                },
                      

{   
            "id": "C212",
            "text": "多云",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C2121",
            "text": "多云-白天",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2122",
            "text": "多云-夜间",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]
                },
                      {   
            "id": "C213",
            "text": "阴",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                   {   
            "id": "C214",
            "text": "雨",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C2141",
            "text": "小雨",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                  {   
            "id": "C2142",
            "text": "中雨",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                     {   
            "id": "C2143",
            "text": "大雨",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2144",
            "text": "暴雨",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2145",
            "text": "大暴雨",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2146",
            "text": "特大暴雨",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2147",
            "text": "阵雨",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2148",
            "text": "雷阵雨",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2148",
            "text": "冻雨",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2149",
            "text": "小雨-中雨",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C214a",
            "text": "中雨-大雨",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C214b",
            "text": "大雨-暴雨",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C214c",
            "text": "暴雨-大暴雨",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C214d",
            "text": "大暴雨-特大暴雨",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]         
                },
                      
{   
            "id": "C215",
            "text": "雪",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C2151",
            "text": "阵雪",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2152",
            "text": "小雪",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2153",
            "text": "中雪",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2154",
            "text": "大雪",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2155",
            "text": "暴雪",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2156",
            "text": "小雪-中雪",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2157",
            "text": "中雪-大雪",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2158",
            "text": "大雪-暴雪",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                      
                     ]
                },
                      {   
            "id": "C216",
            "text": "雾",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C2161",
            "text": "小雾",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2162",
            "text": "中雾",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2163",
            "text": "大雾",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]             
                },
                      {   
            "id": "C217",
            "text": "沙尘天气",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C2171",
            "text": "浮尘",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2172",
            "text": "扬沙",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                       {   
            "id": "C2173",
            "text": "沙尘暴",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2174",
            "text": "强沙尘暴",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]             
                },
                      {   
            "id": "C218",
            "text": "霾",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C2181",
            "text": "轻微霾",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2182",
            "text": "轻度霾",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2183",
            "text": "中度霾",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C2184",
            "text": "重度霾",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]             
                }

                     ]   
                },
                      
{   
            "id": "C22",
            "text": "复合天气",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C221",
            "text": "雷雨天伴有冰雹",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C222",
            "text": "雨夹雪",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]
                }
                     ]
                },
            
{   
            "id": "C3",
            "text": "气象",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C31",
            "text": "气象气候现象",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C311",
            "text": "大气环流",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C312",
            "text": "气旋系统",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C3121",
            "text": "气旋",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C31211",
            "text": "温带气旋",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C31212",
            "text": "热带气旋",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C31213",
            "text": "地方性气旋",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C31214",
            "text": "高空冷涡",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]   
                },
                      {   
            "id": "C3122",
            "text": "反气旋",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C31221",
            "text": "极地反气旋",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C31222",
            "text": "冷性反气旋",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C31223",
            "text": "暖性反气旋",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]              
                }
                     ]             
                },
                      {   
            "id": "C313",
            "text": "云与云系",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C3131",
            "text": "云",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C31311",
            "text": "卷云",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C31312",
            "text": "层云",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C31313",
            "text": "积云",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C313131",
            "text": "淡积云",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C313132",
            "text": "浓积云",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C313133",
            "text": "碎积云",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]             
                },
                      {   
            "id": "C31314",
            "text": "卷积云",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C31315",
            "text": "卷层云",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C31316",
            "text": "高层云",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C313161",
            "text": "避光高层云",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C313162",
            "text": "透光高层云",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]
                },
                      {   
            "id": "C31317",
            "text": "高积云",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C31318",
            "text": "雨层云",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C31319",
            "text": "层积云",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                       {   
            "id": "C3131a",
            "text": "积雨云",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                      

                         ]
                },
                    {   
            "id": "C3132",
            "text": "云系",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C31321",
            "text": "冷锋云系",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C31322",
            "text": "暖锋云系",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C31323",
            "text": "急流云系",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C31324",
            "text": "带状云系",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C31325",
            "text": "涡旋状云系",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C31326",
            "text": "逗点状云系",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C31327",
            "text": "叶状云系",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C31328",
            "text": "细胞状云系",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C31329",
            "text": "波状云系",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]
                }
  
                     ]             
                },
                      {   
            "id": "C314",
            "text": "锋面系统",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C3141",
            "text": "冷锋",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C3142",
            "text": "暖锋",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                     {   
            "id": "C3143",
            "text": "准静止锋",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C3144",
            "text": "锢囚锋",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]             
                },
                      {   
            "id": "C315",
            "text": "高压脊与低压槽",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C3151",
            "text": "高压脊",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                   {   
            "id": "C3152",
            "text": "低压槽",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }   
                     ]              
                }
                     ]
                },
                      {   
            "id": "C32",
            "text": "其他局部气象",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C321",
            "text": "龙卷风",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C3211",
            "text": "绳形龙卷风",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C3212",
            "text": "烟囱形龙卷风",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C3213",
            "text": "楔形龙卷风",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                     {   
            "id": "C3214",
            "text": "多涡旋龙卷风",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                } 
                     ]   
                }]              
                }
                     ]
                },
            
{   
            "id": "C4",
            "text": "POI",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C41",
            "text": "酒店宾馆",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C411",
            "text": "星级宾馆",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4111",
            "text": "一二星级酒店",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                    {   
            "id": "C4112",
            "text": "三星级酒店",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C4113",
            "text": "四星级酒店",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C4114",
            "text": "五星级酒店",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C4115",
            "text": "六星级酒店",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]
                },
                      
                     {   
            "id": "C412",
            "text": "青年旅社",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                     {   
            "id": "C413",
            "text": "酒店附属设施",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                } 
                     ]   
                },
                     {   
            "id": "C42",
            "text": "生活服务",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C421",
            "text": "邮政",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4211",
            "text": "邮局",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }]    
                },
                      
         {   
            "id": "C422",
            "text": "丧葬设施",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4221",
            "text": "火葬场",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                    {   
            "id": "C4222",
            "text": "公墓",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }  
                     ]
                },
                       {   
            "id": "C423",
            "text": "洗衣店",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C424",
            "text": "维修站点",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]             
                },
                       {   
            "id": "C43",
            "text": "旅游景点",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C431",
            "text": "公园广场",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4311",
            "text": "公园",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                    {   
            "id": "C4312",
            "text": "广场",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                     {   
            "id": "C4313",
            "text": "动物园",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                } 
                     ]    
                },
                    {   
            "id": "C432",
            "text": "教堂",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4321",
            "text": "基督教",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C4322",
            "text": "伊斯兰教",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]
                }  
                     ]
                },
                     {   
            "id": "C44",
            "text": "汽车服务",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C441",
            "text": "汽车销售与维修",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4411",
            "text": "汽车维修",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }]    
                },
                     {   
            "id": "C442",
            "text": "综合能源站",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
             "nodes": [{   
            "id": "C4421",
            "text": "加油站",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }]            
                } 
                     ]
                },
                      {   
            "id": "C45",
            "text": "交通设施",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C451",
            "text": "服务区",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4511",
            "text": "高速停车区",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                     {   
            "id": "C4512",
            "text": "高速加油站服务区",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C4513",
            "text": "高速停车区",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C4514",
            "text": "高速路收费站",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]
                },
                     {   
            "id": "C452",
            "text": "车站",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4521",
            "text": "公交车站",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                    {   
            "id": "C4522",
            "text": "出租车站",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }  
                     ]            
                } 
                     ]
                },
                      {   
            "id": "C46",
            "text": "金融行业",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C461",
            "text": "银行",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C462",
            "text": "24小时自助银行",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                     {   
            "id": "C463",
            "text": "保险公司",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C464",
            "text": "ATM",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C465",
            "text": "证券",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                } 
                     ]
                },
                     {   
            "id": "C47",
            "text": "购物场所",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C471",
            "text": "商场",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4711",
            "text": "购物服务",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }]    
                },
                    {   
            "id": "C472",
            "text": "超市",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                     {   
            "id": "C473",
            "text": "电商商场",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4731",
            "text": "电脑店",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }]            
                },
                    {   
            "id": "C474",
            "text": "专卖店",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4741",
            "text": "摄影店",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C4742",
            "text": "书店",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C4743",
            "text": "乐器店",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C4744",
            "text": "眼镜店",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]           
                }]            
                },
                     {   
            "id": "C48",
            "text": "餐饮美食",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C481",
            "text": "中餐厅",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                     {   
            "id": "C482",
            "text": "西餐厅",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4821",
            "text": "意式菜品餐厅",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }]            
                },
                     {   
            "id": "C483",
            "text": "快餐",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4831",
            "text": "西式快餐厅",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }]             
                },
                     {   
            "id": "C484",
            "text": "冷饮店",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C485",
            "text": "甜品店",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                } 
                     ]             
                },
                    {   
            "id": "C49",
            "text": "运动休闲",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C491",
            "text": "娱乐场所",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4911",
            "text": "KTV",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                    {   
            "id": "C4912",
            "text": "酒吧",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                     {   
            "id": "C4913",
            "text": "棋牌室",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                } 
                     ]    
                },
                    {   
            "id": "C492",
            "text": "运动场所",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4921",
            "text": "足球场",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C4922",
            "text": "乒乓球馆",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C4923",
            "text": "台球厅",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]           
                }  
                     ]
                },
                     {   
            "id": "C4a",
            "text": "公司企业",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4a1",
            "text": "公司企业",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4a11",
            "text": "建筑公司",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                     {   
            "id": "C4a12",
            "text": "医药公司",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                } 
                     ]    
                },
                     {   
            "id": "C4a2",
            "text": "工厂",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                } 
                     ]             
                },
                     {   
            "id": "C4b",
            "text": "文化教育",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4b1",
            "text": "文化场馆",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4b11",
            "text": "图书馆",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                },
                      {   
            "id": "C4b12",
            "text": "天文馆",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }
                     ]    
                }]             
                },
                    {   
            "id": "C4c",
            "text": "社会团体",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4c1",
            "text": "红十字会",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }]           
                },
                     {   
            "id": "C4d",
            "text": "政府机构",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4d1",
            "text": "公检法机构",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4d11",
            "text": "警察局",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }]   
                },
                     {   
            "id": "C4d2",
            "text": "各职能部门",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf",
            "nodes": [{   
            "id": "C4d21",
            "text": "人民政治协商会议委员会",
            "sequence": "sequence-0-2-1",
            "state": null,
            "icon": "glyphicon glyphicon-leaf"   
                }]            
                } 
                     ]
                } 
                     ]            
                } 
                     ]

            
           ;
// page load
$(document).ready(function () {

    //
    loadmeta();
    createTree();
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
    $("#modelTree").treeview({
            data: data,// 赋值
            onNodeSelected: function (event, data) {
                        QueryBaseText(data.text);
            },
            highlightSelected: true,// 选中项不高亮，避免和上述制定的颜色变化规则冲突
            multiSelect: false,// 不允许多选，因为我们要通过check框来控制
            showCheckbox: false,// 展示checkbox
            highlightSearchResults: true, // 高亮查询结果
            levels: 10 // 展开级别 Default: 2
        });
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
function Query(){
     sname = txt_name.value;
     if(sname=="" || sname==null ){
             modelsQueryResult = eval(models);  //json是你的json变量名
             modelFromClass1(modelsQueryResult);
             
        }else{
            modelsQueryResult=[];
            models = eval(models);
            for(var i=0; i<models.length; i++)  
            {  
                if((models[i].name).indexOf(sname)>-1){  //name为你需要遍历的变量
                 modelsQueryResult.push(models[i]);
                } 
            }  
             modelFromClass1(modelsQueryResult);
        }

}
function QueryBaseText(stext){
            modelsQueryResult=[];
            models = eval(models);
            for(var i=0; i<models.length; i++)  
            {  
               if(models[i].class1==stext)
                   {
                         modelsQueryResult.push(models[i]);
                   }
                else if(models[i].class2==stext)
                    {
                         modelsQueryResult.push(models[i]);
                    }
                else if(models[i].class3==stext)
                    {
                         modelsQueryResult.push(models[i]);
                    }
                else if(models[i].class4==stext)
                    {
                         modelsQueryResult.push(models[i]);
                    }
                else if(models[i].class5==stext)
                    {
                         modelsQueryResult.push(models[i]);
                    }
                else if(models[i].class6==stext)
                    {
                         modelsQueryResult.push(models[i]);
                    }
                else if(models[i].name==stext)
                    {
                         modelsQueryResult.push(models[i]);
                    }

            }  
             modelFromClass1(modelsQueryResult);
             //modelsQueryTree=[];
}



