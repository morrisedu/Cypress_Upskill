const browsers = {
    CHROME: "chrome",
    FF: "FireFox",
    EDGE: "Microsoft Edge",
    OPERA: "Opera",
    BRAVE: "Brave",
    SAFARI: "Safari",
}

let browser = "CHROME";

function execute() {
    switch (browser) {
        case browsers.CHROME:
            console.log("Execute Chrome");
            break;
        case browsers.BRAVE:
            console.log("Execute Brave");
            break;
        case browsers.SAFARI:
            console.log("Execute Safari");
            break;
        default:
            console.error("Invalid browser");
    }
}

execute();