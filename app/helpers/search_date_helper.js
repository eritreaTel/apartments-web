const SearchDateHelper = {
    initializeDatePickers(){
        $('.input-group.mg-check-in').datepicker({
            startDate: "dateToday",
            autoclose: true
        });

        $('.input-group.mg-check-in').on('hide', function (e) {


            if (e.dates.length) {
                var strDate = e.date;
                strDate.setDate(strDate.getDate() + 1);

                // $('.mg-check-out').datepicker('clearDates');
                $('.mg-check-out').datepicker('setStartDate', strDate);
            }

            $(e.currentTarget).removeClass('focus');

        });

        $('.input-group.mg-check-in').on('show', function (e) {

            $(e.currentTarget).addClass('focus');

        });

        $('.input-group.mg-check-out').on('show', function (e) {

            $(e.currentTarget).addClass('focus');

        });

        $('.input-group.mg-check-out').on('hide', function (e) {

            $(e.currentTarget).removeClass('focus');

        });

        $('.input-group.mg-check-in').on('changeDate', function (e) {

            if (e.dates.length) {
                var inDate = e.date,
                    outDate = $('.mg-check-out').datepicker('getDate');

                if (outDate && inDate >= outDate) {
                    $('.mg-check-out').datepicker('clearDates');
                }

            } else {
                $('.mg-check-out').datepicker('clearDates');
            }
        });

        $('.input-group.mg-check-out').datepicker({
            startDate: "dateToday",
            autoclose: true
        });
    }
};

module.exports = SearchDateHelper;
