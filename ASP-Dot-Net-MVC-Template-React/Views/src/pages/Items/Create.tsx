import { useState } from 'react';
import Modal from '../../components/ui/Modal';
import Button from '../../components/ui/Button';
import Input from '../../components/forms/Input';
import Checkbox from '../../components/forms/Checkbox';
import { FaHashtag, FaUser, FaCalendar, FaLeaf } from 'react-icons/fa';
import { useItems } from '../../hooks/useItems';
import type { Item } from '../../types/Item';

export default function CreateItem() {
    const { createItem } = useItems();
    const [isOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState<Item>({
        sampleString: '',
        sampleNumber: 0,
        sampleDecimal: 0,
        sampleDouble: 0,
        sampleFloat: 0,
        sampleBool: false,
        sampleCharacter: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, value, checked } = e.target;
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = async () => {
        await createItem(form);
        setIsOpen(false);
    };

    return (
        <div>
            <Button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white">
                Open Modal
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Create New Item"
                footer={
                    <>
                        <Button onClick={() => setIsOpen(false)} className="bg-gray-300">Cancel</Button>
                        <Button onClick={handleSubmit} className="bg-blue-500 text-white">Save</Button>
                    </>
                }
            >
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input name="sampleString" placeholder="Sample String" type="text" value={form.sampleString} onChange={handleChange} icon={FaUser} />
                    <Input name="sampleNumber" placeholder="Sample Number" type="number" value={form.sampleNumber} onChange={handleChange} icon={FaHashtag} />
                    <Input name="sampleDecimal" placeholder="Sample Decimal" type="number" value={form.sampleDecimal} onChange={handleChange} icon={FaCalendar} />
                    <Input name="sampleDouble" placeholder="Sample Double" type="number" value={form.sampleDouble} onChange={handleChange} icon={FaHashtag} />
                    <Input name="sampleFloat" placeholder="Sample Float" type="number" value={form.sampleFloat} onChange={handleChange} icon={FaHashtag} />
                    <Checkbox name="sampleBool" checked={form.sampleBool} onChange={handleChange} label="Sample Bool" />
                    <Input name="sampleCharacter" placeholder="Sample Character" value={form.sampleCharacter} onChange={handleChange} icon={FaLeaf} />
                </form>
            </Modal>
        </div>
    );
}
