/**
 * 功能说明：打包
 * Copyright Kanchil Technology (Tianjin) Co., Ltd.
 * 修订记录：
 * @Date 2018/2/27 15:33
 */
import axios from 'axios'
import JsZip from 'jszip'
import FileSaver from 'file-saver'
import moment from 'moment'
import {export_json_to_buffer} from '@/vendor/Export2Excel';
export default class ZipDownload
{
    /**
     * 实例化zipDown对象
     */
    constructor(){
        this.cache = {}
        this.zip = new JsZip()
    }

    /**
     * 下载文件
     * @param url
     * @param method
     * @return {Promise<any>}
     * @private
     */
    async _getDownFileByUrl(url , method = "GET") {
        return new Promise((resolve, reject) => {
            axios({
                method: method,
                url: url,
                responseType: 'arraybuffer'
            }).then(data => {
                resolve(data.data)
            }).catch(error => {
                reject(error.toString())
            })
        })
    }

    /**
     * 功能说明：添加远端文件到zip
     * @param files
     * @return {Promise<boolean>}
     */
    async downFile(files = []) {
        if (!(files instanceof Array)) {
            return false
        }
        for (let i = 0; i < files.length; i++) {
            let promise = await this._getDownFileByUrl(files[i]).then(data => {
                let arr_name = files[i].split('/');
                let file_name = arr_name[arr_name.length - 1]
                this.zip.file(file_name, data, { binary: true })
                this.cache[file_name] = data
            })
        }
    }

    /**
     * json 转 excel 添加到zip
     * @param th
     * @param jsonData
     * @param defaultTitle
     * @return {Promise<void>}
     */
    async excelFile(th, jsonData, defaultTitle){
        await export_json_to_buffer(th, jsonData, defaultTitle).then(data => {
            let file_name = data.title
            this.zip.file(file_name, data.data, { binary: true })
            this.cache[file_name] = data.data
        })
    }

    /**
     * 保存zip文件
     * @return {Promise<void>}
     */
    async saveFile() {
        await this.zip.generateAsync({ type: 'blob' }).then(content => {
            FileSaver.saveAs(content, '打包下载' + moment().format('X'))
        })
    }
}