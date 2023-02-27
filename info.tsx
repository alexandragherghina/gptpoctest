

import React from 'react';
import * as S from './info.styles';

export const info = ({
  name,
  accDate,
  accNumber,
  currentAmount,
  isLoading,
  span = 'column'
}: Props) => {
  return (
    <S.infoContainer className="info" span={span}>
      {isLoading ? (
        <h3>Loading</h3>
      ) : (
        <>
          {name && <S.Name>{name}</S.Name>}
          {accDate && accNumber && (
            <S.Info>
              {accDate} • {accNumber}
            </S.Info>
          )}
          {currentAmount && <S.Amount>{currentAmount}</S.Amount>}
        </>
      )}
    </S.infoContainer>
  );
};

type Props = {
  name?: string;
  accDate?: string;
  accNumber?: string;
  currentAmount?: string;
  span?: 'row' | 'column';
  isLoading?: Boolean;
};
