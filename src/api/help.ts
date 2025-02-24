import request from '/@/utils/request'

export const getHelpTabsApi = () => request.get<any, HelpTabDTO[]>('/api/help/tabs')
