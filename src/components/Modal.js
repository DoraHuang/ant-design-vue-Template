import { Modal, message } from 'ant-design-vue';
export function modalInfo(title, content) {
    return Modal.info({
        title: title,
        content: content,
    });
};
export function modalError(title, content) {
    return Modal.error({
        title: title,
        content: content,
    });
}
export function modalSuccess(title, content) {
    return Modal.success({
        title: title,
        content: content,
    });
}
export function messageSuccess(content) {
    return message.success(content);
};