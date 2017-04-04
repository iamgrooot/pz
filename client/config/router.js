FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "home"});
    }
});

FlowRouter.route('/404', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "404"});
    }
});

FlowRouter.route('/about', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "about"});
    }
});

FlowRouter.route('/blog', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "blog"});
    }
});

FlowRouter.route('/cart', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "cart"});
    }
});

FlowRouter.route('/category', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "category"});
    }
});

FlowRouter.route('/checkout', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "checkout"});
    }
});

FlowRouter.route('/contact', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "contact"});
    }
});

FlowRouter.route('/faqs', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "faqs"});
    }
});

FlowRouter.route('/login', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "login"});
    }
});

FlowRouter.route('/product', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "product"});
    }
});

FlowRouter.route('/services', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "services"});
    }
});