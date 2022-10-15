import { randomPick, shuffle } from "../../lib/random";

describe('randomPick', () => {
    for (let offset = 1; offset < 100; offset++) {
        it(`randomPick: ${offset}`, () => {
            const oldArr = shuffle(new Array(offset).fill(1).map((_, index) => index + 1));
            const arr = [...oldArr]
            const random = randomPick(arr);
            console.info(random)
            expect(random).toEqual(oldArr[oldArr.length - 1]);
        });
    }
})