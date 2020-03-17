import base from './base'; // 导入接口域名列表
import axios from '@/request/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const article = {    
    articleList () {        
        return axios.get(`${base.base_url}/mark`);    
    },    
    articleDetail (id, params) {        
        return axios.get(`${base.base_url}/topic/${id}`, {            
            params: params        
        });    
    },
    login (params) {        
        return axios.post(`${base.base_url}/accesstoken`, qs.stringify(params));    
    }
    // 其他接口…………
}

export default article;
