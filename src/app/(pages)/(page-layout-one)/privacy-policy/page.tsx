import PrivacyPolicyMain from '@/components/pages/page-layout-one/privacy-policy/PrivacyPolicyMain';
import Wrapper from '@/layout/DefaultWrapper';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Privacy And Policy - Reliable College",
};

const PrivacyPolicy = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <PrivacyPolicyMain />
                </main>
            </Wrapper>
        </>
    );
};

export default PrivacyPolicy;