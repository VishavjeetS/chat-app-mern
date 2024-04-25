import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const useGetConversations = () => {
    const [loading, setLoading] = React.useState(false);
    const [conversations, setConversations] = React.useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/users");
                const data = await res.json();
                if(data.error) throw new Error(data.error);
                setConversations(data);
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        getConversations();
    }, []);

    return { loading, conversations };
}

export default useGetConversations;