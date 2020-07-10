import React, { useContext, useEffect, useState } from 'react';

import ExperienceLayout from '../../components/pageLayouts/ExperiencePage/ExperienceLayout';
import Layout from '../../components/ReusableComponents/Layouts/MainBodyLayout';

const experience = () => {
  return (
    <Layout title='YZED Experience'>
      <ExperienceLayout />
    </Layout>
  );
};

export default experience;
