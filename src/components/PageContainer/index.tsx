import React from 'react';
import Loading from '../Loading';



import Sidebar from '../Sidebar';

import { Container } from './styles';

interface PageContainerProps {
  loading: boolean;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, loading = false }) => {
  return <div><Sidebar /><Container>{
    loading ? <Loading /> : <main>{children}</main>

  }</Container></div>
}


export default PageContainer;