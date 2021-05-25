import * as React from 'react';
import styled from 'styled-components/macro';
import { NavBar } from 'app/containers/NavBar';
import { Helmet } from 'react-helmet-async';
import { StyleConstants } from 'styles/StyleConstants';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

import { Button } from 'app/components/Button';
import { useNavigation } from '../../controllers/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '../../../types';
import { useEffect, useState } from 'react';
import { initialState, FormDataState } from 'store/subscribe_slice';

export function Confirm() {
  const { t } = useTranslation();
  const { navigateTo } = useNavigation();

  const formState = useSelector((state: RootState) => state.formData);

  useEffect(() => {
    if (formState) setFormData(formState);
  }, [formState]);

  const [formData, setFormData] = useState(initialState.formData);

  return (
    <>
      <Helmet>
        <title></title>
        <meta name="description" content="" />
      </Helmet>
      <NavBar />
      <Wrapper>
        <h1>{t(translations.confirmation.title)}</h1>
        <h2>
          {t(translations.subscribe.form.email)} : {formData.email}
        </h2>
        <h2>
          {t(translations.subscribe.form.postalCode)} : {formData.postalCode}
        </h2>

        <Wrapper>
          <div>
            <Button onClick={() => navigateTo('')}>
              {t(translations.confirmation.yes)}
            </Button>
            <Button onClick={() => navigateTo('subscribe')}>
              {t(translations.confirmation.no)}
            </Button>
          </div>
        </Wrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;
