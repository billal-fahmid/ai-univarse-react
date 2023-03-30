import React from 'react';

const Modal = (props) => {
    // console.log(props.singleData)
    // const {  accuracy,features,integrations, input_output_examples, pricing } = props.singleData;
    const {  image_link ,description,features,integrations} = props.singleData;
    // console.log(features)
    // console.log(Object.values(features || {}))
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box w-11/12 max-w-5xl">

                    <div className="card lg:card-side bg-base-100 ">
                        <div className="card-body flex flex-row">
                            <div className='w-1/2'>
                            <h2 className="card-title">{description ? description : 'no data'}</h2>
                                <div className='flex justify-between mt-12'>
                                <div>
                                    <h2 className="card-title">Features</h2>
                                    {
                                        Object.values(features || {}).map(fea => <li>{fea.feature_name? fea.feature_name : 'no data'}</li>)
                                    }
                                </div>
                                <div>
                                    <h2 className="card-title">integrations</h2>
                                    {
                                        
                                       integrations && integrations.map(inte=> <li>{inte? inte:'no data'}</li>)
                                    }
                                </div>
                                </div>
                                
                            </div>
                            
                            <div className='w-1/2'>
                            <figure><img src={image_link[0] ? image_link[0] : 'no image'} alt="Album" /></figure>
                            </div>
                        </div>
                    </div>



                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;