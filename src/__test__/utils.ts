/**
 * Created by tony on 2020/1/2
 */
export const sleep = (timeout = 0) => new Promise(resolve => setTimeout(resolve, timeout));
