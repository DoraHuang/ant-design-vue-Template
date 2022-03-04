import axios from 'axios';
// Common api
const commonRequest = axios.create({
    baseURL: '/api/Common',
});

//Common
export const uPlanningVersionApi = (data) => commonRequest.get('/UplanningVersion');


export const updateVersionApi = (data) => {
    return commonRequest.post('/UplanningVersion/Update', data);
};

export const getProdIdApi = (id) => {
    return commonRequest.get('/GetProdId', { params: { parentid: id } });
};
export const getProdIdForBackUpApi = (id) => {
    return commonRequest.get('/GetProdIdForBackUp', { params: { parentid: id } });
};

export const getLayerForBackUpApi = (id) => {
    return commonRequest.get('/GetLayerForBackUp', { params: { parentid: id } });
};
export const getStageForBackUpApi = (id) => {
    return commonRequest.get('/GetStageForBackUp', { params: { parentid: id } });
};
export const getStepForBackUpApi = (id) => {
    return commonRequest.get('/GetStepForBackUp', { params: { parentid: id } });
};
export const getProdGroupForBackUpApi = (id) => {
    return commonRequest.get('/GetProdGroupForBackUp', { params: { parentid: id } });
};
export const getLayerApi = (id) => {
    return commonRequest.get('/GetLayer', { params: { parentid: id } });
};
export const getStageApi = (id) => {
    return commonRequest.get('/GetStage', { params: { parentid: id } });
};
export const getStepApi = (id) => {
    return commonRequest.get('/GetStep', { params: { parentid: id } });
};

export const getProdRouteApi = (id) => {
    return commonRequest.get('/GetProdRoute');
};
export const exportWSDemandTemplateExportFileApi = () => {
    return commonRequest.get('/WSDemandTemplateExportFile', { responseType: 'blob' });
};
export const exportDemandTemplateExportFileApi = () => {
    return commonRequest.get('/DemandTemplateExportFile', { responseType: 'blob' });
};