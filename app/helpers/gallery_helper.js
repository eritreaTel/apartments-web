function center(number){
    var sync2 = $("#mg-gallery-thumb"); //don't like this, but it is easy and good for now.
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
        if(num === sync2visible[i]){
            var found = true;
        }
    }

    if(found===false){
        if(num>sync2visible[sync2visible.length-1]){
            sync2.trigger("owl.goTo", num - sync2visible.length+2)
        }else{
            if(num - 1 === -1){
                num = 0;
            }
            sync2.trigger("owl.goTo", num);
        }
    } else if(num === sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
        sync2.trigger("owl.goTo", num-1)
    }

}

const GalleryHelper = {
    syncPosition(el){
        var current = this.currentItem;
        $("#mg-gallery-thumb")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
        if($("#mg-gallery-thumb").data("owlCarousel") !== undefined){
            center(current)
        }
    }
};

module.exports = GalleryHelper;
