import React from 'react';
import styled from 'styled-components/native';
import LogoImg from '../../../assets/images/logo.svg';
import config from '..//../../assets/config.json';

export const Container = styled.SafeAreaView`
  background-color: ${config.colors.primary};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(LogoImg)``;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 10%;
`;
