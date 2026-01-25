import React, { useEffect } from 'react'
import { fetchPhotos, fetchVideos } from '../api/mediaApi'
import { setQuery, setLoading, setError, setResult } from '../Redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'

const ResultGrid = () => {
    const dispatch = useDispatch();
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

    const getData = async () => {
        try {
            let data = []

            if (activeTab == 'photos') {
                let res = await fetchPhotos(query)
                data = res.results.map((item) => {
                    return {
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full
                    }
                })
            }

            if (activeTab == 'videos') {
                let res = await fetchVideos(query)
                data = res.videos.map((item) => {
                    return {
                        id: item.id,
                        type: 'video',
                        title: item.user.name || "video",
                        thumbnail: item.image,
                        src: item.video_files[0].link
                    }
                })
            }

            // if(activeTab == 'gifs') {
            //     data= await fetchPhotos(query)
            // }

            dispatch(setResult(data))
        } catch (error) {
            dispatch(setError(error))
        }
    }

    useEffect(() => {
        getData()
    }, [query, activeTab])

    if (error) return <h1>Error ... </h1>
    if (loading) return <h1>Loading ... </h1>

    return (
        <div className='columns-1 gap-4 sm:columns-2 lg:columns-3'>
            {
                results.map((item, index) => {
                    return (
                        <div key={index}>
                            <ResultCard item={item} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ResultGrid