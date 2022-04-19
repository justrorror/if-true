/**
 * Prepare
 */
const typeRegExp = /object|\s|\[|]/g

/**
 * @param value { Any }
 *
 * @returns String
 *
 * @private
 */
function getObjectType(value?: any): string {
    return Object.prototype.toString.call(value).replace(typeRegExp, '')
}

/**
 * Checking a value for type Number
 *
 * @param value { Any }- Value to check
 * @param options { Object } - Additional options to check
 *
 * options.float - value is float. Default <false>
 * options.int - value is int. Default <false>
 *
 * @returns Boolean
 *
 * @public
 */
export function ifNumber(value?: any, options?: Object): boolean {
    let isNumber = false

    if (getObjectType(value) !== 'Number') {
        return false
    } else {
        isNumber = true
    }

    return isNumber
}
