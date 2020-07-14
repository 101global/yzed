import React, { useContext, useEffect, useState } from 'react';

import ExperienceLayout from '../../components/pageLayouts/ExperiencePage/ExperienceLayout';
import Layout from '../../components/ReusableComponents/Layouts/MainBodyLayout';

const experience = ({ user }) => {
  console.log(user);
  return (
    <Layout title='YZED Experience'>
      <ExperienceLayout user={user} />
    </Layout>
  );
};

export default experience;
