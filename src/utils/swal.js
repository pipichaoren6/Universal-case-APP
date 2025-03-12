// src/utils/swal.js
import Swal from 'sweetalert2'

/**
 * 成功弹窗
 * @param {string} title - 标题
 * @param {string} text - 内容
 * @param {string} confirmButtonText - 确认按钮文字
 */
export const successAlert = (title = '成功！', text = '', confirmButtonText = '确定') => {
    return Swal.fire({
        icon: 'success',
        title,
        text,
        confirmButtonText
    })
}

/**
 * 错误弹窗
 * @param {string} title - 标题
 * @param {string} text - 内容
 * @param {string} confirmButtonText - 确认按钮文字
 */
export const errorAlert = (title = '错误！', text = '', confirmButtonText = '确定') => {
    return Swal.fire({
        icon: 'error',
        title,
        text,
        confirmButtonText
    })
}

/**
 * 警告弹窗
 * @param {string} title - 标题
 * @param {string} text - 内容
 * @param {string} confirmButtonText - 确认按钮文字
 */
export const warningAlert = (title = '警告！', text = '', confirmButtonText = '确定') => {
    return Swal.fire({
        icon: 'warning',
        title,
        text,
        confirmButtonText
    })
}

/**
 * 自定义图片弹窗
 * @param {string} title - 标题
 * @param {string} imageUrl - 图片路径
 * @param {string} text - 内容
 * @param {string} confirmButtonText - 确认按钮文字
 */
export const imageAlert = (title = '', imageUrl = '', text = '', confirmButtonText = '确定') => {
    return Swal.fire({
        title,
        html: `
      <img src="${imageUrl}" style="width: 100px; height: auto; margin-bottom: 20px;">
      <p>${text}</p>
    `,
        confirmButtonText
    })
}

export const pm1Alert = (title = '', imageUrl = '', text = '', confirmButtonText = '确定') => {
    return Swal.fire({
        title: '嘿嘿',
        html: `
          <img src="/images/派蒙-流口水.png" style="width: 100px; height: auto; margin-bottom: 20px;">
          <p>前面的区域以后再来探索吧 </p>
        `,
        confirmButtonText: '确定'
    })
}
export const pm2Alert = (title = '', imageUrl = '', text = '', confirmButtonText = '确定') => {
    return Swal.fire({
        title: '交给派蒙吧！',
        html: `
          <img src="/images/派蒙-打响指.png" style="width: 100px; height: auto; margin-bottom: 20px;">
          <p>前面的区域以后再来探索吧 </p>
        `,
        confirmButtonText: '确定'
    })
}
export const pm3Alert = (title = '', imageUrl = '', text = '', confirmButtonText = '确定') => {
    return Swal.fire({
        title: '好耶',
        html: `
          <img src="/images/派蒙-找到宝箱.png" style="width: 100px; height: auto; margin-bottom: 20px;">
          <p>前面的区域以后再来探索吧 </p>
        `,
        confirmButtonText: '确定'
    })
}

/**
* 随机调用一个弹窗方法
*/
export const randomAlert = () => {
    // 随机选择一个方法
    const methods = [pm1Alert, pm2Alert, pm3Alert]
    const randomMethod = methods[Math.floor(Math.random() * methods.length)]
    return randomMethod()
}

// 默认导出
export default {
    successAlert,
    errorAlert,
    warningAlert,
    imageAlert,
    pm1Alert,
    pm2Alert,
    pm3Alert,
    randomAlert,
}