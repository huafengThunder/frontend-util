import requests from '@/utils/request';
export function getList(id) {
    return requests({
        url: '/feutil/memorandum/' + id,
        method: 'get',
    });
}

export function updateItem(id, payload) {
    return requests.patch('/feutil/memorandum/' + id, payload, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export function addItem(payload) {
    return requests.post('/feutil/memorandum', payload);
}

export function delItem(id) {
    return requests.delete(`/feutil/memorandum/${id}`);
}
