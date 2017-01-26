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

function syncPosition(current){
    $("#mg-gallery-thumb")
        .find(".owl-item")
        .removeClass("synced")
        .eq(current)
        .addClass("synced")
    if($("#mg-gallery-thumb").data("owlCarousel") !== undefined){
        center(current)
    }
}

const GalleryHelper = {
    reRenderGalleries() {
        /*
         * Owl Carousel for Gallery
         */
        var sync1 = $("#mg-gallery");
        var sync2 = $("#mg-gallery-thumb");
        var current = this.currentItem;
        sync1.owlCarousel({
            navigation : true,
            singleItem : true,
            pagination: false,
            afterAction : syncPosition(current),
            navigationText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],

        });

        sync2.owlCarousel({
            items : 3,
            itemsDesktop: [1199,3],
            itemsDesktopSmall: [979,3],
            itemsTablet: [768,3],
            itemsMobile: [479,3],
            navigation : false,
            pagination: false,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            afterInit : function(el){
                el.find(".owl-item").eq(0).addClass("synced");
            }

        });

        sync2.on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo",number);
        });

        $('.mg-gallery-item a').nivoLightbox({ effect: 'fadeScale' });
    },

    reRenderBlogPhotos() {
        $(".mg-post-images-slider").owlCarousel({
            singleItem : true,
            navigation : true,
            pagination: false,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],

        });
    }
};

module.exports = GalleryHelper;
