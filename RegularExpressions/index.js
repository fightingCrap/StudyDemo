/**
 * Created by zhengjq on 2017/2/27.
 */
var test=["123456789","321468541668","123654789","17816873315","6666666666","55446321156988","45132131894","17706446545"]
var game=["sss ss","sssdsdasd wqa","foo foo","bar barbar bar","sasds fdd","foo -foo foo"];
var patter=/^1[134578]\d{9}$/;
var patte=/\b([a-z]+)\b[ ]+\b\1\b/;
for(var i=0;i<test.length;i++)
{
    if(test[i].match(patter))
    {
        console.log(test[i]+"符合");
    }
}
for(var i=0;i<game.length;i++)
{
    if(game[i].match(patte))
    {
        console.log(game[i]+"符合");
    }
}


