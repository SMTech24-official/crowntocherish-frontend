import LogIn from '@/components/auth/Login';
import React from 'react';

const page = () => {
    return (
        <div>
            <LogIn csrfToken='credentials' />
        </div>
    );
};

export default page;