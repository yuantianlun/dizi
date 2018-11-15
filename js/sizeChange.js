$.fn.countTo = function (options) 
{
        options = options || {};

        $.fn.countTo.defaults = {
            from: 0,               // ��ʼ����
            to: 0,                 // ��������
            speed: 1000,           // ����ʱ��
            refreshInterval: 100,  // ˢ��ʱ��
            decimals: 2,           // С����λ��
            formatter: formatter,  // handler for formatting the value before rendering
            onUpdate: null,        // callback method for every time the element is updated
            onComplete: null       // callback method for when the element finishes updating
        };

        function formatter(value, settings) {
            return value.toFixed(settings.decimals);
        }    

        
        return $(this).each(function () 
        {

            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, 
            {
                from:            $(this).data('from'),
                to:              $(this).data('to'),
                speed:           $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals:        $(this).data('decimals')
            }, options);


            
            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;


            
            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};
            


            $self.data('countTo', data);


            
            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }

            data.interval = setInterval(updateTimer, settings.refreshInterval);

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
            
            function updateTimer() 
            {
                value += increment;
                loopCount++;
                
                render(value);
                
                if (typeof(settings.onUpdate) == 'function'){
                    settings.onUpdate.call(self, value);
                }
                
                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;
                    
                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }
            
            // initialize the element with the starting value
            render(value);
        });
 }

/*
$('.timer').each(function()
{
	$(this).data('from',50);
    $(this).data('to',100);
    $(this).countTo();
});
*/