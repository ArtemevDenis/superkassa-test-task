import React from 'react';

export const useClassNameBuilder = () => {
    const classNameBuilder = (...arr) => {
        return arr.join(' ')
    }
    return {classNameBuilder}
};
