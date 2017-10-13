let common = require('./common.js')

if (common && common.navdata)
{
    common.navdata.forEach(function (value, index)
    {
        if (index == 0)
        {
            value.active = true
        }
        else
        {
            value.active = false
        }
    })
}

resizeWH()

window.onresize = resizeWH

function resizeWH ()
{
    if (common)
        common.carouselHeight = (window.innerHeight - 62) + 'px'
}


let [x, y, z] = [10, 20, 30];


let say = (value) => console.log(value);

say('i want study webpack');

