import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hook/useAxiosSecure";

const Payment = () => {
    const { parcelId } = useParams();
    const axiosSecure = useAxiosSecure();

    const { isLoading, data: parcel } = useQuery({
        queryKey: ["parcel", parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${parcelId}`);
            return res.data;
        }
    })


    if (isLoading) {
        return <div className='flex-1 min-h-screen min-w-full flex items-center justify-center'>
            <span className="loading loading-ring loading-xl"></span>
        </div>
    }


    // handle payment
    const handlePayment = async () => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName: parcel.parcelName,
        }

        const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
        console.log(res.data)
        window.location.href = res.data.url;


    }


    return (
        <div>
            <h2>Please Pay : ${parcel.cost} for : {parcel.parcelName}</h2>
            <button onClick={handlePayment} className="btn bg-primary">Pay</button>
        </div>
    );
};

export default Payment;