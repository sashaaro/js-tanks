var utils = {
    isCoverRange: function (begin1, end1, begin2, end2) {
        return !(begin1 >= end2 || end1 <= begin2);
    },
    extend: function(object)
    {
        var mixins = Array.prototype.slice.call(arguments, 1);
        for (var i = 0; i < mixins.length; ++i)
        {
            for (var prop in mixins[i])
            {
                if(object.prototype) {
                    if (typeof object.prototype[prop] === "undefined")
                    {
                        object.prototype[prop] = mixins[i][prop];
                    }
                } else {
                    object[prop] = mixins[i][prop];
                }
            }
        }
    },
    hasBehaviour: function (object, behaviour)
    {
        for(var property in behaviour) {
            if(!object[property]) {
                return false;
            }
        }
        return true;
    }
};