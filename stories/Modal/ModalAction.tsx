import { button } from 'framer-motion/client';
import React from 'react';

interface ModalActionProps {
    children: React.ReactNode;
}

export function ModalAction({ children }: ModalActionProps) {
    return (
        <div className="flex justify-end">
            {children}
        </div>
    )
}

interface ModalActionDeleteProps {
    onCancel: () => void;
    onDelete: () => void;
}

const ModalActionDelete = ({ onCancel, onDelete }: ModalActionDeleteProps) => {
    return (
        <div className="flex justify-end gap-2">
            <button onClick={onCancel}>Annuler</button>
            <button className="bg-red-500 text-white p-2 rounded-md" onClick={onDelete}>Supprimer</button>
        </div>
    )
}


ModalAction.Delete = ModalActionDelete;