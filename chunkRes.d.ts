/**
 * 微信http流式响应处理
 * ```
 * // Example:
 * const chunkRes = ChunkRes()
 * // can`t use ref() to save task; it will lost task info
 * const task = wx.request({
 *  //...other params
 *  enableChunked: true,
 *  success: (res) => {
 *    const lastResTexts:string[] | undefined = chunkRes.onComplateReturn()
 *    // dosomething
 *   }
 * })
 * task.onChunkReceived(res => {
 *   const resTexts:string[] | undefined = chunkRes.onChunkReceivedReturn(res)
 *   // dosomething
 * })
 * ```
 * @returns
 */
export declare const ChunkRes: () => {
    getChunkText: (data: any) => any;
    onChunkReceived: (res: any, onSuccess: (value: string[]) => void) => void;
    onChunkReceivedReturn: (res: any) => string[] | undefined;
    onComplateReturn: () => string[] | undefined;
    onComplate: (onSuccess: (value: string[]) => void) => void;
};
