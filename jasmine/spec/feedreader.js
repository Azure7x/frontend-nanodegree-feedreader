
$(function() {
   
    describe('RSS Feeds', function() {
       
        // this test checks the allFeeds array to make sure its defined and the size is bigger than zero
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        //this test makes sure all the feeds in the allFeeds array have a URL and that it's not empty
         it('check url', function() {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
             }
         });

        //this test makes sure each feed in the allFeeds array have a name and are not empty
         it('check name', function() {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
             }
         });
    });

    describe('The menu', function() {

         //this test makes sure that the menu is hidden by default
         it('checks if menu is hidden by default', function() {
            
            //updated jasmin to 3.0.0 to be able to use the toHaveClass function
            expect($('body')[0]).toHaveClass('menu-hidden');
         });

         //this test checks that when the menu icon is clicked it either hides or shows the menu
          it('checks if menu icon is clicked', function() {
            $('.menu-icon-link').trigger('click');

            expect($('body')[0]).not.toHaveClass('menu-hidden');

            $('.menu-icon-link').trigger('click');

            expect($('body')[0]).toHaveClass('menu-hidden');
          });
        });

    describe('Initial Entries', function() {

        //loads the feed
         beforeEach(function(done) {
            loadFeed(0,function() {
            done();
            });
        });
    
        //this test makes sure there is at least one entry in the feed when the loadFeed function finishes its work 
        it('check to see if there is at least one entry in feed', function(done) {

            expect($('.feed .entry').length).not.toBe(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
        let firstTitle;
        let secondTitle;


        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */


        // completed this section with some help from this article: https://medium.com/letsboot/testing-javascript-with-jasmine-basics-48efe03cf973
        // this part loads one feed, saves it to a variable then loads a new feed
         beforeEach(function(done) {

            loadFeed(0,function() {

                firstTitle = $('.feed').html();
                console.log(firstTitle);

                loadFeed(2,function() {
                    
                    console.log(secondTitle);
                    done();
                }); 
            });
        });
    
        //this test makes sure the new loaded feed has different content than the first feed
        it('ensure content changes when new feed is loaded', function(done) {

            secondTitle = $('.feed').html();
            expect(firstTitle).not.toBe(secondTitle);
            console.log(firstTitle + ' ' + secondTitle);
            done();
        });
    });
}());
