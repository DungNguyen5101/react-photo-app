import PropTypes from 'prop-types';

import { Button, FormGroup, Spinner } from 'reactstrap';

import RandomPhotoField from 'custom-fields/RandomPhotoField';
import { FastField, Form, Formik } from 'formik';
import * as yup from 'yup';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../Constants/global';
import InputField from '../../../../custom-fields/InputField';
import SelectField from '../../../../custom-fields/Select-field';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func
};

PhotoForm.defaultProps = {
    onSubmit: null,
}

function PhotoForm(props) {
    const {initialValues, isAddMode} = props

    const validationSchema = yup.object().shape({
        title: yup.string().required('this field is required'),

        categoryId: yup.number()
            .required('this field is required')
            .nullable(),

        photo: yup.string().required('this field is required')
    })
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const { values, errors, touched, isSubmitting} = formikProps
                console.log({ values, errors, touched})
                return(
                    <Form>
                        <FastField 
                            name="title"
                            component={InputField}

                            label="title"
                            placeholder="Eg: Wow nature ..."
                        
                        />

                        <FastField 
                            name="categoryId"
                            component={SelectField}

                            label="Category"
                            placeholder="What's your photo category"
                            options={PHOTO_CATEGORY_OPTIONS}
                        
                        />

                        <FastField
                            name='photo'
                            component={RandomPhotoField}
                            label="Photo"
                        />

                        <FormGroup>
                            <Button type='submit' color={isAddMode ? 'primary' : 'success'}>
                                {isSubmitting && <Spinner size='sm'/>}
                                {isAddMode ? 'Add to album' : 'update your photo'}
                            </Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
        
    );
}

export default PhotoForm;