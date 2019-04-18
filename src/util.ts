interface BaseDAO {
    (data?: object | Array<string | undefined>, message?: string, rest?:object): Object
}
/**
 * 返回成功
 * @param data 
 * @param message 
 */
export const success: BaseDAO = (data = [], message = '获取数据成功',...rest) => {
    return {
        success: true,
        data,
        message,
        ...rest
    }
}
/**
 * 返回失败
 * @param data 
 * @param message 
 */
export const fail: BaseDAO = (data = [], message = '获取数据失败',...rest) => {
    return {
        success: false,
        data,
        message,
        rest
    }
}