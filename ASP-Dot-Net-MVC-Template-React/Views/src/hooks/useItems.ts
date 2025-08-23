import { useState, useEffect } from 'react';
import api from '../libs/api';
import type { Item } from '../types/Item';

export function useItems() {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchItems = async () => {
        try {
            const res = await api.get<Item[]>('/item');
            setItems(res.data);
        } catch (err: unknown) {
            if (isAxiosError(err)) {
                if (err.response?.status === 401 || err.response?.status === 403) {
                    console.error('Unauthorized. Please login.');
                } else {
                    console.error('Fetch Items Error:', err.message);
                }
            } else {
                console.error('Unknown Fetch Items Error:', err);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchItems(); }, []);

    const createItem = async (item: Item) => {
        try {
            const res = await api.post<Item>('/item', item);
            setItems(prev => [...prev, res.data]);
        } catch (err: unknown) {
            if (isAxiosError(err)) {
                if (err.response?.status === 401 || err.response?.status === 403) {
                    console.error('Unauthorized. JWT missing or invalid.');
                } else {
                    console.error('Create Item Error:', err.message);
                }
            } else {
                console.error('Unknown Create Item Error:', err);
            }
        }
    };

    const updateItem = async (id: number, item: Item) => {
        try {
            await api.put(`/item/${id}`, item);
            setItems(prev => prev.map(i => i.id === id ? { ...i, ...item } : i));
        } catch (err: unknown) {
            if (isAxiosError(err)) {
                if (err.response?.status === 401 || err.response?.status === 403) {
                    console.error('Unauthorized. JWT missing or invalid.');
                } else {
                    console.error('Update Item Error:', err.message);
                }
            } else {
                console.error('Unknown Update Item Error:', err);
            }
        }
    };

    const deleteItem = async (id: number) => {
        try {
            await api.delete(`/item/${id}`);
            setItems(prev => prev.filter(i => i.id !== id));
        } catch (err: unknown) {
            if (isAxiosError(err)) {
                if (err.response?.status === 401 || err.response?.status === 403) {
                    console.error('Unauthorized. JWT missing or invalid.');
                } else {
                    console.error('Delete Item Error:', err.message);
                }
            } else {
                console.error('Unknown Delete Item Error:', err);
            }
        }
    };

    return { items, loading, fetchItems, createItem, updateItem, deleteItem };
}


function isAxiosError(err: unknown): err is import('axios').AxiosError {
    return typeof err === 'object' && err !== null && 'isAxiosError' in err;
}
