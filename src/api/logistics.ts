import request from '/@/utils/request'

export const weparcelPriceApi = (data: WeparcelPriceQueryDTO) => request.post<any, IRes<{ InuseList: LineFeeVO[] }>>('/weparcel/price', data)
