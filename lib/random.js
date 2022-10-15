/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns 函数返回一个大于等于 min，小于 max 的随机整数
 */
export function randomInt(min, max) {
    const p = Math.random();
    // TODO: 理解线性插值
    return Math.floor(min * (1 - p) + max * p);
}

// 随机选出数组中的一个元素，第一次调用必定返回最后一项
/**
 * @param {Array<string>} arr 
 * @returns
 */
export function randomPick(arr) {
    const len = arr.length - 1;
    const index = randomInt(0, len);
    [arr[index], arr[len]] = [arr[len], arr[index]];
    return arr[index];
}

/**
 * @template T
 * @param {Array<T>} arr 
 * @returns 
 */
export function shuffle(arr) {
    const result = [...arr];
    let m = arr.length, i;
    while (m) {
        i = (Math.random() * m--) >>> 0;
        [result[m], result[i]] = [result[i], result[m]]
    }
    return result;
}