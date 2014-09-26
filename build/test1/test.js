var test1;
(function (test1) {
    var Main = (function () {
        function Main() {
            $($.proxy(this.onDomLoaded, this));
        }
        Main.prototype.onDomLoaded = function () {
            jQuery('body').html('<h1>DOM loaded.</h1>');
        };
        Main.instance = new Main();
        return Main;
    })();
    test1.Main = Main;
})(test1 || (test1 = {}));
