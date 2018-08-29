function who(name) {
    console.log(`I am ${name}.`);
}

function execute(func, val) {
    func(val);
}

execute(who, "Uma");

execute(function (v) {
    console.log(`I am ${v} from(Anonymous function)`)
}, "Shankar");