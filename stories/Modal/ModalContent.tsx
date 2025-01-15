import React from 'react';

interface ModalContentProps {
    children: React.ReactNode;
}

export function ModalContent({ children }: ModalContentProps) {
    return (
        <div>
            {children}
        </div>
    )
}

function ModalContentDeletion() {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">etes vous sur de vouloir supprimer ce produit ?</h1>
            <div className="flex gap-2 items-center">
                <img src="https://placehold.co/40" alt="product" />
                <p className="text-sm text-gray-500">Vous ne pourrez plus le récupérer une fois supprimé</p>
            </div>
        </div>
    )
}

ModalContent.Deletion = ModalContentDeletion;