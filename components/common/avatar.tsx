import React from 'react'
export const Avatar: React.FC<{ name: string }> = ({ name }): JSX.Element => <div className="text-gray-500">{name}</div>;

