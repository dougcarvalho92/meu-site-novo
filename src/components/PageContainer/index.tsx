import React from 'react';

import Sidebar from '../Sidebar';

import { Container } from './styles';
const PageContainer: React.FC = ({ children }) => {
  return <>
    <Sidebar />
    <Container>{children}</Container>
  </>

}

export default PageContainer;