const demo_obj = {
    name: "john",
    class: "mca",
    demo_objfn: function() {
        return this.name + " " +
            this.class
    }
}
console.log(demo_obj.name, demo_obj.demo_objfn())