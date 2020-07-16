import React, { useContext, useEffect, useState } from 'react';

import ExperienceLayout from '../../components/pageLayouts/ExperiencePage/ExperienceLayout';
import Layout from '../../components/ReusableComponents/Layouts/MainBodyLayout';
import AuthorizationCheck from '../../components/ReusableComponents/Layouts/AuthorizationCheck';

const experience = ({ user }) => {
  console.log(user);
  return (
    <AuthorizationCheck user={user} permissions={['ADMIN', 'USER']}>
      <Layout title='YZED Experience'>
        <ExperienceLayout user={user} />
      </Layout>
    </AuthorizationCheck>
  );
};

export default experience;
