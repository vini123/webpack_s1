let common = require('./common.js')

if (common && common.navdata)
{
    common.navdata.forEach(function (value, index)
    {
        if (index == 1)
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

