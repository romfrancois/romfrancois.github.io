import React from 'react';

type TabHeaderProps = {
    position: number,
    onClick: Function,
    label: string,
    className: string
}

const TabHeader = ({ label, className, onClick, position }: TabHeaderProps) => {
    return (
        <li key={label} className={className} onClick={() => onClick(position)}>
            {label}
        </li>
    );
};

export default TabHeader;
