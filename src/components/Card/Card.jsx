import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [datas, setDatas] = useState([]);
    const [showAll, setShowAll] = useState(false)
    const [uniqueId ,setUniqueId] = useState()
    const [singleData, setSingleData] = useState({})
    // console.log(singleData)
    // console.log(datas)
    const handleShowAll = () => {
        setShowAll(true)
    }
    const handleSort =()=>{
        const sortData = datas.sort((a,b)=>{
            return new Date(b.published_in) - new Date(a.published_in)
        })
        setDatas([...datas,sortData])
    }

    useEffect(() =>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
            .then(res => res.json())
            .then(data => setSingleData(data))
    },[uniqueId])

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
            .then(res => res.json())
            .then(data => setDatas(data.data.tools))
    }, [])
    return (
        <>
        <span>
        <Button onClick={handleSort}>Sort By Date </Button>
        </span>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-12 mt-16'>

                {datas.slice(0, showAll ? 12 : 6).map(data => <SingleData singleData={data} key={data.id} setUniqueId={setUniqueId}></SingleData>)}
            </div>
            {!showAll && (
                <span onClick={() => handleShowAll()}>
                    <Button>See More</Button>
                </span>
            )
            }
            <Modal singleData={singleData.data}></Modal>
        </>
    );
};

export default Card;