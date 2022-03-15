import { describe } from "riteway";

import { add } from "../src/add";

describe("add", async assert => {

    assert({
        given: "two numbers",
        should: "calculate the addition of the given numbers",
        actual: add(1)(2),
        expected: 3
    });

});
