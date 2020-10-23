import React from 'react';
import Loading from '../Loading';

import Sidebar from '../Sidebar';

import { Container } from './styles';

interface PageContainerProps {
  loading: boolean;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, loading = false }) => {

  if (loading) {
    return <Loading />
  }
  return <>
    <Sidebar />
    <Container><main>
      {children}</main></Container>
  </>

}

export default PageContainer;