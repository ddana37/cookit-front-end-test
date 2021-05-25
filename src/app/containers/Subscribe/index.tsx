import * as React from 'react';
import styled from 'styled-components/macro';
import { NavBar } from 'app/containers/NavBar';
import { Helmet } from 'react-helmet-async';
import { StyleConstants } from 'styles/StyleConstants';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

import { FormLabel } from 'app/components/FormLabel';
import { Input } from 'app/components/Input';
import { Button } from 'app/components/Button';
import { useNavigation } from '../../controllers/navigation';
import { isValidEmail, isValidPostalCode } from '../../../utils/validation';
import { useEffect, useState } from 'react';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { initialState, userSubscribed } from 'store/subscribe_slice';
import { RootState } from '../../../types';

export function Subscribe() {
    const { t } = useTranslation();
    const { navigateTo } = useNavigation();
    const dispatch = useDispatch();

    //setting ajax url
    const deliveryZoneURL =
        'https://us-central1-interview-zip-code.cloudfunctions.net/zipTest';

    //initializing form inputs
    const [email, setEmail] = useState('');
    const [postalCode, setPostalCode] = useState('');

    //setting errors
    const [emailError, setEmailError] = useState('');
    const [postalCodeError, setPostalCodeError] = useState('');

    const formState = useSelector((state: RootState) => state.formData);

    useEffect(() => {
        if (formState) setFormData(formState);
    }, [formState]);

    const [formData, setFormData] = useState(initialState.formData);

    //initializing from validation
    const isFormValid = isValidPostalCode(postalCode) && isValidEmail(email);

    /**
     * METHOD onChangeHandler - handling onChane for form input fields
     * @param e - event
     */
    const onChangeHandler = e => {
        //setting form values
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setEmail(formData.email);
        setPostalCode(formData.postalCode);

        //checking form values
        validateForm();
    };

    /**
     * METHOD - onBlurHandler - handling onBlur for postalCode
     * @param e
     */
    const onBlurHandler = e => {
        const name = e.target.name;
        setPostalCode(formData.postalCode);
        if (name === 'postalCode' && postalCode && postalCodeError.length === 0) {
            checkDeliveryState();
        } else {
            validateForm();
        }
    };

    /**
     * METHOD checkDeliveryState - checking if postal code is in deliverable zone
     */
    const checkDeliveryState = () => {
        axios
            .get(deliveryZoneURL, {
                params: { zip: formData.postalCode.toUpperCase() },
            })
            .then(response => {
                response.data.is_deliverable
                    ? setPostalCodeError('')
                    : setPostalCodeError(
                    t(translations.subscribe.form['errorMessages'].noDelivery),
                    );
            })
            .catch(error => console.error(error));
    };

    /**
     * METHOD validateForm - validating form inputs
     */
    const validateForm = () => {
        //validating email format
        if (!isValidEmail(email)) {
            setEmailError(
                t(translations.subscribe.form['errorMessages'].invalidEmailFormat),
            );
        } else {
            setEmailError('');
        }

        //validating postalcode format
        if (!isValidPostalCode(postalCode)) {
            setPostalCodeError(
                t(translations.subscribe.form['errorMessages'].invalidPostalFormat),
            );
        } else {
            setPostalCodeError('');
        }
    };

    /**
     * METHOD submitHandler - handling form submit - redirecting to confirmation page
     * @param e
     */
    const submitHandler = e => {
        e.preventDefault();

        if (isFormValid) {
            dispatch(userSubscribed(formData));
            navigateTo('confirm');
        }
    };

    return (
        <>
            <Helmet>
                <title></title>
                <meta name="description" content="" />
            </Helmet>
            <NavBar />
            <Wrapper>
                <h1>{t(translations.subscribe.title)}</h1>
                <Form onSubmit={submitHandler}>
                    <FormLabel htmlFor="email">
                        {t(translations.subscribe.form.email)}
                    </FormLabel>
                    <Input type="text" name="email" onChange={onChangeHandler} />

                    {emailError.length > 0 ? (
                        <div>
                            <span>{emailError}</span>
                        </div>
                    ) : null}

                    <FormLabel htmlFor="postalCode">
                        {t(translations.subscribe.form.postalCode)}
                    </FormLabel>
                    <Input
                        type="text"
                        name="postalCode"
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                    />

                    {postalCodeError.length > 0 ? (
                        <div>
                            <span>{postalCodeError}</span>
                        </div>
                    ) : null}

                    <Button type="submit" disabled={!isFormValid} onClick={submitHandler}>
                        {t(translations.subscribe.form.submit)}
                    </Button>
                </Form>
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

const Form = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;
