import React, { useEffect, useState } from 'react';

export const OpenGraphReader = props => {
    const [ thumbnailUrl, setThumbnail ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ isLoading, setIsLoading ] = useState(true);
    const [ hasError, setHasError ] = useState(false);
    
    useEffect(() => {
        Meteor.call('getOpenGraphData', { url: props.url }, (error, response) => {
            if (!error) {
                response.ogImage && setThumbnail(response.ogImage.url);
                setDescription(response.ogDescription);
            } else {
                setHasError(true);
            }
            
            setIsLoading(false);
        });
    }, []);
    
    if (isLoading) {
        return null;
    }
    
    return (
        <div className={`og-reader ${hasError ? 'error' : ''}`}>
            {hasError ?
                <span>
                    Error fetching website data
                </span>
                :
                <>
                    {thumbnailUrl && <img src={thumbnailUrl} />}
                    {description && <p className="description">{description}</p>}
                </>
            }
        </div>
    );
}
