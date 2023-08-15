import { addPhoto, updatePhoto } from 'features/Photo/photoSlide';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Banner from '../../../../components/Banner';
import PhotoForm from '../../components/PhotoForm';
import './styles.scss';
import { randomNumber } from 'Utils/Common';

AddEditPage.propTypes = {

};

function AddEditPage(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { photoId } = useParams()
    console.log({ photoId })
    const isAddMode = !photoId

    const editedPhoto = useSelector(state => {
        const foundPhoto = state.photos.find(x => x.id === +photoId)
        console.log({ photoId, foundPhoto})
        return foundPhoto;
    })
    console.log({editedPhoto, photoId})
    const initialValues = isAddMode ? {title: '', categoryId: null, photo: ''} : editedPhoto;



    const handleSubmit = (values) => {

        return new Promise((resolve) => {
            console.log('form submit', values)

            // setTimeout(() => {
            //     if(isAddMode) {
            //         const newPhoto = {
            //             ...values,
            //             id: randomNumber(10000, 99999)
            //         }
    
            //         const action = addPhoto(newPhoto)
            //         console.log({ action })
            //         dispatch(action)
            //         return
            //     }else {
            //         const action = updatePhoto(values)
            //         dispatch(action)
            //     }

            //     navigate('/photos')
            //     resolve(true)
            // }, 2000)

            setTimeout(() => {
                if(isAddMode) {
                    const newPhoto = {
                        ...values,
                        id: randomNumber(10000, 99999)
                    }
                    const action = addPhoto(newPhoto);
                    console.log({action})
                    dispatch(action)
                    
                    navigate('/photos')
                    return
                } else {
                    const action = updatePhoto(values)
                    dispatch(action)
                    navigate('/photos')
                }

                // const newPhoto = {
                //     ...values,
                //     id: randomNumber(10000, 99999)
                // }
                // const action = addPhoto(newPhoto);
                // console.log({action})
                // dispatch(action)



            },2000)


        })
    }
    return (
        <div className="photo-edit">
            <Banner title='Pick your amazing photo' />

            <div className="photo-edit__form">
                <PhotoForm 
                    onSubmit={handleSubmit}
                    initialValues={initialValues}
                    isAddMode={isAddMode}
                />
            </div>
        </div>
    );
}

export default AddEditPage;