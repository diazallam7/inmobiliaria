import { useState } from 'react';
import { GrFormDown, GrLocation, GrFormUp } from 'react-icons/gr';

export function SearchLocation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = (event: React.MouseEvent) => {
        event.stopPropagation(); // Evita que otros eventos interfieran
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer"
            onClick={toggleDropdown}
        >
            <GrLocation />
            
            <div>
                <p>Localización</p>
                <p className="text-xs">Selecciona tu localización</p>
            </div>
            {isOpen ? <GrFormUp /> : <GrFormDown />}

            {isOpen && (
                <div 
                    className="absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0"
                    onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic en el menú
                >
                    <p className="cursor-pointer hover:bg-gray-200 p-1 rounded">Hernandarias</p>
                    <p className="cursor-pointer hover:bg-gray-200 p-1 rounded">Pdte Franco</p>
                    <p className="cursor-pointer hover:bg-gray-200 p-1 rounded">Ciudad del Este</p>
                </div>
            )}
        </div>
    );
}
